import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validToken, setValidToken] = useState(false);
  const router = useRouter();
  const { token, email } = router.query;

  useEffect(() => {
    // Validate token exists
    if (router.isReady && (!token || !email)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValidToken(false);
    } else if (router.isReady) {
      setValidToken(true);
    }
  }, [router.isReady, token, email]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // For demo: Just show success message
    setSuccess(true);
    setIsLoading(false);

    // Redirect to login after 3 seconds
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  if (!router.isReady) {
    return (
      <div
        className={`${geistSans.variable} font-sans min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900`}
      >
        <p className="text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (!validToken && router.isReady) {
    return (
      <div
        className={`${geistSans.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-zinc-900`}
      >
        <Header />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Invalid Reset Link
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              This password reset link is invalid or missing required
              information.
            </p>
            <Link
              href="/forgot-password"
              className="inline-block px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            >
              Request New Reset Link
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!validToken) {
    return null;
  }

  return (
    <div
      className={`${geistSans.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-zinc-900`}
    >
      <Head>
        <title>Reset Password - Autorithm</title>
      </Head>
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
              Reset Password
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Enter your new password below
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            {success ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
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
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Password Reset!
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Your password has been successfully reset.
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Redirecting to login page...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      {error}
                    </p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2"
                  >
                    New Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
                    placeholder="••••••••"
                  />
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                    Must be at least 8 characters
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2"
                  >
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Resetting..." : "Reset Password"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
