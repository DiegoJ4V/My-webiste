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
      if (!navbarMenu.classList.contains('inactive')) {
         navbarMenu.classList.add('inactive');
      }
   } else {
      languageOption.classList.add('inactive');
   }
});

languageOption.addEventListener('click', () => {
   if (languageOption.innerHTML.includes('Inglés')) {
      englishText();
      languageOption.classList.add('inactive');
   } else {
      españolText();
      languageOption.classList.add('inactive');
   }
});

navButtons.forEach((button) => button.addEventListener('click', () => {
   navbarMenu.classList.add('inactive');
}));