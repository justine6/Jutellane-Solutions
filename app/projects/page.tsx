import { getAllProjects } from "@/lib/get-all-projects";
import ProjectsCard from "@/components/ProjectsCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="container mx-auto py-16 px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-[#0047a1]">Our Projects</h1>
        <p className="mt-3 text-gray-600">
          Explore a few highlights of how we’ve helped clients migrate, secure,
          and scale their systems.
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="mt-10 text-gray-500">
          No projects found yet. Add folders under <code>app/projects/</code> with a
          <code> meta.json</code> to populate this page.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectsCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </main>
  );
}
