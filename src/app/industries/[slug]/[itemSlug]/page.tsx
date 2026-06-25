import type { Metadata } from "next";
import { industriesMenu } from "@/data/navigation";
import { ItemPage, generateItemMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return industriesMenu.categories.flatMap((c) =>
    c.items.map((item) => ({ slug: c.slug, itemSlug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}): Promise<Metadata> {
  const { slug, itemSlug } = await params;
  return generateItemMetadata(industriesMenu, slug, itemSlug);
}

export default async function IndustryItemPage({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}) {
  const { slug, itemSlug } = await params;
  return (
    <ItemPage menu={industriesMenu} categorySlug={slug} itemSlug={itemSlug} sectionLabel="Industries" />
  );
}
