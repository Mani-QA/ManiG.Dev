import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Cloud,
  TestTube2,
} from "lucide-react";

export function AboutMe() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm sm:p-12">
          {/* Background gradient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            {/* Profile Image */}
            <div className="shrink-0">
              <div className="relative">
                {/* Gradient ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-75 blur-sm" />
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background sm:h-48 sm:w-48">
                  <img
                    src="/profile.jpeg"
                    alt="Manivannan Gajendran"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Name & Title */}
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Manivannan Gajendran
              </h2>
              <p className="mt-2 text-lg font-medium text-primary">
                Senior Engineering Manager
              </p>

              {/* Bio */}
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Senior Engineering Manager leading cross-functional teams. I drive
                software quality through Agile leadership and technical expertise
                in automation (Playwright/API) and cloud infra (K8s/Docker).
                Certified ISTQB & SAFe practitioner delivering excellence across
                Banking & Aerospace.
              </p>

              {/* Skills/Badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                <Badge
                  variant="secondary"
                  className="gap-1.5 border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium"
                >
                  <Users className="h-3 w-3 text-primary/80" />
                  Agile Leadership
                </Badge>
                <Badge
                  variant="secondary"
                  className="gap-1.5 border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium"
                >
                  <TestTube2 className="h-3 w-3 text-primary/80" />
                  Playwright / API
                </Badge>
                <Badge
                  variant="secondary"
                  className="gap-1.5 border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium"
                >
                  <Cloud className="h-3 w-3 text-primary/80" />
                  K8s / Docker
                </Badge>
                <Badge
                  variant="secondary"
                  className="gap-1.5 border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium"
                >
                  <Award className="h-3 w-3 text-primary/80" />
                  ISTQB & SAFe
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

