import type { PageContent, BenefitItem, ProcessStep, StatItem, FAQItem } from "./index";

const SECTION_PROCESS: Record<string, ProcessStep[]> = {
  services: [
    { step: "01", title: "Discovery Workshop", description: "We map your goals, users, and technical constraints in collaborative sessions with stakeholders." },
    { step: "02", title: "Solution Design", description: "Architecture, wireframes, and a delivery roadmap aligned to your timeline and budget." },
    { step: "03", title: "Agile Development", description: "Iterative sprints with demos, code reviews, and transparent progress tracking." },
    { step: "04", title: "Launch & Support", description: "Deployment, training, documentation, and ongoing maintenance to keep you running." },
  ],
  technologies: [
    { step: "01", title: "Stack Assessment", description: "We evaluate your current systems and recommend the optimal technology mix." },
    { step: "02", title: "Architecture Planning", description: "Scalable architecture blueprints with security, performance, and cost in mind." },
    { step: "03", title: "Implementation", description: "Production-grade integration with best practices, testing, and documentation." },
    { step: "04", title: "Optimization", description: "Performance tuning, monitoring setup, and team knowledge transfer." },
  ],
  industries: [
    { step: "01", title: "Domain Discovery", description: "Deep dive into your industry's regulations, workflows, and competitive landscape." },
    { step: "02", title: "Compliance Design", description: "Security and compliance requirements baked into architecture from day one." },
    { step: "03", title: "Custom Build", description: "Industry-specific features developed with domain experts on our team." },
    { step: "04", title: "Scale & Evolve", description: "Continuous improvement as regulations and market needs change." },
  ],
  solutions: [
    { step: "01", title: "Needs Assessment", description: "Identify which modules fit your organization and what customizations are needed." },
    { step: "02", title: "Configuration", description: "Tailor workflows, branding, roles, and integrations to your operations." },
    { step: "03", title: "Data Migration", description: "Secure transfer of existing records with validation and rollback plans." },
    { step: "04", title: "Go-Live & Training", description: "Staff onboarding, documentation, and dedicated support during launch." },
  ],
  resources: [
    { step: "01", title: "Explore", description: "Browse our resources to understand our capabilities and approach." },
    { step: "02", title: "Connect", description: "Reach out with questions — we respond within one business day." },
    { step: "03", title: "Plan", description: "Collaborative scoping session to define your project requirements." },
    { step: "04", title: "Build", description: "Partner with our team to bring your vision to life." },
  ],
};

