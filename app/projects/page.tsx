import { getAllProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="border rounded-lg p-4">
            <a href={`/projects/${p.slug}`} className="font-semibold">
              {p.title}
            </a>
            {p.excerpt && <p className="text-sm mt-2 opacity-80">{p.excerpt}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}