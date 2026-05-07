export function About() {
  return (
    <section id="about" className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-28 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            A founder-led architecture practice.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-[var(--muted-foreground)]">
          <p>
            Merit Systems is a consultancy focused on the infrastructure that
            makes private AI, hybrid cloud, and modern enterprise platforms
            actually work. We sit at the intersection of compute, network, and
            platform — the seams where most architectures break.
          </p>
          <p>
            The practice is led by{" "}
            <span className="text-[var(--foreground)]">Brandon Quantz</span>, a{" "}
            <span className="text-[var(--foreground)]">Broadcom Knight</span>{" "}
            and infrastructure / product architect who has spent his career
            designing and operating large-scale platforms across the data
            center, cloud, and the network in between. Engagements are hands-on
            and senior — design, architecture, and review work, not staff
            augmentation.
          </p>
          <p>
            We work best with engineering and infrastructure teams that already
            have the budget, the mandate, and the technical bar — and need a
            partner who can carry an architecture from whiteboard to running
            platform.
          </p>
        </div>
      </div>
    </section>
  );
}
