type Row = { area: string; focus: string };

const rows: Row[] = [
  {
    area: "Private AI Platforms",
    focus: "GPU infrastructure, RAG, AI platform architecture",
  },
  {
    area: "Cloud & Hybrid",
    focus: "Azure, VMware Cloud Foundation",
  },
  {
    area: "Network & Security",
    focus: "NSX, segmentation, architecture",
  },
  {
    area: "Platform Engineering",
    focus: "Automation, orchestration, scalable systems",
  },
  {
    area: "Consulting & Advisory",
    focus: "Design reviews, architecture guidance",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            Areas of expertise
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Where we go deep
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-[var(--border)]">
          <table className="w-full text-left">
            <thead className="border-b border-[var(--border)] bg-[var(--card)]">
              <tr>
                <th
                  scope="col"
                  className="w-1/3 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]"
                >
                  Area
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]"
                >
                  Focus
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.area}
                  className={
                    i !== rows.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }
                >
                  <td className="px-6 py-5 align-top text-[var(--foreground)]">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span className="font-medium">{row.area}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 align-top text-[var(--muted-foreground)]">
                    {row.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
