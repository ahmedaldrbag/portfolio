
// ضع رابط حساب Facebook الحقيقي هنا فقط، مثال:
// const FACEBOOK_URL = "https://www.facebook.com/username";
const FACEBOOK_URL = "";

document.querySelectorAll('[data-facebook-link]').forEach(link => {
  if (FACEBOOK_URL) {
    link.href = FACEBOOK_URL;
    link.target = '_blank';
    link.rel = 'noopener';
  } else {
    link.classList.add('social-unavailable');
    link.setAttribute('title', 'أرسل رابط Facebook الخاص بك لإضافته هنا');
    link.addEventListener('click', event => event.preventDefault());
  }
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    projects.forEach(project => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
