---
name: "Herminio · Teatro de papel (revisión 5)"
description: "Teatro conducido por scroll vertical nativo, vistas previas en inicio y páginas editoriales independientes."
colors:
  paper: "#fbf5e8"
  ink: "#263b32"
  coral: "#a74432"
  rust: "#823324"
  yellow: "#dca342"
  blue: "#4b6899"
  wood: "#3c251e"
  ink-hover: "#3c5646"
  theatre-label: "#fff2d8"
  books-sage: "#dce3d3"
  cover-ochre: "#e7bc62"
  cover-forest: "#385b4c"
  bulletin-paper: "#eed7c6"
  night-copy: "#fff5db"
  night-emphasis: "#efd38b"
  night-link: "#f1dfb5"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(60px, 6.4vw, 96px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(60px, 6vw, 88px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  cover-title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.05
  reader-headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  reader-title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  scene-body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  reader-intro:
    fontFamily: "Manrope, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  control: "4px"
  header: "12px"
  header-mobile: "8px"
spacing:
  small: "8px"
  compact: "16px"
  regular: "24px"
  wide: "32px"
  sheet: "48px"
  section-gap: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-primary-night:
    backgroundColor: "{colors.night-link}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-primary-night-hover:
    backgroundColor: "{colors.night-copy}"
  button-text:
    textColor: "{colors.ink}"
    padding: "0 0 4px"
  stage-button:
    backgroundColor: "#42251dcc"
    textColor: "{colors.theatre-label}"
    rounded: "{rounded.control}"
    height: "44px"
    width: "44px"
  header-glass:
    backgroundColor: "#fbf5e8c9"
    textColor: "{colors.ink}"
    rounded: "{rounded.header}"
    padding: "8px 24px"
    height: "48px"
  bulletin-feature:
    backgroundColor: "{colors.bulletin-paper}"
    textColor: "{colors.ink}"
    padding: "48px"
---

# Design System: Herminio · Teatro de papel · revisión 5

## Overview

**Creative North Star: "Teatro de papel"**

La revisión 5 conserva el teatro de papel en la entrada y usa el desplazamiento vertical nativo del documento para conducir todos sus pasos: primero viaja el contenido horizontalmente y después cambia la escenografía completa. Figuras y capas entran, se desplazan y salen durante ese recorrido. Al terminar, el inicio ofrece vistas previas de libros y actividades y una invitación a los boletines; Cartelera, Libros y Boletines tienen páginas propias. Esta instrucción del usuario sustituye el carrusel horizontal independiente de v4, sin reemplazar la identidad elegida. El `ship` de v4 queda como antecedente histórico del sitio, no como aprobación de esta revisión.
Las figuras SVG originales, la fibra de papel y el telón raster mantienen un mundo gráfico común. Cormorant Garamond da carácter cultural a los títulos y Manrope sostiene la lectura. Una cabecera delgada de vidrio translúcido, pedida expresamente por el usuario, permite acceder directamente a los contenidos. La noche es una escenografía azul completa con texto claro, no una transformación global del sitio.

**Key Characteristics:**

- Teatro sólo en la entrada; contenido editorial convencional fuera del telón.
- Tres decorados completos: jardín, ciudad y bosque nocturno.
- Un scroll vertical nativo conduce seis pasos, movimiento horizontal y cambios verticales de decorado.
- Vistas previas con disponibilidad explícita y páginas editoriales independientes.
- Logos escolares originales como firma comunitaria y de pie de página.
- Cabecera translúcida de 48px y navegación directa por enlaces.
- Papel texturado, figuras originales y pareja Cormorant Garamond / Manrope.

## Colors

Papel crema y tinta verde conectan las piezas escénicas con las secciones editoriales. Los tokens registran la implementación v5; los colores literales de cada ilustración y degradado siguen siendo material local de escena.

### Primary
- **Coral teatral** (`coral`): énfasis serif, navegación activa y hover de enlaces.
- **Óxido de lectura** (`rust`): primer metadato y hover de enlaces de reseñas.

### Secondary
- **Salvia editorial** (`books-sage`): fondo de la sección de libros.
- **Papel rosado** (`bulletin-paper`): publicación destacada de boletines.
- **Ocre de cubierta** (`cover-ochre`) y **verde de cubierta** (`cover-forest`): tapas del estante compartido entre inicio y Libros. La tercera tapa reutiliza coral; las dos tapas oscuras usan papel nocturno para sus títulos.
- **Amarillo de papel** (`yellow`): selección de texto.
- **Azul de foco** (`blue`): contorno de foco.

### Neutral
- **Papel crema** (`paper`), **tinta verde** (`ink`) y **tinta activa** (`ink-hover`): superficies de lectura, texto y enlace principal.
- **Madera oscura** (`wood`) y **luz de sala** (`theatre-label`): exterior de la entrada y controles sobre el telón.
- **Papel nocturno** (`night-copy`), **oro nocturno** (`night-emphasis`) y **papel del enlace nocturno** (`night-link`): contraste de la copia y enlace principal del decorado de noche. La hoja del segundo panel conserva tinta oscura sobre papel claro. Las leyendas de papel del escenario también declaran tinta verde explícita (`color: var(--ink)`), incluso dentro del decorado nocturno.

Los tres cielos y sus degradados forman parte de decorados completos, sin un estado `--night` global ni botones para cambiar la luz. Cada escena declara además un fondo base local —jardín `#ead9b2`, ciudad `#edc9b5` y noche `#29356b`— para conservar una superficie estable si no se representa el degradado. La cortina acompaña la llegada del bosque nocturno mediante brillo dependiente de la posición vertical. El verde `--mint` sigue declarado, pero no se registra como token activo porque el código no lo asigna a una superficie.

**The Same Paper Rule.** Fuera del teatro se conservan fibra, ilustraciones, tinta, serif y colores de papel; la continuidad gráfica no necesita conservar la cortina.

## Typography

**Display Font:** Cormorant Garamond local, con `Georgia, serif` de reserva.  
**Body Font:** Manrope local, con `sans-serif` de reserva.

**Character:** títulos culturales de peso (600), espaciado compacto y lectura sans abierta. Los tamaños base y pesos constan en el frontmatter.

### Hierarchy
- **Display:** titulares de los decorados de entrada, con interlineado (1).
- **Headline:** títulos principales de las páginas Cartelera, Libros y Boletines.
- **Cover title:** títulos de cubiertas; pasan a (30px) hasta (1100px) y a (24px) hasta (700px).
- **Title:** título de publicación destacada; títulos auxiliares comparten esta familia y escala con variaciones locales.
- **Reader headline / Reader title:** título y subtítulos del artículo.
- **Body / Scene body / Reader intro:** texto general, presentación escénica y entradilla de artículo.
- **Label:** navegación y enlaces de vuelta; el enlace principal usa (14px), peso (700).

Los titulares escénicos pasan a (72px) hasta (1100px) de ancho y a (48px) hasta (700px), también a (48px) cuando la altura disponible no supera (720px). Las hojas de segundo panel pasan a (36px) en móvil o altura reducida. Los títulos de páginas editoriales pasan a (60px) en móvil; los títulos de sección del inicio parten de (72px), pasan a (60px) y llegan a (48px) hasta (370px). Los títulos de eventos pasan de (36px) a (30px) en móvil. La lectura pasa de (64px) a (48px) hasta (700px) y a (36px) hasta (370px).
Metadatos editoriales se mantienen en (12px). Los apoyos móviles, la marca pequeña y la navegación estrecha que antes eran menores usan ahora (11px). Se registra el valor real, pero **no se canoniza como mínimo universal de legibilidad**.

**The Two Voices Rule.** Los títulos culturales usan Cormorant Garamond; párrafos, navegación y controles usan Manrope.

## Layout

La cabecera es fija, mide (48px), está a (12px) del borde superior y tiene márgenes laterales (24px), ancho máximo (1392px) y relleno (8px 24px). Hasta (700px) queda a (8px) de los bordes con relleno (8px 12px) y radio menor. Sus enlaces llevan directamente a `/cartelera/`, `/libros/` y `/boletines/`; el acceso del inicio a `#descubrir` permite saltar la entrada.

La entrada contiene tres decorados de dos paneles cada uno dentro de un viewport sticky de (100svh). El scroll vertical nativo es el reloj de toda la coreografía. El motor usa un paso por decorado de (2.8) alturas escénicas, un recorrido de (7.6) alturas y una ventana adicional: la entrada ocupa (8.6) alturas. En cada decorado, el viaje horizontal empieza en (0.4) y dura (1.05) alturas; el cambio vertical al siguiente decorado ocurre de (2.0) a (2.8). El último decorado termina después de sus dos paneles. El telón es absoluto dentro de ese viewport, con z-index (60); la cabecera tiene (80) y los controles de entrada (65).

Las pistas horizontales son capas transformadas por ese reloj, sin carrusel nativo independiente, swipe lateral obligatorio ni scroll-snap activo. El motor escucha scroll de forma pasiva y no cancela wheel ni touch. Un `requestAnimationFrame` bajo demanda pinta los cambios; `ResizeObserver` mide el escenario y la altura `svh` mantiene estable el recorrido ante la barra del navegador móvil. El motor no reescribe el hash.

Después de la entrada, el inicio ofrece el estante de libros, dos ideas de actividades y la firma comunitaria con enlace a boletines. La sección base tiene ancho máximo (1248px) y relleno (96px 48px); hasta (1100px), (80px 40px); hasta (700px), (64px 24px). El estante usa tres columnas con separación (48px), después (32px), y dos columnas móviles con separación (40px 24px). El inicio muestra dos cubiertas en móvil; la página Libros conserva las tres. Los eventos usan dos columnas y se apilan hasta (700px).

Cartelera, Libros y Boletines usan páginas y enlaces propios, con ruta de regreso a Inicio y cabecera compartida. Su contenido empieza con separación superior (104px), reducida a (88px) en móvil. Las composiciones editoriales de escritorio usan dos columnas, con separaciones de (64px) u (80px), y se apilan en móvil. La lectura independiente usa ancho máximo (864px), margen superior (128px) y relleno (48px 64px); en móvil ocupa el ancho menos (32px), con relleno (32px 24px).

## Elevation & Depth

Las capas de cartón usan sombras negras suaves y fibra recortada a sus siluetas. El jardín, la arquitectura de ciudad y el bosque nocturno existen simultáneamente en la pila; bajar desplaza el conjunto completo y deja ver la siguiente escenografía. La noche usa su propio cielo y color claro de copia, sin grandes focos que oculten las figuras.

### Shadow Vocabulary
- **Pieza de cartón:** `drop-shadow(4px 10px 5px #0003)`, después del filtro de fibra.
- **Ilustración de escena:** `drop-shadow(6px 20px 10px #0003)`.
- **Hoja de papel:** `8px 16px 24px #0002`.
- **Cortina:** `drop-shadow(6px 12px 10px #0005)`, junto con brillo que acompaña el decorado nocturno.
- **Cabecera:** `0 4px 16px #00000014`, con vidrio translúcido y desenfoque de fondo (16px).
- **Artículo:** `4px 12px 32px #00000012`.
- **Cubierta de libro:** `5px 12px 18px #0002`.

**The Intro Boundary Rule.** El telón pertenece únicamente al viewport de la entrada y sale del documento con ella. Las secciones editoriales y los artículos no llevan cortinaje.

**The Native Scroll Rule.** El desplazamiento vertical nativo conduce el contenido horizontal, las figuras y el cambio vertical de decorados. La animación sigue la posición del documento sin capturar wheel ni touch.

La pausa o la preferencia de movimiento reducido colocan los seis paneles en el flujo natural del documento, retiran el telón y la progresión animada y hacen accesible todo el contenido, sin `inert`. Al cambiar de modo se conserva el panel de lectura; fuera de la entrada se conserva la distancia respecto a su final. El control permanece disponible mientras se recorre la entrada en modo lineal, se oculta al salir de ella y se deshabilita cuando la preferencia del dispositivo exige movimiento reducido. En modo animado, `inert` limita la interacción al panel activo y el foco sale de un panel que se retira antes de desactivarlo. El modo reducido elimina transiciones CSS y desplazamientos de hover.

La textura de lectura se atenúa mediante una capa crema (`#fbf5e8eb`) sobre la fibra; el fondo de artículo usa (`#fbf5e8ed`). La fibra del conjunto escénico queda en opacidad (.12) y la del mundo editorial en (.035). Los recortables mantienen su material y las cubiertas usan una capa de fibra propia en (.1).

## Shapes

El telón raster de borde a borde conserva su transparencia real y encuadra sólo la entrada. Las figuras son SVG originales simples y coloridas; la textura se aplica mediante filtro y mezcla multiply. La continuidad con el sitio editorial se logra reutilizando esas ilustraciones en un cartel y en el panel de libros, además de motivos SVG originales en cubiertas y actividades.

La cabecera tiene esquinas suaves mayores; los enlaces y controles, radios pequeños regulares. Las hojas y los módulos editoriales conservan esquinas rectas. El cartel cultural gira ligeramente en reposo y se endereza en hover, mientras que el libro y el boletín se presentan como piezas editoriales, sin copiar la composición del teatro.

Los materiales conservados son `public/assets/curtain-frame-v2.webp` y `public/assets/paper-fibers-v2.webp`; sus prompts y procedencia figuran en `docs/assets/materials-v2-prompts.md`.

## Components

### Buttons

El enlace principal usa tinta y papel, relleno compacto, radio regular y flecha SVG. Sube (2px) en hover y baja (1px) en pulsación, con transición (0.35s). En la primera lámina del bosque nocturno invierte el contraste según su variante del frontmatter. El enlace de texto usa subrayado fino y flecha SVG (24px), con hover coral. El foco global es azul (3px), separado del elemento (5px).

La invitación «Sigue bajando para recorrer el teatro», el contador de seis pasos y la barra de progreso explican el recorrido. El único botón escénico controla el movimiento; mide (44px), usa fondo marrón translúcido, borde crema y `aria-pressed`. No existen flechas anterior/siguiente de carrusel. El control queda deshabilitado si el dispositivo exige movimiento reducido; en lectura lineal permanece fijo durante la entrada para permitir reactivar el recorrido y se oculta al dejarla atrás.

### Metadata

Las notas editoriales usan la misma tinta del cuerpo. Tipo y fecha se muestran como texto flexible sin cápsulas ni fondos; el primer dato usa óxido. La publicación tiene su fecha distinguible y los artículos conservan enlaces propios. No hay un sistema de filtros implementado.

### Cards / Containers

La cartelera se presenta como un cartel ilustrado con banda inferior oscura y texto de acción. Libros combina una ilustración de papel con dos enlaces a reseñas del alumnado y de personas adultas. El boletín destacado usa una superficie rosada de dos columnas, apilada en móvil. El artículo usa una hoja crema y metadatos de publicación. Estos patrones editoriales están fuera del cortinaje. El estante comparte cubiertas de proporción (3/4), tres colores de papel, lomo sugerido y motivos SVG. Sus títulos son ideas de próximas reseñas, acompañadas por su estado de disponibilidad. Las actividades distinguen «Fecha y sede por confirmar». No deben presentarse como libros reales ya reseñados ni eventos confirmados.

### Navigation

La cabecera de vidrio usa fondo crema translúcido, borde claro y `backdrop-filter: blur(16px) saturate(1.2)`. No es una regla para volver translúcidos los demás módulos: es un tratamiento de cabecera expresamente pedido por el usuario. Navegación activa y hover usan coral y una línea inferior. Los enlaces son nativos a páginas independientes; la página activa se declara con `aria-current="page"`. La lectura independiente conserva esta cabecera y un enlace de regreso a su sección, sin telón.

### Community Signature

Los PNG originales de la Escuela Herminio Almendros, aportados por Rodrigo y conservados con metadatos de procedencia y píxeles originales, se usan sin redibujar: versión negra en el cierre comunitario claro del inicio y blanca en el pie verde de las páginas. Conservan proporción (1584/830). La firma del pie mide (176px) de ancho en escritorio y (152px) en móvil; la firma comunitaria tiene máximo (220px), reducido a (144px) en móvil. El pie incluye enlaces a las tres páginas editoriales.

### Intro Scenes

Jardín, ciudad y bosque nocturno tienen fondos, figuras y luces propios. Todos los desplazamientos se calculan de forma determinista desde la posición vertical y se revierten al subir; figuras y planos tienen entradas, desplazamientos y salidas diferenciadas. Las capas son decorativas; texto y enlaces son HTML. Si falla el script, las escenas quedan en flujo y se ocultan marco y controles escénicos. Los accesorios de temporada siguen la fecha de Ciudad de México: la ventana de Muertos es del (20 de octubre) al (3 de noviembre), sin selector para visitantes. Navidad, Niñez y Cultura siguen pendientes.

## Do's and Don'ts

### Do:

- **Do** limitar el marco y la coreografía a la entrada y mantener accesible el control de movimiento en el modo lineal.
- **Do** conducir todos los pasos teatrales desde el scroll vertical nativo, con viajes horizontales y cambios verticales de decorado.
- **Do** mantener enlaces nativos a páginas editoriales y artículos, con URL e historial del navegador.
- **Do** compartir ilustraciones, fibra y tipografía entre la entrada y el sitio editorial.
- **Do** mantener la cabecera translúcida delgada solicitada, con contenido interior separado de sus bordes.
- **Do** respetar movimiento reducido y mostrar estados de próxima publicación cuando todavía no hay recomendaciones.

### Don't:

- **Don't** extender el telón a cartelera, libros, boletines ni lectura independiente.
- **Don't** reintroducir selectores de decorado o iluminación ni el foco cálido global de v3.
- **Don't** cancelar wheel o touch ni exigir un carrusel horizontal independiente para completar el recorrido.
- **Don't** convertir los rótulos de 11px del sitio en mínimos de lectura del sistema.
- **Don't** presentar las próximas reseñas o ideas de actividades como publicaciones o eventos ya confirmados.

## Estructura de publicación

El sitio usa Astro estático. Las páginas y los artículos están en `src/pages/`, los componentes compartidos en `src/components/`, las publicaciones en archivos Markdown dentro de `src/content/articles/` y el estilo en `src/styles/`: Tailwind v4 (`tailwind.css`, con los colores y puntos de corte `compact`/`narrow`/`tiny` del sitio) convive con el CSS heredado de `global.css`, que queda en una capa anterior para que las utilidades de Tailwind siempre ganen. Los componentes nuevos y migrados usan utilidades; la entrada teatral sigue en `global.css`. Las imágenes y fuentes se sirven desde `/assets/`. Los avisos de prueba se retiraron por instrucción del usuario.
