import CalendarPanel from "@/components/dailyNote/CalendarPanel.jsx";

const panelShell =
  "flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl";

function PracticeCard() {
  return (
    <div className="flex w-full min-h-0 flex-1 flex-col gap-6 lg:min-h-[min(920px,calc(100vh-14rem))] lg:flex-row lg:items-stretch">
      {/* Left — practice / test area (3/5) */}
      <section className="flex w-full min-w-0 min-h-0 flex-col lg:w-3/5">
        <div className={panelShell}>
          <header className="mb-4 shrink-0">
            <h2 className="text-lg font-medium text-cyan-400">Test area</h2>
            <p className="mt-1 text-sm text-slate-400">
              Drills and timed practice will appear here.
            </p>
          </header>
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-slate-900/30 px-4 py-10 text-center text-sm text-slate-500">
            Practice content placeholder
          </div>
        </div>
      </section>

      {/* Right — calendar (2/5) */}
      <section className="flex w-full min-w-0 min-h-0 flex-col lg:w-2/5">
        <div className={panelShell}>
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <CalendarPanel />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PracticeCard;
