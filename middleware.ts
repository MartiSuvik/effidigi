import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Handle Estonian case studies (redirect to locale route)
  if (pathname.startsWith('/case-studies/') && !pathname.startsWith('/en/case-studies/')) {
    // Extract the slug from the path
    const slug = pathname.replace('/case-studies/', '')
    
    // If it's an Estonian case study (ending with -et), redirect to locale route
    if (slug.endsWith('-et')) {
      const newUrl = new URL(`/et/case-studies/${slug}`, request.url)
      return NextResponse.redirect(newUrl)
    }
  }

  // Handle Estonian case studies listing page
  if (pathname === '/case-studies' && !request.nextUrl.pathname.startsWith('/en/')) {
    const newUrl = new URL('/et/case-studies', request.url)
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/case-studies/:path*',
  ]
}
