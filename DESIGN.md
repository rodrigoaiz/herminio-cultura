---
name: Herminio · Teatro de papel (prototipo v3 · iluminación)
description: Registro provisional del teatro con transición de iluminación v3.
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
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(58px, 6.4vw, 96px)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(56px, 6vw, 88px)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  reader-headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(42px, 5vw, 64px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  scene-body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  reader-intro:
    fontFamily: "Manrope, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.6
rounded:
  control: "3px"
  paper-link: "3px 7px 4px 6px"
spacing:
  small: "8px"
  compact: "16px"
  regular: "24px"
  wide: "32px"
  sheet: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.paper-link}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  lighting-button:
    backgroundColor: "#42251dcc"
    textColor: "{colors.theatre-label}"
    rounded: "{rounded.control}"
    padding: "0 10px"
    height: "36px"
  button-text:
    textColor: "{colors.ink}"
    padding: "0 0 5px"
  season-select:
    backgroundColor: "#42251dcc"
    textColor: "{colors.theatre-label}"
    rounded: "{rounded.control}"
    padding: "9px 10px"
  motion-button:
    backgroundColor: "#42251dcc"
    textColor: "{colors.theatre-label}"
    rounded: "{rounded.control}"
    height: "36px"
    width: "36px"
  playbill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "36px 48px"
    width: "min(650px, 100%)"
---

# Design System: Herminio · Teatro de papel v3

## Overview

**Creative North Star: "Teatro de papel"**

Esta es la revisión v3 del prototipo animado, todavía provisional. La nueva referencia nocturna aportada por el usuario pide una transición visible de iluminación: día cálido, atardecer violeta y noche azul con luna, estrellas y luciérnagas de papel. Esta mejora se aplica al teatro existente, sin cambiar su dirección ni el recorrido editorial. Registra la nueva crítica del usuario y reemplaza las decisiones de la primera maqueta: cortinaje más realista de borde a borde, contenido editorial detrás de la boca del teatro, textura visible de cartón, sombras entre planos más fuertes, atmósfera teatral y titulares serif. Manrope se conserva para el cuerpo porque el usuario valoró su lectura.

La cortina frontal y las fibras de papel son materiales raster generados; las figuras infantiles siguen siendo ilustración SVG original con textura aplicada. No hay fotografía de sustitución de personajes. El recorrido usa cuatro capítulos con dos paneles horizontales cada uno, conducidos por scroll vertical nativo y pausas de lectura. Los artículos comparten la cortina fija, con una hoja de papel para el texto. No se da por aprobada la proporción final de títulos, planos ni apertura.

**Key Characteristics:**

- Cortina material de borde a borde y boca fija sobre contenido y figuras.
- Cormorant Garamond local en títulos; Manrope local en cuerpo y controles.
- Cartón texturado, transición día–noche, degradados de luz y sombras entre capas.
- Cuatro capítulos, dos paneles por capítulo y pausas antes y después del desplazamiento lateral.
- Pausa y movimiento reducido, navegación directa y contenido HTML real.

## Colors

La paleta base combina papel crema, tinta verde y acentos de terracota con la luz cálida de la cortina. Los valores del frontmatter registran la implementación actual, no una identidad final aprobada.

### Primary
- **Coral teatral** (`coral`): palabras destacadas de titulares, detalles y hover de enlaces de texto.
- **Óxido de lectura** (`rust`): primer dato de los metadatos y notas del libro.

### Secondary
- **Amarillo de papel** (`yellow`): selección de texto.
- **Azul de foco** (`blue`): contorno de foco; también aparece en los recortables originales.

### Neutral
- **Papel crema** (`paper`): hojas, fondo de texto y texto del enlace principal.
- **Tinta verde** (`ink`): texto editorial y enlace principal.
- **Tinta activa** (`ink-hover`): hover del enlace principal.
- **Madera oscura** (`wood`): fondo exterior del teatro.
- **Luz de sala** (`theatre-label`): navegación y controles sobre el cortinaje.

Las figuras SVG conservan colores literales de la ilustración original; no todas sus prendas o cubiertas derivan de las nuevas variables de interfaz. El verde `--mint` sigue declarado en CSS, pero no se registra como token de aplicación porque no tiene asignación activa en esta versión.

**The Material Light Rule.** La textura, los degradados de luz y las sombras entre planos pertenecen al teatro solicitado; se conservan como material e iluminación, no se eliminan por una preferencia genérica por superficies planas.

