"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { MobileIndiaSilhouette } from "./mobile-india-silhouette";

const TerrainCanvas = dynamic(() => import("./terrain-canvas"), { ssr: false });

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-fallback" aria-hidden="true" />
      <TerrainCanvas />
      <MobileIndiaSilhouette />
      <div className="coordinate-rail" aria-hidden="true">
        8.4°N — 37.6°N · 68.7°E — 97.25°E
      </div>
      <div className="shell hero-copy">
        <div>
          <p className="hero-brand">
            BHARAT <span lang="hi">भारत</span>
          </p>
          <h1 className="display hero-title" id="hero-title">
            A living atlas of a civilization.
          </h1>
          <p className="hero-support">Explore the land, people, history, ideas and future of India.</p>
          <div className="hero-actions">
            <Link className="button" href="#explore">
              Begin exploring
            </Link>
            <Link className="button secondary" href="/explore">
              Open the map
            </Link>
          </div>
          <p className="hero-disclaimer">Independent educational project</p>
        </div>
      </div>
    </section>
  );
}
