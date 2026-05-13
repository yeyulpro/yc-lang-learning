// page layout wrapper
import React from "react";
import ExpressionInput from "@/components/ExpressionExplorer/ExpressionInput.jsx";
import VoiceInput from "@/components/ExpressionExplorer/VoiceInput.jsx";
const ExpressionExplorer = () => {
  return (
    <div className="flex w-full flex-col pb-2">
      <header className="mb-6 flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 via-cyan-500 to-fuchsia-600 shadow-lg shadow-cyan-500/35 ring-1 ring-white/35 dark:shadow-[0_0_28px_rgba(34,211,238,0.25),0_0_40px_rgba(168,85,247,0.12)] dark:ring-white/15"
          aria-hidden
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700/90 dark:text-cyan-400/85">
            Explore
          </p>
          <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Expression Explorer
          </h1>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Learn new expressions with AI
          </p>
        </div>
      </header>
      <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* LEFT COLUMN - 40% width on desktop, full width on mobile */}
        <div className="flex w-full shrink-0 flex-col gap-4 md:gap-6 lg:w-[40%]">
          {/* Top Half */}
          <ExpressionInput />
          <div className="my-2 flex items-center gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-500/35 to-transparent dark:via-fuchsia-500/25" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/90 dark:text-cyan-400/90">
              OR
            </span>

            <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-500/35 to-transparent dark:via-fuchsia-500/25" />
          </div>
          <VoiceInput />
        </div>

        {/* RIGHT COLUMN - 60% width on desktop, full width on mobile */}
        <div className="flex w-full min-w-0 flex-col lg:min-h-112 lg:w-[60%] lg:flex-1">
          <div className="glass-card flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl p-4 shadow-sm ring-1 ring-black/4 md:p-6 dark:ring-white/6">
            <div className="flex min-h-0 flex-1 flex-col overflow-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700/90 dark:text-cyan-400/80">
                AI companion
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                Insights
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                AI summaries and examples will appear here.
              </p>
              <div className="glass-panel mt-6 flex flex-1 items-center justify-center rounded-xl border border-dashed border-cyan-500/25 px-4 py-12 text-center text-sm text-slate-500 dark:border-white/12 dark:text-slate-500">
                Select or enter an expression to get started.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpressionExplorer;
