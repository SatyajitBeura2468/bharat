import type { Metadata } from "next";

import { sources } from "@/content/sources";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Sources", description: "The BHARAT source and attribution registry." };

export default function SourcesPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Evidence registry" title="Every claim begins somewhere." description="A stable registry keeps source metadata, review dates and licences out of scattered content files. External links open the publisher’s record." />
      <section className="section">
        <div className="shell">
          {sources.map((source) => (
            <article className="source-entry" id={source.id} key={source.id}>
              <p className="eyebrow">{source.sourceType}</p>
              <h2><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></h2>
              <dl>
                <div><dt>Publisher</dt><dd>{source.publisher}</dd></div>
                <div><dt>Accessed</dt><dd>{source.accessedAt}</dd></div>
                <div><dt>Reviewed</dt><dd>{source.reviewedAt}</dd></div>
                {source.license ? <div><dt>Licence</dt><dd>{source.license}</dd></div> : null}
              </dl>
              {source.note ? <p>{source.note}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
