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
    {
      url: `${baseUrl}/technology`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/finance`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/health`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/science`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/travel`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lifestyle`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/entertainment`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sports`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];
}