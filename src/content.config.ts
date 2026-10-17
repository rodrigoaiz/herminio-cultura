import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) => z.object({
    section: z.enum(['cartelera', 'lecturas', 'boletines']),
    label: z.string(),
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    date: z.coerce.date(),
    cover: image().optional(),
    coverAlt: z.string().default(''),
  }),
});

const eventos = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/eventos', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) => z.object({
    title: z.string(),
    type: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    when: z.string(),
    where: z.string(),
    cost: z.string().optional(),
    cover: image(),
    coverAlt: z.string(),
    // Encuadre de la portada en las tarjetas 4:3 (object-position), útil para carteles verticales.
    coverPosition: z.string().default('center'),
    cartelera: z.string(),
  }),
});

export const collections = { articles, eventos };
