/* Paper-craft figures (children and a mom): layered, extruded pieces with soft light from the upper left. */
let uid = 0;

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const mix = (hex, to, t) => {
  const a = rgb(hex);
  const b = rgb(to);
  return `#${a.map((v, i) => Math.round(v + (b[i] - v) * t).toString(16).padStart(2, '0')).join('')}`;
};
const dark = (c) => mix(c, '#1d1410', .38);
const light = (c) => mix(c, '#ffffff', .38);

const SHOE = 'M-46 252Q-46 233-24 233L-6 233Q6 238 6 250Q6 259-4 259L-38 259Q-46 259-46 252Z';
const MARY_JANE = 'M-38 252Q-38 238-22 238L-6 238Q4 242 4 251Q4 258-2 258L-32 258Q-38 258-38 252Z';
const FACE = 'M-36 6Q-38-36 8-40Q54-36 52 6Q52 50 8 58Q-36 50-36 6Z';
const BOY_HAIR = 'M-40 10Q-46-46 8-52Q62-48 56 10Q54-8 42-16Q26-6 6-18Q-14-6-30-14Q-38-4-40 10Z';
const GIRL_HAIR = 'M-42 14Q-52-48 8-54Q68-50 58 14Q56-10 44-22Q24-4 8-28Q-8-4-28-22Q-40-10-42 14Z';

