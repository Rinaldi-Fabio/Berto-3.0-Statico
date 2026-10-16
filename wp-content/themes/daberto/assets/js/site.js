/* Il contenuto resta visibile: si anima soltanto la tinta sopra la foto. */
(() => {
 document.documentElement.classList.add('has-site-js');
 const scrolled = () => document.documentElement.classList.toggle('is-scrolled', scrollY > 40);
 addEventListener('scroll', scrolled, { passive: true });
 scrolled();
 const reduce = matchMedia('(prefers-reduced-motion: reduce)');
 const bar = document.querySelector('.mobile-bar');
 const actions = document.querySelector('.hero .actions');
 if ('IntersectionObserver' in window) {
  if (bar && actions) {
   bar.hidden = true; // Start hidden: the opening's own buttons are on screen at load.
   new IntersectionObserver(([entry]) => {
    bar.hidden = entry.isIntersecting;
   }, { threshold: 0 }).observe(actions);
  }
  if (!reduce.matches) {
   const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     if (entry.isIntersecting) {
      entry.target.classList.add('luce-enter');
      observer.unobserve(entry.target);
     }
    });
   }, { threshold: .12 });
   document.querySelectorAll('.is-style-luce').forEach(photo => observer.observe(photo));
  }
 }
 document.addEventListener('keydown', event => {
  if (event.key === 'Tab') document.documentElement.classList.add('keyboard');
 });
 document.addEventListener('pointerdown', () => document.documentElement.classList.remove('keyboard'));
})();
