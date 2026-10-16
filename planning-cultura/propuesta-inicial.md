# Propuesta inicial · Comisión de Cultura

Fecha: 16 de octubre de 2026. Estado: propuesta técnica y primer prototipo; no es una versión publicable con contenido definitivo.

## Confirmado

Sitio público independiente del institucional. Rodrigo puede editar y publicar archivos. Boca de teatro fija con profundidad y cambios de escena. Primera prueba animada directamente en código.

## Experiencia propuesta

Portada como teatro de papel con cuatro momentos: bienvenida, cartelera, libros y boletines. La escenografía cambia mientras el marco permanece. Enlaces de navegación permiten llegar a cada contenido sin completar todo el recorrido. Las páginas de lectura conservan la identidad del teatro con un marco discreto y tipografía cómoda.

La referencia aportada construye el diorama con capas y SVG. El skill `scroll-world` usa una cadena de videos prerenderizados: no son la misma técnica. Para este proyecto se recomienda una animación de capas que permita sustituir personajes y accesorios; no se presentará como si fuera el motor de video del skill. Si después se busca un vuelo cinematográfico, se podrá evaluar ese pipeline y su producción de medios por separado.

## Stack recomendado para el sitio completo

| Parte | Propuesta | Motivo |
| --- | --- | --- |
| Sitio y rutas | Astro, salida estática, TypeScript | Generar páginas y archivos editoriales sin un servidor de aplicación permanente. |
| Contenido | Markdown y datos estructurados con Content Collections | Fechas, tipos, autores, relaciones y validación. |
| Teatro | SVG e ilustraciones de papel por capas, CSS y GSAP ScrollTrigger | Sincronizar profundidad y transiciones con el scroll. Probar primero las posibilidades nativas en el prototipo. |
| Temporadas | Configuración de fechas y recursos | Tema base, variantes y prioridad para temporadas superpuestas. |
| Publicación | Compilar y publicar archivos estáticos | Hosting y dominio por definir; no contratar ni desplegar durante esta prueba. |

Una compilación no implica un backend para visitantes: Astro produce HTML, CSS, JavaScript y recursos estáticos.

## Estructura editorial propuesta

| Colección | Datos principales | Presentación |
| --- | --- | --- |
| Carteleras | Mes/edición, introducción y actividades relacionadas | Una selección mensual curada, con archivo por mes. |
| Actividades | Título, fecha de inicio/fin, sede, enlace, edades orientativas y categoría | Fichas dentro de la cartelera; distinguir fecha del evento y publicación. |
| Libros | Título, autoría, portada y datos bibliográficos confirmados | Ficha del libro con sus reseñas relacionadas. |
| Reseñas | Libro relacionado, texto, fecha y tipo de voz: alumnado/persona adulta | Permite varias voces para un libro sin duplicar su ficha. |
| Boletines | Título, resumen, fecha, tipo, etiquetas y cuerpo | Artículos con enlace propio y archivo por fecha/tema. |

No se inventarán citas de alumnado, eventos, sedes ni reseñas como si fueran material publicado. Los ejemplos iniciales se identificarán como demostración.

## Temporadas

Separar contenido editorial de escenografía. Cada temporada define recursos intercambiables de personajes, accesorios y fondos, manteniendo los puntos de anclaje y la secuencia del teatro.

El sitio puede seleccionar la variante en el navegador según el calendario de Ciudad de México, sin base de datos. Habrá tema base, fechas explícitas y prioridad, además de una vista previa manual. No depender solo del mes de compilación: un despliegue estático no se vuelve a generar por cambiar la fecha. Las publicaciones programadas requerirían una nueva compilación; no se deben enviar borradores al navegador para ocultarlos con JavaScript.

Primero demostrar tema base y Día de Muertos. Navidad, Niñez y Cultura quedan como variantes posteriores, con fechas confirmadas por la comisión.

## Cuándo agregar servicios

- Un panel de edición podría guardar archivos en Git y disparar compilaciones; no obliga a crear una base de datos propia.
- Recepción de colaboraciones o formularios requeriría un servicio de recepción y revisión, manteniendo público el sitio estático.
- Cuentas, contenido privado por usuario, comentarios persistentes o inscripciones requerirían funciones de servidor y almacenamiento adecuados a ese alcance.

Las secciones de artículos, las etiquetas, la cantidad ordinaria de publicaciones y las temporadas no exigen por sí mismas backend.

## Primer prototipo

Teatro estático sin compilación, con cuatro escenas, navegación directa, cambio manual de temporada base/Muertos, adaptación móvil y modo de movimiento reducido. Prueba el mecanismo visual; no sustituye el sitio editorial ni contiene publicaciones finales. Al evaluar la profundidad y el ritmo se trasladará el sistema al stack acordado.

## Fuentes técnicas

- Astro: https://docs.astro.build/en/guides/content-collections/
- Renderizado estático y evolución: https://docs.astro.build/en/guides/on-demand-rendering/
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Skill de video: https://github.com/oso95/scroll-world
