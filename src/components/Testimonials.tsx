"use client";

import React from "react";
import { Quote, User, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Mithun's commitment to accessibility and performance is outstanding. He led the architecture of our React component library for the PayPal integration, making it fully WCAG 2.1 AA compliant and cutting screen scaffolding time from hours to minutes.",
    author: "Siddharth Mehta",
    role: "Senior Product Manager",
    company: "Epsilon (Publicis Groupe)",
    stars: 5
  },
  {
    quote: "Mithun is an expert at React rendering cycles and memory optimization. When we were auditing the Incredible India portal, he eliminated costly re-renders on the weather and travel integrations, noticeably smoothing interactions on low-end hardware.",
    author: "Rajesh Kumar",
    role: "Lead Architect",
    company: "Epsilon (Publicis Groupe)",
    stars: 5
  },
  {
    quote: "Mithun was an amazing mentor to me when I joined. He onboarded me to our complex Redux and Playwright flows in less than two weeks. His PR reviews on memoization and hook optimizations are incredibly detailed and educational.",
    author: "Pooja Sharma",
    role: "Frontend Developer (Mentee)",
    company: "Epsilon (Publicis Groupe)",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0c111e]/50">
      
      {/* Decorative abstract elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Colleague <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-350 mt-4 text-base md:text-lg">
            Feedback from team members and managers on collaboration, engineering standard, and delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-slate-200/60 dark:border-slate-800/60 relative"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-indigo-500/40" />
                  <div className="flex gap-0.5">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-450 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Metadata */}
              <div className="flex items-center gap-3 border-t border-slate-200/50 dark:border-slate-850 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-indigo-600/10 dark:bg-indigo-400/10 border border-indigo-200/30 dark:border-indigo-800/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-850 dark:text-slate-200">
                    {test.author}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-450 font-semibold mt-0.5 leading-normal">
                    {test.role} at <span className="text-indigo-650 dark:text-indigo-400">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
