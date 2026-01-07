import { Heart, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/20 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-accent text-accent" />
            <span>by</span>
            <a
              href="https://github.com/Mani-QA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              ManiG
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/Mani-QA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground/60">
          <span>React</span>
          <span className="text-border">•</span>
          <span>TypeScript</span>
          <span className="text-border">•</span>
          <span>Tailwind CSS</span>
          <span className="text-border">•</span>
          <span>Shadcn UI</span>
          <span className="text-border">•</span>
          <span>Vite</span>
        </div>
      </div>
    </footer>
  );
}

