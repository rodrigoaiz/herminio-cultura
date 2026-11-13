---
name: "Herminio · Teatro de papel (revisión 6)"
description: "Teatro de una escena a la vez con cambio automático de actos, vistas previas en inicio y páginas editoriales independientes."
colors:
  paper: "#fbf5e8"
  ink: "#14423f"
  coral: "#a74432"
  rust: "#823324"
  yellow: "#dca342"
  blue: "#4b6899"
  wood: "#3c251e"
  ink-hover: "#215551"
  theatre-label: "#fff2d8"
  books-sage: "#dce3d3"
  cover-ochre: "#e7bc62"
  cover-forest: "#265e55"
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
  act-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    width: "200px"
    padding: "4px"
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

# Design System: Herminio · Teatro de papel · revisión 6

## Overview

**Creative North Star: "Teatro de papel"**

La revisión 6 conserva el teatro de papel en la entrada, pero ya no lo liga al scroll: el escenario mide una pantalla y muestra un acto a la vez. Cada (9s) los actos cambian solos con un apagón por zonas; flechas en la etiqueta del acto permiten moverse a mano. La revisión 5 conducía seis pasos con el scroll vertical (viajes horizontales, cambios verticales de decorado y figuras que entraban y salían); se retiró en noviembre de 2026 porque la página se sentía pesadísima, sobre todo al compartir pantalla. Debajo del teatro, el inicio ofrece vistas previas de Boletines, Cartelera y Lecturas, que tienen páginas propias.
Las figuras SVG originales, la fibra de papel y el telón raster mantienen un mundo gráfico común. Cormorant Garamond da carácter cultural a los títulos y Manrope sostiene la lectura. Una cabecera delgada de vidrio translúcido, pedida expresamente por el usuario, permite acceder directamente a los contenidos. La noche es una escenografía azul completa con texto claro, no una transformación global del sitio.

**Key Characteristics:**

- Teatro sólo en la entrada; contenido editorial convencional fuera del telón.
- Tres actos: jardín (Boletines), ciudad (Cartelera) y bosque nocturno (Lecturas).
- Un acto a la vez; cambio automático con apagón por zonas, sin nada ligado al scroll.
- Vistas previas con disponibilidad explícita y páginas editoriales independientes.
- Logos escolares originales como firma comunitaria y de pie de página.
- Cabecera translúcida de 48px y navegación directa por enlaces.
- Papel texturado, figuras originales y pareja Cormorant Garamond / Manrope.

## Colors

Papel crema y tinta verde conectan las piezas escénicas con las secciones editoriales. Los tokens registran la implementación v5; los colores literales de cada ilustración y degradado siguen siendo material local de escena.

**Verde de marca: petróleo, no pino.** Desde noviembre de 2026 la tinta (`ink`) es el petróleo `#14423f` del sitio de la Escuela (`herminio-web/src/styles/brand.css`), que pasó a ese tono el 2 de noviembre de 2026 para no parecerse al verde pino `#1d4426` de Cumani (cumani.mx). Los verdes de marca e interfaz (`ink`, `ink-hover`, `cover-forest`, pie, logo de la flor) salen de la misma familia que la Escuela —verde `#14423f`, arco `#1b4d49`, `#215551`, `#265e55`— y no usan tonos pino ni verdes cálidos o amarillentos. Los verdes de paisaje (jardín, follaje, bosque) son material de escena y no siguen esta regla. Contraste sobre papel `#fbf5e8`: `ink` 10.28, `ink-hover` 7.78 (texto del enlace principal en hover); título en papel nocturno sobre `cover-forest`: 6.87.

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
- **Papel nocturno** (`night-copy`), **oro nocturno** (`night-emphasis`) y **papel del enlace nocturno** (`night-link`): contraste de la copia y enlace principal del decorado de noche. Las leyendas de papel del escenario también declaran tinta verde explícita (`color: var(--ink)`), incluso dentro del decorado nocturno.

Los tres cielos y sus degradados forman parte de decorados completos, sin un estado `--night` global ni botones para cambiar la luz. Cada escena declara además un fondo base local —jardín `#ead9b2`, ciudad `#edc9b5` y noche `#29356b`— para conservar una superficie estable si no se representa el degradado. El telón no se oscurece nunca: ni en la noche ni durante el apagón. El verde `--mint` sigue declarado, pero no se registra como token activo porque el código no lo asigna a una superficie.

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
- **Body / Reader intro:** texto general y entradilla de artículo. Los actos del teatro no llevan párrafo: sólo etiqueta de sección, título, botón y leyenda de papel.
- **Label:** navegación y enlaces de vuelta; el enlace principal usa (14px), peso (700).

