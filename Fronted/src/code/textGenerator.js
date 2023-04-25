const userLang = navigator.language;

function españolText() {
   const { es } = text;
   const nav = es.nav;
   const portfolioText = portfolio[0].es;

   deskNav[0].textContent = nav.technologies;
   deskNav[1].textContent = nav.about;
   deskNav[2].textContent = nav.portfolio;
   deskNav[3].textContent = nav.contact;

   mobNav[0].textContent = nav.technologies;
   mobNav[1].textContent = nav.about;
   mobNav[2].textContent = nav.portfolio;
   mobNav[3].textContent = nav.contact;

   languageSelector.textContent = 'Español';
   languageOption.textContent = 'Inglés';

   headerParagraph.textContent = es.introduction;

   techTitle.textContent = es.technologies;

   aboutTitle.textContent = es.about.title;
   aboutPublished[0].textContent = es.about.published[0];
   aboutPublished[1].textContent = es.about.published[1];
   aboutPublished[2].textContent = es.about.published[2];
   aboutDesc[0].textContent = es.about.history[0];
   aboutDesc[1].textContent = es.about.history[1];
   aboutDesc[2].textContent = es.about.history[2];
   portfolioTitle.textContent = es.portfolio;
   projectTech.textContent = portfolioText.specTech;
   projectTitle.textContent = portfolioText.projectTitle;
   projectDesc.textContent = portfolioText.description;

   contactTitle.textContent = es.contact;
}

function englishText() {
   const { en } = text;
   const nav = en.nav;
   const portfolioText = portfolio[0].en;

   deskNav[0].textContent = nav.technologies;
   deskNav[1].textContent = nav.about;
   deskNav[2].textContent = nav.portfolio;
   deskNav[3].textContent = nav.contact;

   mobNav[0].textContent = nav.technologies;
   mobNav[1].textContent = nav.about;
   mobNav[2].textContent = nav.portfolio;
   mobNav[3].textContent = nav.contact;

   languageSelector.textContent = 'English';
   languageOption.textContent = 'Spanish';

   headerParagraph.textContent = en.introduction;

   techTitle.textContent = en.technologies;

   aboutTitle.textContent = en.about.title;
   aboutPublished[0].textContent = en.about.published[0];
   aboutPublished[1].textContent = en.about.published[1];
   aboutPublished[2].textContent = en.about.published[2];
   aboutDesc[0].textContent = en.about.history[0];
   aboutDesc[1].textContent = en.about.history[1];
   aboutDesc[2].textContent = en.about.history[2];

   portfolioTitle.textContent = en.portfolio;
   projectTech.textContent = portfolioText.specTech;
   projectTitle.textContent = portfolioText.projectTitle;
   projectDesc.textContent = portfolioText.description;

   contactTitle.textContent = en.contact;
}

if (userLang.includes('es')) {
   españolText();
}