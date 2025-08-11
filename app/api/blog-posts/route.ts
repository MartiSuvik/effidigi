import { NextResponse } from 'next/server';
import { getBlogPostsByLocale } from '@/lib/blog';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') as 'en' | 'et' || 'et';
    
    const posts = getBlogPostsByLocale(locale);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