El cielo cotidiano usa una luz radial cálida; colinas y pliegue del libro usan degradados para volumen. Día de Muertos cambia la luz a lavanda y modifica colinas y accesorios. Los temas de Navidad, Día de la Niñez y Día de la Cultura siguen pendientes. Los colores literales de cada degradado y escena permanecen ajustes locales; no se promueven a nuevos tokens globales por aparecer en una comprobación mecánica.


### Lighting states

La variable `--night` recorre de (0) a (1). Superpone un cielo azul violeta y matiza figuras, cortina, nubes y colinas; la luna, las estrellas suspendidas y las luciérnagas aparecen con ese mismo valor. Los halos pertenecen a fuentes de luz literales y usan degradados radiales, sin convertirlos en sombras de resplandor para controles.

La presentación conserva tinta verde y énfasis coral durante todo el recorrido, incluido el enlace principal oscuro. Un foco radial cálido detrás de la copia aumenta continuamente con `--night` y permanece iluminado durante la noche; no hay inversión de paleta del texto ni del botón. Las hojas editoriales conservan su papel claro.

**The Lit Paper Rule.** La noche transforma la luz del teatro; la presentación y las hojas editoriales conservan áreas cálidas iluminadas para leer. Los colores de cielo, luna, estrellas y colinas son material de escena, no nuevos colores globales de interfaz.

**The Continuous Reading Light Rule.** El foco cálido detrás de la copia aumenta con `opacity: clamp(0, calc(var(--night) * 2), .96)` y permanece durante la noche. La tinta verde y el énfasis coral se mantienen constantes; no hay encendido binario del foco ni cambio de paleta del texto.

## Typography

**Display Font:** Cormorant Garamond local, con `Georgia, serif` de reserva.  
**Body Font:** Manrope local, con `sans-serif` de reserva.

**Character:** serif cultural de peso medio y titulares compactos frente a un cuerpo sans claro. Esta incorporación responde a la petición explícita del usuario; reemplaza el sistema de títulos Manrope del primer prototipo.

### Hierarchy
- **Display / Headline:** bienvenida y presentación de cada capítulo; valores base en el frontmatter.
- **Reader headline / Title:** título y subtítulos del artículo, respectivamente.
- **Body:** texto base; los párrafos y listas del artículo amplían el interlineado (1.85).
- **Scene body / Reader intro:** descripción de escena y entradilla del artículo.
- **Label:** navegación de escritorio; enlaces principales y de texto usan (13px), peso (700).
- **Titulares de hojas:** manifiesto y boletín (60px), cartelera (64px), páginas de libro (54px), con peso serif (600) y espaciado (-0.035em). Son tratamientos de estas piezas, no una escala adicional universal.

Los titulares de presentación pasan a (68px) hasta (1100px), (57px) hasta (650px) y (49px) hasta (370px). En pantallas desde (1700px), bienvenida usa (104px) y otros capítulos (96px). La última regla de escritorio bajo, hasta (700px) de alto y desde (651px) de ancho, fija los titulares de presentación en (62px).

Los metadatos, estado, selector y varios apoyos usan (11px); la nota de prototipo usa (10px). Navegación móvil y enlaces móviles también llegan a (11px), y los párrafos del libro llegan a (11px) hasta (370px). Se registran para no perder la cascada real, pero **no se canonizan como mínimos de lectura ni como solución de ajuste**. Su legibilidad queda sujeta a la revisión visual de esta maqueta.

**The Two Voices Rule.** Los títulos culturales usan Cormorant Garamond y los párrafos, navegación y controles conservan Manrope.

## Layout

La ventana escénica es sticky, ocupa (100svh) y contiene todo el contenido editorial del recorrido. Cuatro capítulos superpuestos se activan de uno en uno; cada capítulo tiene una tira de dos paneles de ancho (100vw). El scroll vertical es la línea de tiempo y mueve la tira horizontalmente. El primer capítulo tiene una distancia de (2.8) alturas escénicas y los otros (3.4) cada uno; la altura del documento suma esas distancias y una ventana adicional.

Cada panel de escritorio se distribuye dentro de la apertura con relleno (170px 14vw 136px). La copia ocupa el (49%) y las figuras el lado derecho. Las hojas del segundo panel se centran. El área útil debe revisarse contra la transparencia real del material de cortina; sus bordes opacos no son espacio disponible para texto. La indicación de scroll forma parte del flujo de la copia de bienvenida, con margen superior (28px), reducido a (18px) en móvil; no flota sobre el enlace principal.

