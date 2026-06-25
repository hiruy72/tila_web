import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Our Process | Tila Technology PLC",
  description: "How Tila Technology plans, builds, and delivers software from discovery to deployment.",
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <PageHero
          eyebrow="Resources"
          title={
            <>
              How We <span className="text-primary">Work With Product Teams</span>
            </>
          }
          description="A transparent, collaborative process designed to move from idea to production with clarity at every step."
          breadcrumb={[
            { label: "Resources", href: "/resources" },
            { label: "Our Process", href: "/resources/process" },
          ]}
        />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
