import type { Metadata } from "next";
import { servicesMenu } from "@/data/navigation";
import { ItemPage, generateItemMetadata } from "@/components/CategoryPages";

export async function generateStaticParams() {
  return servicesMenu.categories.flatMap((c) =>
    c.items.map((item) => ({ slug: c.slug, itemSlug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}): Promise<Metadata> {
  const { slug, itemSlug } = await params;
  return generateItemMetadata(servicesMenu, slug, itemSlug);
}

export default async function ServiceItemPage({
  params,
}: {
  params: Promise<{ slug: string; itemSlug: string }>;
}) {
  const { slug, itemSlug } = await params;
  return (
    <ItemPage menu={servicesMenu} categorySlug={slug} itemSlug={itemSlug} sectionLabel="Services" />
  );
}
