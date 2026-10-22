import type { MetadataRoute } from 'next'
import { siteConfig } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '')

  // Authoritative verified routes
  const routes = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/projects/vaultless',
    '/projects/fittrack',
    '/projects/blogopedia',
    '/contact',
  ]

  // Use a fixed ISO date format without runtime timestamp drift
  const lastModified = new Date().toISOString().split('T')[0]

  return routes.map((route) => {
    let changeFrequency: 'weekly' | 'monthly' = 'monthly'
    let priority = 0.7

    if (route === '') {
      changeFrequency = 'weekly'
      priority = 1.0
    } else if (route.startsWith('/projects')) {
      changeFrequency = 'weekly'
      priority = 0.9
    } else if (route === '/experience' || route === '/about') {
      priority = 0.8
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    }
  })
}
