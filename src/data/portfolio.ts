// Datos del Portfolio - Personaliza esta información con tus datos

export const personalInfo = {
  name: "Eloy Pérez",
  role: "Desarrollador Web Full Stack",
  greeting: "Hola, soy",
  description: "Creando experiencias web excepcionales con tecnologías modernas. Especializado en desarrollo frontend y backend, con pasión por el diseño limpio y el código eficiente.",
  email: "eloyperezgomez2004@email.com",
  linkedin: "https://linkedin.com/in/eloy-perez-gomez",
  github: "https://github.com/eloypgweb",
  // twitter: "https://twitter.com/tu-usuario",
};

export const aboutInfo = {
  paragraphs: [
    "Soy un desarrollador web apasionado por crear soluciones digitales innovadoras y eficientes. Mi enfoque se centra en escribir código limpio, mantenible y escalable que resuelva problemas reales.",
    "Con experiencia en desarrollo frontend y backend, disfruto construyendo aplicaciones web completas que combinan funcionalidad excepcional con diseños intuitivos y atractivos.",
    "Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas para mantenerme actualizado en este mundo tecnológico en constante evolución."
  ],
  highlights: [
    { number: "3+", label: "Años de experiencia" },
    { number: "20+", label: "Proyectos completados" },
    { number: "10+", label: "Tecnologías dominadas" }
  ]
};

export const projects = [
  {
    i18nKey: "junstats",
    title: "JunStats",
    description: "Aplicación de gestión de un equipo de baloncesto. Con estadísticas avanzadas, jugadas, calendario de partidos y galería de imágenes.",
    technologies: ["Astro", "Supabase", "Vercel", "TFG"],
    image: "/junstatsLogo.png",
    link: "https://junstats.vercel.app",
    github: "https://github.com/eloypgweb/JunStats",
    featured: true,
    category: "personal"
  },
  {
    i18nKey: "habitly",
    title: "Habitly",
    description: "App para la gestión y prganización de tareas y hábitos diarios. Con vista diaria, semanal y mensual. ¡Cuenta con perfil propio y logros!",
    technologies: ["Hábitos", "Astro", "Supabase", "Vercel"],
    image: "/habitly.png",
    link: "https://thehabitlyapp.vercel.app",
    github: "https://github.com/eloypgweb/habitly",
    featured: false,
    category: "personal"
  },
  {
    i18nKey: "generador",
    title: "Generador para JunStats",
    description: "Aplicación para generar jornadas de baloncesto de forma automática. Con opciones de personalización, generación rápida y exportación en varios formatos.",
    technologies: ["Facilidad", "Conversión", "Astro", "Vercel"],
    image: "/generadorjornadas.png",
    link: "https://generadorjornadasjunstats.vercel.app",
    github: "https://github.com/eloypgweb/GeneradorJornadas",
    featured: false,
    category: "personal"
  },
  {
    i18nKey: "mapfre",
    title: "Mapfre",
    description: "Participé activamente en el desarrollo de interfaces en el proyecto de Mapfre Colombia, Brazil, República Dominicana, entre otros...",
    technologies: ["Angular", "JavaScript", "Backend", "Frontend"],
    image: "/mapfre.jpg",
    featured: false,
    category: "company"
  },
  {
    i18nKey: "coffice",
    title: "Coffice",
    description: "Desarrollo de interfaces y funcionalidades para la aplicación de gestión de productos y ventas. También desarollé servicios en la aplicación COFEM, de la cual se alimenta.",
    technologies: ["React", "OracleDB", "Spring Boot", "Backend", "Frontend"],
    image: "/logoCOFFICE.png",
    featured: false,
    category: "company"
  },
  {
    i18nKey: "naturgy",
    title: "Naturgy",
    description: "Participé en la migración de Naturgy a AEM, desarrollando componentes personalizados y optimizando el rendimiento del sitio.",
    technologies: ["AEM", "Backend", "Frontend"],
    image: "/naturgy.jpg",
    featured: false,
    category: "company"
  }
];

export const skills = [
  // { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "SCSS", icon: "🎨", category: "Frontend" },
  // { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  // { name: "Vue.js", icon: "💚", category: "Frontend" },
  { name: "Astro", icon: "🚀", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  // { name: "Express", icon: "🚂", category: "Backend" },
  // { name: "MongoDB", icon: "🍃", category: "Backend" },
  { name: "Java", icon: "♨️", category: "Backend" },
  // { name: "PostgreSQL", icon: "🐘", category: "Backend" },
  { name: "MySQL", icon: "🐬", category: "Backend" },
  { name: "OracleDB", icon: "🛢️", category: "Backend" },
  { name: "Git", icon: "📦", category: "Tools" },
  // { name: "Docker", icon: "🐳", category: "Tools" },
  { name: "Figma", icon: "🎯", category: "Tools" },
  { name: "Agile", icon: "🤸🏼‍♂️", category: "Tools" }
];
