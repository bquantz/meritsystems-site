import Script from "next/script";

const FATHOM_SITE_ID = process.env.NEXT_PUBLIC_FATHOM_SITE_ID ?? "";

export function Analytics() {
  if (!FATHOM_SITE_ID) return null;
  return (
    <Script
      src="https://cdn.usefathom.com/script.js"
      data-site={FATHOM_SITE_ID}
      data-spa="auto"
      strategy="afterInteractive"
      defer
    />
  );
}
