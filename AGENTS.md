# Indicaciones para agentes

## Privacidad: nunca nombres completos de la comunidad

El sitio es público y aparecen menores de edad. Alumnos, mamás, papás y personas del Comité de Cultura se publican con **nombre + inicial del apellido**, y el grado cuando aplica: «Iktan A. 2º», «Talía G., mamá de Lucía R., de 4º». Un nombre sin apellido («Rodrigo Emilio, de 4º») también vale. Las figuras públicas (autores, artistas, directores de obra) conservan su nombre completo.

La regla aplica a todo lo que llega al sitio:

- Textos: frontmatter (`recommendedBy`, nombres del álbum), cuerpo de los artículos, `alt` y pies de foto.
- Nombres de archivo: Astro conserva el nombre original en la URL de la imagen (`/_astro/iktan-aizpuru.Ab12.webp`). Renombra antes de copiar al proyecto: `iktan-a.jpg`.
- Imágenes: no publiques fotos o escaneos donde se lea un nombre completo (listas, gafetes, la contraportada del boletín con el comité).

Si el material de origen (`docs/`, `fotos/`, PDF, correos) trae el nombre completo, acórtalo al pasarlo. Si no sabes si es una figura pública, pregunta.

## Fotos ampliables

Toda foto de un artículo se puede ampliar y lo avisa con una lupa en la esquina. Las imágenes del Markdown ya lo hacen solas (`FotoVisor.astro`, incluido en `[...slug].astro`). En una galería hecha como componente, envuelve cada foto en `<button class="ampliable" data-full={urlGrande} data-alt={alt} aria-label="Ampliar…">`; no crees otro visor ni otra lupa.

## Rostros de niñas y niños

Antes de publicar cualquier foto, revísala a buen tamaño (no sólo en miniatura) y reporta cada rostro de niña o niño que se vea, aunque esté de fondo, en un reflejo o en un retrato del altar. No publiques esas fotos hasta que el Comité confirme que hay permiso; si no lo hay, pide otra foto o recórtala para que no aparezca.
