import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
    schema: z.object({
        title: z.string(),
        summary: z.string().default(""),
        stack: z.array(z.string()).default([]),
        images: z.array(z.string()).default([]),
        cover: z.string().optional(),
        show: z.boolean().default(true),
        order: z.number().default(999),
        date: z.coerce.date(),
        client: z.string().default("Own Project"),
        role: z.string().optional(),
        status: z
            .enum(["active", "archived", "wip", "live", "draft"])
            .default("active"),
        accent: z
            .enum([
                "lime",
                "teal",
                "cyan",
                "green",
                "magenta",
                "orange",
                "red",
            ])
            .default("teal"),
        links: z.record(z.string()).default({}),
        repo: z
            .object({
                name: z.string().optional(),
                fullName: z.string().optional(),
                url: z.string().optional(),
                language: z.string().optional(),
                topics: z.array(z.string()).optional(),
                pushedAt: z.string().optional(),
            })
            .partial()
            .optional(),
    }),
});

export const collections = { projects };
