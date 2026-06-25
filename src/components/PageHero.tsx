import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { PageContent } from "@/data/pageContent";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  headline?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ eyebrow, title, description, headline, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-white py-20 lg:py-24 overflow-hidden border-b border-slate-100">
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-slate-400 mb-6">
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={`${crumb.href}-${i}`}>
                {i > 0 && <span>/</span>}
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">{eyebrow}</p>
          {headline && (
            <p className="text-[15px] font-bold text-slate-400 uppercase tracking-wider mb-3">{headline}</p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
            {title}
          </h1>
          <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{description}</p>
        </div>
      </div>
    </section>
  );
}

interface UniquePageProps {
  content: PageContent;
  breadcrumb: { label: string; href: string }[];
  eyebrow: string;
  items?: { name: string; href: string; description?: string }[];
  relatedLinks?: { label: string; href: string }[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function UniquePageLayout({
  content,
  breadcrumb,
  eyebrow,
  items,
  relatedLinks,
  ctaHref = "/contact",
  ctaLabel = "Partner with Us",
}: UniquePageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        headline={content.headline}
        title={content.title}
        description={content.description}
        breadcrumb={breadcrumb}
      />

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 space-y-14">
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Overview</h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">{content.overview}</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Key Capabilities</h3>
              <ul className="space-y-3">
                {content.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features grid */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">What We Deliver</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.features.map((feature) => (
                <div
                  key={feature}
                  className="p-5 rounded-2xl border border-gray-200 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 size={18} className="text-primary mb-3" />
                  <p className="text-[14px] font-bold text-slate-800 leading-snug">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & use cases */}
          {(content.deliverables || content.useCases) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.deliverables && (
                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                  <h2 className="text-xl font-extrabold text-slate-900 mb-5">Deliverables</h2>
                  <ul className="space-y-3">
                    {content.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-[14px] font-semibold text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {content.useCases && (
                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                  <h2 className="text-xl font-extrabold text-slate-900 mb-5">Ideal For</h2>
                  <ul className="space-y-3">
                    {content.useCases.map((u) => (
                      <li key={u} className="flex items-center gap-2.5 text-[14px] font-semibold text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Sub-items (category pages) */}
          {items && items.length > 0 && (
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Explore Further</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col gap-3 p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-[16px] font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                    {item.description && (
                      <p className="text-[14px] text-slate-500 leading-relaxed">{item.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related links */}
          {relatedLinks && relatedLinks.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Related</h2>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {link.label}
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-2">Ready to build with Tila?</h2>
              <p className="text-slate-500 text-[15px] font-medium">
                Tell us about your project and we&apos;ll respond within one business day.
              </p>
            </div>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-hover transition-all shrink-0"
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Keep legacy export for any remaining usage
export { UniquePageLayout as DetailPageContent };
