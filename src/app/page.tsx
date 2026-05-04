// 全ての種目セクション (修正版)
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
      <div key={event.id} className="group rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:bg-cyan-50">
        {/* リンクエリア（詳細へ） */}
        <Link href={`/event/${event.id}`} className="block mb-4">
          <h3 className="text-xl font-bold text-slate-950">{event.name}</h3>
          <p className="mt-3 text-slate-700">待ち時間: <span className="font-semibold text-slate-900">{event.waitTime}分</span></p>
          <p className="mt-4 text-slate-500">{event.description}</p>
        </Link>
        
        {/* 管理者更新エリア（Linkの外に出してクリックできるようにする） */}
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