export const principalText = {
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
         about__1: 'Autodidacta apasionado por el ecosistema web. Diseñó y desarrolló productos sólidos utilizando soluciones modernas'
         + ' para todo tipo de necesidades.',
         about__2: 'Me especializo en Java y React, pero soy una persona sumamente flexible que trabaja acorde a las necesidades del producto.',
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
         about__1: 'Self-taught and passionate about the web ecosystem. I design and develop solid products using modern solutions for all kinds of needs.',
         about__2: "I'm specialized in Java and React, but I am an extremely flexible person who works according to the needs of the product.",
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
         description: 'Este proyecto en curso se centra en la creación de un sitio web completo de pedidos de pizza construido como una aplicación multi página (MPA).'
            + ' Actualmente está en progreso, con el objetivo de aprovechar las tecnologías de vanguardia para crear una plataforma intuitiva para que los usuarios personalicen y pidan pizzas en línea.',
         specTech: 'Tecnologías usadas:',
         featuresTitle : 'Características',
         features: [
            'Desarrollando una aplicación web, centrada en la velocidad de carga y con una gran interactividad, '
            + 'utilizando técnicas como el SSR (Server Side Rendering) y tecnologías tales como: Typescript, Astro, React y Vite para lograrlo',
            'Trabajando con Vitest y Mock Service Worker para pruebas unitarias exhaustivas, y Playwright para pruebas e2e',
            'Trabajando en la creación de un sistema de micro servicios robustos y escalables haciendo uso de tecnologías como Spring, Node y '
            + 'Mysql para el desarrollo de cada uno de los servicios de la aplicación',
            'Gestionando los micro servicios con Kubernetes y haciendo uso de sus múltiples funcionalidades, como lo puedes ser: '
            + 'el descubrimiento de servicios, gateway api, load balancer, dns',
            'Dirigiendo las pruebas del backend con Junit para las pruebas unitarias, y la tecnología "tests containers" para las pruebas de integración, ' 
            + 'logrando con ello un desarrollo seguro',
            'Trabajando con múltiples CI/CD pipelines para automatizar el proceso de pruebas, construcción de imágenes de docker y el '
            + 'despliegue de las mismas en Kubernetes'
         ]
      },
      en: {
         description: 'This ongoing project focuses on crafting a comprehensive pizza ordering website built as a Multi-Page Application (MPA).'   
            +' It is currently in progress, aiming to leverage cutting-edge technologies to create an intuitive platform for users to customize and order pizzas online.',
         specTech: 'Technologies used:',
         featuresTitle : 'Features',
         features: [
            'Developing a web application, focused on loading speed and with a great interactivity, '
            + 'using techniques such as SSR (Server Side Rendering) and technologies such as: Typescript, Astro, React and Vite to achieve this',
            'Working with Vitest and Mock Service Worker for comprehensive unit testing, and Playwright for e2e testing',
            'Creating a robust microservices system to get the benefits of microservices, using Java 21, Spring Boot 3.2, Maven and MySQL',
            'Managing microservices with Kubernetes and making use of its multiple functionalities, such as: '
            + 'service discovery, gateway api, load balancer, dns',
            'Running backend tests with Junit for unit testing, and the "test containers" technology for integration testing, ' 
            + 'thereby achieving secure development',
            'Working with multiple CI/CD pipelines to automate the testing process, building docker images and the '
            + 'deploying them in Kubernetes'
         ]
      }
   },
   {
      es: {
         altImage: 'Página de inicio de sesión para bank account',
         description: 'Cree un sistema de transacciones con la capacidad de automatizarlas, buscarlas con filtros a base del nombre, fecha y tipo de transacción.',
         specTech: 'Tecnologías usadas:',
         featuresTitle : 'Características',
         features: [
            'Desarrolle una SPA (Single Page Application) para darle a los usuarios una experiencia dinámica e interactiva usando JavaScript y '
            + 'React, consiguiendo con ello, un desarrollo sumamente ágil',
            'Aplique los principios de Material Design con herramientas de estilos tales como: Tailwind y CSS para tener una buena paleta de '
            + 'colores para el modo claro y oscuro, mejorar la accesibilidad y tener un gran responsive',
            'Desarrolle una REST API con un sistema de seguridad basado en roles, JSON Web Token (JWT) y tokens. Utilizando Spring Boot, Java 17 y '
            + 'PostgreSQL para hacer uso del ecosistema tan maduro que tienen y con ello crear una infraestructura sólida',
            'Documente la API usando Swagger. Muestra <a target="_blank" href="https://bank.ordeninginering.com/swagger-ui/index.html#">aquí</a>',
            'Utilicé Storybook para poder tener un mejor desarrollo de mis componentes y páginas, gracias a varias de sus herramientas como lo pueden ser: pruebas de accesibilidad,'
            + ' y de interacción. Muestra <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">aquí</a> '
            + '(cuidado con la versión móvil, Storybook tiene un error con la navegación)',
            'Realice decenas de test unitarios tanto para el frontend como para el backend usando sus respectivas librerías, y a su vez múltiples '
            + 'tests de integración gracias a MSW para poder realizar llamadas a la api desde el apartado de los tests',
            'Automatice el proceso de pruebas, construcción y despliegue para el Frontend y el Backend, haciendo uso de CI/CD pipelines adaptadas '
            + 'para GitHub Actions, ahorrando mucho tiempo y asegurando una calidad constante en los despliegues',
            'Desplegué y gestione la aplicación en la infraestructura de nube Azure, utilizando los servicios: aplicación web estática, registro de contenedores, servicio de aplicaciones y base de datos Azure para PostgreSQL'
         ]
      },
      en: {
         altImage: 'Sign in page for bank account',
         description: 'Create a transaction system with the ability to automate transactions, search them with filters based on name, date and type of transaction.',
         specTech: 'Technologies used:',
         featuresTitle : 'Features',
         features: [
            'Developed a SPA (Single Page Application) to give users a dynamic and interactive experience using JavaScript and React, achieving with it, a highly agile development',
            'Applied the principles of Material Design with styling tools such as: Tailwind and CSS to have a good color palette for light and dark mode, improve accessibility and have a great responsive',
            'Develop a REST API with a role-based security system, JSON Web Token (JWT) and tokens. Using Spring Boot, Java 17 and PostgreSQL '
            + 'to make use of their mature ecosystem to create a solid infrastructure',
            'Documented the API using Swagger. Showcase <a target="_blank" href="https://bank.ordeninginering.com/swagger-ui/index.html#">here</a>',
            'Used Storybook to be able to have a better development of my components and pages, thanks to several of their tools such as: accessibility and'
            + ' interaction tests. Showcase <a target="_blank" href="https://main--655be6596e99394a8927c77d.chromatic.com/">here</a> '
            + '(careful with mobile version, Storybook has a bug with the navigation)',
            'Performed dozens of unit tests for both frontend and backend using their respective libraries, as well as multiple integration tests thanks to '
            + 'MSW to be able to make calls to the api from the test section',
            'Automated the testing, build and deployment process for Frontend and Backend, making use of CI/CD pipelines adapted for GitHub Actions, '
            + 'saving a lot of time and ensuring consistent quality in deployments',
            'Deployed and managed the application on Azure cloud infrastructure, using the services: static web application, container registry, '
            + 'application service and Azure database for PostgreSQL',
         ]
      }
   },
];