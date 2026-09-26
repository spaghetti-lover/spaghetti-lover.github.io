const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';

document.querySelectorAll('main a[href^="http"]').forEach((link) => {
  link.target = '_blank';
  link.rel = 'noreferrer';
});

const syncThemeToggle = () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const label = isDark ? themeToggle.dataset.lightLabel : themeToggle.dataset.darkLabel;
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
  themeToggle.setAttribute('aria-pressed', String(isDark));
};

themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  if (isDark) delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = 'dark';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  syncThemeToggle();
});
syncThemeToggle();

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');

document.querySelectorAll('.project-media--image').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.querySelector('img').src;
    lightboxImage.alt = button.querySelector('img').alt;
    lightbox.showModal();
  });
});

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

const newsToggle = document.querySelector('[data-news-toggle]');
newsToggle?.addEventListener('click', () => {
  const expanded = newsToggle.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('[data-news-extra]').forEach((item) => { item.hidden = expanded; });
  newsToggle.setAttribute('aria-expanded', String(!expanded));
  newsToggle.textContent = expanded ? newsToggle.dataset.moreLabel : newsToggle.dataset.lessLabel;
});

document.querySelectorAll('[data-project-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const group = tab.dataset.projectTab;
    document.querySelectorAll('[data-project-tab]').forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    document.querySelectorAll('[data-project-panel]').forEach((panel) => {
      panel.classList.toggle('is-hidden', panel.dataset.projectPanel !== group);
    });
  });
});
