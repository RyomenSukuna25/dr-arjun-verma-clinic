
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader = document.querySelector('.loader');
  window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'), reduce?0:350),{once:true});
  setTimeout(()=>loader?.classList.add('hide'),1800);
  const progress=document.querySelector('.progress'), header=document.querySelector('.site-header'), back=document.querySelector('.back');
  let ticking=false;
  function scrollUI(){const y=scrollY||0; header?.classList.toggle('scrolled',y>15); back?.classList.toggle('show',y>650); if(progress){const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max?Math.min(y/max,1):0})`;} ticking=false;}
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(scrollUI);ticking=true;}},{passive:true}); scrollUI();
  const menu=document.querySelector('.menu'), nav=document.querySelector('.nav');
  menu?.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',open)});
  function closeDrops(){document.querySelectorAll('.drop.open').forEach(d=>d.classList.remove('open'));}
  document.querySelectorAll('.drop-btn').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const d=b.closest('.drop');const open=d.classList.contains('open');closeDrops();if(!open)d.classList.add('open');}));
  document.addEventListener('click',e=>{if(!e.target.closest('.drop'))closeDrops(); if(!e.target.closest('.nav')&&!e.target.closest('.menu'))nav?.classList.remove('open');});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrops();nav?.classList.remove('open')}});
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
  const items=document.querySelectorAll('.reveal,.stagger>*');
  if(reduce)items.forEach(i=>i.classList.add('revealed')); else {const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -30px'});items.forEach(i=>io.observe(i));}
  document.querySelectorAll('.faq button').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq');const was=item.classList.contains('open');item.parentElement.querySelectorAll('.faq.open').forEach(x=>x.classList.remove('open'));if(!was)item.classList.add('open');}));
  document.querySelectorAll('.back').forEach(b=>b.addEventListener('click',()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'})));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:reduce?'auto':'smooth'})}}));
  // Hero slider
  const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.dot')];let idx=0,timer;
  function show(n){if(!slides.length)return;idx=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===idx));dots.forEach((d,i)=>{d.classList.toggle('active',i===idx);d.setAttribute('aria-current',i===idx?'true':'false')});}
  function start(){if(reduce||slides.length<2)return;clearInterval(timer);timer=setInterval(()=>show(idx+1),6200)}
  dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);start()}));document.querySelector('.next')?.addEventListener('click',()=>{show(idx+1);start()});document.querySelector('.prev')?.addEventListener('click',()=>{show(idx-1);start()});document.querySelector('.hero')?.addEventListener('mouseenter',()=>clearInterval(timer));document.querySelector('.hero')?.addEventListener('mouseleave',start);show(0);start();
  // Counters
  document.querySelectorAll('[data-counter]').forEach(el=>{const target=Number(el.dataset.counter);if(reduce){el.textContent=target;return;}const io=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;const startT=performance.now(),dur=1200;function tick(t){const p=Math.min((t-startT)/dur,1),v=target*(1-Math.pow(1-p,3));el.textContent=Math.round(v);if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);io.disconnect()},{threshold:.5});io.observe(el)});
  // Front-end-only contact form: never sends to a broken backend. It gives a clear success state.
  document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const btn=form.querySelector('button[type=submit]');const status=form.querySelector('.form-status');if(btn){btn.disabled=true;btn.textContent='Enquiry prepared ✓'}if(status){status.hidden=false;status.textContent='Thank you. Your enquiry details are ready. Please use the practice contact channel provided to complete the appointment request.'}}));
})();
