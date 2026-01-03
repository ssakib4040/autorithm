"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Platform = "n8n" | "make";

export default function ProductDetails() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("n8n");

  // Product data
  const product = {
    name: "AI Lead Enrichment System",
    slug: "ai-lead-enrichment",
    category: "CRM",
    headline:
      "Transform cold leads into qualified prospects with AI-powered intelligence",
    description:
      "Transform raw leads into actionable prospects. Our AI Lead Enrichment System automatically researches companies, finds decision-makers, and scores leads based on your ideal customer profile—so your sales team only talks to qualified opportunities.",

    platforms: {
      n8n: {
        price: 149,
        difficulty: "Intermediate",
        setupTime: "2-4 hours",
      },
      make: {
        price: 169,
        difficulty: "Beginner",
        setupTime: "1-2 hours",
      },
    },

    keyFeatures: [
      "Automated company research via public APIs and AI analysis",
      "Contact enrichment with job titles and social profiles",
      "Lead scoring based on configurable criteria",
      "Automatic CRM updates with enriched data",
      "Slack/email notifications for high-value leads",
    ],

    steps: [
      {
        number: 1,
        title: "Lead Capture",
        description:
          "New leads from forms, ads, or CRM triggers enter the workflow",
      },
      {
        number: 2,
        title: "Company Research",
        description:
          "AI gathers firmographic data, funding info, and tech stack details",
      },
      {
        number: 3,
        title: "Contact Enrichment",
        description:
          "Find decision-makers, validate emails, and pull social profiles",
      },
      {
        number: 4,
        title: "Lead Scoring",
        description:
          "Score based on company size, industry fit, and engagement signals",
      },
      {
        number: 5,
        title: "CRM Sync & Notification",
        description:
          "Update your CRM and notify sales reps about hot leads instantly",
      },
    ],

    included: [
      "Complete workflow (JSON export)",
      "AI prompt templates for enrichment",
      "Lead scoring configuration guide",
      "CRM integration setup (Salesforce, HubSpot, Pipedrive)",
      "Error handling and retry logic",
      "30 days of implementation support",
    ],

    forWho: [
      "B2B sales teams who need better lead intelligence",
      "Marketing teams running high-volume campaigns",
      "Sales ops professionals managing CRM data quality",
      "Startups looking to punch above their weight with automation",
    ],

    notFor: [
      "B2C businesses with consumer-focused products",
      "Teams without a CRM system in place",
      "Organizations with strict data handling restrictions",
    ],

    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "2-4 hours",
      apis: ["OpenAI GPT-4", "Clearbit API", "HubSpot API", "Slack API"],
      triggers: [
        "Webhook (CRM form submission)",
        "Scheduled polling",
        "Manual trigger",
      ],
      assumptions: [
        "You have API access to your CRM",
        "You have an OpenAI or similar AI API key",
        "Basic understanding of automation workflows",
      ],
    },

    faqs: [
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
    ],
  };

  const currentPlatform = product.platforms[selectedPlatform];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white dark:bg-zinc-900">
        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950 border-t-2 border-zinc-200 dark:border-zinc-800 p-4 z-50 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                ${currentPlatform.price}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                {selectedPlatform === "n8n" ? "n8n" : "Make.com"} •{" "}
                {currentPlatform.difficulty}
              </div>
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
                {product.category}
              </span>

              {/* Product Name with Platform Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white">
                  {product.name}
                </h1>
                <span
                  className={`px-4 py-2 rounded-lg text-base font-bold shrink-0 ${
                    selectedPlatform === "n8n"
                      ? "bg-blue-600 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {selectedPlatform === "n8n" ? "n8n" : "Make"}
                </span>
              </div>

              {/* Headline */}
              <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
                {product.headline}
              </p>

              {/* Description */}
              <p className="text-base text-zinc-600 dark:text-zinc-400 mb-10">
                {product.description}
              </p>

              {/* How It Works */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                  How It Works
                </h2>
                <div className="space-y-4">
                  {product.steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                        {step.number}
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
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, index) => (
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
                  ))}
                </ul>
              </div>

              {/* Perfect For / Not For */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900">
                  <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Perfect For
                  </h3>
                  <ul className="space-y-1.5">
                    {product.forWho.map((item, index) => (
                      <li
                        key={index}
                        className="text-emerald-800 dark:text-emerald-200 text-xs"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Not For
                  </h3>
                  <ul className="space-y-1.5">
                    {product.notFor.map((item, index) => (
                      <li
                        key={index}
                        className="text-zinc-600 dark:text-zinc-400 text-xs"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
                      {product.technicalDetails.complexity}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                      SETUP TIME
                    </h3>
                    <p className="text-zinc-900 dark:text-white font-medium">
                      {product.technicalDetails.setupTime}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                      APIS & INTEGRATIONS
                    </h3>
                    <p className="text-zinc-900 dark:text-white text-xs">
                      {product.technicalDetails.apis.join(", ")}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                      REQUIREMENTS
                    </h3>
                    <ul className="space-y-0.5">
                      {product.technicalDetails.assumptions.map(
                        (assumption, index) => (
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
                  {product.faqs.map((faq, index) => (
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
                  <div className="text-5xl font-bold text-zinc-900 dark:text-white mb-3">
                    ${currentPlatform.price}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    One-time payment
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {currentPlatform.difficulty} • {currentPlatform.setupTime}
                  </p>
                </div>

                <button
                  className={`w-full py-4 rounded-lg font-bold text-lg mb-4 transition-all transform hover:scale-105 ${
                    selectedPlatform === "n8n"
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                  }`}
                >
                  Buy {selectedPlatform === "n8n" ? "n8n" : "Make.com"} Version
                </button>

                {/* Platform Switcher */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                    Also available for{" "}
                    {selectedPlatform === "n8n" ? "Make.com" : "n8n"}
                  </p>
                  <button
                    onClick={() =>
                      setSelectedPlatform(
                        selectedPlatform === "n8n" ? "make" : "n8n"
                      )
                    }
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Switch to {selectedPlatform === "n8n" ? "Make.com" : "n8n"}{" "}
                    →
                  </button>
                </div>
              </div>

              {/* What's Included */}
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {product.included.map((item, index) => (
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
