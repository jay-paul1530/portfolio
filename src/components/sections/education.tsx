"use client";

import React from "react";
import { motion } from "framer-motion";
import { Education } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface EducationProps {
  educationList: Education[];
}

export default function EducationSection({ educationList }: EducationProps) {
  return (
    <section
      id="education"
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
        <span className="text-xs font-mono text-accent tracking-widest uppercase">05 / CREDENTIALS</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Education</h2>
      </motion.div>

      {/* Grid of Education entries */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        {educationList.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" as const }}
            className="p-6 md:p-8 rounded-2xl bg-card/30 border border-card-border/50 backdrop-blur-sm hover:border-accent/15 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              {/* Degree & School info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-accent" size={24} />
                  <h3 className="text-xl font-bold text-foreground tracking-wide">
                    {edu.degree}
                  </h3>
                </div>
                <h4 className="text-base font-semibold text-accent/80 font-mono pl-9">
                  {edu.institution}
                </h4>
              </div>

              {/* Timelines and location */}
              <div className="flex flex-col gap-1 text-xs text-muted/80 pl-9 md:pl-0 md:items-end">
                <div className="flex items-center gap-1.5 font-mono">
                  <Calendar size={12} className="text-accent" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>{edu.location}</span>
                </div>
                {edu.gpa && (
                  <div className="mt-1 font-mono text-accent font-semibold text-[10px] tracking-wider uppercase">
                    {edu.gpa}
                  </div>
                )}
              </div>
            </div>

            {/* Coursework details */}
            <div className="mt-6 pl-9 border-t border-card-border/30 pt-6">
              <h5 className="text-xs font-mono text-muted tracking-wider uppercase mb-3">
                Key Coursework
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {edu.coursework.map((course) => (
                  <div key={course} className="flex items-center gap-2 text-sm text-muted/80">
                    <CheckCircle2 size={12} className="text-accent/60 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
