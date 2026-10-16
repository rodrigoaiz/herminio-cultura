---
name: "Herminio · Teatro de papel (revisión 4)"
description: "Entrada teatral con ejes nativos separados y sitio editorial fuera del telón; revisión v4 con ship en alcance de sitio."
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
    fontSize: "72px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
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

# Design System: Herminio · Teatro de papel · revisión 4

## Overview

**Creative North Star: "Teatro de papel"**

La revisión 4 limita el teatro a la entrada. El usuario conserva la identidad de papel y cartón, pero reemplaza la arquitectura anterior: bajar cambia escenografías completas y desplazarse horizontalmente cambia el contenido dentro de la misma escenografía. Cartelera, libros, boletines y artículos se leen después, fuera del cortinaje. Esta instrucción sustituye las reglas incompatibles de v2 y v3. La revisión v4 obtuvo `ship` en el alcance de este sitio; el único ajuste de contraste de la leyenda nocturna quedó resuelto. Este resultado no aprueba una identidad final ni una implementación de producción.

Las figuras SVG originales, la fibra de papel y el telón raster mantienen un mundo gráfico común. Cormorant Garamond da carácter cultural a los títulos y Manrope sostiene la lectura. Una cabecera delgada de vidrio translúcido, pedida expresamente por el usuario, permite acceder directamente a los contenidos. La noche es una escenografía azul completa con texto claro, no una transformación global del sitio.

**Key Characteristics:**

- Teatro sólo en la entrada; contenido editorial convencional fuera del telón.
- Tres decorados completos: jardín, ciudad y bosque nocturno.
- Eje vertical para escenografía; eje horizontal nativo para ideas de cada decorado.
- Cabecera translúcida de 48px y navegación directa por enlaces.
- Papel texturado, figuras originales y pareja Cormorant Garamond / Manrope.

## Colors

Papel crema y tinta verde conectan las piezas escénicas con las secciones editoriales. Los tokens registran la implementación v4; los colores literales de cada ilustración y degradado siguen siendo material local de escena.

### Primary
- **Coral teatral** (`coral`): énfasis serif, navegación activa y hover de enlaces.
- **Óxido de lectura** (`rust`): primer metadato y hover de enlaces de reseñas.

### Secondary
- **Salvia editorial** (`books-sage`): fondo de la sección de libros.
- **Papel rosado** (`bulletin-paper`): publicación destacada de boletines.
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
- **Headline:** títulos principales de cartelera, libros y boletines.
- **Title:** título de publicación destacada; títulos auxiliares comparten esta familia y escala con variaciones locales.
- **Reader headline / Reader title:** título y subtítulos del artículo.
- **Body / Scene body / Reader intro:** texto general, presentación escénica y entradilla de artículo.
- **Label:** navegación y enlaces de vuelta; el enlace principal usa (14px), peso (700).

Los titulares escénicos pasan a (72px) hasta (1100px), a (60px) hasta (700px), y a (48px) hasta (370px). En escritorio bajo, hasta (700px) de altura y desde (701px) de ancho, quedan en (60px). Los titulares editoriales pasan de (72px) a (60px) hasta (1100px), y a (48px) hasta (370px). La lectura pasa de (64px) a (48px) hasta (700px) y a (36px) hasta (370px).

Metadatos editoriales se mantienen en (12px). Los apoyos móviles, la marca pequeña y la navegación estrecha que antes eran menores usan ahora (11px). Se registra el valor real, pero **no se canoniza como mínimo universal de legibilidad**.

**The Two Voices Rule.** Los títulos culturales usan Cormorant Garamond; párrafos, navegación y controles usan Manrope.

## Layout

La cabecera es fija, mide (48px), está a (12px) del borde superior y tiene márgenes laterales (24px), ancho máximo (1392px) y relleno (8px 24px). Hasta (700px) queda a (8px) de los bordes con relleno (8px 12px) y radio menor. Sus enlaces llevan directamente a las secciones fuera del teatro.

