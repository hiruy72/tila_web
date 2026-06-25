export interface BenefitItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageContent {
  title: string;
  headline: string;
  description: string;
  overview: string;
  longDescription?: string;
  features: string[];
  deliverables?: string[];
  useCases?: string[];
  benefits?: BenefitItem[];
  processSteps?: ProcessStep[];
  stats?: StatItem[];
  faqs?: FAQItem[];
  highlightQuote?: string;
}

export type PageContentMap = Record<string, PageContent>;

import { enrichPageContent } from "./enrich";
import { servicesContent } from "./servicesContent";
import { technologiesContent } from "./technologiesContent";
import { industriesContent } from "./industriesContent";
import { solutionsContent } from "./solutionsContent";
import { resourcesContent } from "./resourcesContent";

export const allPageContent: PageContentMap = {
  ...servicesContent,
  ...technologiesContent,
  ...industriesContent,
  ...solutionsContent,
  ...resourcesContent,
};

export function getPageContent(
  href: string,
  fallback: { title: string; description: string }
): PageContent {
  const base: PageContent = allPageContent[href] ?? {
    title: fallback.title,
    headline: `Expert ${fallback.title} Solutions`,
    description: fallback.description,
    overview: `Tila Technology PLC delivers production-grade ${fallback.title.toLowerCase()} for organizations across Ethiopia and Africa. Our engineers combine domain expertise with modern tooling to ship reliable, scalable outcomes that drive measurable business impact.`,
    features: [
      "Discovery workshops aligned to your business goals",
      "Senior engineers with 5+ years of product experience",
      "Security, performance, and maintainability built in",
      "Agile delivery with transparent sprint demos",
      "Post-launch support and iterative improvements",
      "Documentation and knowledge transfer included",
    ],
  };

  return enrichPageContent(href, base);
}
