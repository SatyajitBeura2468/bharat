import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export type CollectionItem = {
  title: string;
  description: string;
  href?: string;
  label?: string;
};

export function CollectionPage({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: CollectionItem[];
}) {
  return (
    <main id="main">
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="section">
        <div className="shell index-list">
          {items.map((item, index) => {
            const content = (
              <>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.href ? <ArrowUpRight aria-hidden="true" /> : <span>{item.label ?? "Atlas entry"}</span>}
              </>
            );
            return item.href ? <Link className="index-row" href={item.href} id={item.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")} key={item.title}>{content}</Link> : <article className="index-row" id={item.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")} key={item.title}>{content}</article>;
          })}
        </div>
      </section>
    </main>
  );
}
