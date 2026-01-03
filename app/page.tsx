import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFeaturedProducts } from "@/data/products";

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
    <>
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
                    x1="200"
                    y1="200"
                    x2="320"
                    y2="100"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-700"
                  />
                  <line
                    x1="200"
                    y1="200"
                    x2="320"
                    y2="300"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-700"
                  />

                  {/* Nodes */}
                  <circle
                    cx="80"
                    cy="100"
                    r="20"
                    className="fill-zinc-900 dark:fill-white"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="24"
                    className="fill-blue-500"
                  />
                  <circle
                    cx="320"
                    cy="100"
                    r="20"
                    className="fill-zinc-900 dark:fill-white"
                  />
                  <circle
                    cx="320"
                    cy="300"
                    r="20"
                    className="fill-zinc-900 dark:fill-white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-zinc-900 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-white mb-2">50+</p>
              <p className="text-zinc-400">Ready-to-Use Workflows</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">10K+</p>
              <p className="text-zinc-400">Hours Saved</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">99.9%</p>
              <p className="text-zinc-400">Reliability Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Featured Automation Kits
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Browse our most popular workflows or request a custom solution
              tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="h-full p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all bg-white dark:bg-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                      {product.tool}
                    </span>
                    <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                      ${product.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500 dark:text-zinc-500">
                      {product.category}
                    </span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              How Autorithm Works
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              From purchase to production in minutes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center text-2xl font-bold text-white dark:text-zinc-900 mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Choose Your Kit
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Browse our marketplace and select the automation workflow that
                fits your needs, or request a custom build.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center text-2xl font-bold text-white dark:text-zinc-900 mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Import & Configure
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Import the workflow JSON into n8n or Make.com, then customize
                with your API keys and credentials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center text-2xl font-bold text-white dark:text-zinc-900 mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Deploy & Scale
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Activate your automation and watch it work. Get free support
                for setup questions and scaling.
              </p>
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
              href="/products"
              className="px-8 py-4 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition-colors text-center"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
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
    </>
  );
}
