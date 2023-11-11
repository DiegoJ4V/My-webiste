export const textPrincipal = {
   es: {
      nav: {
         portfolio: 'Portafolio',
         technologies: 'Tecnologías',
         about: 'Acerca de',
         contact: 'Contacto'
      },
      introduction: 'Hola, soy Diego, un desarrollador Java Full Stack con habilidades de diseño que disfruta todo el ecosistema web y desarrollar en él',
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
      contact: 'Contácteme'
   },
   en: {
      nav: {
         portfolio: 'Portfolio',
         technologies: 'Technologies',
         about: 'About',
         contact: 'Contact'
      },
      introduction: "Hi, I’m Diego, a Java Full Stack web developer with design abilities who enjoy the whole web ecosystem and develop in it",
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
      contact: 'Contact me'
   }
};

export const portfolio = [
   {
      github: 'https://github.com/DiegoJ4V/My-website',
      pageRedirect: 'https://diegoj4v.github.io/My-website/Fronted/public/index.html',
      url: 'https://my-web-page',
      image: '../assets/My-website.png',
      tech: 'Javascript',
      es: {
         altImage: 'A pequeña porción de este proyecto',
         specTech: 'Tecnologías específicas:',
         projectTitle: 'Mi página web',
         description: 'Mi página web personal y mi primer proyecto para mostrar mi conocimiento y todos los proyectos que he hecho'
      },
      en: {
         altImage: 'A few portion of this project',
         specTech: 'Specific technologies:',
         projectTitle: 'My web page',
         description: 'My personal website page and my first project to show my knowledge and all the projects that I have done'
      }
   },
];

export const altImages = {
   es: [
      'Diseño responsivo',
      'Backend',
      'Sistema de diseño',
      'Persona caminando en libros',
      'Video tutorial',
      'Diseño móvil',
      portfolio[0].es.altImage,
   ],
   en: [
      'Responsive design',
      'Backend',
      'Design System',
      'Person walking on books',
      'Tutorial video',
      'Mobile Design',
      portfolio[0].en.altImage,
   ]
};