"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PersonalInfo } from "@/data/portfolio";
import { Mail, Copy, Check } from "lucide-react";

interface ContactProps {
  personalInfo: PersonalInfo;
}

const GithubIcon = ({ size = 20 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact({ personalInfo }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: personalInfo.github,
      icon: <GithubIcon size={20} />,
      handle: `@${personalInfo.github.split('/').pop()}`,
    },
    {
      name: "LinkedIn",
      url: personalInfo.linkedin,
      icon: <LinkedinIcon size={20} />,
      handle: `${personalInfo.linkedin.split('/').filter(Boolean).pop()}`,
    },
  ];

  return (
    <section
      id="contact"
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
        <span className="text-xs font-mono text-accent tracking-widest uppercase">07 / GET IN TOUCH</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Contact</h2>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl">
        
        {/* Email Copy Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 p-6 md:p-8 rounded-2xl bg-card/30 border border-card-border/50 backdrop-blur-sm hover:border-accent/15 transition-all flex flex-col justify-between h-[260px]"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Mail size={18} />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Let's build something together
              </h3>
            </div>
            <p className="text-sm text-muted/70 leading-relaxed">
              If you have a project idea, want to collaborate, or just want to chat about web technology, feel free to drop me an email.
            </p>
          </div>

          <div
            onClick={copyEmail}
            className="flex items-center justify-between p-3.5 rounded-xl bg-background/50 border border-card-border/60 cursor-pointer hover:border-accent/40 group transition-all"
          >
            <span className="font-mono text-xs md:text-sm text-muted/90 truncate mr-2 select-all">
              {personalInfo.email}
            </span>
            <button
              className="text-muted group-hover:text-accent transition-colors flex-shrink-0"
              title="Copy email"
            >
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
            </button>
          </div>
        </motion.div>

        {/* Social Connection Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 gap-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card/20 border border-card-border/40 hover:border-accent/20 hover:bg-card/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-card-border/30 border border-card-border/60 flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/30 transition-all">
                {social.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground tracking-wide uppercase">
                  {social.name}
                </h4>
                <p className="text-xs font-mono text-muted/80 mt-0.5">
                  {social.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Footer attribution */}
      <footer className="mt-24 border-t border-card-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl text-xs text-muted/65 font-mono">
        <div>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
