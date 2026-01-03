import Link from "next/link";
import { useState } from "react";
import { Geist } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts } from "@/data/products";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const categories = [
  "All",
  "CRM",
  "Marketing",
  "SaaS Ops",
  "AI",
  "Webhooks",
  "E-commerce",
  "Support",
  "Analytics",
  "Document Management",
  "Finance",
];
const tools = ["All", "n8n", "Make"];

export default function Products() {
  const [selectedTool, setSelectedTool] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const toolMatch = selectedTool === "All" || product.tool === selectedTool;
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

    let priceMatch = true;
    if (priceRange === "0-150") {
      priceMatch = product.price <= 150;
    } else if (priceRange === "150-200") {
      priceMatch = product.price > 150 && product.price <= 200;
    } else if (priceRange === "200+") {
      priceMatch = product.price > 200;
    }

    return toolMatch && categoryMatch && priceMatch;
  });

  return (
    <div className={`${geistSans.variable} font-sans`}>
      <Head>
        <title>Automation Products - Autorithm</title>
        <meta
          name="description"
          content="Browse our collection of premium automation workflows for n8n and Make.com."
        />
      </Head>
      <Header />

      {/* Page Hero */}
      <section className="bg-linear-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Automation Kits
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Production-ready n8n & Make workflows engineered for reliability.
            Deploy professional automation systems in minutes, not weeks.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tool Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Tool
              </label>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => setSelectedTool(tool)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTool === tool
                        ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="lg:w-48">
              <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border-none font-medium cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <option value="All">All Prices</option>
                <option value="0-150">$0 - $150</option>
                <option value="150-200">$150 - $200</option>
                <option value="200+">$200+</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
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
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                      ${product.price}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-24">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-zinc-400 dark:text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                No automation kits match your current filters. Try adjusting
                your search criteria or browse all products.
              </p>
              <button
                onClick={() => {
                  setSelectedTool("All");
                  setSelectedCategory("All");
                  setPriceRange("All");
                }}
                className="px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Need Something Custom?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Can&apos;t find exactly what you need? We build bespoke automation
            systems tailored to your specific requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Request Custom Automation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