Los titulares escénicos pasan a (72px) hasta (1100px) de ancho y a (48px) hasta (700px), también a (48px) cuando la altura disponible no supera (720px). Los títulos de páginas editoriales pasan a (60px) en móvil; los títulos de sección del inicio parten de (72px), pasan a (60px) y llegan a (48px) hasta (370px). Los títulos de eventos pasan de (36px) a (30px) en móvil. La lectura pasa de (64px) a (48px) hasta (700px) y a (36px) hasta (370px).
Metadatos editoriales se mantienen en (12px). Los apoyos móviles, la marca pequeña y la navegación estrecha que antes eran menores usan ahora (11px). Se registra el valor real, pero **no se canoniza como mínimo universal de legibilidad**.

**The Two Voices Rule.** Los títulos culturales usan Cormorant Garamond; párrafos, navegación y controles usan Manrope.

## Layout

La cabecera es fija, mide (48px), está a (12px) del borde superior y tiene márgenes laterales (24px), ancho máximo (1392px) y relleno (8px 24px). Hasta (700px) queda a (8px) de los bordes con relleno (8px 12px) y radio menor. Sus enlaces llevan directamente a `/cartelera/`, `/libros/` y `/boletines/`; el acceso del inicio a `#descubrir` permite saltar la entrada.

La entrada mide una pantalla (100svh) y apila los tres actos en el mismo lugar; sólo el activo es visible (`.is-active`) y los demás quedan `inert` y `aria-hidden`. Después del teatro la página sigue en flujo normal. El telón es absoluto dentro del escenario, con z-index (60); la cabecera tiene (80) y la etiqueta del acto (65). El teatro proyecta una sombra suave sobre la página que sigue.

`src/scripts/world.js` no lee el scroll. El reloj del cambio de acto es la propia línea de la etiqueta: una animación CSS de (9s) que, al terminar (`animationend`), pasa al acto siguiente. Pausar la animación pausa el cambio: con foco de teclado dentro del escenario, con el teatro fuera de pantalla (`IntersectionObserver`) o con la pestaña oculta. El mouse no pausa, porque el escenario ocupa toda la pantalla. Usar una flecha detiene el cambio automático y oculta la línea.

Después de la entrada, el inicio ofrece vistas previas de Boletines, Cartelera (o un aviso para proponer planes cuando no hay eventos próximos) y Lecturas, y la firma comunitaria. La sección base tiene ancho máximo (1248px) y relleno (96px 48px); hasta (1100px), (80px 40px); hasta (700px), (64px 24px). El estante usa tres columnas con separación (48px), después (32px), y dos columnas móviles con separación (40px 24px). El inicio muestra dos cubiertas en móvil; la página Libros conserva las tres. Los eventos usan dos columnas y se apilan hasta (700px).

Cartelera, Libros y Boletines usan páginas y enlaces propios, con ruta de regreso a Inicio y cabecera compartida. Su contenido empieza con separación superior (104px), reducida a (88px) en móvil. Las composiciones editoriales de escritorio usan dos columnas, con separaciones de (64px) u (80px), y se apilan en móvil. La lectura independiente usa ancho máximo (864px), margen superior (128px) y relleno (48px 64px); en móvil ocupa el ancho menos (32px), con relleno (32px 24px).

## Elevation & Depth

Las capas de cartón usan sombras negras suaves y fibra recortada a sus siluetas. La noche usa su propio cielo y color claro de copia, sin grandes focos que oculten las figuras.

**Apagón entre actos.** Se apaga por zonas, como las varas de luces de un escenario, con tres capas de sombra intercaladas entre los planos que sólo cambian de opacidad: el fondo baja lento a azul noche (`dim-back`, bajo los personajes), los personajes se van en ámbar y más desde arriba (`dim-mid`, sobre ellos) y el frente se corta de golpe (`dim-all`, sobre todo). El texto se desvanece con el fondo para que no parezca cambiar de color. La escena cambia a oscuras ((1.15s)) y las zonas vuelven en orden inverso. El telón y la etiqueta quedan iluminados. No se usan focos circulares ni parpadeos.

