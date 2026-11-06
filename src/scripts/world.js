import { mountPaperArt } from './paper-art.js';
mountPaperArt();

// One scene on stage; every few seconds the next one fades in. Nothing reads
// the scroll. Autoplay stops for reduced motion, after an arrow click, while
// the pointer or focus is on stage, and while the stage is off screen.
const intro = document.querySelector('.theatre-intro');
const stage = intro.querySelector('.stage-window');
const sets = [...intro.querySelectorAll('.intro-scene')];
const name = document.querySelector('#scene-name');
const count = document.querySelector('#chapter-progress');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const DELAY = 9000;
let index = 0, timer = 0, stopped = false, hovering = false, visible = true;

function show(i) {
 index = (i + sets.length) % sets.length;
 sets.forEach((set, j) => {
  const active = j === index;
  set.classList.toggle('is-active', active);
  set.inert = !active;
  set.setAttribute('aria-hidden', String(!active));
 });
 stage.style.setProperty('--curtain-night', sets[index].classList.contains('scene-night') ? '1' : '0');
 name.textContent = sets[index].dataset.name;
 count.textContent = `${index + 1} / ${sets.length}`;
}
function plan() {
 clearInterval(timer);
 timer = 0;
 if (!stopped && !hovering && visible && !reduced.matches && !document.hidden) timer = setInterval(() => show(index + 1), DELAY);
}
function step(direction) { stopped = true; show(index + direction); plan(); }

document.querySelector('#step-prev').addEventListener('click', () => step(-1));
document.querySelector('#step-next').addEventListener('click', () => step(1));
stage.addEventListener('pointerenter', () => { hovering = true; plan(); });
stage.addEventListener('pointerleave', () => { hovering = false; plan(); });
stage.addEventListener('focusin', () => { hovering = true; plan(); });
stage.addEventListener('focusout', () => { hovering = false; plan(); });
new IntersectionObserver(([entry]) => {
 visible = entry.isIntersecting;
 intro.classList.toggle('theatre-away', !visible);
 plan();
}).observe(intro);
document.addEventListener('visibilitychange', plan);
reduced.addEventListener('change', plan);
document.documentElement.classList.add('js-world');
show(0);
plan();
