# Plan técnico

## Stack recomendado
**Astro** como framework principal:
- El sitio es predominantemente estático/editorial → Astro genera HTML mínimo con JS solo donde se necesita, lo que favorece SEO y rendimiento.
- Contenido en Markdown/MDX (content collections), editable directamente por una persona con perfil técnico sin necesidad de un CMS pensado para perfiles no técnicos — coherente con lo definido en el alcance.
- "Islas" de interactividad solo donde haga falta (menú móvil, formulario de contacto y controles de galerías que no oculten contenido esencial).
- Despliegue sencillo y de bajo costo en Netlify o Vercel. GitHub Pages solo es viable si el formulario se resuelve con un servicio externo o una función alojada por separado.

**Alternativa viable**: Next.js, si se prevé crecer hacia funcionalidad dinámica (portal para familias, blog con backend, autenticación). Probablemente más peso del necesario para la v1 descrita en este plan.

Este punto queda como confirmación pendiente contigo antes de iniciar la construcción.

## Estructura de contenido propuesta
```
src/
  content/
    pilares/            # asamblea, textos-libres, hortaliza, trabajo-con-el-cuerpo, rincones.md
    testimonios/         # un archivo por testimonio
    celebraciones/       # un archivo o carpeta por ciclo escolar
  pages/                 # inicio, propuesta-pedagogica, preescolar, primaria, comunidad, ingreso, contacto
```

## Calidad no funcional
- **Rendimiento**: imágenes reales optimizadas (`astro:assets`, formatos AVIF/WebP), carga diferida (`lazy loading`) y objetivo de LCP ≤ 2.5 s en el percentil 75 de datos de campo. El perfil de pruebas de laboratorio se definirá antes del QA.
- **Accesibilidad**: WCAG 2.2 nivel AA como mínimo, con revisión automática y manual de contraste, foco, teclado, zoom, lector de pantalla, texto alternativo descriptivo y formularios con etiquetas asociadas correctamente.
- **SEO**: metadatos por página, datos estructurados `EducationalOrganization` (schema.org), `sitemap.xml`, Open Graph con fotografía real (no genérica) para que los enlaces compartidos reflejen la identidad del sitio.
- **Privacidad y cumplimiento**: separar el formulario público de contacto, la hoja/cuestionario de ingreso y la entrega posterior de documentos. Solo se digitalizarán los datos necesarios para cada flujo. Se requiere localizar o preparar un **Aviso de Privacidad** y someter el tratamiento de datos de menores, conservación y proveedores a revisión jurídica conforme a la normativa vigente.
- **Analítica**: considerar una herramienta respetuosa de la privacidad (p. ej. Plausible o Fathom) en vez de una analítica que perfile en detalle, dado que parte del público navega buscando información sobre menores.

## Integraciones
- WhatsApp Business (el número ya existe) vía enlace `wa.me` con mensaje prellenado.
- Mapa de ubicación de Tlalpan mediante enlace externo. Un mapa embebido solo se cargará tras definir el tratamiento de solicitudes y cookies de terceros.
- Redes ya existentes (Facebook, Instagram) enlazadas en header/footer.

## Migración de contenido existente
- Reescribir —no copiar tal cual— los textos ya identificados como material valioso (asamblea, textos libres, hortaliza, trabajo con el cuerpo, inglés), hoy dispersos en más de 15 páginas de Wix, y consolidarlos en la nueva arquitectura (ver [02-arquitectura-del-sitio.md](02-arquitectura-del-sitio.md)).
- Evaluar si se rescata el archivo de "Celebraciones" 2020–2025.
- Retirar el contenido de "En pandemia" de la nueva arquitectura, conservando un respaldo fuera de navegación si la escuela lo requiere.

## Roadmap sugerido
1. **Fase 0 (actual)** — planificación y propuesta gráfica estática de Inicio; la dirección todavía requiere validación institucional.
2. **Fase 1** — validación de la identidad y prototipos de Propuesta pedagógica e Ingreso con contenido real.
3. **Fase 2** — sistema de diseño base (tipografía, color, componentes) siguiendo el brief de diseño.
4. **Fase 3** — maquetación de todas las páginas con contenido real (fotografía, testimonios).
5. **Fase 4** — QA (accesibilidad, rendimiento, revisión de copy con la escuela) y lanzamiento.

## Abiertas / a confirmar
- ¿Astro o prefieres Next.js/otra alternativa?
- ¿Dominio y hosting actuales? ¿Quién los administra hoy?
- ¿Existe ya un Aviso de Privacidad vigente?
- ¿El formulario de contacto debe notificar por correo, WhatsApp, o integrarse a algún CRM/hoja de cálculo existente?
