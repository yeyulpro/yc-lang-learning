import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
   
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      {/* Animated background orbs — cyan + violet (design tokens) */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl opacity-20 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl opacity-20 animate-pulse" />

      {/* Circular Form Container */}
      <div className="relative w-full max-w-md">
        {/* Outer glow circle */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-2xl opacity-75"></div>

        {/* Main form circle */}
        <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl dark:bg-slate-950/90 md:p-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Login</h1>
            <p className="text-slate-400 text-sm">Welcome back to your learning journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="group">
              <label className="block text-sm font-medium text-slate-200 mb-2">Email</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-cyan-500/15 group-hover:bg-cyan-500/25 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 focus:border-cyan-500/50 rounded-xl pl-16 pr-4 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <label className="block text-sm font-medium text-slate-200 mb-2">Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-cyan-500/15 group-hover:bg-cyan-500/25 transition-colors">
                  <Lock className="w-6 h-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 focus:border-cyan-500/50 rounded-xl pl-16 pr-12 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-cyan-400 transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 bg-linear-to-r from-cyan-500/80 to-cyan-600/80 hover:from-cyan-500 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
            <span className="text-xs text-slate-500">OR</span>
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 text-center text-sm">
            <a href="/forgot-password" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Forgot your password?
            </a>
            <p className="text-slate-400">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
