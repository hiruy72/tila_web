"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Activity,
  PackageSearch,
  Receipt,
  Users2,
  HelpCircle,
  BookOpenText,
  Bot,
  Contact2,
  LineChart,
  ShoppingBag,
  Layers,
  ArrowUpRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

interface Solution {
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  href?: string;
}

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const FEATURED: Solution[] = [
  {
    title: "Hospital ERP",
    tag: "HealthTech",
    tagColor: "#065F46",
    description:
      "End-to-end hospital management — patient records, bed allocation, pharmacy inventory, billing, and clinical workflows unified in one system.",
    features: ["EMR / Patient Logs", "Pharmacy Stock Controls", "Ward & Bed Allocator"],
    icon: Activity,
    image: U("1519494026892-80bbd2d6fd0d"),
    href: "/solutions/healthtech-erp",
  },
  {
    title: "School ERP",
    tag: "EduTech",
    tagColor: "#1D4ED8",
    description:
      "Complete academic workflows, scheduling, billing, student records, and parent/teacher portal.",
    features: ["Student & Staff Directory", "Fee & Invoicing Modules", "Attendance Tracking"],
    icon: GraduationCap,
    image: U("1580582932707-520aed937b7b"),
    href: "/solutions/edutech-core",
  },
  {
    title: "AI Chatbot",
    tag: "AI & ML",
    tagColor: "#0369A1",
    description:
      "RAG-powered agent resolving customer issues natively on web and WhatsApp with intelligent escalation.",
    features: ["RAG Knowledge Engine", "WhatsApp & Web Hooks", "Agent Escalation Mode"],
    icon: Bot,
    image: U("1677442135703-1787eea5ce01"),
    href: "/solutions/saas-ai/whatsapp-bot",
  },
  {
    title: "Accounting Platform",
    tag: "Finance",
    tagColor: "#92400E",
    description:
      "Secure double-entry bookkeeping, multi-currency invoicing, VAT declarations, and automated tax filings.",
    features: ["Double-Entry Engine", "Multi-Currency Support", "Automated Tax Filings"],
    icon: Receipt,
    image: U("1554224155-6726b3ff858f"),
    href: "/solutions/retail-fin/accounting",
  },
  {
    title: "CRM System",
    tag: "SaaS",
    tagColor: "#9F1239",
    description:
      "Visual lead pipelines, interaction analytics, Gmail/Outlook sync, and conversion optimization.",
    features: ["Visual Sales Funnel", "Gmail/Outlook Sync", "Conversion Analytics"],
    icon: Users2,
    image: U("1460925895917-afdab827c52f"),
    href: "/solutions/saas-ai",
  },
];

const QUICK_LINKS = [
  { title: "Inventory Management", icon: PackageSearch, href: "/solutions/retail-fin/warehouse" },
  { title: "Customer Support Platform", icon: HelpCircle, href: "/solutions/saas-ai/support-ticket" },
  { title: "LMS Portal", icon: BookOpenText, href: "/solutions/edutech-core/lms" },
  { title: "HR Management", icon: Contact2, href: "/solutions" },
  { title: "Business Analytics", icon: LineChart, href: "/solutions" },
  { title: "E-Commerce Platform", icon: ShoppingBag, href: "/services/web-development/e-commerce" },
  { title: "Multi-Tenant SaaS", icon: Layers, href: "/solutions/saas-ai/multi-tenant" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

function HeroCard({ solution }: { solution: Solution }) {
  const Wrapper = solution.href ? Link : "div";
  const wrapperProps = solution.href ? { href: solution.href } : {};
  return (
    // @ts-expect-error dynamic tag
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col justify-end rounded-3xl overflow-hidden h-full min-h-[380px] lg:min-h-[440px] border border-white/10 shadow-2xl"
    >
      <Image
        src={solution.image}
        alt={solution.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

      {/* Tag */}
      <span
        className="absolute top-5 left-5 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white tracking-widest"
      >
        {solution.tag}
      </span>

      {/* Icon */}
      <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center">
        <solution.icon className="w-5 h-5 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-7">
        <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          {solution.title}
          <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>
        <p className="text-[13.5px] text-slate-300 leading-relaxed mb-4 max-w-sm">
          {solution.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {solution.features.map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[11px] font-bold text-white/80"
            >
              <CheckCircle size={9} className="text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

function RegularCard({ solution, delay }: { solution: Solution; delay: number }) {
  const Wrapper = solution.href ? Link : "div";
  const wrapperProps = solution.href ? { href: solution.href } : {};
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      {/* @ts-expect-error dynamic tag */}
      <Wrapper
        {...wrapperProps}
        className="group relative flex flex-col justify-end rounded-2xl overflow-hidden h-full min-h-[220px] border border-white/10 shadow-xl"
      >
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent" />

        {/* Tag */}
        <span
          className="absolute top-3.5 left-3.5 text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 tracking-widest"
        >
          {solution.tag}
        </span>

        <div className="relative z-10 p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <solution.icon className="w-4 h-4 text-primary shrink-0" />
            <h3 className="text-[15px] font-bold text-white group-hover:text-primary transition-colors duration-300">
              {solution.title}
            </h3>
            <ArrowUpRight size={13} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-all ml-auto shrink-0" />
          </div>
          <p className="text-[12px] text-slate-400 leading-relaxed line-clamp-2">
            {solution.description}
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function Solutions() {
  const [hero, ...rest] = FEATURED;
  const topTwo = rest.slice(0, 2);
  const bottomTwo = rest.slice(2, 4);

  return (
    <section
      id="solutions"
      className="py-24 bg-slate-950 scroll-mt-16 relative overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5"
            >
              <Sparkles size={13} className="text-primary" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-primary uppercase">
                Featured Solutions
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Platforms Ready{" "}
              <span className="text-primary">for Deployment</span>
            </motion.h2>
          </div>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[15px] text-slate-400 font-medium leading-relaxed max-w-sm lg:text-right"
          >
            Battle-tested platforms built for Ethiopian enterprises — deployable in weeks, not months.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Hero Card — large left */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 row-span-2"
          >
            <HeroCard solution={hero} />
          </motion.div>

          {/* Top right 2 cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {topTwo.map((sol, i) => (
              <RegularCard key={sol.title} solution={sol} delay={4 + i} />
            ))}
          </div>

          {/* Bottom right 2 cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {bottomTwo.map((sol, i) => (
              <RegularCard key={sol.title} solution={sol} delay={6 + i} />
            ))}
          </div>
        </div>

        {/* Quick-link chip strip */}
        <motion.div
          custom={8}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-wrap gap-3 items-center"
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest shrink-0 mr-2">
            Also Available:
          </span>
          {QUICK_LINKS.map((ql) => (
            <Link
              key={ql.title}
              href={ql.href}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 hover:text-primary text-slate-400 text-[12px] font-semibold transition-all duration-200 group"
            >
              <ql.icon size={12} className="text-slate-500 group-hover:text-primary transition-colors shrink-0" />
              {ql.title}
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={9}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-primary text-white font-bold text-[14px] hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 transition-all duration-300"
          >
            Explore All Solutions
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
