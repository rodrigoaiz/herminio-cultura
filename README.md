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
  components/   Cabecera, pie y filtros de papel
  content/      Publicaciones y metadatos editables
  layouts/      Estructura compartida de las páginas
  pages/        Inicio, artículos y página 404
  scripts/      Interacciones de la entrada teatral
  styles/       Tipografía, materiales y estilos
public/
  assets/       Imágenes, fuentes y licencias
  robots.txt
astro.config.mjs
package.json
package-lock.json
vercel.json
```

## Vercel

El proyecto se despliega desde la **raíz del repositorio**, con el preset **Astro**. `vercel.json` fija la instalación con `npm ci`, la compilación con `npm run build` y la salida en `dist`.

La rama `main` está conectada al proyecto de Vercel. Publicar cambios en esa rama activa un nuevo despliegue. Los enlaces de lectura anteriores redirigen a sus nuevas direcciones.

## Contenidos

Las publicaciones se editan en `src/content/articles.js`. Cada una tiene una dirección, sección, título, descripción, fecha y cuerpo. La cartelera y las reseñas muestran mensajes de próxima publicación mientras se reúne la selección de la comisión.

La entrada conserva tres decorados, con avance vertical entre escenas y contenido horizontal independiente. Los accesorios de Muertos se activan automáticamente del 20 de octubre al 3 de noviembre, según la fecha de Ciudad de México.

El archivo fotográfico `fotos/` permanece fuera de Git y del despliegue. Las licencias de las fuentes se encuentran en `public/assets/` y la procedencia de los materiales en `docs/assets/`.
