# Dirección visual e identidad

> Estado: dirección creativa implementada en una [propuesta gráfica estática](../../propuesta-visual/) y pendiente de validación con la escuela. Sustituye el enfoque anterior de seleccionar componentes de plantillas. La propuesta demuestra el sistema, pero no debe considerarse todavía una identidad institucional aprobada ni código de producción.

## 1. Diagnóstico

La estrategia verbal ya contiene una diferencia real: Herminio Almendros no ofrece una infancia genérica ni una colección de servicios escolares; muestra una pedagogía activa mediante prácticas que dejan huella: asambleas, textos libres, libros colectivos, observaciones de la hortaliza, trabajo corporal y una ambientación antes del ingreso.

La primera exploración visual no llevó esa diferencia al diseño. Resolvió la navegación, el orden de secciones y algunos patrones de interfaz, pero siguió la fórmula reconocible de una plantilla escolar:

- hero partido en texto y fotografía;
- paleta verde y terracota como abreviatura de educación alternativa;
- serif de cartel más serif editorial;
- pilares numerados con iconos genéricos;
- bloques alternados y CTA en forma de pastilla;
- testimonio aislado y botón flotante de WhatsApp;
- placeholders que ocupan el lugar de la evidencia real.

El problema no se corrige agregando collages, garabatos, flechas circulares o más componentes. Esos recursos pueden hacer el sitio más vistoso, pero también más parecido a una plantilla "creativa". La identidad debe nacer de lo que esta comunidad produce y conserva.

## 2. Tesis creativa

### Descubrir el mundo, no memorizarlo

Herminio Almendros se presenta como un lugar donde aprender significa explorar, hacer, conversar, escribir y volver a intentar. La frase **“Aquí, cada niña y niño descubre el mundo, no lo memoriza”** resume esa diferencia de manera comprensible para una familia y conecta directamente con las prácticas actuales.

La secuencia que organiza el contenido es:

**experiencia → práctica → comprensión**

Ejemplo: una página no afirma solamente que la asamblea enseña convivencia. Muestra una situación reconocible, explica cómo se acompaña y permite entender qué desarrolla esa práctica. Textos libres conserva su dimensión de publicación, pero deja de funcionar como metáfora para toda la identidad de la escuela.

### Personalidad visual

- **Franca**: la información se presenta sin lenguaje promocional ni mecanismos de presión.
- **Material**: aparecen papel, tinta, tierra, pintura, mobiliario, herramientas, cuerpos y huellas de uso reales.
- **Colectiva**: conviven voces infantiles, docentes, familiares y de archivo; la institución no monopoliza el relato.

### Lo que el concepto no significa

- No presenta a la escuela completa como periódico, editorial o imprenta; esos lenguajes pertenecen solo a contenidos que realmente los necesitan.
- No es un scrapbook infantil ni una simulación nostálgica de imprenta antigua.
- No usa textura de papel, cinta adhesiva, garabatos o caligrafía falsa para aparentar trabajo manual.
- No convierte dibujos infantiles en ornamento sin autoría ni contexto.
- No confunde "orgánico" con cubrir todo de verde salvia y beige.
- No usa la imagen de niñas y niños como argumento comercial descontextualizado.

## 3. Materia prima propia

Las referencias principales deben provenir de la escuela, no de sitios comerciales externos:

1. **Textos libres y anuarios**: portadas, páginas, tipos de papel, sistemas de edición y fragmentos autorizados.
2. **Asambleas**: preguntas, acuerdos, diagramas o formas reales de registro, anonimizados cuando corresponda.
3. **Cuadernos de campo y hortaliza**: observaciones, fechas, dibujos, cambios y secuencias de proceso.
4. **Archivo histórico**: fotografías, programas, impresos y testimonios desde 1980, con fecha y procedencia.
5. **Espacio vivido**: color del mobiliario, piso, cortinas, herramientas y luz natural, sin convertir las instalaciones en promesa de venta.
6. **Fotografía documental actual**: acciones, relaciones y procesos; no retratos posados con utilería escolar.

