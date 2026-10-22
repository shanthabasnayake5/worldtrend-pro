
import Image from "next/image";
import Link from "next/link";
import { articles } from "../data/articles";

export const metadata = {
  title: "All Articles | WorldTrend Pro",
  description:
    "Explore all articles on technology, AI, business, finance, health, science, travel, lifestyle, entertainment and sports.",
};

export default function ArticlesPage() {
  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            WorldTrend{" "}
            <span className="text-blue-600">Pro</span>
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
          >
            ← Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            WorldTrend Pro
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            All Articles
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Explore our articles across technology, AI, business,
            finance, health, science and more.
          </p>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            {articles.length} articles
          </p>
        </div>

        {sortedArticles.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article) => (
              <article
                key={article.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="block"
                >
                  <div className="relative aspect-[16/9] bg-slate-200">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {article.category}
                    </span>

                    <h2 className="mt-4 text-xl font-bold leading-snug transition hover:text-blue-700">
                      {article.title}
                    </h2>

                    <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                      {article.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-500">
                      <span>{article.publishedAt}</span>
                      <span>•</span>
                      <span>{article.readingTime}</span>
                    </div>

                    <span className="mt-5 inline-block font-bold text-blue-600">
                      Read Article →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-white p-8 text-slate-600">
            No articles are available yet.
          </p>
        )}
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 WorldTrend Pro. All rights reserved.</p>

          <nav className="flex flex-wrap gap-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
