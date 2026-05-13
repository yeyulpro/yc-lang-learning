import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full shrink-0 border-t border-white/30 bg-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/45">
    <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      
      {/* LEFT */}
      <p className="text-sm text-slate-600 dark:text-slate-400">
        © {currentYear} yc-eng-learning. All rights reserved.
      </p>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* Facebook */}
        <a
          href="#"
          className="text-slate-500 transition-colors duration-200 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.77-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" />
          </svg>
        </a>

        {/* Twitter / X */}
        <a
          href="#"
          className="text-slate-500 transition-colors duration-200 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.9L4.9 22H2l7.3-8.3L1 2h6.9l4.8 6.3L18.9 2zm-1.2 18h1.9L6.2 3.9H4.2L17.7 20z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer