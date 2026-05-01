'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Event, getEvents } from '@/lib/data'

interface Review {
  id: string
  text: string
  date: string
}

export default function EventDetail() {
  const params = useParams()
  const id = params.id as string
  const [event, setEvent] = useState<Event | null>(null)
  const [reviews, setReviews] = useState<Review[]>([
    { id: '1', text: '楽しかった！', date: '2024-04-28' },
  ])
  const [newReview, setNewReview] = useState('')
  const [passcode, setPasscode] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const loaded = getEvents()
    const found = loaded.find(item => item.id === id) ?? null
    setEvent(found)
  }, [id])

  const handleSubmitReview = () => {
    if (isAuthenticated && newReview.trim()) {
      const review: Review = {
        id: Date.now().toString(),
        text: newReview,
        date: new Date().toISOString().split('T')[0],
      }
      setReviews([...reviews, review])
      setNewReview('')
    }
  }

  const handlePasscodeSubmit = () => {
    if (passcode === '1234') {
      setIsAuthenticated(true)
    } else {
      alert('パスコードが間違っています')
    }
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="container mx-auto p-6">イベントが見つかりません</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-[40px] bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40">
          <h1 className="text-4xl font-bold text-cyan-300">{event.name}</h1>
          <p className="mt-4 text-slate-300">{event.description}</p>
          <p className="mt-2 text-slate-400">現在の待ち時間: <span className="font-semibold text-white">{event.waitTime}分</span></p>

          <section className="mt-10 rounded-[32px] bg-slate-800/90 p-6 shadow-lg shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-slate-100">地図</h2>
            <div className="mt-4 h-72 overflow-hidden rounded-3xl border border-slate-700">
              <iframe src={event.mapUrl} className="h-full w-full" />
            </div>
          </section>

          <section className="mt-10 rounded-[32px] bg-slate-800/90 p-6 shadow-lg shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-slate-100">口コミ</h2>
            <div className="mt-4 space-y-4">
              {reviews.map(review => (
                <div key={review.id} className="rounded-3xl bg-slate-950/90 p-4 text-slate-200 shadow-sm shadow-slate-950/10">
                  <p>{review.text}</p>
                  <p className="mt-2 text-sm text-slate-500">{review.date}</p>
                </div>
              ))}
            </div>

            {!isAuthenticated ? (
              <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                <p className="text-slate-400">口コミを投稿するにはパスコードが必要です。</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="password"
                    placeholder="パスコード"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none"
                  />
                  <button onClick={handlePasscodeSubmit} className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">認証</button>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                <textarea
                  placeholder="口コミを入力"
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none"
                  rows={4}
                />
                <button onClick={handleSubmitReview} className="mt-4 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">投稿する</button>
              </div>
            )}
          </section>

          <div className="mt-8 text-right">
            <Link href="/" className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-white/20">ホームに戻る</Link>
          </div>
        </div>
      </div>
    </div>
  )
}