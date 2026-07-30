"use client";

import { useMemo, useState } from "react";

import { datasets } from "@/content/datasets";

export function DataExplorer() {
  const [selectedId, setSelectedId] = useState(datasets[0]?.id ?? "");
  const selected = datasets.find((dataset) => dataset.id === selectedId) ?? datasets[0]!;
  const max = useMemo(() => Math.max(...selected.values.map((item) => item.value)), [selected]);
  const palette = ["#126c70", "#a84f36", "#365f47"];

  return (
    <div className="chart-shell">
      <div className="chart-tabs" role="tablist" aria-label="India data topics">
        {datasets.map((dataset) => (
          <button
            id={`tab-${dataset.id}`}
            key={dataset.id}
            role="tab"
            type="button"
            aria-selected={dataset.id === selected.id}
            aria-controls={`panel-${dataset.id}`}
            onClick={() => setSelectedId(dataset.id)}
          >
            {dataset.topic}
          </button>
        ))}
      </div>
      <div className="chart-area" role="tabpanel" id={`panel-${selected.id}`} aria-labelledby={`tab-${selected.id}`}>
        <p className="eyebrow">{selected.referenceYear} · {selected.unit}</p>
        <h3 className="display" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", marginBottom: "3rem" }}>{selected.title}</h3>
        <div className="chart-bars" aria-hidden="true">
          {selected.values.map((item, index) => (
            <div
              className="chart-bar"
              key={item.label}
              data-label={`${item.label} · ${item.value.toLocaleString("en-IN")}`}
              style={{ height: `${Math.max(18, (item.value / max) * 86)}%`, "--bar": palette[index] } as React.CSSProperties}
            />
          ))}
        </div>
        <table className="sr-only">
          <caption>{selected.title}</caption>
          <thead><tr><th>State</th><th>{selected.unit}</th></tr></thead>
          <tbody>{selected.values.map((item) => <tr key={item.label}><td>{item.label}</td><td>{item.value}</td></tr>)}</tbody>
        </table>
        <div className="chart-meta">
          <span>Source: {selected.sourceIds.join(", ")}</span>
          <span>Reference year: {selected.referenceYear}</span>
          <span>Updated: {selected.updatedAt}</span>
          <span>Note: {selected.methodology}</span>
        </div>
      </div>
    </div>
  );
}
