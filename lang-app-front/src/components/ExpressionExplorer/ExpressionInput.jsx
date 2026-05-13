import { useState } from 'react'

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
]

const MAX_WORDS = 500

function LanguageDropdown({ label, value, onChange, id }) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedLang = LANGUAGES.find((l) => l.code === value) || LANGUAGES[0]

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-600 dark:text-slate-400"
      >
        {label}
      </label>
      <div className="relative">
        <button
          id={id}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          className="ds-field flex w-full cursor-pointer items-center justify-between gap-3 text-slate-900 focus:outline-none dark:text-slate-100"
        >
          <span className="flex items-center gap-3">
            <span className="text-lg">{selectedLang.flag}</span>
            <span className="font-medium">{selectedLang.name}</span>
          </span>
          <svg
            className={`h-5 w-5 text-slate-500 transition-transform duration-200 dark:text-slate-400 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="glass-dropdown absolute z-50 mt-2 w-full animate-in overflow-hidden rounded-xl duration-200 fade-in slide-in-from-top-2"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  onChange(lang.code)
                  setIsOpen(false)
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-150
                  ${
                    value === lang.code
                      ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300'
                      : 'text-slate-700 hover:bg-cyan-500/10 dark:text-slate-200 dark:hover:bg-cyan-500/10'
                  }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {value === lang.code && (
                  <svg
                    className="w-5 h-5 ml-auto text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ExpressionInput() {
  const [targetLanguage, setTargetLanguage] = useState('en')
  const [explainLanguage, setExplainLanguage] = useState('ko')
  const [expression, setExpression] = useState('')

  const wordCount = expression.trim()
    ? expression.trim().split(/\s+/).length
    : 0
  const isOverLimit = wordCount > MAX_WORDS

  const handleExpressionChange = (e) => {
    setExpression(e.target.value)
  }

  return (
    <div className="glass-card flex w-full flex-col gap-6 rounded-2xl p-6 md:p-7">
      {/* Header */}
      {/* In-card header omitted — page title is on ExpressionExplorer */}

      {/* Language Selectors Section */}
      <div className="flex flex-col gap-4">
        <LanguageDropdown
          label="Target Language (Expression)"
          id="target-language"
          value={targetLanguage}
          onChange={setTargetLanguage}
        />
        <LanguageDropdown
          label="Explain In (Your Language)"
          id="explain-language"
          value={explainLanguage}
          onChange={setExplainLanguage}
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent dark:via-fuchsia-500/20" />

      {/* Input Section */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="expression-input"
          className="text-sm font-medium text-slate-600 dark:text-slate-400"
        >
          Enter Expression
        </label>
        <div className="relative">
          <textarea
            id="expression-input"
            value={expression}
            onChange={handleExpressionChange}
            placeholder="Type an expression, phrase, or sentence you want to learn..."
            rows={5}
            className={`ds-field resize-none ${
              isOverLimit
                ? 'border-red-500/70 ring-2 ring-red-500/25 focus:border-red-500 focus:ring-red-500/35'
                : ''
            }`}
          />
        </div>

        {/* Word Counter */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            {isOverLimit
              ? 'Please reduce your text to continue'
              : 'Enter any expression you want to explore'}
          </p>
          <span
            className={`text-xs font-medium transition-colors duration-200 ${
              isOverLimit
                ? 'text-red-500 dark:text-red-400'
                : wordCount > MAX_WORDS * 0.8
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-slate-500 dark:text-slate-500'
            }`}
          >
            {wordCount} / {MAX_WORDS} words
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        disabled={!expression.trim() || isOverLimit}
        className="w-full rounded-xl bg-linear-to-r from-cyan-500 via-cyan-500 to-cyan-600 py-3 font-medium text-white shadow-lg shadow-cyan-500/30 transition-all duration-200 hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-500 hover:shadow-[0_0_28px_rgba(34,211,238,0.35),0_0_56px_rgba(168,85,247,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-500/50 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-lg"
      >
        Explore Expression
      </button>
    </div>
  )
}
