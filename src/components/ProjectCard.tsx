import type { Project } from "@/data/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Zap,
  Cloud,
  Globe,
  Lock,
  BarChart3,
  Atom,
  Database,
  HardDrive,
  Key,
  TestTube2,
  FileCode2,
  Accessibility,
  Search,
  Gauge,
  Server,
  Rocket,
  type LucideIcon,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Map tags to relevant icons
const tagIconMap: Record<string, LucideIcon> = {
  // Frameworks & Libraries
  Hono: Zap,
  React: Atom,
  Vite: Rocket,

  // Cloudflare Services
  "Cloudflare Workers": Cloud,
  "Edge Computing": Globe,
  D1: Database,
  R2: HardDrive,
  KV: Key,

  // Security & Auth
  JWT: Lock,

  // Features
  Analytics: BarChart3,
  "Test Automation": TestTube2,
  Serverless: Server,

  // Code & Performance
  TypeScript: FileCode2,
  "WCAG 2.1": Accessibility,
  SEO: Search,
  Performance: Gauge,
};

function getTagIcon(tag: string): LucideIcon | null {
  return tagIconMap[tag] || null;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/5"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Featured indicator */}
      {project.featured && (
        <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-primary to-accent px-12 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
          Featured
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground/90">
          {project.description}
        </CardDescription>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const Icon = getTagIcon(tag);
            return (
              <Badge
                key={tag}
                variant="secondary"
                className="gap-1.5 border border-border/50 bg-secondary/50 text-xs font-medium transition-colors hover:bg-secondary"
              >
                {Icon && <Icon className="h-3 w-3 text-primary/80" />}
                {tag}
              </Badge>
            );
          })}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pt-2">
        <Button
          asChild
          className="flex-1 gap-2 bg-primary/90 text-primary-foreground transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/20"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 gap-2 border-border/50 bg-transparent transition-all hover:border-primary/50 hover:bg-primary/10"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </Button>
      </CardFooter>

      {/* Bottom glow effect */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Card>
  );
}
