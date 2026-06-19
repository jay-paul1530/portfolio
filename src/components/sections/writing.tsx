"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Article } from "@/data/portfolio";
import { BookOpen, Calendar, Clock, X } from "lucide-react";

interface WritingProps {
  articles: Article[];
  selectedCaseStudy: Article | null;
  onSelectCaseStudy: (article: Article | null) => void;
}

function parseInline(text: string): React.ReactNode[] {
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  const matches = text.split(regex);
  return matches.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="bg-card-border/30 px-1.5 py-0.5 rounded font-mono text-xs text-accent"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let inCodeBlock = false;
  let codeBlockLines: string[] = [];

  const flushParagraph = (key: string | number) => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ");
      if (text.startsWith("> ")) {
        elements.push(
          <blockquote
            key={key}
            className="font-light italic text-accent/90 bg-accent/5 p-4 rounded-xl border border-accent/10 my-4"
          >
            {parseInline(text.substring(2))}
          </blockquote>
        );
      } else {
        elements.push(
          <p key={key} className="text-muted/95 leading-relaxed text-sm md:text-base">
            {parseInline(text)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${i}`}
            className="p-4 rounded-xl bg-card-border/20 border border-card-border/40 font-mono text-xs text-muted leading-relaxed overflow-x-auto my-4 whitespace-pre"
          >
            {codeBlockLines.join("\n")}
          </pre>
        );
        codeBlockLines = [];
        inCodeBlock = false;
      } else {
        flushParagraph(i);
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      continue;
    }

    if (line.trim() === "---") {
      flushParagraph(i);
      elements.push(<hr key={`hr-${i}`} className="border-card-border/30 my-6" />);
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph(i);
      elements.push(
        <h1 key={`h1-${i}`} className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
          {parseInline(line.substring(2))}
        </h1>
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph(i);
      elements.push(
        <h2 key={`h2-${i}`} className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">
          {parseInline(line.substring(3))}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph(i);
      elements.push(
        <h3 key={`h3-${i}`} className="text-lg md:text-xl font-bold text-foreground mt-6 mb-3">
          {parseInline(line.substring(4))}
        </h3>
      );
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("• ") || line.startsWith("* ")) {
      flushParagraph(i);
      const listItems = [];
      let j = i;
      while (
        j < lines.length &&
        (lines[j].startsWith("- ") || lines[j].startsWith("• ") || lines[j].startsWith("* "))
      ) {
        listItems.push(lines[j].substring(2));
        j++;
      }
      i = j - 1;
      elements.push(
        <ul key={`list-${i}`} className="list-disc pl-5 space-y-2 text-muted/95 my-4">
          {listItems.map((item, idx) => (
            <li key={idx}>{parseInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.trim() === "") {
      flushParagraph(i);
    } else {
      currentParagraph.push(line);
    }
  }
  flushParagraph("final");

  return <div className="space-y-4">{elements}</div>;
}

export default function Writing({ 
  articles, 
  selectedCaseStudy, 
  onSelectCaseStudy 
}: WritingProps) {

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (selectedCaseStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCaseStudy]);

  return (
    <section
      id="writing"
      className="pt-24 pb-48 px-6 md:px-12 w-full lg:pl-64 max-w-7xl mx-auto flex flex-col justify-center select-none"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-xs font-mono text-accent tracking-widest uppercase">06 / DEEP DIVES</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Project Case Studies</h2>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {articles.map((article) => (
          <motion.article
            key={article.id}
            variants={cardVariants}
            onClick={() => onSelectCaseStudy(article)}
            className="group relative p-6 rounded-2xl bg-card/30 border border-card-border/50 backdrop-blur-sm hover:border-accent/30 transition-all flex flex-col justify-between h-[300px] cursor-pointer"
          >
            {/* Header info */}
            <div>
              <div className="flex items-center gap-3 text-xs text-muted mb-4 font-mono">
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-accent" />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{article.readingTime}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground group-hover:text-accent tracking-wide leading-snug transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-sm text-muted/70 mt-3 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Tags and read link */}
            <div className="mt-4 pt-4 border-t border-card-border/30 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-card-border/30 text-[9px] text-muted font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="flex items-center gap-1.5 text-xs font-mono text-accent group-hover:underline font-bold">
                <span>READ CASE STUDY</span>
                <BookOpen size={12} />
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Case Study Overlay Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => onSelectCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-card border border-card-border max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-8 flex flex-col relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => onSelectCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-card-border/30 hover:bg-card-border/60 text-foreground transition-colors cursor-pointer"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Metadata */}
              <div className="flex items-center gap-3 text-xs text-muted mb-4 font-mono">
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-accent" />
                  <span>{selectedCaseStudy.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{selectedCaseStudy.readingTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide leading-snug mb-4">
                {selectedCaseStudy.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCaseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-card-border/40 text-xs text-accent font-mono border border-card-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Scrollable Rich Text Content */}
              <div className="space-y-6 text-muted/95 leading-relaxed text-sm md:text-base border-t border-card-border/30 pt-6">
                {selectedCaseStudy.content ? (
                  <MarkdownRenderer content={selectedCaseStudy.content} />
                ) : (
                  <>
                    <p className="font-light italic text-accent/90 bg-accent/5 p-4 rounded-xl border border-accent/10">
                      "{selectedCaseStudy.excerpt}"
                    </p>

                    {/* Case Study Details Placeholder */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground text-lg tracking-wide">
                        Overview & Architecture
                      </h4>
                      <p>
                        This deep dive breaks down the technical blueprint, service orchestration, and vector data pipelining strategies implemented in the project. 
                      </p>
                      <div className="p-4 rounded-xl bg-card-border/20 border border-card-border/40 font-mono text-xs text-muted leading-relaxed">
                        // [Custom Case Study Details]
                        // Paste your custom project architecture details, database models, 
                        // code snippets, and specific technical challenges here!
                      </div>
                      <p>
                        Future updates will include benchmark results, step-by-step query optimization paths, and interactive diagrams explaining the multi-agent communication networks.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
