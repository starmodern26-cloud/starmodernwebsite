import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://starmodernlab.com/sitemap.xml',
  }
}

export const dynamic = 'force-static';  // ← Add this line