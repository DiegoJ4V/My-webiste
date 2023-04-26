const userLang = navigator.language;
const languageVariables = {
   es: [
      'Español',
      'Inglés',
      'Correo',
   ],
   en: [
      'English',
      'Spanish',
      'Email',
   ]
}

function textByLanguage(preferLanguage) {
   let textLanguage;
   let textVariables;
   let portfolioText;
   if (preferLanguage.includes('es')) {
      textLanguage =  textPrincipal.es;
      portfolioText = portfolio[0].es;
      textVariables = languageVariables.es;
   } else {
      textLanguage = textPrincipal.en;
      portfolioText = portfolio[0].es;
      textVariables = languageVariables.en;
   }

   const nav = textLanguage.nav;

   deskNav[0].textContent = nav.technologies;
   deskNav[1].textContent = nav.about;
   deskNav[2].textContent = nav.portfolio;
   deskNav[3].textContent = nav.contact;

   mobNav[0].textContent = nav.technologies;
   mobNav[1].textContent = nav.about;
   mobNav[2].textContent = nav.portfolio;
   mobNav[3].textContent = nav.contact;

   languageSelector.textContent = textVariables[0];
   languageOption.textContent = textVariables[1];

   headerParagraph.textContent = textLanguage.introduction;

   techTitle.textContent = textLanguage.technologies;

   aboutTitle.textContent = textLanguage.about.title;
   aboutPublished[0].textContent = textLanguage.about.published[0];
   aboutPublished[1].textContent = textLanguage.about.published[1];
   aboutPublished[2].textContent = textLanguage.about.published[2];
   aboutDesc[0].textContent = textLanguage.about.history[0];
   aboutDesc[1].textContent = textLanguage.about.history[1];
   aboutDesc[2].textContent = textLanguage.about.history[2];

   portfolioTitle.textContent = textLanguage.portfolio;
   projectTech.textContent = portfolioText.specTech;
   projectTitle.textContent = portfolioText.projectTitle;
   projectDesc.textContent = portfolioText.description;

   contactTitle.textContent = textLanguage.contact;
   contactEmail.textContent = textVariables[2];

   altIterator(preferLanguage);
}

function altIterator(altLanguage) {
   let altText;
   if (altLanguage.includes('es')) {
      altText =  altImages.es;
   } else {
      altText = altImages.en;
   }
   for (let i = 0; i < altText.length; i++) {
      images[i].alt = altText[i];
   }
}

if (userLang.includes('es')) {
   textByLanguage('es');
}