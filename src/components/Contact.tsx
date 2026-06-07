"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { motion } from "framer-motion";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5 text-indigo-500" />,
      label: "Call Me",
      value: "+91 7620121448",
      href: "tel:+917620121448"
    },
    {
      icon: <Mail className="w-5 h-5 text-purple-500" />,
      label: "Email Me",
      value: "mithunchide03@gmail.com",
      href: "mailto:mithunchide29@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-500" />,
      label: "Location",
      value: "Bengaluru, India",
      href: "https://maps.google.com/?q=Bengaluru,India"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-350 mt-4 text-base md:text-lg">
            Have a project in mind, want to hire me, or just want to chat? Shoot me a message.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">

          {/* Left Block: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Contact Information
            </h3>

            <p className="text-slate-600 dark:text-slate-355 leading-relaxed text-sm">
              Feel free to reach out directly via phone or email, or connect with me on professional networks. I typically reply within 24 hours.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target={detail.label === "Location" ? "_blank" : undefined}
                  rel={detail.label === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 p-4.5 rounded-xl border border-slate-200/60 dark:border-slate-805 bg-slate-50/50 dark:bg-slate-900/35 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors w-full cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-white dark:bg-[#090d16] border border-slate-150 dark:border-slate-800 flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {detail.label}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-250 mt-0.5">
                      {detail.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials Connection */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Connect on Social Networks
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/mithunchide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-805 bg-slate-50/50 dark:bg-slate-900/35 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/mithunchide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-805 bg-slate-50/50 dark:bg-slate-900/35 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Block: Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 border border-slate-200/60 dark:border-slate-800/60"
          >
            <h3 className="text-xl font-bold text-slate-850 dark:text-slate-100 mb-6">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Mithun Chide"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaboration Opportunities"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey Mithun, I read your resume and I'm interested in..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all resize-none"
                />
              </div>

              {/* Submit / Status Button */}
              {status === "success" ? (
                <div className="w-full py-3.5 bg-emerald-600 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-600/15">
                  <Check className="w-5 h-5 animate-bounce" />
                  <span>Message Sent Successfully!</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-600/15 hover:shadow-indigo-650/20 group cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
