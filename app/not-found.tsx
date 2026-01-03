import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-zinc-900 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
