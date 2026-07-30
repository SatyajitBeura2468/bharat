import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Indian Space Programme", description: "A source-led overview of India's space institutions and systems." };

export default function SpacePage() {
  return (
    <main id="main">
      <PageHero eyebrow="Innovation · Space" title="From instrument to orbit." description="A programme is more than a mission list. BHARAT reads launch vehicles, satellites, applications, space science and institutions as one evolving system." />
      <section className="section orbit-section">
        <div className="shell orbit-stage">
          <div className="innovation-list">
            {["Launch vehicles", "Earth observation", "Communication", "Navigation", "Space science", "Planetary exploration"].map((item, index) => <div className="index-row" style={{ gridTemplateColumns: "2rem 1fr" }} key={item}><span>0{index + 1}</span><h2>{item}</h2></div>)}
          </div>
          <div className="orbit" aria-hidden="true"><span className="orbit-dot" /></div>
        </div>
      </section>
      <section className="section"><div className="shell prose"><h2>Source boundary</h2><p>This overview paraphrases ISRO’s published profile and vision pages. It does not imply endorsement, real-time mission status or institutional affiliation.</p><Link className="text-link" href="/sources#isro-profile">Inspect sources →</Link></div></section>
    </main>
  );
}
