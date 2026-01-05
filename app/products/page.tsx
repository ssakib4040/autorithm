import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsApi } from "@/utils/api";
import Filters from "./partials/Filters";
import { Product } from "@/types/product";

const tools = ["All", "n8n", "Make"];

interface ProductsPageProps {
  searchParams: Promise<{
    tool?: string;
    category?: string;
    priceRange?: string;
    page?: string;
  }>;
}

export default async function Products({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const selectedTool = params.tool || "All";
  const selectedCategory = params.category || "All";
  const priceRange = params.priceRange || "All";
  const page = parseInt(params.page || "1", 10);

  // Build API params
  const apiParams: Record<string, string | number> = { page, limit: 12 };

  if (selectedTool !== "All") apiParams.tool = selectedTool;
  if (selectedCategory !== "All") apiParams.category = selectedCategory;

  if (priceRange === "0-150") {
    apiParams.maxPrice = 150;
  } else if (priceRange === "150-200") {
    apiParams.minPrice = 150;
    apiParams.maxPrice = 200;
  } else if (priceRange === "200+") {
    apiParams.minPrice = 200;
  }

  let products: Product[] = [];
  let totalPages = 1;

  try {
    const data = await productsApi.getAll(apiParams);
    products = data.products || [];
    totalPages = data.totalPages || 1;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    // Products will remain empty array, showing "No products found" message
  }

  // Helper to build query string
  const buildQueryString = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams();
    const current = {
      tool: selectedTool,
      category: selectedCategory,
      priceRange,
      page: page.toString(),
    };
    const merged = { ...current, ...updates };

    Object.entries(merged).forEach(([key, value]) => {
      if (value && value !== "All" && value !== "1") {
        newParams.set(key, value);
      }
    });

    const query = newParams.toString();
    return query ? `?${query}` : "";
  };

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
                  <Link
                    key={tool}
                    href={`/products${buildQueryString({ tool, page: "1" })}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTool === tool
                        ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {tool}
                  </Link>
                ))}
              </div>
            </div>

            <Filters
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              selectedTool={selectedTool}
              page={page}
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
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
                    href={`/products/${product.slug}?tool=${product.tool}`}
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
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
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
                      <div
                        // href={`/products/${product.slug}`}
                        className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                      >
                        View Details
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                  {page > 1 ? (
                    <Link
                      href={`/products${buildQueryString({
                        page: (page - 1).toString(),
                      })}`}
                      className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                    >
                      Previous
                    </Link>
                  ) : (
                    <span className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium opacity-50 cursor-not-allowed">
                      Previous
                    </span>
                  )}
                  <span className="px-4 py-2 text-zinc-900 dark:text-white">
                    Page {page} of {totalPages}
                  </span>
                  {page < totalPages ? (
                    <Link
                      href={`/products${buildQueryString({
                        page: (page + 1).toString(),
                      })}`}
                      className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                    >
                      Next
                    </Link>
                  ) : (
                    <span className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium opacity-50 cursor-not-allowed">
                      Next
                    </span>
                  )}
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
