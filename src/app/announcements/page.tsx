'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Announcement, getAnnouncements } from '@/lib/data'

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  useEffect(() => {
    setAnnouncements(getAnnouncements())
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-fuchsia-100 text-slate-950 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 rounded-[40px] border border-slate-200 bg-white/90 p-8 shadow-[0_35px_110px_-35px_rgba(14,165,233,0.25)]">
          <h1 className="text-4xl font-extrabold text-slate-950">本部からのお知らせ</h1>
          <p className="mt-3 text-slate-600">最新の公式連絡をチェックしてください。</p>
        </div>

        <div className="space-y-5">
          {announcements.map(ann => (
            <div key={ann.id} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-cyan-700">{ann.title}</h3>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">{ann.date}</span>
              </div>
              <p className="text-slate-700">{ann.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">ホームに戻る</Link>
        </div>
      </div>
    </div>
  )
}