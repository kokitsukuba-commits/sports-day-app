export interface Event {
  id: string
  name: string
  waitTime: number
  description: string
  mapUrl: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  date: string
}

export interface BulletinPost {
  id: string
  text: string
  date: string
  isOfficial: boolean
}

const STORAGE_KEYS = {
  events: 'sportsday-events',
  announcements: 'sportsday-announcements',
  bulletin: 'sportsday-bulletin',
}

const DEFAULT_EVENTS: Event[] = [
  { id: '1', name: 'モルック', waitTime: 12, description: 'モルックで狙え、一発逆転！シンプルだけど奥が深い。友達と一緒に、スポデーで最高の思い出作ろう！', mapUrl: 'https://example.com/molkky' },
  { id: '2', name: 'イントロドン', waitTime: 18, description: 'チームにわかれて競い合うイントロクイズ！好きなジャンルを選んでみんなで楽しく答えよう！また負けているチームは自分が有利になる条件が書かれた縛りBOXを引けます🙆上手く活用して逆転を狙おう！', mapUrl: 'https://example.com/intro' },
  { id: '3', name: '気配切り', waitTime: 22, description: '目隠しして相手の気配だけで戦うドキドキなゲーム！見るのもやるのも楽しい気配切り。気配を感じて盛り上がって仲を深めよう！', mapUrl: 'https://example.com/kehai' },
  { id: '4', name: 'サバゲー', waitTime: 35, description: 'ボールと盾を駆使して戦う戦略型スポーツ。障害物を利用して仲間と連携し、敵陣突破を狙え！スピード・判断力・チームワークが勝敗を分ける！', mapUrl: 'https://example.com/savage' },
  { id: '5', name: 'ダーツ', waitTime: 14, description: 'ダーツは的に向かって矢を投げるシンプルで楽しいゲーム！当たるかどうかは腕次第…でも運も少し大事かも？笑 初心者の方は外しても安心、当たるまで投げられる！！', mapUrl: 'https://example.com/darts' },
  { id: '6', name: 'ボッチャ', waitTime: 20, description: '目標球に向かってボールを投げる！ボッチャは「地上のカーリング」！狙って、弾いて、頭脳と技を駆使しよう！あなたの一投が勝負を決める！', mapUrl: 'https://example.com/boccia' },
  { id: '7', name: '器用３種対決', waitTime: 16, description: 'スポーツスタッキング、ボトルフリップ、テーブルクロス引きの3種目で対決！相手より早く終わらせて勝負に勝とう！より器用なのは誰だ！？', mapUrl: 'https://example.com/skill' },
  { id: '8', name: 'バブルサッカー', waitTime: 28, description: 'バブルを纏って激突する新感覚スポーツ！ぶつかって、転がって、仲間とゴールを狙え！運動神経は関係なし。全力で体当たりして仲を深めよう！', mapUrl: 'https://example.com/bubblesoccer' },
  { id: '9', name: 'インディアカ', waitTime: 24, description: 'あまり馴染みのないスポーツけれどカンタン、中身はだいたいバレーボール。羽のついたボールを手で打ってパスを繋いで楽しもう。', mapUrl: 'https://example.com/indiaca' },
]

const DEFAULT_ANNOUNCEMENTS: Announcement[] = [
  { id: '1', title: 'イベント開始のお知らせ', content: 'スポデーが始まりました。', date: '2024-04-28' },
  { id: '2', title: '天候注意', content: '雨天の場合は室内に移動してください。', date: '2024-04-28' },
]

const DEFAULT_BULLETIN: BulletinPost[] = [
  { id: '1', text: '今日のイベントは順調です。', date: '2024-04-28', isOfficial: true },
]

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function writeStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getEvents(): Event[] {
  return readStorage<Event[]>(STORAGE_KEYS.events, DEFAULT_EVENTS)
}

export function saveEvents(events: Event[]) {
  writeStorage(STORAGE_KEYS.events, events)
}

export function getAnnouncements(): Announcement[] {
  return readStorage<Announcement[]>(STORAGE_KEYS.announcements, DEFAULT_ANNOUNCEMENTS)
}

export function saveAnnouncements(announcements: Announcement[]) {
  writeStorage(STORAGE_KEYS.announcements, announcements)
}

export function getBulletinPosts(): BulletinPost[] {
  return readStorage<BulletinPost[]>(STORAGE_KEYS.bulletin, DEFAULT_BULLETIN)
}

export function saveBulletinPosts(posts: BulletinPost[]) {
  writeStorage(STORAGE_KEYS.bulletin, posts)
}
