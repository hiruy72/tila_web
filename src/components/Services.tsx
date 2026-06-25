"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Globe,
  Smartphone,
  FolderLock,
  Headphones,
  Shield,
  Brain,
  Layers,
  Cloud,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  items: string[];
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const bgX = useTransform(x, [-200, 200], [-300, 300]);
  const bgY = useTransform(y, [-200, 200], [-300, 300]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col h-full rounded-2xl p-[1.5px] cursor-pointer transition-all duration-500 ease-out active:scale-[0.98]"
      style={{ background: "transparent" }}
    >
      {/* Glow gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `radial-gradient(350px circle at ${bgX}px ${bgY}px, rgba(26,86,219,0.08), transparent 55%)`,
        }}
      />

      <div
        className="relative flex flex-col h-full rounded-2xl p-8 overflow-hidden transition-all duration-500 bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2"
      >
        {/* Icon & Go-To arrow */}
        <div className="flex items-center justify-between mb-7">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center ring-1 ring-gray-100 bg-gray-50 group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20 transition-all duration-500"
          >
            <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
          </div>
          <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-slate-300 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[1.2rem] font-extrabold text-slate-900 mb-3 tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 leading-relaxed text-[15px] flex-1 font-medium mb-6">
          {service.description}
        </p>

        {/* Sub items */}
        <ul className="space-y-1.5 border-t border-gray-100 pt-4">
          {service.items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[13px] font-semibold text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Website Development",
      icon: Globe,
      description: "Fast, responsive, and SEO-optimized web presences tailored to convert visitors into loyal clients.",
      items: ["Business & Corporate Websites", "Landing Pages & Portfolios", "Custom CMS Architectures", "E-Commerce Frameworks", "Support & Maintenance"],
    },
    {
      title: "Application Development",
      icon: Smartphone,
      description: "High-performance native and cross-platform mobile & desktop apps with intuitive interfaces.",
      items: ["Android & iOS Applications", "Flutter Cross-Platform Apps", "Progressive Web Apps (PWAs)", "Desktop Software", "Custom Cloud-Native Apps"],
    },
    {
      title: "ERP Systems",
      icon: FolderLock,
      description: "Robust enterprise resource planning software to manage workflows, operations and payroll.",
      items: ["School & Hospital Management", "Inventory & Accounting", "HR & Payroll Admin Systems", "POS Solutions", "Enterprise-scale ERP"],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Automate intelligence and decision-making using NLP, Computer Vision, and Generative AI.",
      items: ["Generative AI & LLM Systems", "AI Chatbots & Conversational UX", "Computer Vision & OCR", "Predictive Analytics & BI", "Natural Language Processing"],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Protect intellectual property, user data, and network systems against sophisticated threats.",
      items: ["Security Auditing & Hardening", "Penetration Testing", "Identity & Multi-Factor Auth", "Cloud & Infrastructure Security", "Compliance & Privacy"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Optimize operations with cloud migration, CI/CD pipelines, and infrastructure automation.",
      items: ["Cloud Architecture & Migration", "CI/CD Pipeline Setup", "Container Orchestration", "Infrastructure as Code", "24/7 Monitoring & Alerts"],
    },
    {
      title: "SaaS Development",
      icon: Layers,
      description: "Scale a recurring subscription business with reliable, multi-tenant cloud architectures.",
      items: ["Multi-Tenant Architectures", "Subscription & Billing Pipelines", "API Integrations & SDKs", "Custom Admin Dashboards", "High-Performance SaaS"],
    },
    {
      title: "Customer Support Systems",
      icon: Headphones,
      description: "Streamline agent response and ticket resolutions with automated CRM and helpdesk integrations.",
      items: ["Help Desk & Ticketing Systems", "CRM & Live Chat Integration", "Customer Service Automation", "Knowledge Base Systems", "Call Center Software"],
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-24 scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-[1.15] text-slate-900">
            How we <span className="text-primary">solve your problems</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-500 max-w-3xl">
            From custom software to enterprise systems, AI, and cybersecurity — we deliver complete
            technology solutions under one roof. Most engagements end up blending multiple services.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
