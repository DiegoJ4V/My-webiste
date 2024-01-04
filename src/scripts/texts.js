export const textPrincipal = {
   es: {
      nav: {
         presentation: 'Presentación',
         portfolio: 'Portafolio',
         technologies: 'Tecnologías',
         about: 'Acerca de',
      },
      header: {
         from: 'Desde: México',
         to: 'Para: Usted',
         introduction: 'Buen día.\nMe gustaría presentarme formalmente.\nENTUSIASTA en el ecosistema web con React y Spring. Autodidacta bilingüe que le gusta enfrentarse al código de forma nativa tanto como sea posible. Quien buscara y aprenderá lo necesario para enfrentarse a todos los problemas que se enfrente.',
         email: 'Responder'
      },
      technologies: 'Tecnologías',
      portfolio: 'Portafolio',
   },
   en: {
      nav: {
         presentation: 'Presentation',
         portfolio: 'Portfolio',
         technologies: 'Technologies',
         about: 'About',
      },
      header: {
         from: 'From: México',
         to: 'To: You',
         introduction: 'Good day.\nI would like to formally introduce myself.\nENTHUSIASTIC in the web ecosystem with React and Spring. Bilingual self-taught who likes to go to the code as native as possible. Who will search and learn the necessary to go to the problems he faces.',
         email: 'Reply'
      },
      technologies: 'Technologies',
      portfolio: 'Portfolio',
   }
};

export const portfolio = [
   {
      es: {
         altImage: 'Página de inicio de sesión para bank account',
         description: 'Single page application, y simulación de un sistema de banco desplegado en Azure.',
         specTech: 'Tecnologías usadas:',
         featuresTitle : 'Características',
         features: [
            '- Material design', 
            '- Sistema de transacciones, y la capacidad para automatizarlas',
            '- Diseño responsivo con modo claro y oscuro',
            '- Traducciones para los idiomas Español e Ingles',
            '- Sistema de seguridad basado en jwt y tokens',
            '- CI/CD con github actions',
            '- Pruebas con junit y spring para Java',
            '- Pruebas con vitest, msw, y react testing library para Javascript',
            '- <span>Componentes, y páginas con pruebas de interacción con <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">Storybook</a></span><br /><small>❗ Precaución: Storybook tiene problemas con la versión de móvil</small>',
            '- Documentación de la api usando <a target="_blank" href="https://bankback.azurewebsites.net/swagger-ui/index.html#">swagger</a>',
            '- Documentación con JSDoc y Javadoc'
         ]
      },
      en: {
         altImage: 'Sign in page for bank account',
         description: 'Single page application, and simulation of bank system deployed in Azure.',
         specTech: 'Technologies used:',
         featuresTitle : 'Features',
         features: [
            '- Material design', 
            '- Transactions system, and the ability to automate them',
            '- Responsive design with light and dark mode',
            '- Translation for English and Spanish language',
            '- Security system based in jwt and tokens',
            '- CI/CD with github actions',
            '- Testing with junit and spring for Java',
            '- Testing with vitest, msw, and react testing library for Javascript',
            '- <span>Components, and pages with interaction tests with <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">Storybook</a></span><br /><small>❗ Caution: Storybook has problems with the mobile version</small>',
            '- Api documentation using <a target="_blank" href="https://bankback.azurewebsites.net/swagger-ui/index.html#">swagger</a>',
            '- Documentation with JSDoc and Javadoc'
         ]
      }
   },
   {
      es: {
         description: 'Este proyecto en curso se centra en la creación de un sitio web completo de pedidos de pizza construido como una aplicación multipágina (MPA).',
         specTech: 'Tecnologías usadas:',
         featuresTitle : 'Características',
         features: [
            '- El objetivo principal es utilizar React, Astro y Typescript para el desarrollo frontend, ofreciendo una experiencia de usuario fluida y atractiva.', 
            '- Las operaciones de backend se están desarrollando utilizando Spring Boot, Java, MySQL y Docker para garantizar una gestión segura y eficiente de los pedidos y los datos de los clientes.',
            '- Junto con las pipelines CI/CD a través de GitHub Actions, pretende agilizar los procesos de desarrollo.',
         ]
      },
      en: {
         description: 'This ongoing project focuses on crafting a comprehensive pizza ordering website built as a Multi-Page Application (MPA).',
         specTech: 'Technologies used:',
         featuresTitle : 'Features',
         features: [
            '- The primary objective is to utilize React, Astro, and Typescript for frontend development, offering a seamless and engaging user experience.', 
            '- Backend operations are being developed using Spring Boot, Java, MySQL, and Docker to ensure secure and efficient handling of orders and customer data.',
            '- Coupled with CI/CD pipelines through GitHub Actions, aims to streamline development processes.',
         ]
      }
   },
];