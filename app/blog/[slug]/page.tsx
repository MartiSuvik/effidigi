import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import BlogPostPageClient from "./blog-post-page-client";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostServerPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post} />;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}