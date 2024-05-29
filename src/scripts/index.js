import { languageOption, languageSelector, navButtons, navbarIcon, navbarMenu, portfolioContainer, technologiesContainers } from './selectors.js';
import { textByLanguage } from './textGenerator.js';

const userLang = localStorage.getItem('language') ?? navigator.language;

if (userLang.includes('es')) {
   textByLanguage('es');
}

function isAnimate(element) {
   return !element.classList.contains('animate-pop-in');
}

const options = {
   root: null,
   rootMargin: '0px',
   threshold: [0.1, 1.0]
};

const observer = new IntersectionObserver((entries) => {
   if (entries[0].isIntersecting && isAnimate(entries[0].target)) entries[0].target.classList.add('animate-pop-in');
}, options);

[...portfolioContainer, ...technologiesContainers].forEach((element) => observer.observe(element));

navbarIcon.addEventListener('click', () => {
   if (navbarMenu.classList.contains('inactive')) {
      navbarMenu.classList.remove('inactive');
      if (!languageOption.classList.contains('inactive')) {
         languageOption.classList.add('inactive');
      }
   } else {
      navbarMenu.classList.add('inactive');
   }
});

languageSelector.addEventListener('click', () => {

   if (languageOption.classList.contains('inactive')) {
      languageOption.classList.remove('inactive');
      languageOption.removeAttribute('aria-hidden');

      if (!navbarMenu.classList.contains('inactive')) {
         navbarMenu.classList.add('inactive');
         navbarMenu.setAttribute('aria-hidden', true);
      }
   } else {
      languageOption.classList.add('inactive');
      languageOption.setAttribute('aria-hidden', true);
   }
});

languageOption.addEventListener('click', () => {
   if (languageOption.innerHTML.includes('Inglés')) {
      textByLanguage('en');
      localStorage.setItem('language', 'en');
      languageOption.classList.add('inactive');
      languageOption.setAttribute('aria-hidden', true);
      
   } else {
      textByLanguage('es');
      localStorage.setItem('language', 'es');
      languageOption.classList.add('inactive');
      languageOption.setAttribute('aria-hidden', true);
   }
});

navButtons.forEach((button) => button.addEventListener('click', () => {
   navbarMenu.classList.add('inactive');
   navbarMenu.setAttribute('aria-hidden', true);
}));