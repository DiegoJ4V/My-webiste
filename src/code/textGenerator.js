import { deskNav, headerParagraph, headerReply, languageOption, languageSelector, mobNav, projectDesc, projectFeatures, projectFeaturesTitle, projectTechTitle, techTitle } from './selectors.js';
import { portfolio, textPrincipal } from './texts.js';

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
};

export function textByLanguage(preferLanguage) {
   let textLanguage;
   let textVariables;
   let portfolioText;
   if (preferLanguage.includes('es')) {
      textLanguage =  textPrincipal.es;
      portfolioText = portfolio[0].es;
      textVariables = languageVariables.es;
   } else {
      textLanguage = textPrincipal.en;
      portfolioText = portfolio[0].en;
      textVariables = languageVariables.en;
   }

   const nav = textLanguage.nav;

   deskNav[0].textContent = nav.presentation;
   deskNav[1].textContent = nav.portfolio;
   deskNav[2].textContent = nav.technologies;

   mobNav[0].textContent = nav.presentation;
   mobNav[1].textContent = nav.portfolio;
   mobNav[2].textContent = nav.technologies;

   languageSelector.textContent = textVariables[0];
   languageOption.textContent = textVariables[1];

   headerParagraph[1].textContent = textLanguage.header.from;
   headerParagraph[2].textContent = textLanguage.header.to;
   headerParagraph[3].textContent = textLanguage.header.introduction;
   headerReply.textContent = textLanguage.header.email;

   projectDesc.textContent = portfolioText.description;
   projectFeaturesTitle.textContent = portfolioText.featuresTitle;
   for (let i = 0; i < projectFeatures.length ; i++) {
      projectFeatures[i].innerHTML = portfolioText.features[i];
   }
   projectTechTitle.textContent = portfolioText.specTech;

   techTitle.textContent = textLanguage.technologies;
}