La cabecera fija actual mide (106px), con z-index (80); la franja inferior mide (85px), con z-index (85). Permanecen encima de la cortina para navegación y controles. Hasta (1100px) la cabecera mide (96px), hasta (650px) mide (100px), y en escritorio bajo mide (85px). En móvil la franja inferior mide (90px). Estos valores son los del código, no las dimensiones del área transparente del telón.

En móvil, hasta (650px), la copia ocupa el ancho interior, las figuras se sitúan abajo, se ocultan las leyendas de escena y el libro abierto apila sus páginas. Los breakpoints adicionales son (370px), (1100px) y (1700px), más la condición de escritorio bajo. La lectura conserva el cortinaje fijo, con una hoja de ancho máximo (820px), relleno (38px 48px) y márgenes verticales amplios; en móvil la hoja ocupa el (76%) del ancho y ajusta su relleno. En pantallas de hasta (370px), la luna baja al (60%) de alto, a (14%) del borde derecho y un ancho (42px), fuera del titular. El cuerpo de la página de lectura establece un contexto `flow-root` y altura mínima (100vh), para contener los márgenes de la hoja sobre el fondo continuo.

## Elevation & Depth

La profundidad actual combina un marco raster realista al frente, SVG texturado, capas de colinas, luz radial, viñeta y sombras de mayor presencia. La cortina fija ocupa toda la ventana con z-index (60), `object-fit: fill` y sin capturar clics. Figuras y contenido editorial quedan detrás. Los controles persistentes se mantienen en la capa frontal de navegación.

### Shadow Vocabulary
- **Pieza de cartón:** `drop-shadow(4px 12px 6px #3b281a42)`, después del filtro de fibras.
- **Conjunto de escena:** `drop-shadow(7px 24px 12px #15182f55)`.
- **Hoja escénica:** `12px 22px 30px #36231845, 2px 4px 5px #36231824`.
- **Cortina frontal:** `drop-shadow(8px 15px 12px #160e1f65)`.
- **Luz periférica:** `inset 0 0 90px 15px #2d1c1a50`, combinada con degradado radial.

**The Aperture Rule.** El contenido editorial en movimiento y las figuras pasan detrás de la cortina fija. El espacio útil es la apertura central, no el rectángulo completo de la ventana.

**The Reading Hold Rule.** Cada panel tiene un tramo de reposo antes del desplazamiento lateral; los capítulos se activan de uno en uno.

El tramo de reposo usa unidades (0.65) y el de viaje (1); el desplazamiento interpola con `t*t*(3-2*t)`. Las piezas tienen distintas profundidades laterales; las colinas, nubes y sol se desplazan menos que el contenido. El estado inactivo de capítulos y paneles usa `inert` y `aria-hidden`. Pausa o movimiento reducido redondean a un panel completo y eliminan la deriva entre planos; el scroll nativo sigue permitiendo consultar todos los paneles.


La iluminación automática toma el progreso global normalizado por capítulos: empieza a cambiar al (10%) y alcanza noche completa al (78%), con interpolación `t*t*(3-2*t)`. El atributo de luz etiqueta atardecer desde (0.28) y noche desde (0.52); esas etiquetas son metadatos y no condicionan el foco ni la tinta. El control permite recorrer automático → noche → día. Cada cambio manual interpola durante (1400ms) mediante una animación acotada; pausa, movimiento reducido o documento oculto fijan el valor de destino sin interpolación. La escenografía estacional sigue siendo independiente de la iluminación.

Las reglas añadidas al final del CSS prevalecen sobre los filtros v2: la escena multiplica su brillo por `1 - night * .32` y su saturación por `1 - night * .12`; el cortinaje usa `.48` y `.28`, respectivamente. Las nubes reducen brillo con `.46`. Las hojas y leyendas se atenúan solo con `.07`, manteniéndose claras. La página de artículo no monta el motor del recorrido y conserva el valor inicial diurno (0).

## Shapes

El telón de borde a borde es un material generado con transparencia central, pliegues amplios y borde inferior poco profundo. Las figuras siguen siendo siluetas SVG originales, sencillas y coloridas; un filtro les aplica la textura de fibras. Las hojas escénicas conservan esquinas mayormente rectas, pequeños giros y alguna unión curva en el libro. Los enlaces tienen radios asimétricos pequeños y los controles radios regulares mínimos.

