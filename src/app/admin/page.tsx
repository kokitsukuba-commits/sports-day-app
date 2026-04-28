'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Announcement, Event, getAnnouncements, getEvents, saveAnnouncements, saveEvents } from '@/lib/data'

const ADMIN_PASSCODE = 'admin2026'

export default function AdminPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [passcode, setPasscode] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [newEventName, setNewEventName] = useState('')
  const [newEventWaitTime, setNewEventWaitTime] = useState('')
  const [newEventDescription, setNewEventDescription] = useState('')
  const [newEventMapUrl, setNewEventMapUrl] = useState('')
  const [newAnnouncementTitle, setNewAnnouncementTitle] = useState('')
  const [newAnnouncementContent, setNewAnnouncementContent] = useState('')

  useEffect(() => {
    setEvents(getEvents())
    setAnnouncements(getAnnouncements())
  }, [])

  const handleAuth = () => {
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true)
      setPasscode('')
    } else {
      alert('管理者パスコードが間違っています')
    }
  }

  const updateEvent = (id: string, key: keyof Event, value: string) => {
    setEvents(current =>
      current.map(event =>
        event.id === id ? { ...event, [key]: key === 'waitTime' ? Number(value) : value } : event
      )
    )
  }

  const handleSaveEvents = () => {
    saveEvents(events)
    alert('種目情報を保存しました')
  }

  const handleAddEvent = () => {
    if (!newEventName.trim() || !newEventWaitTime.trim()) return
    const event: Event = {
      id: Date.now().toString(),
      name: newEventName,
      waitTime: Number(newEventWaitTime),
      description: newEventDescription || '説明なし',
      mapUrl: newEventMapUrl || 'https://example.com/map',
    }
    const updated = [...events, event]
    setEvents(updated)
    saveEvents(updated)
    setNewEventName('')
    setNewEventWaitTime('')
    setNewEventDescription('')
    setNewEventMapUrl('')
    alert('新しい種目を追加しました')
  }

  const updateAnnouncement = (id: string, key: keyof Announcement, value: string) => {
    setAnnouncements(current =>
      current.map(item =>
        item.id === id ? { ...item, [key]: value } : item
      )
    )
  }

  const handleSaveAnnouncements = () => {
    saveAnnouncements(announcements)
    alert('連絡事項を保存しました')
  }

  const handleAddAnnouncement = () => {
    if (!newAnnouncementTitle.trim() || !newAnnouncementContent.trim()) return
    const announcement: Announcement = {
      id: Date.now().toString(),
      title: newAnnouncementTitle,
      content: newAnnouncementContent,
      date: new Date().toISOString().split('T')[0],
    }
    const updated = [announcement, ...announcements]
    setAnnouncements(updated)
    saveAnnouncements(updated)
    setNewAnnouncementTitle('')
    setNewAnnouncementContent('')
    alert('連絡事項を追加しました')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-8 px-4">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-cyan-300">管理者ダッシュボード</h1>
          <p className="mt-2 text-slate-400">種目情報と公式連絡を管理する専用ページです。利用者側サイトとは別のページです。</p>
        </div>

        {!isAuthenticated ? (
          <div className="space-y-4 rounded-3xl bg-slate-800/90 p-6">
            <p className="text-slate-300">管理者パスコードを入力してから編集してください。</p>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="管理者パスコード"
              className="w-full rounded-2xl border border-slate-600 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
            />
            <button onClick={handleAuth} className="w-full rounded-2xl bg-cyan-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-cyan-400">
              認証して編集を開始
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            <section className="rounded-3xl bg-slate-800/90 p-6 shadow-xl shadow-cyan-500/10">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-200">種目情報の更新</h2>
                  <p className="text-slate-400">待ち時間や説明、地図リンクを更新して運営情報を反映します。</p>
                </div>
                <button onClick={handleSaveEvents} className="rounded-full bg-fuchsia-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400">保存する</button>
              </div>

              <div className="space-y-4">
                {events.map(event => (
                  <div key={event.id} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="text-sm text-slate-400">種目名</label>
                        <input value={event.name} onChange={(e) => updateEvent(event.id, 'name', e.target.value)} className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                      </div>
                      <div>
                        <label className="text-sm text-slate-400">待ち時間(分)</label>
                        <input type="number" value={event.waitTime} onChange={(e) => updateEvent(event.id, 'waitTime', e.target.value)} className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                      </div>
                      <div>
                        <label className="text-sm text-slate-400">地図URL</label>
                        <input value={event.mapUrl} onChange={(e) => updateEvent(event.id, 'mapUrl', e.target.value)} className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="text-sm text-slate-400">説明</label>
                      <textarea value={event.description} onChange={(e) => updateEvent(event.id, 'description', e.target.value)} className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" rows={2} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                <h3 className="text-xl font-semibold text-cyan-100">新しい種目を追加</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <input value={newEventName} onChange={(e) => setNewEventName(e.target.value)} placeholder="種目名" className="rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                  <input value={newEventWaitTime} onChange={(e) => setNewEventWaitTime(e.target.value)} placeholder="待ち時間（分）" type="number" className="rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                  <input value={newEventMapUrl} onChange={(e) => setNewEventMapUrl(e.target.value)} placeholder="地図URL" className="rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                  <input value={newEventDescription} onChange={(e) => setNewEventDescription(e.target.value)} placeholder="説明" className="rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                </div>
                <button onClick={handleAddEvent} className="mt-4 rounded-full bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">追加する</button>
              </div>
            </section>

            <section className="rounded-3xl bg-slate-800/90 p-6 shadow-xl shadow-fuchsia-500/10">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-fuchsia-200">公式連絡の更新</h2>
                  <p className="text-slate-400">本部からのお知らせを利用者に届けるために更新します。</p>
                </div>
                <button onClick={handleSaveAnnouncements} className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400">保存する</button>
              </div>

              <div className="space-y-4">
                {announcements.map(item => (
                  <div key={item.id} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <input value={item.title} onChange={(e) => updateAnnouncement(item.id, 'title', e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                      <input value={item.date} onChange={(e) => updateAnnouncement(item.id, 'date', e.target.value)} className="rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                    </div>
                    <textarea value={item.content} onChange={(e) => updateAnnouncement(item.id, 'content', e.target.value)} className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" rows={3} />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                <h3 className="text-xl font-semibold text-fuchsia-100">新しい連絡事項を追加</h3>
                <input value={newAnnouncementTitle} onChange={(e) => setNewAnnouncementTitle(e.target.value)} placeholder="タイトル" className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" />
                <textarea value={newAnnouncementContent} onChange={(e) => setNewAnnouncementContent(e.target.value)} placeholder="内容" className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100" rows={4} />
                <button onClick={handleAddAnnouncement} className="mt-4 rounded-full bg-fuchsia-500 px-5 py-2 font-semibold text-white transition hover:bg-fuchsia-400">追加する</button>
              </div>
            </section>
          </div>
        )}

        <div className="mt-8 text-right">
          <Link href="/" className="text-cyan-300 hover:text-cyan-100">利用者サイトへ戻る</Link>
        </div>
      </div>
    </div>
  )
}
