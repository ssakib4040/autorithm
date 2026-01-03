import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Sample product data (same as from products page)
const allProducts = [
  {
    id: 1,
    name: "AI Lead Enrichment System",
    description:
      "Automatically enrich leads with AI-powered research and scoring",
    tool: "n8n",
    category: "CRM",
    price: 149,
  },
  {
    id: 2,
    name: "SaaS Onboarding Orchestrator",
    description:
      "Complete user onboarding workflow with email sequences and task tracking",
    tool: "Make",
    category: "SaaS Ops",
    price: 199,
  },
  {
    id: 3,
    name: "E-commerce Order Pipeline",
    description: "Process orders, manage inventory, and sync across platforms",
    tool: "n8n",
    category: "E-commerce",
    price: 179,
  },
];

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (status === "unauthenticated") {
      router.push("/login?redirect=/profile");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div
        className={`${geistSans.variable} font-sans min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900`}
      >
        <p className="text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const purchasedProducts = allProducts.filter((product) =>
    session.user?.purchasedProducts?.includes(product.id)
  );

  return (
    <div
      className={`${geistSans.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-zinc-900`}
    >
      {" "}
      <Head>
        <title>My Profile - Autorithm</title>
      </Head>{" "}
      <Header />
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
              My Account
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Manage your profile and access your purchased automations
            </p>
          </div>

          {/* Account Info */}
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Account Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-1">
                  Name
                </label>
                <p className="text-lg text-zinc-900 dark:text-white">
                  {session.user?.name}
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-1">
                  Email
                </label>
                <p className="text-lg text-zinc-900 dark:text-white">
                  {session.user?.email}
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-6 py-3 rounded-lg border-2 border-red-600 text-red-600 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Purchased Products */}
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              My Automation Kits
            </h2>

            {purchasedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  No purchases yet
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Browse our automation kits to get started
                </p>
                <Link
                  href="/products"
                  className="inline-block px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {purchasedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              product.tool === "n8n"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                            }`}
                          >
                            {product.tool}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
                            Download Workflow
                          </button>
                          <Link
                            href={`/products/${product.id}`}
                            className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                          >
                            View Documentation
                          </Link>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-zinc-500 dark:text-zinc-500 mb-1">
                          Purchased
                        </div>
                        <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          <svg
                            className="w-5 h-5 inline-block mr-1"
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
                          Owned
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
