"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface User {
  email: string;
  name: string;
  isAdmin?: boolean;
}

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;

    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      return null;
    }

    try {
      return JSON.parse(userData) as User;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center">
          <p className="text-zinc-600 dark:text-zinc-400">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white dark:bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">
            Profile
          </h1>

          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Name</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {user.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Email
                </p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {user.email}
                </p>
              </div>
              {user.isAdmin && (
                <div>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                    Admin
                  </span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
