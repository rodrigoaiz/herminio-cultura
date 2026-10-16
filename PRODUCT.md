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

- Cartelera de recomendaciones mensuales de actividades.
- Libros con reseñas de personas adultas y del alumnado.
- Boletines informativos como artículos con fecha y tipo de contenido.
- Cada publicación debe poder compartirse mediante su propio enlace.
- Organización editorial propia; evitar una portada de blog convencional.
- Personajes y decorados intercambiables por temporadas: Día de Muertos, Navidad, Día de la Niñez y Día de la Cultura. Ventanas de fechas exactas por definir.
- Alcance inicial público, sin cuentas de visitantes ni panel de publicación solicitado.

## Brand Commitments

El usuario descartó la dirección gráfica de los documentos previos. Quiere un teatro de figuras de cartón dibujadas, sencillas, coloridas y de carácter infantil cuidado, con profundidad de diorama de papel. Confirmó una boca de teatro fija mientras cambian los escenarios con el scroll y eligió empezar por un teatro animado en código.

El refinamiento conserva un cortinaje realista de borde a borde, fibra de cartón, sombras entre planos y atmósfera teatral con degradados. Los títulos usan una serif cultural y el cuerpo mantiene la sans que le gustó al usuario. La referencia nocturna aportada pide que la transformación de iluminación se perciba de forma clara.

En la revisión 4, el usuario limitó el teatro a la entrada. Al bajar deben cambiar escenografías completas; el avance horizontal cambia contenido dentro de una misma escena. Eliminó los selectores de decorado: los cambios del recorrido deben ser automáticos con el scroll. Pidió una cabecera más delgada con fondo de vidrio translúcido. Cartelera, libros, boletines y artículos deben funcionar convencionalmente fuera del telón, conservando la identidad de papel. Esta instrucción sustituye la extensión del teatro a todas las secciones de las revisiones anteriores. Las ilustraciones estacionales siguen cambiando por calendario, sin controles para visitantes. La luz se integra en los tres decorados de la entrada; no existe un selector manual de luz.

## Evidence on Hand

- `planning-previo/` documenta el sitio institucional anterior: sirve de contexto sobre la escuela, su tono comunitario y el valor de la voz del alumnado. No define la arquitectura ni la identidad de este sitio de cultura.
- Referencia visual aportada: https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/018-paper-cut-diorama.html
- Skills locales `scroll-world` y `landing-page-design` instalados.
- La cartelera y las reseñas de libros esperan la primera selección de la comisión. El sitio expresa esa disponibilidad con mensajes editoriales de próxima publicación, sin avisos de prueba.
- El usuario menciona fotografías de referencia, pero no se recibieron imágenes en el mensaje ni aparecen en los archivos revisados.

## Product Principles

- La cultura se descubre y se comparte desde la comunidad escolar.
- La voz del alumnado y la de las personas adultas tienen espacio propio.
- El recorrido visual debe convivir con acceso directo a los contenidos.
- Fechas, tipos y autorías hacen legible el archivo.
- La complejidad técnica responde a funciones reales, conservando una publicación estática mientras sea suficiente.

## Publicación

El usuario pidió retirar los avisos de prueba y publicar el sitio en Vercel con una estructura de proyecto convencional. Los artículos se generan como HTML estático con enlaces propios y los metadatos forman parte de cada publicación.
