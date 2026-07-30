import { describe, expect, it } from "vitest";

import { sources } from "@/content/sources";
import { states } from "@/content/states";
import { validateAllContent } from "@/lib/content";

describe("content architecture", () => {
  it("validates all Phase 1 records", () => {
    const result = validateAllContent();
    expect(result.states).toHaveLength(3);
    expect(result.stories).toHaveLength(6);
    expect(result.events.length).toBeGreaterThanOrEqual(9);
  });

  it("includes complete state chapter sets and review metadata", () => {
    for (const state of states) {
      expect(state.sections.length).toBeGreaterThanOrEqual(10);
      expect(state.reviewedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(state.sourceIds.length).toBeGreaterThan(0);
    }
  });

  it("resolves every state source reference", () => {
    const ids = new Set(sources.map((source) => source.id));
    for (const state of states) {
      for (const sourceId of [...state.sourceIds, ...state.sections.flatMap((section) => section.sourceIds)]) {
        expect(ids.has(sourceId), `${state.slug} references ${sourceId}`).toBe(true);
      }
    }
  });
});
