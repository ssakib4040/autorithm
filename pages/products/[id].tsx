import { useRouter } from "next/router";
import Link from "next/link";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Product database (in a real app, this would come from an API/database)
const productsData: { [key: string]: Product } = {
  "1": {
    id: "1",
    name: "AI Lead Enrichment System",
    headline:
      "Transform cold leads into qualified prospects with AI-powered intelligence",
    description:
      "Automatically research, score, and enrich every lead that enters your pipeline. This automation uses GPT-4 to gather company information, assess fit, and prioritize your outreach—saving hours of manual research.",
    tool: "n8n",
    category: "CRM",
    price: 149,
    steps: [
      "Lead enters your CRM or form",
      "System extracts company domain and contact info",
      "AI researches company website, LinkedIn, and public data",
      "GPT-4 analyzes fit based on your ICP criteria",
      "Lead score calculated and assigned",
      "Enriched data written back to CRM",
      "Slack notification sent to sales team for hot leads",
    ],
    included: [
      "n8n workflow JSON file",
      "Complete setup guide (PDF)",
      "Video walkthrough",
      "API integration documentation",
      "Customization instructions",
      "30-day email support",
    ],
    forWho: [
      "B2B sales teams with high lead volume",
      "Companies using CRMs like HubSpot, Pipedrive, or Salesforce",
      "Teams that need to prioritize outreach efficiently",
      "Businesses with defined ideal customer profiles",
    ],
    notFor: [
      "B2C businesses with individual consumers",
      "Companies without a CRM system",
      "Teams that prefer 100% manual lead qualification",
      "Businesses with very low lead volume (<10/week)",
    ],
    technicalDetails: {
      apis: ["OpenAI GPT-4", "Clearbit API", "HubSpot API", "Slack API"],
      triggers: [
        "Webhook (CRM form submission)",
        "Scheduled polling",
        "Manual trigger",
      ],
      assumptions: [
        "You have an OpenAI API key",
        "Your CRM has API access",
        "Leads include company domain or email",
        "You have defined ICP criteria",
      ],
    },
    faqs: [
      {
        question: "What CRMs does this work with?",
        answer:
          "The automation is built for n8n, which connects to 400+ apps. It works out-of-the-box with HubSpot, Pipedrive, and Salesforce. We include instructions for adapting to other CRMs.",
      },
      {
        question: "How much does the AI research cost?",
        answer:
          "GPT-4 API costs approximately $0.03-0.05 per lead enrichment. For 1,000 leads/month, expect ~$30-50 in OpenAI costs.",
      },
      {
        question: "Can I customize the scoring criteria?",
        answer:
          "Yes. The workflow includes a configuration node where you define your ideal customer profile. The setup guide walks you through customization.",
      },
      {
        question: "Do I need technical skills to set this up?",
        answer:
          "Basic technical knowledge is helpful. If you can follow documentation and configure API keys, you'll be fine. The setup guide is written for non-developers.",
      },
      {
        question: "What if I get stuck during setup?",
        answer:
          "Every purchase includes 30 days of email support. We'll help you get it running.",
      },
    ],
  },
  "2": {
    id: "2",
    name: "SaaS Onboarding Orchestrator",
    headline:
      "Guide new users from signup to activation with automated email sequences and task tracking",
    description:
      "A complete user onboarding system that sends personalized email sequences, tracks user progress, and triggers interventions when users get stuck. Built to increase activation rates and reduce churn.",
    tool: "Make",
    category: "SaaS Ops",
    price: 199,
    steps: [
      "User signs up for your SaaS product",
      "Onboarding sequence initialized in Make",
      "Welcome email sent immediately",
      "User activity tracked (login, feature usage, etc.)",
      "Conditional emails sent based on progress",
      "Stuck users flagged and sales team notified",
      "Success metrics logged to analytics dashboard",
    ],
    included: [
      "Make.com scenario blueprint",
      "Email templates (5 onboarding emails)",
      "Complete setup guide (PDF + Video)",
      "Analytics dashboard setup",
      "Customization guide",
      "60-day email support",
    ],
    forWho: [
      "SaaS companies with self-serve signups",
      "Product teams focused on activation metrics",
      "Businesses using email marketing platforms",
      "Companies that want to automate user journeys",
    ],
    notFor: [
      "Enterprise sales with manual onboarding",
      "Products without clear activation milestones",
      "Companies without email infrastructure",
      "Pure content websites (not SaaS)",
    ],
    technicalDetails: {
      apis: [
        "Stripe API",
        "SendGrid/Mailgun",
        "Segment",
        "Intercom",
        "Google Sheets",
      ],
      triggers: [
        "Webhook (user signup)",
        "Scheduled checks (hourly)",
        "User activity events",
      ],
      assumptions: [
        "You can send webhooks from your app",
        "You have an email service provider",
        "User data includes email and signup timestamp",
        "You've defined activation milestones",
      ],
    },
    faqs: [
      {
        question: "What email service does this work with?",
        answer:
          "The automation works with SendGrid, Mailgun, Postmark, or any ESP with an API. We provide examples for the most popular services.",
      },
      {
        question: "Can I customize the email sequence?",
        answer:
          "Absolutely. We provide 5 template emails, but you can edit the copy, add/remove emails, and adjust timing completely.",
      },
      {
        question: "How do you track user progress?",
        answer:
          "The workflow listens for webhooks or polls your database. You send events like 'user_logged_in' or 'feature_used', and the automation updates their journey state.",
      },
      {
        question: "Does this work with Intercom or other tools?",
        answer:
          "Yes. Make.com integrates with 1,500+ apps. We show you how to connect Intercom, Segment, Mixpanel, and more.",
      },
      {
        question: "What if our onboarding flow is complex?",
        answer:
          "The blueprint handles multi-step journeys with branches and conditions. For very complex flows, we offer customization services.",
      },
    ],
  },
  "3": {
    id: "3",
    name: "E-commerce Order Pipeline",
    headline:
      "Process orders, manage inventory, and sync across platforms automatically",
    description:
      "End-to-end order processing automation that handles everything from order receipt to fulfillment tracking. Syncs inventory across Shopify, WooCommerce, and your warehouse system.",
    tool: "n8n",
    category: "E-commerce",
    price: 179,
    steps: [
      "Order received from Shopify/WooCommerce",
      "Payment verification check",
      "Inventory levels updated across all platforms",
      "Order details sent to fulfillment system",
      "Shipping label generated automatically",
      "Customer receives tracking email",
      "Low inventory alerts sent when needed",
    ],
    included: [
      "n8n workflow JSON file",
      "Multi-platform setup guide",
      "Video walkthrough (45 minutes)",
      "Inventory sync documentation",
      "Error handling guide",
      "90-day email support",
    ],
    forWho: [
      "E-commerce businesses selling on multiple platforms",
      "Shops with complex inventory management needs",
      "Businesses using third-party fulfillment",
      "Companies wanting to reduce manual order processing",
    ],
    notFor: [
      "Single-product businesses with simple workflows",
      "Companies without inventory management systems",
      "Businesses selling only digital products",
      "Stores with <50 orders per month",
    ],
    technicalDetails: {
      apis: [
        "Shopify API",
        "WooCommerce API",
        "ShipStation API",
        "SendGrid",
        "Google Sheets",
      ],
      triggers: [
        "Webhook (new order)",
        "Inventory level changes",
        "Manual trigger",
      ],
      assumptions: [
        "You have API access to your e-commerce platform",
        "Inventory system has API or spreadsheet export",
        "You use a shipping platform with API access",
        "Order volumes justify automation",
      ],
    },
    faqs: [
      {
        question: "Which e-commerce platforms are supported?",
        answer:
          "Out of the box: Shopify and WooCommerce. The workflow can be adapted for BigCommerce, Magento, or any platform with webhook support.",
      },
      {
        question: "How does inventory syncing work?",
        answer:
          "When an order is placed on any platform, the workflow updates inventory counts everywhere. You set a master source (like your warehouse system) and it propagates changes.",
      },
      {
        question: "Can this integrate with my fulfillment center?",
        answer:
          "If your fulfillment center has an API or accepts orders via email/CSV, yes. We provide examples for ShipStation, ShipBob, and custom integrations.",
      },
      {
        question: "What happens if payment fails?",
        answer:
          "The workflow includes payment verification and error handling. Failed payments trigger notifications and don't proceed to fulfillment.",
      },
      {
        question: "Do you support international shipping?",
        answer:
          "Yes. The workflow handles multiple currencies and shipping zones. You configure your rules during setup.",
      },
    ],
  },
};

interface Product {
  id: string;
  name: string;
  headline: string;
  description: string;
  tool: string;
  category: string;
  price: number;
  steps: string[];
  included: string[];
  forWho: string[];
  notFor: string[];
  technicalDetails: {
    apis: string[];
    triggers: string[];
    assumptions: string[];
  };
  faqs: Array<{ question: string; answer: string }>;
}

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Get product data
  const product = id ? productsData[id as string] : null;

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
        <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="text-2xl font-bold text-zinc-900 dark:text-white"
              >
                Autorithm
              </Link>
            </div>
          </div>
        </nav>
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
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-zinc-900 dark:text-white"
              >
                Autorithm
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/products"
                className="text-zinc-900 dark:text-white font-medium"
              >
                Products
              </Link>
              <Link
                href="/#services"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                Get Custom Automation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-16">
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
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    {step}
                  </p>
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
                  className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
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
                      className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
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
                      className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-0.5"
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
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
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
      <section className="py-16 bg-gradient-to-b from-zinc-900 to-black dark:from-zinc-950 dark:to-black">
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

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">
              Autorithm
            </div>
            <div className="flex gap-8 text-zinc-400">
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
            © 2025 Autorithm. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
