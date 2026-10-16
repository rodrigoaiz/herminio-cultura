(() => {
/* Original vector paper theatre. No generated video or external runtime. */
const wrap = (content) => `<svg viewBox="0 0 800 650" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
const plant = (x,y,s=1,color='#52755a') => `<g class="paper-piece" transform="translate(${x} ${y}) scale(${s})"><path d="M0 0Q-18-90 7-150Q18-80 0 0" fill="${color}"/><path d="M0-16Q-70-28-66-84Q-12-82 0-16M2-55Q55-48 65-112Q11-118 2-55M2-92Q-37-104-30-151Q9-138 2-92" fill="${color}"/><path d="M0-10 0-111" stroke="#fbf5e8" stroke-width="1.5" fill="none" opacity=".5"/></g>`;
const child = (x,y,s=1,shirt='#4b6899',skin='#bf8058',hair='#343c30') => `<g class="figure paper-piece" transform="translate(${x} ${y}) scale(${s})"><path d="m-30 165-8 72 28 2 14-65M17 172l8 64 29-2-7-75" fill="#334f53"/><path d="m-39 230-11 17q1 14 38 8l3-22M25 230l-1 23q37 9 42-4l-16-18" fill="#cf503c"/><path d="m-25 87-45 30-20-32-15 11 23 57q9 13 22 1l32-24M35 90l40 16 21-39 17 7-24 66q-6 11-21 4l-35-11" fill="${skin}"/><path d="M-26 77Q3 67 39 80l22 95q-51 20-104 0Z" fill="${shirt}"/><path d="m-27 78-28 19 13 34 24-12M37 80l28 14-10 34-19-9" fill="${shirt}"/><path d="M-3 50v30q12 13 26-1V51" fill="${skin}"/><path d="M-29 12Q-40-34 8-38Q55-35 49 15L42 48Q11 76-22 47Z" fill="${skin}"/><path d="M-33 24Q-50-8-29-31Q-8-56 25-39Q63-39 54 16L40 23 37-7Q16 5-5-9Q-6 14-33 24Z" fill="${hair}"/><ellipse cx="-15" cy="29" rx="3" ry="4" fill="#233d3a"/><ellipse cx="26" cy="29" rx="3" ry="4" fill="#233d3a"/><path d="M1 44q10 7 17-1" stroke="#233d3a" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="-22" cy="39" r="5" fill="#cf503c" opacity=".35"/><circle cx="34" cy="39" r="5" fill="#cf503c" opacity=".35"/><path d="m-4 112 12-14 12 14-12 14Z" fill="#fbf5e8" opacity=".7"/><g class="season-prop"><path d="M-35-25q8-34 39-29 28-10 52 27L21-16-8-18Z" fill="#eab64f"/><circle cx="-20" cy="-29" r="9" fill="#cf503c"/><circle cx="4" cy="-36" r="10" fill="#cf503c"/><circle cx="29" cy="-30" r="9" fill="#cf503c"/></g></g>`;
const seasonal = `<g class="season-prop"><path d="M130 80Q430 140 765 64" stroke="#68557a" stroke-width="2" fill="none"/><g fill="#cf503c"><path d="m180 92 75 13-10 75-35-12-38 2Z"/><path d="m405 112 73-3 3 76-34-6-37 10Z"/><path d="m635 89 74-13 12 74-35 1-37 18Z"/></g><g fill="#eab64f"><path d="m292 106 71 6-2 69-35-7-35 2Z"/><path d="m520 107 70-9 9 71-34-1-36 14Z"/></g><g fill="#fbf5e8"><circle cx="215" cy="136" r="12"/><circle cx="327" cy="145" r="11"/><circle cx="444" cy="146" r="11"/><circle cx="560" cy="137" r="11"/><circle cx="677" cy="119" r="11"/></g><g transform="translate(699 508) rotate(12)"><path d="M-34-12Q-38-51 1-52Q39-52 35-11l-9 15-1 28h-51l-1-28Z" fill="#fbf5e8"/><ellipse cx="-15" cy="-17" rx="9" ry="10" fill="#68557a"/><ellipse cx="16" cy="-17" rx="9" ry="10" fill="#68557a"/><path d="m0-1-5 8H6Z" fill="#cf503c"/><path d="M-18 18h36m-28-5v12M0 13v12m10-12v12" stroke="#68557a" stroke-width="2"/></g></g>`;
const scenes = [
  wrap(`${plant(158,600,.85,'#729170')}${plant(752,595,1.2)}<g class="paper-piece" transform="translate(450 205) rotate(12)"><path d="m0-66 52 65L0 73-48 3Z" fill="#cf503c"/><path d="M0-66V73M-48 3h100" stroke="#fbf5e8" stroke-width="2"/><path d="M0 73q-54 70 11 109" fill="none" stroke="#8c7858" stroke-width="1.5"/><path d="m-2 99-14 3 8 15 10-13m-4 36 13-2-4 15-10-9" fill="#4b6899"/></g>${child(390,278,.88,'#cf503c','#d9a174','#483c32')}${child(585,299,.79,'#4b6899','#a87452','#293b31')}<g class="paper-piece" transform="translate(328 535) rotate(-8)"><path d="M-123 0Q-57-33 0-6Q58-34 124 0v75Q58 50 0 79Q-59 51-123 75Z" fill="#4b6899"/><path d="M-114-8Q-57-33 0-7v76Q-53 45-114 64ZM0-7Q57-34 114-8v73Q51 45 0 69Z" fill="#fbf5e8"/><path d="M-92 12q31-10 67-3m-66 17q31-10 67-3m-66 18q31-10 67-3M24 10q31-10 67-3m-66 18q31-10 67-3m-66 18q31-10 67-3" stroke="#b1ad8b" stroke-width="3" fill="none"/></g>${seasonal}`),
  wrap(`<g class="paper-piece" transform="translate(438 340) rotate(-3)"><path d="m-160-49 160-95 160 95Z" fill="#cf503c"/><path d="M-146-39h293v221h-293Z" fill="#eab64f"/><path d="M-170-47h341v23h-341M-166 172h332v27h-332" fill="#d5923c"/><path d="M-122-5h31v159h-31m65-159h31v159h-31M28-5h31v159H28m65-159h31v159H93" fill="#fbf5e8"/><path d="M-5 173V89q17-24 36 0v84" fill="#4b6899"/><circle cy="-86" r="20" fill="#fbf5e8"/><path d="m-8-86 8-8 8 8-8 8Z" fill="#4b6899"/></g><g class="paper-piece" transform="translate(663 293) rotate(8)"><path d="M-70-95h140v220H-70q17-13 0-26v-52q17-13 0-26v-51q17-13 0-26Z" fill="#4b6899"/><path d="M-53-78H53V32H-53Z" fill="#fbf5e8"/><circle cy="-31" r="31" fill="#eab64f"/><path d="m-21-12 21-39 22 39Z" fill="#cf503c"/><path d="M-42 62h84m-84 13h84m-70 14h56" fill="none" stroke="#fbf5e8" stroke-width="3"/></g>${child(227,417,.55,'#a7c7b2','#c78b65')}${plant(754,605,.8)}${seasonal}`),
  wrap(`<g class="paper-piece" transform="translate(462 475) rotate(-8)"><path d="M-223 0Q-108-61 0-15Q111-59 224 0l-6 140Q104 84 0 130Q-106 88-219 138Z" fill="#cf503c"/><path d="M-210-10Q-104-64 0-16v130Q-105 73-209 119ZM0-16Q101-63 209-9v129Q108 75 0 114Z" fill="#fbf5e8"/><path d="M-179 22q65-22 135-7m-133 30q66-22 136-7m-134 31q66-22 136-7m85-46q65-22 135-7m-133 30q66-22 136-7m-134 31q66-22 136-7" fill="none" stroke="#b1ad8b" stroke-width="4"/></g>${plant(480,471,1.3,'#729170')}${plant(402,470,.9,'#4b6899')}<g class="paper-piece" transform="translate(276 297) rotate(-18)"><path d="M-53-71h106V71H-53Z" fill="#eab64f"/><path d="M-43-71V71" stroke="#c98536" stroke-width="5"/><path d="m-23-27 21-15 28 15L-1 9Z" fill="#cf503c"/><path d="M-25 34h52M-18 46h38" stroke="#233d3a" stroke-width="3"/></g><g class="paper-piece" transform="translate(638 261) rotate(13)"><path d="M-48-68h96V68h-96Z" fill="#4b6899"/><path d="M-38-68V68" stroke="#334f77" stroke-width="5"/><circle cy="-10" r="25" fill="#fbf5e8"/><path d="m-12-8 24-20-9 38Z" fill="#cf503c"/></g>${child(660,403,.57,'#eab64f','#d9a174')}${plant(181,607,.6)}${seasonal}`),
  wrap(`<g class="paper-piece" transform="translate(451 338) rotate(-7)"><path d="M-156-161h310v364h-310Z" fill="#fbf5e8"/><path d="M-133-136h264v49h-264Z" fill="#4b6899"/><text x="0" y="-104" text-anchor="middle" fill="#fbf5e8" font-size="21" font-weight="700" font-family="Manrope,sans-serif">La voz de la comunidad</text><path d="M-131-60h115V45h-115Z" fill="#a7c7b2"/><circle cx="-73" cy="-12" r="30" fill="#eab64f"/><path d="M10-52h115M10-32h115M10-12h115M10 8h83M-130 77h255M-130 99h255M-130 121h255M-130 143h194" stroke="#a5aa8d" stroke-width="5"/><path d="m120 201 34-36v36Z" fill="#dfd8bd"/></g><g class="paper-piece" transform="translate(646 204) rotate(15)"><path d="m-96 0 195-61-79 135-29-55Z" fill="#eab64f"/><path d="m-96 0 107 19 88-80L-8 49Z" fill="#f6ce75"/><path d="m11 19 9 55-28-25Z" fill="#cf503c"/></g>${child(656,418,.63,'#cf503c','#a87452')}${plant(218,612,.8)}${seasonal}`)
];

/* The theatre is the introduction only. Native Y changes complete stage sets;
   native X changes content within each set. No wheel/touch interception. */
const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(n, max));
const smooth = n => n * n * (3 - 2 * n);
document.querySelectorAll('[data-art]').forEach(el => { el.innerHTML = scenes[Number(el.dataset.art)] || ''; });
document.querySelector('.forest-back').innerHTML = wrap(`${plant(60,650,2,'#354779')}${plant(235,650,2.7,'#3a4d7c')}${plant(650,650,3,'#344372')}${plant(790,650,2.4,'#27375f')}`);
document.querySelector('.forest-front').innerHTML = wrap(`${plant(85,650,2.8,'#273454')}${plant(720,650,3.3,'#202f50')}`);
const dateParts = new Intl.DateTimeFormat('en-CA', {timeZone:'America/Mexico_City',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
const month = Number(dateParts.find(p => p.type === 'month').value);
const day = Number(dateParts.find(p => p.type === 'day').value);
document.body.dataset.theme = (month === 10 && day >= 20) || (month === 11 && day <= 3) ? 'muertos' : 'base';

const intro = document.querySelector('.theatre-intro');
const stage = intro.querySelector('.stage-window');
const stack = intro.querySelector('.sets-stack');
const sets = [...intro.querySelectorAll('.intro-scene')];
const tracks = sets.map(set => set.querySelector('.scene-copy-track'));
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const motion = document.querySelector('#motion');
const previous = document.querySelector('#previous-panel');
const next = document.querySelector('#next-panel');
const count = document.querySelector('#chapter-progress');
const name = document.querySelector('#scene-name');
let paused = false;
let height = 0, top = 0, span = 0, frame = 0, active = -1;
let state = {index:0, position:0, panel:0, offset:0};
const simpleMotion = () => paused || reduced.matches;
function syncControls() {
 const track = tracks[state.index];
 const panel = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
 state.panel = panel;
 count.textContent = `${panel + 1} / ${track.children.length}`;
 previous.disabled = panel === 0;
 next.disabled = panel === track.children.length - 1;
 [...track.children].forEach((item,i) => {item.inert = i !== panel;});
}
function render() {
 frame = 0;
 const offset = clamp(scrollY - top, 0, span);
 const local = offset / (height * 1.25);
 const segment = Math.min(sets.length - 2, Math.floor(local));
 const fraction = clamp((local - segment - .2) / .8);
 const continuous = Math.min(sets.length - 1, segment + smooth(fraction));
 const position = simpleMotion() ? Math.round(continuous) : continuous;
 const index = Math.round(position);
 stack.style.transform = `translate3d(0,${-position * height}px,0)`;
 stage.style.setProperty('--curtain-night', String(smooth(clamp(position - 1))));
 state = {...state,index,position,offset};
 if (active !== index) {
  active = index;
  sets.forEach((set,i) => {set.inert = i !== index;set.setAttribute('aria-hidden',String(i !== index));});
  name.textContent = sets[index].dataset.name;
 }
 syncControls();
 const onStage = scrollY < top + span + height - 64;
 document.body.classList.toggle('in-theatre',onStage);
}
function schedule() {if (!frame) frame = requestAnimationFrame(render);}
function measure() {
 height = stage.clientHeight;
 top = intro.getBoundingClientRect().top + scrollY;
 span = (sets.length - 1) * height * 1.25;
 intro.style.height = `${span + height}px`;
 render();
}
function moveContent(step) {
 const track = tracks[state.index];
 const panel = clamp(Math.round(track.scrollLeft / track.clientWidth) + step,0,track.children.length - 1);
 track.scrollTo({left:panel * track.clientWidth,behavior:simpleMotion()?'instant':'smooth'});
}
previous.addEventListener('click',()=>moveContent(-1));
next.addEventListener('click',()=>moveContent(1));
tracks.forEach(track=> {
 track.addEventListener('scroll',()=>{if (track === tracks[state.index]) syncControls();},{passive:true});
 track.addEventListener('keydown',event=>{
  if (!['ArrowLeft','ArrowRight'].includes(event.key) || event.target.closest('a,button,input,textarea,select')) return;
  event.preventDefault();moveContent(event.key === 'ArrowRight'?1:-1);
 });
});
document.addEventListener('keydown',event=>{
 if(event.defaultPrevented || !['ArrowLeft','ArrowRight'].includes(event.key) || event.metaKey || event.ctrlKey || event.altKey) return;
 if(event.target !== document.body || scrollY >= top + span + height) return;
 event.preventDefault();moveContent(event.key==='ArrowRight'?1:-1);
});
function syncMotion() {
 document.body.classList.toggle('motion-paused',simpleMotion());
 motion.setAttribute('aria-pressed',String(simpleMotion()));
 motion.disabled = reduced.matches;
 motion.setAttribute('aria-label',simpleMotion()?'Activar movimiento':'Reducir movimiento');
 motion.title = reduced.matches?'Movimiento reducido según tu dispositivo':motion.getAttribute('aria-label');
 motion.innerHTML = simpleMotion()?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';
 render();
}
motion.addEventListener('click',()=>{paused=!paused;syncMotion();});
reduced.addEventListener('change',syncMotion);
window.addEventListener('scroll',schedule,{passive:true});
window.addEventListener('resize',()=>{
 const panels=tracks.map(track=>Math.round(track.scrollLeft/Math.max(1,track.clientWidth)));
 measure();tracks.forEach((track,i)=>track.scrollTo({left:panels[i]*track.clientWidth,behavior:'instant'}));
},{passive:true});
// The header follows ordinary document sections. Anchors retain native history,
// keyboard behavior and shareable URLs; the theatre never rewrites their hash.
const navLinks=[...document.querySelectorAll('.site-header nav a')];
const observed=[...document.querySelectorAll('.editorial-world section[id]')];
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});
},{rootMargin:'-15% 0px -60% 0px',threshold:0});
observed.forEach(section=>observer.observe(section));
document.documentElement.classList.add('js-world');
measure();syncMotion();
document.fonts.ready.then(measure);
window.addEventListener('load',()=>{
 measure();const anchor=document.getElementById(location.hash.slice(1));
 if(anchor && anchor !== intro) anchor.scrollIntoView({behavior:'instant'});
},{once:true});
window.theatreDebug=()=>({...state,height,span,top,width:stage.clientWidth,paused:simpleMotion(),scene:sets[state.index].dataset.name,horizontal:tracks.map(t=>t.scrollLeft),introBottom:top+span+height});

})();
