import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Merit Systems — Infrastructure, AI Platforms, Cloud Architecture";

const FG = "#e6e7ea";
const BG = "#0b0d10";
const MUTED = "#8b9099";
const ACCENT = "#7c9dbf";
const GRID = "rgba(230,231,234,0.045)";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          padding: "96px",
          color: FG,
          fontFamily: "system-ui, -apple-system, Segoe UI, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <svg width="96" height="96" viewBox="0 0 32 32" style={{ marginBottom: 56 }}>
            <g
              transform="translate(4,4)"
              fill="none"
              stroke={FG}
              strokeWidth="1.6"
              strokeLinejoin="round"
            >
              <path d="M5 17 A4 4 0 0 1 5 9 A5 5 0 0 1 14 7 A5 5 0 0 1 22 13 A4 4 0 0 1 22 17 Z" />
              <path d="M13 17 L13 22 L19 22" strokeLinecap="square" />
              <path d="M8 17 L8 24 L3 24" strokeLinecap="square" />
            </g>
            <circle cx="23" cy="26" r="1.8" fill={ACCENT} />
            <circle cx="7" cy="28" r="1.4" fill={FG} />
            <circle cx="14" cy="16" r="0.9" fill={FG} />
          </svg>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 24,
              color: MUTED,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <div style={{ width: 40, height: 2, background: ACCENT, opacity: 0.75 }} />
            <span>Infrastructure · AI Platforms · Cloud Architecture</span>
          </div>

          <div
            style={{
              fontSize: 132,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.025em",
              marginBottom: 36,
            }}
          >
            Merit Systems
          </div>

          <div
            style={{
              fontSize: 34,
              color: MUTED,
              lineHeight: 1.35,
              maxWidth: 920,
              fontWeight: 400,
            }}
          >
            We design scalable infrastructure and AI-ready platforms for modern enterprises.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: MUTED,
            letterSpacing: "0.12em",
          }}
        >
          <span style={{ color: ACCENT, fontFamily: "ui-monospace, Menlo, Consolas, monospace" }}>
            meritsystems.cloud
          </span>
          <span style={{ textTransform: "uppercase", fontSize: 18 }}>Founder-led · Architecture-first</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
