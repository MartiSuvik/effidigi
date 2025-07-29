"use client"

import { ReactNode } from 'react'
import { Badge } from '@/ui/badge'
import { CalendarDays, Clock, User } from 'lucide-react'

interface CaseStudyLayoutProps {
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: string
  author: string
  image: string
  tags: string[]
  children: ReactNode
}

export function CaseStudyLayout({
  title,
  excerpt,
  category,
  publishedAt,
  readTime,
  author,
  image,
  tags,
  children
}: CaseStudyLayoutProps) {
  return (
    <article className="min-h-screen bg-[#ffffff] text-[#111111] dark:bg-[#121212] dark:text-[#eaeaea]">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-[60vh] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-4xl">
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                  {category}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                  {title}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                  {excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="flex flex-wrap gap-6 items-center text-[#666666] dark:text-[#888888] mb-12 pb-8 border-b border-[#eaeaea] dark:border-[#333333]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              <span className="text-sm">{new Date(publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-[#0070f3] text-[#0070f3] hover:bg-[#0070f3] hover:text-white">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <style jsx global>{`
              .prose {
                font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
                font-size: 18px;
                line-height: 1.7;
                color: #111111;
                max-width: 720px;
              }
              
              .dark .prose {
                color: #eaeaea;
              }
              
              .prose h1 {
                font-size: 2.25rem;
                font-weight: 700;
                line-height: 1.3;
                margin-bottom: 2rem;
                margin-top: 4rem;
              }
              
              .prose h1:first-child {
                margin-top: 0;
              }
              
              .prose h2 {
                font-size: 1.875rem;
                font-weight: 600;
                line-height: 1.3;
                margin-bottom: 1.5rem;
                margin-top: 4rem;
              }
              
              .prose h3 {
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 1.3;
                margin-bottom: 1rem;
                margin-top: 3rem;
              }
              
              .prose h4 {
                font-size: 1.25rem;
                font-weight: 600;
                line-height: 1.3;
                margin-bottom: 0.75rem;
                margin-top: 2rem;
              }
              
              .prose p {
                margin-bottom: 1.2em;
                line-height: 1.7;
              }
              
              .prose ul, .prose ol {
                margin-bottom: 1.2em;
              }
              
              .prose li {
                margin-bottom: 0.5em;
                line-height: 1.6;
              }
              
              .prose a {
                color: #0070f3;
                text-decoration: underline;
                font-weight: 500;
              }
              
              .prose a:hover {
                text-decoration: none;
              }
              
              .dark .prose a {
                color: #40a9ff;
              }
              
              .prose strong {
                font-weight: 600;
                color: #1a1a1a;
              }
              
              .dark .prose strong {
                color: #ffffff;
              }
              
              .prose blockquote {
                border-left: 4px solid #0070f3;
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                color: #666666;
              }
              
              .dark .prose blockquote {
                color: #888888;
              }
              
              .prose code {
                background: #f5f5f5;
                padding: 0.2em 0.4em;
                border-radius: 4px;
                font-size: 0.9em;
              }
              
              .dark .prose code {
                background: #262626;
              }
              
              .prose pre {
                background: #f8f9fa;
                padding: 1.5rem;
                border-radius: 8px;
                overflow-x: auto;
                margin: 2rem 0;
              }
              
              .dark .prose pre {
                background: #1a1a1a;
              }
              
              @media (max-width: 768px) {
                .prose {
                  font-size: 16px;
                }
                
                .prose h1 {
                  font-size: 1.875rem;
                }
                
                .prose h2 {
                  font-size: 1.5rem;
                }
                
                .prose h3 {
                  font-size: 1.25rem;
                }
              }
            `}</style>
            {children}
          </div>
        </div>
      </div>
    </article>
  )
}
