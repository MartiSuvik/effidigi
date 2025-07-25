import { getAllBlogPosts } from './blog';

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSitemap(): SitemapEntry[] {
  const baseUrl = 'https://effidigi.com';
  const currentDate = new Date().toISOString().split('T')[0];
  const locales = ['et', 'en'];
  
  const staticPages: SitemapEntry[] = locales.flatMap((locale) => [
    {
      url: locale === 'et' ? `${baseUrl}/` : `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: locale === 'et' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]);

  // Get all blog posts and add them to sitemap
  const blogPosts = getAllBlogPosts();
  const blogPages: SitemapEntry[] = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: locale === 'et' ? `${baseUrl}/blog/${post.slug}` : `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...blogPages];
}

export function generateSitemapXML(): string {
  const sitemapEntries = generateSitemap();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
}