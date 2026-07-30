const path = require("node:path");
const Module = require("node:module");

// Custom pnpm virtual stores live outside the project on low-disk workstations.
// Preserve normal CI behaviour while making peer resolution see the project links.
process.env.NODE_PATH = [path.join(process.cwd(), "node_modules"), process.env.NODE_PATH]
  .filter(Boolean)
  .join(path.delimiter);
Module._initPaths();
process.argv.push(".");
const eslintRoot = path.dirname(require.resolve("eslint/package.json"));
require(path.join(eslintRoot, "bin", "eslint.js"));
