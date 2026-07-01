import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import RichPageLayout from "@/components/RichPageLayout";
import { getPageContent } from "@/data/pageContent";
import { ArrowRight, Mail, HelpCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  description: "Contact Tila Technology, browse FAQs, or request a project quote.",
};

const links = [
  { icon: Mail, name: "Contact Us", desc: "Reach our team directly for project inquiries and support.", href: "/contact" },
  { icon: HelpCircle, name: "FAQ", desc: "Answers to common questions about services and timelines.", href: "/resources/faq" },
  { icon: FileText, name: "Get a Quote", desc: "Share your project details and receive a tailored proposal.", href: "/resources/get-a-quote" },
];

export default function SupportResourcePage() {
  const content = getPageContent("/resources/support", {
    description: "Contact our team, browse FAQs, or request a project quote.",
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
            { label: "Support", href: "/resources/support" },
          ]}
          ctaHref="/resources/get-a-quote"
          ctaLabel="Get a Quote"
        />
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">
              How Can We <span className="text-primary">Help?</span>
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
                      Go <ArrowRight size={12} />
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
