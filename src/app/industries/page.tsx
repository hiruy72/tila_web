import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLandingHero from "@/components/SectionLandingHero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { GraduationCap, CreditCard, ShoppingBag, Bot, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  description:
    "We design and build high-performance software systems across key sectors: Healthcare, EdTech, Fintech, Commerce, and AI & Data Products.",
};

const industries = [
  {
    icon: GraduationCap,
    title: "Healthcare & EdTech",
    headline: "Build for regulated, high-compliance environments",
    desc: "We engineer secure School Management Systems, Hospital ERPs, learning portals, and HIPAA-compliant patient platforms where security, compliance, and database integrity are mandatory.",
    features: ["HIPAA & Data Privacy Native", "LMS & Exam Engines", "School/Hospital Integrations"],
    href: "/industries/healthcare-edtech",
  },
  {
    icon: CreditCard,
    title: "Fintech & Billing",
    headline: "Scalable, secure transaction layers and automated billing",
    desc: "Integrate regional payment gateways, multi-currency invoice generators, double-entry bookkeeping ledgers, and subscription billing systems.",
    features: ["PCI-DSS Compliant Systems", "Automated Billing & Payouts", "VAT & Local Tax Configs"],
    href: "/industries/fintech-billing",
  },
  {
    icon: ShoppingBag,
    title: "Commerce",
    headline: "Modern commerce engines scaling beyond basic templates",
    desc: "Custom headless commerce storefronts, multi-vendor marketplaces, product recommendation engines, and stock warehouse tracking apps.",
    features: ["Headless API Integration", "Warehouse Inventory Sync", "Custom Checkout Pipelines"],
    href: "/industries/commerce",
  },
  {
    icon: Bot,
    title: "AI Platforms",
    headline: "Deploy AI solutions directly into existing ecosystems",
    desc: "Build AI-powered chatbots, Retrieval Augmented Generation (RAG) models, automated customer service desks, and analytics prediction modelers.",
    features: ["RAG Knowledge Bases", "NLP Text Analysis", "Biometrics & OCR Core"],
    href: "/industries/ai-platforms",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <SectionLandingHero
          eyebrow="Sectors We Serve"
          title={
            <>
              Engineering Expertise <br />
              <span className="text-primary">Tailored for Your Industry</span>
            </>
          }
          description="We focus on building deep engineering competencies in high-impact industries. See how we design digital solutions tailored for your business domain."
          primaryCta={{ label: "Explore Industries", href: "#industries-grid" }}
          secondaryCta={{ label: "Book a Consultation", href: "/contact" }}
        />

        <Stats />

        <section id="industries-grid" className="py-20 bg-slate-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className="group p-8 rounded-3xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <IndIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-950 mb-2 group-hover:text-primary transition-colors">
                        {ind.title}
                      </h2>
                      <p className="text-[13px] font-bold text-primary uppercase tracking-wider mb-4">{ind.headline}</p>
                      <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-medium">{ind.desc}</p>
                    </div>
                    <div>
                      <div className="border-t border-slate-100 pt-5 space-y-2 mb-5">
                        {ind.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                            <ShieldCheck size={14} className="text-primary" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                        Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
