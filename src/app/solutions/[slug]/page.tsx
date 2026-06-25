import type { Metadata } from "next";
import { solutionsMenu } from "@/data/navigation";
import { CategoryPage, generateCategoryMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return solutionsMenu.categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateCategoryMetadata(solutionsMenu, slug);
}

export default async function SolutionCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryPage menu={solutionsMenu} categorySlug={slug} sectionLabel="Solutions" />;
}
