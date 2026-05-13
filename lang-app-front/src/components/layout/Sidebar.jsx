import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  {
    id: 'expression-explorer',
    path: '/',
    label: 'Expression Explorer',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
  },
  {
    id: 'my-library',
    path: '/collection',
    label: 'My Library',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    id: 'practice-arena',
    path: '/test',
    label: 'Practice Arena',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 'study-exports',
    path: null,
    label: 'Study Exports',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    ),
  },
]

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed bottom-6 left-6 z-70 rounded-xl bg-linear-to-r from-cyan-500 to-cyan-600 p-3 text-white shadow-lg shadow-cyan-500/35 transition-all duration-200 hover:scale-[1.02] hover:from-cyan-400 hover:to-cyan-500 hover:shadow-cyan-500/45 active:scale-[0.98] lg:hidden"
        aria-label="Toggle sidebar"
      >
        {isMobileOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-55"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-60 h-screen
          ${isCollapsed ? 'w-20' : 'w-72'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          transition-all duration-300 ease-out
        `}
      >
        <div className="flex h-full flex-col border-r border-white/30 bg-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 dark:border-white/5">
            {!isCollapsed && (
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/25">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-white">
                  AI Learning
                </span>
              </div>
            )}

            {/* Collapse Toggle - Desktop only */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-200"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-3">
            {navItems.map((item) => {
              const baseClass =
                'group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200'

              const renderInner = (isActive) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
                  )}
                  <span
                    className={`shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-500 dark:text-cyan-400'
                        : 'group-hover:text-cyan-500 dark:group-hover:text-cyan-400'
                    }`}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="truncate text-sm font-medium">{item.label}</span>
                  )}
                  {isCollapsed && (
                    <div className="invisible absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:bg-slate-800">
                      {item.label}
                      <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1 -translate-y-1/2 rotate-45 bg-slate-900 dark:bg-slate-800" />
                    </div>
                  )}
                </>
              )

              if (!item.path) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled
                    title="Coming soon"
                    className={`${baseClass} cursor-not-allowed text-gray-400 opacity-60 dark:text-gray-500`}
                  >
                    {renderInner(false)}
                  </button>
                )
              }

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `${baseClass} ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400'
                        : 'text-gray-600 hover:bg-white/60 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-slate-800/60 dark:hover:text-gray-100'
                    }`
                  }
                >
                  {({ isActive }) => renderInner(isActive)}
                </NavLink>
              )
            })}
          </nav>

          
        </div>
      </aside>
    </>
  )
}

export default Sidebar
