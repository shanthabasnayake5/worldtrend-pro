
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "../../data/articles";
type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            WorldTrend{" "}
            <span className="text-blue-600">Pro</span>
          </a>

          <a
            href="/"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
          >
            ← Home
          </a>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-5xl px-6 pt-12">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            {article.category}
          </span>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            {article.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">
              By {article.author}
            </span>

            <span>•</span>

            <span>{article.publishedAt}</span>

            <span>•</span>

            <span>{article.readingTime}</span>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="space-y-7">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-9 text-slate-700"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <footer className="bg-slate-950 px-6 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>
            © 2026 WorldTrend Pro. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="/about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
