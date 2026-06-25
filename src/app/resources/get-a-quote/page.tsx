import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import RichPageLayout from "@/components/RichPageLayout";
import { getPageContent } from "@/data/pageContent";

export const metadata: Metadata = {
  title: "Get a Quote | Tila Technology PLC",
  description: "Request a tailored project proposal from Tila Technology PLC.",
};

export default function GetAQuotePage() {
  const content = getPageContent("/resources/get-a-quote", {
    title: "Get a Quote",
    description: "Share your requirements and receive a tailored proposal.",
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
            { label: "Get a Quote", href: "/resources/get-a-quote" },
          ]}
          ctaHref="/contact"
          ctaLabel="Start Your Project"
        />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
