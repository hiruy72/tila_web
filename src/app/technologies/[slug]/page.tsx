import type { Metadata } from "next";
import { technologiesMenu } from "@/data/navigation";
import { CategoryPage, generateCategoryMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return technologiesMenu.categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateCategoryMetadata(technologiesMenu, slug);
}

export default async function TechnologyCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryPage menu={technologiesMenu} categorySlug={slug} sectionLabel="Technologies" />;
}
