// Miniatura para compartir (WhatsApp, Facebook): 1200×630 sin recortar la portada.
// La portada completa va al centro sobre la misma imagen ampliada, desenfocada y oscurecida.
// Si la portada ya es casi apaisada como el espacio disponible, se recorta directamente.
// Abajo, una pleca verde del sitio con un filete dorado, el logo blanco y el nombre de la escuela.
// og-firma.png es el nombre ya dibujado en Manrope (sharp no carga las fuentes del sitio en el servidor de build).
import type { APIRoute, GetStaticPaths } from 'astro';
import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { join } from 'node:path';

const W = 1200, H = 630, MARGIN = 32, BAND = 100, LINE = 4;
const AREA = H - BAND; // alto que queda para la portada
const INK = '#14423f', GOLD = '#e3bc75';
const LOGO_H = 72, LOGO_W = Math.round(1584 / 830 * LOGO_H);
const logo = sharp(join(process.cwd(), 'public/logos/EscuelaHerminioAlmendrosLogo-Blanco.png')).resize({ height: LOGO_H }).png().toBuffer();
const firma = join(process.cwd(), 'public/assets/og-firma.png'); // 40 px de alto de letra, 56 px de caja
const band = sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${BAND}"><rect width="${W}" height="${BAND}" fill="${INK}"/><rect width="${W}" height="${LINE}" fill="${GOLD}"/></svg>`)).png().toBuffer();

export const getStaticPaths = (async () => {
  const articles = (await getCollection('articles')).filter(a => a.data.cover).map(a => ({ params: { slug: a.id }, props: { cover: a.data.cover! } }));
  const eventos = (await getCollection('eventos')).map(e => ({ params: { slug: `cartelera/${e.id}` }, props: { cover: e.data.cover } }));
  return [...articles, ...eventos];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  // fsPath es la ruta del archivo original; Astro la expone sin enumerar en las imágenes importadas.
  const file = (props.cover as ImageMetadata & { fsPath: string }).fsPath;
  const ratio = props.cover.width / props.cover.height;
  let art: Buffer;
  if (Math.abs(ratio - W / AREA) / (W / AREA) < 0.12) {
    art = await sharp(file).rotate().resize(W, AREA, { fit: 'cover' }).toBuffer();
  } else {
    const background = await sharp(file).rotate().resize(W, AREA, { fit: 'cover' }).blur(28).modulate({ brightness: 0.62 }).toBuffer();
    const front = await sharp(file).rotate().resize(W - 2 * MARGIN, AREA - 2 * MARGIN, { fit: 'inside' }).toBuffer();
    art = await sharp(background).composite([{ input: front, gravity: 'center' }]).toBuffer();
  }
  const jpg = await sharp({ create: { width: W, height: H, channels: 3, background: INK } })
    .composite([
      { input: art, top: 0, left: 0 },
      { input: await band, top: AREA, left: 0 },
      { input: await logo, top: AREA + LINE + Math.round((BAND - LINE - LOGO_H) / 2), left: 40 },
      { input: firma, top: AREA + LINE + Math.round((BAND - LINE - 56) / 2), left: 40 + LOGO_W + 24 },
    ])
    .jpeg({ quality: 82 }).toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
