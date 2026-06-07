"use client";

import React from "react";
import { ArrowUpRight, Code, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float z-0" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center self-center lg:self-start space-x-2 px-3.5 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frontend Developer | 4+ Years Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Hi, I&apos;m <span className="gradient-text">Mithun Chide</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-200"
          >
            Building Scalable, High-Performance & Accessible React Apps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-350 max-w-xl text-base md:text-lg leading-relaxed mx-auto lg:mx-0"
          >
            I specialize in crafting pixel-perfect, accessible (WCAG 2.1 AA) interfaces at scale. Experienced in optimizing web vitals, building robust custom design systems, and engineering global state architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/30 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-850 font-semibold flex items-center justify-center text-slate-700 dark:text-slate-250 transition-all cursor-pointer"
            >
              <span>Contact Me</span>
            </a>

            <a
              href="#experience"
              className="text-sm font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors py-2 flex items-center space-x-1 cursor-pointer"
            >
              <span>Read Experience</span>
            </a>
          </motion.div>
        </div>

        {/* Right column: Interactive Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md glass-card rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            {/* Top dots */}
            <div className="flex items-center space-x-2 mb-6 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-500" />
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono ml-4">mithun_chide.ts</span>
            </div>

            {/* Code editor UI mockup */}
            <div className="space-y-4 font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <div>
                <span className="text-pink-500 font-semibold">const</span> <span className="text-blue-500">developer</span> = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-emerald-500">&quot;Mithun Chide&quot;</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-emerald-500">&quot;Frontend Developer&quot;</span>,
              </div>
              <div className="pl-4">
                experience: <span className="text-amber-500">&quot;4+ Years&quot;</span>,
              </div>
              <div className="pl-4">
                coreStack: [
                <span className="text-emerald-500">&quot;React&quot;</span>, <span className="text-emerald-500">&quot;TypeScript&quot;</span>, <span className="text-emerald-500">&quot;Next.js&quot;</span>, <span className="text-emerald-500">&quot;Tailwind&quot;</span>
                ],
              </div>
              <div className="pl-4">
                accessibility: <span className="text-emerald-500">&quot;WCAG 2.1 AA Compliant&quot;</span>,
              </div>
              <div className="pl-4">
                performance: <span className="text-emerald-500">&quot;Lighthouse scores 90+&quot;</span>
              </div>
              <div>&#125;;</div>
              
              <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-4 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <span className="flex items-center space-x-1">
                  <Code className="w-3.5 h-3.5 text-indigo-500" />
                  <span>React 19 & Next.js 16</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Vite / Webpack / CI-CD</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
