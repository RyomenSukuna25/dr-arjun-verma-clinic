(() => {
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items=document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger > *,.scale-reveal,.line-reveal');
  if(reduced){items.forEach(el=>el.classList.add('revealed'));return;}
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}
    });
  },{threshold:.1,rootMargin:'0px 0px -40px'});
  items.forEach(el=>observer.observe(el));
})();
