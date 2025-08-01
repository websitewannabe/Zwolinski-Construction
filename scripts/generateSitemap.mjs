import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple sitemap generator that matches the TypeScript version
const generateSitemap = () => {
  const baseUrl = "https://zwolinskiconstr.com";
  const lastmod = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  // Read cities from the built data file
  let cities = [];
  try {
    const citiesData = readFileSync(join(__dirname, '../src/data/cities.json'), 'utf8');
    const parsedData = JSON.parse(citiesData);
    cities = parsedData.cities || [];
  } catch (error) {
    console.warn('Could not load cities data:', error.message);
    cities = [];
  }

  const staticPages = [
    {
      loc: `${baseUrl}/`,
      changefreq: "monthly",
      priority: 1.0,
      lastmod,
    },
    {
      loc: `${baseUrl}/services`,
      changefreq: "monthly",
      priority: 0.9,
      lastmod,
    },
    {
      loc: `${baseUrl}/services/basement-remodeling`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod,
    },
    {
      loc: `${baseUrl}/services/bathroom-remodeling`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod,
    },
    {
      loc: `${baseUrl}/services/kitchen-remodeling`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod,
    },
    {
      loc: `${baseUrl}/gallery`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod,
    },
    {
      loc: `${baseUrl}/about`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod,
    },
    {
      loc: `${baseUrl}/contact`,
      changefreq: "monthly",
      priority: 0.7,
      lastmod,
    },
    {
      loc: `${baseUrl}/reviews`,
      changefreq: "weekly",
      priority: 0.6,
      lastmod,
    },
    {
      loc: `${baseUrl}/accessibility`,
      changefreq: "yearly",
      priority: 0.3,
      lastmod,
    },
    {
      loc: `${baseUrl}/privacy`,
      changefreq: "yearly",
      priority: 0.3,
      lastmod,
    },
    {
      loc: `${baseUrl}/cities`,
      changefreq: "monthly",
      priority: 0.7,
      lastmod,
    },
    {
      loc: `${baseUrl}/sitemap`,
      changefreq: "monthly",
      priority: 0.4,
      lastmod,
    },
  ];

  // Add dynamic city pages
  const cityPages = cities.map((city) => ({
    loc: `${baseUrl}/cities/${city.id}`,
    changefreq: "monthly",
    priority: 0.6,
    lastmod,
  }));

  const allUrls = [...staticPages, ...cityPages];

  // Generate XML
  const urlEntries = allUrls
    .map((url) => {
      return `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <lastmod>${url.lastmod}</lastmod>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

try {
  const sitemapXml = generateSitemap();
  const distPath = join(__dirname, '../dist/sitemap.xml');
  writeFileSync(distPath, sitemapXml);
  console.log('✓ Sitemap generated successfully at dist/sitemap.xml');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}