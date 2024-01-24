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
         introduction: 'Buen día',
         about: 'Me gustaría presentarme formalmente. Soy un desarrollador autodidacta con un enfoque en las aplicaciones web con Java y React. Con un gran confianza en las ultimas tecnologías y el testing para desarrollar aplicaciones solidas y mantenibles con el paso del tiempo.',
         email: 'Responder'
      },
      portfolio: 'Portafolio',
      modal: {
         show: 'Mostrar más',
         close: 'Cerrar'
      },
      technologies: 'Tecnologías',
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
         introduction: 'Good day',
         about: "I would like to formally introduce myself. I'm a self-taught developer with focus on web applications with Java and React. With a great confidence in the latest technologies and testing to develop solid and maintainable applications over time.",
         email: 'Reply'
      },
      portfolio: 'Portfolio',
      modal: {
         show: 'Show more',
         close: 'Close'
      },
      technologies: 'Technologies',
   }
};

export const portfolio = [
   {
      es: {
         altImage: 'Página de inicio de sesión para bank account',
         description: 'Desarrolle un sofisticado sistema bancario como SPA (Single Page Application) priorizando la experiencia del usuario y la fiabilidad a través'
            + 'de pruebas rigurosas y una arquitectura backend segura. Gestionado con éxito el despliegue en la nube, asegurando un rendimiento óptimo y la accesibilidad para los usuarios, al tiempo que proporciona una interfaz visualmente atractiva.',
         specTech: 'Tecnologías usadas:',
         featuresTitle : 'Características',
         features: [
            'Desarrolle 13 componentes, y 11 páginas usando JavaScript con React.',
            'Aplique estilos modernos, con accesibilidad y una gran retroalimentación gracias a los principios de Material Design, utilizando tailwind, y CSS para desarrollar esos estilos',
            'Desarrolle una API con 21 endpoints, y asegurado con el control de acceso de rol y JSON Web Token, utilizando Spring Boot con Java 17 y Gradle para desarrollarlo, y PostgreSQL para manejar los datos',
            'API documentada con Swagger (Muestra <a target="_blank" href="https://bankback.azurewebsites.net/swagger-ui/index.html#">aquí</a>), y en contenedor utilizando Docker',
            'Gestione los 13 componentes de forma aislada con Storybook, asegurando la accesibilidad, las pruebas de interacción y las pruebas de extremo a extremo '
            + '(E2E) a través de las 11 páginas facilitadas por MSW (Mock Service Worker). Muestra <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">aquí</a> (cuidado con la versión móvil, Storybook tiene un error con la navegación)',
            'Utilize Mock Service Worker para simulación de API, Vitest (muy similar a Jest) y React Testing Library para pruebas unitarias y de integración, haciendo +140 casos de prueba, logrando +85% de cobertura',
            'Realize +100 casos de prueba utilizando JUnit y Mockito, logrando +75% de cobertura para pruebas unitarias en el proyecto en general, y pruebas de integración en la capa de base de datos utilizando Spring con Hibernate',
            'Desarrolle 2 CI/CD pipelines para probar, construir, y desplegar el front y el back usando GitHub Actions con un caso especial en el frontend pipeline debido a la técnica de paralelización para mejorar la velocidad global',
            'Desplegué y gestione la aplicación en la infraestructura de nube Azure, utilizando 4 servicios: aplicación web estática, registro de contenedores, servicio de aplicaciones y base de datos Azure para PostgreSQL.'
         ]
      },
      en: {
         altImage: 'Sign in page for bank account',
         description: 'Developed a sophisticated SPA Bank System prioritizing user experience and reliability through stringent testing and secure backend architecture.'
         + ' Successfully managed cloud deployment, ensuring optimal performance and accessibility for users, while providing a visually engaging interface.',
         specTech: 'Technologies used:',
         featuresTitle : 'Features',
         features: [
            'Developed 13 components, and 11 pages using JavaScript with React',
            'Applied modern styles, accessibility and a great feedback thanks to the Material Design principles, utilizing tailwind, and CSS for develop that styles',
            'Developed an API with 21 endpoints, and secured with role access control and JSON Web Token, using Spring Boot with Java and Gradle to develop it, and PostgreSQL to handle the data',
            'API documented with Swagger (Showcase <a target="_blank" href="https://bankback.azurewebsites.net/swagger-ui/index.html#">here</a>), and containerized using Docker',
            'Managed all 13 components in isolation with Storybook, ensuring accessibility, interaction testing, and end-to-end (E2E) testing across all 11 pages facilitated by MSW (Mock Service Worker).'
            +' Showcase <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">here</a> (careful with mobile version, Storybook has a bug with the navigation)',
            'Utilized Mock Service Worker for API simulation, Vitest (very similar to Jest) and React Testing Library for unit and integration testing, making +140 test cases, accomplishing +85% of coverage',
            'Performed +100 test cases utilizing JUnit and Mockito, achieving +75% of coverage for unit tests in the overall project, and integration tests in the database layer using Spring with Hibernate',
            'Developed 2 CI/CD pipelines to test, build, and deploy the front and the back using GitHub Actions with a special case in the frontend pipeline due to the parallelization technique to improve the overall speed',
            'Deployed, and managed application on Azure cloud infrastructure, utilizing 4 services: static web app, container registry, app service, and azure database for PostgreSQL',
         ]
      }
   },
   {
      es: {
         description: 'Este proyecto en curso se centra en la creación de un sitio web completo de pedidos de pizza construido como una aplicación multi página (MPA).'
            + ' Actualmente está en progreso, con el objetivo de aprovechar las tecnologías de vanguardia para crear una plataforma intuitiva para que los usuarios personalicen y pidan pizzas en línea',
         specTech: 'Tecnologías usadas:',
         featuresTitle : 'Características',
         features: [
            'Desarrollando componentes utilizando Typescript, Astro, React y Vite para un desarrollo robusto',
            'Utilizando Vitest y Mock Service Worker para pruebas unitarias exhaustivas, y Cypress para pruebas e2e',
            'Trabajando con Java 21, Spring 3.2, Maven, MySQL y Docker para soluciones backend resilientes',
            'Realizando estrictas pruebas unitarias con JUnit y Mockito para la validación de código backend, asegurando la calidad del código',
         ]
      },
      en: {
         description: 'This ongoing project focuses on crafting a comprehensive pizza ordering website built as a Multi-Page Application (MPA).'   
            +' It is currently in progress, aiming to leverage cutting-edge technologies to create an intuitive platform for users to customize and order pizzas online.',
         specTech: 'Technologies used:',
         featuresTitle : 'Features',
         features: [
            'Developing frontend components using Typescript, Astro, React, and Vite for robust frontend development',
            'Utilizing Vitest and Mock Service Worker for comprehensive frontend testing, and Cypress for e2e tests',
            'Working with Java 21, Spring 3.2, Maven, MySQL, and Docker for resilient backend solutions',
            'Conducting stringent JUnit unit tests for backend code validation, ensuring code quality through continuous integration',
         ]
      }
   },
];