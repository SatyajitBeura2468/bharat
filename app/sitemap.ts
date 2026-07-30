import type { MetadataRoute } from "next";

import { places } from "@/content/places";
import { states } from "@/content/states";
import { stories } from "@/content/stories";
import { siteConfig } from "@/lib/site";

const staticRoutes = ["/", "/explore", "/states", "/history", "/history/timeline", "/culture", "/nature", "/innovation", "/innovation/space", "/data", "/stories", "/search", "/sources", "/methodology", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticRoutes,
    ...states.map((state) => `/states/${state.slug}`),
    ...places.map((place) => `/places/${place.slug}`),
    ...stories.map((story) => `/stories/${story.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.7,
  }));
}