### Shadow Vocabulary
- **Pieza de cartón:** `drop-shadow(4px 10px 5px #0003)`, después del filtro de fibra.
- **Ilustración de escena:** `drop-shadow(6px 20px 10px #0003)`.
- **Hoja de papel:** `8px 16px 24px #0002`.
- **Cortina:** `drop-shadow(6px 12px 10px #0005)`, sin cambios de brillo.
- **Teatro sobre la página:** `0 6px 10px #3c251e40, 0 18px 36px -8px #3c251e33`.
- **Cabecera:** `0 4px 16px #00000014`, con vidrio translúcido y desenfoque de fondo (16px).
- **Artículo:** `4px 12px 32px #00000012`.
- **Cubierta de libro:** `5px 12px 18px #0002`.

**The Intro Boundary Rule.** El telón pertenece únicamente al viewport de la entrada y sale del documento con ella. Las secciones editoriales y los artículos no llevan cortinaje.

**The Light Stage Rule.** Nada del teatro se liga al scroll. Las animaciones del escenario sólo cambian `opacity` y `transform`; ningún `filter` ni dimensión se anima. Las escenas ocultas y el teatro fuera de pantalla pausan sus animaciones ambientales.

Con movimiento reducido los actos no cambian solos (la línea de la etiqueta no se muestra), no hay apagón y las flechas cambian de acto directamente. El modo reducido elimina transiciones CSS y desplazamientos de hover.

La textura de lectura se atenúa mediante una capa crema (`#fbf5e8eb`) sobre la fibra; el fondo de artículo usa (`#fbf5e8ed`). La fibra del conjunto escénico queda en opacidad (.12) y la del mundo editorial en (.035). Los recortables mantienen su material y las cubiertas usan una capa de fibra propia en (.1).

## Shapes

El telón raster de borde a borde conserva su transparencia real y encuadra sólo la entrada. Las figuras son SVG originales simples y coloridas; la textura se aplica mediante filtro y mezcla multiply. La continuidad con el sitio editorial se logra reutilizando esas ilustraciones en un cartel y en el panel de libros, además de motivos SVG originales en cubiertas y actividades.

La cabecera tiene esquinas suaves mayores; los enlaces y controles, radios pequeños regulares. Las hojas y los módulos editoriales conservan esquinas rectas. El cartel cultural gira ligeramente en reposo y se endereza en hover, mientras que el libro y el boletín se presentan como piezas editoriales, sin copiar la composición del teatro.

Los materiales conservados son `public/assets/curtain-frame-v2.webp` y `public/assets/paper-fibers-v2.webp`; sus prompts y procedencia figuran en `docs/assets/materials-v2-prompts.md`.

## Components

### Buttons

El enlace principal usa tinta y papel, relleno compacto, radio regular y flecha SVG. Sube (2px) en hover y baja (1px) en pulsación, con transición (0.35s). En la primera lámina del bosque nocturno invierte el contraste según su variante del frontmatter. El enlace de texto usa subrayado fino y flecha SVG (24px), con hover coral. El foco global es azul (3px), separado del elemento (5px).

La etiqueta del acto es un papel sobre las candilejas: «Primer acto / Segundo acto / Tercer acto» en Cormorant cursiva color óxido, el nombre del acto debajo y flechas «Acto anterior» y «Acto siguiente» a los lados. Tiene ancho fijo ((200px), (172px) en móvil) y no parte el nombre, para no moverse al cambiar de acto. Una línea óxido de (2px) en su borde inferior se llena en (9s) hasta el cambio.

Cada acto y cada sección del inicio llevan sobre su título una etiqueta de sección (Boletines, Cartelera, Lecturas): una raya de (24px) y el nombre en Manrope (14px), peso (700), color óxido (oro nocturno en la noche). Dice qué es; el título, por qué entrar.

### Metadata

Las notas editoriales usan la misma tinta del cuerpo. Tipo y fecha se muestran como texto flexible sin cápsulas ni fondos; el primer dato usa óxido. La publicación tiene su fecha distinguible y los artículos conservan enlaces propios. No hay un sistema de filtros implementado.

### Cards / Containers

