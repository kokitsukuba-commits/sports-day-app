'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Event, getEvents } from '@/lib/data'
import AdminActionForm from '@/components/AdminActionForm' // 追加
import { updateWaitTimeAction } from '@/app/actions' // 追加

export default function Home() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // もしgetEventsがFirebaseを叩くように変更済みであればそのまま動作します
    setEvents(getEvents())
  }, [])

  const recommended = events.filter(event => event.waitTime < 20)

  // 更新処理
  const handleUpdate = async (eventId: string, passcode: string) => {
    const newTime = prompt("新しい待ち時間を入力してください")
    if (newTime) {
      await updateWaitTimeAction(eventId, newTime, passcode)
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.19),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%)]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* ヘッダー部分は変更なしのため省略 */}
        
        {/* 全ての種目セクション */}
        <section className="mb-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">全ての種目</h2>
              <p className="text-slate-600">待ち時間情報を一覧でチェックできます。</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map(event => (
              <div key={event.id} className="group rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:bg-cyan-50">
                {/* リンクエリア */}
                <Link href={`/event/${event.id}`} className="block mb-4">
                  <h3 className="text-xl font-bold text-slate-950">{event.name}</h3>
                  <p className="mt-3 text-slate-700">待ち時間: <span className="font-semibold text-slate-900">{event.waitTime}分</span></p>
                  <p className="mt-4 text-slate-500">{event.description}</p>
                </Link>

                {/* 管理者更新エリア（Linkの外に出しました） */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <AdminActionForm 
                    buttonText="更新"
                    onExecute={(passcode) => handleUpdate(event.id, passcode)} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* ナビゲーション等は変更なし */}
      </div>
    </div>
  )
}