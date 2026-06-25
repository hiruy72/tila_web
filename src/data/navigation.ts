import { techStackData } from "./techStack";

export interface NavItem {
  name: string;
  slug: string;
  href: string;
}

export interface NavCategory {
  id: string;
  slug: string;
  name: string;
  href: string;
  desc?: string;
  items: NavItem[];
}

export interface MegaMenuConfig {
  id: string;
  label: string;
  href: string;
  desc: string;
  categories: NavCategory[];
  footerLinks?: { label: string; href: string }[];
}

export const servicesMenu: MegaMenuConfig = {
  id: "services",
  label: "Services",
  href: "/services",
  desc: "End-to-end software engineering, product design, and consulting solutions.",
  categories: [
    {
      id: "web-dev",
      slug: "web-development",
      name: "Web Development",
      href: "/services/web-development",
      items: [
        { name: "Business Websites", slug: "business-websites", href: "/services/web-development/business-websites" },
        { name: "Landing Pages & Portfolios", slug: "landing-pages", href: "/services/web-development/landing-pages" },
        { name: "E-Commerce Engines", slug: "e-commerce", href: "/services/web-development/e-commerce" },
        { name: "Custom CMS Frameworks", slug: "custom-cms", href: "/services/web-development/custom-cms" },
      ],
    },
    {
      id: "app-dev",
      slug: "application-development",
      name: "Application Development",
      href: "/services/application-development",
      items: [
        { name: "Android & iOS Native", slug: "native-apps", href: "/services/application-development/native-apps" },
        { name: "Flutter Cross-Platform", slug: "flutter", href: "/services/application-development/flutter" },
        { name: "Progressive Web Apps", slug: "pwa", href: "/services/application-development/pwa" },
        { name: "Desktop Enterprise Core", slug: "desktop", href: "/services/application-development/desktop" },
      ],
    },
    {
      id: "erp-sys",
      slug: "erp-integrations",
      name: "ERP Integrations",
      href: "/services/erp-integrations",
      items: [
        { name: "School ERP Platforms", slug: "school-erp", href: "/services/erp-integrations/school-erp" },
        { name: "Hospital Clinical Systems", slug: "hospital-systems", href: "/services/erp-integrations/hospital-systems" },
        { name: "Warehouse Inventory Core", slug: "warehouse", href: "/services/erp-integrations/warehouse" },
        { name: "Accounting & Payroll Ledger", slug: "accounting", href: "/services/erp-integrations/accounting" },
      ],
    },
    {
      id: "ai-ml",
      slug: "ai-machine-learning",
      name: "AI & Machine Learning",
      href: "/services/ai-machine-learning",
      items: [
        { name: "Generative AI & LLMs", slug: "generative-ai", href: "/services/ai-machine-learning/generative-ai" },
        { name: "Conversational Chatbots", slug: "chatbots", href: "/services/ai-machine-learning/chatbots" },
        { name: "NLP Document Parsing", slug: "nlp", href: "/services/ai-machine-learning/nlp" },
        { name: "Predictive BI Dashboards", slug: "predictive-bi", href: "/services/ai-machine-learning/predictive-bi" },
      ],
    },
    {
      id: "cyber",
      slug: "cybersecurity-cloud",
      name: "Cybersecurity & Cloud",
      href: "/services/cybersecurity-cloud",
      items: [
        { name: "Security Audits", slug: "security-audits", href: "/services/cybersecurity-cloud/security-audits" },
        { name: "Penetration Testing", slug: "penetration-testing", href: "/services/cybersecurity-cloud/penetration-testing" },
        { name: "CI/CD Deployment", slug: "cicd", href: "/services/cybersecurity-cloud/cicd" },
        { name: "AWS / Docker Setup", slug: "aws-docker", href: "/services/cybersecurity-cloud/aws-docker" },
      ],
    },
  ],
  footerLinks: [
    { label: "How we work with product teams", href: "/about" },
    { label: "Get a Quote", href: "/contact" },
  ],
};

export const technologiesMenu: MegaMenuConfig = {
  id: "technologies",
  label: "Technologies",
  href: "/technologies",
  desc: "Modern, industry-standard tools we use to build scalable digital products.",
  categories: techStackData.map((group) => ({
    id: group.id,
    slug: group.slug,
    name: group.name,
    href: `/technologies/${group.slug}`,
    desc: group.desc,
    items: group.items.map((item) => ({
      name: item.name,
      slug: item.slug,
      href: `/technologies/${group.slug}/${item.slug}`,
    })),
  })),
  footerLinks: [
    { label: "How we work with product teams", href: "/about" },
    { label: "Read More", href: "/technologies" },
  ],
};

