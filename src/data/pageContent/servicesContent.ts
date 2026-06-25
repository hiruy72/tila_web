import type { PageContentMap } from "./index";

function c(
  title: string,
  headline: string,
  description: string,
  overview: string,
  features: string[],
  extras?: { deliverables?: string[]; useCases?: string[] }
): PageContentMap[string] {
  return { title, headline, description, overview, features, ...extras };
}

export const servicesContent: PageContentMap = {
  "/services/web-development": c(
    "Web Development",
    "Websites That Convert and Scale",
    "Custom business websites, landing pages, e-commerce stores, and CMS platforms engineered for speed, SEO, and growth.",
    "From corporate presence sites to full e-commerce engines, we design and build web experiences that reflect your brand and perform under real traffic. Every project includes responsive layouts, accessibility best practices, and analytics-ready architecture.",
    ["Responsive UI across all devices", "SEO-optimized page structure", "CMS or headless content workflows", "Performance tuning and Core Web Vitals focus"],
    { deliverables: ["Wireframes & UI design", "Production-ready frontend", "Admin dashboard or CMS", "Deployment & hosting setup"], useCases: ["SMEs establishing online presence", "Brands launching product landing pages", "Retailers moving sales online"] }
  ),
  "/services/web-development/business-websites": c(
    "Business Websites",
    "Professional Sites for Growing Companies",
    "Corporate and SME websites that establish credibility, capture leads, and communicate your value proposition clearly.",
    "We build polished business websites with structured service pages, contact funnels, and brand-consistent design systems — ideal for companies ready to look as professional online as they are offline.",
    ["Multi-page corporate site architecture", "Lead capture forms & CRM hooks", "Blog and news sections", "Multilingual-ready structure"],
    { useCases: ["Law firms and consultancies", "Manufacturing and trading companies", "NGOs and institutions"] }
  ),
  "/services/web-development/landing-pages": c(
    "Landing Pages & Portfolios",
    "High-Impact Pages That Drive Action",
    "Conversion-focused landing pages and creative portfolios designed to showcase work and turn visitors into customers.",
    "Whether you need a campaign landing page or a portfolio that wins clients, we craft focused experiences with strong CTAs, fast load times, and compelling visual storytelling.",
    ["Single-page conversion funnels", "Portfolio galleries & case studies", "A/B-test-ready layouts", "Analytics and heatmap integration"],
    { useCases: ["Product launches", "Freelancers and agencies", "Event and campaign promotions"] }
  ),
  "/services/web-development/e-commerce": c(
    "E-Commerce Engines",
    "Online Stores Built to Sell",
    "Full-featured e-commerce platforms with catalog management, checkout, payments, and inventory sync.",
    "We implement secure online stores tailored to local payment methods and logistics realities in Ethiopia and East Africa — from product catalogs to order fulfillment workflows.",
    ["Product catalog & variant management", "Cart, checkout & payment gateways", "Order tracking & admin panel", "Inventory and reporting dashboards"],
    { useCases: ["Retail brands going digital", "Wholesale distributors", "Marketplace operators"] }
  ),
  "/services/web-development/custom-cms": c(
    "Custom CMS Frameworks",
    "Content Systems You Fully Control",
    "Tailored content management systems that let your team publish, edit, and govern content without developer dependency.",
    "Off-the-shelf CMS tools don't always fit. We build custom admin panels and content workflows matched to your editorial process, roles, and approval chains.",
    ["Role-based admin access", "Custom content types & fields", "Media library & asset management", "Audit logs and versioning"],
    { useCases: ["Media and publishing teams", "Enterprises with complex content rules", "Platforms with unique data models"] }
  ),

  "/services/application-development": c(
    "Application Development",
    "Apps for Mobile, Web & Desktop",
    "Native mobile apps, cross-platform Flutter builds, PWAs, and enterprise desktop software — all from one engineering team.",
    "We deliver applications that users love and businesses rely on. Our team covers the full stack from UX design through App Store deployment and long-term maintenance.",
    ["iOS, Android & cross-platform builds", "Offline-first & sync strategies", "App Store & Play Store publishing", "Enterprise desktop integrations"],
    { deliverables: ["UX/UI design", "Native or cross-platform app", "Backend API integration", "Store submission support"] }
  ),
  "/services/application-development/native-apps": c(
    "Android & iOS Native",
    "Platform-Native Performance",
    "Swift and Kotlin applications that leverage each platform's full capabilities for speed, security, and native UX patterns.",
    "When performance and platform integration matter most, native development delivers. We build apps that feel at home on iOS and Android with push notifications, biometrics, and device APIs.",
    ["SwiftUI & Jetpack Compose UIs", "Push notifications & deep links", "Biometric authentication", "Background sync & caching"],
    { useCases: ["Fintech and banking apps", "Healthcare patient apps", "Field service tools"] }
  ),
  "/services/application-development/flutter": c(
    "Flutter Cross-Platform",
    "One Codebase, Two Platforms",
    "Beautiful Flutter apps that ship to iOS and Android simultaneously while maintaining near-native performance.",
    "Flutter is our go-to for rapid cross-platform delivery. We use it for customer-facing apps, internal tools, and MVPs that need to reach both mobile ecosystems quickly.",
    ["Shared UI across iOS & Android", "Custom animations & branding", "Firebase & REST integrations", "Fast iteration cycles"],
    { useCases: ["Startup MVPs", "Internal enterprise tools", "Consumer lifestyle apps"] }
  ),
  "/services/application-development/pwa": c(
    "Progressive Web Apps",
    "App-Like Experiences in the Browser",
    "Installable web apps with offline support, push notifications, and app-shell performance — no app store required.",
    "PWAs bridge the gap between websites and native apps. Ideal for markets where app store friction is high or users prefer lightweight install-free experiences.",
    ["Service worker offline caching", "Add-to-home-screen support", "Push notification hooks", "Responsive app-shell architecture"],
    { useCases: ["Field data collection", "Internal staff portals", "Low-bandwidth environments"] }
  ),
  "/services/application-development/desktop": c(
    "Desktop Enterprise Core",
    "Robust Desktop Software for Operations",
    "Windows and cross-platform desktop applications for warehouse, clinic, and back-office workflows that need reliability offline.",
    "Enterprise teams often need desktop-grade software with local data access, hardware integrations, and strict permission controls. We build exactly that.",
    ["Offline-capable desktop clients", "Hardware & peripheral integration", "Role-based access control", "Auto-update deployment pipelines"],
    { useCases: ["Warehouse terminals", "Hospital front desks", "Accounting workstations"] }
  ),

  "/services/erp-integrations": c(
    "ERP Integrations",
    "Unified Systems for Complex Operations",
    "School, hospital, warehouse, and accounting ERP platforms that connect every department on one source of truth.",
    "We specialize in ERP systems for African institutions — handling local compliance, multi-branch operations, and integrations with payment and SMS providers.",
    ["Modular ERP architecture", "Role-based dashboards", "Reporting & export engines", "Third-party API integrations"],
    { deliverables: ["Requirements & process mapping", "Custom ERP modules", "Data migration", "Staff training materials"] }
  ),
  "/services/erp-integrations/school-erp": c(
    "School ERP Platforms",
    "Complete School Management Software",
    "Admissions, grades, attendance, fees, and parent communication — unified in one school administration system.",
    "Our School ERP helps Ethiopian and regional schools digitize operations from enrollment through report cards, with parent portals and fee tracking built in.",
    ["Student & staff records", "Grade book & report cards", "Fee billing & receipts", "Parent-teacher messaging"],
    { useCases: ["Private K-12 schools", "Training academies", "Multi-campus school groups"] }
  ),
  "/services/erp-integrations/hospital-systems": c(
    "Hospital Clinical Systems",
    "Digital Workflows for Healthcare Facilities",
    "Patient registration, appointments, pharmacy, billing, and clinical records in one HIPAA-aware hospital platform.",
    "We build hospital management systems designed for clinics and mid-size hospitals — streamlining patient flow from admission to discharge and pharmacy fulfillment.",
    ["Patient admission & EMR", "Appointment scheduling", "Pharmacy inventory", "Billing & insurance tracking"],
    { useCases: ["Private clinics", "Specialty hospitals", "Diagnostic centers"] }
  ),
  "/services/erp-integrations/warehouse": c(
    "Warehouse Inventory Core",
    "Real-Time Stock Control",
    "Warehouse management with barcode scanning, stock levels, purchase orders, and dispatch tracking.",
    "Keep inventory accurate across locations with dashboards that show what's in stock, what's reserved, and what needs reordering — integrated with sales and accounting.",
    ["Multi-location inventory", "Barcode & SKU tracking", "Purchase order workflows", "Low-stock alerts"],
    { useCases: ["Distributors and wholesalers", "Retail chains", "Import/export businesses"] }
  ),
  "/services/erp-integrations/accounting": c(
    "Accounting & Payroll Ledger",
    "Finance Operations You Can Trust",
    "Double-entry bookkeeping, payroll processing, tax reporting, and financial statements for growing businesses.",
    "Our accounting modules support Ethiopian tax requirements, multi-currency transactions, and payroll cycles — giving finance teams clarity and audit-ready records.",
    ["General ledger & journals", "Payroll & payslip generation", "VAT and tax reports", "Bank reconciliation"],
    { useCases: ["SMEs outgrowing spreadsheets", "Multi-branch retailers", "Service companies with payroll complexity"] }
  ),

  "/services/ai-machine-learning": c(
    "AI & Machine Learning",
    "Intelligent Products That Learn and Adapt",
    "Generative AI, chatbots, NLP pipelines, and predictive analytics integrated into your existing products and workflows.",
    "We help teams move beyond AI hype into production systems — from RAG knowledge bases to customer support bots and document intelligence pipelines.",
    ["LLM & RAG integrations", "Custom chatbot development", "Document NLP & extraction", "Predictive analytics dashboards"],
    { deliverables: ["AI feasibility assessment", "Model integration & fine-tuning", "API & UI delivery", "Monitoring & guardrails"] }
  ),
  "/services/ai-machine-learning/generative-ai": c(
    "Generative AI & LLMs",
    "Production-Grade AI Assistants",
    "OpenAI, Claude, and open-source LLM integrations with retrieval, guardrails, and domain-specific knowledge bases.",
    "We embed generative AI into products safely — with prompt engineering, RAG over your documents, and usage controls that keep outputs reliable.",
    ["RAG over private documents", "Prompt & context engineering", "Token cost optimization", "Safety filters & audit logs"],
    { useCases: ["Internal knowledge assistants", "Customer support copilots", "Content generation tools"] }
  ),
  "/services/ai-machine-learning/chatbots": c(
    "Conversational Chatbots",
    "24/7 Customer Engagement",
    "WhatsApp, web, and in-app chatbots that handle support tickets, FAQs, and lead qualification automatically.",
    "Our chatbots connect to your CRM and knowledge base, escalate to humans when needed, and support Amharic and English conversations.",
    ["WhatsApp Business API integration", "Multi-language support", "CRM & ticket handoff", "Analytics on conversation quality"],
    { useCases: ["E-commerce support", "Banking FAQ automation", "Appointment booking bots"] }
  ),
  "/services/ai-machine-learning/nlp": c(
    "NLP Document Parsing",
    "Extract Structure from Unstructured Text",
    "Automated document classification, entity extraction, and data capture from invoices, forms, and reports.",
    "Stop manual data entry. We build NLP pipelines that read PDFs, scans, and emails — outputting structured data ready for your ERP or database.",
    ["OCR + NLP pipelines", "Custom entity recognition", "Document classification", "Batch & real-time processing"],
    { useCases: ["Invoice processing", "Legal document review", "Medical record digitization"] }
  ),
  "/services/ai-machine-learning/predictive-bi": c(
    "Predictive BI Dashboards",
    "Data-Driven Decisions Ahead of Time",
    "Machine learning models surfaced through executive dashboards that forecast sales, churn, and operational trends.",
    "We connect your data warehouse to ML models and visualize predictions where decision-makers already work — with drill-down and export capabilities.",
    ["Forecasting & trend models", "Interactive BI dashboards", "Automated report scheduling", "Anomaly detection alerts"],
    { useCases: ["Retail demand forecasting", "Subscription churn prediction", "Inventory optimization"] }
  ),

  "/services/cybersecurity-cloud": c(
    "Cybersecurity & Cloud",
    "Secure Infrastructure From Day One",
    "Security audits, penetration testing, CI/CD pipelines, and cloud deployments on AWS, Docker, and Kubernetes.",
    "Security isn't an afterthought. We assess vulnerabilities, harden infrastructure, and automate deployments so your team ships fast without exposing critical assets.",
    ["Security audits & hardening", "Penetration testing reports", "CI/CD pipeline setup", "AWS & container orchestration"],
    { deliverables: ["Vulnerability assessment", "Remediation roadmap", "Infrastructure as code", "Runbooks & monitoring"] }
  ),
  "/services/cybersecurity-cloud/security-audits": c(
    "Security Audits",
    "Know Your Risk Before Attackers Do",
    "Comprehensive reviews of application code, infrastructure, and access policies with prioritized remediation guidance.",
    "Our audits cover OWASP top risks, authentication flows, data encryption, and cloud misconfigurations — delivered as actionable reports your team can implement.",
    ["Code & infrastructure review", "Access control assessment", "Data encryption audit", "Prioritized fix roadmap"],
    { useCases: ["Pre-launch startups", "Regulated industries", "Post-incident reviews"] }
  ),
  "/services/cybersecurity-cloud/penetration-testing": c(
    "Penetration Testing",
    "Simulated Attacks, Real Insights",
    "Ethical hacking engagements that expose exploitable weaknesses before malicious actors find them.",
    "We simulate real-world attack scenarios against your web apps, APIs, and network perimeter — documenting findings with proof-of-concept and fix recommendations.",
    ["Web & API penetration tests", "Social engineering assessments", "Detailed exploit documentation", "Re-test after fixes"],
    { useCases: ["Fintech platforms", "Healthcare portals", "Government-facing systems"] }
  ),
  "/services/cybersecurity-cloud/cicd": c(
    "CI/CD Deployment",
    "Ship Code Safely and Continuously",
    "Automated build, test, and deploy pipelines with staging environments, rollbacks, and quality gates.",
    "We set up GitHub Actions, GitLab CI, or Jenkins workflows so every merge is tested and every release is repeatable — reducing deployment anxiety.",
    ["Automated test pipelines", "Staging & production environments", "Zero-downtime deployments", "Rollback procedures"],
    { useCases: ["Teams releasing weekly", "Microservices architectures", "DevOps maturity upgrades"] }
  ),
  "/services/cybersecurity-cloud/aws-docker": c(
    "AWS / Docker Setup",
    "Cloud-Native Infrastructure",
    "Production AWS environments with Docker containers, load balancing, monitoring, and cost optimization.",
    "From EC2 and RDS to ECS and Lambda, we architect cloud infrastructure that scales with demand while keeping monthly bills predictable.",
    ["AWS architecture design", "Docker containerization", "Load balancing & auto-scaling", "CloudWatch monitoring & alerts"],
    { useCases: ["SaaS product hosting", "ERP cloud migration", "High-traffic web platforms"] }
  ),
};