La entrada contiene tres decorados de una altura escénica cada uno, en una pila vertical continua dentro de un viewport sticky de (100svh). El tramo de documento dura (3.5) alturas de viewport: (2.5) de recorrido y una ventana adicional. Cada transición entre decorados dedica un tramo inicial de reposo y después interpola la posición de la pila. El telón es absoluto dentro de ese viewport, con z-index (60); la cabecera tiene (80) y los controles de entrada (65).

Cada decorado tiene un carrusel horizontal independiente de dos paneles. Usa `overflow-x:auto`, `scroll-snap-type:x mandatory` y paneles de ancho (100%). El avance horizontal funciona con swipe, trackpad, botones y flechas del teclado. El scroll vertical sigue siendo nativo; el motor no intercepta wheel ni touch y no reescribe el hash.

Después de la entrada, cartelera, libros y boletines vuelven al flujo vertical convencional. La sección base tiene ancho máximo (1248px) y relleno (96px 48px). Las composiciones de escritorio usan dos columnas, con separaciones de (64px) u (80px). Hasta (1100px) el relleno es (80px 40px); hasta (700px), (64px 24px), con columnas apiladas. La lectura independiente usa ancho máximo (864px), margen superior (128px) y relleno (48px 64px); en móvil ocupa el ancho menos (32px), con relleno (32px 24px).

## Elevation & Depth

Las capas de cartón usan sombras negras suaves y fibra recortada a sus siluetas. El jardín, la arquitectura de ciudad y el bosque nocturno existen simultáneamente en la pila; bajar desplaza el conjunto completo y deja ver la siguiente escenografía. La noche usa su propio cielo y color claro de copia, sin grandes focos que oculten las figuras.

### Shadow Vocabulary
- **Pieza de cartón:** `drop-shadow(4px 10px 5px #0003)`, después del filtro de fibra.
- **Ilustración de escena:** `drop-shadow(6px 20px 10px #0003)`.
- **Hoja de papel:** `8px 16px 24px #0002`.
- **Cortina:** `drop-shadow(6px 12px 10px #0005)`, junto con brillo que acompaña el decorado nocturno.
- **Cabecera:** `0 4px 16px #00000014`, con vidrio translúcido y desenfoque de fondo (16px).
- **Artículo:** `4px 12px 32px #00000012`.

**The Intro Boundary Rule.** El telón pertenece únicamente al viewport de la entrada y sale del documento con ella. Las secciones editoriales y los artículos no llevan cortinaje.

**The Two Axes Rule.** El scroll vertical desplaza la pila de decorados completos; el scroll horizontal cambia paneles dentro de un mismo decorado. No se convierte el avance vertical en desplazamiento horizontal.

La pausa o la preferencia de movimiento reducido redondean la posición vertical a un decorado completo y hacen instantáneo el avance horizontal por controles. El modo reducido elimina transiciones CSS y desplazamientos de hover. La selección de decorado y panel usa `inert` para evitar que elementos fuera de la escena activa reciban interacción. No hay fundido manual de luz ni temporizador de (1400ms) en v4.

## Shapes

El telón raster de borde a borde conserva su transparencia real y encuadra sólo la entrada. Las figuras son SVG originales simples y coloridas; la textura se aplica mediante filtro y mezcla multiply. La continuidad con el sitio editorial se logra reutilizando esas ilustraciones en un cartel y en el panel de libros.

La cabecera tiene esquinas suaves mayores; los enlaces y controles, radios pequeños regulares. Las hojas y los módulos editoriales conservan esquinas rectas. El cartel cultural gira ligeramente en reposo y se endereza en hover, mientras que el libro y el boletín se presentan como piezas editoriales, sin copiar la composición del teatro.

Los materiales conservados son `public/assets/curtain-frame-v2.webp` y `public/assets/paper-fibers-v2.webp`; sus prompts y procedencia figuran en `docs/assets/materials-v2-prompts.md`.

## Components

### Buttons

