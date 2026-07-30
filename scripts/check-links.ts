import { existsSync } from "node:fs";
import path from "node:path";

import { allRoutes } from "@/lib/site";

const root = process.cwd();
const missing = allRoutes.filter((route) => {
  if (route === "/") return !existsSync(path.join(root, "app", "page.tsx"));
  const parts = route.slice(1).split("/");
  const direct = path.join(root, "app", ...parts, "page.tsx");
  if (existsSync(direct)) return false;
  if (parts[0] === "states") return !existsSync(path.join(root, "app", "states", "[slug]", "page.tsx"));
  if (parts[0] === "places") return !existsSync(path.join(root, "app", "places", "[slug]", "page.tsx"));
  if (parts[0] === "stories") return !existsSync(path.join(root, "app", "stories", "[slug]", "page.tsx"));
  return true;
});

if (missing.length) {
  process.stderr.write(`Missing route implementations: ${missing.join(", ")}\n`);
  process.exit(1);
}

process.stdout.write(`Route files valid: ${allRoutes.length} public paths.\n`);
