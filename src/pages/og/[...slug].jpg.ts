// Miniatura para compartir (WhatsApp, Facebook): 1200×630 sin recortar la portada.
// La portada completa va al centro sobre la misma imagen ampliada, desenfocada y oscurecida.
// Si la portada ya es casi apaisada como la miniatura, se recorta directamente.
import type { APIRoute, GetStaticPaths } from 'astro';
import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';

const W = 1200, H = 630, MARGIN = 36;

export const getStaticPaths = (async () => {
  const articles = (await getCollection('articles')).filter(a => a.data.cover).map(a => ({ params: { slug: a.id }, props: { cover: a.data.cover! } }));
  const eventos = (await getCollection('eventos')).map(e => ({ params: { slug: `cartelera/${e.id}` }, props: { cover: e.data.cover } }));
  return [...articles, ...eventos];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  // fsPath es la ruta del archivo original; Astro la expone sin enumerar en las imágenes importadas.
  const file = (props.cover as ImageMetadata & { fsPath: string }).fsPath;
  const ratio = props.cover.width / props.cover.height;
  let jpg: Buffer;
  if (Math.abs(ratio - W / H) / (W / H) < 0.12) {
    jpg = await sharp(file).rotate().resize(W, H, { fit: 'cover' }).jpeg({ quality: 82 }).toBuffer();
  } else {
    const background = await sharp(file).rotate().resize(W, H, { fit: 'cover' }).blur(28).modulate({ brightness: 0.62 }).toBuffer();
    const front = await sharp(file).rotate().resize(W - 2 * MARGIN, H - 2 * MARGIN, { fit: 'inside' }).toBuffer();
    jpg = await sharp(background).composite([{ input: front, gravity: 'center' }]).jpeg({ quality: 82 }).toBuffer();
  }
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
