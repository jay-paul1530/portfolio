"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { PersonalInfo } from "@/data/portfolio";
import { Compass, GraduationCap, Target } from "lucide-react";

interface AboutProps {
  personalInfo: PersonalInfo;
}

export default function About({ personalInfo }: AboutProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
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
        <span className="text-xs font-mono text-accent tracking-widest uppercase">01 / ABOUT ME</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Biography</h2>
      </motion.div>

      {/* Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left column - Detailed Bio paragraphs */}
        <div className="lg:col-span-7 space-y-6">
          {personalInfo.bio.map((paragraph, idx) => (
            <motion.p
              key={idx}
              variants={itemVariants}
              className="text-base md:text-lg text-muted/80 leading-relaxed font-light"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Right column - Quick Info blocks, shifted significantly up to align with Biography's axis */}
        <div className="lg:col-span-5 space-y-6 lg:pl-4 lg:-mt-32">
          
          {/* Interests Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-card/40 border border-card-border/50 backdrop-blur-sm hover:border-accent/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-accent" size={20} />
              <h3 className="font-semibold text-lg tracking-wide">Creative Focus</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-card-border/30 text-xs text-muted font-mono border border-card-border/50"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Career Goals Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-card/40 border border-card-border/50 backdrop-blur-sm hover:border-accent/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent" size={20} />
              <h3 className="font-semibold text-lg tracking-wide">Professional Goals</h3>
            </div>
            <ul className="space-y-3">
              {personalInfo.careerGoals.map((goal, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-muted/80 leading-relaxed">
                  <span className="text-accent mt-1">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
