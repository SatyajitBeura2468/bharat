"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { states } from "@/content/states";

type MapLibre = typeof import("maplibre-gl");
type BoundaryFeature = {
  properties: { shapeISO: string; shapeName: string };
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
};

const layers = ["Geography", "Rivers", "Languages", "Heritage", "Nature", "Data"];
const initialState = states[0]!;

function ringPath(ring: number[][]) {
  return ring
    .map(([longitude = 78, latitude = 22], index) => {
      const x = 18 + ((longitude - 68.05) / (97.45 - 68.05)) * 614;
      const y = 18 + ((37.1 - latitude) / (37.1 - 6.7)) * 614;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ") + " Z";
}

function featurePath(feature: BoundaryFeature) {
  const polygons =
    feature.geometry.type === "Polygon"
      ? [feature.geometry.coordinates as number[][][]]
      : (feature.geometry.coordinates as number[][][][]);
  return polygons.map((polygon) => ringPath(polygon[0] ?? [])).join(" ");
}

export default function AtlasMap() {
  const mapRoot = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("maplibre-gl").Map | null>(null);
  const [selectedSlug, setSelectedSlug] = useState("odisha");
  const [activeLayer, setActiveLayer] = useState("Geography");
  const [filter, setFilter] = useState("");
  const [boundaries, setBoundaries] = useState<BoundaryFeature[]>([]);
  const selected = states.find((state) => state.slug === selectedSlug) ?? states[0]!;
  const visibleStates = useMemo(
    () => states.filter((state) => `${state.name} ${state.localName} ${state.capital}`.toLowerCase().includes(filter.toLowerCase())),
    [filter],
  );

  useEffect(() => {
    let cancelled = false;
    let maplibre: MapLibre;

    async function start() {
      maplibre = await import("maplibre-gl");
      if (cancelled || !mapRoot.current || mapRef.current) return;
      const map = new maplibre.Map({
        container: mapRoot.current,
        style: {
          version: 8,
          sources: {},
          layers: [{ id: "background", type: "background", paint: { "background-color": "#091722" } }],
        },
        center: [79.5, 22.8],
        zoom: 3.45,
        minZoom: 2.6,
        maxZoom: 7,
        canvasContextAttributes: { preserveDrawingBuffer: true },
        attributionControl: false,
      });
      mapRef.current = map;
      map.addControl(new maplibre.NavigationControl({ showCompass: true }), "bottom-right");
      map.addControl(new maplibre.AttributionControl({ customAttribution: "Boundaries: geoBoundaries · CC BY 2.5 IN" }), "bottom-left");

      map.on("load", async () => {
        const response = await fetch("/data/india-adm1.geojson");
        const data = (await response.json()) as { type: "FeatureCollection"; features: BoundaryFeature[] };
        setBoundaries(data.features);
        map.addSource("states", { type: "geojson", data, generateId: true });
        map.addLayer({
          id: "state-fill",
          type: "fill",
          source: "states",
          paint: {
            "fill-color": [
              "case",
              ["==", ["get", "shapeISO"], initialState.mapIso],
              initialState.atmosphere.accent,
              "#183348",
            ],
            "fill-opacity": ["case", ["==", ["get", "shapeISO"], initialState.mapIso], 0.74, 0.52],
          },
        });
        map.addLayer({
          id: "state-lines",
          type: "line",
          source: "states",
          paint: { "line-color": "#c39b55", "line-opacity": 0.62, "line-width": 0.65 },
        });
        map.on("click", "state-fill", (event) => {
          const iso = event.features?.[0]?.properties?.shapeISO as string | undefined;
          const matched = states.find((state) => state.mapIso === iso);
          if (matched) setSelectedSlug(matched.slug);
        });
        map.on("mouseenter", "state-fill", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "state-fill", () => {
          map.getCanvas().style.cursor = "";
        });
      });
    }

    void start();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map?.getLayer("state-fill")) return;
    map.setPaintProperty("state-fill", "fill-color", [
      "case",
      ["==", ["get", "shapeISO"], selected.mapIso],
      selected.atmosphere.accent,
      activeLayer === "Nature" ? "#365f47" : activeLayer === "Languages" ? "#492c50" : "#183348",
    ]);
    map.setPaintProperty("state-fill", "fill-opacity", ["case", ["==", ["get", "shapeISO"], selected.mapIso], 0.78, 0.52]);
    map.flyTo({ center: [selected.coordinates[1], selected.coordinates[0]], zoom: 4.9, duration: 850 });
  }, [activeLayer, selected]);

  return (
    <div className="map-layout">
      <aside className="map-sidebar" aria-label="Map controls">
        <label className="sr-only" htmlFor="state-filter">Find a state</label>
        <input id="state-filter" className="map-search" value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Find a state…" />
        <div className="layer-list" aria-label="Atlas layers">
          {layers.map((layer) => (
            <button key={layer} type="button" aria-pressed={activeLayer === layer} onClick={() => setActiveLayer(layer)}>
              {layer} <span aria-hidden="true">○</span>
            </button>
          ))}
        </div>
        <div className="state-list" aria-label="Featured states">
          {visibleStates.map((state) => (
            <button key={state.slug} type="button" aria-current={selected.slug === state.slug} onClick={() => setSelectedSlug(state.slug)}>
              {state.name} <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </aside>
      <div className="map-canvas" ref={mapRoot} aria-label={`Interactive political map of India with ${selected.name} selected`}>
        <svg className="map-fallback-geometry" viewBox="0 0 650 650" role="img" aria-label="State and Union Territory boundary geometry">
          {boundaries.map((feature) => {
            const state = states.find((item) => item.mapIso === feature.properties.shapeISO);
            return (
              <path
                className={state?.slug === selected.slug ? "selected" : ""}
                d={featurePath(feature)}
                key={feature.properties.shapeISO}
                aria-label={feature.properties.shapeName}
                role={state ? "button" : undefined}
                tabIndex={state ? 0 : undefined}
                onClick={() => state && setSelectedSlug(state.slug)}
                onKeyDown={(event) => {
                  if (state && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    setSelectedSlug(state.slug);
                  }
                }}
              />
            );
          })}
        </svg>
      </div>
      <aside className="map-panel" aria-live="polite">
        <p className="eyebrow">Selected state</p>
        <h3>{selected.name}</h3>
        <div className="local">{selected.localName}</div>
        <p>{selected.overview}</p>
        <div className="map-stat"><span>Capital</span><strong>{selected.capital}</strong></div>
        <div className="map-stat"><span>Region</span><strong>{selected.region}</strong></div>
        <div className="map-stat"><span>Reference</span><strong>2011 Census</strong></div>
        <Link className="text-link" href={`/states/${selected.slug}`}>
          Enter state atlas <ArrowUpRight size={15} />
        </Link>
      </aside>
    </div>
  );
}
