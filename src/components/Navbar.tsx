"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  megaMenus,
  simpleNavLinks,
  type MegaMenuConfig,
  type NavCategory,
} from "@/data/navigation";
import { techStackData } from "@/data/techStack";
import { TechCardGrid } from "./TechIcons";

function getMenuById(id: string): MegaMenuConfig | undefined {
  return megaMenus.find((m) => m.id === id);
}

function getActiveCategory(menu: MegaMenuConfig, activeSubTab: string): NavCategory | undefined {
  return menu.categories.find((c) => c.id === activeSubTab);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const activeMenu = activeDropdown ? getMenuById(activeDropdown) : undefined;
  const activeCategory = activeMenu ? getActiveCategory(activeMenu, activeSubTab) : undefined;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMenuHover = (menuId: string) => {
    const menu = getMenuById(menuId);
    setActiveDropdown(menuId);
    if (menu) setActiveSubTab(menu.categories[0].id);
  };

  const isNavActive = (href: string, menuId?: string) => {
    if (menuId && activeDropdown === menuId) return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopNavItems = megaMenus;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled || activeDropdown ? "glass-effect" : "bg-transparent border-transparent shadow-none"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-16 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 z-10" aria-label="Tila Technology home">
          <Image
            src="/logo.png"
            alt="Tila Technologies"
            width={48}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-[20px] font-black text-slate-900 tracking-tight">Tila</span>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.18em] uppercase -mt-0.5">
              Technologies
            </span>
          </div>
        </Link>

        {/* Centered Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2">
          {desktopNavItems.map((menu) => {
            const isActive = isNavActive(menu.href, menu.id);
            return (
              <div
                key={menu.id}
                className="relative flex items-center gap-1.5"
                onMouseEnter={() => handleMenuHover(menu.id)}
              >
                <Link
                  href={menu.href}
                  className={`relative text-[14px] xl:text-[15px] font-bold transition-colors duration-200 outline-none pb-1 whitespace-nowrap ${
                    isActive ? "text-primary" : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {menu.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
                <span className="text-slate-300 font-bold select-none text-[13px] translate-y-[0.5px]">::</span>
              </div>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-6 z-10">
          <div className="flex items-center gap-1.5 cursor-pointer text-[14px] font-bold text-slate-600 hover:text-primary transition-colors">
            <span className="text-[15px]">🇬🇧</span>
            <span className="uppercase">en</span>
            <span className="text-slate-300 font-bold select-none text-[13px] ml-1">::</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2 text-sm font-bold text-primary bg-primary/5 hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Partner with Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-900 hover:bg-slate-100 transition-all z-10"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%-8px)] left-0 right-0 hidden lg:block pointer-events-auto pt-2"
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pb-6">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="flex min-h-[420px]">
                  {/* Left sidebar */}
                  <div className="w-[280px] bg-slate-50/80 border-r border-slate-100 flex flex-col p-3 gap-0.5 shrink-0">
                    {activeMenu.categories.map((category) => {
                      const techGroup = activeMenu.id === "technologies"
                        ? techStackData.find((g) => g.id === category.id)
                        : null;
                      const TabIcon = techGroup?.icon;
                      const isSubActive = activeSubTab === category.id;

                      return (
                        <Link
                          key={category.id}
                          href={category.href}
                          onMouseEnter={() => setActiveSubTab(category.id)}
                          className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-[14px] font-bold text-left transition-all duration-200 ${
                            isSubActive
                              ? "bg-primary/8 text-primary shadow-sm"
                              : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {TabIcon && (
                              <TabIcon size={15} className={isSubActive ? "text-primary" : "text-slate-400"} />
                            )}
                            <span>{category.name}</span>
                          </div>
                          {isSubActive && <ChevronRight size={14} className="text-primary" />}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right content */}
                  <div className="flex-1 flex flex-col justify-between p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeMenu.id}-${activeSubTab}`}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="space-y-6"
                      >
                        <p className="text-[13px] font-medium text-slate-500 tracking-wide">
                          {activeMenu.id === "technologies"
                            ? techStackData.find((g) => g.id === activeSubTab)?.desc
                            : activeCategory.desc ?? activeMenu.desc}
                        </p>

                        {activeMenu.id === "technologies" ? (
                          <TechCardGrid
                            items={
                              techStackData
                                .find((g) => g.id === activeSubTab)
                                ?.items.map((item) => ({
                                  name: item.name,
                                  href: `/technologies/${activeCategory.slug}/${item.slug}`,
                                })) ?? []
                            }
                          />
                        ) : (
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            {activeCategory.items.map((item) => (
                              <Link
                                key={item.slug}
                                href={item.href}
                                className="flex items-center gap-2.5 p-4 rounded-xl border border-gray-100 bg-white hover:border-primary/25 hover:shadow-md hover:text-primary transition-all duration-200 text-[13.5px] font-bold text-slate-700 group"
                              >
                                <span className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                  <ChevronRight size={12} className="text-primary" />
                                </span>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Footer bar */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl px-6 py-3.5 mt-8 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {activeMenu.footerLinks?.map((link, i) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
                        >
                          <span>{link.label}</span>
                          <ArrowRight size={12} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-slate-150"
          >
            <div className="px-6 py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {simpleNavLinks.map((link) => {
                const mega = megaMenus.find((m) => m.label.toLowerCase() === link.name.toLowerCase());
                const hasMega = !!mega;

                return (
                  <div key={link.href} className="border-b border-slate-100 py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-[15px] font-semibold py-2 transition-colors flex-1 ${
                          pathname === link.href || pathname.startsWith(`${link.href}/`)
                            ? "text-primary"
                            : "text-slate-700 hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {hasMega && (
                        <button
                          onClick={() => setExpandedMenu(expandedMenu === link.name ? null : link.name)}
                          className="p-2 text-slate-400 hover:text-primary transition-colors"
                          aria-label={`Toggle ${link.name} submenu`}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              expandedMenu === link.name ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Subcategories (Indented) */}
                    {hasMega && expandedMenu === link.name && (
                      <div className="pl-4 pb-2 space-y-1.5 border-l-2 border-slate-100/80 mt-1 flex flex-col">
                        {mega.categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={cat.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[13.5px] font-bold text-slate-500 hover:text-primary py-1.5 transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center inline-flex justify-center items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-primary rounded-full hover:bg-primary-hover transition-all"
              >
                Partner with Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