La fotografía disponible en [`docs/img/hero.png`](../img/hero.png) ofrece una base más específica que la paleta verde/tierra del primer prototipo: naranja de mobiliario, azul intenso del piso y las cortinas, luz cálida, superficies blancas de trabajo y ropa cotidiana. La futura paleta debe contrastarse con más material real, pero puede comenzar ahí.

## 4. Sistema visual propuesto

### 4.1 Color

Paleta provisional extraída del espacio real, pendiente de pruebas de contraste y validación con una muestra fotográfica más amplia:

| Rol | Referencia | Valor inicial | Uso |
|---|---|---|---|
| Papel | luz y superficies cálidas | `oklch(96% 0.018 82)` | fondo principal y áreas de lectura |
| Tinta | carbón cálido | `oklch(23% 0.025 45)` | texto, navegación y líneas editoriales |
| Naranja taller | mobiliario real | `oklch(62% 0.17 42)` | acento principal, llamadas y marcas de edición |
| Azul movimiento | piso y cortinas | `oklch(45% 0.16 250)` | contrapunto, secciones corporales y archivo visual |
| Verde hortaliza | material vegetal real | `oklch(52% 0.10 145)` | uso semántico y puntual en contenidos de naturaleza |

El naranja y el azul no deben repartirse de forma uniforme ni convertirse en fondos decorativos alternados. El sitio será mayoritariamente papel y tinta; el color aparecerá cuando ayude a clasificar, señalar o conectar una evidencia. El verde deja de ser el color maestro para evitar el cliché "escuela alternativa = naturaleza".

### 4.2 Tipografía

La combinación `Bevan` + `Vollkorn` del prototipo queda como exploración descartada: lleva el sitio hacia un cartel artesanal retro y no resuelve por sí misma la voz colectiva.

Ruta tipográfica recomendada para prototipar:

- **Chivo variable** para titulares, navegación, índices y datos: directa, robusta y contemporánea, sin tono infantil.
- **Literata variable** para lectura, testimonios, pies y piezas de archivo: diseñada para texto editorial sostenido y con buen soporte para español.

No se usará una tercera fuente manuscrita. La escritura manual solo aparecerá como facsímil de un documento real, junto a una transcripción accesible. Antes de aprobar las fuentes se probarán, como mínimo, un titular de portada, un texto libre, una tabla de costos, una cita extensa, pies de foto y la navegación móvil.

### 4.3 Retícula y composición

- Retícula editorial estable de 12 columnas en escritorio y 4 en móvil.
- Columna de lectura entre `60ch` y `70ch`; los textos extensos no ocupan todo el ancho.
- Un riel estrecho para fecha, autoría, grupo, tipo de documento y referencias, como en una publicación.
- Rupturas de retícula solo cuando una fotografía, facsímil o secuencia necesite más espacio.
- Separación mediante espacio, reglas finas y cambios de escala; no mediante tarjetas redondeadas repetidas.
- Imágenes con su proporción original cuando sea posible. No todo se recorta a cuadrados ni se apila como postal.
- Pies de foto siempre visibles y descriptivos; no chips flotantes sobre la imagen.

### 4.4 Forma y detalle

- Líneas de edición, folios, fechas, números de página y marcas de registro pueden articular el sistema si cumplen una función real.
- Los índices grandes se reservan para secuencias verdaderas, no como decoración de cada sección.
- Los iconos de brote, libro, globo de diálogo, foco, lápiz y birrete se evitan: sustituyen evidencia por símbolos universales.
- Bordes ligeramente rectos y radios mínimos. No usar pastillas como estilo predeterminado de botones, captions o etiquetas.
- Ningún recurso manual será simulado. Una marca, dibujo o subrayado debe proceder de material real, tener autoría y aportar contenido.

