// Lente de vidrio para la cabecera (solo Chromium): un mapa de desplazamiento del
// tamaño exacto de la cabecera que dobla el fondo hacia dentro cerca de los bordes
// y deja el centro limpio. El mapa alimenta el filtro SVG #liquid-glass.
const BAND = 18; // ancho en px de la zona que refracta

function buildMap(width, height, radius) {
 const canvas = document.createElement('canvas');
 canvas.width = width;
 canvas.height = height;
 const ctx = canvas.getContext('2d');
 const img = ctx.createImageData(width, height);
 const r = Math.min(radius, width / 2, height / 2);
 for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
   // Distancia al borde del rectángulo redondeado y dirección hacia el centro.
   const cx = Math.min(Math.max(x, r), width - r);
   const cy = Math.min(Math.max(y, r), height - r);
   let dx = 0, dy = 0, edge;
   if (cx !== x || cy !== y) {
    const ox = x - cx, oy = y - cy, len = Math.hypot(ox, oy) || 1;
    edge = r - len;
    dx = -ox / len;
    dy = -oy / len;
   } else {
    const toEdge = [x, width - 1 - x, y, height - 1 - y];
    edge = Math.min(...toEdge);
    const side = toEdge.indexOf(edge);
    dx = side === 0 ? 1 : side === 1 ? -1 : 0;
    dy = side === 2 ? 1 : side === 3 ? -1 : 0;
   }
   const strength = edge >= BAND ? 0 : (1 - Math.max(edge, 0) / BAND) ** 2;
   const i = (y * width + x) * 4;
   img.data[i] = 128 + dx * strength * 127;
   img.data[i + 1] = 128 + dy * strength * 127;
   img.data[i + 2] = 128;
   img.data[i + 3] = 255;
  }
 }
 ctx.putImageData(img, 0, 0);
 return canvas.toDataURL();
}

export function mountLiquidGlass() {
 const header = document.querySelector('.glass-header');
 const filter = document.getElementById('liquid-glass');
 if (!header || !filter || !document.documentElement.classList.contains('glass-refract')) return;
 const map = filter.querySelector('feImage');
 let size = '';
 const update = () => {
  const { width, height } = header.getBoundingClientRect();
  const w = Math.round(width), h = Math.round(height);
  if (!w || !h || `${w}x${h}` === size) return;
  size = `${w}x${h}`;
  const radius = parseFloat(getComputedStyle(header).borderTopLeftRadius) || 0;
  for (const el of [filter, map]) { el.setAttribute('width', w); el.setAttribute('height', h); }
  map.setAttribute('href', buildMap(w, h, radius));
 };
 update();
 new ResizeObserver(update).observe(header);
}
