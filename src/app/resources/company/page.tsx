import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import RichPageLayout from "@/components/RichPageLayout";
import { getPageContent } from "@/data/pageContent";
import { ArrowRight, Users, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  description: "Learn about Tila Technology — our mission, team, and delivery process.",
};

const links = [
  { icon: Users, name: "About Us", desc: "Our mission, values, and story from Addis Ababa.", href: "/about" },
  { icon: BookOpen, name: "Our Team", desc: "Meet the engineers and designers building for Africa.", href: "/team" },
  { icon: Layers, name: "Our Process", desc: "How we plan, build, and ship software collaboratively.", href: "/resources/process" },
];

export default function CompanyResourcePage() {
  const content = getPageContent("/resources/company", {
    title: "Company",
    description: "Learn about our mission, meet the team, and understand our process.",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <RichPageLayout
          content={content}
          eyebrow="Resources"
          breadcrumb={[
            { label: "Resources", href: "/resources" },
            { label: "Company", href: "/resources/company" },
          ]}
        />
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">
              Explore Our <span className="text-primary">Company</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary transition-all">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-2">{link.name}</h3>
                    <p className="text-[14px] text-slate-500 mb-4">{link.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary uppercase">
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
