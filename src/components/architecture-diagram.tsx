import type { SVGProps } from "react";

export function ArchitectureDiagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <pattern id="ms-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="520" height="360" fill="url(#ms-grid)" />

      <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" fill="none">
        <path d="M120 80 L260 140" />
        <path d="M260 80 L260 140" />
        <path d="M400 80 L260 140" />
        <path d="M260 200 L120 280" />
        <path d="M260 200 L260 280" />
        <path d="M260 200 L400 280" />
        <path d="M260 140 L260 200" strokeWidth="1.4" strokeOpacity="0.85" />
      </g>

      <g>
        <rect x="80" y="60" width="80" height="40" rx="3" fill="var(--card)" stroke="currentColor" strokeOpacity="0.5" />
        <text x="120" y="84" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.85" fontFamily="var(--font-jetbrains-mono)">
          AI workloads
        </text>

        <rect x="220" y="60" width="80" height="40" rx="3" fill="var(--card)" stroke="currentColor" strokeOpacity="0.5" />
        <text x="260" y="84" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.85" fontFamily="var(--font-jetbrains-mono)">
          GPU pool
        </text>

        <rect x="360" y="60" width="80" height="40" rx="3" fill="var(--card)" stroke="currentColor" strokeOpacity="0.5" />
        <text x="400" y="84" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.85" fontFamily="var(--font-jetbrains-mono)">
          Vector / RAG
        </text>
      </g>

      <g>
        <rect x="180" y="140" width="160" height="60" rx="4" fill="var(--card)" stroke="var(--accent)" strokeWidth="1.2" />
        <text x="260" y="166" textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor" fillOpacity="0.95">
          VMware Cloud Foundation
        </text>
        <text x="260" y="184" textAnchor="middle" fontSize="9.5" fill="currentColor" fillOpacity="0.65" fontFamily="var(--font-jetbrains-mono)">
          NSX · vSphere · vSAN
        </text>
      </g>

      <g>
        <rect x="80" y="260" width="80" height="40" rx="3" fill="var(--card)" stroke="currentColor" strokeOpacity="0.5" />
        <text x="120" y="284" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.85" fontFamily="var(--font-jetbrains-mono)">
          Private cloud
        </text>

        <rect x="220" y="260" width="80" height="40" rx="3" fill="var(--card)" stroke="currentColor" strokeOpacity="0.5" />
        <text x="260" y="284" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.85" fontFamily="var(--font-jetbrains-mono)">
          Azure
        </text>

        <rect x="360" y="260" width="80" height="40" rx="3" fill="var(--card)" stroke="currentColor" strokeOpacity="0.5" />
        <text x="400" y="284" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.85" fontFamily="var(--font-jetbrains-mono)">
          Edge / DC
        </text>
      </g>

      <g fill="var(--accent)">
        <circle cx="120" cy="100" r="2" />
        <circle cx="260" cy="100" r="2" />
        <circle cx="400" cy="100" r="2" />
        <circle cx="120" cy="260" r="2" />
        <circle cx="260" cy="260" r="2" />
        <circle cx="400" cy="260" r="2" />
        <circle cx="260" cy="140" r="2.5" />
        <circle cx="260" cy="200" r="2.5" />
      </g>
    </svg>
  );
}
