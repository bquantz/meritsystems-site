import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing on AI infrastructure, VCF, hybrid cloud, and platform design.",
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function BlogIndex() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
        Insights
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
        Writing — coming soon.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted-foreground)]">
        Field notes on AI platforms, VMware Cloud Foundation, hybrid cloud, and
        the architectural decisions that decide whether infrastructure scales or
        breaks.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
        >
          <span aria-hidden>←</span>
          Back to Merit Systems
        </Link>
      </div>
    </main>
  );
}
