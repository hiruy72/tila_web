"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2, Star, Zap, Globe2, ShieldCheck, HeartHandshake } from "lucide-react";

const whyUs = [
  {
    icon: Star,
    title: "Senior-Only Engineering",
    desc: "All our engineers average 5+ years of real-world product experience across diverse industries.",
  },
  {
    icon: Zap,
    title: "Fast Time-to-Market",
    desc: "From kickoff to first delivery in weeks — no long onboarding, no wasted cycles.",
  },
  {
    icon: Globe2,
    title: "Ethiopia-First, Africa-Wide",
    desc: "Deep local knowledge combined with global engineering standards to serve businesses across Africa.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Default",
    desc: "Every product we ship is built with security, compliance, and data privacy as first-class requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Partnership",
    desc: "We grow with you — from MVP to enterprise scale, we remain your trusted technology partner.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Delivery",
    desc: "Design, development, testing, deployment, and maintenance — all under one roof.",
  },
];

export default function About() {
  return (
    <>
      {/* ── Light About Section ── */}
      <section id="about" className="py-20 sm:py-24 bg-white scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
                  Empowering Organizations<br />
                  Through <span className="text-primary">Modern Technology</span>
                </h2>
                <p className="text-[17px] text-slate-500 leading-relaxed font-medium">
                  Tila Technology PLC is a modern software development company focused on delivering
                  innovative, scalable, and secure digital solutions. We help startups, businesses,
                  educational institutions, healthcare providers, and enterprises improve productivity
                  and accelerate digital transformation.
                </p>
              </div>
              <p className="text-[16px] text-slate-500 leading-relaxed">
                The name <strong className="text-slate-800">&ldquo;Tila&rdquo;</strong> means{" "}
                <strong className="text-slate-800">Umbrella</strong> — representing protection, unity,
                collaboration, and innovation. We provide complete technology solutions under one roof.
              </p>

              {/* Core values chips */}
              <div className="flex flex-wrap gap-2.5">
                {["Innovation", "Integrity", "Quality", "Collaboration", "Customer Success", "Continuous Learning"].map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[13px] font-semibold text-slate-600 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <CheckCircle2 size={12} className="text-primary" />
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Mission/Vision cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-5"
            >
              <div className="p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-[18px] font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  To empower organizations of all sizes with innovative, secure, and accessible
                  technology — enabling them to achieve their full potential in the digital economy.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 w-fit mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-[18px] font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  To become one of Africa&apos;s leading software and AI companies — a trusted
                  engineering partner for businesses building the future through technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Dark "Why Tila?" Section (2 rows on desktop) ── */}
      <section className="bg-[#0b1221] py-24 relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Why build with <span className="text-blue-500">Tila Technology?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[17px] text-slate-400 leading-[1.6]"
            >
              We give businesses senior engineering capacity, fast — without complexity
              or trade-offs. From idea to launch, we own every detail.
            </motion.p>
          </div>

          {/* Checklist in two rows on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start group hover:translate-x-1.5 transition-transform duration-300 cursor-default"
              >
                <div className="mt-0.5 flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.8)] transition-all duration-300">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[17px] leading-tight mb-2 group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-[14px] leading-relaxed max-w-sm group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
