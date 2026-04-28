import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '筑波大学スポデーアプリ',
  description: '筑波大学のスポーツデーの待ち時間と情報を提供するアプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-900`}>
        {children}
      </body>
    </html>
  )
}