module.exports = [
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAnnouncements",
    ()=>getAnnouncements,
    "getBulletinPosts",
    ()=>getBulletinPosts,
    "getEvents",
    ()=>getEvents,
    "saveAnnouncements",
    ()=>saveAnnouncements,
    "saveBulletinPosts",
    ()=>saveBulletinPosts,
    "saveEvents",
    ()=>saveEvents
]);
const STORAGE_KEYS = {
    events: 'sportsday-events',
    announcements: 'sportsday-announcements',
    bulletin: 'sportsday-bulletin'
};
const DEFAULT_EVENTS = [
    {
        id: '1',
        name: 'モルック',
        waitTime: 12,
        description: 'モルックで狙え、一発逆転！シンプルだけど奥が深い。友達と一緒に、スポデーで最高の思い出作ろう！',
        mapUrl: 'https://example.com/molkky'
    },
    {
        id: '2',
        name: 'イントロドン',
        waitTime: 18,
        description: 'チームにわかれて競い合うイントロクイズ！好きなジャンルを選んでみんなで楽しく答えよう！また負けているチームは自分が有利になる条件が書かれた縛りBOXを引けます🙆上手く活用して逆転を狙おう！',
        mapUrl: 'https://example.com/intro'
    },
    {
        id: '3',
        name: '気配切り',
        waitTime: 22,
        description: '目隠しして相手の気配だけで戦うドキドキなゲーム！見るのもやるのも楽しい気配切り。気配を感じて盛り上がって仲を深めよう！',
        mapUrl: 'https://example.com/kehai'
    },
    {
        id: '4',
        name: 'サバゲー',
        waitTime: 35,
        description: 'ボールと盾を駆使して戦う戦略型スポーツ。障害物を利用して仲間と連携し、敵陣突破を狙え！スピード・判断力・チームワークが勝敗を分ける！',
        mapUrl: 'https://example.com/savage'
    },
    {
        id: '5',
        name: 'ダーツ',
        waitTime: 14,
        description: 'ダーツは的に向かって矢を投げるシンプルで楽しいゲーム！当たるかどうかは腕次第…でも運も少し大事かも？笑 初心者の方は外しても安心、当たるまで投げられる！！',
        mapUrl: 'https://example.com/darts'
    },
    {
        id: '6',
        name: 'ボッチャ',
        waitTime: 20,
        description: '目標球に向かってボールを投げる！ボッチャは「地上のカーリング」！狙って、弾いて、頭脳と技を駆使しよう！あなたの一投が勝負を決める！',
        mapUrl: 'https://example.com/boccia'
    },
    {
        id: '7',
        name: '器用３種対決',
        waitTime: 16,
        description: 'スポーツスタッキング、ボトルフリップ、テーブルクロス引きの3種目で対決！相手より早く終わらせて勝負に勝とう！より器用なのは誰だ！？',
        mapUrl: 'https://example.com/skill'
    },
    {
        id: '8',
        name: 'バブルサッカー',
        waitTime: 28,
        description: 'バブルを纏って激突する新感覚スポーツ！ぶつかって、転がって、仲間とゴールを狙え！運動神経は関係なし。全力で体当たりして仲を深めよう！',
        mapUrl: 'https://example.com/bubblesoccer'
    },
    {
        id: '9',
        name: 'インディアカ',
        waitTime: 24,
        description: 'あまり馴染みのないスポーツけれどカンタン、中身はだいたいバレーボール。羽のついたボールを手で打ってパスを繋いで楽しもう。',
        mapUrl: 'https://example.com/indiaca'
    }
];
const DEFAULT_ANNOUNCEMENTS = [
    {
        id: '1',
        title: 'イベント開始のお知らせ',
        content: 'スポデーが始まりました。',
        date: '2024-04-28'
    },
    {
        id: '2',
        title: '天候注意',
        content: '雨天の場合は室内に移動してください。',
        date: '2024-04-28'
    }
];
const DEFAULT_BULLETIN = [
    {
        id: '1',
        text: '今日のイベントは順調です。',
        date: '2024-04-28',
        isOfficial: true
    }
];
function readStorage(key, fallback) {
    if ("TURBOPACK compile-time truthy", 1) return fallback;
    //TURBOPACK unreachable
    ;
}
function writeStorage(key, value) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getEvents() {
    return readStorage(STORAGE_KEYS.events, DEFAULT_EVENTS);
}
function saveEvents(events) {
    writeStorage(STORAGE_KEYS.events, events);
}
function getAnnouncements() {
    return readStorage(STORAGE_KEYS.announcements, DEFAULT_ANNOUNCEMENTS);
}
function saveAnnouncements(announcements) {
    writeStorage(STORAGE_KEYS.announcements, announcements);
}
function getBulletinPosts() {
    return readStorage(STORAGE_KEYS.bulletin, DEFAULT_BULLETIN);
}
function saveBulletinPosts(posts) {
    writeStorage(STORAGE_KEYS.bulletin, posts);
}
}),
"[project]/src/app/bulletin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Bulletin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const PARTICIPANT_PASSCODE = '5678';
const OFFICIAL_PASSCODE = 'official2026';
function Bulletin() {
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newPost, setNewPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [passcode, setPasscode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOfficialPost, setIsOfficialPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPosts((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBulletinPosts"])());
    }, []);
    const handleSubmitPost = ()=>{
        if (newPost.trim()) {
            const post = {
                id: Date.now().toString(),
                text: newPost,
                date: new Date().toISOString().split('T')[0],
                isOfficial: isOfficialPost
            };
            const updated = [
                ...posts,
                post
            ];
            setPosts(updated);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveBulletinPosts"])(updated);
            setNewPost('');
        }
    };
    const handlePasscodeSubmit = ()=>{
        if (passcode === PARTICIPANT_PASSCODE) {
            setIsAuthenticated(true);
            setIsOfficialPost(false);
            setPasscode('');
        } else if (passcode === OFFICIAL_PASSCODE) {
            setIsAuthenticated(true);
            setIsOfficialPost(true);
            setPasscode('');
        } else {
            alert('パスコードが間違っています');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 rounded-[40px] bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-extrabold text-cyan-300",
                            children: "掲示板"
                        }, void 0, false, {
                            fileName: "[project]/src/app/bulletin/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-slate-400",
                            children: "参加者や運営からのとっておきのお知らせを共有します。"
                        }, void 0, false, {
                            fileName: "[project]/src/app/bulletin/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/bulletin/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-4",
                    children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[28px] border border-slate-700 bg-slate-900/90 p-5 shadow-lg shadow-slate-950/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-flex rounded-full px-3 py-1 text-sm font-semibold ${post.isOfficial ? 'bg-fuchsia-500 text-slate-950' : 'bg-slate-700 text-slate-200'}`,
                                            children: post.isOfficial ? '公式情報' : '参加者投稿'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bulletin/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-500",
                                            children: post.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bulletin/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/bulletin/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-100",
                                    children: post.text
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bulletin/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/src/app/bulletin/page.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/bulletin/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 rounded-[32px] bg-slate-900/90 p-6 shadow-xl shadow-cyan-500/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-cyan-200",
                            children: "新しい投稿"
                        }, void 0, false, {
                            fileName: "[project]/src/app/bulletin/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        !isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-col gap-4 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "投稿用パスコード",
                                    value: passcode,
                                    onChange: (e)=>setPasscode(e.target.value),
                                    className: "w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bulletin/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePasscodeSubmit,
                                    className: "rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400",
                                    children: "認証"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bulletin/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/bulletin/page.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200",
                                    children: [
                                        "現在の投稿モード: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-cyan-300",
                                            children: isOfficialPost ? '公式情報' : '参加者投稿'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bulletin/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/bulletin/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "掲示板に投稿する内容を入力",
                                    value: newPost,
                                    onChange: (e)=>setNewPost(e.target.value),
                                    className: "w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-slate-100 outline-none",
                                    rows: 4
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bulletin/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmitPost,
                                    className: "rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400",
                                    children: "投稿する"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bulletin/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/bulletin/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/bulletin/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "rounded-full border border-slate-700 bg-slate-950/90 px-5 py-3 transition hover:bg-slate-800",
                        children: "ホームに戻る"
                    }, void 0, false, {
                        fileName: "[project]/src/app/bulletin/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/bulletin/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/bulletin/page.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/bulletin/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0f2_sqv._.js.map