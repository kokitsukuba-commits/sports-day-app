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
"[project]/src/app/announcements/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Announcements
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
function Announcements() {
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAnnouncements((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnnouncements"])());
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-fuchsia-100 text-slate-950 py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 rounded-[40px] border border-slate-200 bg-white/90 p-8 shadow-[0_35px_110px_-35px_rgba(14,165,233,0.25)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-extrabold text-slate-950",
                            children: "本部からのお知らせ"
                        }, void 0, false, {
                            fileName: "[project]/src/app/announcements/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-slate-600",
                            children: "最新の公式連絡をチェックしてください。"
                        }, void 0, false, {
                            fileName: "[project]/src/app/announcements/page.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/announcements/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: announcements.map((ann)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-cyan-700",
                                            children: ann.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/announcements/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800",
                                            children: ann.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/announcements/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/announcements/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-700",
                                    children: ann.content
                                }, void 0, false, {
                                    fileName: "[project]/src/app/announcements/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, ann.id, true, {
                            fileName: "[project]/src/app/announcements/page.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/announcements/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800",
                        children: "ホームに戻る"
                    }, void 0, false, {
                        fileName: "[project]/src/app/announcements/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/announcements/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/announcements/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/announcements/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0s7kze0._.js.map