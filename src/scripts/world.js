import { mountPaperArt } from './paper-art.js';
mountPaperArt();

// One native document scroll is the clock: hold, travel sideways, hold,
// then fly the whole set upwards. No wheel/touch capture or scroll snapping.
const intro = document.querySelector('.theatre-intro');
const stage = intro.querySelector('.stage-window');
const stack = intro.querySelector('.sets-stack');
const sets = [...intro.querySelectorAll('.intro-scene')];
const tracks = sets.map(set => set.querySelector('.scene-copy-track'));
const panels = tracks.map(track => [...track.children]);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const motion = document.querySelector('#motion');
const count = document.querySelector('#chapter-progress');
const name = document.querySelector('#scene-name');
const progressBar = intro.querySelector('.theatre-progress span');
const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(n, max));
const ease = n => { n = clamp(n); return n * n * (3 - 2 * n); };
const STRIDE = 2.8;
const TOTAL = (sets.length - 1) * STRIDE + 2;
let paused = false;
let frame = 0, height = 0, width = 0, top = 0, span = 0;
let state = { index: 0, panel: 0, progress: 0, position: 0 };

// An outer wrapper keeps the original SVG translation and rotation intact.
// Each puppet can then travel separately from its scenery and its neighbours.
const puppets = sets.map(set => [...set.querySelectorAll('.scene-visual > svg > .paper-piece')].map((piece, order) => {
 const holder = document.createElementNS('http://www.w3.org/2000/svg', 'g');
 holder.classList.add('puppet');
 piece.before(holder); holder.append(piece);
 return { el: holder, figure: piece.classList.contains('figure'), order };
}));
const layers = sets.map(set => [...set.querySelectorAll('.sun,.cloud,.back-ridge,.hill,.town-buildings,.town-floor,.forest-back,.forest-front,.moon-lamp,.hanging-star,.firefly')]);
const still = () => paused || reduced.matches;