## 5. Dirección fotográfica y ética editorial

### Qué fotografiar

- procesos antes que resultados;
- manos, herramientas, materiales y relaciones, además de planos generales;
- secuencias de tres a seis imágenes que permitan entender una acción;
- intervención docente y colaboración entre pares, no solo niñas y niños aislados;
- momentos cotidianos, incluyendo concentración, duda y ensayo, no únicamente sonrisas.

### Cómo tratar la imagen

- luz y color naturales, sin presets cálidos uniformes;
- encuadres que expliquen el contexto de la actividad;
- retoque limitado a exposición, color y protección de identidad;
- fecha, actividad y contexto en el pie;
- evitar superposiciones decorativas que oculten partes de la escena.

### Condiciones de publicación

Antes de usar material de menores debe existir una política aprobada que defina consentimiento, vigencia, revocación, nombres/anonimización, usos en redes, conservación y tratamiento de textos o dibujos. La selección debe preservar dignidad y agencia: no publicar situaciones vulnerables, información sensible ni imágenes que conviertan un rostro en reclamo publicitario. Cuando una pieza tenga autoría infantil, se acordará cómo acreditarla sin exponer datos personales.

## 6. Módulos propios

Los primeros componentes no deben ser tarjetas, botones o acordeones, sino formatos que traduzcan prácticas de esta escuela.

### Práctica en contexto

Formato para explicar una práctica sin volverla abstracta. Combina una escena, una explicación docente y lo que esa experiencia ayuda a desarrollar. Puede sumar una voz o documento cuando exista material autorizado, pero no depende siempre de ellos ni forma un grid de piezas idénticas.

### Texto libre

Facsímil autorizado de una página, transcripción accesible, contexto breve y nota sobre su publicación en el libro del grupo. El documento es contenido, no textura de fondo.

### Acta de asamblea

Pregunta o acuerdo anonimizado, fecha y explicación de cómo se construyó. Permite mostrar convivencia sin recurrir a frases abstractas sobre valores.

### Cuaderno de campo

Secuencia cronológica de observación: fecha, cambio observado, imagen o dibujo y nueva pregunta. Especialmente útil para hortaliza y ciencias.

### Ensayo fotográfico

De tres a seis imágenes con pies que narran una actividad completa. Sustituye el carrusel genérico: el usuario puede ver la secuencia sin descubrir contenido oculto.

### Un día en la escuela

Relato temporal que intercala acciones, voces y decisiones pedagógicas. Preescolar y Primaria comparten gramática, pero no duplican estructura ni copy.

### Proceso de ambientación

Secuencia completa y visible de ingreso, con duración, costo, responsables, qué vive la niña o el niño y qué puede esperar la familia. La información esencial no se oculta en acordeones.

### Pieza de archivo

Fotografía o impreso histórico con año, procedencia y relación con una práctica actual. Evita una línea del tiempo basada solo en cifras institucionales.

## 7. Composición de la página de inicio

La portada debe probar el sistema, no enumerar todas las páginas.

1. **Cabecera editorial**: nombre completo, navegación corta y acceso visible a ingreso; sin icono de brote ni eslogan secundario.
2. **Apertura**: una afirmación pedagógica concreta y una secuencia documental real. No hero partido 50/50 ni foto de stock dominante.
3. **Una práctica en profundidad**: una escena explicada en contexto para mostrar, desde el inicio, cómo funciona la escuela.
4. **Textos libres**: un texto o fragmento de anuario con contexto y transcripción.
5. **Tres recorridos distintos**: asamblea, hortaliza y cuerpo, cada uno con el formato que su evidencia requiera; no tarjetas equivalentes.
6. **Preescolar y Primaria**: dos entradas narrativas a "un día en...", diferenciadas por contenido y ritmo, no por dos paneles de color.
7. **Archivo vivo**: una pieza de 1980 o de otro momento verificable conectada con una práctica actual.
8. **Ingreso**: proceso completo resumido y enlace a costos/documentos. La invitación aparece como información de servicio.
9. **Contacto**: datos directos, horarios de atención y WhatsApp integrado; sin widget promocional que compita con la lectura.

