import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact Us | Tila Technology PLC",
  description:
    "Get in touch with Tila Technology PLC. Book a free consultation or request a custom quote for software engineering, ERP solutions, website development, AI projects, and cybersecurity.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Page Hero */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
            <p className="text-[13px] font-bold tracking-[0.3em] text-primary uppercase mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Start Your <span className="text-primary">Digital Journey</span>
            </h1>
            <p className="text-[17px] text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to execute your engineering roadmap? Fill out the form below or email us, and our team will get back to you with custom estimates and options.
            </p>
          </div>
        </section>

        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
