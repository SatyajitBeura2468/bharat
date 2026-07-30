"use client";

import { Languages, Menu, Moon, Search, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useSearch } from "@/components/search/search-provider";

const navigation = [
  ["Explore", "/explore"],
  ["History", "/history"],
  ["Culture", "/culture"],
  ["Nature", "/nature"],
  ["Innovation", "/innovation"],
  ["Data", "/data"],
  ["Stories", "/stories"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { openSearch } = useSearch();

  useEffect(() => {
    const sync = window.setTimeout(
      () => setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark"),
      0,
    );
    return () => window.clearTimeout(sync);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("bharat-theme", next);
  }

  return (
    <>
      <header className="site-header">
        <div className="shell nav-inner">
          <Link className="wordmark" href="/" aria-label="BHARAT home">
            BHARAT <small lang="hi">भारत</small>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="nav-action" type="button" onClick={openSearch}>
              Search
            </button>
            <button className="icon-button" type="button" aria-label="Open search" onClick={openSearch}>
              <Search size={17} />
            </button>
            <Link className="icon-button" href="/about#language" aria-label="Language information">
              <Languages size={17} />
            </Link>
            <button data-testid="theme-toggle" className="icon-button" type="button" aria-label={`Use ${theme === "dark" ? "light" : "dark"} theme`} onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="icon-button mobile-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen ? (
        <nav className="mobile-drawer" aria-label="Mobile navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <button
            className="button"
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openSearch();
            }}
          >
            Search BHARAT
          </button>
          <Link href="/about#language" onClick={() => setMenuOpen(false)}>Language · English</Link>
          <button data-testid="mobile-theme-toggle" className="button secondary" type="button" onClick={toggleTheme}>
            Use {theme === "dark" ? "light" : "dark"} theme
          </button>
        </nav>
      ) : null}
    </>
  );
}
