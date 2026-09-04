"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { articles } from "./data/articles";

const categories = [
  "Latest News",
  "Technology",
  "AI",
  "Business",
  "Finance",
  "Health",
  "Science",
  "Travel",
  "Lifestyle",
  "Entertainment",
  "Sports",
];

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const featuredArticles = articles;
  const mainStory = articles[0];
  const sideStories = articles.slice(1, 4);

  const searchResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return [];
    }

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(term) ||
        article.excerpt.toLowerCase().includes(term) ||
        article.category.toLowerCase().includes(term)
      );
    });
  }, [searchTerm]);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">

        {/* Main Header */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              WorldTrend{" "}
              <span className="text-blue-600 transition group-hover:text-indigo-600">
                Pro
              </span>
            </div>

            <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
              Discover What&apos;s Trending Worldwide
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 xl:flex">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category}
                href={
                  category === "Latest News"
                    ? "#latest"
                    : `/category/${category.toLowerCase()}`
                }
                className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Search + Mobile Menu */}
          <div className="flex items-center gap-2">

            {/* Search Button */}
            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
              className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
            >
              <span className="text-lg">⌕</span>
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-700 transition hover:bg-slate-100 xl:hidden"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* Search Panel */}
        {searchOpen && (
          <div className="border-t bg-white">
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

              <div className="relative">
                <input
                  type="search"
                  autoFocus
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search articles..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 pr-12 text-base outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  aria-label="Close search"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchTerm("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-3 py-2 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              {/* Search Results */}
              {searchTerm.trim() && (
                <div className="mt-4">

                  {searchResults.length > 0 ? (
                    <div className="grid gap-3">
                      {searchResults.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/articles/${article.slug}`}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchTerm("");
                          }}
                          className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 transition hover:border-blue-300 hover:shadow-md"
                        >

                          <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                            <Image
                              src={article.image}
                              alt={article.imageAlt}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>

                          <div className="min-w-0">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                              {article.category}
                            </span>

                            <h3 className="mt-1 line-clamp-2 text-sm font-bold text-slate-800 group-hover:text-blue-600">
                              {article.title}
                            </h3>
                          </div>

                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                      <p className="font-semibold text-slate-700">
                        No articles found
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Try searching for Technology, AI, Business, Health,
                        Travel or another topic.
                      </p>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t bg-white xl:hidden">
            <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

              <div className="grid gap-1">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={
                      category === "Latest News"
                        ? "#latest"
                        : `/category/${category.toLowerCase()}`
                    }
                    onClick={handleMenuClick}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {category}
                  </Link>
                ))}
              </div>

              <div className="my-3 border-t border-slate-100" />

              <Link
                href="/about"
                onClick={handleMenuClick}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={handleMenuClick}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Contact
              </Link>

            </nav>
          </div>
        )}

        {/* Category Bar */}
        <div className="border-t bg-slate-950">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-3 sm:px-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={
                  category === "Latest News"
                    ? "#latest"
                    : `/category/${category.toLowerCase()}`
                }
                className="whitespace-nowrap text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-8 py-14 text-white shadow-xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
            Discover What&apos;s Trending Worldwide
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            World news, trends and ideas — all in one place.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Stay informed with the latest stories across technology,
            artificial intelligence, business, finance, science, lifestyle,
            entertainment and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="#latest"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Explore Latest News
            </Link>

            <Link
              href="#trending"
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Trending Topics
            </Link>

          </div>
        </div>
      </section>

      {/* Trending */}
      <section
        id="trending"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6"
      >

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Trending Now
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              What the world is watching
            </h2>

            <p className="mt-2 text-slate-500">
              Stories and topics getting attention around the world.
            </p>
          </div>

          <Link
            href="#latest"
            className="hidden text-sm font-bold text-blue-600 transition hover:text-blue-800 sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {featuredArticles.map((article, index) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative h-56 overflow-hidden bg-slate-200">

                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-900 shadow-md">
                  🔥 Trending
                </div>

                <div className="absolute bottom-3 right-4">
                  <span className="text-5xl font-black text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

              </div>

              <div className="p-6">

                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {article.category}
                </span>

                <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-tight transition group-hover:text-blue-700">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-xs font-medium text-slate-400">
                    WorldTrend Pro
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

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="#latest"
            className="font-bold text-blue-600 hover:text-blue-800"
          >
            View All Stories →
          </Link>
        </div>

      </section>

      {/* Latest News */}
      <section
        id="latest"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6"
      >

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Latest News
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Latest stories
            </h2>

            <p className="mt-2 text-slate-500">
              Stay updated with important stories and developments.
            </p>
          </div>

          <Link
            href="#trending"
            className="hidden text-sm font-bold text-blue-600 transition hover:text-blue-800 sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {mainStory && (
            <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl lg:col-span-2">

              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 md:h-80">

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-blue-400/10" />

                <div className="relative text-center">
                  <span className="block text-7xl font-black text-white/20 md:text-8xl">
                    01
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                    Featured Story
                  </span>
                </div>

                <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">
                  {mainStory.category}
                </span>
              </div>

              <div className="p-6 md:p-8">

                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
                  <span>{mainStory.category}</span>
                  <span>•</span>
                  <span>{mainStory.publishedAt}</span>
                </div>

                <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight transition group-hover:text-blue-700 md:text-3xl">
                  {mainStory.title}
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                  {mainStory.excerpt}
                </p>

                <Link
                  href={`/articles/${mainStory.slug}`}
                  className="mt-6 inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
                >
                  Continue Reading →
                </Link>

              </div>
            </article>
          )}

          <div className="space-y-6">

            {sideStories.map((article, index) => (
              <article
                key={article.slug}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex gap-4">

                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-900">
                    <span className="text-3xl font-black text-white/30">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      {article.category}
                    </span>

                    <h3 className="mt-2 text-base font-extrabold leading-snug transition group-hover:text-blue-700">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400">
                      {article.category} • {article.publishedAt}
                    </p>
                  </div>

                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-4 inline-block text-sm font-bold text-blue-600 hover:text-blue-800"
                >
                  Read Story →
                </Link>

              </article>
            ))}

          </div>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="#trending"
            className="font-bold text-blue-600 hover:text-blue-800"
          >
            View All Latest Stories →
          </Link>
        </div>

      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6">

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">

          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-2xl backdrop-blur sm:px-10 md:px-14 md:py-14">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl shadow-lg">
              ✉
            </div>

            <div className="mx-auto mt-6 max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                WorldTrend Pro Newsletter
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
                Stay ahead of the trends
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Get the most interesting stories, emerging trends and important
                developments from around the world delivered to your inbox.
              </p>

            </div>

            <form
              className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >

              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="min-h-14 flex-1 rounded-xl border border-white/10 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
              />

              <button
                type="submit"
                className="min-h-14 rounded-xl bg-blue-600 px-7 font-bold text-white transition hover:bg-blue-500 active:scale-[0.98]"
              >
                Subscribe →
              </button>

            </form>

            <p className="mt-4 text-center text-xs text-slate-500">
              No spam. Unsubscribe anytime.
            </p>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-2">

              <Link
                href="/"
                className="text-2xl font-extrabold tracking-tight text-white"
              >
                WorldTrend{" "}
                <span className="text-blue-500">
                  Pro
                </span>
              </Link>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Discover what&apos;s trending worldwide. WorldTrend Pro brings
                together interesting stories, important developments and useful
                information from around the world.
              </p>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Discover What&apos;s Trending Worldwide
              </p>

            </div>

            {/* Explore */}
            <div>

              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Explore
              </h3>

              <div className="mt-4 space-y-3">

                <Link
                  href="#trending"
                  className="block text-sm transition hover:text-white"
                >
                  Trending
                </Link>

                <Link
                  href="#latest"
                  className="block text-sm transition hover:text-white"
                >
                  Latest News
                </Link>

                <Link
                  href="/category/technology"
                  className="block text-sm transition hover:text-white"
                >
                  Technology
                </Link>

                <Link
                  href="/category/business"
                  className="block text-sm transition hover:text-white"
                >
                  Business
                </Link>

                <Link
                  href="/category/finance"
                  className="block text-sm transition hover:text-white"
                >
                  Finance
                </Link>

              </div>

            </div>

            {/* Company */}
            <div>

              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                WorldTrend Pro
              </h3>

              <div className="mt-4 space-y-3">

                <Link
                  href="/about"
                  className="block text-sm transition hover:text-white"
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="block text-sm transition hover:text-white"
                >
                  Contact
                </Link>

                <Link
                  href="/privacy"
                  className="block text-sm transition hover:text-white"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="block text-sm transition hover:text-white"
                >
                  Terms of Service
                </Link>

              </div>

            </div>

          </div>

          <div className="my-10 border-t border-white/10" />

          <div className="flex flex-col justify-between gap-4 text-sm md:flex-row md:items-center">

            <p>
              © 2026 WorldTrend Pro. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">

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

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>
      </footer>

    </main>
  );
}