const SECTION_STATS: Record<string, StatItem[]> = {
  services: [
    { label: "Projects Delivered", value: 150, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Avg. Delivery Time", value: 8, suffix: " wks" },
    { label: "Engineers on Staff", value: 25, suffix: "+" },
  ],
  technologies: [
    { label: "Tech Stacks Used", value: 40, suffix: "+" },
    { label: "Production Deployments", value: 200, suffix: "+" },
    { label: "Uptime SLA", value: 99, suffix: ".9%" },
    { label: "Code Reviews / Sprint", value: 100, suffix: "%" },
  ],
  industries: [
    { label: "Industries Served", value: 12, suffix: "+" },
    { label: "Compliance Projects", value: 35, suffix: "+" },
    { label: "Enterprise Clients", value: 45, suffix: "+" },
    { label: "Countries Reached", value: 8, suffix: "+" },
  ],
  solutions: [
    { label: "Platforms Deployed", value: 60, suffix: "+" },
    { label: "Users Onboarded", value: 15, suffix: "K+" },
    { label: "Go-Live Success Rate", value: 100, suffix: "%" },
    { label: "Support Response", value: 4, suffix: " hrs" },
  ],
  resources: [
    { label: "Happy Clients", value: 80, suffix: "+" },
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Team Members", value: 25, suffix: "+" },
    { label: "Response Time", value: 24, suffix: " hrs" },
  ],
};

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

function getSection(href: string): string {
  return href.split("/").filter(Boolean)[0] ?? "services";
}

function buildBenefits(content: PageContent): BenefitItem[] {
  if (content.benefits?.length) return content.benefits;

  const templates = [
    (f: string) => ({ title: f, description: `Our team implements ${f.toLowerCase()} with production-grade standards, ensuring reliability from day one.` }),
    (f: string) => ({ title: f, description: `${f} — engineered for scalability, so your platform grows without costly rewrites.` }),
    (f: string) => ({ title: f, description: `We deliver ${f.toLowerCase()} with full documentation and knowledge transfer to your team.` }),
    (f: string) => ({ title: f, description: `${f} backed by our Addis Ababa engineering team with global best practices.` }),
  ];

  return content.features.map((f, i) => templates[i % templates.length](f));
}

function buildLongDescription(content: PageContent, section: string): string {
  if (content.longDescription) return content.longDescription;

  const sectionIntros: Record<string, string> = {
    services: "As a full-service software company based in Addis Ababa, we don't just write code — we partner with you from concept through launch and beyond.",
    technologies: "Our engineers stay current with the latest tools and frameworks, selecting technology based on your project's needs — not trends.",
    industries: "We understand that every industry has unique regulations, workflows, and user expectations. Our domain expertise translates into software that fits.",
    solutions: "Our pre-built platforms accelerate time-to-market while remaining fully customizable to your organization's specific requirements.",
    resources: "Tila Technology is more than a vendor — we're a long-term technology partner committed to your success across Africa and beyond.",
  };

  return `${content.overview} ${sectionIntros[section] ?? sectionIntros.services} With ${content.title}, you get a dedicated team, transparent communication, and outcomes measured against your business goals.`;
}

function buildFaqs(content: PageContent, section: string): FAQItem[] {
  if (content.faqs?.length) return content.faqs;

  const title = content.title;
  return [
    {
      question: `How long does a typical ${title} project take?`,
      answer: `Timeline depends on scope and complexity. Most ${title.toLowerCase()} engagements range from 4–12 weeks for MVPs and 3–6 months for enterprise implementations. We provide a detailed timeline during our discovery phase.`,
    },
    {
      question: `What makes Tila Technology different for ${title}?`,
      answer: `We combine senior engineering talent based in Ethiopia with global standards. For ${title.toLowerCase()}, you get dedicated project management, transparent sprint demos, and post-launch support — not just a handoff.`,
    },
    {
      question: `Do you provide ongoing support after ${title} delivery?`,
      answer: `Yes. We offer maintenance plans, security updates, performance monitoring, and feature enhancements. Most clients continue partnering with us long after the initial ${title.toLowerCase()} launch.`,
    },
    {
      question: `How do we get started with ${title}?`,
      answer: `Book a free consultation through our contact page. We'll discuss your requirements, share relevant case studies from our ${section} work, and provide a tailored proposal within one business week.`,
    },
  ];
}

function buildHighlightQuote(content: PageContent): string {
  if (content.highlightQuote) return content.highlightQuote;
  const quotes = [
    `"Great ${content.title.toLowerCase()} isn't just about technology — it's about solving real business problems with clarity and craft."`,
    `"We believe every organization deserves world-class ${content.title.toLowerCase()}, built right here in Africa for global standards."`,
    `"Your success with ${content.title.toLowerCase()} is our metric. We measure outcomes, not just output."`,
  ];
  return quotes[hashStr(content.title) % quotes.length];
}

export function enrichPageContent(href: string, content: PageContent): PageContent {
  const section = getSection(href);
  const h = hashStr(href);

  const stats = content.stats ?? SECTION_STATS[section]?.map((s, i) => ({
    ...s,
    value: s.value + (h % 5) * (i % 2 === 0 ? 1 : 0),
  }));

  return {
    ...content,
    longDescription: buildLongDescription(content, section),
    benefits: buildBenefits(content),
    processSteps: content.processSteps ?? SECTION_PROCESS[section],
    stats,
    faqs: buildFaqs(content, section),
    highlightQuote: buildHighlightQuote(content),
    deliverables: content.deliverables ?? [
      `Detailed ${content.title} scope document`,
      "Technical architecture & design specs",
      "Production-ready implementation",
      "Testing & quality assurance report",
      "Deployment & launch support",
      "Documentation & team training",
    ],
    useCases: content.useCases ?? [
      `Organizations launching new ${content.title.toLowerCase()} initiatives`,
      "Teams modernizing legacy systems and workflows",
      "Businesses scaling operations across Ethiopia and Africa",
      "Enterprises requiring security and compliance-first delivery",
    ],
  };
}
