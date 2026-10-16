# Herminio · Comisión de Cultura

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Primera versión estática, con contenidos editables como archivos por Rodrigo. Astro es la recomendación para el sitio editorial completo, pendiente de cerrar; el primer prototipo de movimiento puede ser HTML, CSS y JavaScript sin compilación. Hosting y dominio pendientes.

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

El usuario descartó la dirección gráfica de los documentos previos. Quiere un teatro de figuras de cartón dibujadas, sencillas, coloridas y de carácter infantil cuidado, con profundidad de diorama de papel. Confirmó una boca de teatro fija mientras cambian los escenarios con el scroll y eligió empezar por un prototipo animado en código.

Tras revisar el primer prototipo, pidió un cortinaje más realista de borde a borde y que todo el contenido editorial en movimiento pase detrás de él. Solicitó textura de cartón, sombras más fuertes entre planos y una atmósfera teatral con degradados. Para la tipografía, pidió títulos serif culturales conservando la sans de cuerpo que le gustó. También pidió momentos horizontales deliberados dentro de cada sección, ritmo más lento y evitar superposiciones que dificulten la lectura. Estas peticiones sustituyen las decisiones provisionales incompatibles de la primera maqueta; la revisión v2 sigue pendiente de valoración visual.

El usuario aportó después una referencia de diorama nocturno y pidió que el cambio de iluminación fuese visible. La revisión v3 desarrolla una transición de luz cálida a noche azul violeta, con fuentes de luz de papel, conservando el teatro, las figuras y la lectura. La iluminación es independiente de las temporadas y no implica una nueva dirección de marca. La luz sigue el scroll automáticamente y el control permite elegir automático, noche o día; el fundido manual dura 1400 ms y aplica el destino inmediatamente con pausa o movimiento reducido. Las lecturas independientes permanecen diurnas. Un foco cálido aumenta continuamente mientras el escenario se oscurece y permanece iluminado por la noche; el texto conserva tinta verde y énfasis coral para evitar un cambio brusco de contraste.

## Evidence on Hand

- `planning-previo/` documenta el sitio institucional anterior: sirve de contexto sobre la escuela, su tono comunitario y el valor de la voz del alumnado. No define la arquitectura ni la identidad de este sitio de cultura.
- Referencia visual aportada: https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/018-paper-cut-diorama.html
- Skills locales `scroll-world` y `landing-page-design` instalados.
- Aún no hay textos finales específicos de carteleras, reseñas o boletines en el proyecto. Los ejemplos del prototipo deben identificarse como demostración.
- El usuario menciona fotografías de referencia, pero no se recibieron imágenes en el mensaje ni aparecen en los archivos revisados.

## Product Principles

- La cultura se descubre y se comparte desde la comunidad escolar.
- La voz del alumnado y la de las personas adultas tienen espacio propio.
- El recorrido visual debe convivir con acceso directo a los contenidos.
- Fechas, tipos y autorías hacen legible el archivo.
- La complejidad técnica responde a funciones reales, conservando una publicación estática mientras sea suficiente.
