import { MetadataRoute } from 'next'

// Note: /beheer routes are intentionally excluded
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: process.env.NEXT_PUBLIC_SITE_URL ?? '', changeFrequency: 'weekly', priority: 1 },
  ]
}
