import type { Metadata } from "next";
import { solutionsMenu } from "@/data/navigation";
import { ItemPage, generateItemMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return solutionsMenu.categories.flatMap((c) =>
    c.items.map((item) => ({ slug: c.slug, itemSlug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}): Promise<Metadata> {
  const { slug, itemSlug } = await params;
  return generateItemMetadata(solutionsMenu, slug, itemSlug);
}

export default async function SolutionItemPage({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}) {
  const { slug, itemSlug } = await params;
  return (
    <ItemPage menu={solutionsMenu} categorySlug={slug} itemSlug={itemSlug} sectionLabel="Solutions" />
  );
}
