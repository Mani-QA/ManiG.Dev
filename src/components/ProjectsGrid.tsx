import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsGrid() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Projects in Beta
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A showcase of applications I'm actively building — crafted with
            cutting-edge technologies, designed for performance and scalability.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm sm:grid-cols-4">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">
              {projects.length}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">In Beta</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">
              100%
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Edge Deployed
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">
              &lt;100ms
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Latency</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent">
              🚀
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Actively Building
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

