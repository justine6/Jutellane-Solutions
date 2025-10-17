import fs from "fs";
import path from "path";

export type Project = {
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  updatedAt?: string;
};

const projectsDir = path.join(process.cwd(), "content/projects");

export async function getAllProjects(): Promise<Project[]> {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".json"));
  const projects = files.map((file) => {
    const filePath = path.join(projectsDir, file);
    const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return {
      slug: file.replace(/\.json$/, ""),
      title: content.title ?? "Untitled Project",
      excerpt: content.excerpt ?? "",
      description: content.description ?? "",
      updatedAt: content.updatedAt ?? new Date().toISOString(),
    } as Project;
  });
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(projectsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return {
    slug,
    title: content.title ?? "Untitled Project",
    excerpt: content.excerpt ?? "",
    description: content.description ?? "",
    updatedAt: content.updatedAt ?? new Date().toISOString(),
  };
}