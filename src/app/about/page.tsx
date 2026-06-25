import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Us | Tila Technology PLC",
  description:
    "Learn about Tila Technology PLC — our mission, vision, core values, and why leading organizations in Ethiopia choose us as their technology partner.",
};

export default function AboutPage() {
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
              Who We Are
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Built in Ethiopia,<br />
              <span className="text-primary">Building for Africa</span>
            </h1>
            <p className="text-[17px] text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Tila Technology PLC is a modern software company based in Addis Ababa, combining
              engineering excellence, creativity, and global best practices to deliver technology
              that creates lasting impact.
            </p>
          </div>
        </section>

        <Stats />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
