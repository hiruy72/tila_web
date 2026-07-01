import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLandingHero from "@/components/SectionLandingHero";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  description:
    "Explore Tila Technology's flagship software solutions: School ERP, Hospital ERP, Inventory Management, AI Chatbot, CRM, LMS, and more.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <SectionLandingHero
          eyebrow="Featured Solutions"
          title={
            <>
              Robust Software Platforms <br />
              <span className="text-primary">Ready For Deployment</span>
            </>
          }
          description="We have built and deployed production-ready platforms across education, healthcare, retail, finance, and enterprise. Pick a solution that matches your industry."
          primaryCta={{ label: "Browse Solutions", href: "#solutions-list" }}
          secondaryCta={{ label: "Get a Quote", href: "/resources/get-a-quote" }}
        />
        <Stats />
        <div id="solutions-list">
          <Solutions />
        </div>
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
