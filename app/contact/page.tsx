import Link from "next/link";

export default function ContactPage() {
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
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Contact WorldTrend Pro
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            We&apos;d love to hear from you
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question, suggestion, feedback or an article idea?
            Get in touch with the WorldTrend Pro team.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Contact our team
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We welcome questions, feedback, suggestions and contributor
              enquiries. Please use the form to send us a message.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    contact@worldtrendpro.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ✍️
                </div>

                <div>
                  <h3 className="font-bold">Contributors</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Interested in writing for WorldTrend Pro?
                    Contact us with your idea.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  🌍
                </div>

                <div>
                  <h3 className="font-bold">Worldwide</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    WorldTrend Pro is being built for a global audience.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Send A Message
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Contact us
            </h2>

            <form className="mt-8 space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Contributor CTA */}
      <section className="bg-blue-700 px-6 py-16 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Become A Contributor
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Have an original story to share?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            WorldTrend Pro will allow approved contributors to submit
            original articles for editorial review and publication.
          </p>

          <p className="mt-4 text-sm text-blue-200">
            Contributor registration and article submission will be
            available soon.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-slate-400">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">

          <p>
            © 2026 WorldTrend Pro. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/about" className="hover:text-white">
              About
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