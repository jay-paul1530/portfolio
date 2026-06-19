"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { PersonalInfo } from "@/data/portfolio";

interface HeroProps {
  personalInfo: PersonalInfo;
  onViewProjects: () => void;
  onContactMe: () => void;
}

export default function Hero({ personalInfo, onViewProjects, onContactMe }: HeroProps) {
  // We'll split the name "ALEX KANE" into left and right blocks to wrap the image placeholder
  // Left: "AL", "KA"
  // Right: "EX", "NE"
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 grid-bg radial-mask opacity-75 z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      
      <div className="container mx-auto flex flex-col items-center justify-center z-10 flex-grow">
        {/* Name Graphic with Central Oval Photo Overlapping */}
        <div className="relative flex items-center justify-center w-full max-w-4xl py-12">
          
          {/* Background Text: JAY PAUL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="flex flex-col items-center justify-center font-extrabold text-[18vw] sm:text-[14vw] md:text-[11.5rem] leading-[0.85] tracking-[0.06em] pl-[0.06em] text-accent uppercase select-none text-center"
          >
            <span className="-ml-3 sm:-ml-6 md:-ml-8">JAY</span>
            <span>PAUL</span>
          </motion.div>

          {/* Foreground Oval Image, positioned absolutely at the center overlaying the text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.2 }}
            className="absolute z-20 w-[18vw] h-[25vw] sm:w-[14vw] sm:h-[20vw] md:w-[11.5rem] md:h-[16rem] rounded-full border-2 border-accent/40 bg-background/95 overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.95)] group translate-y-[25px]"
          >
            {/* Profile Image */}
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              fill
              priority
              className="object-cover scale-[1.10] translate-y-[8px] transition-transform duration-500 group-hover:scale-[1.15]"
            />

            {/* Shimmer overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </motion.div>

        </div>

        {/* Subtitle & CTA area */}
        <div className="w-full max-w-2xl text-center mt-6 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted font-mono tracking-tight max-w-md"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-base text-muted/70 max-w-lg mt-3"
          >
            {personalInfo.introduction}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 mt-8"
          >
            <button
              onClick={onViewProjects}
              className="px-6 py-3 rounded-full bg-accent text-background font-semibold text-sm tracking-wide shadow-lg shadow-accent/20 hover:bg-accent-muted hover:shadow-accent-muted/20 transition-all flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onContactMe}
              className="px-6 py-3 rounded-full bg-transparent text-foreground border border-card-border hover:border-accent/40 font-semibold text-sm tracking-wide hover:bg-card/50 transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Down Chevron scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown size={28} className="text-muted hover:text-accent transition-colors" />
      </motion.div>
    </section>
  );
}
