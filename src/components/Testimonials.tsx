"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const trustedOrgs = [
  {
    name: "Ethio Telecom",
    initials: "ET",
    color: "#0070C0",
    bg: "#EFF6FF",
    desc: "Telecom",
  },
  {
    name: "Commercial Bank of Ethiopia",
    initials: "CBE",
    color: "#006B3C",
    bg: "#ECFDF5",
    desc: "Banking",
  },
  {
    name: "Awash Bank",
    initials: "AB",
    color: "#E11D48",
    bg: "#FFF1F2",
    desc: "Banking",
  },
  {
    name: "Ethiopian Airlines",
    initials: "ET",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    desc: "Aviation",
    logo: (
      <svg viewBox="0 0 60 30" className="h-6" fill="none">
        <path d="M5 15 C8 8, 16 5, 24 8 L38 12 L52 7 L55 9 L38 16 L24 12 C16 10, 8 13, 6 17z" fill="#1D4ED8" />
        <path d="M38 16 L52 11 L55 13 L42 20z" fill="#1D4ED8" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "St. Paul Clinic",
    initials: "SP",
    color: "#059669",
    bg: "#ECFDF5",
    desc: "Healthcare",
  },
  {
    name: "Abyssinia Academy",
    initials: "AA",
    color: "#7C3AED",
    bg: "#F5F3FF",
    desc: "Education",
  },
  {
    name: "Zemen Retail Group",
    initials: "ZR",
    color: "#D97706",
    bg: "#FFFBEB",
    desc: "Retail",
  },
  {
    name: "Dashen Bank",
    initials: "DB",
    color: "#BE185D",
    bg: "#FDF2F8",
    desc: "Banking",
  },
];

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Dr. Selamawit Alene",
      role: "Medical Director",
      company: "St. Paul Clinic",
      content:
        "Tila Technology designed and deployed our Hospital ERP system. It has completely transformed our patient admission speed and inventory accuracy. Outstanding support!",
      rating: 5,
    },
    {
      name: "Dawit Wolde",
      role: "Operations Director",
      company: "Zemen Retail Group",
      content:
        "Our inventory management was chaotic until Tila Tech built a customized solution. The real-time tracking and automated PO generation saved us thousands of dollars.",
      rating: 5,
    },
    {
      name: "Elizabeth Kassa",
      role: "Founder & Director",
      company: "Abyssinia Academy",
      content:
        "The School ERP solution by Tila is incredibly intuitive. Teachers submit grades easily, and parent communication has improved by 200%. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <>
      {/* ══ TRUSTED BY ORGANIZATIONS ══ */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-[12px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">
              Trusted by Organizations Across Ethiopia
            </p>
            <div className="w-12 h-0.5 bg-primary/40 mx-auto rounded-full" />
          </motion.div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {trustedOrgs.map((org, idx) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-transparent hover:border-slate-200 hover:shadow-md bg-white/60 hover:bg-white transition-all duration-300 cursor-default"
              >
                {/* Logo badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: org.bg }}
                >
                  {org.logo ? (
                    org.logo
                  ) : (
                    <span
                      className="text-sm font-black tracking-tight select-none"
                      style={{ color: org.color }}
                    >
                      {org.initials}
                    </span>
                  )}
                </div>
                {/* Name */}
                <div className="text-center">
                  <p className="text-[11px] font-bold text-slate-700 leading-tight line-clamp-2">
                    {org.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{org.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section id="testimonials" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4"
            >
              Success Stories
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
            >
              What Our Clients Say About Us
            </motion.h3>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-gray-150 bg-gray-50/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                {/* Author Details */}
                <div className="border-t border-gray-200/60 pt-4 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-black"
                    style={{
                      backgroundColor:
                        idx === 0
                          ? "#ECFDF5"
                          : idx === 1
                          ? "#FFFBEB"
                          : "#F5F3FF",
                      color:
                        idx === 0 ? "#059669" : idx === 1 ? "#D97706" : "#7C3AED",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
