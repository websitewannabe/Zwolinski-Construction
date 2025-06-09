
import { getAllCities } from './cityUtils';

export interface SitemapUrl {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://zwolinskiconstr.com';
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  const staticPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      changefreq: 'monthly',
      priority: 1.0,
      lastmod
    },
    {
      loc: `${baseUrl}/services`,
      changefreq: 'monthly',
      priority: 0.9,
      lastmod
    },
    {
      loc: `${baseUrl}/gallery`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod
    },
    {
      loc: `${baseUrl}/about`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod
    },
    {
      loc: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod
    },
    {
      loc: `${baseUrl}/reviews`,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod
    },
    {
      loc: `${baseUrl}/accessibility`,
      changefreq: 'yearly',
      priority: 0.3,
      lastmod
    },
    {
      loc: `${baseUrl}/privacy`,
      changefreq: 'yearly',
      priority: 0.3,
      lastmod
    },
    {
      loc: `${baseUrl}/cities`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod
    }
  ];

  // Add dynamic city pages
  const cities = getAllCities();
  const cityPages: SitemapUrl[] = cities.map(city => ({
    loc: `${baseUrl}/cities/${city.id}`,
    changefreq: 'monthly',
    priority: 0.6,
    lastmod
  }));

  const allUrls = [...staticPages, ...cityPages];

  // Generate XML
  const urlEntries = allUrls.map(url => {
    return `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <lastmod>${url.lastmod}</lastmod>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};
