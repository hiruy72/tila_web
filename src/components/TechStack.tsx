"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { techStackData } from "@/data/techStack";
import { TechCardGrid } from "./TechIcons";

interface TechStackProps {
  standalone?: boolean;
}

export default function TechStack({ standalone = false }: TechStackProps) {
  const [activeTab, setActiveTab] = useState<string>("ai-ml");
  const activeGroup = techStackData.find((g) => g.id === activeTab) || techStackData[0];

  return (
    <section
      id={standalone ? undefined : "technologies"}
      className={`py-20 bg-slate-50 ${standalone ? "" : "scroll-mt-16"} relative`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {!standalone && (
          <div className="max-w-3xl mb-12">
            <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
              Our Technology Stack
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Built With Modern, <span className="text-primary">Industry-Standard</span> Technologies
            </h2>
          </div>
        )}

        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col lg:flex-row min-h-[500px]">
          <div className="w-full lg:w-80 bg-gray-50/50 border-r border-slate-200 flex flex-col p-4 gap-1.5 shrink-0">
            {techStackData.map((group) => {
              const TabIcon = group.icon;
              const isActive = activeTab === group.id;
              return (
                <Link
                  key={group.id}
                  href={`/technologies/${group.slug}`}
                  onMouseEnter={() => setActiveTab(group.id)}
                  onClick={() => setActiveTab(group.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-[14px] font-semibold text-left transition-all duration-200 ${
                    isActive
                      ? "bg-primary/8 text-primary border-l-4 border-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <TabIcon className="w-4 h-4 shrink-0" />
                    <span>{group.name}</span>
                  </div>
                  {isActive && <ChevronRight size={16} className="text-primary" />}
                </Link>
              );
            })}
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="p-8 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <p className="text-sm font-medium text-slate-500 border-l-2 border-slate-200 pl-3.5">
                    {activeGroup.desc}
                  </p>

                  <TechCardGrid
                    items={activeGroup.items.map((item) => ({
                      name: item.name,
                      href: `/technologies/${activeGroup.slug}/${item.slug}`,
                    }))}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-gray-50 border-t border-slate-200 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Link href="/about" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <span>How we work with product teams</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/technologies" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <span>Read More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
