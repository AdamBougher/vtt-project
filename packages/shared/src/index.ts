import { z } from "zod";

export const Manifest = z.object({
  ruleset: z.enum(["5e","pf2e"]),
  version: z.string(),
  name: z.string(),
  source: z.string().optional(),
});

export const ClassDef = z.object({
  rulesetId: z.string(),
  slug: z.string(),
  name: z.string(),
  hitDie: z.number(),
  features: z.array(z.string()),
});

export type ManifestT = z.infer<typeof Manifest>;
export type ClassDefT = z.infer<typeof ClassDef>;
