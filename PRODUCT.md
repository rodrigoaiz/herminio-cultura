# Herminio · Comisión de Cultura

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro estático con fuentes en src/, recursos en public/ y compilación en dist/. Rodrigo edita los contenidos como archivos y publica los cambios en GitHub. Vercel despliega desde la rama main y la raíz del repositorio; no se requiere backend ni base de datos.

## Users

Comunidad de la Escuela Herminio Almendros y personas que reciban sus enlaces públicos. Rodrigo editará los archivos y publicará los cambios.

## Product Purpose

Sitio público de la Comisión de Cultura, independiente del sitio institucional de la escuela. Permite descubrir actividades culturales, consultar recomendaciones de libros y leer boletines de la comisión.

## Capabilities and Constraints

- Cartelera de recomendaciones mensuales de actividades, con página propia en `/cartelera/`.
- Libros con reseñas de personas adultas y del alumnado, con página propia en `/libros/`.
- Boletines informativos en `/boletines/` y artículos con fecha y tipo de contenido.
- Inicio con teatro de entrada y vistas previas de libros, actividades y acceso a boletines; las próximas publicaciones se identifican como tales.
- Cada publicación debe poder compartirse mediante su propio enlace.
- Organización editorial propia; evitar una portada de blog convencional.
- Personajes y decorados intercambiables por temporadas: Día de Muertos, Navidad, Día de la Niñez y Día de la Cultura. Ventanas de fechas exactas por definir.
- Alcance inicial público, sin cuentas de visitantes ni panel de publicación solicitado.

## Brand Commitments

El usuario descartó la dirección gráfica de los documentos previos. Quiere un teatro de figuras de cartón dibujadas, sencillas, coloridas y de carácter infantil cuidado, con profundidad de diorama de papel. Confirmó una boca de teatro fija mientras cambian los escenarios con el scroll y eligió empezar por un teatro animado en código.

El refinamiento conserva un cortinaje realista de borde a borde, fibra de cartón, sombras entre planos y atmósfera teatral con degradados. Los títulos usan una serif cultural y el cuerpo mantiene la sans que le gustó al usuario. La referencia nocturna aportada pide que la transformación de iluminación se perciba de forma clara.

La revisión 4 limitó el teatro a la entrada y estableció la cabecera delgada de vidrio translúcido. La revisión 5 sustituye explícitamente sus carruseles independientes: todos los pasos avanzan con el scroll vertical nativo. Dentro de cada decorado se mueve el contenido horizontalmente; después cambia la escenografía verticalmente. Las figuras y capas también entran, se desplazan y salen. Pausa y movimiento reducido ofrecen los seis paneles en flujo lineal accesible y conservan la posición de lectura al cambiar de modo.

Cartelera, Libros y Boletines tienen páginas propias; el inicio presenta vistas previas después del teatro. Las páginas editoriales y los artículos conservan la identidad de papel, con menor textura detrás del texto. Los logos PNG originales de la escuela, aportados por el usuario, firman el cierre comunitario y el pie. Se conserva la pareja de fuentes elegida. Las ilustraciones estacionales siguen cambiando por calendario, sin controles para visitantes. La luz se integra en los tres decorados de la entrada; no existe un selector manual de luz.

## Evidence on Hand

- `planning-previo/` documenta el sitio institucional anterior: sirve de contexto sobre la escuela, su tono comunitario y el valor de la voz del alumnado. No define la arquitectura ni la identidad de este sitio de cultura.
- Referencia visual aportada: https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/018-paper-cut-diorama.html
- Skills locales `scroll-world` y `landing-page-design` instalados.
- La cartelera y las reseñas de libros esperan la primera selección de la comisión. El sitio expresa esa disponibilidad con mensajes editoriales de próxima publicación, sin avisos de prueba.
- Los logos originales aportados por el usuario están en `public/logos/`; sus variantes negra y blanca se usan como firma comunitaria y de pie.
- La implementación v5 se contrasta con `src/scripts/world.js`, las páginas y componentes Astro, `src/styles/global.css` y las capturas de escritorio, móvil y 360×640 en `.impeccable/review/v5/`.

## Product Principles

- La cultura se descubre y se comparte desde la comunidad escolar.
- La voz del alumnado y la de las personas adultas tienen espacio propio.
- El recorrido visual debe convivir con acceso directo a los contenidos.
- Fechas, tipos y autorías hacen legible el archivo.
- La complejidad técnica responde a funciones reales, conservando una publicación estática mientras sea suficiente.

## Publicación

El usuario pidió retirar los avisos de prueba y publicar el sitio en Vercel con una estructura de proyecto convencional. Los artículos se generan como HTML estático con enlaces propios y los metadatos forman parte de cada publicación.
