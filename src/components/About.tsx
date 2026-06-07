"use client";

import React from "react";
import { Award, ShieldAlert, Zap, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: <ShieldAlert className="w-6 h-6 text-indigo-500" />,
    title: "Accessibility (WCAG 2.1 AA)",
    description: "Expertise in semantic HTML, ARIA, screen reader integration, and full keyboard-only navigation for inclusive experiences.",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-500" />,
    title: "Performance Optimization",
    description: "Proficient in lazy-loading, bundle analysis, memoization, and optimizing Core Web Vitals (LCP, FCP, CLS) to push Lighthouse scores to 90+.",
  },
  {
    icon: <Award className="w-6 h-6 text-purple-500" />,
    title: "Design System Architecture",
    description: "Experienced in building reusable component libraries (40+ components) from Figma tokens, eliminating UI drift across teams.",
  },
  {
    icon: <Users2 className="w-6 h-6 text-pink-500" />,
    title: "Agile Leadership & Mentorship",
    description: "Proven history of mentoring junior engineers, structured code reviews, and streamlining release flows via GitHub Actions CI/CD.",
  },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "40+", label: "WCAG UI Components" },
  { value: "90+", label: "Lighthouse Performance" },
  { value: "500+", label: "Active Tool Users" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0c111e]/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-350 mt-4 text-base md:text-lg">
            A results-oriented Frontend Developer dedicated to standard engineering, speed, and accessible experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              My Professional Philosophy
            </h3>
            
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-base">
              I am a Frontend Developer with 4+ years building scalable, accessible React.js and TypeScript applications at Epsilon (Publicis Groupe) for global enterprise clients like PayPal. My strength lies in bridging the gap between design concepts and production-grade code.
            </p>

            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-base">
              I love engineering clean global states, building performance-focused custom hooks, and establishing automated testing workflows. By prioritizing semantic HTML, ARIA compliance, and optimizing bundle splits, I ensure that applications load incredibly fast and are accessible to everyone.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-4 text-center border border-slate-200/60 dark:border-slate-800/60"
                >
                  <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Strengths Block */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Areas of Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-5 border border-slate-200/50 dark:border-slate-800/50 space-y-3"
                >
                  <div className="p-3 rounded-lg w-fit bg-indigo-50 dark:bg-indigo-950/40">
                    {strength.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
