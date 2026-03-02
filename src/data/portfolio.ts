// Datos del Portfolio - Personaliza esta información con tus datos

export const personalInfo = {
  name: "Tu Nombre",
  role: "Desarrollador Web Full Stack",
  greeting: "Hola, soy",
  description: "Creando experiencias web excepcionales con tecnologías modernas. Especializado en desarrollo frontend y backend, con pasión por el diseño limpio y el código eficiente.",
  email: "tu@email.com",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  twitter: "https://twitter.com/tu-usuario",
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
    title: "Mapfre",
    description: "Participé activamente en el desarrollo de interfaces en el proyecto de Mapfre Colombia, Brazil, República Dominicana, entre otros...",
    technologies: ["Angular", "JavaScript", "Backend", "Frontend"],
    image: "/mapfre.jpg",
    featured: false
  },
  {
    title: "JunStats",
    description: "Aplicación de gestión de un equipo de baloncesto. Con estadísticas avanzadas, jugadas, calendario de partidos y galería de imágenes.",
    technologies: ["Astro", "Supabase", "Vercel", "TFG"],
    image: "/junstatsLogo.png", // Placeholder - cambia por tu imagen
    link: "https://junstats.vercel.app",
    github: "https://github.com/eloypgweb/JunStats",
    featured: true // Proyecto destacado
  },
  {
    title: "Naturgy",
    description: "Participé en la migración de Naturgy a AEM, desarrollando componentes personalizados y optimizando el rendimiento del sitio.",
    technologies: ["AEM", "Backend", "Frontend"],
    image: "/naturgy.jpg", // Placeholder - cambia por tu imagen
    // Sin link ni github para demostrar que funciona sin ellos
    featured: false
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