La cartelera se presenta como un cartel ilustrado con banda inferior oscura y texto de acción. Libros combina una ilustración de papel con dos enlaces a reseñas del alumnado y de personas adultas. El boletín destacado usa una superficie rosada de dos columnas, apilada en móvil. El artículo usa una hoja crema y metadatos de publicación. Estos patrones editoriales están fuera del cortinaje. El estante comparte cubiertas de proporción (3/4), tres colores de papel, lomo sugerido y motivos SVG. Sus títulos son ideas de próximas reseñas, acompañadas por su estado de disponibilidad. Las actividades distinguen «Fecha y sede por confirmar». No deben presentarse como libros reales ya reseñados ni eventos confirmados.

### Navigation

La cabecera de vidrio usa fondo crema translúcido, borde claro y `backdrop-filter: blur(16px) saturate(1.2)`. No es una regla para volver translúcidos los demás módulos: es un tratamiento de cabecera expresamente pedido por el usuario. Navegación activa y hover usan coral y una línea inferior. Los enlaces son nativos a páginas independientes; la página activa se declara con `aria-current="page"`. La lectura independiente conserva esta cabecera y un enlace de regreso a su sección, sin telón.

### Community Signature

Los PNG originales de la Escuela Herminio Almendros, aportados por Rodrigo y conservados con metadatos de procedencia y píxeles originales, se usan sin redibujar: versión negra en el cierre comunitario claro del inicio y blanca en el pie verde de las páginas. Conservan proporción (1584/830). La firma del pie mide (176px) de ancho en escritorio y (152px) en móvil; la firma comunitaria tiene máximo (220px), reducido a (144px) en móvil. El pie incluye enlaces a las tres páginas editoriales.

### Intro Scenes

Jardín (Boletines), ciudad (Cartelera) y bosque nocturno (Lecturas) tienen fondos, figuras y luces propios; nubes, banderines, estrellas y luciérnagas se mueven con animaciones CSS suaves. Las capas son decorativas; texto y enlaces son HTML. Si falla el script, se ve el primer acto sin telón ni etiqueta. En móvil la nota de novedades no se abre sola, para no tapar el escenario. Los accesorios de temporada siguen la fecha de Ciudad de México: la ventana de Muertos es del (20 de octubre) al (3 de noviembre), sin selector para visitantes. Navidad, Niñez y Cultura siguen pendientes.

## Do's and Don'ts

### Do:

- **Do** limitar el marco y la coreografía a la entrada, con un acto a la vez y flechas para moverse a mano.
- **Do** animar el escenario sólo con opacidad y transform, y pausarlo fuera de pantalla.
- **Do** mantener enlaces nativos a páginas editoriales y artículos, con URL e historial del navegador.
- **Do** compartir ilustraciones, fibra y tipografía entre la entrada y el sitio editorial.
- **Do** mantener la cabecera translúcida delgada solicitada, con contenido interior separado de sus bordes.
- **Do** respetar movimiento reducido y mostrar estados de próxima publicación cuando todavía no hay recomendaciones.

### Don't:

- **Don't** extender el telón a cartelera, libros, boletines ni lectura independiente.
- **Don't** reintroducir selectores de decorado o iluminación ni el foco cálido global de v3.
- **Don't** volver a ligar el teatro al scroll ni animar filtros o dimensiones del escenario: es lo que lo hizo pesado.
- **Don't** oscurecer el telón ni usar focos circulares o parpadeos en el apagón.
- **Don't** convertir los rótulos de 11px del sitio en mínimos de lectura del sistema.
- **Don't** presentar las próximas reseñas o ideas de actividades como publicaciones o eventos ya confirmados.

## Estructura de publicación

El sitio usa Astro estático. Las páginas y los artículos están en `src/pages/`, los componentes compartidos en `src/components/`, las publicaciones en archivos Markdown dentro de `src/content/articles/` y el estilo en `src/styles/`: Tailwind v4 (`tailwind.css`, con los colores y puntos de corte `compact`/`narrow`/`tiny` del sitio) convive con el CSS heredado de `global.css`, que queda en una capa anterior para que las utilidades de Tailwind siempre ganen. Los componentes nuevos y migrados usan utilidades; la entrada teatral sigue en `global.css`. Las imágenes y fuentes se sirven desde `/assets/`. Los avisos de prueba se retiraron por instrucción del usuario.
