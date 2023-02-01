import { postSchema } from '../schemas';
import { defineCollection } from 'astro:content';
const blogCollection = defineCollection({
    schema: postSchema
});

export const collections = {
    'blog': blogCollection,
};
