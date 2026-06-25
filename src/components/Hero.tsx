"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Grid beam positions that animate across the hero */
const BEAM_ROWS = [70, 140, 210, 280, 350, 420, 490, 560, 630, 700, 770, 840, 910, 980];
const BEAM_COLS = [70, 140, 210, 280, 350, 420, 490, 560, 630, 700, 770, 840, 910, 980, 1050, 1120, 1260, 1400];

const partners = [
  "Ministry of Innovation & Technology",
  "Addis Ababa University",
  "Ethio Telecom",
  "Commercial Bank of Ethiopia",
  "Awash Bank",
  "St. Paul Clinic",
  "Zemen Retail Group",
  "Abyssinia Academy",
  "Ministry of Innovation & Technology",
  "Addis Ababa University",
  "Ethio Telecom",
  "Commercial Bank of Ethiopia",
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white"
    >
      {/* ── Animated grid background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            opacity: 0.5,
          }}
        />

        {/* Horizontal animated beams */}
        {BEAM_ROWS.map((top, i) => (
          <div
            key={`bx-${i}`}
            className="absolute left-0 w-[600px] h-[1.5px] animate-beam-x pointer-events-none"
            style={{
              top,
              background: "linear-gradient(to right, transparent, #1a56db, transparent)",
              opacity: 0.55,
              animationDelay: `${(BEAM_ROWS.length - i) * 1.5}s`,
              animationDuration: "15s",
            }}
          />
        ))}

        {/* Vertical animated beams */}
        {BEAM_COLS.map((left, i) => (
          <div
            key={`by-${i}`}
            className="absolute top-0 w-[1.5px] h-[400px] animate-beam-y pointer-events-none"
            style={{
              left,
              background: "linear-gradient(to bottom, transparent, #1a56db, transparent)",
              opacity: 0.55,
              animationDelay: `${i * 1.5}s`,
              animationDuration: "15s",
            }}
          />
        ))}

        {/* Gradient overlays for fade-out effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60 pointer-events-none" />
      </div>

      {/* ── Main hero content ── */}
      <div className="h-24 shrink-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8 py-20">

        {/* Eyebrow label */}
        <motion.p
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-[13px] font-bold tracking-[0.3em] text-slate-500 uppercase"
        >
          Software Development Company — Addis Ababa, Ethiopia
        </motion.p>

        {/* Main headline */}
        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          <h1
            className="font-extrabold leading-[1.08] tracking-tight text-slate-900"
            style={{ fontSize: "clamp(2rem, 7vw, 4.2rem)" }}
          >
            <span className="text-primary">Building the Future</span>
            <br />
            <span>Through Technology</span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-[17px] font-medium text-slate-500 max-w-3xl leading-relaxed"
        >
          Tila Technology PLC delivers custom software, enterprise systems, AI-powered solutions,
          cybersecurity, cloud platforms, and digital transformation — all under one roof.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-[15px] bg-white hover:bg-primary hover:text-white shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-primary text-white font-bold text-[15px] hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* ── Trusted by / Partner Marquee ── */}
      <div className="relative z-10 w-full pb-16 pt-4">
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1400px] mx-auto px-6 mb-6 text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Trusted by Organizations Across Ethiopia
          </p>
        </motion.div>

        <motion.div
          custom={5}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-10 shrink-0 px-5 py-2 rounded-full border border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:scale-105 cursor-pointer transition-transform duration-300"
              >
                <span className="text-[13px] font-semibold text-slate-500 whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
