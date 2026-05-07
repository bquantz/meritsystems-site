import type { SVGProps } from "react";

export function Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(0,2)">
        <path
          d="M2 18 L2 4 L8 14 L14 4 L14 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        <circle cx="20" cy="11" r="2.2" fill="currentColor" />
      </g>
      <text
        x="30"
        y="17"
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
