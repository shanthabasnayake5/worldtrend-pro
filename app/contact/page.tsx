
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof result.error === "string"
            ? result.error
            : "Unable to send your message. Please try again.",
        );
      }

      setStatus({
        type: "success",
        message: result.message ?? "Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            WorldTrend <span className="text-blue-600">Pro</span>
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
          >
            ← Back Home
          </Link>
        </div>
      </header>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Contact WorldTrend Pro
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            We&apos;d love to hear from you
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question, suggestion, feedback or an article idea? Get in
            touch with the WorldTrend Pro team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
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
                  <p className="mt-1 break-all text-sm text-slate-500">
                    contact@worldtrendpro.com
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Official domain email setup is coming later.
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
                    Interested in writing for WorldTrend Pro? Contact us with
                    your idea.
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

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Send A Message
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">Contact us</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Honeypot field: hidden from ordinary visitors */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  placeholder="Enter your name"
                  className={inputClass}
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
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  placeholder="Enter your email"
                  className={inputClass}
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
                  name="subject"
                  type="text"
                  maxLength={150}
                  required
                  placeholder="What is your message about?"
                  className={inputClass}
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
                  name="message"
                  rows={6}
                  maxLength={5000}
                  required
                  placeholder="Write your message here..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl p-4 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Become A Contributor
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Have an original story to share?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            WorldTrend Pro will allow approved contributors to submit original
            articles for editorial review and publication.
          </p>

          <p className="mt-4 text-sm text-blue-200">
            Contributor registration and article submission will be available
            soon.
          </p>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 WorldTrend Pro. All rights reserved.</p>

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
