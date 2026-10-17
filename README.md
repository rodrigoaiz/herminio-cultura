# Herminio Cultura

Sitio de la Comisión de Cultura de la Escuela Herminio Almendros. Incluye una entrada de teatro de papel, cartelera mensual, lecturas de la comunidad y boletines.

## Desarrollo

Requiere Node.js 22.22.0 o posterior de la rama 22 y npm. El archivo `.nvmrc` fija la versión para desarrollo.

```sh
npm ci
npm run dev
```

## Compilación

```sh
npm run build
npm run preview
```

Astro genera páginas estáticas en `dist/`. El contenido de los artículos se incluye en el HTML durante la compilación; no necesita JavaScript, servidor ni base de datos para leerse.

## Estructura

```text
src/
  components/   Cabecera, pie, avances de libros y eventos, filtros de papel
  content/      Publicaciones y metadatos editables
  layouts/      Estructura compartida de las páginas
  pages/        Inicio, cartelera, lecturas, boletines, artículos y página 404
  scripts/      Interacciones de la entrada teatral
  styles/       tailwind.css (Tailwind v4: tokens, puntos de corte, capas) y global.css (CSS heredado)
public/
  assets/       Imágenes, fuentes y licencias
  logos/        Logos PNG aportados por la escuela
  robots.txt
astro.config.mjs
package.json
package-lock.json
vercel.json
```

## Vercel

El proyecto se despliega desde la **raíz del repositorio**, con el preset **Astro**. `vercel.json` fija la instalación con `npm ci`, la compilación con `npm run build` y la salida en `dist`.

La rama `main` está conectada al proyecto de Vercel. Publicar cambios en esa rama activa un nuevo despliegue. Los enlaces de lectura anteriores redirigen a sus nuevas direcciones.

### Dirección pública y vista previa al compartir

Las etiquetas Open Graph (WhatsApp, Facebook), `canonical`, `sitemap-index.xml` y `robots.txt` necesitan la dirección pública del sitio. Se toma, en este orden, de la variable de entorno `SITE_URL` (por ejemplo `https://cultura.mi-dominio.mx`), del dominio de producción que Vercel expone (`VERCEL_PROJECT_PRODUCTION_URL`) o, si no hay ninguna, de `https://herminio-cultura.vercel.app`. Al tener dominio propio, basta con definir `SITE_URL` en Vercel (Settings → Environment Variables) y volver a desplegar.

La imagen al compartir es la portada del artículo (`cover`), recortada a 1200×630 en JPG. Las páginas sin portada usan `public/og-default.jpg`. WhatsApp guarda en caché la vista previa de cada enlace; si cambias la imagen o el texto de uno ya compartido, vuelve a generarla con el depurador de Facebook (developers.facebook.com/tools/debug).

## Contenidos

Cada publicación es un archivo Markdown en `src/content/articles/<sección>/<slug>.md` (la dirección es `/<sección>/<slug>/`). El encabezado (frontmatter) lleva `section`, `label`, `title`, `description`, `intro` y `date`, y opcionalmente `cover` y `coverAlt` (portada de la lista y de la vista previa al compartir). Si el artículo lleva fotos, va en su propia carpeta (`<slug>/index.md`) con las imágenes al lado, referenciadas como `./foto.jpg`. el cuerpo se escribe en Markdown. El esquema está en `src/content.config.ts`. La cartelera y las reseñas muestran mensajes de próxima publicación mientras se reúne la selección de la comisión.

La entrada conserva tres decorados y seis pasos, todos controlados por el scroll vertical nativo de la página. Cada decorado mantiene una pausa de lectura, desplaza sus dos paneles lateralmente y después sale hacia arriba. Las figuras y las capas se mueven con ese mismo avance. No se interceptan eventos de rueda o táctiles ni se usa un carrusel independiente. La preferencia de movimiento reducido presenta los seis paneles en flujo normal.

Las secciones tienen sus propias páginas `/cartelera/`, `/lecturas/` y `/boletines/`, con `SectionLayout.astro` compartido y composición propia. El inicio sólo muestra avances después del teatro. Los libros y planes provisionales se editan en `BookShelf.astro` y `EventPreview.astro`; no representan publicaciones confirmadas. Los accesorios de Muertos se activan automáticamente del 20 de octubre al 3 de noviembre, según la fecha de Ciudad de México.

El archivo fotográfico `fotos/` permanece fuera de Git y del despliegue. Las licencias de las fuentes se encuentran en `public/assets/` y la procedencia de los materiales en `docs/assets/`.
