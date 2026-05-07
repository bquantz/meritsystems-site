import type { SVGProps } from "react";

export function Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(2,1)">
        <path
          d="M5 17 A4 4 0 0 1 5 9 A5 5 0 0 1 14 7 A5 5 0 0 1 22 13 A4 4 0 0 1 22 17 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="12" r="0.9" fill="currentColor" />
        <path
          d="M13 17 L13 22 L19 22"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="square"
          fill="none"
        />
        <circle cx="19" cy="22" r="1.6" fill="var(--accent)" />
        <path
          d="M8 17 L8 24 L3 24"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="square"
          fill="none"
        />
        <circle cx="3" cy="24" r="1.3" fill="currentColor" />
      </g>
      <text
        x="40"
        y="19"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="14"
        fontWeight="600"
        letterSpacing="-0.01em"
      >
        Merit Systems
      </text>
    </svg>
  );
}
