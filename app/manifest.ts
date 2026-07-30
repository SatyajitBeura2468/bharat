import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BHARAT — A living atlas of a civilization",
    short_name: "BHARAT",
    description: "Explore the land, people, history, ideas and future of India.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111D",
    theme_color: "#07111D",
  };
}
