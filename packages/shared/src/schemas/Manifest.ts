import { z } from "zod";

export const Manifest = z.object({
  ruleset: z.enum(["Dungeons & Dragons","Pathfinder"]),
  ruleset_edition: z.string(),
  name: z.string(),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  description: z.string().optional(),
  author: z.string().optional(),
  source: z.url().optional().default("Homebrew"),
  license: z.string().optional(),
  fetched_at: z.iso.datetime().optional(),
  dataset_hash: z.string().optional(),
  files: z.array(z.string()).default([]),
  dependencies: z.array(
    z.object({
      ruleset: z.string(),
      name: z.string(),
      version: z.string()
    })
  ).default([]),
});
