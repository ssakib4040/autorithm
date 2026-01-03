import { useRouter } from "next/router";
import Link from "next/link";
import { Geist } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductDetail } from "@/data/products";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Get product data from centralized source
  const product = id ? getProductDetail(id as string) : null;

  // Loading state
  if (!router.isReady) {
    return (
      <div
        className={`${geistSans.variable} font-sans min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center`}
      >
        <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div
        className={`${geistSans.variable} font-sans min-h-screen bg-white dark:bg-zinc-900`}
      >
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            The automation kit you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${geistSans.variable} font-sans`}>
      <Head>
        <title>{product.name} - Autorithm</title>
        <meta name="description" content={product.description} />
      </Head>
      <Header />

      {/* Product Hero */}
      <section className="bg-linear-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/products"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Products
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.tool === "n8n"
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                  }`}
                >
                  {product.tool}
                </span>
                <span className="ml-2 px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                {product.name}
              </h1>

              <p className="text-2xl text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {product.headline}
              </p>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                {product.description}
              </p>
            </div>

            {/* Price Card */}
            <div className="lg:w-80 w-full">
              <div className="sticky top-4 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="text-5xl font-bold text-zinc-900 dark:text-white mb-2">
                  ${product.price}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  One-time payment
                </p>
                <button className="w-full px-6 py-4 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors mb-4">
                  Purchase Now
                </button>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-600"
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
                    Instant download
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-600"
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
                    Complete documentation
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-600"
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
                    Email support included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Automation Does */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            What This Automation Does
          </h2>
          <div className="space-y-4">
            {product.steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm">
                  {typeof step === "string" ? index + 1 : step.number}
                </div>
                <div className="flex-1 pt-1">
                  {typeof step === "string" ? (
                    <p className="text-lg text-zinc-700 dark:text-zinc-300">
                      {step}
                    </p>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {step.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            What&apos;s Included
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.included.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <svg
                  className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Who */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                Perfect For
              </h2>
              <ul className="space-y-4">
                {product.forWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5"
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
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                Not Ideal For
              </h2>
              <ul className="space-y-4">
                {product.notFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-zinc-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Technical Details
          </h2>
          <div className="space-y-8">
            {/* APIs Used */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                APIs & Integrations
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.technicalDetails.apis.map((api, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-sm"
                  >
                    {api}
                  </span>
                ))}
              </div>
            </div>

            {/* Triggers */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                Workflow Triggers
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.technicalDetails.triggers.map((trigger, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {trigger}
                  </span>
                ))}
              </div>
            </div>

            {/* Assumptions */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                Requirements & Assumptions
              </h3>
              <ul className="space-y-3">
                {product.technicalDetails.assumptions.map(
                  (assumption, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {assumption}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {product.faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-b-0"
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-linear-to-b from-zinc-900 to-black dark:from-zinc-950 dark:to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Deploy This Automation?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Get instant access to the workflow, documentation, and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition-colors">
              Add to Cart - ${product.price}
            </button>
            <Link
              href="/products"
              className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-zinc-900 transition-colors"
            >
              Browse More Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