function render() {
 frame = 0;
 if (still()) {
  intro.classList.toggle('theatre-past', intro.getBoundingClientRect().bottom <= 0);
  return;
 }
 const offset = clamp(window.scrollY - top, 0, span);
 const clock = offset / height;
 const index = Math.min(sets.length - 1, Math.floor(clock / STRIDE));
 const local = clock - index * STRIDE;
 const change = index < sets.length - 1 ? ease((local - 2) / .8) : 0;
 const position = index + change;
 stack.style.transform = `translate3d(0,${-position * height}px,0)`;
 stage.style.setProperty('--curtain-night', String(clamp(position - 1)));
 progressBar.style.transform = `scaleX(${offset / span})`;
 const visible = Math.min(sets.length - 1, Math.round(position));
 const horizontal = ease((clock - visible * STRIDE - .4) / 1.05);
 const panel = horizontal >= .5 ? 1 : 0;
 sets.forEach((set, i) => {
  const t = clock - i * STRIDE;
  const x = ease((t - .4) / 1.05);
  const incoming = i === 0 ? 0 : 1 - ease((t + .75) / .85);
  const outgoing = i < sets.length - 1 ? ease((t - 1.85) / .8) : 0;
  tracks[i].style.transform = `translate3d(${-x * width}px,0,0)`;
  const accessible = i === visible;
  // Move keyboard focus off a departing panel before it becomes inert.
  if (set.contains(document.activeElement) && (!accessible || !panels[i][panel].contains(document.activeElement))) motion.focus({ preventScroll: true });
  set.inert = !accessible;
  set.setAttribute('aria-hidden', String(!accessible));
  panels[i].forEach((item, j) => { item.inert = !accessible || j !== panel; });
  // Skip painting offscreen sets; they retain deterministic state on reversal.
  set.style.visibility = Math.abs(position - i) < 1.05 ? 'visible' : 'hidden';
  if (Math.abs(position - i) >= 1.05) return;
  puppets[i].forEach(({ el, figure, order }, j) => {
   const direction = j % 2 === 0 ? 1 : -1;
   const entry = incoming * (300 + order * 28);
   const exit = outgoing * (350 + order * 36);
   const travel = x * (figure ? -110 : direction * 76);
   const bob = Math.sin(x * Math.PI) * (figure ? -22 : -62);
   el.style.transform = `translate(${direction * entry - direction * exit + travel}px,${entry * .3 - exit * .5 + bob}px) rotate(${direction * (x * (figure ? 4 : 12) + incoming * 14 - outgoing * 22)}deg)`;
  });
  layers[i].forEach((el, j) => {
   const foreground = el.matches('.hill-front,.forest-front,.town-floor');
   const hanging = el.matches('.sun,.moon-lamp,.hanging-star');
   const depth = foreground ? 1.5 : .65 + (j % 3) * .2;
   const dx = x * (j % 2 ? -1 : 1) * 55 * depth;
   const dy = (incoming * 100 - outgoing * 160) * depth + (hanging ? Math.sin(x * Math.PI) * -32 : x * -16 * depth);
   // Individual transforms compose with the original authored CSS transform.
   el.style.translate = `${dx}px ${dy}px`;
   if (hanging) el.style.rotate = `${Math.sin(x * Math.PI * 1.5) * 10}deg`;
  });
 });
 if (state.index !== visible || state.panel !== panel) {
  name.textContent = sets[visible].dataset.name;
  count.textContent = `${visible * 2 + panel + 1} / 6`;
 }
 state = { index: visible, panel, progress: offset / span, position, clock };
}
function schedule() { if (!frame) frame = requestAnimationFrame(render); }
function measure() {
 if (still()) return;
 height = stage.clientHeight;
 width = stage.clientWidth;
 top = intro.getBoundingClientRect().top + window.scrollY;
 span = TOTAL * height;
 intro.style.height = `${span + height}px`;
 render();
}
function syncMotion() {
 const simple = still();
 document.documentElement.classList.toggle('theatre-static', simple);
 motion.setAttribute('aria-pressed', String(simple));
 motion.disabled = reduced.matches;
 motion.setAttribute('aria-label', simple ? 'Activar recorrido animado' : 'Reducir movimiento');
 motion.title = reduced.matches ? 'Movimiento reducido según tu dispositivo' : motion.getAttribute('aria-label');
 motion.innerHTML = simple ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7Z"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';
 if (simple) {
  intro.style.height = '';
  stack.style.transform = '';
  tracks.forEach(track => track.style.transform = '');
  sets.forEach(set => { set.inert = false; set.removeAttribute('aria-hidden'); set.style.visibility = ''; });
  panels.flat().forEach(panel => panel.inert = false);
  puppets.flat().forEach(({el}) => el.style.transform = '');
  layers.flat().forEach(el => { el.style.translate = ''; el.style.rotate = ''; });
 } else measure();
}
function changeMotion(update = () => {}) {
 const bottom = intro.getBoundingClientRect().bottom + window.scrollY;
 const afterIntro = window.scrollY >= bottom;
 const distanceAfter = window.scrollY - bottom;
 // Snapshot the old layout before syncMotion measures the new scroll span.
 let selected = { index: state.index, panel: state.panel };
 if (document.documentElement.classList.contains('theatre-static') && !afterIntro) {
  let nearest = Infinity;
  panels.forEach((items, index) => items.forEach((item, panel) => {
   const rect = item.getBoundingClientRect();
   const distance = Math.abs(rect.top + rect.height / 2 - innerHeight / 2);
   if (distance < nearest) { nearest = distance; selected = { index, panel }; }
  }));
 }
 update();
 syncMotion();
 if (afterIntro) {
  window.scrollTo({ top: intro.getBoundingClientRect().bottom + window.scrollY + distanceAfter, behavior: 'instant' });
 } else if (still()) {
  panels[selected.index][selected.panel].scrollIntoView({ block: 'center', behavior: 'instant' });
 } else {
  const readingPoint = selected.index * STRIDE + (selected.panel ? 1.65 : .2);
  window.scrollTo({ top: top + readingPoint * height, behavior: 'instant' });
  render();
 }
}
motion.addEventListener('click', () => changeMotion(() => { paused = !paused; }));
reduced.addEventListener('change', () => changeMotion());
window.addEventListener('scroll', schedule, { passive: true });
// svh prevents the mobile address bar from changing the scroll timeline.
const resize = new ResizeObserver(measure);
resize.observe(stage);
document.documentElement.classList.add('js-world');
syncMotion();
document.fonts.ready.then(measure);
window.addEventListener('pageshow', measure);
window.theatreDebug = () => ({ ...state, height, width, span, top, paused: still(), introBottom: top + intro.offsetHeight, horizontal: tracks.map(t => t.style.transform) });
