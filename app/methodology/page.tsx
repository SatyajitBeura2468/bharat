import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Methodology", description: "How BHARAT researches, reviews and presents knowledge." };

const sections = [
  ["Source before statement", "Every meaningful fact references one or more registered sources. Primary public records are preferred; academic or institutional synthesis is used when the question requires interpretation."],
  ["Dates carry precision", "Historical records label exact dates, approximations, broad ranges and debated interpretation. A visually confident interface must not make uncertain evidence look certain."],
  ["Data carries context", "Every dataset includes a reference year, unit, last update, methodology note and table equivalent. Old data is described as historical, never presented as current."],
  ["Maps are arguments", "Administrative boundaries support navigation, while ecological, linguistic and historical layers retain their own geographies. Boundary provenance and licence are recorded."],
  ["Review is visible", "State and story records carry their review date. Automated validation checks schema shape, source references, routes and links; editorial review remains a human responsibility."],
  ["Independent by design", "BHARAT is an independent educational project. It is not a Government of India service and does not use the State Emblem."],
];

export default function MethodologyPage() {
  return <main id="main"><PageHero eyebrow="Methodology" title="Trust should be visible." description="The design does not hide the uncertainty, age or origin of information. These rules govern every atlas entry." /><section className="section"><div className="shell prose">{sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}</div></section></main>;
}
