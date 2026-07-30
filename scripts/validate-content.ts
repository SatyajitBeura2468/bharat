import { validateAllContent } from "@/lib/content";

const result = validateAllContent();
const counts = Object.fromEntries(Object.entries(result).map(([key, value]) => [key, value.length]));
process.stdout.write(`Content schemas valid: ${JSON.stringify(counts)}\n`);
