import Link from "next/link";

export default function PrivacyPage() {
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
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            WorldTrend Pro
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-400">
            Last updated: August 2026
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-14">

        <div className="space-y-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold">
              1. Introduction
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Welcome to WorldTrend Pro. We respect your privacy and are
              committed to protecting information that may be collected when
              you use our website.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This Privacy Policy explains what information may be collected,
              how it may be used, and the choices available to you.
            </p>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-2xl font-bold">
              2. Information We May Collect
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Depending on the features available on the website, we may
              collect information such as:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Name and email address when voluntarily provided.</li>
              <li>Information submitted through contact forms.</li>
              <li>Information provided by registered contributors.</li>
              <li>Technical information such as browser and device data.</li>
              <li>Website usage information for analytics and improvement.</li>
            </ul>
          </div>

          {/* How We Use */}
          <div>
            <h2 className="text-2xl font-bold">
              3. How We May Use Information
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Information may be used to operate, maintain and improve
              WorldTrend Pro, communicate with users, respond to enquiries,
              manage contributor accounts and improve the overall user
              experience.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold">
              4. Cookies and Similar Technologies
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              WorldTrend Pro may use cookies or similar technologies to
              remember preferences, understand website usage and improve
              website functionality.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Third-party services used on the website may also use cookies
              according to their own privacy policies.
            </p>
          </div>

          {/* Analytics */}
          <div>
            <h2 className="text-2xl font-bold">
              5. Analytics and Advertising
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              In the future, WorldTrend Pro may use analytics services and
              advertising platforms to understand website traffic and support
              the operation of the website.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Any third-party services will be used according to their
              applicable terms and privacy policies.
            </p>
          </div>

          {/* Contributors */}
          <div>
            <h2 className="text-2xl font-bold">
              6. Contributor Information
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If contributor registration and article submission features are
              enabled, contributors may be required to provide information
              such as their name, email address and profile information.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Contributors are responsible for ensuring that information they
              submit is accurate and that their submitted content does not
              violate the rights of others.
            </p>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="text-2xl font-bold">
              7. Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              WorldTrend Pro may use third-party services for hosting,
              analytics, advertising, email delivery, authentication,
              payments or other website functions.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              These services may process information according to their own
              privacy policies and terms.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-bold">
              8. Data Security
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We take reasonable steps to protect information handled through
              the website. However, no method of transmission or storage over
              the Internet can be guaranteed to be completely secure.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold">
              9. Children&apos;s Privacy
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              WorldTrend Pro is not intentionally designed to collect personal
              information from children without appropriate permission.
              If you believe a child has provided personal information to us,
              please contact us so that the information can be reviewed.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold">
              10. Changes to This Policy
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              This Privacy Policy may be updated from time to time as
              WorldTrend Pro develops new features or services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold">
              11. Contact Us
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If you have questions about this Privacy Policy, please contact
              us through our contact page.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Contact WorldTrend Pro →
            </Link>
          </div>

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

            <Link href="/contact" className="hover:text-white">
              Contact
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