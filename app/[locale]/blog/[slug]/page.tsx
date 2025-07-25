import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import BlogPostPageClient from "./blog-post-page-client";

interface BlogPostPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export default function BlogPostServerPage({ params: { slug, locale } }: BlogPostPageProps) {
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post} />;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const locales = ['et', 'en'];
  
  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}