Los materiales son `prototipo/assets/curtain-frame-v2.webp` y `prototipo/assets/paper-fibers-v2.webp`; sus prompts y procedencia están en `prototipo/assets/materials-v2-prompts.md`. La textura se usa por mezcla multiply y por el filtro SVG `paper-matte`, recortado a la silueta original.

## Components

### Buttons

El enlace principal usa tinta verde y papel crema, peso sans (700), flecha SVG y radios asimétricos. En hover sube (2px) y cambia de tinta; en pulsación baja (1px). El enlace conserva su transición base (0.4s) para desplazamiento y fondo, junto con su tinta y papel en todos los estados de iluminación. El enlace de texto es más ligero: línea inferior de (1px), separación inferior (5px) y hover coral. Los enlaces de texto también usan flechas SVG dibujadas, de tamaño (23px), trazo (1.5) y sin relleno.

El control de iluminación comparte el fondo y borde de los controles; muestra icono SVG y nombre de modo, comunica el modo actual y el siguiente mediante `aria-label`, y en móvil conserva solo el icono en un ancho (34px).

El control de movimiento es cuadrado, de fondo marrón translúcido, borde crema translúcido e icono SVG. Comunica pausa con `aria-pressed` y queda deshabilitado si el dispositivo exige movimiento reducido. El foco compartido es azul (3px), con separación (5px).

### Metadata

Tipo y fecha se muestran como texto flexible con separación horizontal, sin cápsulas ni fondos. El primer dato es óxido. En la hoja de boletín, la línea tiene separadores finos arriba y abajo. No hay filtros por tags implementados.

### Cards / Containers

Las piezas son objetos editoriales de papel, no una retícula de tarjetas: manifiesto suspendido, programa mensual, libro abierto y hoja de boletín. Comparten fibras y sombra estructural, pero cada una tiene su ancho, relleno y giro. El programa mensual incluye filas separadas por líneas finas; el libro incluye sombra de pliegue central. El aviso del lector es una superficie de papel más oscuro, sin sombra propia ni radio especial.

### Inputs / Fields

El indicador de escena es un círculo plano, sin resplandor. La nota de prototipo lleva fondo explícito de madera oscura, relleno (2px 8px) y ancho ajustado al contenido para preservar su contraste.

El selector nativo de escenografía comparte fondo marrón translúcido y borde crema con el control de movimiento. Las opciones incluyen modo según fecha, cotidiano y Día de Muertos. No hay inputs de texto ni estados de formulario implementados.

### Navigation

La marca y los enlaces viven sobre la cortina, con texto claro y sombra direccional de legibilidad (`0 2px 7px #0009`). Un subrayado claro de (1px) identifica hover y escena activa. La navegación directa lleva al inicio del capítulo y sincroniza el hash; las flechas izquierda y derecha también recorren paneles cuando el foco pertenece al escenario. La lectura comparte cabecera y cortina fijas.

### Persistent Theatre

La cortina decorativa queda fuera del árbol accesible; encabezados, enlaces y publicaciones son HTML. El segundo panel de cada capítulo forma parte del mismo viaje horizontal detrás de la boca. Si falla el script, el CSS deja los capítulos y paneles en flujo vertical y esconde los controles del recorrido.

## Do's and Don'ts

### Do:

- **Do** conservar la cortina fija hasta los cuatro bordes y todo contenido editorial móvil detrás de ella.
- **Do** usar Cormorant Garamond para títulos culturales y Manrope para lectura y controles.
- **Do** conservar fibras, sombras entre planos y degradados de iluminación acordes con el teatro pedido.
- **Do** dar a cada panel tiempo de lectura y comprobar el área visible dentro de la apertura en cada tamaño.
- **Do** conservar navegación directa, foco visible, pausa y preferencia de movimiento reducido.
- **Do** coordinar la luz nocturna de figuras y cortina con áreas cálidas de lectura y tinta constante.
- **Do** tratar los tokens y proporciones como una revisión v3 provisional, no como aprobación final.

### Don't:

- **Don't** reintroducir la regla anterior que sacaba los artículos de la cortina: fue reemplazada por la petición del usuario.
- **Don't** convertir los rótulos de 10–11px en mínimos obligatorios de lectura.
- **Don't** confundir estos materiales raster con la cadena de video de scroll-world: el recorrido sigue siendo HTML, CSS, SVG y JavaScript nativos.
- **Don't** sustituir las figuras originales de cartón por fotografía ni convertir los textos de muestra en publicaciones reales.
