"use client";

import Fuse from "fuse.js";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { searchRecords } from "@/lib/content";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const fuse = useMemo(() => new Fuse(searchRecords, { keys: ["title", "description", "keywords"], threshold: 0.34 }), []);
  const base = query ? fuse.search(query).map((result) => result.item) : searchRecords;
  const results = base.filter((record) => category === "All" || record.type === category);
  const categories = ["All", ...new Set(searchRecords.map((record) => record.type))];

  return (
    <>
      <div className="search-top" style={{ border: "1px solid var(--line)" }}>
        <Search aria-hidden="true" />
        <label className="sr-only" htmlFor="search-page-input">Search BHARAT</label>
        <input id="search-page-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search states, places, history, stories and data…" />
        <span>{results.length} results</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", margin: "1rem 0 3rem" }}>
        {categories.map((item) => <button className={item === category ? "button" : "button secondary"} style={{ minHeight: "2.5rem", padding: ".45rem .8rem" }} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="index-list">
        {results.map((record, index) => <Link className="index-row" href={record.href} key={record.id}><span>{String(index + 1).padStart(2, "0")}</span><h2>{record.title}</h2><p>{record.description}</p><ArrowUpRight /></Link>)}
      </div>
    </>
  );
}
