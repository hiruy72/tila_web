import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLandingHero from "@/components/SectionLandingHero";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Technologies | Tila Technology PLC",
  description:
    "Explore the modern technology stack Tila Technology uses — AI & ML, Frontend, Backend, Mobile, Database, Cloud, DevOps, and more.",
};

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <SectionLandingHero
          eyebrow="Our Technology Stack"
          title={
            <>
              Built With Modern, <span className="text-primary">Industry-Standard</span> Technologies
            </>
          }
          description="From generative AI to cloud-native infrastructure, we use proven tools and frameworks to deliver scalable, maintainable software for organizations across Africa."
          primaryCta={{ label: "View Tech Stack", href: "#tech-stack" }}
          secondaryCta={{ label: "Partner with Us", href: "/contact" }}
        />
        <Stats />
        <div id="tech-stack">
          <TechStack standalone />
        </div>
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
