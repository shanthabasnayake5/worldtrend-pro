import Image from "next/image";
import Link from "next/link";
import { articles } from "../../data/articles";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  const categoryArticles = articles.filter(
    (article) =>
      article.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
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

      {/* Category Heading */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          WorldTrend Pro
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {categoryName}
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Discover the latest stories, trends and developments in{" "}
          {categoryName}.
        </p>

      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        {categoryArticles.length === 0 ? (

          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
            <h2 className="text-2xl font-bold">
              No articles found
            </h2>

            <p className="mt-3 text-slate-500">
              There are currently no articles in this category.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              Return Home
            </Link>
          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {categoryArticles.map((article) => (

              <article
                key={article.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-200">

                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                </div>

                {/* Content */}
                <div className="p-6">

                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {article.category}
                  </span>

                  <h2 className="mt-4 text-xl font-extrabold leading-snug tracking-tight transition group-hover:text-blue-700">
                    {article.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-xs text-slate-400">
                      {article.publishedAt}
                    </span>

                    <Link
                      href={`/articles/${article.slug}`}
                      className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-600"
                    >
                      Read Story →
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-10 text-slate-400">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">

          <p>
            © 2026 WorldTrend Pro. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}