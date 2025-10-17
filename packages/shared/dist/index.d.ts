import { z } from "zod";
export declare const Manifest: z.ZodObject<{
    ruleset: z.ZodEnum<{
        "5e": "5e";
        pf2e: "pf2e";
    }>;
    version: z.ZodString;
    name: z.ZodString;
    source: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ClassDef: z.ZodObject<{
    rulesetId: z.ZodString;
    slug: z.ZodString;
    name: z.ZodString;
    hitDie: z.ZodNumber;
    features: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ManifestT = z.infer<typeof Manifest>;
export type ClassDefT = z.infer<typeof ClassDef>;
