import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies')

export interface CaseStudy {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: string
  featured: boolean
  author: string
  image: string
  tags: string[]
  content: string
  contentHtml: string
}

export function getCaseStudySlugs(): string[] {
  const filenames = fs.readdirSync(caseStudiesDirectory)
  return filenames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''))
}

export function getCaseStudyBySlug(slug: string, locale: string = 'et'): CaseStudy | null {
  try {
    // If the slug already contains the locale suffix, use it directly
    let fullPath = path.join(caseStudiesDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      // Try building the filename with locale suffix
      fullPath = path.join(caseStudiesDirectory, `${slug}-${locale}.md`)
      
      if (!fs.existsSync(fullPath)) {
        // Fallback to Estonian if English version doesn't exist
        const fallbackPath = path.join(caseStudiesDirectory, `${slug}-et.md`)
        if (!fs.existsSync(fallbackPath)) {
          return null
        }
        const fallbackFileContents = fs.readFileSync(fallbackPath, 'utf8')
        const { data, content } = matter(fallbackFileContents)
        
        // Process markdown to HTML
        const processedContent = remark().use(html).processSync(content)
        const contentHtml = processedContent.toString()
        
        return {
          slug,
          content,
          contentHtml,
          title: data.title || '',
          excerpt: data.excerpt || '',
          category: data.category || '',
          publishedAt: data.publishedAt || '',
          readTime: data.readTime || '',
          featured: data.featured || false,
          author: data.author || '',
          image: data.image || '',
          tags: data.tags || []
        }
      }
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown to HTML
    const processedContent = remark().use(html).processSync(content)
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      content,
      contentHtml,
      title: data.title || '',
      excerpt: data.excerpt || '',
      category: data.category || '',
      publishedAt: data.publishedAt || '',
      readTime: data.readTime || '',
      featured: data.featured || false,
      author: data.author || '',
      image: data.image || '',
      tags: data.tags || []
    }
  } catch (error) {
    console.error(`Error loading case study ${slug}:`, error)
    return null
  }
}

export function getAllCaseStudies(locale: string = 'et'): CaseStudy[] {
  const slugs = getCaseStudySlugs()
  const uniqueSlugSet = new Set(slugs.map(slug => slug.replace(/-[a-z]{2}$/, '')))
  const uniqueSlugs = Array.from(uniqueSlugSet)
  
  const caseStudies = uniqueSlugs
    .map(slug => getCaseStudyBySlug(slug, locale))
    .filter((caseStudy): caseStudy is CaseStudy => caseStudy !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return caseStudies
}
