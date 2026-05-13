import PracticeLayout from "@/components/practiceArea/PracticeLayout.jsx";

const PracticeArena = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="glass-card flex flex-1 flex-col rounded-2xl p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700/90 dark:text-cyan-400/80">
          Practice
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Practice arena
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Drills and timed practice sessions will live in this space.
        </p>
        <div className="glass-panel mt-8 flex min-h-0 flex-1 flex-col items-stretch rounded-xl border border-dashed border-cyan-500/25 px-4 py-6 text-slate-500 sm:px-6 dark:border-white/12 dark:text-slate-500">
          <PracticeLayout />
        </div>
      </div>
    </div>
  )
}

export default PracticeArena