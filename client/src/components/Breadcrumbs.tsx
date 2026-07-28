import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "./JsonLd";
import { siteUrl } from "@/lib/siteConfig";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href ? siteUrl(item.href) : siteUrl("/"),
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-8 flex-wrap" data-testid="breadcrumbs">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronLeft className="w-3 h-3 rtl:rotate-180" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-accent transition-colors font-semibold">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-bold">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
