import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/blog", "/blog/"],
    },
    sitemap: "https://meritsystems.cloud/sitemap.xml",
    host: "https://meritsystems.cloud",
  };
}
