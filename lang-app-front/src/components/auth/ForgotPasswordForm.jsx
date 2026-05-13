import { useState } from "react";

import { Mail, ArrowRight, ArrowLeft, CheckCircle, Loader } from "lucide-react";

export default function ForgotPasswordForm() {
  const [step, setStep] = useState("email"); // 'email', 'code', 'reset'

  const [email, setEmail] = useState("");

  const [verificationCode, setVerificationCode] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setErrors({ email: "Please enter a valid email" });

      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      setSuccessMessage("Verification code sent to your email");

      setStep("code");

      setErrors({});
    }, 1000);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();

    if (verificationCode.length !== 6) {
      setErrors({ verificationCode: "Code must be 6 digits" });

      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      setStep("reset");

      setErrors({});
    }, 1000);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (newPassword.length < 8)
      newErrors.newPassword = "Password must be 8+ characters";

    if (newPassword !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        setSuccessMessage("Password reset successful! Redirecting to login...");

        setTimeout(() => {
          setStep("email");

          setEmail("");

          setVerificationCode("");

          setNewPassword("");

          setConfirmPassword("");
        }, 2000);
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleBack = () => {
    if (step === "code") {
      setStep("email");

      setVerificationCode("");

      setSuccessMessage("");
    } else if (step === "reset") {
      setStep("code");

      setNewPassword("");

      setConfirmPassword("");

      setSuccessMessage("");
    }

    setErrors({});
  };

  const inputRing =
    "border-white/10 hover:border-white/20 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20";

  const primaryBtn =
    "w-full bg-linear-to-r from-cyan-500/80 to-cyan-600/80 hover:from-cyan-500 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50";

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl opacity-20 animate-pulse" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl opacity-20 animate-pulse" />

      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-2xl opacity-75" />

        <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl dark:bg-slate-950/90 md:p-12">
          {successMessage && (
            <div className="mb-6 flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/15 p-4 text-sm text-emerald-200">
              <CheckCircle className="h-5 w-5 shrink-0 text-emerald-400" />

              {successMessage}
            </div>
          )}

          {step === "email" && (
            <>
              <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                  Forgot Password?
                </h1>

                <p className="text-sm text-slate-400">
                  Enter your email to receive a verification code
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Email Address
                  </label>

                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-cyan-500/15 p-2 transition-colors group-hover:bg-cyan-500/25">
                      <Mail className="h-6 w-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50" />
                    </div>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);

                        if (errors.email) setErrors({});
                      }}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border bg-white/5 py-3 pl-16 pr-4 text-white backdrop-blur-sm placeholder:text-slate-500 transition-all duration-300 dark:bg-slate-800/50 ${inputRing}`}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400/80">
                      {errors.email}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={primaryBtn}
                >
                  {isLoading ? (
                    <Loader className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Send Code
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}

          {step === "code" && (
            <>
              <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                  Verify Email
                </h1>

                <p className="text-sm text-slate-400">
                  Enter the 6-digit code sent to {email}
                </p>
              </div>

              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Verification Code
                  </label>

                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);

                      setVerificationCode(val);

                      if (errors.verificationCode) setErrors({});
                    }}
                    placeholder="000000"
                    maxLength="6"
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-center font-mono text-lg tracking-widest text-white backdrop-blur-sm placeholder:text-slate-500 transition-all duration-300 dark:bg-slate-800/50 ${inputRing}`}
                  />

                  {errors.verificationCode && (
                    <p className="mt-1 text-xs text-red-400/80">
                      {errors.verificationCode}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={primaryBtn}
                >
                  {isLoading ? (
                    <Loader className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Verify Code
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              <button
                type="button"
                onClick={handleBack}
                className="mt-4 flex w-full items-center justify-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-400"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to email
              </button>
            </>
          )}

          {step === "reset" && (
            <>
              <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                  Reset Password
                </h1>

                <p className="text-sm text-slate-400">
                  Create a new password for your account
                </p>
              </div>

              <form onSubmit={handleResetSubmit} className="space-y-5">
                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    New Password
                  </label>

                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);

                      if (errors.newPassword) setErrors({});
                    }}
                    placeholder="••••••••"
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white backdrop-blur-sm placeholder:text-slate-500 transition-all duration-300 dark:bg-slate-800/50 ${inputRing}`}
                  />

                  {errors.newPassword && (
                    <p className="mt-1 text-xs text-red-400/80">
                      {errors.newPassword}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);

                      if (errors.confirmPassword) setErrors({});
                    }}
                    placeholder="••••••••"
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white backdrop-blur-sm placeholder:text-slate-500 transition-all duration-300 dark:bg-slate-800/50 ${inputRing}`}
                  />

                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-400/80">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${primaryBtn} mt-6`}
                >
                  {isLoading ? (
                    <Loader className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Reset Password
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              <button
                type="button"
                onClick={handleBack}
                className="mt-4 flex w-full items-center justify-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-400"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to verification
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
