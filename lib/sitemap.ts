import { getAllBlogPosts } from './blog';
import { getAllCaseStudies } from './case-studies';

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
  
  // Static pages - now using consistent locale prefixes for both languages
  const staticPages: SitemapEntry[] = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/services/data-ai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]);

  // Get all blog posts and add them to sitemap
  const blogPosts = getAllBlogPosts();
  const blogPages: SitemapEntry[] = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Get all case studies and add them to sitemap
  const caseStudyPages: SitemapEntry[] = locales.flatMap((locale) => {
    const caseStudies = getAllCaseStudies(locale);
    return caseStudies.map((caseStudy) => ({
      url: `${baseUrl}/${locale}/case-studies/${caseStudy.slug}-${locale}`,
      lastModified: caseStudy.publishedAt || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  });

  return [...staticPages, ...blogPages, ...caseStudyPages];
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