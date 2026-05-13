import { useState, useEffect, useRef } from 'react'

export default function VoiceInput() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(true)
  const recognitionRef = useRef(null)

  const wordCount = transcript.trim() ? transcript.trim().split(/\s+/).length : 0

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = true
        recognitionRef.current.interimResults = true
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onresult = (event) => {
          let finalTranscript = ''
          for (let i = 0; i < event.results.length; i++) {
            finalTranscript += event.results[i][0].transcript
          }
          setTranscript(finalTranscript)
        }

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error)
          setIsListening(false)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }
      } else {
        setIsSupported(false)
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  const toggleListening = () => {
    if (!recognitionRef.current) return

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      setTranscript('')
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const handleTextChange = (e) => {
    setTranscript(e.target.value)
  }

  return (
    <div className="mx-auto w-full shrink-0">
      <div className="glass-card rounded-2xl p-6 sm:p-7">
        {/* Helper Text */}
        <p className="mb-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Click the mic and speak. Your speech will be transcribed below.
        </p>

        {/* Microphone Button with Waveform */}
        <div className="mb-8 flex flex-col items-center">
          {/* Waveform Container */}
          <div className="relative flex items-center justify-center mb-4">
            {/* Animated Rings */}
            {isListening && (
              <>
                <span className="absolute w-24 h-24 rounded-full bg-cyan-500/20 animate-ping" />
                <span 
                  className="absolute w-32 h-32 rounded-full bg-cyan-500/10 animate-ping" 
                  style={{ animationDelay: '0.2s' }} 
                />
                <span 
                  className="absolute w-40 h-40 rounded-full bg-cyan-500/5 animate-ping" 
                  style={{ animationDelay: '0.4s' }} 
                />
              </>
            )}

            {/* Waveform Bars */}
            {isListening && (
              <div className="absolute flex items-center gap-1">
                {[...Array(12)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1 bg-cyan-400 rounded-full animate-waveform"
                    style={{
                      height: `${Math.random() * 20 + 10}px`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Mic Button */}
            <button
              onClick={toggleListening}
              disabled={!isSupported}
              className={`
                relative z-10 flex h-20 w-20 items-center justify-center rounded-full
                border-2 backdrop-blur-xl transition-all duration-300 ease-out
                ${
                  isListening
                    ? 'scale-110 border-cyan-300 bg-cyan-500 shadow-[0_0_36px_rgba(34,211,238,0.45),0_0_64px_rgba(168,85,247,0.2)]'
                    : 'border-white/30 bg-white/25 shadow-inner hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] dark:border-white/12 dark:bg-slate-950/55 dark:hover:bg-cyan-500/10'
                }
                ${!isSupported ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                hover:scale-[1.03] active:scale-[0.98]
                focus:outline-none focus:ring-4 focus:ring-cyan-500/25
              `}
              aria-label={isListening ? 'Stop listening' : 'Start listening'}
            >
              {isListening ? (
                /* Stop Icon */
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                </svg>
              ) : (
                /* Microphone Icon */
                <svg 
                  className="h-8 w-8 text-slate-600 dark:text-slate-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M19 10v2a7 7 0 0 1-14 0v-2" 
                  />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              )}
            </button>
          </div>

          {/* Status Text */}
          <p
            className={`text-sm font-medium transition-colors duration-200 ${
              isListening
                ? 'text-cyan-600 dark:text-cyan-300'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {!isSupported 
              ? 'Speech recognition not supported' 
              : isListening 
                ? 'Listening...' 
                : 'Tap to speak'
            }
          </p>
        </div>

        {/* Textarea for Transcribed Speech */}
        <div className="relative">
          <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400">
            Transcribed Speech
          </label>
          <textarea
            value={transcript}
            onChange={handleTextChange}
            placeholder="Your speech will appear here..."
            rows={6}
            className="ds-field resize-none"
          />

          {/* Word Counter */}
          <div className="absolute bottom-3 right-3">
            <span
              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200 ${
                wordCount > 0
                  ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300'
                  : 'bg-white/40 text-slate-500 dark:bg-slate-900/60 dark:text-slate-500'
              }`}
            >
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
          </div>
        </div>
      </div>

      {/* Waveform Animation Styles */}
      <style>{`
        @keyframes waveform {
          0%, 100% {
            height: 8px;
          }
          50% {
            height: 28px;
          }
        }
        .animate-waveform {
          animation: waveform 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
