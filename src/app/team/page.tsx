import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Our Team | Tila Technology PLC",
  description:
    "Meet the founding team behind Tila Technology PLC — visionary leaders driving innovation in software, AI, and digital transformation from Addis Ababa.",
};

export default function TeamPage() {
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
              Leadership
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Meet Our <span className="text-primary">Founding Team</span>
            </h1>
            <p className="text-[17px] text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Four co-founders united by a shared mission — to build technology that empowers
              organizations and transforms lives across Ethiopia and Africa.
            </p>
          </div>
        </section>

        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
