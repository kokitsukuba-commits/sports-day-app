'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BulletinPost, getBulletinPosts, saveBulletinPosts } from '@/lib/data'

const PARTICIPANT_PASSCODE = '5678'
const OFFICIAL_PASSCODE = 'official2026'

export default function Bulletin() {
  const [posts, setPosts] = useState<BulletinPost[]>([])
  const [newPost, setNewPost] = useState('')
  const [passcode, setPasscode] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isOfficialPost, setIsOfficialPost] = useState(false)

  useEffect(() => {
    setPosts(getBulletinPosts())
  }, [])

  const handleSubmitPost = () => {
    if (newPost.trim()) {
      const post: BulletinPost = {
        id: Date.now().toString(),
        text: newPost,
        date: new Date().toISOString().split('T')[0],
        isOfficial: isOfficialPost,
      }
      const updated = [...posts, post]
      setPosts(updated)
      saveBulletinPosts(updated)
      setNewPost('')
    }
  }
  
  const handlePasscodeSubmit = () => {
    if (passcode === PARTICIPANT_PASSCODE) {
      setIsAuthenticated(true)
      setIsOfficialPost(false)
      setPasscode('')
    } else if (passcode === OFFICIAL_PASSCODE) {
      setIsAuthenticated(true)
      setIsOfficialPost(true)
      setPasscode('')
    } else {
      alert('パスコードが間違っています')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 rounded-[40px] bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/50">
          <h1 className="text-4xl font-extrabold text-cyan-300">掲示板</h1>
          <p className="mt-3 text-slate-400">参加者や運営からのとっておきのお知らせを共有します。</p>
        </div>

        <section className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="rounded-[28px] border border-slate-700 bg-slate-900/90 p-5 shadow-lg shadow-slate-950/40">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${post.isOfficial ? 'bg-fuchsia-500 text-slate-950' : 'bg-slate-700 text-slate-200'}`}>
                  {post.isOfficial ? '公式情報' : '参加者投稿'}
                </span>
                <span className="text-sm text-slate-500">{post.date}</span>
              </div>
              <p className="text-slate-100">{post.text}</p>
            </div>
          ))}
        </section>

        <div className="mt-10 rounded-[32px] bg-slate-900/90 p-6 shadow-xl shadow-cyan-500/10">
          <h2 className="text-2xl font-semibold text-cyan-200">新しい投稿</h2>

          {!isAuthenticated ? (
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <input
                type="password"
                placeholder="投稿用パスコード"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none"
              />
              <button onClick={handlePasscodeSubmit} className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">認証</button>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              <div className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                現在の投稿モード: <span className="font-semibold text-cyan-300">{isOfficialPost ? '公式情報' : '参加者投稿'}</span>
              </div>
              <textarea
                placeholder="掲示板に投稿する内容を入力"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-slate-100 outline-none"
                rows={4}
              />
              <button onClick={handleSubmitPost} className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">投稿する</button>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
          <Link href="/" className="rounded-full border border-slate-700 bg-slate-950/90 px-5 py-3 transition hover:bg-slate-800">ホームに戻る</Link>
        </div>
      </div>
    </div>
  )
}