"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

interface ProjectItem {
  title: string;
  tag: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  href?: string;
}

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  EduTech:     { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  HealthTech:  { bg: "#ECFDF5", text: "#065F46", border: "#A7F3D0" },
  Enterprise:  { bg: "#F5F3FF", text: "#5B21B6", border: "#DDD6FE" },
  Finance:     { bg: "#FFFBEB", text: "#92400E", border: "#FDE68A" },
  SaaS:        { bg: "#FFF1F2", text: "#9F1239", border: "#FECDD3" },
  "AI & ML":   { bg: "#F0F9FF", text: "#0369A1", border: "#BAE6FD" },
  "E-Commerce":{ bg: "#FFF7ED", text: "#9A3412", border: "#FED7AA" },
};

const U = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function Solutions() {
  const projects: ProjectItem[] = [
    {
      title: "School ERP",
      tag: "EduTech",
      description: "Complete academic workflows, scheduling, billing, student records, and parent/teacher portal.",
      features: ["Student & Staff Directory", "Fee & Invoicing Modules", "Attendance Tracking"],
      icon: GraduationCap,
      image: U("1580582932707-520aed937b7b"),
      href: "/solutions/edutech-core",
    },
    {
      title: "Hospital ERP",
      tag: "HealthTech",
      description: "Manage medical records, bed management, billing, patient flow, and pharmacy inventory.",
      features: ["EMR / Patient Logs", "Pharmacy Stock Controls", "Ward & Bed Allocator"],
      icon: Activity,
      image: U("1519494026892-80bbd2d6fd0d"),
      href: "/solutions/healthtech-erp",
    },
    {
      title: "Inventory Management System",
      tag: "Enterprise",
      description: "Real-time stock tracking, barcode integrations, supplier control, and automated reorder points.",
      features: ["Barcode Scanning API", "Supplier Portal", "Automated Purchase Orders"],
      icon: PackageSearch,
      image: U("1586528116311-ad8dd3c8310d"),
      href: "/solutions/retail-fin/warehouse",
    },
    {
      title: "Accounting Platform",
      tag: "Finance",
      description: "Secure double-entry bookkeeping, multi-currency invoicing, VAT declarations, and tax filings.",
      features: ["Double-Entry Engine", "Multi-Currency Support", "Automated Tax Filings"],
      icon: Receipt,
      image: U("1554224155-6726b3ff858f"),
      href: "/solutions/retail-fin/accounting",
    },
    {
      title: "CRM System",
      tag: "SaaS",
      description: "Lead pipelines, interaction analytics, email integration, and conversion optimization pipelines.",
      features: ["Visual Sales Funnel", "Gmail/Outlook Sync", "Conversion Analytics"],
      icon: Users2,
      image: U("1460925895917-afdab827c52f"),
      href: "/solutions/saas-ai",
    },
    {
      title: "Customer Support Platform",
      tag: "SaaS",
      description: "Shared team inboxes, live chat widgets, knowledge bases, and multi-channel ticketing desks.",
      features: ["Multi-Channel Inbox", "Knowledge Base Creator", "SLA Status Trackers"],
      icon: HelpCircle,
      image: U("1531746790731-6c087fecd65a"),
      href: "/solutions/saas-ai/support-ticket",
    },
    {
      title: "Learning Management System",
      tag: "EduTech",
      description: "Deliver digital video lessons, graded exams, student analytics, and custom certificates.",
      features: ["SCORM Content Support", "Exam Grading Engine", "Smart PDF Certificates"],
      icon: BookOpenText,
      image: U("1516321318423-f06f85e504b3"),
      href: "/solutions/edutech-core/lms",
    },
    {
      title: "AI Chatbot",
      tag: "AI & ML",
      description: "Retrieval Augmented Generation (RAG) agent resolving customer issues natively on web and WhatsApp.",
      features: ["RAG Knowledge Engine", "WhatsApp & Web Hooks", "Agent Escalation Mode"],
      icon: Bot,
      image: U("1677442135703-1787eea5ce01"),
      href: "/solutions/saas-ai/whatsapp-bot",
    },
    {
      title: "HR Management System",
      tag: "Enterprise",
      description: "Track employee attendances, leaves, payroll distributions, and performance evaluations.",
      features: ["Biometric Sync Core", "Employee Payroll Engine", "Performance Appraisals"],
      icon: Contact2,
      image: U("1522202176988-66273c2fd55f"),
    },
    {
      title: "Business Analytics Dashboard",
      tag: "AI & ML",
      description: "Aggregated business indicators, sales trends, and AI-predicted financial metrics.",
      features: ["Real-time Data Stream", "AI Predictive Modeler", "Custom Report Exporter"],
      icon: LineChart,
      image: U("1551288049-bebda4e38f71"),
    },
    {
      title: "E-Commerce Platform",
      tag: "E-Commerce",
      description: "High-performance store fronts with shopping carts, secure checkout, and seller dashboards.",
      features: ["Global Cart & Checkout", "Vendor Payout Engine", "Optimized Web Core"],
      icon: ShoppingBag,
      image: U("1556742049-0cfed4f6a45d"),
      href: "/services/web-development/e-commerce",
    },
    {
      title: "SaaS Platform Template",
      tag: "SaaS",
      description: "Multi-tenant cloud architecture skeleton with subscription billing and admin management panels.",
      features: ["Multi-Tenant DB schema", "Stripe/Chapa Payments", "Custom Admin Dashboard"],
      icon: Layers,
      image: U("1618401471353-b98afee0b2eb"),
      href: "/solutions/saas-ai/multi-tenant",
    },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Enterprise", "SaaS", "AI & ML", "EduTech", "HealthTech", "Finance", "E-Commerce"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.tag === filter);

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-slate-50 scroll-mt-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #1a56db 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4"
          >
            Featured Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Robust Software Platforms{" "}
            <span className="text-primary">Ready for Deployment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-[16px] text-slate-500 font-medium leading-relaxed"
          >
            Battle-tested platforms built for Ethiopian enterprises — deployable in weeks, not months.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "border border-gray-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const tagStyle = TAG_COLORS[project.tag] ?? {
                bg: "#F1F5F9",
                text: "#475569",
                border: "#CBD5E1",
              };
              const CardWrapper = project.href ? Link : "div";
              const wrapperProps = project.href ? { href: project.href } : {};

              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* @ts-expect-error dynamic component */}
                  <CardWrapper
                    {...wrapperProps}
                    className="group flex flex-col h-full rounded-2xl border border-gray-150 bg-white hover:border-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 overflow-hidden"
                  >
                    {/* Image header */}
                    <div className="relative w-full h-40 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      {/* gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Tag badge on image */}
                      <span
                        className="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border"
                        style={{
                          backgroundColor: tagStyle.bg,
                          color: tagStyle.text,
                          borderColor: tagStyle.border,
                        }}
                      >
                        {project.tag}
                      </span>

                      {/* Icon overlay bottom-right */}
                      <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                        <project.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Title */}
                      <h4 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center justify-between gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight
                          size={15}
                          className="text-slate-300 group-hover:text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </h4>

                      {/* Description */}
                      <p className="text-[12.5px] text-slate-500 leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Core Features */}
                      <ul className="space-y-1.5 border-t border-slate-100 pt-4">
                        {project.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11.5px] font-semibold text-slate-600">
                            <CheckCircle size={11} className="text-primary shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-bold text-[14px] hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 transition-all duration-300"
          >
            Explore All Solutions
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
