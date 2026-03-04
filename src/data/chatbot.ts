// Base de datos del chatbot con preguntas preprogramadas y palabras clave

export interface ChatMessage {
  id: string;
  keywords: string[];
  response: {
    es: string[];
    en: string[];
  };
  category?: string;
}

export const chatbotResponses: ChatMessage[] = [
  // Saludos
  {
    id: 'greeting',
    keywords: ['hola', 'buenas', 'hey', 'hello', 'hi', 'saludos', 'que tal', 'qué tal'],
    response: {
      es: [
        '¡Holaa! 👋 Soy ElAI, mi versión virtual. Puedes preguntarme sobre mi experiencia, proyectos o tecnologías.',
        '¡Buenas! 😄 Estoy aquí para contarte más sobre mí. ¿Qué te gustaría saber?',
        '¡Hey! 👋 Soy Eloy en versión digital. Dispara tu pregunta.'
      ],
      en: [
        'Helloo! 👋 I\'m ElAI, my virtual version. You can ask me about my experience, projects or skills.',
        'Hi there! 😄 I\'m here to tell you more about myself. What would you like to know?',
        'Hey! 👋 I\'m Eloy in digital mode. Go ahead and ask!'
      ]
    },
    category: 'greeting'
  },

  // Sobre mí
  {
    id: 'about',
    keywords: ['quien eres', 'sobre ti', 'presentate', 'about', 'who are you', 'introduce'],
    response: {
      es: [
        'Soy desarrollador Full Stack apasionado por crear productos digitales modernos y eficientes.',
        'Me dedico al desarrollo web, tanto frontend como backend. Me encanta construir interfaces limpias y funcionales.',
        'Soy desarrollador y también entrenador de baloncesto 🏀, lo que me ha ayudado mucho en liderazgo y trabajo en equipo.'
      ],
      en: [
        'I\'m a Full Stack developer passionate about building modern and efficient digital products.',
        'I work in web development, both frontend and backend. I love building clean and functional interfaces.',
        'I\'m also a basketball coach 🏀, which has helped me develop leadership and teamwork skills.'
      ]
    },
    category: 'about'
  },

  // Experiencia
  {
    id: 'experience',
    keywords: ['experiencia', 'años', 'career', 'trayectoria', 'worked', 'trabajado'],
    response: {
      es: [
        'Tengo varios años de experiencia en desarrollo web trabajando en proyectos nacionales e internacionales.',
        'He trabajado en proyectos como Mapfre (LATAM) y Naturgy, participando en desarrollos frontend y migraciones a AEM.',
        'He participado en más de 10 proyectos profesionales, combinando frontend moderno y soluciones backend.'
      ],
      en: [
        'I have several years of experience in web development working on national and international projects.',
        'I have worked on projects like Mapfre (LATAM) and Naturgy, contributing to frontend development and AEM migrations.',
        'I have participated in more than 10 professional projects, combining modern frontend and backend solutions.'
      ]
    },
    category: 'experience'
  },

  // Tecnologías
{
  id: 'technologies',
  keywords: ['tecnologias', 'stack', 'lenguajes', 'frameworks', 'tools', 'languages', 'programacion'],
  response: {
    es: [
      'Trabajo principalmente con Angular, Astro, React, JavaScript, TypeScript y Java. Aunque a pesar de esto, ¡conozco muchas otras tecnologías ampliamente usadas hoy en día!',
      'Mi stack incluye Astro, React, Supabase, Node.js y despliegues en Vercel. Me siento muy cómodo trabajando tanto en frontend como en backend, construyendo aplicaciones completas y bien estructuradas.',
      'Me gusta trabajar con tecnologías modernas y estoy constantemente aprendiendo nuevas herramientas. Siempre intento mantenerme actualizado y aplicar buenas prácticas de desarrollo en cada proyecto.'
    ],
    en: [
      'I mainly work with Angular, Astro, React, JavaScript, TypeScript and Java. However, I\'m also familiar with many other widely used technologies.',
      'My stack includes Astro, React, Supabase, Node.js and deployments on Vercel. I feel comfortable working on both frontend and backend, building complete and well-structured applications.',
      'I enjoy working with modern technologies and I\'m constantly learning new tools. I always try to stay up to date and apply best development practices in every project.'
    ]
  },
  category: 'skills'
},
  // Proyectos
  {
    id: 'projects',
    keywords: ['proyectos', 'portfolio', 'trabajos', 'projects', 'work'],
    response: {
      es: [
        'Algunos de mis proyectos destacados son Mapfre, Naturgy y mi proyecto personal JunStats 🏀.',
        'He trabajado en proyectos corporativos grandes y también en proyectos personales donde aplico nuevas tecnologías.',
        'Puedes ver mis proyectos destacados en la sección de portfolio, donde explico cada uno en detalle.'
      ],
      en: [
        'Some of my featured projects are Mapfre, Naturgy and my personal project JunStats 🏀.',
        'I have worked on large corporate projects and also personal projects where I apply new technologies.',
        'You can explore my featured projects in the portfolio section.'
      ]
    },
    category: 'projects'
  },

  // JunStats
  {
    id: 'junstats',
    keywords: ['junstats', 'baloncesto', 'basketball', 'estadisticas', 'statistics', 'tfg'],
    response: {
      es: [
        'JunStats es mi proyecto más destacado. Es una app de gestión de equipos de baloncesto desarrollada con Astro y Supabase.',
        'Desarrollé JunStats como hobby y al final se ha convertido en mi TFG. Incluye estadísticas avanzadas, calendario y gestión de equipo.',
        'JunStats combina mi pasión por la programación y el baloncesto 🏀.'
      ],
      en: [
        'JunStats is my featured project. It\'s a basketball team management app built with Astro and Supabase.',
        'I developed JunStats as a hobby and it eventually became my final degree project. It includes advanced stats and team management features.',
        'JunStats combines my passion for coding and basketball 🏀.'
      ]
    },
    category: 'projects'
  },

  // Contacto
  {
    id: 'contact',
    keywords: ['contacto', 'email', 'linkedin', 'github', 'contact', 'reach'],
    response: {
      es: [
        'Puedes contactarme a través del formulario de esta web o por LinkedIn e Instagram.',
        'Estoy disponible para hablar sobre oportunidades. Encuentra mis datos en la sección de contacto.',
        'Si quieres colaborar conmigo, escríbeme desde el formulario de contacto.'
      ],
      en: [
        'You can contact me through the contact form or via LinkedIn and Instagram.',
        'I\'m open to discussing opportunities. Check the contact section.',
        'If you want to collaborate, feel free to reach out through the contact form.'
      ]
    },
    category: 'contact'
  },

  // Habilidades personales
  {
    id: 'skills',
    keywords: ['habilidades', 'fortalezas', 'strengths', 'soft skills', 'competencias'],
    response: {
      es: [
        'Destaco en trabajo en equipo, comunicación y liderazgo gracias a mi experiencia como entrenador.',
        'Me considero una persona resolutiva, constante y con mentalidad de mejora continua.',
        'Combino habilidades técnicas con soft skills desarrolladas fuera del entorno puramente técnico.'
      ],
      en: [
        'I stand out in teamwork, communication and leadership thanks to my coaching experience.',
        'I consider myself proactive, consistent and focused on continuous improvement.',
        'I combine technical skills with strong soft skills.'
      ]
    },
    category: 'skills'
  },

  // Disponibilidad
  {
    id: 'availability',
    keywords: ['disponible', 'contratar', 'hire', 'available', 'freelance'],
    response: {
      es: [
        'Actualmente estoy abierto a nuevas oportunidades y proyectos interesantes.',
        'Si encajo en lo que buscas, estaré encantado de hablarlo 😊.',
        'Estoy disponible para nuevos retos profesionales.'
      ],
      en: [
        'I am currently open to new opportunities and interesting projects.',
        'If I fit what you\'re looking for, I\'d be happy to discuss it 😊.',
        'I\'m available for new professional challenges.'
      ]
    },
    category: 'contact'
  },

  // Educación
  {
    id: 'education',
    keywords: ['estudios', 'educacion', 'degree', 'university', 'formacion'],
    response: {
      es: [
        'He completado mi formación en desarrollo web y app, donde mi mejor TFG fue JunStats.',
        'Mi proyecto final fue una aplicación full stack que demuestra mis capacidades técnicas.',
        'Mi formación académica está enfocada al desarrollo de aplicaciones web modernas.'
      ],
      en: [
        'I completed my education in web and app development, where my best final project was JunStats.',
        'My final degree project was a full stack application demonstrating my skills.',
        'My academic background focuses on modern web application development.'
      ]
    },
    category: 'about'
  },

  // Default
  {
    id: 'default',
    keywords: [],
    response: {
      es: [
        '¿Qué? No te he entendido jaja 👀 Puedes probar a preguntarme sobre mi experiencia, proyectos, tecnologías o disponibilidad.',
        'No tengo información específica sobre eso, pero puedo contarte sobre mis proyectos o mi stack tecnológico.',
        'Mmm… no estoy seguro de eso 🤔 Prueba preguntándome sobre JunStats, mi experiencia o mis habilidades.'
      ],
      en: [
        'What? I didn\'t understand that 😅 You can try to ask me about my experience, projects, technologies or availability.',
        'I don\'t have specific information about that, but I can tell you about my projects or tech stack.',
        'Hmm… I\'m not sure about that 🤔 Try asking about JunStats, my experience or my skills.'
      ]
    },
    category: 'default'
  }
];

// Función para buscar respuesta
export function findResponse(query: string, lang: 'es' | 'en' = 'es'): string {
  const normalizedQuery = query.toLowerCase().trim();

  for (const message of chatbotResponses) {
    if (message.id === 'default') continue;

    const hasMatch = message.keywords.some(keyword =>
      normalizedQuery.includes(keyword.toLowerCase())
    );

    if (hasMatch) {
      const responses = message.response[lang];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  const defaultMessage = chatbotResponses.find(m => m.id === 'default');
  const responses = defaultMessage?.response[lang] || ['No tengo respuesta para eso.'];
  return responses[Math.floor(Math.random() * responses.length)];
}

// Mensaje inicial
export const initialMessages = {
  es: '¡Hola! 👋 Soy ElAI, mi versión virtual. Pregúntame sobre mi experiencia, proyectos o tecnologías.',
  en: 'Hello! 👋 I\'m ElAI, my virtual version. Ask me about my experience, projects or skills.'
};