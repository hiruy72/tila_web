"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BEAM_ROWS = [120, 240, 360];

interface SectionLandingHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  breadcrumb?: { label: string; href: string }[];
}

export default function SectionLandingHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Partner with Us", href: "/contact" },
  secondaryCta = { label: "Book a Free Consultation", href: "/contact" },
  breadcrumb,
}: SectionLandingHeroProps) {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        {BEAM_ROWS.map((top, i) => (
          <div
            key={i}
            className="absolute left-0 w-[600px] h-[1.5px] animate-beam-x"
            style={{
              top,
              background: "linear-gradient(to right, transparent, #1a56db, transparent)",
              opacity: 0.5,
              animationDelay: `${i * 2.5}s`,
              animationDuration: "15s",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white pointer-events-none" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold text-slate-400 mb-8">
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={crumb.href}>
                {i > 0 && <span>/</span>}
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        )}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-bold tracking-[0.3em] text-primary uppercase mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-[17px] text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium mb-10"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-primary text-white font-bold text-[15px] hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 transition-all duration-300"
          >
            {primaryCta.label}
            <ArrowRight size={16} />
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-[15px] bg-white hover:bg-primary hover:text-white transition-all duration-300"
          >
            {secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
