"use client";

import { useEffect, useState } from "react";

type BoundaryFeature = {
  properties: { shapeISO: string };
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
};

function ringPath(ring: number[][]) {
  return (
    ring
      .map(([longitude = 78, latitude = 22], index) => {
        const x = 18 + ((longitude - 68.05) / (97.45 - 68.05)) * 614;
        const y = 18 + ((37.1 - latitude) / (37.1 - 6.7)) * 614;
        return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ") + " Z"
  );
}

function featurePath(feature: BoundaryFeature) {
  const polygons =
    feature.geometry.type === "Polygon"
      ? [feature.geometry.coordinates as number[][][]]
      : (feature.geometry.coordinates as number[][][][]);

  return polygons.map((polygon) => ringPath(polygon[0] ?? [])).join(" ");
}

export function MobileIndiaSilhouette() {
  const [boundaries, setBoundaries] = useState<BoundaryFeature[]>([]);

  useEffect(() => {
    fetch("/data/india-adm1.geojson")
      .then((response) => response.json())
      .then((data: { features: BoundaryFeature[] }) => setBoundaries(data.features))
      .catch(() => setBoundaries([]));
  }, []);

  return (
    <svg className="hero-mobile-map" viewBox="0 0 650 650" aria-hidden="true">
      <defs>
        <filter id="hero-map-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#hero-map-glow)">
        {boundaries.map((feature) => (
          <path d={featurePath(feature)} key={feature.properties.shapeISO} />
        ))}
      </g>
    </svg>
  );
}
