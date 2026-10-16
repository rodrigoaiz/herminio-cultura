# Teatro de papel · prueba de movimiento

Abrir desde un servidor estático en esta carpeta:

```sh
python3 -m http.server 0 --bind 127.0.0.1
```

Abrir la dirección local con el puerto disponible que imprima la terminal. No necesita instalar dependencias ni compilar. El prototipo usa HTML, CSS, JavaScript, ilustraciones SVG originales y los materiales de cortina y papel generados. Manrope y Cormorant Garamond se sirven localmente; las licencias acompañan los archivos de fuente.

Cuatro capítulos de dos paneles con navegación directa, tres formatos de lectura de muestra y selector para comparar decorado cotidiano y Día de Muertos. El modo automático usa el calendario de Ciudad de México (ventana de demostración 20 de octubre–3 de noviembre). Los plazos definitivos se acordarán con la comisión.

No usa el motor de videos de scroll-world: prueba el teatro por capas, adecuado para sustituir personajes y accesorios. Navidad, Niñez y Cultura aún no están ilustradas. Los cambios de temporada no requieren base de datos.

Los contenidos editoriales son demostrativos y se identifican como tales. No es un sitio publicado ni una implementación completa de archivos, filtros o gestión editorial. La salida final recomendada sigue siendo estática con Astro; esta prueba valida arte, navegación y movimiento antes de adoptar el stack.


## Refinamiento 2

El telón es ahora una imagen con alpha real que cubre los cuatro bordes de la ventana y se mantiene por encima de las figuras, los textos y las hojas. El marco también acompaña las páginas de lectura. La fibra de cartón es un recurso raster generado, aplicado al fondo, a las hojas y mediante filtros a los recortables. Cormorant Garamond local acompaña a Manrope como serif de títulos.

El scroll vertical nativo controla cuatro capítulos de dos paneles horizontales, con reposo de lectura en cada panel y un solo capítulo activo. También se puede navegar por enlaces o usar las flechas izquierda/derecha. Pausa y movimiento reducido eliminan el desplazamiento suave entre paneles.

Los recursos y sus prompts exactos están documentados en [assets/materials-v2-prompts.md](assets/materials-v2-prompts.md); se usó el generador de imágenes integrado.

La revisión de v2 dio `ship` al alcance de este prototipo refinado. Se verificó en Chromium de escritorio y móvil emulado; no se ha probado aún en dispositivos físicos o Safari.


## Refinamiento 3 · iluminación

El teatro pasa de luz cálida a atardecer y noche azul violeta al avanzar con el scroll. El cambio automático recorre el tramo del 10% al 78% del progreso global normalizado por capítulos. La iluminación no cambia la escenografía estacional: el selector de fechas y el control de luz son independientes.

El botón recorre **Luz del recorrido → Noche → Día**. Cada elección manual se funde durante **1400 ms**; con pausa o movimiento reducido aplica el destino inmediatamente. También cierra la animación pendiente si se oculta el documento. El control sigue disponible aunque no se esté desplazando la página.

Un foco cálido difuso detrás del texto aumenta continuamente con `opacity: clamp(0, calc(var(--night) * 2), .96)` y permanece iluminado durante la noche. El texto mantiene tinta verde y énfasis coral en todo el recorrido. Las etiquetas `day`, `twilight` y `night` son metadatos y no activan cambios binarios del foco o de la tinta. La cortina y las figuras se atenúan juntas; luna, estrellas de papel y luciérnagas acompañan el cambio. Las hojas editoriales conservan la luz de lectura. Hasta 370 px de ancho, la luna baja al 60% de alto, con ancho de 42 px y separación derecha de 14%, para evitar el titular.

Las páginas de lectura independientes mantienen la cortina y la luz diurna; no montan el motor de iluminación del recorrido. Los textos siguen siendo de muestra. Esta revisión de iluminación conserva la estructura, las tipografías y los materiales de v2; no representa todavía una aprobación final de identidad.

La revisión final de v3 sigue pendiente; el resultado de revisión de v2 no constituye una aprobación de este refinamiento.
