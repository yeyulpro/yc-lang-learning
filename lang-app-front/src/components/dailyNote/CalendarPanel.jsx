import { useState } from 'react'

// Standalone Calendar Panel — month/year via arrow controls; study date list below grid

function CalendarPanel() {
  const [selectedMonth, setSelectedMonth] = useState(new Date(2023, 9, 1)) // October 2023
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 9, 25)) // Oct 25, 2023

  const applyMonthAnchor = (next) => {
    const lastDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate()
    const day = Math.min(selectedDate.getDate(), lastDay)
    setSelectedMonth(next)
    setSelectedDate(new Date(next.getFullYear(), next.getMonth(), day))
  }

  const shiftMonth = (delta) => {
    const sm = selectedMonth
    applyMonthAnchor(new Date(sm.getFullYear(), sm.getMonth() + delta, 1))
  }

  const shiftYear = (delta) => {
    const sm = selectedMonth
    applyMonthAnchor(new Date(sm.getFullYear() + delta, sm.getMonth(), 1))
  }

  const navBtn =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-800/50 text-cyan-400 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 disabled:pointer-events-none disabled:opacity-35'

  // Study dates with expression counts
  const studyDates = [
    { date: new Date(2023, 9, 25), count: 3 },
    { date: new Date(2023, 9, 24), count: 5 },
    { date: new Date(2023, 9, 23), count: 2 },
    { date: new Date(2023, 9, 20), count: 4 },
    { date: new Date(2023, 9, 18), count: 3 },
    { date: new Date(2023, 9, 15), count: 6 },
    { date: new Date(2023, 9, 12), count: 2 },
    { date: new Date(2023, 9, 10), count: 4 },
  ]

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December']
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    // Get the day of week for the first day (0 = Sunday, adjust for Monday start)
    let startDay = firstDay.getDay() - 1
    if (startDay < 0) startDay = 6
    
    const days = []
    
    // Add empty slots for days before the first of the month
    for (let i = 0; i < startDay; i++) {
      days.push(null)
    }
    
    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    
    return days
  }

  // Check if a day has study data
  const hasStudyData = (day) => {
    if (!day) return false
    return studyDates.some(sd => 
      sd.date.getDate() === day && 
      sd.date.getMonth() === selectedMonth.getMonth() &&
      sd.date.getFullYear() === selectedMonth.getFullYear()
    )
  }

  // Check if day is selected
  const isSelectedDay = (day) => {
    if (!day) return false
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === selectedMonth.getMonth() &&
           selectedDate.getFullYear() === selectedMonth.getFullYear()
  }

  // Format date for display
  const formatDate = (date) => {
    const month = monthNames[date.getMonth()].slice(0, 3)
    return `${month} ${date.getDate()}`
  }

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 bg-linear-to-br from-slate-950/80 via-slate-900/80 to-slate-950/80 backdrop-blur-xl">
          {/* Year & month — arrow navigation (no scroll) */}
          <div className="flex shrink-0 flex-col gap-3 border-b border-white/5 px-3 py-4">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => shiftYear(-1)}
                className={navBtn}
                aria-label="Previous year"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </button>
              <span className="min-w-0 flex-1 text-center text-base font-semibold tabular-nums text-slate-100">
                {selectedMonth.getFullYear()}
              </span>
              <button
                type="button"
                onClick={() => shiftYear(1)}
                className={navBtn}
                aria-label="Next year"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between gap-2">
              <button type="button" onClick={() => shiftMonth(-1)} className={navBtn} aria-label="Previous month">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="min-w-0 flex-1 truncate text-center text-lg font-bold tracking-wide text-cyan-100 shadow-[0_0_24px_rgba(207,250,254,0.2)]">
                {monthNames[selectedMonth.getMonth()].toUpperCase()}
              </p>
              <button type="button" onClick={() => shiftMonth(1)} className={navBtn} aria-label="Next month">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mini Calendar Grid — natural height, full width, square cells */}
          <div className="shrink-0 p-4">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-xs text-slate-500 font-medium py-1">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(selectedMonth).map((day, index) => (
                <button
                  key={index}
                  disabled={!day}
                  onClick={() => day && setSelectedDate(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day))}
                  className={`
                    aspect-square flex items-center justify-center text-sm rounded-lg
                    transition-all duration-200
                    ${!day ? 'invisible' : ''}
                    ${isSelectedDay(day)
                      ? 'bg-cyan-500 text-slate-900 font-bold shadow-lg shadow-cyan-500/30'
                      : hasStudyData(day)
                        ? 'text-cyan-400 hover:bg-cyan-500/20'
                        : 'text-slate-400 hover:bg-white/5'
                    }
                  `}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Study Dates List — three most recent days with activity */}
          <div className="shrink-0 border-t border-white/5 px-4 pb-2 pt-4">
            <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-cyan-100">
              Recent study days
            </h3>
            <div className="flex flex-col gap-2">
              {[...studyDates]
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .slice(0, 3)
                .map((item) => {
                  const isActive =
                    item.date.getDate() === selectedDate.getDate() &&
                    item.date.getMonth() === selectedDate.getMonth() &&
                    item.date.getFullYear() === selectedDate.getFullYear()
                  return (
                    <button
                      key={item.date.getTime()}
                      onClick={() => {
                        const d = item.date
                        setSelectedMonth(new Date(d.getFullYear(), d.getMonth(), 1))
                        setSelectedDate(d)
                      }}
                      className={`
                        w-full flex items-center justify-between p-3 rounded-xl
                        transition-all duration-200
                        ${isActive 
                          ? 'bg-cyan-500/20 border border-cyan-500/30' 
                          : 'bg-slate-800/50 border border-transparent hover:border-white/10'
                        }
                      `}
                    >
                      <span className={`font-medium ${isActive ? 'text-cyan-400' : 'text-slate-300'}`}>
                        {formatDate(item.date)} ({item.count})
                      </span>
                      <span className={`
                        px-2.5 py-0.5 text-sm font-bold rounded-full
                        ${isActive 
                          ? 'bg-cyan-500 text-slate-900' 
                          : 'bg-cyan-500/20 text-cyan-400'
                        }
                      `}>
                        {item.count}
                      </span>
                    </button>
                  )
                })}
            </div>
          </div>
    </div>
  )
}

export default CalendarPanel
