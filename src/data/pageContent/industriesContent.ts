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

export const industriesContent: PageContentMap = {
  "/industries/healthcare-edtech": c(
    "Healthcare & EdTech",
    "Software for Regulated Learning & Care Environments",
    "HIPAA-aware platforms, LMS engines, and clinical workflows built for schools, hospitals, and training institutions.",
    "Education and healthcare share a need for compliance, audit trails, and user trust. We engineer systems that protect sensitive data while keeping daily operations smooth for staff, students, and patients.",
    ["HIPAA & data privacy controls", "SCORM-compliant LMS modules", "Role-based clinical access", "Audit logs & compliance reporting"],
    { useCases: ["Private hospitals", "K-12 and university systems", "Medical training academies"] }
  ),
  "/industries/healthcare-edtech/hipaa": c(
    "HIPAA Data Security",
    "Protect Patient & Student Data",
    "Encryption, access controls, and audit infrastructure that meets healthcare data protection standards.",
    "We implement end-to-end encryption, least-privilege access, and comprehensive logging so your platform handles PHI and sensitive records responsibly.",
    ["AES encryption at rest & in transit", "Role-based access control", "Session timeout & MFA", "Immutable audit trails"],
    { useCases: ["Hospital EMR systems", "Telemedicine platforms", "Health insurance portals"] }
  ),
  "/industries/healthcare-edtech/lms": c(
    "SCORM LMS Engines",
    "Learning Platforms That Scale",
    "Course delivery, assessments, progress tracking, and SCORM package support for institutions and corporate training.",
    "Our LMS modules support video lessons, quizzes, certificates, and instructor dashboards — with offline-friendly options for low-connectivity regions.",
    ["SCORM & xAPI compatibility", "Course authoring tools", "Progress & grade tracking", "Certificate generation"],
    { useCases: ["Universities and colleges", "Corporate training programs", "Skills development NGOs"] }
  ),
  "/industries/healthcare-edtech/patient-flows": c(
    "Clinical Patient Flows",
    "Streamline Every Step of Care",
    "Digital admission, triage, consultation, pharmacy, and discharge workflows that reduce wait times and errors.",
    "We map your clinic's patient journey into software — from registration at the front desk through lab orders, prescriptions, and billing.",
    ["Digital admission forms", "Queue & appointment management", "Lab & pharmacy orders", "Discharge summaries"],
    { useCases: ["Outpatient clinics", "Specialty care centers", "Multi-department hospitals"] }
  ),

  "/industries/fintech-billing": c(
    "Fintech & SaaS Billing",
    "Payments and Subscriptions That Scale",
    "Payment gateway integrations, subscription billing, multi-currency support, and VAT-compliant invoicing.",
    "Whether you're launching a fintech product or adding billing to SaaS, we integrate regional payment providers and build ledger systems your finance team can trust.",
    ["Payment gateway integrations", "Subscription & usage billing", "Multi-currency support", "VAT & local tax configs"],
    { useCases: ["SaaS startups", "Marketplace platforms", "Subscription media services"] }
  ),
  "/industries/fintech-billing/gateways": c(
    "Gateway Integrations",
    "Accept Payments Everywhere",
    "Integrations with Chapa, Telebirr, Stripe, and international card processors for seamless checkout.",
    "We handle the complexity of multiple payment methods — webhooks, reconciliation, failed payment retries, and refund flows — so checkout just works.",
    ["Local & international gateways", "Webhook reconciliation", "Failed payment recovery", "Refund & dispute handling"],
    { useCases: ["E-commerce checkouts", "SaaS subscription payments", "Donation platforms"] }
  ),
  "/industries/fintech-billing/subscriptions": c(
    "Subscription Billers",
    "Recurring Revenue Infrastructure",
    "Automated billing cycles, plan upgrades, proration, and dunning management for subscription businesses.",
    "From free trials to annual plans, we build billing engines that handle plan changes, invoice generation, and payment retries without manual intervention.",
    ["Flexible plan tiers", "Proration & upgrades", "Dunning & retry logic", "Customer billing portal"],
    { useCases: ["B2B SaaS products", "Streaming services", "Membership communities"] }
  ),
  "/industries/fintech-billing/vat-tax": c(
    "VAT Tax Processors",
    "Compliant Invoicing for Ethiopia",
    "Automated VAT calculation, tax reporting, and invoice formatting aligned with local regulations.",
    "Finance teams get accurate tax lines on every invoice and export-ready reports for filing — reducing manual spreadsheet work and errors.",
    ["Automatic VAT line items", "Tax report exports", "Multi-rate tax support", "Audit-ready invoice archives"],
    { useCases: ["Retail and wholesale", "Professional services firms", "Import/export traders"] }
  ),

  "/industries/commerce": c(
    "Commerce Product Teams",
    "Modern Retail Engineering",
    "Headless commerce APIs, omnichannel inventory, and custom checkout experiences for ambitious retail brands.",
    "We partner with product teams building the next generation of retail — APIs first, mobile-ready, and integrated with warehouse and POS systems.",
    ["Headless commerce APIs", "Omnichannel inventory sync", "Custom checkout flows", "Product recommendation hooks"],
    { useCases: ["D2C brands", "Multi-vendor marketplaces", "Retail chains going omnichannel"] }
  ),
  "/industries/commerce/headless-api": c(
    "Headless Retail API",
    "Decouple Frontend from Commerce Logic",
    "GraphQL and REST APIs powering web, mobile, and POS frontends from one product catalog and order engine.",
    "Headless architecture lets your team iterate on UX independently while commerce logic stays centralized, tested, and secure.",
    ["Product catalog API", "Cart & checkout API", "Order management endpoints", "Webhook event system"],
    { useCases: ["Brands with multiple storefronts", "Agencies building client stores", "Marketplace operators"] }
  ),
  "/industries/commerce/inventory": c(
    "Omnichannel Inventory",
    "One Stock View Across Channels",
    "Real-time inventory sync between online stores, warehouses, and physical POS locations.",
    "Overselling and stockouts hurt revenue. We unify inventory counts so every channel reflects accurate availability instantly.",
    ["Multi-channel stock sync", "Reserved inventory logic", "Transfer between locations", "Low-stock notifications"],
    { useCases: ["Retail chains", "Click-and-collect operations", "Franchise networks"] }
  ),
  "/industries/commerce/checkout": c(
    "Custom Checkout Core",
    "Checkout Experiences That Convert",
    "Tailored checkout flows with upsells, local payments, address validation, and abandoned cart recovery.",
    "Generic checkout templates leave money on the table. We optimize every step — from shipping options to payment method selection — for your market.",
    ["Multi-step & one-page checkout", "Local payment methods", "Abandoned cart emails", "Order confirmation workflows"],
    { useCases: ["High-volume e-commerce", "B2B order portals", "Subscription box services"] }
  ),

  "/industries/ai-platforms": c(
    "AI-First Platforms",
    "Products Built Around Intelligence",
    "RAG knowledge bases, MLOps pipelines, and smart OCR systems embedded at the core of your platform.",
    "AI-first products need more than a chatbot bolt-on. We architect systems where models, data pipelines, and user experiences work together from the ground up.",
    ["RAG knowledge retrieval", "Model deployment & monitoring", "OCR & document intelligence", "Feedback loops for model improvement"],
    { useCases: ["Legal tech platforms", "Customer support suites", "Document management systems"] }
  ),
  "/industries/ai-platforms/rag": c(
    "RAG Knowledge Bases",
    "AI That Knows Your Documents",
    "Retrieval-augmented generation over private PDFs, wikis, and databases for accurate, cited answers.",
    "Your team uploads documents; users ask questions in natural language. RAG ensures answers come from your approved content, not hallucinations.",
    ["Document ingestion pipelines", "Vector search & embeddings", "Cited answer generation", "Access-controlled knowledge sets"],
    { useCases: ["Internal help desks", "Legal research tools", "Technical documentation assistants"] }
  ),
  "/industries/ai-platforms/mlops": c(
    "ML Operations",
    "Models in Production, Not Notebooks",
    "Training pipelines, model versioning, A/B testing, and monitoring for machine learning at scale.",
    "We take models from experiment to production with reproducible pipelines, automated retraining triggers, and drift detection.",
    ["Model training pipelines", "Version control for models", "A/B testing infrastructure", "Performance drift alerts"],
    { useCases: ["Recommendation engines", "Fraud detection systems", "Demand forecasting platforms"] }
  ),
  "/industries/ai-platforms/ocr": c(
    "Smart OCR Scanners",
    "Turn Paper and Scans into Data",
    "Intelligent OCR that reads IDs, invoices, forms, and handwritten fields into structured database records.",
    "Combine OCR with validation rules and human review queues for high-accuracy digitization of paper-heavy workflows.",
    ["Multi-language OCR support", "Field validation rules", "Human review queues", "Batch processing at scale"],
    { useCases: ["Bank KYC onboarding", "Insurance claim processing", "Government form digitization"] }
  ),
};
