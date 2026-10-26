// Contenido del álbum: Iktan es real; el resto son fotos de relleno y calaveritas inventadas.
import iktan from './iktan-a.jpg';
import ofrenda1 from './ofrenda-1.jpg';
import ofrenda2 from './ofrenda-2.jpg';
import ofrenda3 from './ofrenda-3.jpg';
import ofrenda4 from './ofrenda-4.jpg';
import type { OfrendaEntry } from '../../components/OfrendaAlbum.astro';

export const title = 'Ofrendas y calaveritas 2026';
export const intro = 'Gracias a todas las familias que compartieron su ofrenda y su calaverita. Este es el álbum de Día de Muertos de la Familia Almendros.';

export const entries: OfrendaEntry[] = [
 {
  name: 'Iktan A., 2.º',
  photo: iktan,
  alt: 'Ofrenda en el piso con tapete de aserrín morado y dos calaveras de cempasúchil, macetas de flores, calaveritas de azúcar, un esqueleto, veladoras y papel picado.',
  calaverita: 'Estaba la calavera\nmuy contenta en el patio grande,\njugando con los niños\nde la Escuela Herminio Almendros\ndulces, risas y sustillos\npara que nadie se espante.\nY al sonar de la campana,\nse fue bailando hasta la tarde.',
 },
 {
  name: 'Familia de Ana R., 3.º',
  photo: ofrenda1,
  alt: 'Ofrenda con pan de muerto, veladoras, flores de cempasúchil, papel picado y la foto de los abuelos.',
  calaverita: 'La Catrina fue a la escuela\ncon su libro bajo el brazo,\nse sentó en el salón de cuarto\ny se quedó a leer un rato.',
 },
 {
  name: 'Mateo G., 5.º',
  photo: ofrenda2,
  alt: 'Foto de ofrenda de ejemplo.',
  calaverita: 'Estaba la maestra muy tranquila\nrevisando la tarea,\nllegó la Flaca y le dijo:\n«¡Pásame una, aunque sea fea!».',
 },
 {
  name: 'Valeria P., 4.º',
  photo: ofrenda3,
  alt: 'Foto de ofrenda de ejemplo.',
  calaverita: 'En el patio de la Herminio\nla Muerte quiso jugar,\npero perdió en las escondidas\ny se tuvo que regresar.',
 },
 {
  name: 'Familia de Emilio T., 6.º',
  photo: ofrenda4,
  alt: 'Foto de ofrenda de ejemplo.',
  calaverita: 'Ya llegó la Calaca flaca\na la clase de deporte,\ncorrió tres vueltas al patio\ny pidió que la soporten.',
 },
 // Calaveritas que llegan sin foto: van en «Más calaveritas», debajo de la cuadrícula.
 {
  name: 'Sofía L., 2.º',
  calaverita: 'La Huesuda vino a la feria\ny se comió un pan de muerto,\nle gustó tanto el azúcar\nque se quedó en el huerto.',
 },
 {
  name: 'Santiago V., 6.º',
  calaverita: 'Pasó la Muerte a la biblioteca\nbuscando un libro de miedo,\nencontró uno de calaveras\ny se asustó de su espejo.',
 },
];
