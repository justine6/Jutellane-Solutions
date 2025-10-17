import { MetadataRoute } from "next";
import { allPosts } from "@/lib/get-all-posts"; // your blog fetcher

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://jutellane-solutions.vercel.app";

  // Fetch blog posts dynamically
  const posts = await allPosts();

  const staticPages = [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/projects`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
  ];

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
