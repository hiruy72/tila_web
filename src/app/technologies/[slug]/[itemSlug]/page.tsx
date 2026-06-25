import type { Metadata } from "next";
import { technologiesMenu } from "@/data/navigation";
import { ItemPage, generateItemMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return technologiesMenu.categories.flatMap((c) =>
    c.items.map((item) => ({ slug: c.slug, itemSlug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}): Promise<Metadata> {
  const { slug, itemSlug } = await params;
  return generateItemMetadata(technologiesMenu, slug, itemSlug);
}

export default async function TechnologyItemPage({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}) {
  const { slug, itemSlug } = await params;
  return (
    <ItemPage
      menu={technologiesMenu}
      categorySlug={slug}
      itemSlug={itemSlug}
      sectionLabel="Technologies"
    />
  );
}
