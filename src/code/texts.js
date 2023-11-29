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
      about: {
         title: 'Acerca de mí',
         published: ['Publicado al inicio de este camino', 'Publicado en la mitad de este camino', 'Publicado al ¿final? de este camino'],
         history: [
            'Como una persona que quería ser un programador y que no tenía ni idea de los pasos que dar para trabajar como programador, pero que conocía minecraft y el lenguaje en el que está hecho, y con ello me puso manos a la obra' +
            ' y empece a estudiarlo con la idea de usarlo para hacer mods y practicar con ello y poco a poco ser un programador (Todavia ni siquiera se como se hacen).',
            'He estudiado con cursos de pago así como recursos gratis que he encontrado, y gracias a ello me he dado cuenta de como es el ecosistema web, y cuanto tengo que aprender más allá de Java.',
            'Ahora no solo se backend sino que también fronted, diseño web y multiples tecnologías usadas en el ecosistema web', 
         ]
      },
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
      about: {
         title: 'About me',
         published: ['Published at the beginning of this path', 'Published in the middle of this path', 'Published at the end? of this path'],
         history: [
            'As a person who wants to be a programmer and had no idea of the way to go to work as a programmer, I knew Minecraft and I know in what language it was built in, and with that in mind, ' +
            'I start to study Java with the idea of using it to make mods and practice with it and gradually become a programmer (I still don’t even know how they are made).',
            'I studied on my own using paid courses as well as free resources that I found, and gradually I started to realize how the web ecosystem is, and how much I have to learn beyond to Java.',
            'Now I not only know backend and frontend, web design and various technologies used in the web ecosystem, which I have been able to use in a couple of projects to see what I can do and to understand the possibilities of the web', 
         ]
      },
      portfolio: 'Portfolio',
   }
};

export const portfolio = [
   {
      es: {
         altImage: 'Página de inicio de sesión para bank account',
         specTech: 'Tecnologías usadas:',
         description: 'Single page application, y simulación de un sistema de banco desplegado en Azure.',
         featuresTitle : 'Características',
         features: [
            'Material design', 
            'Sistema de transacciones, y la capacidad para automatizarlas',
            'Diseño responsivo con modo claro y oscuro',
            'Traducciones para los idiomas Español e Ingles',
            'Sistema de seguridad basado en jwt y tokens',
            'CI/CD con github actions',
            'Pruebas con junit y spring para Java',
            'Pruebas con vitest, msw, y react testing library para Javascript',
            '<span>Componentes, y páginas con pruebas de interacción con <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">Storybook</a></span><small>❗ Precaución: Storybook tiene problemas con la versión de móvil</small>',
            'Documentación de la api usando <a target="_blank" href="https://bankback.azurewebsites.net/swagger-ui/index.html#">swagger</a>',
            'Documentación con JSDoc y Javadoc'
         ]
      },
      en: {
         altImage: 'Sign in page for bank account',
         specTech: 'Technologies used:',
         description: 'Single page application, and simulation of bank system deployed in Azure.',
         featuresTitle : 'Features',
         features: [
            'Material design', 
            'Transactions system, and the ability to automate them',
            'Responsive design with light and dark mode',
            'Translation for English and Spanish language',
            'Security system based in jwt and tokens',
            'CI/CD with github actions',
            'Testing with junit and spring for Java',
            'Testing with vitest, msw, and react testing library for Javascript',
            '<span>Components, and pages with interaction tests with <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">Storybook</a></span><small>❗ Caution: Storybook has problems with the mobile version</small>',
            'Api documentation using <a target="_blank" href="https://bankback.azurewebsites.net/swagger-ui/index.html#">swagger</a>',
            'Documentation with JSDoc and Javadoc'
         ]
      }
   },
];

export const altImages = {
   es: [
      'Diseño responsivo',
      'Backend',
      'Sistema de diseño',
      portfolio[0].es.altImage,
   ],
   en: [
      'Responsive design',
      'Backend',
      'Design System',
      portfolio[0].en.altImage,
   ]
};