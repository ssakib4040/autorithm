"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsApi } from "@/utils/api";

const categories = [
  "All",
  "CRM",
  "Marketing",
  "SaaS Ops",
  "E-commerce",
  "Support",
  "Analytics",
  "Document Management",
  "Finance",
];
const tools = ["All", "n8n", "Make"];

interface Product {
  id: number;
  name: string;
  description: string;
  tool: "n8n" | "Make";
  category: string;
  price: number;
  slug: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTool, setSelectedTool] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params: any = { page, limit: 12 };
        
        if (selectedTool !== "All") params.tool = selectedTool;
        if (selectedCategory !== "All") params.category = selectedCategory;
        
        if (priceRange === "0-150") {
          params.maxPrice = 150;
        } else if (priceRange === "150-200") {
          params.minPrice = 150;
          params.maxPrice = 200;
        } else if (priceRange === "200+") {
          params.minPrice = 200;
        }

        const data = await productsApi.getAll(params);
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedTool, selectedCategory, priceRange, page]);

  return (
    <>
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
                    onClick={() => {
                      setSelectedTool(tool);
                      setPage(1);
                    }}
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
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setPage(1);
                }}
                className="w-full px-4 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => {
                  setPriceRange(e.target.value);
                  setPage(1);
                }}
                className="w-full px-4 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none"
              >
                <option value="All">All Prices</option>
                <option value="0-150">Under $150</option>
                <option value="150-200">$150 - $200</option>
                <option value="200+">$200+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400">
                No products found with the selected filters.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group"
                  >
                    <div className="h-full p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all bg-white dark:bg-zinc-900">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                          {product.tool}
                        </span>
                        <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                          ${product.price}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 text-zinc-900 dark:text-white">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
