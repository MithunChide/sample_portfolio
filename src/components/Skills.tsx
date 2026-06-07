"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layout, Zap, Cpu, GraduationCap } from "lucide-react";

type SkillCategory = "languages" | "react" | "styling" | "performance" | "tooling";

interface SkillItem {
  name: string;
  level: number; // percentage
  badgeOnly?: boolean;
}

const categories: { id: SkillCategory; name: string; icon: React.ReactNode }[] = [
  { id: "languages", name: "Languages", icon: <Code2 className="w-4 h-4" /> },
  { id: "react", name: "React Ecosystem", icon: <Cpu className="w-4 h-4" /> },
  { id: "styling", name: "Styling & UI", icon: <Layout className="w-4 h-4" /> },
  { id: "performance", name: "Perf & Accessibility", icon: <Zap className="w-4 h-4" /> },
  { id: "tooling", name: "Testing & Tooling", icon: <GraduationCap className="w-4 h-4" /> },
];

const skillData: Record<SkillCategory, SkillItem[]> = {
  languages: [
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "HTML5 & Semantic Markup", level: 95 },
    { name: "CSS3 & SASS/SCSS", level: 90 },
  ],
  react: [
    { name: "React.js (v18/v19)", level: 95 },
    { name: "Custom Hooks & Context API", level: 95 },
    { name: "Redux Toolkit", level: 85 },
    { name: "Next.js (App Router)", level: 80 },
    { name: "Zustand", level: 75, badgeOnly: true },
    { name: "Suspense & Error Boundaries", level: 85, badgeOnly: true },
  ],
  styling: [
    { name: "Tailwind CSS", level: 95 },
    { name: "Material UI", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "Styled Components", level: 80 },
    { name: "Design Systems Integration", level: 90 },
    { name: "Figma (Design Tokens)", level: 85, badgeOnly: true },
  ],
  performance: [
    { name: "Web Vitals (LCP, FCP, CLS)", level: 90 },
    { name: "WCAG 2.1 AA Accessibility", level: 95 },
    { name: "Code-Splitting & Lazy Loading", level: 90 },
    { name: "ARIA & Keyboard Navigation", level: 95 },
    { name: "Lighthouse Audit & Bundle Analysis", level: 85, badgeOnly: true },
    { name: "Screen Reader Support", level: 90, badgeOnly: true },
  ],
  tooling: [
    { name: "Jest & React Testing Library", level: 90 },
    { name: "Playwright (E2E Testing)", level: 85 },
    { name: "Vite & Webpack", level: 80 },
    { name: "GitHub Actions (CI/CD)", level: 85 },
    { name: "Git & GitFlow", level: 90 },
    { name: "BrowserStack", level: 80, badgeOnly: true },
    { name: "Node.js & Firebase (basics)", level: 60, badgeOnly: true },
    { name: "Cursor AI & Copilot", level: 95, badgeOnly: true },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("languages");

  return (
    <section id="skills" className="py-24 relative bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-350 mt-4 text-base md:text-lg">
            My toolbelt categorized by disciplines. Driven by quality, performance, and cross-browser responsiveness.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/15"
                  : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Display Card Grid */}
        <div className="glass-panel max-w-5xl mx-auto rounded-2xl p-8 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left Column: Core Skill Sliders */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 border-l-4 border-indigo-600 pl-3">
                  Core Proficiencies
                </h3>
                {skillData[activeCategory]
                  .filter((skill) => !skill.badgeOnly)
                  .map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800/60 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                        />
                      </div>
                    </div>
                  ))}
              </div>

              {/* Right Column: Key Technologies (Badges) */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 border-l-4 border-purple-500 pl-3">
                  Complementary Stack & Tools
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  Additional tools, practices, and systems I leverage frequently to achieve high quality and fast deliveries.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {skillData[activeCategory].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold border ${
                        skill.badgeOnly
                          ? "bg-purple-500/5 dark:bg-purple-500/10 border-purple-200 dark:border-purple-900/50 text-purple-700 dark:text-purple-300"
                          : "bg-indigo-500/5 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300"
                      }`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
