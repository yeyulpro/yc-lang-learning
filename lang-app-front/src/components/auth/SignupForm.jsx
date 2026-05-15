import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useSignup } from "@/hooks/useAuth";

export default function SignupForm() {
  const signupMutation = useSignup();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.fullName = "Name is required";

    if (!formData.email.includes("@")) newErrors.email = "Valid email required";

    if (formData.password.length < 8)
      newErrors.password = "Password must be 8+ characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("SUBMIT CLICKED");
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // API 요청
    signupMutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const passwordStrength =
    formData.password.length >= 8
      ? "strong"
      : formData.password.length >= 4
        ? "medium"
        : "weak";

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:bg-slate-800/50";

  const primaryBtn =
    "w-full bg-linear-to-r from-cyan-500/80 to-cyan-600/80 hover:from-cyan-500 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50";

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl opacity-20 animate-pulse" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl opacity-20 animate-pulse" />

      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-2xl opacity-75" />

        <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl dark:bg-slate-950/90 md:p-12">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
              Create Account
            </h1>

            <p className="text-sm text-slate-400">
              Join our English learning community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Username
              </label>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-cyan-500/15 p-2 transition-colors group-hover:bg-cyan-500/25">
                  <User className="h-6 w-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50" />
                </div>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`${inputBase} pl-16 pr-4`}
                />
              </div>

              {errors.fullName && (
                <p className="mt-1 text-xs text-red-400/80">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-cyan-500/15 p-2 transition-colors group-hover:bg-cyan-500/25">
                  <Mail className="h-6 w-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50" />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`${inputBase} pl-16 pr-4`}
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-xs text-red-400/80">{errors.email}</p>
              )}
            </div>

            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </label>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-cyan-500/15 p-2 transition-colors group-hover:bg-cyan-500/25">
                  <Lock className="h-6 w-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`${inputBase} pl-16 pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-300 transition-colors hover:text-cyan-400"
                >
                  {showPassword ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-400/80">
                  {errors.password}
                </p>
              )}

              {formData.password && (
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <div
                    className={`h-1 flex-1 rounded-full ${passwordStrength === "strong" ? "bg-emerald-500" : passwordStrength === "medium" ? "bg-amber-500" : "bg-red-500"}`}
                  />

                  <span
                    className={
                      passwordStrength === "strong"
                        ? "text-emerald-400"
                        : passwordStrength === "medium"
                          ? "text-amber-400"
                          : "text-red-400"
                    }
                  >
                    {passwordStrength} password
                  </span>
                </div>
              )}
            </div>

            <div className="group">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Confirm Password
              </label>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-cyan-500/15 p-2 transition-colors group-hover:bg-cyan-500/25">
                  <Lock className="h-6 w-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50" />
                </div>

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`${inputBase} pl-16 pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-300 transition-colors hover:text-cyan-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-400/80">
                  {errors.confirmPassword}
                </p>
              )}

              {formData.confirmPassword &&
                formData.password === formData.confirmPassword && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400">
                    <CheckCircle className="h-4 w-4" />
                    Passwords match
                  </div>
                )}
            </div>

            <button
              type="submit"
              disabled={signupMutation.isPending}
              className={`${primaryBtn} mt-6`}
            >
              {signupMutation.isPending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            By signing up, you agree to our{" "}
            <a
              href="#"
              className="text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Privacy
            </a>
          </p>

          <p className="mt-4 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
