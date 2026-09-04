import Link from "next/link";

export default function AboutPage() {
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
            <span className="text-blue-600">
              Pro
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
          >
            ← Back Home
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            About WorldTrend Pro
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Discover What&apos;s Trending Worldwide
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            WorldTrend Pro is a digital publishing platform created to bring
            interesting stories, emerging trends and useful information from
            around the world to one place.
          </p>

        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            A place for stories, ideas and global trends
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            WorldTrend Pro aims to make it easier for readers to discover
            interesting developments happening around the world. Our platform
            covers technology, artificial intelligence, business, finance,
            science, health, travel, lifestyle, entertainment and more.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            We are building WorldTrend Pro as a platform where both our own
            editorial content and contributions from approved writers can be
            shared with readers.
          </p>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              What we want to achieve
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl">🌍</div>

              <h3 className="mt-5 text-xl font-bold">
                Global Perspective
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Discover stories, ideas and trends from different parts of
                the world.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl">💡</div>

              <h3 className="mt-5 text-xl font-bold">
                Useful Information
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Make complex topics easier to understand through clear and
                useful content.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl">✍️</div>

              <h3 className="mt-5 text-xl font-bold">
                New Voices
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Give approved contributors an opportunity to share original
                stories and ideas with a wider audience.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            What We Cover
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            Explore our topics
          </h2>

        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          {[
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
          ].map((category) => (

            <span
              key={category}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {category}
            </span>

          ))}

        </div>

      </section>

      {/* Contributors */}
      <section className="bg-blue-700 px-6 py-16 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
            For Contributors
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Have a story to share?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            WorldTrend Pro is being developed to allow approved contributors
            to submit original articles for review and publication.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Contact Us →
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-slate-400">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">

          <p>
            © 2026 WorldTrend Pro. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link href="/" className="hover:text-white">
              Home
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

          </div>

        </div>

      </footer>

    </main>
  );
}