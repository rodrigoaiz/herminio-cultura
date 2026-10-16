# Herminio Cultura

Proyecto del espacio cultural de la Escuela Herminio Almendros. Incluye un prototipo navegable de teatro de papel, documentación de producto y diseño y planificación.

## Ejecutar el prototipo

Desde la raíz del repositorio:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory prototipo
```

Abrir [http://127.0.0.1:8000](http://127.0.0.1:8000). No requiere instalar dependencias ni compilar: está construido con HTML, CSS y JavaScript, y sirve las fuentes y los recursos visuales localmente.

El recorrido incluye cuatro capítulos, páginas de lectura de muestra, una variante de Día de Muertos y cambios de iluminación durante el desplazamiento. Consultar [la documentación del prototipo](prototipo/README.md) para conocer su alcance y las verificaciones realizadas.

## Contenido

- [`prototipo/`](prototipo/): páginas, estilos, interacciones y recursos del teatro de papel.
- [`PRODUCT.md`](PRODUCT.md): definición del producto y su alcance.
- [`DESIGN.md`](DESIGN.md): dirección y decisiones de diseño.
- [`planning-cultura/`](planning-cultura/): propuesta inicial del espacio cultural.
- [`planning-previo/`](planning-previo/): investigación y planificación previa del sitio escolar.

## Estado

Prototipo en desarrollo con contenido editorial demostrativo. La gestión editorial y el archivo definitivo todavía están pendientes. La publicación del repositorio no despliega el sitio web.

El archivo fotográfico de referencia se conserva localmente en `fotos/` y queda excluido de Git. Las licencias de las fuentes están incluidas en [`prototipo/assets/`](prototipo/assets/).
