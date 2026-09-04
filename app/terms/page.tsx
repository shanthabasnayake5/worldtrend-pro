import Link from "next/link";

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <p className="mt-4 text-slate-400">
            Last updated: August 2026
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-14">

        <div className="space-y-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

          {/* Acceptance */}
          <div>
            <h2 className="text-2xl font-bold">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              By accessing or using WorldTrend Pro, you agree to comply with
              these Terms of Service. If you do not agree with these terms,
              please do not use the website.
            </p>
          </div>

          {/* Website Purpose */}
          <div>
            <h2 className="text-2xl font-bold">
              2. Use of the Website
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              WorldTrend Pro provides news, articles, information, opinions,
              trends and other digital content for general informational and
              educational purposes.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Content on the website should not be considered professional
              financial, medical, legal or other specialist advice.
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold">
              3. Website Content
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We aim to provide useful and accurate information. However,
              information may contain errors, omissions or become outdated.
              WorldTrend Pro does not guarantee that all information will
              always be complete, accurate or current.
            </p>
          </div>

          {/* Contributors */}
          <div>
            <h2 className="text-2xl font-bold">
              4. Contributor Content
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              WorldTrend Pro may allow approved contributors to submit articles
              and other content for editorial review.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Contributors must submit original content and must have the
              necessary rights or permissions for any material they provide.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Submitted content may be reviewed, edited, rejected or removed
              by WorldTrend Pro at its discretion.
            </p>
          </div>

          {/* Prohibited Use */}
          <div>
            <h2 className="text-2xl font-bold">
              5. Prohibited Activities
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Users must not use WorldTrend Pro to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Submit unlawful or fraudulent content.</li>
              <li>Publish content that infringes another person&apos;s rights.</li>
              <li>Upload malicious software or harmful code.</li>
              <li>Attempt to gain unauthorized access to the website.</li>
              <li>Abuse, spam or disrupt website services.</li>
              <li>Impersonate another person or organization.</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold">
              6. Intellectual Property
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Unless otherwise stated, the WorldTrend Pro website design,
              branding, logos and original website content are protected by
              applicable intellectual property laws.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Users may not reproduce, distribute or commercially exploit
              protected website material without appropriate permission.
            </p>
          </div>

          {/* External Links */}
          <div>
            <h2 className="text-2xl font-bold">
              7. External Links
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              WorldTrend Pro may contain links to third-party websites.
              We are not responsible for the content, availability, security
              or policies of external websites.
            </p>
          </div>

          {/* Advertising */}
          <div>
            <h2 className="text-2xl font-bold">
              8. Advertising and Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              The website may display advertisements or use third-party
              services in the future. Such services may have their own terms,
              conditions and privacy policies.
            </p>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-2xl font-bold">
              9. Website Availability
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We aim to keep WorldTrend Pro available and functioning properly,
              but we cannot guarantee uninterrupted access at all times.
            </p>
          </div>

          {/* Limitation */}
          <div>
            <h2 className="text-2xl font-bold">
              10. Limitation of Liability
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              To the extent permitted by applicable law, WorldTrend Pro will
              not be responsible for losses or damages arising from reliance
              on website content, temporary unavailability or third-party
              services.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold">
              11. Changes to These Terms
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              These Terms of Service may be updated as WorldTrend Pro develops
              new features, services and publishing capabilities.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold">
              12. Contact Us
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If you have questions about these Terms of Service, please
              contact us through our contact page.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Us →
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

            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}