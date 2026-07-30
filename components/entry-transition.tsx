"use client";

import { useEffect, useState } from "react";

export function EntryTransition() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seen = sessionStorage.getItem("bharat-entry-seen");
    if (!seen) {
      const reveal = window.setTimeout(() => setShow(true), 0);
      sessionStorage.setItem("bharat-entry-seen", "true");
      const dismiss = window.setTimeout(() => setShow(false), 1250);
      return () => {
        window.clearTimeout(reveal);
        window.clearTimeout(dismiss);
      };
    }
  }, []);

  return show ? (
    <div className="entry" aria-hidden="true">
      <div className="entry-mark">
        BHARAT <span lang="hi">भारत</span>
      </div>
    </div>
  ) : null;
}
