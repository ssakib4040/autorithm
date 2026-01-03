import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsApi } from "@/utils/api";

interface ProductDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const data = await productsApi.getAll({ limit: 100 });
    return data.products.map((product) => ({
      slug: product.slug,
    }));
  } catch {
    return [];
  }
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = await params;

  let product;
  try {
    product = await productsApi.getBySlug(slug);
  } catch {
    notFound();
  }

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Product Header */}
      <section className="bg-linear-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/products"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              ← Back to Products
            </Link>
          </div>
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                  {product.tool}
                </span>
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                ${product.price}
              </div>
              <button className="w-full px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
              About This Workflow
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Ready to Automate?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Get instant access to this workflow and start automating today.
          </p>
          <button className="px-8 py-4 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
            Purchase for ${product.price}
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
