import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFeaturedProducts } from "@/data/products";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Get featured products
const featuredProducts = getFeaturedProducts(6);

const useCases = [
  {
    title: "SaaS Onboarding",
    description:
      "Orchestrate user journeys from signup to activation with intelligent workflows",
  },
  {
    title: "Lead Qualification",
    description:
      "Score, enrich, and route leads automatically based on custom criteria",
  },
  {
    title: "E-commerce Operations",
    description:
      "Sync inventory, process orders, and manage fulfillment across platforms",
  },
  {
    title: "Internal Tooling",
    description:
      "Build custom automation systems that connect your internal tools seamlessly",
  },
  {
    title: "AI Workflows",
    description:
      "Integrate GPT, Claude, and other AI models into production-ready systems",
  },
];

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Head>
        <title>Autorithm - Premium Automation Marketplace</title>
        <meta
          name="description"
          content="Pre-built automation workflows for n8n and Make.com. Save hours of development time with our premium automation kits."
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
                Premium Automation Systems for n8n & Make.com
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Pre-built workflows, AI automations, and custom systems
                engineered for reliability. Skip the trial-and-error and deploy
                production-ready automation from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="px-8 py-4 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-center"
                >
                  Browse Automation Kits
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-lg border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-center"
                >
                  Get Custom Automation
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Abstract automation flow visual */}
              <div className="relative h-100 flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Connection lines */}
                  <line
                    x1="80"
                    y1="100"
                    x2="200"
                    y2="200"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-700"
                  />
                  <line
                    x1="320"
                    y1="100"
                    x2="200"
                    y2="200"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-700"
                  />
                  <line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="300"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-700"
                  />

                  {/* Nodes */}
                  <circle
                    cx="80"
                    cy="100"
                    r="30"
                    fill="currentColor"
                    className="text-blue-500"
                    opacity="0.2"
                  />
                  <circle
                    cx="80"
                    cy="100"
                    r="20"
                    fill="currentColor"
                    className="text-blue-500"
                  />

                  <circle
                    cx="320"
                    cy="100"
                    r="30"
                    fill="currentColor"
                    className="text-purple-500"
                    opacity="0.2"
                  />
                  <circle
                    cx="320"
                    cy="100"
                    r="20"
                    fill="currentColor"
                    className="text-purple-500"
                  />

                  <circle
                    cx="200"
                    cy="200"
                    r="40"
                    fill="currentColor"
                    className="text-emerald-500"
                    opacity="0.2"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="28"
                    fill="currentColor"
                    className="text-emerald-500"
                  />

                  <circle
                    cx="200"
                    cy="300"
                    r="35"
                    fill="currentColor"
                    className="text-orange-500"
                    opacity="0.2"
                  />
                  <circle
                    cx="200"
                    cy="300"
                    r="24"
                    fill="currentColor"
                    className="text-orange-500"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white dark:bg-zinc-900" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Three ways to transform your operations with professional
              automation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Automation Kits */}
            <div className="p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Automation Kits
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Ready-to-deploy workflow templates for common business
                processes. Install in minutes, customize to your needs, start
                seeing results immediately.
              </p>
              <Link
                href="#products"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Browse Kits →
              </Link>
            </div>

            {/* Custom Automation */}
            <div className="p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Custom Automation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Bespoke automation systems designed specifically for your
                workflows. From requirements to deployment, we handle the entire
                build process.
              </p>
              <Link
                href="#contact"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                Start a Project →
              </Link>
            </div>

            {/* Managed Automation */}
            <div className="p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Managed Automation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Ongoing maintenance, monitoring, and optimization for your
                automation infrastructure. Focus on your business while we keep
                everything running smoothly.
              </p>
              <Link
                href="#contact"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* n8n & Make.com Focus */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Why n8n & Make.com?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                These platforms are incredibly powerful—they can connect
                virtually any tool, process complex logic, and scale to
                enterprise workloads.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                But power without structure leads to brittle automations that
                break in production, lack proper error handling, and become
                impossible to maintain.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Comprehensive Error Handling
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Every failure scenario mapped and handled gracefully
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Modular Logic Architecture
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Clean, reusable components that are easy to update
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Built for Scale
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Performance optimized to handle growing data volumes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Production-Ready from Day One
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Thoroughly tested and documented for immediate deployment
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#products"
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  View n8n Templates
                </Link>
                <Link
                  href="#products"
                  className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  View Make Templates
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                The Autorithm Approach
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-sm text-blue-600 dark:text-blue-400 mb-2">
                    01. Architecture
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Every workflow follows proven patterns for reliability and
                    maintainability
                  </p>
                </div>
                <div>
                  <div className="font-mono text-sm text-purple-600 dark:text-purple-400 mb-2">
                    02. Documentation
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Clear setup guides, configuration instructions, and
                    troubleshooting steps
                  </p>
                </div>
                <div>
                  <div className="font-mono text-sm text-emerald-600 dark:text-emerald-400 mb-2">
                    03. Testing
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Validated against real-world scenarios and edge cases before
                    release
                  </p>
                </div>
                <div>
                  <div className="font-mono text-sm text-orange-600 dark:text-orange-400 mb-2">
                    04. Support
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Ongoing updates and assistance to ensure long-term success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white dark:bg-zinc-900" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Featured Automation Kits
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Production-ready workflows that solve real business problems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.tool === "n8n"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    }`}
                  >
                    {product.tool}
                  </span>
                  <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                    ${product.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="block w-full px-4 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-center"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block px-8 py-4 rounded-lg border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Autorithm */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Why Choose Autorithm?
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              The difference between cheap templates and professional automation
              systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
                ✓ Autorithm Systems
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    <strong>Bulletproof error handling</strong> - Every edge
                    case covered
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    <strong>Complete documentation</strong> - Setup guides and
                    configuration instructions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    <strong>Production-tested</strong> - Validated in real-world
                    environments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    <strong>Modular architecture</strong> - Easy to customize
                    and extend
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    <strong>Ongoing support</strong> - Updates and assistance
                    when you need it
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    <strong>Built for scale</strong> - Handle growing workloads
                    without refactoring
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-zinc-400 dark:text-zinc-600 mb-6">
                ✗ Cheap Templates
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Break on unexpected inputs and edge cases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Minimal or no documentation provided
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Demo workflows that fail in production
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Monolithic design that&apos;s hard to modify
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    No support after purchase
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Performance issues at scale
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Proven Use Cases
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              See how Autorithm systems transform operations across industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-24 bg-linear-to-b from-zinc-900 to-black dark:from-zinc-950 dark:to-black"
        id="contact"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Build Better Automation?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            Whether you need a ready-made kit or a fully custom system,
            we&apos;re here to help you automate with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#products"
              className="px-8 py-4 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition-colors text-center"
            >
              Explore Products
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-zinc-900 transition-colors text-center"
            >
              Book Custom Automation
            </Link>
          </div>
          <p className="text-zinc-400 mt-8">
            Questions? Email us at{" "}
            <a
              href="mailto:hello@autorithm.com"
              className="text-white hover:underline"
            >
              hello@autorithm.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
