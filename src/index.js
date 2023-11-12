import { aboutContainers, languageOption, languageSelector, navButtons, navbarIcon, navbarMenu, technologiesContainers } from "./code/selectors.js";
import { textByLanguage } from "./code/textGenerator.js";

const userLang = navigator.language;

if (userLang.includes('es')) {
   textByLanguage('es');
}

function isInViewport(element) {
   const rect = element.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200

   );
}

function isAnimate(element) {
   return !element.classList.contains("animate-pop-in");
}

document.addEventListener("scroll", () => {
   technologiesContainers.forEach((element) => {
      if (isInViewport(element) && isAnimate(element)) {
         element.classList.add("animate-pop-in");
      }
   });
   aboutContainers.forEach((element) => {
      if (isInViewport(element) && isAnimate(element)) {
         element.classList.add("animate-pop-in");
      }
   });
});

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
      languageOption.removeAttribute("aria-hidden");

      if (!navbarMenu.classList.contains('inactive')) {
         navbarMenu.classList.add('inactive');
         navbarMenu.setAttribute("aria-hidden", true);
      }
   } else {
      languageOption.classList.add('inactive');
      languageOption.setAttribute("aria-hidden", true);
   }
});

languageOption.addEventListener('click', () => {
   if (languageOption.innerHTML.includes('Inglés')) {
      textByLanguage('en');
      languageOption.classList.add('inactive');
      languageOption.setAttribute("aria-hidden", true);
      
   } else {
      textByLanguage('es');
      languageOption.classList.add('inactive');
      languageOption.setAttribute("aria-hidden", true);
   }
});

navButtons.forEach((button) => button.addEventListener('click', () => {
   navbarMenu.classList.add('inactive');
   navbarMenu.setAttribute("aria-hidden", true);
}));