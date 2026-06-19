"use client";

import React, { useState } from "react";
import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import Writing from "@/components/sections/writing";
import Contact from "@/components/sections/contact";
import { portfolioData, Article } from "@/data/portfolio";

export default function Home() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Article | null>(null);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "writing", label: "Case Studies" },
    { id: "contact", label: "Contact" },
  ];

  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactMe = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      {/* Dynamic Navigation */}
      <Navigation sections={sections} />

      {/* Main content wrapper */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero
          personalInfo={portfolioData.personalInfo}
          onViewProjects={handleViewProjects}
          onContactMe={handleContactMe}
        />

        {/* Separator / Spacer */}
        <div className="h-12 w-full" />

        {/* About Section */}
        <About personalInfo={portfolioData.personalInfo} />

        {/* Skills Section */}
        <Skills categories={portfolioData.skills} />

        {/* Projects Section */}
        <Projects
          projects={portfolioData.projects}
          onOpenCaseStudy={(slug) => {
            const article = portfolioData.articles.find((a) => a.slug === slug);
            if (article) {
              setSelectedCaseStudy(article);
            }
          }}
        />

        {/* Experience Section */}
        <ExperienceSection experiences={portfolioData.experience} />

        {/* Education Section */}
        <EducationSection educationList={portfolioData.education} />

        {/* Writing/Blog Section */}
        <Writing
          articles={portfolioData.articles}
          selectedCaseStudy={selectedCaseStudy}
          onSelectCaseStudy={setSelectedCaseStudy}
        />

        {/* Contact Section */}
        <Contact personalInfo={portfolioData.personalInfo} />
      </main>
    </div>
  );
}
