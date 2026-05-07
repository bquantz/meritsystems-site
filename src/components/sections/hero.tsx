import { ArchitectureDiagram } from "@/components/architecture-diagram";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" aria-hidden />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 md:grid-cols-[1.1fr_1fr] md:items-center md:py-40">
        <div className="relative">
          <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            <span className="h-px w-6 bg-[var(--accent)]/70" aria-hidden />
            Infrastructure · AI Platforms · Cloud Architecture
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Merit Systems
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)] sm:text-xl">
            We design scalable infrastructure and AI-ready platforms for modern
            enterprises — from private GPU fabrics to hybrid cloud and the
            networks that hold them together.
          </p>
          <div className="mt-10 flex items-center gap-6 text-sm">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              What we do
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <ArchitectureDiagram className="h-auto w-full text-[var(--foreground)]" />
        </div>
      </div>
    </section>
  );
}
