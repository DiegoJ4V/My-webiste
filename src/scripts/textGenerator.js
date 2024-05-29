import { closeModalButton, deskNav, headerParagraph, headerReply, languageOption, languageSelector, mobNav, portfolioTitle, projectDesc, projectFeatures, 
   projectFeaturesTitle, projectTechTitle, showModalButton, techTitle } from './selectors.js';
import { portfolio, principalText  } from './texts.js';

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
   if (preferLanguage.includes('es')) {
      textLanguage =  principalText.es;
      textVariables = languageVariables.es;
   } else {
      textLanguage = principalText.en;
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
   headerParagraph[3].textContent = textLanguage.header.about__1;
   headerParagraph[4].textContent = textLanguage.header.about__2;
   headerReply.textContent = textLanguage.header.email;

   portfolioTitle.textContent = textLanguage.portfolio;
   showModalButton.forEach((button) => button.textContent = textLanguage.modal.show);
   closeModalButton.forEach((button) => button.textContent = textLanguage.modal.close);

   techTitle.textContent = textLanguage.technologies;

   textForPortfolio(preferLanguage);
}


function textForPortfolio(preferLanguage) {
   for (let i = 0; i < portfolio.length; i++) {
      let portfolioText;
      if (preferLanguage.includes('es')) portfolioText = portfolio[i].es;
      else portfolioText = portfolio[i].en;

      projectDesc[i].textContent = portfolioText.description;
      projectFeaturesTitle[i].textContent = portfolioText.featuresTitle;

      let pastFeatures = portfolio[i - 1]?.en?.features?.length ?? 0;
      for (let j = 0; j < portfolioText.features.length ; j++) { 
         projectFeatures[pastFeatures].innerHTML = portfolioText?.features[j];
         pastFeatures++;
      }
      
      projectTechTitle[i].textContent = portfolioText.specTech;      
   }
}