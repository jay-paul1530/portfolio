import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Paul | Backend Engineer & AI Agent Architect Portfolio",
  description: "Explore the personal development portfolio of Jay Paul, specializing in Generative AI, AI Agents, custom RAG pipelines, and high-performance Python/FastAPI backend services.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Portfolio", "Backend Engineer", "AI Agents", "Python", "FastAPI", "RAG"],
  authors: [{ name: "Jay Paul" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
