"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, ChevronDown, ChevronUp, ShieldCheck, Zap, Layers, BarChart4 } from "lucide-react";

interface Project {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  shortDescription: string;
  problem: string;
  techs: string[];
  features: string[];
  challenges: string;
  solution: string;
  impact: string;
}

const projects: Project[] = [
  {
    id: "design-system",
    name: "Enterprise Accessible Design System",
    category: "Design System & React Library",
    icon: <Layers className="w-5 h-5 text-indigo-500" />,
    shortDescription: "Architected a scalable design system and React/TypeScript library containing 40+ WCAG 2.1 AA components.",
    problem: "Development teams suffered from major UI drift across platforms and excessive scaffolding overhead when spinning up new features.",
    techs: ["React.js", "TypeScript", "Tailwind CSS", "Material UI", "ARIA", "Figma Design Tokens"],
    features: [
      "40+ highly reusable UI components (accessible dialogs, tables, drawers, inputs)",
      "Strict semantic markup, full ARIA roles, and keyboard-navigation focus management",
      "Standardized theme configurations mapped directly to design tokens"
    ],
    challenges: "Enforcing absolute WCAG 2.1 AA compliance across complex client-side controls (like searchable dropdowns and calendars) without inflating bundle sizes.",
    solution: "Custom-built light-weight focus traps and keyboard event hooks; decoupled layout styles from logical hooks, ensuring minimal dependencies.",
    impact: "Cut screen scaffolding time by 85% (from a half-day to less than 1 hour) and eliminated UI drift across 3 development teams."
  },
  {
    id: "paypal-checkout",
    name: "PayPal Account UI & Content Integration",
    category: "E-Commerce & UIs",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    shortDescription: "Delivered responsive checkout flows and integrated tools empowering marketing teams to publish content independently.",
    problem: "Marketing managers needed development resources to deploy minor content changes, slowing down promotional campaigns.",
    techs: ["React.js", "TypeScript", "SASS/SCSS", "Figma", "Enterprise ECM", "Cross-browser testing"],
    features: [
      "Fully responsive payment and dashboard components matching rigid specifications",
      "Dynamic Content Management System (ECM) integration for independent layout releases",
      "Full pixel-perfection checking on Chrome, Firefox, Safari, and Edge"
    ],
    challenges: "Maintaining design token consistency and absolute responsive fidelity while integrating a heavy enterprise content manager.",
    solution: "Created strict interface contracts between standard styles and CMS payloads; utilized structural grid systems and automated cross-browser testing workflows.",
    impact: "Saved 2-3 development hours per week and enabled instant content publishing without deployment cycles."
  },
  {
    id: "incredible-india",
    name: "Tourism Portal Performance Audit & Optimization",
    category: "Web Performance",
    icon: <Zap className="w-5 h-5 text-cyan-500" />,
    shortDescription: "Audited and optimized the Incredible India tourism web portal, resolving lags and API integrations.",
    problem: "Data-heavy dashboard pages pulling from three distinct API flows (weather, currency, travel itineraries) caused lags and slow responses on lower-end mobile devices.",
    techs: ["React.js", "Context API", "useMemo", "useCallback", "React.memo", "Lighthouse Tools"],
    features: [
      "Real-time weather, currency exchange, and travel itinerary cards",
      "Asynchronous layout rendering boundary isolations",
      "Optimized client-side polling and state management"
    ],
    challenges: "Frequent third-party API polling triggers forced full dashboard component trees to re-render, leading to noticeable input latency.",
    solution: "Isolated rendering cycles using memoization (`React.memo`), memoized calculations (`useMemo`), and custom event callbacks (`useCallback`), restricting state changes to target leaves.",
    impact: "Boosted Lighthouse metrics on key pages from 65 to 90+, decreased initial load by 30%, and restored fluid smooth scrolling."
  },
  {
    id: "perf-review",
    name: "Internal Performance Review Platform",
    category: "Enterprise Software",
    icon: <BarChart4 className="w-5 h-5 text-purple-500" />,
    shortDescription: "Engineered an internal web review system serving 500+ employees, replacing manual spreadsheets.",
    problem: "The HR department executed evaluations manually using Excel files, leading to errors, delays, and a lack of metric tracking.",
    techs: ["React.js", "Redux", "Context API", "Jest", "React Testing Library"],
    features: [
      "Employee score submissions, supervisor approvals, and history dashboard",
      "Predictable UX with standardized loading, error, and empty status panels",
      "Secure normalized client-side store structures for quick evaluation retrieval"
    ],
    challenges: "Complex nested evaluation structures triggered state mutations; test coverage was virtually zero, making changes risky.",
    solution: "Redesigned the Redux store into flat normalized models; authored 40+ unit test files, lifting code coverage to a clean 80% to trap regressions early.",
    impact: "Replaced spreadsheet evaluations entirely, eliminating mistakes and saving HR 3+ hours per quarterly review cycle."
  }
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-50 dark:bg-[#0c111e]">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-350 mt-4 text-base md:text-lg">
            A review of enterprise applications built, designed, and optimized throughout my career.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;

            return (
              <motion.div
                key={project.id}
                layout="position"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-slate-200/60 dark:border-slate-800/60 h-fit`}
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-150 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-350 text-xs font-bold">
                      {project.category}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
                      {project.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {project.name}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden border-t border-slate-200/60 dark:border-slate-850 pt-5 mt-5 text-sm"
                      >
                        <div>
                          <h4 className="font-bold text-slate-850 dark:text-slate-200">The Problem:</h4>
                          <p className="text-slate-605 dark:text-slate-400 mt-1 leading-relaxed">{project.problem}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-850 dark:text-slate-200">Key Features:</h4>
                          <ul className="list-disc list-inside space-y-1 text-slate-605 dark:text-slate-400 mt-1">
                            {project.features.map((feat, i) => (
                              <li key={i}>{feat}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-bold text-slate-850 dark:text-slate-200">Challenges:</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{project.challenges}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-850 dark:text-slate-200">Our Solution:</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{project.solution}</p>
                          </div>
                        </div>

                        <div className="bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-200/30 dark:border-indigo-900/30 p-3 rounded-xl">
                          <h4 className="font-bold text-indigo-700 dark:text-indigo-400">Results & Impact:</h4>
                          <p className="text-slate-650 dark:text-slate-350 mt-1 leading-relaxed">{project.impact}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-850 pt-4 mt-6">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        <span>Hide Specifications</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Show Specifications</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Code className="w-3.5 h-3.5" />
                      Enterprise App
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
