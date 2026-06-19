"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SkillCategory } from "@/data/portfolio";
import * as Icons from "lucide-react";

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  // Helper to dynamically resolve lucide icons
  const getIcon = (name?: string) => {
    if (!name) return <Icons.Code size={16} />;
    const LucideIcon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
    return LucideIcon ? <LucideIcon size={16} className="text-accent" /> : <Icons.Code size={16} className="text-accent" />;
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
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
        <span className="text-xs font-mono text-accent tracking-widest uppercase">02 / EXPERTISE</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Skills & Capabilities</h2>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="p-6 rounded-2xl bg-card/30 border border-card-border/50 backdrop-blur-sm hover:border-accent/10 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-muted mb-4 block uppercase tracking-wider">
                Category {catIdx + 1}
              </span>
              <h3 className="text-xl font-semibold tracking-wide text-foreground mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        {getIcon(skill.iconName)}
                        <span className="font-medium text-foreground/90">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-muted">{skill.level}%</span>
                    </div>
                    {/* Animated Skill Level Bar */}
                    <div className="w-full h-1 bg-card-border/40 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" as const, delay: 0.1 }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
