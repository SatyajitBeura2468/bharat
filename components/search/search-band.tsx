"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/components/search/search-provider";

export function SearchBand() {
  const { openSearch } = useSearch();
  return (
    <div className="search-band">
      <div className="shell">
        <p className="eyebrow">Search BHARAT</p>
        <button className="search-trigger-large" type="button" onClick={openSearch}>
          <Search aria-hidden="true" />
          <strong>Where will your curiosity lead?</strong>
          <span>⌘ K</span>
        </button>
      </div>
    </div>
  );
}
