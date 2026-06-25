"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const quickLinks = {
    Services: [
      { name: "Website Development", href: "/services/web-development" },
      { name: "Application Development", href: "/services/application-development" },
      { name: "ERP Systems", href: "/services/erp-integrations" },
      { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { name: "Cybersecurity", href: "/services/cybersecurity-cloud" },
    ],
    Solutions: [
      { name: "School ERP", href: "/solutions/edutech-core" },
      { name: "Hospital ERP", href: "/solutions/healthtech-erp" },
      { name: "Inventory Management", href: "/solutions/retail-fin" },
      { name: "AI Chatbot", href: "/solutions/saas-ai" },
    ],
    Company: [
      { name: "Who We Are", href: "/about" },
      { name: "Technologies", href: "/technologies" },
      { name: "Our Team", href: "/team" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-[#050b12] pt-20 pb-10 relative overflow-hidden border-t border-slate-900">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start mb-16">

          {/* Brand - matching Navbar but inverted */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Tila Technology home">
              <Image
                src="/logo.png"
                alt="Tila Technologies"
                width={48}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[20px] font-extrabold text-white tracking-tight">TILA</span>
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.18em] uppercase -mt-0.5">Technologies</span>
              </div>
            </Link>
            <p className="text-[13px] text-slate-400 leading-relaxed max-w-sm">
              Tila Technology PLC — &quot;Tila&quot; means Umbrella. We protect, unite, and innovate,
              delivering complete technology solutions under one roof from Addis Ababa, Ethiopia.
            </p>
            <div className="space-y-2 text-[13px] font-medium text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                <span>tilatechnology21@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                <span>+251 939 776 522</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-blue-400 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/135764096"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            {Object.entries(quickLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/40">
                  {category}
                </span>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-slate-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/40 block">
              Newsletter
            </span>
            <p className="text-[13px] text-slate-400 leading-relaxed">
              Subscribe for technology insights, product updates, and industry trends.
            </p>
            {subscribed ? (
              <div className="text-[13px] font-bold text-green-400 bg-green-400/10 p-3.5 rounded-xl border border-green-400/20">
                ✓ Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 relative mt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 pr-10 rounded-xl border border-white/10 bg-white/5 text-white text-[13px] placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-lg bg-primary hover:bg-primary-hover text-white transition-all"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-medium text-slate-500">
          <span>© 2026 Tila Technology PLC. All Rights Reserved.</span>
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
