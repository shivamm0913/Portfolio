import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight, FileCode, Code2 } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { SpotlightCard } from "../ui/spotlight-card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { BlurFade } from "../ui/blur-fade";
import { portfolioData } from "../../data/portfolio";
import { Link } from "react-router-dom";

function ProjectCardMedia({ project }) {
  const [imgError, setImgError] = useState(false);
  const hasRealImage = project.image && project.image !== "/placeholder-project.jpg" && !imgError;

  return (
    <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-muted/60 via-muted/30 to-accent/20 border-b border-border shrink-0 flex items-center justify-center">
      {hasRealImage ? (
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 p-4 text-center select-none">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm tracking-wider">
            <Code2 size={24} className="stroke-[1.75]" />
          </div>
          <span className="text-xs font-semibold text-foreground/80 tracking-tight">
            {project.title}
          </span>
          {project.subtitle && (
            <span className="text-[11px] text-muted-foreground line-clamp-1">
              {project.subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20">
      <BlurFade>
        <SectionHeader
          title="Featured Projects"
          subtitle="Some things I've built."
        />
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProjects.map((project, index) => (
          <BlurFade key={project.title || index} delay={0.05 + index * 0.08}>
            <SpotlightCard className="h-full flex flex-col group p-0 overflow-hidden">
              {/* Image / Media */}
              <ProjectCardMedia project={project} />

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="mb-2 shrink-0">
                  <h3 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-foreground/80 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 shrink-0">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[11px] px-2 py-0.5 font-medium bg-transparent"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons — fixed at bottom */}
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-3 border-t border-border/40 shrink-0">
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="flex-1 min-w-[105px] text-xs h-8">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={13} className="mr-1.5" />
                        Source Code
                      </a>
                    </Button>
                  )}
                  {project.apiDocs && (
                    <Button asChild variant="outline" size="sm" className="flex-1 min-w-[105px] text-xs h-8">
                      <a href={project.apiDocs} target="_blank" rel="noreferrer">
                        <FileCode size={13} className="mr-1.5" />
                        API Docs
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button asChild size="sm" className="flex-1 min-w-[105px] text-xs h-8">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <ExternalLink size={13} className="mr-1.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </BlurFade>
        ))}
      </div>

      {projects.length > featuredProjects.length && (
        <BlurFade delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
