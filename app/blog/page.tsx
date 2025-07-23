import { getAllBlogPosts } from "@/lib/blog";
import BlogPageClient from "./blog-page-client";

export default function BlogServerPage() {
  const posts = getAllBlogPosts();
  return <BlogPageClient posts={posts} />;
}