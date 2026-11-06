import { mountPaperArt } from './paper-art.js';
mountPaperArt();

// One act on stage; when the timer line under its label fills, the next act
// fades in. Nothing reads the scroll. The line is a CSS animation, so pausing
// it pauses the change: while keyboard focus is on stage (the stage fills
// the screen, so a hovering mouse would pause it for good), while the
// stage is off screen or the tab hidden. An arrow click stops autoplay, and
// reduced motion hides the line so its animation never ends.
const intro = document.querySelector('.theatre-intro');
const stage = intro.querySelector('.stage-window');
const sets = [...intro.querySelectorAll('.intro-scene')];
const name = document.querySelector('#scene-name');
const count = document.querySelector('#chapter-progress');
const timer = intro.querySelector('.act-timer span');
const ORDINAL = ['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto'];
let index = 0, focused = false, visible = true;

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
 count.textContent = `${ORDINAL[index]} acto`;
 // Restart the line from zero for the new act.
 timer.style.animation = 'none';
 void timer.offsetWidth;
 timer.style.animation = '';
}
function pause() { intro.classList.toggle('theatre-paused', focused || !visible || document.hidden); }
function step(direction) { intro.classList.add('theatre-stopped'); show(index + direction); }

timer.addEventListener('animationend', () => { if (!intro.classList.contains('theatre-stopped')) show(index + 1); });
document.querySelector('#step-prev').addEventListener('click', () => step(-1));
document.querySelector('#step-next').addEventListener('click', () => step(1));
stage.addEventListener('focusin', () => { focused = true; pause(); });
stage.addEventListener('focusout', () => { focused = false; pause(); });
new IntersectionObserver(([entry]) => {
 visible = entry.isIntersecting;
 intro.classList.toggle('theatre-away', !visible);
 pause();
}).observe(intro);
document.addEventListener('visibilitychange', pause);
document.documentElement.classList.add('js-world');
show(0);
