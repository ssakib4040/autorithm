import Link from "next/link";
// import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsApi } from "@/utils/api";
import { notFound } from "next/navigation";
import { Product } from "@/types/product";

type Platform = "n8n" | "make";

export default async function ProductDetails({
  params,
  searchParams,
}: // searchParams,
{
  params: { slug: string };
  searchParams: { tool: string };
}) {
  const { slug } = await params;
  const { tool } = await searchParams;
  const selectedPlatform: Platform = "n8n";

  const productDetails = (await productsApi.getBySlug(
    `${slug}?tool=${tool}`
  )) as Product;

  if ("status" in productDetails && productDetails.status === 404) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white dark:bg-zinc-900">
        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950 border-t-2 border-zinc-200 dark:border-zinc-800 p-4 z-50 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              {productDetails.discount ? (
                <>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                      $
                      {Math.round(
                        productDetails.price *
                          (1 - productDetails.discount.percentage / 100)
                      )}
                    </div>
                    <div className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 line-through">
                      ${productDetails.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {productDetails.discount.percentage}% OFF
                    </span>
                    {productDetails.discount.timeLeft && (
                      <>
                        <span className="text-xs text-zinc-400">•</span>
                        <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                          {productDetails.discount.timeLeft} left
                        </span>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    ${productDetails.price}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    {productDetails.tool === "n8n" ? "n8n" : "Make.com"} •{" "}
                    {productDetails.technicalDetails.complexity}
                  </div>
                </>
              )}
            </div>
            <button
              className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                selectedPlatform === "n8n"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 pb-24 lg:pb-8">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-8"
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
            Back
          </Link>

          {/* 2 COLUMN GRID - ENTIRE PAGE */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT GRID - All Product Details */}
            <div>
              {/* Category */}
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-4">
                {productDetails.category}
              </span>

              {/* Product Name with Platform Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white">
                  {productDetails.name}
                </h1>
                <span
                  className={`px-4 py-2 rounded-lg text-base font-bold shrink-0 ${
                    productDetails.tool === "n8n"
                      ? "bg-blue-600 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {productDetails.tool === "n8n" ? "n8n" : "Make"}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-zinc-600 dark:text-zinc-400 mb-10">
                {productDetails.description}
              </p>

              {/* How It Works */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                  How It Works
                </h2>
                <div className="space-y-4">
                  {productDetails.howItWorks.map(
                    (
                      step: { title: string; description: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex gap-4 p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
                      >
                        <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {productDetails.keyFeatures.map(
                    (feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
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
                          {feature}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Technical Details */}
              <div className="mb-10 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                  Technical Details
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                      COMPLEXITY
                    </h3>
                    <p className="text-zinc-900 dark:text-white font-medium">
                      {productDetails.technicalDetails.complexity}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                      SETUP TIME
                    </h3>
                    <p className="text-zinc-900 dark:text-white font-medium">
                      {productDetails.technicalDetails.setupTime}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                      APIS & INTEGRATIONS
                    </h3>
                    <p className="text-zinc-900 dark:text-white text-xs">
                      {productDetails.technicalDetails.apis.join(", ")}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                      REQUIREMENTS
                    </h3>
                    <ul className="space-y-0.5">
                      {productDetails.technicalDetails.requirements.map(
                        (assumption: string, index: number) => (
                          <li
                            key={index}
                            className="text-zinc-700 dark:text-zinc-300 text-xs"
                          >
                            • {assumption}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  FAQs
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      question: "What is the refund policy?",
                      answer:
                        "Due to the digital nature of our products, we cannot offer refunds once purchased. We provide 30 days of implementation support to ensure your success.",
                    },
                    {
                      question: "What CRMs does this integrate with?",
                      answer:
                        "Out of the box: Salesforce, HubSpot, and Pipedrive. We include setup guides for these three. The workflow can be adapted to any CRM with an API.",
                    },
                    {
                      question: "How accurate is the lead scoring?",
                      answer:
                        "The scoring model is configurable based on your ICP. Typical accuracy is 75-85% when properly tuned with your historical data.",
                    },
                    {
                      question: "What AI providers are supported?",
                      answer:
                        "The workflow is built for OpenAI GPT-4, but can be adapted for Anthropic Claude, Google Gemini, or any LLM API.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
                    >
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT GRID - CTA Card (Sticky) */}
            <div className="lg:sticky lg:top-4 h-fit space-y-6">
              {/* CTA CARD */}
              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800">
                <div className="mb-6">
                  {productDetails.discount ? (
                    <>
                      {/* Discount Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                        <svg
                          className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                          {productDetails.discount.percentage}% OFF •{" "}
                          {productDetails.discount.reason}
                        </span>
                      </div>

                      {/* Pricing with Discount */}
                      <div className="flex items-end gap-3 mb-2">
                        <div className="text-5xl font-bold text-zinc-900 dark:text-white">
                          $
                          {Math.round(
                            productDetails.price *
                              (1 - productDetails.discount.percentage / 100)
                          )}
                        </div>
                        <div className="text-2xl font-semibold text-zinc-400 dark:text-zinc-600 line-through mb-1.5">
                          ${productDetails.price}
                        </div>
                      </div>

                      {/* Time Left */}
                      {productDetails.discount.timeLeft && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-100 dark:bg-red-900/30 mb-3">
                          <svg
                            className="w-3.5 h-3.5 text-red-600 dark:text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-xs font-semibold text-red-700 dark:text-red-300">
                            {productDetails.discount.timeLeft} left
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-5xl font-bold text-zinc-900 dark:text-white mb-3">
                        ${productDetails.price}
                      </div>
                    </>
                  )}

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    One-time payment
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {productDetails.technicalDetails.complexity} •{" "}
                    {productDetails.technicalDetails.setupTime}
                  </p>
                </div>

                <button
                  className={`w-full py-4 rounded-lg font-bold text-lg mb-4 transition-all transform hover:scale-105 ${
                    productDetails.tool === "n8n"
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                  }`}
                >
                  Buy {productDetails.tool === "n8n" ? "n8n" : "Make.com"}{" "}
                  Version
                </button>

                {/* Platform Switcher */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                    Also available for{" "}
                    {productDetails.tool === "n8n" ? "Make.com" : "N8N"}
                  </p>
                  <Link
                    href={`/products/${productDetails.slug}?tool=${
                      productDetails.tool === "n8n" ? "make" : "n8n"
                    }`}
                    // onClick={() =>
                    //   setSelectedPlatform(
                    //     selectedPlatform === "n8n" ? "make" : "n8n"
                    //   )
                    // }
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Switch to{" "}
                    {productDetails.tool === "n8n" ? "Make.com" : "N8N"} →
                  </Link>
                </div>
              </div>

              {/* What's Included */}
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {productDetails.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