export const industriesMenu: MegaMenuConfig = {
  id: "industries",
  label: "Industries",
  href: "/industries",
  desc: "Specialized engineering capacity tailored across core business sectors.",
  categories: [
    {
      id: "healthcare",
      slug: "healthcare-edtech",
      name: "Healthcare & EdTech",
      href: "/industries/healthcare-edtech",
      items: [
        { name: "HIPAA Data Security", slug: "hipaa", href: "/industries/healthcare-edtech/hipaa" },
        { name: "SCORM LMS Engines", slug: "lms", href: "/industries/healthcare-edtech/lms" },
        { name: "Clinical Patient Flows", slug: "patient-flows", href: "/industries/healthcare-edtech/patient-flows" },
      ],
    },
    {
      id: "fintech",
      slug: "fintech-billing",
      name: "Fintech & SaaS Billing",
      href: "/industries/fintech-billing",
      items: [
        { name: "Gateway Integrations", slug: "gateways", href: "/industries/fintech-billing/gateways" },
        { name: "Subscription Billers", slug: "subscriptions", href: "/industries/fintech-billing/subscriptions" },
        { name: "VAT Tax Processors", slug: "vat-tax", href: "/industries/fintech-billing/vat-tax" },
      ],
    },
    {
      id: "commerce",
      slug: "commerce",
      name: "Commerce Product Teams",
      href: "/industries/commerce",
      items: [
        { name: "Headless Retail API", slug: "headless-api", href: "/industries/commerce/headless-api" },
        { name: "Omnichannel Inventory", slug: "inventory", href: "/industries/commerce/inventory" },
        { name: "Custom Checkout Core", slug: "checkout", href: "/industries/commerce/checkout" },
      ],
    },
    {
      id: "ai-data",
      slug: "ai-platforms",
      name: "AI-First Platforms",
      href: "/industries/ai-platforms",
      items: [
        { name: "RAG Knowledge Bases", slug: "rag", href: "/industries/ai-platforms/rag" },
        { name: "ML Operations", slug: "mlops", href: "/industries/ai-platforms/mlops" },
        { name: "Smart OCR Scanners", slug: "ocr", href: "/industries/ai-platforms/ocr" },
      ],
    },
  ],
  footerLinks: [
    { label: "How we work with product teams", href: "/about" },
    { label: "Read More", href: "/industries" },
  ],
};

export const resourcesMenu: MegaMenuConfig = {
  id: "resources",
  label: "Resources",
  href: "/resources",
  desc: "Insights, company information, and ways to connect with our team.",
  categories: [
    {
      id: "company",
      slug: "company",
      name: "Company",
      href: "/resources/company",
      items: [
        { name: "About Us", slug: "about", href: "/about" },
        { name: "Our Team", slug: "team", href: "/team" },
        { name: "Our Process", slug: "process", href: "/resources/process" },
      ],
    },
    {
      id: "solutions",
      slug: "solutions",
      name: "Solutions",
      href: "/solutions",
      items: [
        { name: "School ERP", slug: "school-erp", href: "/solutions/edutech-core" },
        { name: "Hospital ERP", slug: "hospital-erp", href: "/solutions/healthtech-erp" },
        { name: "Inventory Management", slug: "inventory", href: "/solutions/retail-fin" },
        { name: "AI Chatbot", slug: "ai-chatbot", href: "/solutions/saas-ai" },
      ],
    },
    {
      id: "support",
      slug: "support",
      name: "Support",
      href: "/resources/support",
      items: [
        { name: "Contact Us", slug: "contact", href: "/contact" },
        { name: "FAQ", slug: "faq", href: "/resources/faq" },
        { name: "Get a Quote", slug: "quote", href: "/resources/get-a-quote" },
      ],
    },
  ],
  footerLinks: [
    { label: "How we work with product teams", href: "/about" },
    { label: "Partner with Us", href: "/contact" },
  ],
};

export const solutionsMenu: MegaMenuConfig = {
  id: "solutions",
  label: "Solutions",
  href: "/solutions",
  desc: "Deployment-ready software platforms customized for rapid implementation.",
  categories: [
    {
      id: "edu",
      slug: "edutech-core",
      name: "EduTech Core",
      href: "/solutions/edutech-core",
      items: [
        { name: "School ERP", slug: "school-erp", href: "/solutions/edutech-core/school-erp" },
        { name: "LMS Portal", slug: "lms", href: "/solutions/edutech-core/lms" },
        { name: "Parent-Teacher Dashboard", slug: "dashboard", href: "/solutions/edutech-core/dashboard" },
      ],
    },
    {
      id: "health",
      slug: "healthtech-erp",
      name: "HealthTech ERP",
      href: "/solutions/healthtech-erp",
      items: [
        { name: "Hospital Admission Ledger", slug: "admission", href: "/solutions/healthtech-erp/admission" },
        { name: "Pharmacy Inventory Core", slug: "pharmacy", href: "/solutions/healthtech-erp/pharmacy" },
        { name: "Clinic Management", slug: "clinic", href: "/solutions/healthtech-erp/clinic" },
      ],
    },
    {
      id: "retail",
      slug: "retail-fin",
      name: "Retail & Fin",
      href: "/solutions/retail-fin",
      items: [
        { name: "Warehouse Management", slug: "warehouse", href: "/solutions/retail-fin/warehouse" },
        { name: "Point of Sale (POS)", slug: "pos", href: "/solutions/retail-fin/pos" },
        { name: "Accounting Ledger", slug: "accounting", href: "/solutions/retail-fin/accounting" },
      ],
    },
    {
      id: "saas-ai",
      slug: "saas-ai",
      name: "SaaS & AI Bots",
      href: "/solutions/saas-ai",
      items: [
        { name: "Customer Support Ticket", slug: "support-ticket", href: "/solutions/saas-ai/support-ticket" },
        { name: "AI Whatsapp Chatbot", slug: "whatsapp-bot", href: "/solutions/saas-ai/whatsapp-bot" },
        { name: "Multi-Tenant SaaS Scaffold", slug: "multi-tenant", href: "/solutions/saas-ai/multi-tenant" },
      ],
    },
  ],
  footerLinks: [
    { label: "How we work with product teams", href: "/about" },
    { label: "Read More", href: "/solutions" },
  ],
};

export const megaMenus = [servicesMenu, technologiesMenu, industriesMenu, resourcesMenu, solutionsMenu];

export const simpleNavLinks = [
  { name: "Services", href: "/services" },
  { name: "Technologies", href: "/technologies" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function findCategoryBySlug(menu: MegaMenuConfig, categorySlug: string) {
  return menu.categories.find((c) => c.slug === categorySlug);
}

export function findItemInMenu(menu: MegaMenuConfig, categorySlug: string, itemSlug: string) {
  const category = findCategoryBySlug(menu, categorySlug);
  return category?.items.find((i) => i.slug === itemSlug);
}
