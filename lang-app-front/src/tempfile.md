<div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT COLUMN - Daily Note Display (3/5 width) */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-h-[600px]">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
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

                  {/* Delete Button */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-medium transition-all duration-300 hover:bg-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                    Delete
                  </button>
                </div>
              </div>

              {/* Date Title */}
              <div className="mb-6">
                <h2 className="text-lg text-cyan-400 font-medium">
                  October 25, 2023
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  3 expressions learned
                </p>
              </div>

              {/* Expression Cards Container - Placeholder for LearningCard components */}
              <div className="space-y-4">
                {/* Placeholder cards showing where LearningCard components would go */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 min-h-[150px] flex items-center justify-center">
                  <p className="text-slate-500 text-sm">
                    LearningCard Component Slot 1
                  </p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 min-h-[150px] flex items-center justify-center">
                  <p className="text-slate-500 text-sm">
                    LearningCard Component Slot 2
                  </p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 min-h-[150px] flex items-center justify-center">
                  <p className="text-slate-500 text-sm">
                    LearningCard Component Slot 3
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Calendar Panel (2/5 width) */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-h-[600px] flex items-center justify-center">
              <p className="text-slate-500 text-sm">
                CalendarPanel Component Slot
              </p>
            </div>
          </div>
        </div>