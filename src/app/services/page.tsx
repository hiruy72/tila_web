import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLandingHero from "@/components/SectionLandingHero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  description:
    "Tila Technology PLC offers website development, mobile apps, ERP systems, AI & ML, cybersecurity, cloud & DevOps, and SaaS development services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <SectionLandingHero
          eyebrow="What We Offer"
          title={
            <>
              Complete Technology <br />
              <span className="text-primary">Solutions Under One Roof</span>
            </>
          }
          description="From custom software to enterprise systems, AI, cybersecurity, and cloud platforms — we deliver end-to-end technology solutions that scale with your business."
          primaryCta={{ label: "Explore Services", href: "#services-list" }}
          secondaryCta={{ label: "Book a Free Consultation", href: "/contact" }}
        />
        <Stats />
        <div id="services-list">
          <Services />
        </div>
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
