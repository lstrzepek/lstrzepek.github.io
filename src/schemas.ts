import { z } from 'astro:content';
export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    publishDate: z.date(),
    image: z.object({
        url: z.string(),
        alt: z.string()
    }).optional(),
    tags: z.array(z.string())
});

export type PostFrontmatter = z.infer<typeof postSchema>;
