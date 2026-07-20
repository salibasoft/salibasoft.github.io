(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  const nav = document.querySelector('.topbar nav');
  const menu = document.querySelector('.menu-btn');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }
  const address = atob('amloYWRzYWxpYmEzOUBnbWFpbC5jb20=');
  document.querySelectorAll('[data-email]').forEach(link => {
    const subject = link.getAttribute('data-subject') || 'Project inquiry from USSOFTWARE';
    link.setAttribute('href', `mailto:${address}?subject=${encodeURIComponent(subject)}`);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }
})();