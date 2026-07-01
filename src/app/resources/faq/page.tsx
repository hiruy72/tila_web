import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  description: "Frequently asked questions about Tila Technology services, timelines, and engagement.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <PageHero
          eyebrow="Resources"
          title={
            <>
              Frequently Asked <span className="text-primary">Questions</span>
            </>
          }
          description="Quick answers about how we work, what we build, and how to get started with Tila Technology."
          breadcrumb={[
            { label: "Resources", href: "/resources" },
            { label: "FAQ", href: "/resources/faq" },
          ]}
        />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
