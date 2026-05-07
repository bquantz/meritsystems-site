import {
  BrainCircuit,
  Boxes,
  Network,
  Server,
  Cloud,
  Workflow,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "AI infrastructure",
    description:
      "Private GPU platforms, inference fabric, and the data plumbing that makes AI workloads usable at scale.",
    icon: BrainCircuit,
  },
  {
    title: "VMware Cloud Foundation",
    description:
      "VCF design, deployment, and lifecycle — vSphere, vSAN, and NSX as one cohesive private-cloud platform.",
    icon: Boxes,
  },
  {
    title: "NSX & network architecture",
    description:
      "Software-defined networking, segmentation, and security architecture for modern data centers.",
    icon: Network,
  },
  {
    title: "Private cloud",
    description:
      "Reference architectures and operating models for enterprises running their own platform — not someone else's.",
    icon: Server,
  },
  {
    title: "Azure integration",
    description:
      "Hybrid identity, networking, and platform services that connect on-prem to Azure without compromise.",
    icon: Cloud,
  },
  {
    title: "Automation & platform engineering",
    description:
      "Turn infrastructure into a product — orchestration, IaC, and the developer-facing surface that makes it real.",
    icon: Workflow,
  },
  {
    title: "Consulting & advisory",
    description:
      "Architecture reviews, second opinions, and the design work that happens before anything gets racked.",
    icon: Compass,
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Capability pillars
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted-foreground)]">
            We focus on the layers most enterprises get wrong — the seams
            between infrastructure, the network, and the platforms that run on
            top of them.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="group relative flex flex-col gap-3 bg-[var(--background)] p-6 transition-colors hover:bg-[var(--card)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/50">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-medium text-[var(--foreground)]">
                  {title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
