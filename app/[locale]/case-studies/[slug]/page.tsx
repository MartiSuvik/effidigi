import { notFound } from 'next/navigation'
import { getCaseStudyBySlug } from '@/lib/case-studies'
import { CaseStudyLayout } from '@/components/case-study-layout'

export async function generateStaticParams() {
  return [
    { locale: 'en', slug: 'body-treatment-salon-en' },
    { locale: 'et', slug: 'body-treatment-salon-et' },
    { locale: 'en', slug: 'maple-street-bistro-en' },
    { locale: 'et', slug: 'maple-street-bistro-et' }
  ]
}

export default async function CaseStudyPage({
  params
}: {
  params: { locale: string; slug: string }
}) {
  const caseStudy = getCaseStudyBySlug(params.slug, params.locale as 'en' | 'et')

  if (!caseStudy) {
    notFound()
  }

  return (
    <CaseStudyLayout
      title={caseStudy.title}
      excerpt={caseStudy.excerpt}
      category={caseStudy.category}
      publishedAt={caseStudy.publishedAt}
      readTime={caseStudy.readTime}
      author={caseStudy.author}
      image={caseStudy.image}
      tags={caseStudy.tags}
    >
      <div dangerouslySetInnerHTML={{ __html: caseStudy.contentHtml }} />
    </CaseStudyLayout>
  )
}
