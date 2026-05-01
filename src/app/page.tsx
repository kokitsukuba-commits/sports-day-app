'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Event, getEvents } from '@/lib/data'

export default function Home() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    setEvents(getEvents())
  }, [])

  const recommended = events.filter(event => event.waitTime < 20)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.19),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%)]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-10 rounded-[40px] bg-white/90 p-8 shadow-[0_40px_120px_-60px_rgba(16,24,40,0.75)] backdrop-blur-xl">
          <p className="mb-3 inline-flex rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-semibold text-fuchsia-700">筑波大学スポデー</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">待ち時間情報をリアルタイムでチェック</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">待ち時間の少ない種目をおすすめ表示。公式連絡や掲示板も使いやすくまとめました。</p>
        </header>

        <section className="mb-10 rounded-[32px] bg-slate-950/90 p-6 text-slate-100 shadow-xl shadow-slate-950/20">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">おすすめ種目</h2>
              <p className="text-slate-400">待ち時間が短い人気種目を大きく表示します。</p>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">最新更新: 公式管理者入力</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.length > 0 ? (
              recommended.map(event => (
                <Link key={event.id} href={`/event/${event.id}`} className="group block rounded-[28px] border border-cyan-500/20 bg-cyan-500/10 p-6 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/15">
                  <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-100">{event.name}</h3>
                  <p className="mt-3 text-lg text-slate-100">待ち時間: <span className="font-semibold">{event.waitTime}分</span></p>
                  <p className="mt-4 text-slate-300">詳細ページで地図・口コミを見る</p>
                </Link>
              ))
            ) : (
              <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 text-slate-300">現在おすすめ種目はありません。管理者が更新すると表示されます。</div>
            )}
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">全ての種目</h2>
              <p className="text-slate-600">待ち時間情報を一覧でチェックできます。</p>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-800">公式更新対応</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map(event => (
              <Link key={event.id} href={`/event/${event.id}`} className="group rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:bg-cyan-50">
                <h3 className="text-xl font-bold text-slate-950">{event.name}</h3>
                <p className="mt-3 text-slate-700">待ち時間: <span className="font-semibold text-slate-900">{event.waitTime}分</span></p>
                <p className="mt-4 text-slate-500">{event.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <nav className="flex flex-col gap-3 text-center sm:flex-row sm:justify-center">
          <Link href="/bulletin" className="rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">掲示板を見る</Link>
          <Link href="/announcements" className="rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">連絡事項を見る</Link>
        </nav>
      </div>
    </div>
  )
}