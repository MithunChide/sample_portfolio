"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, Trophy } from "lucide-react";
import { motion } from "framer-motion";

interface Cert {
  title: string;
  provider: string;
  link?: string;
}

const certifications: Cert[] = [
  {
    title: "Namaste React.js",
    provider: "Namaste Dev (Akshay Saini)",
    link: "https://namastedev.com"
  },
  {
    title: "Full Stack Web Development",
    provider: "Newton School",
    link: "https://newtonschool.co"
  }
];

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-350 mt-4 text-base md:text-lg">
            Academic credentials, industry-leading certifications, and professional recognitions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Block: Education (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-slate-200/60 dark:border-slate-800/60 w-full">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-200/40 dark:border-indigo-900/40">
                    <GraduationCap className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    Education
                  </h3>
                </div>

                <div className="space-y-6 relative border-l border-slate-150 dark:border-slate-800 pl-5 ml-4">
                  <div className="relative">
                    {/* Circle Node */}
                    <span className="absolute -left-[29px] top-1 h-4 w-4 rounded-full bg-white dark:bg-[#090d16] border-2 border-indigo-600" />
                    
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h4 className="text-lg font-bold text-slate-850 dark:text-slate-200">
                        B.Tech in Computer Science
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-650 dark:text-indigo-400">
                        <Calendar className="w-3.5 h-3.5" />
                        2017 - 2021
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-350 mt-1 font-semibold">
                      Dr. Babasaheb Ambedkar Technological University
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      Nagpur, India
                    </p>

                    <ul className="mt-4 list-disc list-inside text-xs text-slate-500 dark:text-slate-400 space-y-1 leading-relaxed">
                      <li>Core coursework: Data Structures, Analysis of Algorithms, Databases, Web Systems</li>
                      <li>Developed frontend portals for university and group assignments using JavaScript</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-6 border-t border-slate-200/40 dark:border-slate-850 pt-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Fully completed degree with solid computer science fundamentals</span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Certifications & Recognition (7 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/60 dark:border-slate-800/60 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-200/40 dark:border-purple-900/40">
                    <Award className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    Professional Certifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-150 dark:border-slate-805 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col justify-between h-32"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-850 dark:text-slate-200 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 leading-normal">
                          {cert.provider}
                        </p>
                      </div>
                      
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-755 transition-colors cursor-pointer mt-2"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recognition Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-200/40 dark:border-amber-900/40">
                  <Trophy className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 font-bold text-amber-605 dark:text-amber-500 text-xs uppercase tracking-wider">
                    <span>Award Winner</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-850 dark:text-slate-200 mt-1">
                    Q2 Star Award
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-350 mt-1 leading-relaxed">
                    Received at <span className="font-semibold text-indigo-650 dark:text-indigo-400">Epsilon (Publicis Groupe)</span> for outstanding performance and contribution to client delivery excellence in 2023.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
