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

export const resourcesContent: PageContentMap = {
  "/resources/company": c(
    "Company",
    "Built in Ethiopia, Building for Africa",
    "Learn about our mission, meet the team, and understand how we deliver world-class software from Addis Ababa.",
    "Tila Technology PLC — 'Tila' means Umbrella — was founded to protect, unite, and innovate. We bring together senior engineers, designers, and strategists under one roof to deliver complete technology solutions for organizations across Ethiopia and Africa.",
    ["Mission-driven engineering culture", "Transparent agile delivery", "Long-term client partnerships", "Global standards, local expertise"],
    { deliverables: ["Company overview & credentials", "Team profiles & expertise", "Process documentation", "Case studies & references"], useCases: ["Evaluating Tila as a technology partner", "Understanding our delivery approach", "Exploring career opportunities"] }
  ),
  "/resources/support": c(
    "Support",
    "We're Here When You Need Us",
    "Contact our team, browse FAQs, or request a project quote — multiple ways to get the answers you need.",
    "Whether you're exploring a new project or need help with an existing one, our support channels connect you directly with people who can help. We respond to all inquiries within one business day and provide clear, honest guidance — no sales pressure.",
    ["Direct access to senior engineers", "Comprehensive FAQ library", "Free initial consultations", "Dedicated project managers"],
    { useCases: ["New project inquiries", "Existing client support", "Partnership discussions"] }
  ),
  "/resources/get-a-quote": c(
    "Get a Quote",
    "Your Project Starts With a Conversation",
    "Share your requirements and receive a tailored proposal with timeline, scope, and investment estimate.",
    "Every great project starts with understanding. Tell us what you're building, your timeline, and budget range — we'll respond with a clear proposal outlining scope, milestones, team composition, and pricing. No hidden fees, no vague estimates.",
    ["Free discovery consultation", "Detailed scope document", "Transparent pricing breakdown", "Timeline with milestones", "No-obligation proposal"],
    { deliverables: ["Project scope document", "Technical approach summary", "Timeline & milestone plan", "Investment estimate", "Team composition overview"], useCases: ["New product development", "ERP & enterprise systems", "AI & automation projects"] }
  ),
};
