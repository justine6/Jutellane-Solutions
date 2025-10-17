import { type MetadataRoute } from "next";
import { getAllProjects } from "@/lib/get-all-projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jutellane-solutions.vercel.app";

  const staticRoutes = ["", "/projects", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const projects = getAllProjects().map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projects];
}
