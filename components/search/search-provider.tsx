"use client";

import Fuse from "fuse.js";
import { ArrowUpRight, Search, X } from "lucide-react";
import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import { searchRecords } from "@/lib/content";

type SearchContextValue = {
  openSearch: () => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const fuse = useMemo(
    () =>
      new Fuse(searchRecords, {
        keys: ["title", "description", "keywords", "type"],
        threshold: 0.34,
        includeMatches: true,
      }),
    [],
  );

  const closeSearch = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const openSearch = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement;
    setOpen(true);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
      if (event.key === "Escape" && open) closeSearch();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeSearch, open, openSearch]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = query.trim()
    ? fuse.search(query).slice(0, 12).map((result) => result.item)
    : searchRecords.slice(0, 8);

  function rememberSearch(recordId: string) {
    const previous = JSON.parse(localStorage.getItem("bharat-recent-searches") ?? "[]") as string[];
    localStorage.setItem(
      "bharat-recent-searches",
      JSON.stringify([recordId, ...previous.filter((id) => id !== recordId)].slice(0, 6)),
    );
    closeSearch();
  }

  return (
    <SearchContext.Provider value={{ openSearch }}>
      {children}
      {open ? (
        <div className="search-dialog" role="dialog" aria-modal="true" aria-label="Search BHARAT" onMouseDown={(event) => event.target === event.currentTarget && closeSearch()}>
          <div className="search-box">
            <div className="search-top">
              <Search size={22} aria-hidden="true" />
              <label className="sr-only" htmlFor="global-search">
                Search places, states, history, data and stories
              </label>
              <input
                id="global-search"
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the living atlas…"
                autoComplete="off"
              />
              <button className="icon-button" type="button" aria-label="Close search" onClick={closeSearch}>
                <X size={20} />
              </button>
            </div>
            <div className="search-results" aria-live="polite">
              {results.length ? (
                results.map((record) => (
                  <Link className="search-result" key={record.id} href={record.href} onClick={() => rememberSearch(record.id)}>
                    <span>{record.type}</span>
                    <div>
                      <strong>{record.title}</strong>
                      <small>{record.description}</small>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                ))
              ) : (
                <p style={{ padding: "2rem", color: "#9fabaf" }}>No match yet. Try a state, landscape, period or story.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used inside SearchProvider");
  return context;
}
