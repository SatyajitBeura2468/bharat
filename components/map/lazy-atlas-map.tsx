"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const AtlasMap = dynamic(() => import("./atlas-map"), {
  ssr: false,
  loading: () => <div className="map-loading">Preparing the atlas…</div>,
});

export function LazyAtlasMap() {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: "500px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={root}>{ready ? <AtlasMap /> : <div className="map-loading">Map loads as you approach</div>}</div>;
}
