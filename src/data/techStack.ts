import {
  Brain,
  Laptop,
  Server,
  Smartphone,
  Database,
  Cloud,
  Settings,
  Layers,
  Zap,
} from "lucide-react";

export interface TechItem {
  name: string;
  slug: string;
}

export interface TechGroup {
  id: string;
  slug: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  items: TechItem[];
}

export const techStackData: TechGroup[] = [
  {
    id: "ai-ml",
    slug: "ai-ml",
    name: "AI & ML",
    desc: "Advanced intelligence solutions using generative AI and machine learning.",
    icon: Brain,
    items: [
      { name: "OpenAI", slug: "openai" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "LangChain", slug: "langchain" },
      { name: "Hugging Face", slug: "hugging-face" },
      { name: "Scikit-learn", slug: "scikit-learn" },
      { name: "NumPy", slug: "numpy" },
      { name: "Pandas", slug: "pandas" },
      { name: "Keras", slug: "keras" },
      { name: "Apache Spark", slug: "apache-spark" },
      { name: "Python", slug: "python" },
      { name: "OpenCV", slug: "opencv" },
    ],
  },
  {
    id: "frontend",
    slug: "frontend",
    name: "Frontend",
    desc: "Creating pixel-perfect, highly responsive interfaces using state-of-the-art styling frameworks.",
    icon: Laptop,
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "Tailwind CSS", slug: "tailwind-css" },
      { name: "Flutter", slug: "flutter" },
      { name: "TypeScript", slug: "typescript" },
      { name: "HTML5", slug: "html5" },
    ],
  },
  {
    id: "backend",
    slug: "backend",
    name: "Backend",
    desc: "Robust backend system design focused on high security, scaling, and database integrity.",
    icon: Server,
    items: [
      { name: "Node.js", slug: "nodejs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Go", slug: "go" },
      { name: "Rust", slug: "rust" },
    ],
  },
  {
    id: "mobile",
    slug: "mobile",
    name: "Mobile",
    desc: "Native and cross-platform mobile applications built for performance and scalability.",
    icon: Smartphone,
    items: [
      { name: "Flutter", slug: "flutter" },
      { name: "React Native", slug: "react-native" },
      { name: "Swift", slug: "swift" },
      { name: "Kotlin", slug: "kotlin" },
    ],
  },
  {
    id: "database",
    slug: "database",
    name: "Database",
    desc: "Relational & NoSQL datastores structured for rapid queries and enterprise replication.",
    icon: Database,
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
    ],
  },
  {
    id: "cloud",
    slug: "cloud",
    name: "Cloud Services",
    desc: "High availability hosting, storage orchestration, and multi-tenant pipeline deployments.",
    icon: Cloud,
    items: [
      { name: "AWS", slug: "aws" },
      { name: "Vercel", slug: "vercel" },
      { name: "Google Cloud", slug: "google-cloud" },
    ],
  },
  {
    id: "devops",
    slug: "devops",
    name: "DevOps",
    desc: "Continuous integration & delivery pipelines built using modern virtualization environments.",
    icon: Settings,
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "GitHub Actions", slug: "github-actions" },
    ],
  },
  {
    id: "frameworks",
    slug: "frameworks",
    name: "Frameworks & Platforms",
    desc: "Battle-tested frameworks and platforms that accelerate delivery without sacrificing quality.",
    icon: Layers,
    items: [
      { name: "Next.js", slug: "nextjs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Django", slug: "django" },
      { name: "FastAPI", slug: "fastapi" },
    ],
  },
  {
    id: "automation",
    slug: "automation",
    name: "Automation & Integration",
    desc: "Workflow automation, API integrations, and intelligent orchestration across your stack.",
    icon: Zap,
    items: [
      { name: "Zapier", slug: "zapier" },
      { name: "n8n", slug: "n8n" },
      { name: "REST APIs", slug: "rest-apis" },
      { name: "Webhooks", slug: "webhooks" },
    ],
  },
];
