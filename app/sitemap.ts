import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://worldtrend-pro.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/latest-news`,
      lastModified: new Date(),
    },

    // Category pages
    {
      url: `${baseUrl}/category/technology`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/ai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/finance`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/health`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/science`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/travel`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/lifestyle`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/entertainment`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/category/sports`,
      lastModified: new Date(),
    },

    // Information pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];
}