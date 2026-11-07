const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ICONS={gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18M7 16v3M17 16v3"/><circle cx="8" cy="13" r=".8"/><circle cx="16" cy="13" r=".8"/>',heart:'<path d="M3 12h4l2-5 4 10 2-5h6"/>'};
/* nav */
const nav=$('nav'),lk=$('#links');
addEventListener('scroll',()=>{nav.classList.toggle('on',scrollY>30);$('#prog').style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%'},{passive:true});
const bg=$('#bg');const setMenu=o=>{lk.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu');bg.textContent=o?'✕':'☰'};bg.onclick=()=>setMenu(!lk.classList.contains('open'));addEventListener('keydown',e=>{if(e.key==='Escape'&&lk.classList.contains('open')){setMenu(false);bg.focus()}});$$('a',lk).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
const secs=$$('section[id]');
if(secs.length){const o=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)$$('a',lk).forEach(a=>a.classList.toggle('act',a.getAttribute('href').endsWith('#'+x.target.id)))}),{rootMargin:'-45% 0px -50% 0px'});secs.forEach(s=>o.observe(s))}
/* cursor (fine pointers only; skipped on touch devices) */
const c1=$('.cur'),c2=$('.cur2');
if(c1&&c2&&matchMedia('(hover:hover) and (pointer:fine)').matches){let mx=0,my=0,cx=0,cy=0,run=false;
const loop=()=>{cx+=(mx-cx)*.18;cy+=(my-cy)*.18;c2.style.transform=`translate(${cx}px,${cy}px)`;if(Math.abs(mx-cx)>.1||Math.abs(my-cy)>.1)requestAnimationFrame(loop);else run=false};
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;c1.style.opacity=c2.style.opacity=1;c1.style.transform=`translate(${mx}px,${my}px)`;if(!run){run=true;requestAnimationFrame(loop)}},{passive:true});
document.addEventListener('mouseleave',()=>{c1.style.opacity=c2.style.opacity=0});
document.addEventListener('mouseover',e=>c2.classList.toggle('h',!!e.target.closest('a,button,summary')))}
/* build tracks */
const ts=$('#ts');
if(ts){ts.innerHTML=TRACKS.map(t=>`<article class="tc glass"><div class="ti"><svg viewBox="0 0 24 24">${ICONS[t.icon]}</svg></div><p class="eyebrow" style="margin-bottom:4px">Track 0${t.n}</p><h3>${t.name}</h3><p>${t.tag}</p><div class="pl">${PS.filter(p=>p.track==t.n).map(p=>`<a href="ps.html?id=${p.n}"><b>PS ${String(p.n).padStart(2,'0')}</b>${p.title}</a>`).join('')}</div></article>`).join('');
}
/* reveal */
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
const rvAll=()=>$$('.rv').forEach(e=>io.observe(e));rvAll();
/* countdown */
const T=new Date('2027-02-25T08:00:00+05:30');
if($('#d'))(function t(){let s=Math.max(0,(T-new Date())/1e3|0);const p=(n,l)=>String(n).padStart(l,'0');$('#d').textContent=p(s/86400|0,3);$('#h').textContent=p(s/3600%24|0,2);$('#m').textContent=p(s/60%60|0,2);$('#s').textContent=p(s%60,2);setTimeout(t,1000)})();
/* hero particle network */
const cv=$('#cv');if(cv){const x=cv.getContext('2d');let W,H,P=[];const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(70,W/18|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:Math.random()-.5,vy:Math.random()-.5}))};rs();addEventListener('resize',rs);
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;(function d(){if(document.hidden){requestAnimationFrame(d);return}x.clearRect(0,0,W,H);P.forEach((a,i)=>{a.x=(a.x+a.vx*.4+W)%W;a.y=(a.y+a.vy*.4+H)%H;x.fillStyle='rgba(45,226,255,.8)';x.fillRect(a.x,a.y,2,2);for(let j=i+1;j<P.length;j++){const b=P[j],q=Math.hypot(a.x-b.x,a.y-b.y);if(q<130){x.strokeStyle=`rgba(27,140,255,${.35*(1-q/130)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}});if(!RM)requestAnimationFrame(d)})()}
/* slider */
const sl=$('#sl');if(sl){const S=$$('.sl',sl),D=$$('.dots button',sl);let i=0,tm;const go=n=>{S[i].classList.remove('on');D[i].classList.remove('on');i=(n+S.length)%S.length;S[i].classList.add('on');D[i].classList.add('on')};const st=()=>{clearInterval(tm);tm=setInterval(()=>go(i+1),4500)};D.forEach((b,n)=>b.onclick=()=>{go(n);st()});st()}
/* timeline line */
const tl=$('#tl');if(tl){const f=$('#fill'),it=$$('.ti2',tl);const u=()=>{const r=tl.getBoundingClientRect(),p=Math.min(r.height,Math.max(0,innerHeight*.6-r.top));f.style.height=p+'px';it.forEach(e=>{if(e.getBoundingClientRect().top<innerHeight*.7)e.classList.add('act')})};addEventListener('scroll',u,{passive:true});u()}
/* tilt */
$$('.sc').forEach(e=>{e.addEventListener('mousemove',v=>{const r=e.getBoundingClientRect();e.style.transform=`perspective(900px) rotateX(${(.5-(v.clientY-r.top)/r.height)*6}deg) rotateY(${((v.clientX-r.left)/r.width-.5)*6}deg) translateY(-6px)`});e.addEventListener('mouseleave',()=>e.style.transform='')});
/* PS detail page */
const app=$('#app');if(app){const id=+new URLSearchParams(location.search).get('id')||1,p=PS.find(x=>x.n==id)||PS[0],t=TRACKS[p.track-1],pad=n=>String(n).padStart(2,'0');document.title=`PS ${pad(p.n)} | MICROHACK'27`;
const pv=PS[p.n-2],nx=PS[p.n];
app.innerHTML=`<section class="pshero"><div class="wrap"><p class="crumb load"><a href="index.html#tracks">Tracks</a> / Track 0${t.n}: ${t.name} / PS ${pad(p.n)}</p><p class="eyebrow load">Problem Statement ${pad(p.n)}</p><h1 class="load">${p.title}</h1><div class="load"><span class="pill">Track 0${t.n}: ${t.name}</span><span class="pill">Team size 1–4</span><span class="pill">36 hours</span><span class="pill">Free registration</span></div></div></section>
<div class="wrap pb"><div><div class="glass rv"><h2>Description</h2><p>${p.desc}</p><div style="margin-top:16px">${p.skills.map(s=>`<span class="pill">${s}</span>`).join('')}</div></div>
<div class="glass rv"><h2>Hardware Requirements</h2><p style="margin-bottom:16px">Recommended Microchip development kits for this problem statement. Development kits will be provided only to shortlisted participants.</p>${p.kits.map(k=>`<a class="kit" href="${k.url}" target="_blank" rel="noopener"><span><b>${k.id}</b>${k.name}</span><em>Microchip ↗</em></a>`).join('')}</div>
<div class="glass rv"><h2>What We Provide</h2><p>Development kits will be provided only to shortlisted participants.</p></div>
<div class="glass rv"><h2>What Participants Should Bring</h2><ul class="bl"><li>→ <b>Laptop and charger.</b> See the laptop requirements below.</li><li>→ <b>Required sensors, controllers and peripheral components for this problem statement</b></li></ul></div>
<div class="glass rv"><h2>Laptop Requirements</h2><table>${SETUP.laptop.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table></div>
<div class="glass rv"><h2>Software to Install Before the Event</h2><ul>${SETUP.software.map(s=>`<li>→ <a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a></li>`).join('')}</ul><p style="margin-top:14px;font-size:.88rem">${SETUP.extra}</p></div>
<div class="pn">${pv?`<a href="ps.html?id=${pv.n}">← PS ${pad(pv.n)}</a>`:'<span></span>'}${nx?`<a href="ps.html?id=${nx.n}">PS ${pad(nx.n)} →</a>`:''}</div></div>
<aside class="side"><div class="glass rv"><p class="eyebrow">Register</p><h2 style="font-size:1.4rem">Ready to build?</h2><p>Free registration. Select PS ${pad(p.n)} as your preferred problem statement in the form.</p><a class="btn p" href="${FORM}" target="_blank" rel="noopener">Register Free ↗</a>
<table style="margin-top:20px"><tr><td>Dates</td><td>25–26 Feb 2027</td></tr><tr><td>Start</td><td>8:00 AM IST</td></tr><tr><td>Venue</td><td><a style="color:var(--cyan)" href="https://maps.app.goo.gl/cnPQGekzFcbZwpG28" target="_blank" rel="noopener">Geetham Auditorium ↗</a></td></tr><tr><td>Team</td><td>1–4 members</td></tr><tr><td>Help</td><td><a style="color:var(--cyan)" href="index.html#support">Support</a></td></tr></table></div></aside></div>`;rvAll();
$$('.rv',app).forEach(e=>io.observe(e));scrollTo(0,0)}
