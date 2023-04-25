import { portfolio } from "./getTexts";

const lang = document.querySelector('html');

class projectCard extends HTMLElement {
   constructor() {
      super();
      
   }

   getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
      <article class="portfolio-container--card">
         <div class="portfolio--card--tabs">
            <a href="${portfolio.en.projects[0].github}" class="card--tabs__icon">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" fill="black"/>
               </svg>                     
            </a>
            <a href="${portfolio.en.projects[0].pageRedirect}" class="card--tabs__icon">
               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H12C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15V10M7 11L17 1M17 1H12M17 1V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>                     
               ${portfolio.en.projects[0].url}
            </a>
         </div>
         <div class="portfolio--card--content">
            <img src="../src/assets/${portfolio.en.projects[0].image}" alt="">
            <p>${portfolio.en.projects[0].specTech}</p>
            <ul>
               <li>${portfolio.en.projects[0].tech}</li>
            </ul>
            <h3>${portfolio.en.projects[0].projectTitle}</h3>
            <p>${portfolio.en.projects[0].description}</p>
         </div>
      </article>
      `;

      return template;
   }

   render() {
      this.appendChild(this.getTemplate().content.cloneNode(true));
   }

   connectedCallback() {
      this.render();
   }
}

customElements.define('project-card', projectCard);