El sitio debe seguir funcionando si una sección todavía no tiene fotografía: un documento, una cita contextualizada, una cronología o una composición tipográfica pueden sostenerla sin recurrir a gradientes de relleno.

## 8. Movimiento e interacción

- La navegación y los cambios de estado deben ser rápidos y discretos.
- Una secuencia fotográfica puede revelarse progresivamente como una narración, siempre respetando `prefers-reduced-motion`.
- No aplicar animación de entrada a cada bloque por defecto.
- No usar carruseles automáticos, contadores, parallax ni microinteracciones que vuelvan el sitio una demostración tecnológica.
- Los detalles pedagógicos pueden ampliarse, pero la evidencia y la información crítica permanecen visibles sin interacción.

## 9. Lectura de las referencias externas

Las imágenes de `docs/img/` son material de conversación, no un menú de componentes.

| Referencia | Qué aporta | Qué se rechaza |
|---|---|---|
| `hero.png` | color y materialidad reales; acción corporal; relación docente-grupo | usar una sola imagen como sustituto de una política fotográfica |
| `image.png` (North Bennet Street School) | protagonismo del hacer, secuencias de proceso y escala editorial | grilla promocional de programas y capas oscuras sobre toda fotografía |
| `site-01.png` a `site-04.png` (Gin School) | contraste tipográfico, aire y relación entre texto e imagen | lujo aspiracional, iconos genéricos y experiencia comercial como modelo narrativo |
| `image copy.png` (EduKids) | ningún rasgo identitario imprescindible | fotografía posada, garabatos simulados, stats, cards y lenguaje de landing SaaS |
| `image copy 2.png` (Eduvet) | algunas variaciones de escala y ritmo | collage que simula archivo, badges, acordeón ornamental y códigos universitarios genéricos |

No se trasladará un componente solo porque "se puede adaptar a la paleta". Para entrar al sistema debe responder afirmativamente: **¿este formato permite mostrar algo que solo Herminio Almendros puede decir o probar?**

## 10. Criterios de aceptación

Una nueva propuesta visual estará lista para evaluación cuando incluya Inicio, Propuesta pedagógica e Ingreso en escritorio y móvil y cumpla lo siguiente:

- cada afirmación pedagógica principal tiene evidencia contigua;
- al menos tres módulos propios se prueban con contenido real;
- la interfaz conserva carácter al verla en escala de grises y sin logotipo;
- no depende de stock, gradientes de placeholder ni iconos escolares;
- ninguna marca manual es simulada;
- costos, tiempos y pasos de ingreso permanecen visibles;
- fotografía y documentos tienen contexto, autoría y autorización definidos;
- tipografía, color, foco y navegación cumplen WCAG 2.2 AA;
- el diseño no parece un reskin de EduKids, Eduvet ni de una plantilla Montessori/Reggio;
- una persona puede explicar qué recuerda del sitio sin responder únicamente "verde", "cálido" o "bonito".

## 11. Decisiones necesarias antes de diseñar la siguiente versión

1. Confirmar con la escuela la relación con Herminio Almendros Ibáñez y la tradición Freinet antes de convertirla en relato de marca.
2. Inventariar textos libres, anuarios, actas, cuadernos y archivo histórico disponibles.
3. Confirmar qué fotografía y video cuentan ya con autorización de publicación.
4. Aprobar una política editorial para representación y autoría de menores.
5. Probar la paleta y la dupla `Chivo` + `Literata` con contenido real; tratarlas como hipótesis hasta esa revisión.
6. Definir si el rediseño incluye un nuevo logotipo. La interfaz no debe depender de resolverlo para adquirir identidad.
