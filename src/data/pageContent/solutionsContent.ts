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

export const solutionsContent: PageContentMap = {
  "/solutions/edutech-core": c(
    "EduTech Core",
    "Education Platforms Ready to Deploy",
    "School ERP, LMS portals, and parent-teacher dashboards — pre-built and customizable for your institution.",
    "EduTech Core is our education product suite. Deploy faster with proven modules for admissions, grading, fees, and learning management — then customize to your school's unique processes.",
    ["School ERP administration", "LMS course delivery", "Parent-teacher portal", "Fee & attendance tracking"],
    { deliverables: ["Platform deployment", "Data migration", "Staff training", "Ongoing support SLA"] }
  ),
  "/solutions/edutech-core/school-erp": c(
    "School ERP",
    "Run Your School on One System",
    "Student records, staff management, timetables, exams, and fees — unified for administrators and teachers.",
    "Replace spreadsheets and paper registers with a centralized system that gives principals real-time visibility into every class, fee balance, and attendance record.",
    ["Student enrollment & records", "Timetable & class scheduling", "Exam & grade management", "Fee collection & receipts"],
    { useCases: ["Private schools", "International schools", "Vocational training centers"] }
  ),
  "/solutions/edutech-core/lms": c(
    "LMS Portal",
    "Deliver Courses Online and Offline",
    "Video lessons, assignments, quizzes, and progress dashboards for students and instructors.",
    "Teachers upload content once; students access it anywhere. Built-in analytics show who's progressing and who needs support.",
    ["Video & document lessons", "Assignment submission", "Automated quiz grading", "Student progress analytics"],
    { useCases: ["Blended learning programs", "Corporate training", "Exam preparation courses"] }
  ),
  "/solutions/edutech-core/dashboard": c(
    "Parent-Teacher Dashboard",
    "Keep Families Connected to Learning",
    "Parents view grades, attendance, and announcements; teachers communicate directly with guardians.",
    "Transparency builds trust. Our dashboard gives parents instant access to their child's academic progress and school announcements.",
    ["Grade & attendance views", "Direct messaging", "School announcements", "Fee payment status"],
    { useCases: ["K-12 schools with active parent communities", "Boarding schools", "After-school programs"] }
  ),

  "/solutions/healthtech-erp": c(
    "HealthTech ERP",
    "Hospital Operations Digitized",
    "Admission, pharmacy, clinic management, and billing modules designed for healthcare facilities.",
    "HealthTech ERP brings order to hospital workflows — reducing patient wait times, preventing prescription errors, and giving administrators financial clarity.",
    ["Patient admission system", "Pharmacy inventory", "Clinic scheduling", "Billing & insurance"],
    { deliverables: ["Module configuration", "Staff onboarding", "Integration with labs", "Compliance documentation"] }
  ),
  "/solutions/healthtech-erp/admission": c(
    "Hospital Admission Ledger",
    "Fast, Accurate Patient Registration",
    "Digital intake forms, insurance verification, bed assignment, and admission history in one workflow.",
    "Front desk staff register patients in minutes with searchable records, duplicate detection, and automatic ID generation.",
    ["Digital intake forms", "Insurance & ID capture", "Bed & ward assignment", "Admission history search"],
    { useCases: ["General hospitals", "Specialty clinics", "Emergency departments"] }
  ),
  "/solutions/healthtech-erp/pharmacy": c(
    "Pharmacy Inventory Core",
    "Medication Stock Under Control",
    "Prescription fulfillment, expiry tracking, supplier orders, and dispensing logs for hospital pharmacies.",
    "Pharmacists see real-time stock levels, get alerts before medicines expire, and track every dispensed item for audit compliance.",
    ["Prescription queue management", "Expiry date tracking", "Supplier purchase orders", "Dispensing audit logs"],
    { useCases: ["Hospital pharmacies", "Clinic dispensaries", "Multi-location pharmacy chains"] }
  ),
  "/solutions/healthtech-erp/clinic": c(
    "Clinic Management",
    "Outpatient Care, Organized",
    "Appointment booking, consultation notes, lab orders, and follow-up scheduling for outpatient clinics.",
    "Doctors focus on patients while the system handles scheduling, medical notes, and referral tracking seamlessly.",
    ["Online appointment booking", "Consultation note templates", "Lab & imaging orders", "Follow-up reminders"],
    { useCases: ["Family clinics", "Dental practices", "Specialist outpatient centers"] }
  ),

  "/solutions/retail-fin": c(
    "Retail & Fin",
    "Commerce and Finance Combined",
    "Warehouse management, POS systems, and accounting ledgers integrated for retail and distribution businesses.",
    "Retail & Fin connects your sales floor to your back office — every transaction updates inventory and books automatically.",
    ["Warehouse management", "Point of sale terminals", "Accounting ledger sync", "Sales & inventory reports"],
    { useCases: ["Retail chains", "Wholesale distributors", "Franchise operations"] }
  ),
  "/solutions/retail-fin/warehouse": c(
    "Warehouse Management",
    "Know What's In Stock, Everywhere",
    "Receiving, picking, packing, and dispatch workflows with barcode support and multi-location tracking.",
    "Warehouse staff scan items in and out; managers see live stock levels and fulfillment performance on dashboards.",
    ["Barcode receiving & dispatch", "Pick-list generation", "Multi-warehouse views", "Stock movement history"],
    { useCases: ["Distribution centers", "E-commerce fulfillment", "Import warehouses"] }
  ),
  "/solutions/retail-fin/pos": c(
    "Point of Sale (POS)",
    "Fast Checkout, Accurate Records",
    "Touch-friendly POS for retail counters with receipt printing, discounts, and end-of-day reconciliation.",
    "Cashiers process sales quickly while every transaction syncs to inventory and accounting — no end-of-day spreadsheet reconciliation.",
    ["Touch-screen checkout UI", "Receipt & invoice printing", "Discount & promotion rules", "Daily sales reconciliation"],
    { useCases: ["Supermarkets", "Electronics stores", "Restaurant chains"] }
  ),
  "/solutions/retail-fin/accounting": c(
    "Accounting Ledger",
    "Books That Balance Automatically",
    "Sales, purchases, expenses, and payroll flow into a double-entry ledger with financial statement exports.",
    "Accountants get journal entries generated from daily operations — with trial balance, P&L, and balance sheet ready on demand.",
    ["Auto journal from sales & purchases", "Expense categorization", "Trial balance & financials", "Tax report exports"],
    { useCases: ["Retail businesses", "Trading companies", "Multi-branch operations"] }
  ),

  "/solutions/saas-ai": c(
    "SaaS & AI Bots",
    "Intelligent Platforms Out of the Box",
    "Customer support ticketing, WhatsApp AI chatbots, and multi-tenant SaaS scaffolds ready to white-label.",
    "Launch faster with pre-built SaaS foundations and AI-powered support — customize branding, workflows, and integrations for your market.",
    ["Support ticket system", "WhatsApp AI chatbot", "Multi-tenant architecture", "Admin & analytics dashboards"],
    { deliverables: ["White-label deployment", "Bot training on your FAQs", "Tenant provisioning", "API documentation"] }
  ),
  "/solutions/saas-ai/support-ticket": c(
    "Customer Support Ticket",
    "Organized Support at Scale",
    "Ticket queues, SLA tracking, agent assignments, and customer satisfaction surveys in one helpdesk.",
    "Support teams manage every inquiry from email, web, and chat in a unified inbox with priority rules and escalation paths.",
    ["Multi-channel ticket inbox", "SLA & priority rules", "Agent performance metrics", "CSAT survey automation"],
    { useCases: ["SaaS companies", "Telecom providers", "E-commerce support teams"] }
  ),
  "/solutions/saas-ai/whatsapp-bot": c(
    "AI Whatsapp Chatbot",
    "Support Customers on WhatsApp",
    "AI-powered WhatsApp bot for FAQs, order tracking, appointment booking, and human handoff.",
    "Meet customers where they are. Our WhatsApp bot handles common queries 24/7 and escalates complex issues to your team with full context.",
    ["WhatsApp Business API setup", "Natural language FAQ handling", "Order & appointment lookups", "Seamless agent handoff"],
    { useCases: ["E-commerce order support", "Clinic appointment booking", "Banking FAQ automation"] }
  ),
  "/solutions/saas-ai/multi-tenant": c(
    "Multi-Tenant SaaS Scaffold",
    "Launch Your SaaS Product Faster",
    "Pre-built tenant isolation, billing, admin panels, and API foundations for B2B SaaS products.",
    "Skip months of boilerplate. Our scaffold includes authentication, tenant provisioning, subscription billing hooks, and admin dashboards.",
    ["Tenant isolation & data separation", "Subscription billing integration", "Super-admin & tenant admin UIs", "REST API foundation"],
    { useCases: ["B2B SaaS startups", "White-label platform providers", "Vertical SaaS products"] }
  ),
};
