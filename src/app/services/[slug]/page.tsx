import type { Metadata } from "next";
import { servicesMenu } from "@/data/navigation";
import { CategoryPage, generateCategoryMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return servicesMenu.categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateCategoryMetadata(servicesMenu, slug);
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryPage menu={servicesMenu} categorySlug={slug} sectionLabel="Services" />;
}