export const child = (x, y, s = 1, shirt = '#4b6899', skin = '#bf8058', hair = '#343c30', kind = 'boy') => {
  const n = ++uid;
  const mom = kind === 'mom';
  const girl = kind === 'girl' || mom;
  // The mom is the girl's figure with a longer body: everything below the waist drops by `lift`.
  const lift = mom ? 120 : 0;
  const shade = `url(#cg${n})`;

  const part = (d, c) => `<path d="${d}" fill="${dark(c)}" transform="translate(3.5 6)"/><path d="${d}" fill="${c}"/><path d="${d}" fill="${shade}"/>`;
  const ell = (cx, cy, rx, ry, c, rot = 0) => {
    const t = rot ? ` transform="rotate(${rot} ${cx} ${cy})"` : '';
    return `<g${t}><ellipse cx="${cx + 3.5}" cy="${cy + 6}" rx="${rx}" ry="${ry}" fill="${dark(c)}"/><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c}"/><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${shade}"/></g>`;
  };
  const limb = (d, w, c) => {
    const stroke = (col, width, extra = '') => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${extra}/>`;
    return `${stroke(dark(c), w, ' transform="translate(3 5.5)"')}${stroke(c, w)}${stroke(light(c), w * .3, ` opacity=".5" transform="translate(${-w * .2} ${-w * .2})"`)}`;
  };

  const trousers = '#35525a';
  const sock = '#f6efe0';
  const shoeColor = girl ? '#7a3a2e' : '#c4452f';
  const shoeShape = girl ? MARY_JANE : SHOE;
  const shoes = `${part(shoeShape, shoeColor)}<path d="${girl ? 'M-36 255H2' : 'M-44 256H4'}" stroke="#f6efe0" stroke-width="3.5" stroke-linecap="round"/>`;
  const mirror = girl ? 17 : 8;

  const legs = mom
    ? `${limb('M-10 316L-12 360', 15, skin)}${limb('M28 316L30 360', 15, skin)}`
    : girl
    ? `${limb('M-12 196L-14 238', 15, skin)}${limb('M30 196L32 238', 15, skin)}${limb('M-14 224L-14 240', 18, sock)}${limb('M32 224L32 240', 18, sock)}`
    : `${limb('M-14 172L-18 236', 28, trousers)}${limb('M26 172L30 236', 28, trousers)}`;

  const arms = mom
    ? `${limb('M-30 92Q-50 140-42 186', 20, skin)}${limb('M42 92Q62 140 54 186', 20, skin)}${ell(-42, 194, 12.5, 12.5, skin)}${ell(54, 194, 12.5, 12.5, skin)}`
    : `${limb('M-30 92Q-66 104-88 62', 20, skin)}${limb('M42 92Q80 100 100 60', 20, skin)}${ell(-90, 52, 12.5, 12.5, skin)}${ell(102, 50, 12.5, 12.5, skin)}`;

  const torso = mom
    ? `${part('M-34 90Q-34 74-18 72L32 72Q48 74 48 90L50 190L80 318Q8 336-66 318L-36 190Z', shirt)}${part('M-37 182Q8 192 51 182L52 198Q8 208-38 198Z', mix(shirt, '#ffffff', .22))}<path d="M-66 318Q8 336 80 318" fill="none" stroke="${sock}" stroke-width="5" stroke-linecap="round" opacity=".85"/><path d="M-48 270Q8 284 62 270" fill="none" stroke="${dark(shirt)}" stroke-width="3" opacity=".22"/>`
    : girl
    ? `${part('M-34 90Q-34 74-18 72L32 72Q48 74 48 90L66 196Q8 214-58 196Z', shirt)}${part('M-31 118Q8 129 44 118L46 132Q8 143-34 132Z', mix(shirt, '#ffffff', .22))}<path d="M-58 196Q8 214 66 196" fill="none" stroke="${sock}" stroke-width="5" stroke-linecap="round" opacity=".85"/><path d="M-40 160Q8 176 56 160" fill="none" stroke="${dark(shirt)}" stroke-width="3" opacity=".22"/>`
    : `${part('M-36 90Q-36 74-20 72L34 72Q50 74 50 90L54 176Q8 188-42 176Z', shirt)}<path d="M-40 168Q6 180 52 168" fill="none" stroke="${dark(shirt)}" stroke-width="3" opacity=".35"/><path d="M-8 150Q10 160 32 152" fill="none" stroke="${dark(shirt)}" stroke-width="3" opacity=".2"/>`;

  const sleeves = girl
    ? `${limb('M-30 92L-46 95', 28, shirt)}${limb('M42 92L58 94', 28, shirt)}`
    : `${limb('M-30 92L-50 95', 28, shirt)}${limb('M42 92L60 94', 28, shirt)}`;

  const collar = girl
    ? `<path d="M-14 72Q8 96 30 72Q22 82 8 84Q-6 82-14 72Z" fill="${sock}"/>`
    : `<path d="M-10 72Q8 92 26 72Z" fill="${mix(skin, '#4a2410', .12)}"/><path d="M-12 72Q8 88 28 72" fill="none" stroke="${light(shirt)}" stroke-width="5" stroke-linecap="round"/>`;

  const emblem = mom ? '' : `<path d="${girl ? 'M5 148l11-13 11 13-11 13Z' : 'M5 116l12-14 12 14-12 14Z'}" fill="#fbf5e8" opacity=".85"/>`;

  const pigtails = mom
    ? `${ell(8, -58, 22, 18, hair)}${ell(-44, 42, 14, 38, hair, 8)}${ell(60, 42, 14, 38, hair, -8)}`
    : girl ? `${ell(-50, 46, 13, 27, hair, 16)}${ell(66, 46, 13, 27, hair, -16)}` : '';
  const ears = `${ell(-34, 16, 8, 11, skin)}${ell(50, 16, 8, 11, skin)}`;

  const face = `<path d="${FACE}" fill="${dark(skin)}" transform="translate(3.5 6)"/><path d="${FACE}" fill="${skin}"/><path d="${FACE}" fill="url(#ch${n})"/>`;
  const lashes = girl ? `<path d="M-13 11l-5-3M29 11l5-3" stroke="#2a1f1c" stroke-width="2.4" stroke-linecap="round"/>` : '';
  const features = `<circle cx="-14" cy="32" r="10" fill="url(#cb${n})"/><circle cx="30" cy="32" r="10" fill="url(#cb${n})"/>`
    + `<ellipse cx="8" cy="28" rx="5" ry="3.5" fill="${mix(skin, '#7a3a22', .25)}" opacity=".5"/><ellipse cx="6.5" cy="26.5" rx="2.2" ry="1.4" fill="#fff" opacity=".35"/>`
    + `<ellipse cx="-8" cy="16" rx="4.6" ry="6" fill="#2a1f1c"/><ellipse cx="24" cy="16" rx="4.6" ry="6" fill="#2a1f1c"/><circle cx="-9.4" cy="13.6" r="1.7" fill="#fff"/><circle cx="22.6" cy="13.6" r="1.7" fill="#fff"/>`
    + `<path d="M-15 4Q-8 0-1 4M17 4Q24 0 31 4" fill="none" stroke="${hair}" stroke-width="3" stroke-linecap="round"/>${lashes}`
    + `<path d="M-1 38Q8 47 17 38" fill="none" stroke="#3a1f1c" stroke-width="3" stroke-linecap="round"/>`;

  const hairFront = mom
    ? part(GIRL_HAIR, hair)
    : girl
    ? `${part(GIRL_HAIR, hair)}${ell(-46, 24, 8, 6, '#eab64f', 20)}${ell(62, 24, 8, 6, '#eab64f', -20)}`
    : `${part('M0-50Q-6-66 12-65Q8-57 18-52Z', hair)}${part(BOY_HAIR, hair)}`;
  const sheen = `<path d="M-18-38Q8-49 34-38" fill="none" stroke="${light(hair)}" stroke-width="5" stroke-linecap="round" opacity=".35"/>`;

  const defs = `<defs><linearGradient id="cg${n}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1d1410" stop-opacity=".3"/></linearGradient>`
    + `<radialGradient id="ch${n}" cx=".36" cy=".3" r=".85"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1d1410" stop-opacity=".34"/></radialGradient>`
    + `<radialGradient id="cb${n}"><stop offset="0" stop-color="#d4503c" stop-opacity=".55"/><stop offset="1" stop-color="#d4503c" stop-opacity="0"/></radialGradient></defs>`;

  const neck = limb('M8 46L8 78', 26, mix(skin, '#4a2410', .18));
  const season = `<g class="season-prop" transform="translate(0 -14)"><path d="M-35-25q8-34 39-29 28-10 52 27L21-16-8-18Z" fill="#eab64f"/><circle cx="-20" cy="-29" r="9" fill="#cf503c"/><circle cx="4" cy="-36" r="10" fill="#cf503c"/><circle cx="29" cy="-30" r="9" fill="#cf503c"/></g>`;

  return `<g class="figure paper-piece" transform="translate(${x} ${y}) scale(${s})">${defs}`
    + `<ellipse cx="4" cy="${260 + lift}" rx="64" ry="9" fill="#1d1410" opacity=".16"/>`
    + `${legs}<g transform="translate(${mirror} ${lift}) scale(-1 1)">${shoes}</g><g transform="translate(0 ${lift})">${shoes}</g>`
    + `${neck}${arms}${torso}${sleeves}${collar}${emblem}${pigtails}${ears}${face}${features}${hairFront}${sheen}${season}</g>`;
};
