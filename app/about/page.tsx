import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "About", description: "About the independent BHARAT living atlas." };

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow="About BHARAT" title="A living atlas of a civilization." description="BHARAT is an independent educational project for exploring India through geography, evidence and editorial storytelling." />
      <section className="section"><div className="shell prose">
        <h2>Ancient depth, modern precision</h2>
        <p>The platform is built as a digital-cultural institution: calm enough to read, ambitious enough to invite exploration, and explicit about where its knowledge comes from.</p>
        <h2 id="language">Language architecture</h2>
        <p>English is the launch language. Hindi and additional Indian-language content are prepared through locale-aware schemas, correct Unicode text, script-specific font metrics and separate editorial review. The interface never fabricates or transliterates a script merely for visual effect.</p>
        <h2>What this release contains</h2>
        <p>A complete atlas shell, interactive India map, historical chronology, cultural and physical-geography collections, innovation and data systems, six structured stories, global search, and fully reviewed demonstration pages for Odisha, Rajasthan and Kerala.</p>
        <Link className="button" href="/methodology">Read the methodology</Link>
      </div></section>
    </main>
  );
}
