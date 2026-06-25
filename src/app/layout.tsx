import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tila Technology PLC | Software Development Company in Ethiopia",
  description:
    "Tila Technology PLC delivers custom websites, mobile apps, ERP systems, SaaS platforms, AI-powered solutions, cybersecurity, and cloud applications for businesses in Ethiopia and beyond.",
  keywords: [
    "Tila Technology",
    "Software Development Ethiopia",
    "ERP Systems Addis Ababa",
    "AI Solutions Ethiopia",
    "Web Development Addis Ababa",
    "Mobile App Development Ethiopia",
    "Cybersecurity Ethiopia",
  ],
  authors: [{ name: "Tila Technology PLC" }],
  openGraph: {
    title: "Tila Technology PLC | Software Development Company in Ethiopia",
    description:
      "Premium software development company in Ethiopia building secure, scalable, and intelligent applications.",
    url: "https://tilatechnology.com",
    siteName: "Tila Technology PLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tila Technology PLC | Software Development Company in Ethiopia",
    description:
      "Premium software development company in Ethiopia building secure, scalable, and intelligent applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tila Technology PLC",
    alternateName: "Tila Technologies",
    url: "https://tilatechnology.com",
    logo: "https://tilatechnology.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+251939776522",
      contactType: "customer service",
      email: "tilatechnology21@gmail.com",
      areaServed: "ET",
      availableLanguage: ["English", "Amharic"],
    },
    sameAs: ["https://www.linkedin.com/company/135764096"],
  };

  return (
    <html lang="en" className={`${jakarta.className} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
