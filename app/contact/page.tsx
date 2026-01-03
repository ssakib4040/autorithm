import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-white dark:bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Have questions? Need custom automation? Let's talk.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-600 dark:text-zinc-400 text-center">
              Email us at{" "}
              <a
                href="mailto:hello@autorithm.com"
                className="text-zinc-900 dark:text-white font-semibold hover:underline"
              >
                hello@autorithm.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
