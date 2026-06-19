"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/data/portfolio";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
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
        <span className="text-xs font-mono text-accent tracking-widest uppercase">04 / JOURNEY</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Work History</h2>
      </motion.div>

      {/* Timeline Layout */}
      <div className="relative border-l border-card-border/80 ml-4 md:ml-6 space-y-12 py-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" as const }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline pulsing node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-card border-2 border-card-border group-hover:border-accent transition-colors flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl bg-card/20 border border-card-border/40 backdrop-blur-sm hover:border-accent/15 transition-all">
              
              {/* Header info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent font-semibold">
                      {exp.type.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-accent/80 font-mono mt-1">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex flex-col text-xs text-muted/80 gap-1 md:items-end">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar size={12} className="text-accent" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Tasks bullet points */}
              <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-accent text-sm text-muted/80 leading-relaxed">
                {exp.description.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>
                    {bullet}
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
