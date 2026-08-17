/*
  Botequim Paulista — configuração rápida
  ---------------------------------------
  O cardápio principal enviado para produção era de outra marca, então o projeto
  não o publica como Botequim Paulista. Quando houver o URL/PDF oficial, cole aqui.

  Exemplos:
  const MAIN_MENU_URL = "assets/docs/cardapio-botequim-paulista.pdf";
  const MAIN_MENU_URL = "https://seusite.com/cardapio";
*/
const MAIN_MENU_URL = "";

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const menuLink = document.querySelector('.js-main-menu');
const menuToast = document.querySelector('#menu-toast');

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
  });
});

if (menuLink) {
  if (MAIN_MENU_URL.trim()) {
    menuLink.href = MAIN_MENU_URL;
    menuLink.target = '_blank';
    menuLink.rel = 'noopener';
    menuLink.removeAttribute('aria-disabled');
  } else {
    menuLink.addEventListener('click', event => {
      event.preventDefault();
      menuToast?.classList.add('show');
      window.setTimeout(() => menuToast?.classList.remove('show'), 2600);
    });
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('#year').textContent = new Date().getFullYear();
