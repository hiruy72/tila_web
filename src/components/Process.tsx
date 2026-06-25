"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Map,
  Palette,
  Code2,
  FileSpreadsheet,
  Rocket,
  Wrench,
  TrendingUp,
} from "lucide-react";

interface Step {
  phase: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export default function Process() {
  const steps: Step[] = [
    {
      phase: "01",
      title: "Discovery",
      icon: Search,
      description: "We align with stakeholders to clarify requirements, define target users, and establish success criteria.",
    },
    {
      phase: "02",
      title: "Planning",
      icon: Map,
      description: "Drafting user stories, architecture models, feature backlogs, and agile milestones.",
    },
    {
      phase: "03",
      title: "Research",
      icon: BookOpen,
      description: "Evaluating technical feasibility, competitor workflows, APIs, and scaling benchmarks.",
    },
    {
      phase: "04",
      title: "UI/UX Design",
      icon: Palette,
      description: "Creating wireframes, interactive user flows, custom branding styles, and responsive prototypes.",
    },
    {
      phase: "05",
      title: "Development",
      icon: Code2,
      description: "Writing maintainable, clean code using modern component structures and security guidelines.",
    },
    {
      phase: "06",
      title: "Testing",
      icon: FileSpreadsheet,
      description: "Rigorous QA testing (Unit, Integration, Security Auditing, Performance, and Compatibility).",
    },
    {
      phase: "07",
      title: "Deployment",
      icon: Rocket,
      description: "Automated deployment pipelines to stable environments with zero downtime protocols.",
    },
    {
      phase: "08",
      title: "Maintenance",
      icon: Wrench,
      description: "System updates, security patching, database optimizations, and system monitoring.",
    },
    {
      phase: "09",
      title: "Continuous Improvement",
      icon: TrendingUp,
      description: "Analyzing user behavior, optimizing SEO, and scheduling periodic feature releases.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white scroll-mt-16 relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-grid-bg opacity-[0.2] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Agile Engineering Lifecycle
          </h2>
          <p className="text-sm font-medium text-slate-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            A systematic, collaborative approach to delivering robust digital platforms on-time and with production integrity.
          </p>
        </div>

        {/* ── Alternating Left/Right Timeline (High-fidelity UI) ── */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical center connecting line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-primary/20 -translate-x-1/2 z-0" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.phase}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  
                  {/* Card panel (Left or Right) */}
                  <div className="w-full md:w-[calc(50%-32px)] pl-10 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="p-6 rounded-2xl border border-gray-150 bg-white hover:border-primary/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group cursor-default"
                    >
                      {/* Step Stage Badge */}
                      <span className="absolute top-4 right-4 text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-primary/5 text-primary">
                        Phase {step.phase}
                      </span>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <step.icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-[17px] font-black text-slate-900">
                          {step.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for vertical layout */}
                  <div className="hidden md:block w-16" />

                  {/* Center Node dot marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xs font-bold text-primary shadow z-10">
                    {step.phase}
                  </div>

                  {/* Spacer for grid structure */}
                  <div className="hidden md:block w-[calc(50%-32px)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
