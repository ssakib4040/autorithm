import Link from "next/link";
import Head from "next/head";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <div
      className={`${geistSans.variable} font-sans min-h-screen bg-white dark:bg-zinc-900 flex flex-col`}
    >
      <Head>
        <title>404 - Page Not Found | Autorithm</title>
      </Head>
      <Header />

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* Abstract broken workflow visual */}
          <div className="mb-8 flex justify-center">
            <svg viewBox="0 0 200 200" className="w-48 h-48">
              {/* Disconnected nodes representing broken workflow */}
              <circle
                cx="50"
                cy="80"
                r="20"
                fill="currentColor"
                className="text-zinc-300 dark:text-zinc-700"
              />
              <circle
                cx="150"
                cy="80"
                r="20"
                fill="currentColor"
                className="text-zinc-300 dark:text-zinc-700"
              />
              <circle
                cx="100"
                cy="140"
                r="20"
                fill="currentColor"
                className="text-zinc-300 dark:text-zinc-700"
              />

              {/* Broken connection lines */}
              <line
                x1="70"
                y1="80"
                x2="90"
                y2="80"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="5,5"
                className="text-zinc-300 dark:text-zinc-700"
              />
              <line
                x1="110"
                y1="80"
                x2="130"
                y2="80"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="5,5"
                className="text-zinc-300 dark:text-zinc-700"
              />
              <line
                x1="65"
                y1="95"
                x2="90"
                y2="125"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="5,5"
                className="text-zinc-300 dark:text-zinc-700"
              />
              <line
                x1="135"
                y1="95"
                x2="110"
                y2="125"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="5,5"
                className="text-zinc-300 dark:text-zinc-700"
              />

              {/* Error X in the middle */}
              <line
                x1="90"
                y1="90"
                x2="110"
                y2="110"
                stroke="currentColor"
                strokeWidth="4"
                className="text-red-500"
              />
              <line
                x1="110"
                y1="90"
                x2="90"
                y2="110"
                stroke="currentColor"
                strokeWidth="4"
                className="text-red-500"
              />
            </svg>
          </div>

          <div className="font-mono text-7xl sm:text-8xl font-bold text-zinc-900 dark:text-white mb-4">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Workflow Not Found
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg mx-auto">
            Looks like this automation path doesn&apos;t exist. The page
            you&apos;re looking for might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 rounded-lg border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Browse Products
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Need help finding something?{" "}
              <Link
                href="/#contact"
                className="text-zinc-900 dark:text-white hover:underline font-medium"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
