"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Project } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectsProps {
  projects: Project[];
  onOpenCaseStudy?: (slug: string) => void;
}

export default function Projects({ projects, onOpenCaseStudy }: ProjectsProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 w-full lg:pl-64 max-w-7xl mx-auto flex flex-col justify-center select-none"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-xs font-mono text-accent tracking-widest uppercase">03 / CREATIVE WORK</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Projects</h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            onClick={() => {
              if (project.caseStudySlug && onOpenCaseStudy) {
                onOpenCaseStudy(project.caseStudySlug);
              }
            }}
            className={`group relative flex flex-col h-[460px] rounded-2xl bg-card/30 border border-card-border/50 backdrop-blur-sm overflow-hidden hover:border-accent/30 transition-all duration-300 ${project.caseStudySlug ? "cursor-pointer" : ""}`}
          >
            {/* Project Image Placeholder - Abstract Generative Pattern */}
            <div className="relative w-full h-[180px] bg-neutral-950 overflow-hidden flex items-center justify-center border-b border-card-border/30">
              {/* Visual geometric art mockup inside card */}
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent group-hover:opacity-100 transition-opacity" />
              
              {/* Abstract CSS shapes representing the project */}
              <div className="absolute w-24 h-24 rounded-full bg-accent/5 blur-xl group-hover:scale-150 transition-transform duration-700" />
              <div className="w-12 h-12 rounded-xl border border-accent/20 bg-background/50 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <span className="text-accent text-lg font-mono font-bold">
                  {project.title.substring(0, 2).toUpperCase()}
                </span>
              </div>

              <span className="absolute bottom-3 right-4 text-[10px] font-mono text-muted/60 tracking-wider">
                {project.id.toUpperCase()}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-wide text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted/80 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-card-border/20 text-[10px] text-muted font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-card-border/20 text-[10px] text-muted font-mono">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Card CTA Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-card-border/30">
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] sm:text-xs font-mono text-muted hover:text-accent transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>SOURCE</span>
                  </a>
                  
                  {project.caseStudySlug && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenCaseStudy) onOpenCaseStudy(project.caseStudySlug!);
                      }}
                      className="flex items-center gap-1 text-[10px] sm:text-xs font-mono text-accent hover:text-accent/80 hover:underline transition-colors cursor-pointer font-bold"
                    >
                      <span>CASE STUDY</span>
                    </button>
                  )}

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] sm:text-xs font-mono text-muted hover:text-accent transition-colors font-semibold"
                    >
                      <span>LIVE</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
