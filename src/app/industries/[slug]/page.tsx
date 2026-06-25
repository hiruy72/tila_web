import type { Metadata } from "next";
import { industriesMenu } from "@/data/navigation";
import { CategoryPage, generateCategoryMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return industriesMenu.categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateCategoryMetadata(industriesMenu, slug);
}

export default async function IndustryCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryPage menu={industriesMenu} categorySlug={slug} sectionLabel="Industries" />;
}
