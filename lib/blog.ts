import 'server-only';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import type { BlogPost } from './types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Ensure directory exists (for development)
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

async function processMarkdown(content: string): Promise<string> {
  const result = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);
  return result.toString();
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Process markdown content to HTML synchronously
        let processedContent = content;
        try {
          const result = remark()
            .use(remarkHtml, { sanitize: false })
            .processSync(content);
          processedContent = result.toString();
        } catch (error) {
          console.warn(`Error processing markdown for ${slug}:`, error);
        }

        return {
          slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt,
          content: processedContent,
          date: data.date,
          author: data.author,
          readTime: data.readTime || calculateReadTime(content),
          tags: data.tags || [],
        } as BlogPost;
      })
      .sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
      });

    return allPostsData;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPostsByLocale(locale: 'en' | 'et'): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const filteredFiles = fileNames.filter((fileName) => {
      if (!fileName.endsWith('.md')) return false;
      
      // For Estonian locale, include files without -en suffix
      if (locale === 'et') {
        return !fileName.includes('-en.');
      }
      
      // For English locale, include only files with -en suffix
      if (locale === 'en') {
        return fileName.includes('-en.');
      }
      
      return false;
    });

    const allPostsData = filteredFiles
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Process markdown content to HTML synchronously
        let processedContent = content;
        try {
          const result = remark()
            .use(remarkHtml, { sanitize: false })
            .processSync(content);
          processedContent = result.toString();
        } catch (error) {
          console.warn(`Error processing markdown for ${slug}:`, error);
        }

        return {
          slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt,
          content: processedContent,
          date: data.date,
          author: data.author,
          readTime: data.readTime || calculateReadTime(content),
          tags: data.tags || [],
        } as BlogPost;
      })
      .sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
      });

    return allPostsData;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown content to HTML synchronously
    let processedContent = content;
    try {
      const result = remark()
        .use(remarkHtml, { sanitize: false })
        .processSync(content);
      processedContent = result.toString();
    } catch (error) {
      console.warn(`Error processing markdown for ${slug}:`, error);
    }

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt,
      content: processedContent,
      date: data.date,
      author: data.author,
      readTime: data.readTime || calculateReadTime(content),
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}