"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Star,
  Zap,
  ShieldCheck,
  Sparkles,
  Quote,
} from "lucide-react";
import type { PageContent } from "@/data/pageContent";
import type { PageImageSet } from "@/data/pageImages";

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1.4;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.round(value * (progress * (2 - progress))));
      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(value);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-black text-primary tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// ─── Fade-up animation variant ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Grid beam positions matching homepage hero
const BEAM_ROWS = [70, 140, 210, 280, 350, 420, 490];
const BEAM_COLS = [140, 280, 420, 560, 700, 840];

interface RichPageLayoutProps {
  content: PageContent;
  eyebrow: string;
  breadcrumb: { label: string; href: string }[];
  items?: { name: string; href: string; description?: string }[];
  relatedLinks?: { label: string; href: string }[];
  ctaHref?: string;
  ctaLabel?: string;
  pageImage?: string;
  imageSet?: PageImageSet;
}

export default function RichPageLayout({
  content,
  eyebrow,
  breadcrumb,
  items,
  relatedLinks,
  ctaHref = "/contact",
  ctaLabel = "Partner with Us",
  imageSet,
}: RichPageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyTila = [
    {
      icon: Star,
      title: "Senior Engineers Only",
      desc: "Every project is led by engineers with 5+ years of real product experience.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "Agile sprints with weekly demos — see progress, not promises.",
    },
    {
      icon: ShieldCheck,
      title: "Security First",
      desc: "Security, compliance, and data privacy built into every layer.",
    },
  ];

  const hasImages = !!imageSet;

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* HERO — White grid background, content left, visual right           */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-slate-100">
        {/* Animated grid background matching homepage */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              opacity: 0.45,
            }}
          />

          {BEAM_ROWS.map((top, i) => (
            <div
              key={`bx-${i}`}
              className="absolute left-0 w-[500px] h-[1.5px] animate-beam-x pointer-events-none"
              style={{
                top,
                background: "linear-gradient(to right, transparent, #1a56db, transparent)",
                opacity: 0.4,
                animationDelay: `${i * 1.5}s`,
                animationDuration: "14s",
              }}
            />
          ))}

          {BEAM_COLS.map((left, i) => (
            <div
              key={`by-${i}`}
              className="absolute top-0 w-[1.5px] h-[350px] animate-beam-y pointer-events-none"
              style={{
                left,
                background: "linear-gradient(to bottom, transparent, #1a56db, transparent)",
                opacity: 0.4,
                animationDelay: `${i * 2}s`,
                animationDuration: "14s",
              }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content */}
            <div className={`${hasImages ? "lg:col-span-7" : "lg:col-span-12"}`}>
              <motion.p
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[13px] font-bold tracking-[0.3em] text-primary uppercase mb-4"
              >
                {eyebrow}
              </motion.p>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[14px] font-bold text-slate-400 uppercase tracking-wider mb-3"
              >
                {content.headline}
              </motion.p>

              <motion.h1
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6"
              >
                {content.title.includes(" ") ? (
                  <>
                    <span className="text-primary">
                      {content.title.split(" ")[0]}
                    </span>
                    {` ${content.title.split(" ").slice(1).join(" ")}`}
                  </>
                ) : (
                  <span className="text-primary">{content.title}</span>
                )}
              </motion.h1>

              <motion.p
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[17px] text-slate-500 leading-relaxed font-medium max-w-2xl mb-8"
              >
                {content.description}
              </motion.p>

              <motion.div
                custom={5}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full bg-primary text-white font-bold text-[15px] hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  {ctaLabel}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-[15px] bg-white hover:bg-primary hover:text-white shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Book a Free Consultation
                </Link>
              </motion.div>
            </div>

            {/* Right: Beautiful Framed Hero Image (matching home page SaaS visual style) */}
            {hasImages && (
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 relative"
              >
                {/* Decorative primary glow behind the container */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent blur-2xl pointer-events-none" />
                <div className="relative rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl">
                  <div className="rounded-xl overflow-hidden border border-slate-100">
                    <Image
                      src={imageSet.hero}
                      alt={content.title}
                      width={640}
                      height={440}
                      className="w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* STATS — Light gray panel with cards matching home page             */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {content.stats && content.stats.length > 0 && (
        <section className="py-12 border-b border-gray-100 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {content.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="text-[12px] font-semibold text-slate-500 mt-2 leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* OVERVIEW — Text left, clean visual right                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
                Overview
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Why <span className="text-primary">{content.title}</span> Matters
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-5">
                {content.overview}
              </p>
              {content.longDescription && (
                <p className="text-[15px] text-slate-500 leading-relaxed font-medium mb-6">
                  {content.longDescription}
                </p>
              )}

              {/* Check features */}
              <ul className="space-y-3.5 mt-4">
                {content.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14px] font-semibold text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-primary" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Clean framed overview image */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              {hasImages ? (
                <>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 p-2 bg-white shadow-xl">
                    <Image
                      src={imageSet.overview}
                      alt={`${content.title} overview`}
                      width={720}
                      height={500}
                      className="rounded-xl w-full h-[320px] lg:h-[400px] object-cover"
                    />
                  </div>

                  {/* Floating Quote Card */}
                  {content.highlightQuote && (
                    <div className="absolute -bottom-6 -left-6 max-w-[280px] bg-white rounded-2xl shadow-xl border border-gray-150 p-5">
                      <Quote className="w-5 h-5 text-primary mb-2" />
                      <p className="text-[13px] font-semibold text-slate-750 leading-relaxed italic">
                        {content.highlightQuote}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                /* Fallback grid features box */
                <div className="relative rounded-2xl border border-gray-200 bg-gray-50/50 p-8">
                  <Sparkles className="w-6 h-6 text-primary mb-5" />
                  {content.highlightQuote && (
                    <blockquote className="text-[16px] font-semibold text-slate-700 leading-relaxed italic mb-6 border-l-4 border-primary pl-4">
                      {content.highlightQuote}
                    </blockquote>
                  )}
                  <ul className="space-y-3">
                    {content.features.slice(0, 5).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[14px] font-semibold text-slate-700"
                      >
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 3-IMAGE GALLERY STRIP — Clean borders, hover scale                 */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {hasImages && (
        <section className="py-0 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {imageSet.gallery.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-slate-200 p-2 bg-white shadow-md hover:shadow-lg hover:border-primary/20 transition-all group overflow-hidden"
                >
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt={`${content.title} visual ${i + 1}`}
                      width={480}
                      height={320}
                      className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* WHY CHOOSE TILA — Clean background & primary details              */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50 border-y border-gray-150">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
              Our Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Tila for <span className="text-primary">{content.title}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyTila.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* CAPABILITIES / BENEFITS — framed sidebar photo + grid layout       */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {content.benefits && content.benefits.length > 0 && (
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
                  Capabilities
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  What We <span className="text-primary">Deliver</span>
                </h2>
              </div>
              {hasImages && imageSet.sidebar && (
                <div className="relative w-full lg:w-[320px] h-[100px] rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-sm p-1.5 bg-white">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={imageSet.sidebar}
                      alt="capabilities sidebar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                    <CheckCircle2 size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* HOW WE WORK — Process steps in gray backdrop                     */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {content.processSteps && content.processSteps.length > 0 && (
        <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-150">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
                How We Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our <span className="text-primary">Process</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative p-7 rounded-2xl bg-white border border-gray-200 hover:border-primary/25 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-[2.2rem] font-black text-primary/15 leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BRAND BANNER — Light-colored clean mockup visual block            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {hasImages && (
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 via-blue-50/20 to-white border border-primary/10 overflow-hidden p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left */}
                <div className="lg:col-span-7 space-y-5">
                  <p className="text-[12px] font-bold tracking-[0.3em] text-primary uppercase">
                    {eyebrow}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {content.title} Engineered to Scale
                  </h3>
                  <p className="text-[15px] text-slate-600 font-medium leading-relaxed">
                    {content.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {content.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[12px] font-bold shadow-sm"
                      >
                        <CheckCircle2 size={11} className="text-primary shrink-0" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right framed mock */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 p-2 bg-white shadow-xl">
                    <Image
                      src={imageSet.gallery[2]}
                      alt="visual mock banner"
                      width={500}
                      height={340}
                      className="rounded-xl w-full object-cover aspect-[3/2]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* DELIVERABLES & USE CASES — White cards, standard highlights       */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {(content.deliverables || content.useCases) && (
        <section className={`py-20 ${hasImages ? "bg-white" : "bg-white"}`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {content.deliverables && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Project <span className="text-primary">Deliverables</span>
                  </h2>
                  <ul className="space-y-4">
                    {content.deliverables.map((d, index) => (
                      <li
                        key={d}
                        className="flex items-start gap-3.5 text-[14px] font-semibold text-slate-750"
                      >
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-primary">
                          {index + 1}
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {content.useCases && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-primary/10 bg-primary/5 p-8 sm:p-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Ideal <span className="text-primary">For</span>
                  </h2>
                  <ul className="space-y-4">
                    {content.useCases.map((u) => (
                      <li
                        key={u}
                        className="flex items-start gap-3 text-[14px] font-semibold text-slate-700"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* EXPLORE FURTHER — Gray cards with light background                 */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {items && items.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-150">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore <span className="text-primary">Further</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="group flex flex-col h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[17px] font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <ArrowRight
                        size={18}
                        className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                      />
                    </div>
                    {item.description && (
                      <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* FAQ Accordion Accordance to Homepage Style                         */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 space-y-6"
              >
                <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase">
                  FAQ
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Common Questions About <span className="text-primary">{content.title}</span>
                </h2>
                <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
                  Have more questions about our capabilities, timelines, or pricing models? Let us assist you.
                </p>

                {hasImages && imageSet.sidebar && (
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 p-2 bg-white shadow-md">
                    <Image
                      src={imageSet.sidebar}
                      alt="FAQ sidebar card"
                      width={480}
                      height={240}
                      className="rounded-xl object-cover w-full h-[180px]"
                    />
                  </div>
                )}
              </motion.div>

              {/* Right ColumnAccordion Accordance */}
              <div className="lg:col-span-7 space-y-4">
                {content.faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="border border-gray-100 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                      >
                        <span className="font-bold text-slate-900 md:text-[16px]">
                          {faq.question}
                        </span>
                        <span className="text-primary shrink-0 ml-4">
                          {isOpen ? <ChevronDown size={18} className="rotate-180 transition-transform" /> : <ChevronDown size={18} className="transition-transform" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-500 text-[14px] leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* RELATED TOPICS — standard pills                                   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-150">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-4">
              Related Topics
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  <span>{link.label}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* FINAL CTA — Matches homepage Contact style visual card            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-blue-50/20 to-white px-10 py-16 text-center border border-primary/10 shadow-sm"
          >
            {/* Grid overlay for aesthetic premium backdrop */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1a56db 1px, transparent 1px), linear-gradient(to bottom, #1a56db 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase">
                Let&apos;s Build Together
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to Start Your <span className="text-primary">{content.title}</span> Project?
              </h2>
              <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                Join 80+ organizations across Ethiopia and Africa who trust Tila Technology to build exceptional software.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-primary text-white font-bold text-[15px] hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-[15px] bg-white hover:bg-primary hover:text-white shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
