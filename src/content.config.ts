import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    section: z.enum(['cartelera', 'libros', 'boletines']),
    label: z.string(),
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { articles };
