import DailyNoteLayout from "@/components/dailyNote/DailyNoteLayout.jsx";

const MyLibrary = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="glass-card flex flex-1 flex-col rounded-2xl p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700/90 dark:text-cyan-400/90">
          Library
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          My library
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Saved words, phrases, and lists will show up here.
        </p>
        <div className="mt-8 min-h-0 flex-1">
          <DailyNoteLayout />
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
