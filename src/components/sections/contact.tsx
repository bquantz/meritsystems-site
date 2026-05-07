export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Have an architecture problem worth solving?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted-foreground)]">
            We take on a small number of engagements at a time — design work,
            architecture reviews, and platform builds. The fastest way to start
            a conversation is email.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:bquantz@meritnetsolutions.com"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]/20"
            >
              bquantz@meritnetsolutions.com
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Or wherever you find me
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
