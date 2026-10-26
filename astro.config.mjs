import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público del sitio, necesario para las URLs absolutas de Open Graph, canonical y sitemap.
// Prioridad: SITE_URL (dominio propio) > dominio de producción que Vercel expone > dominio provisional.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = (process.env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : 'https://herminio-cultura.vercel.app')).replace(/\/$/, '');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [react(), sitemap({ filter: page => !page.includes('/borradores/') })],
  vite: { plugins: [tailwindcss()] },
});
