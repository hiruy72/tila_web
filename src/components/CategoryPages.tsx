import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import RichPageLayout from "@/components/RichPageLayout";
import { MegaMenuConfig, findCategoryBySlug, findItemInMenu } from "@/data/navigation";
import { getPageContent } from "@/data/pageContent";
import { getPageImageSet } from "@/data/pageImages";

interface CategoryPageProps {
  menu: MegaMenuConfig;
  categorySlug: string;
  sectionLabel: string;
}

export function generateCategoryMetadata(menu: MegaMenuConfig, categorySlug: string) {
  const category = findCategoryBySlug(menu, categorySlug);
  if (!category) return { title: "Not Found" };
  const content = getPageContent(category.href, {
    title: category.name,
    description: category.desc ?? menu.desc,
  });
  return {
    description: content.description,
  };
}

export function CategoryPage({ menu, categorySlug, sectionLabel }: CategoryPageProps) {
  const category = findCategoryBySlug(menu, categorySlug);
  if (!category) notFound();

  const content = getPageContent(category.href, {
    title: category.name,
    description: category.desc ?? menu.desc,
  });

  const imageSet = getPageImageSet(category.href);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <RichPageLayout
          content={content}
          eyebrow={sectionLabel}
          breadcrumb={[
            { label: sectionLabel, href: menu.href },
            { label: category.name, href: category.href },
          ]}
          items={category.items.map((item) => {
            const itemContent = getPageContent(item.href, {
              title: item.name,
              description: `Learn how Tila Technology delivers ${item.name}.`,
            });
            return {
              name: item.name,
              href: item.href,
              description: itemContent.description,
            };
          })}
          relatedLinks={menu.categories
            .filter((c) => c.slug !== categorySlug)
            .slice(0, 3)
            .map((c) => ({ label: c.name, href: c.href }))}
          imageSet={imageSet}
        />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

interface ItemPageProps {
  menu: MegaMenuConfig;
  categorySlug: string;
  itemSlug: string;
  sectionLabel: string;
}

export function generateItemMetadata(
  menu: MegaMenuConfig,
  categorySlug: string,
  itemSlug: string
) {
  const category = findCategoryBySlug(menu, categorySlug);
  const item = findItemInMenu(menu, categorySlug, itemSlug);
  if (!category || !item) return { title: "Not Found" };
  const content = getPageContent(item.href, {
    title: item.name,
    description: `${item.name} — ${category.name} at Tila Technology PLC.`,
  });
  return {
    description: content.description,
  };
}

export function ItemPage({ menu, categorySlug, itemSlug, sectionLabel }: ItemPageProps) {
  const category = findCategoryBySlug(menu, categorySlug);
  const item = findItemInMenu(menu, categorySlug, itemSlug);
  if (!category || !item) notFound();

  const content = getPageContent(item.href, {
    title: item.name,
    description: `${item.name} — part of our ${category.name} offering.`,
  });

  const imageSet = getPageImageSet(item.href);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <RichPageLayout
          content={content}
          eyebrow={category.name}
          breadcrumb={[
            { label: sectionLabel, href: menu.href },
            { label: category.name, href: category.href },
            { label: item.name, href: item.href },
          ]}
          relatedLinks={category.items
            .filter((i) => i.slug !== itemSlug)
            .slice(0, 4)
            .map((i) => ({ label: i.name, href: i.href }))}
          imageSet={imageSet}
        />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
