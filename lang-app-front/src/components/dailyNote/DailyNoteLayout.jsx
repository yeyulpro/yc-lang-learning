import { LearningCardDemo } from "@/components/dailyNote/LearningCard.jsx";
import CalendarPanel from "@/components/dailyNote/CalendarPanel.jsx";

// Standalone DailyNote Layout Component
// Two-column layout: Left (3/5) for daily note content, Right (2/5) for calendar panel

function DailyNoteLayout() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* LEFT COLUMN - Daily Note Display (3/5 width) */}
      <div className="w-full min-w-0 lg:w-3/5">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[min(1060px,96vh)] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 shrink-0">
            {/* Date Title */}
            <div className="mb-6">
              <h2 className="text-lg text-cyan-400 font-medium">
                October 25, 2023
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                3 expressions learned
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Print Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print
              </button>
            </div>
          </div>

          {/* Expression Cards Container - Placeholder for LearningCard components */}
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-2">
            {/* Placeholder cards showing where LearningCard components would go */}

            <LearningCardDemo />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - Calendar Panel (2/5 width) */}
      <div className="w-full min-w-0 lg:w-2/5">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[min(1060px,96vh)] overflow-hidden flex flex-col">
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <CalendarPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyNoteLayout;
