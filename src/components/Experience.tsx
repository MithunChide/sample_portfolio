"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  techs: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer 2",
    company: "Epsilon (Publicis Groupe)",
    location: "Bengaluru, India",
    period: "Apr 2023 - Present",
    bullets: [
      "Architected a scalable design system + React/TypeScript component library (40+ WCAG 2.1 AA compliant components) consumed across 3 enterprise apps — cut new-screen scaffolding time by 85% (from half-day to under 1 hour).",
      "Owned end-to-end delivery of pixel-perfect, responsive UIs for the PayPal account from Figma to production, ensuring cross-browser consistency and integration of an ECM publishing tool saving 2-3 dev hours/week.",
      "Boosted Core Web Vitals (LCP, FCP, CLS) and Lighthouse scores from 65 to 90+ on key pages using React.lazy + Suspense code-splitting, route-based chunking, and bundle analysis — cut initial page load by 30%.",
      "Built Playwright + BrowserStack E2E test suites for 6 critical user flows and shipped GitHub Actions CI/CD with automatic PR-preview deployments, collapsing manual release steps from 6 to 2.",
      "Mentored junior developers, onboarded new engineers to their first production commits in 2 weeks, and integrated AI developer assistants (Cursor AI, Amazon Q, Copilot) for 20-30% faster routine delivery."
    ],
    techs: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Playwright",
      "BrowserStack",
      "GitHub Actions",
      "Figma",
      "WCAG 2.1 AA",
      "Cursor AI",
      "Webpack"
    ]
  },
  {
    role: "Frontend Developer 1",
    company: "Epsilon (Publicis Groupe)",
    location: "Bengaluru, India",
    period: "Aug 2021 - Mar 2023",
    bullets: [
      "Shipped 15+ responsive screens from Figma using ES6+, HTML5, CSS3, and Bootstrap, establishing cross-browser compatibility across Chrome, Firefox, Safari, and Edge.",
      "Eliminated unnecessary re-renders on data-heavy pages of the Incredible India tourism platform (integrating weather, currency, and travel APIs) via useMemo, useCallback, and React.memo to ensure smooth behavior on low-end devices.",
      "Engineered global state management across 3 product features with Redux and Context API, standardizing loading/error/empty UI states.",
      "Shipped an internal employee performance review tool serving 500+ users on React.js + Context API, saving the HR department 3+ hours per review cycle.",
      "Lifted unit test coverage from near-zero to 80% across 40+ components using Jest + React Testing Library, identifying 3 regressions pre-release."
    ],
    techs: [
      "React.js",
      "JavaScript (ES6+)",
      "Redux",
      "Context API",
      "Jest",
      "React Testing Library",
      "Bootstrap",
      "HTML5/CSS3",
      "Git"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0c111e]/50">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-350 mt-4 text-base md:text-lg">
            A history of building high-quality enterprise applications, driving performance, and optimizing UI delivery.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10">
              
              {/* Date Indicator on the left of desktop screen */}
              <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right text-xs font-bold text-slate-500 dark:text-slate-400">
                {exp.period}
              </div>

              {/* Glowing timeline node point */}
              <span className="absolute -left-3 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-[#090d16] border-2 border-indigo-600">
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-600 animate-pulse" />
              </span>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-500" />
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mt-2 font-semibold">
                      <span className="text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period tag for mobile */}
                  <div className="inline-flex md:hidden items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-xs font-bold text-slate-500 dark:text-slate-400 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-4 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags used in this job */}
                <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-5">
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-400" />
                    Key Stack & Practices
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/35 border border-indigo-100 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-350"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