El enlace principal usa tinta y papel, relleno compacto, radio regular y flecha SVG. Sube (2px) en hover y baja (1px) en pulsación, con transición (0.35s). En la primera lámina del bosque nocturno invierte el contraste según su variante del frontmatter. El enlace de texto usa subrayado fino y flecha SVG (24px), con hover coral. El foco global es azul (3px), separado del elemento (5px).

Las ayudas «Baja: escenario» y «Desliza: contenido» distinguen los ejes. Los botones escénicos son cuadrados de (44px), con fondo marrón translúcido y borde crema. Las flechas anterior y siguiente se deshabilitan en los límites de cada carrusel; el contador anuncia el panel actual. El control de movimiento usa `aria-pressed` y queda deshabilitado si el dispositivo exige movimiento reducido. Estos controles desaparecen al salir de la entrada.

### Metadata

Las notas editoriales usan la misma tinta del cuerpo. Tipo y fecha se muestran como texto flexible sin cápsulas ni fondos; el primer dato usa óxido. La publicación tiene su fecha distinguible y los artículos conservan enlaces propios. No hay un sistema de filtros implementado.

### Cards / Containers

La cartelera se presenta como un cartel ilustrado con banda inferior oscura y texto de acción. Libros combina una ilustración de papel con dos enlaces a reseñas del alumnado y de personas adultas. El boletín destacado usa una superficie rosada de dos columnas, apilada en móvil. El artículo usa una hoja crema y metadatos de publicación. Estos patrones editoriales están fuera del cortinaje.

### Navigation

La cabecera de vidrio usa fondo crema translúcido, borde claro y `backdrop-filter: blur(16px) saturate(1.2)`. No es una regla para volver translúcidos los demás módulos: es un tratamiento de cabecera expresamente pedido por el usuario. Navegación activa y hover usan coral y una línea inferior. Los enlaces son anclas nativas; el indicador de sección usa observación de intersección sin sustituir la URL. La lectura independiente conserva esta cabecera y un enlace de regreso a su sección, sin telón.

### Intro Scenes

Jardín, ciudad y bosque nocturno tienen fondos, figuras y luces propios. El carrusel de cada decorado conserva su posición horizontal al cambiar de escena. Las capas son decorativas; texto y enlaces son HTML. Si falla el script, las escenas quedan en flujo y se ocultan marco y controles escénicos. Los accesorios de temporada siguen la fecha de Ciudad de México: la ventana de Muertos es del (20 de octubre) al (3 de noviembre), sin selector para visitantes. Navidad, Niñez y Cultura siguen pendientes.

## Do's and Don'ts

### Do:

- **Do** limitar el marco y los controles escénicos a la entrada.
- **Do** conservar la separación entre bajar para cambiar decorado y deslizar para cambiar idea.
- **Do** mantener enlaces nativos a secciones y artículos, con URL e historial del navegador.
- **Do** compartir ilustraciones, fibra y tipografía entre la entrada y el sitio editorial.
- **Do** mantener la cabecera translúcida delgada solicitada, con contenido interior separado de sus bordes.
- **Do** respetar movimiento reducido y mostrar estados de próxima publicación cuando todavía no hay recomendaciones.

### Don't:

- **Don't** extender el telón a cartelera, libros, boletines ni lectura independiente.
- **Don't** reintroducir selectores de decorado o iluminación ni el foco cálido global de v3.
- **Don't** interceptar wheel o touch para convertir scroll vertical en avance horizontal.
- **Don't** convertir los rótulos de 11px del sitio en mínimos de lectura del sistema.
- **Don't** interpretar el ship de v4 en alcance de sitio como aprobación de identidad final o preparación para producción.

## Estructura de publicación

El sitio usa Astro estático. Las páginas y los artículos están en `src/pages/`, los componentes compartidos en `src/components/`, las publicaciones en `src/content/articles.js` y el estilo global en `src/styles/global.css`. Las imágenes y fuentes se sirven desde `/assets/`. Los avisos de prueba se retiraron por instrucción del usuario.
