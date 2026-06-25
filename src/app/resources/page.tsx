import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLandingHero from "@/components/SectionLandingHero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { ArrowRight, BookOpen, Users, HelpCircle, Layers, Building2, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | Tila Technology PLC",
  description:
    "Company information, solutions overview, FAQs, and ways to connect with Tila Technology PLC.",
};

const resourceHubs = [
  {
    icon: Building2,
    title: "Company",
    desc: "Our mission, team, and the process we follow on every engagement.",
    href: "/resources/company",
  },
  {
    icon: Layers,
    title: "Solutions Overview",
    desc: "Explore deployment-ready platforms for education, healthcare, retail, and AI.",
    href: "/solutions",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "Contact us, browse FAQs, or request a tailored project quote.",
    href: "/resources/support",
  },
];

const resourceCards = [
  { icon: Users, title: "About Us", desc: "Learn about our mission, values, and the team behind Tila Technology.", href: "/about" },
  { icon: BookOpen, title: "Our Team", desc: "Meet the engineers, designers, and strategists building for Africa.", href: "/team" },
  { icon: Layers, title: "Our Process", desc: "Discover how we plan, build, and deliver software from discovery to launch.", href: "/resources/process" },
  { icon: HelpCircle, title: "FAQ", desc: "Answers to common questions about our services, timelines, and engagement models.", href: "/resources/faq" },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <SectionLandingHero
          eyebrow="Resources"
          title={
            <>
              Everything You Need to <span className="text-primary">Know & Explore</span>
            </>
          }
          description="Company insights, process details, solutions overview, and support — all in one place. Built in Ethiopia, serving organizations across Africa."
          primaryCta={{ label: "Explore Resources", href: "#resources-grid" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />

        <Stats />

        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resourceHubs.map((hub) => {
                const Icon = hub.icon;
                return (
                  <Link
                    key={hub.href}
                    href={hub.href}
                    className="group p-8 rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/8 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icon size={26} />
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors">{hub.title}</h2>
                    <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{hub.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider">
                      Explore <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="resources-grid" className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">
              Quick <span className="text-primary">Links</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider">
                      Visit <ArrowRight size={12} />
                    </span>
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
