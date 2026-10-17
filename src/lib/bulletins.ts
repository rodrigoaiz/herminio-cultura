import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';

export type BulletinItem = {
  id: string;
  href: string;
  title: string;
  intro: string;
  label: string;
  dateISO: string;
  dateText: string;
  cover?: { src: string; width: number; height: number; alt: string };
};

const dateFormat = new Intl.DateTimeFormat('es-MX', { dateStyle: 'long', timeZone: 'UTC' });

// Del más reciente al más antiguo; si comparten fecha, gana el nombre de archivo más tardío.
export async function getBulletins(): Promise<BulletinItem[]> {
  const entries = (await getCollection('articles', ({ data }) => data.section === 'boletines'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || b.id.localeCompare(a.id));

  return Promise.all(entries.map(async ({ id, data }) => {
    const cover = data.cover && await getImage({ src: data.cover, width: 900, format: 'webp' });
    return {
      id,
      href: `/${id}/`,
      title: data.title,
      intro: data.intro,
      label: data.label,
      dateISO: data.date.toISOString().slice(0, 10),
      dateText: dateFormat.format(data.date),
      cover: cover ? {
        src: cover.src,
        width: Number(cover.options.width),
        height: Number(cover.options.height),
        alt: data.coverAlt,
      } : undefined,
    };
  }));
}
