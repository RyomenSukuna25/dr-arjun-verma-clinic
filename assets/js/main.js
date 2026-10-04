document.addEventListener('DOMContentLoaded',()=>{
  const root=document.documentElement;
  const loader=document.getElementById('loader');
  const progress=document.getElementById('scrollProgress');
  const backTop=document.getElementById('backTop');
  const header=document.getElementById('siteHeader');
  const menu=document.querySelector('.menu-toggle');
  const nav=document.getElementById('mainNav');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const finishLoad=()=>loader?.classList.add('hidden');
  window.addEventListener('load',()=>setTimeout(finishLoad,reduced?0:350),{once:true});
  setTimeout(finishLoad,1800);

  let ticking=false;
  const updateScroll=()=>{
    const y=window.scrollY||0;
    header?.classList.toggle('scrolled',y>18);
    backTop?.classList.toggle('visible',y>600);
    if(progress){
      const max=document.documentElement.scrollHeight-window.innerHeight;
      progress.style.transform=`scaleX(${max>0?Math.min(y/max,1):0})`;
    }
    ticking=false;
  };
  window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true;}},{passive:true});
  updateScroll();

  menu?.addEventListener('click',()=>{
    const open=nav?.classList.toggle('open')||false;
    menu.setAttribute('aria-expanded',String(open));
    menu.classList.toggle('active',open);
    document.body.classList.toggle('nav-open',open);
  });

  const closeMenus=()=>{
    document.querySelectorAll('.nav-dropdown.open').forEach(box=>{
      box.classList.remove('open');
      box.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded','false');
    });
  };
  document.querySelectorAll('.dropdown-trigger').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const box=btn.closest('.nav-dropdown');
    const willOpen=!box.classList.contains('open');
    closeMenus();
    if(willOpen){box.classList.add('open');btn.setAttribute('aria-expanded','true');}
  }));
  document.addEventListener('click',e=>{
    if(!e.target.closest('.nav-dropdown')) closeMenus();
    if(window.innerWidth<=900 && nav?.classList.contains('open') && !e.target.closest('#mainNav,.menu-toggle')){
      nav.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); menu?.classList.remove('active'); document.body.classList.remove('nav-open');
    }
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeMenus();nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.classList.remove('active');document.body.classList.remove('nav-open');}
  });
  document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{
    if(window.innerWidth<=900){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.classList.remove('active');document.body.classList.remove('nav-open');}
  }));

  document.querySelectorAll('.faq button').forEach(btn=>btn.addEventListener('click',()=>{
    const item=btn.closest('.faq');
    const wasOpen=item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq.open').forEach(other=>other.classList.remove('open'));
    item.classList.toggle('open',!wasOpen);
  }));

  const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.dot')];
  let idx=0,timer;
  const show=n=>{if(!slides.length)return;idx=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===idx));dots.forEach((d,i)=>{d.classList.toggle('active',i===idx);d.setAttribute('aria-current',i===idx?'true':'false');});};
  const start=()=>{if(reduced||slides.length<2)return;clearInterval(timer);timer=setInterval(()=>show(idx+1),6500)};
  dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);start()}));
  document.querySelector('.hero-next')?.addEventListener('click',()=>{show(idx+1);start()});
  document.querySelector('.hero-prev')?.addEventListener('click',()=>{show(idx-1);start()});
  document.querySelector('.hero')?.addEventListener('mouseenter',()=>clearInterval(timer));
  document.querySelector('.hero')?.addEventListener('mouseleave',start);
  show(0);start();

  document.querySelectorAll('.counter').forEach(el=>{
    const target=parseFloat(el.dataset.target||0),suffix=el.dataset.suffix||'';
    if(reduced){el.textContent=target.toLocaleString()+suffix;return;}
    const obs=new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting)return;
      const dur=1200,t0=performance.now();
      const tick=t=>{const p=Math.min((t-t0)/dur,1),v=target*(1-Math.pow(1-p,3));el.textContent=(Number.isInteger(target)?Math.round(v):v.toFixed(1))+suffix;if(p<1)requestAnimationFrame(tick)};
      requestAnimationFrame(tick);obs.disconnect();
    },{threshold:.45});obs.observe(el);
  });

  backTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduced?'auto':'smooth'}));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});}
  }));

  // Subtle pointer depth on premium visual cards.
  if(!reduced && window.matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.premium-tilt').forEach(card=>card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${y*-2.2}deg) rotateY(${x*2.2}deg) translateY(-4px)`;
    }));
    document.querySelectorAll('.premium-tilt').forEach(card=>card.addEventListener('pointerleave',()=>card.style.transform=''));
  }
});
