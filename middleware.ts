import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect root homepage to Estonian locale as default
  if (pathname === '/') {
    const newUrl = new URL('/et', request.url)
    return NextResponse.redirect(newUrl)
  }

  // Handle root-level case studies (redirect to appropriate locale route)
  if (pathname.startsWith('/case-studies/') && !pathname.startsWith('/en/case-studies/') && !pathname.startsWith('/et/case-studies/')) {
    // Extract the slug from the path
    const slug = pathname.replace('/case-studies/', '')
    
    // If it's an Estonian case study (ending with -et), redirect to Estonian locale route
    if (slug.endsWith('-et')) {
      const newUrl = new URL(`/et/case-studies/${slug}`, request.url)
      return NextResponse.redirect(newUrl)
    }
    // If it's an English case study (ending with -en), redirect to English locale route
    else if (slug.endsWith('-en')) {
      const newUrl = new URL(`/en/case-studies/${slug}`, request.url)
      return NextResponse.redirect(newUrl)
    }
  }

  // Handle root-level case studies listing page (redirect to Estonian as default)
  if (pathname === '/case-studies' && !request.nextUrl.pathname.startsWith('/en/') && !request.nextUrl.pathname.startsWith('/et/')) {
    const newUrl = new URL('/et/case-studies', request.url)
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/case-studies/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}
