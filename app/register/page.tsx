"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { authApi } from "@/utils/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await authApi.register({ name, email, password });
      router.push("/login?registered=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-12 min-h-screen bg-white dark:bg-zinc-900">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
              Create Account
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Start automating with premium workflows
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
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
                  htmlFor="name"
                  className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                  Must be at least 6 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-zinc-900 dark:text-white hover:underline"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
