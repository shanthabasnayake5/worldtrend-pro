
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "../../data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://worldtrend-pro.vercel.app";

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | WorldTrend Pro",
      description: "The requested article could not be found.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const articleUrl = `${SITE_URL}/articles/${article.slug}`;

  return {
    title: `${article.title} | WorldTrend Pro`,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: "WorldTrend Pro",
      type: "article",
      publishedTime: (() => {
        const date = new Date(article.publishedAt);
        return Number.isNaN(date.getTime())
          ? undefined
          : date.toISOString();
      })(),
      images: [
        {
          url: article.image.startsWith("http")
            ? article.image
            : `${SITE_URL}${article.image.startsWith("/") ? "" : "/"}${article.image}`,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [
        article.image.startsWith("http")
          ? article.image
          : `${SITE_URL}${article.image.startsWith("/") ? "" : "/"}${article.image}`,
      ],
    },
  };
}

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
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight sm:text-2xl"
            aria-label="WorldTrend Pro homepage"
          >
            WorldTrend <span className="text-blue-600">Pro</span>
          </Link>

          <Link
            href="/articles"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
          >
            All Articles
          </Link>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-5xl px-6 pt-10 sm:pt-12">
          <Link
            href={`/category/${encodeURIComponent(article.category.toLowerCase())}`}
            className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
          >
            {article.category}
          </Link>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            {article.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">
              By {article.author}
            </span>

            <span aria-hidden="true">•</span>

            <time>
              {article.publishedAt}
            </time>

            <span aria-hidden="true">•</span>

            <span>{article.readingTime}</span>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl px-4 sm:mt-10 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200 shadow-lg sm:rounded-3xl">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-12">
          <div className="space-y-7">
            {article.content.map((paragraph, index) => (
              <p
                key={`${article.slug}-paragraph-${index}`}
                className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6">
            <p className="text-sm leading-7 text-slate-500">
              Published by {article.author}. WorldTrend Pro aims to provide
              clear, useful information about developments around the world.
            </p>

            <Link
              href="/articles"
              className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Explore More Articles
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-slate-950 px-6 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} WorldTrend Pro. All rights reserved.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/articles" className="transition hover:text-white">
              Articles
            </Link>

            <Link href="/about" className="transition hover:text-white">
              About
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
