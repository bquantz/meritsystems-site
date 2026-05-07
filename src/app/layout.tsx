import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://meritsystems.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Merit Systems — Infrastructure, AI Platforms, Cloud Architecture",
    template: "%s · Merit Systems",
  },
  description:
    "Merit Systems designs scalable infrastructure and AI-ready platforms for modern enterprises — VMware Cloud Foundation, NSX, private cloud, Azure, automation, and architecture advisory.",
  keywords: [
    "private AI infrastructure",
    "VMware Cloud Foundation",
    "VCF",
    "NSX",
    "hybrid cloud",
    "Azure",
    "platform engineering",
    "architecture consulting",
  ],
  authors: [{ name: "Merit Systems" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Merit Systems",
    description:
      "Infrastructure, AI platforms, and cloud architecture for modern enterprises.",
    siteName: "Merit Systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merit Systems",
    description:
      "Infrastructure, AI platforms, and cloud architecture for modern enterprises.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const wwwToApexRedirect = `(function(){if(typeof window!=='undefined'&&window.location.hostname==='www.meritsystems.cloud'){window.location.replace('https://meritsystems.cloud'+window.location.pathname+window.location.search+window.location.hash);}})();`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: wwwToApexRedirect }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
