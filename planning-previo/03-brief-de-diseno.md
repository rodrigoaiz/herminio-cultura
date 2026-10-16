# Brief de diseño

Sigue la estructura de brief de diseño estándar del proyecto (impeccable/shape), aplicada al rediseño completo del sitio.

## 1. Resumen de la funcionalidad
Rediseño del sitio institucional de la Escuela Herminio Almendros, un colegio de preescolar y primaria en Tlalpan, CDMX, con una pedagogía activa y constructivista y un proyecto iniciado en 1980. La relación histórica directa con Herminio Almendros Ibáñez y la tradición Freinet está pendiente de confirmación institucional. El sitio debe comunicar con claridad la propuesta pedagógica a familias que están comparando opciones y ofrecer un camino siempre visible, pero nunca agresivo, hacia el proceso de ingreso.

## 2. Objetivo principal y acciones observables
En palabras del equipo del proyecto: *"todo es importante, pero lo más importante es conocer la propuesta, saber por qué es una opción diferente"*. El objetivo principal es que una familia comprenda esa diferencia mediante evidencia. Las acciones indicativas son recorrer una práctica completa, consultar Preescolar o Primaria y revisar el proceso de ingreso. Agendar la plática informativa es la conversión secundaria: debe estar siempre visible y accesible, pero no competir con la comprensión de la propuesta. El sitio convence mostrando, no empujando un formulario.

## 3. Dirección de diseño
Mensaje rector: **Aquí, cada niña y niño descubre el mundo, no lo memoriza.** La portada debe comunicarlo de forma inmediata mediante una escena real, una explicación breve y acciones claras. El carácter editorial y documental organiza la evidencia en el resto del sitio, pero no se convierte en un eslogan ni obliga a que cada sección parezca una publicación.

**Principio compositivo:** experiencia → práctica → comprensión. Cada declaración pedagógica importante debe relacionarse con una escena o proceso reconocible; no basta con ilustrarla mediante un icono o una fotografía ambiental.

**Evitar explícitamente** (ver anti-referencias en [`.impeccable.md`](../../.impeccable.md)): gradientes SaaS, iconografía escolar o tecnológica genérica, fotos de stock, paleta salvia/terracota usada como cliché de educación alternativa, grids uniformes, collages de falsas postales, garabatos y escritura manual simulada, sellos/badges como elemento hero.

**Buscar:** fotografía documental en secuencias, facsímiles autorizados, transcripciones accesibles, fechas, autorías, pies descriptivos y conexiones visibles entre archivo y práctica actual. La dirección completa, la paleta provisional y los módulos propios se definen en [05-direccion-visual-identidad.md](05-direccion-visual-identidad.md).

## 4. Estrategia de layout
Retícula editorial estable con rieles para fecha, autoría y contexto, y rupturas justificadas por la evidencia. El ritmo alterna lectura, documento y secuencia fotográfica, no bloques de texto e imagen repetidos mecánicamente. La fotografía conserva su proporción cuando sea posible. Los testimonios se presentan con contexto y atribución, no como tarjetas ni carrusel. El CTA de contacto vive en el header y al cierre de contenidos relevantes; en móvil puede mantenerse alcanzable sin convertirse en un widget promocional que tape la lectura.

## 5. Estados clave
- **Inicio**: primera vista (hero + frase de propuesta), scroll con las secciones descritas en la arquitectura del sitio.
- **Propuesta pedagógica**: vista de "deep dive" con los pilares (asamblea, textos libres, hortaliza, trabajo con el cuerpo, rincones).
- **Preescolar / Primaria**: narrativa "un día en..." + materias.
- **Comunidad**: galería/celebraciones, con estado de carga para imágenes y video.
- **Ingreso**: pasos del proceso, con estado que aclara costos y tiempos sin ambigüedad.
- **Contacto**: formulario con estados de envío, éxito y error; enlace directo a WhatsApp.
- **Navegación móvil**: menú colapsado, CTA de contacto siempre alcanzable.
- **404**: tono coherente con la voz cálida del resto del sitio, no un error genérico.

## 6. Modelo de interacción
Mayormente navegación editorial estática, con interacción ligera y funcional. Las secuencias fotográficas pueden revelarse de forma narrativa y el formulario debe tener validación clara. Testimonios, costos, tiempos y pasos de ingreso permanecen visibles sin carruseles ni acordeones. No se anima cada bloque por defecto. Se evita cualquier movimiento que se sienta tecnológico o llamativo; toda animación respeta `prefers-reduced-motion`.

## 7. Requisitos de contenido
- Declaración de propuesta pedagógica (refinada a partir del texto actual de misión).
- Descripciones narrativas por pilar, reescritas a partir del copy real ya identificado: asamblea, textos libres, hortaliza, trabajo con el cuerpo, inglés (ver investigación).
- Testimonios de familias/egresados (por conseguir — recurso disponible según lo indicado por el equipo).
- Copy del proceso de ingreso con tono de bienvenida, no de trámite burocrático.
- Microcopy de CTA que invite, no presione: por ejemplo "Conoce la propuesta" o "Agenda una plática", nunca "¡Inscríbete ya!" ni contadores de urgencia.

## 8. Referencias de implementación
Además de [05-direccion-visual-identidad.md](05-direccion-visual-identidad.md), las guías externas de las skills `impeccable` más relevantes son:
- `spatial-design.md` — para la composición editorial asimétrica y el ritmo visual.
- `typography.md` — para elegir una pareja tipográfica cálida y evitar los defaults corporativos.
- `color-and-contrast.md` — para probar en OKLCH la paleta extraída del espacio real y distinguir el azul material de los códigos corporativos genéricos.
- `motion-design.md` — para movimiento orgánico y no "tech".
- `ux-writing.md` — para el tono de voz cercano y sin superlativos en toda la microcopy.

Estas guías no forman parte del repositorio y deben tratarse como criterios de trabajo, no como especificación versionada del proyecto.

## 9. Criterios de éxito visual
- El sitio sigue siendo reconocible al verlo sin logotipo y en escala de grises.
- Cada afirmación pedagógica principal se acompaña de una escena, una voz o un documento real.
- Al menos tres formatos propios —texto libre, acta de asamblea, cuaderno de campo, ensayo fotográfico o pieza de archivo— aparecen con contenido real.
- Ningún recurso manual, testimonio ni dato se usa como decoración o placeholder en una versión presentable.
- La portada no puede confundirse con una plantilla Montessori/Reggio ni con la primera exploración estructural.

## 10. Preguntas abiertas
- Alcance final del rediseño de marca: ¿nuevo logo, o solo refresco de paleta/tipografía sobre el logo actual?
- ¿Quién autoriza el uso de fotos/video de niñas y niños (permiso de imagen)?
- ¿Hay una preferencia real por Astro vs. otro framework, o se delega la decisión técnica? (ver [04-plan-tecnico.md](04-plan-tecnico.md))
- ¿Qué textos libres, anuarios, actas, cuadernos y piezas de archivo pueden digitalizarse y publicarse?
- ¿Quién aprobará la política editorial para autoría y representación de menores?
