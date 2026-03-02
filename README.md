# 🚀 Portfolio Web Profesional

Portfolio web minimalista y moderno construido con Astro. Incluye modo oscuro/claro, internacionalización (ES/EN), diseño responsive y animaciones suaves.

## ✨ Características

- 🌓 **Modo Oscuro/Claro** - Cambia entre temas con transiciones suaves y paleta de colores azul profesional
- 🌍 **i18n (Español/Inglés)** - Sistema completo de internacionalización con cambio de idioma en tiempo real
- 📱 **Responsive** - Perfectamente adaptado a todos los dispositivos
- ⚡ **Rápido** - Construido con Astro para máximo rendimiento
- 🎨 **Minimalista** - Diseño limpio y profesional con colores azul/cian
- 🔧 **Fácil de Personalizar** - Datos centralizados en archivos de configuración
- 🎯 **Accesible** - Diseño con mejores prácticas de accesibilidad

## 🎨 Paleta de Colores

**Modo Claro:**
- Fondo: Blanco y gris claro (#ffffff, #f8fafc)
- Texto: Azul oscuro (#0f172a, #475569)
- Acento: Azul profesional (#2563eb, #1d4ed8)

**Modo Oscuro:**
- Fondo: Azul muy oscuro (#0f172a, #1e293b)
- Texto: Gris claro (#f1f5f9, #cbd5e1)
- Acento: Cian brillante (#06b6d4, #0891b2)

## 🏗️ Estructura del Proyecto

```text
/
├── public/               # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── LanguageToggle.astro
│   ├── layouts/         # Layouts
│   │   └── Layout.astro
│   ├── pages/           # Páginas del sitio
│   │   └── index.astro
│   ├── styles/          # Estilos globales
│   │   └── global.css
│   ├── i18n/            # Sistema de internacionalización
│   │   ├── config.ts
│   │   ├── utils.ts
│   │   └── translations.ts
│   └── data/            # Datos del portfolio
│       └── portfolio.ts
└── package.json
```

## 🌍 Sistema de Internacionalización (i18n)

El portfolio incluye un sistema completo de traducción entre **Español** e **Inglés**:

### Cómo funciona:
1. El idioma se guarda en `localStorage`
2. Cada componente tiene atributos `data-i18n` para las traducciones
3. El selector de idioma actualiza todo el contenido automáticamente
4. Por defecto, usa español si no hay preferencia guardada

### Agregar nuevas traducciones:

Edita `src/i18n/translations.ts`:

```typescript
export const translations = {
  es: {
    miSeccion: {
      titulo: "Mi Título",
      descripcion: "Mi descripción"
    }
  },
  en: {
    miSeccion: {
      titulo: "My Title",
      descripcion: "My description"
    }
  }
};
```

## 🎨 Personalización

### 1. Datos Personales

Edita el archivo `src/data/portfolio.ts` para personalizar toda la información del portfolio:

```typescript
export const personalInfo = {
  name: "Tu Nombre",
  role: "Desarrollador Web Full Stack",
  email: "tu@email.com",
  // ... más información
};
```

### 2. Colores y Estilos

Los colores y estilos se definen en `src/styles/global.css` usando variables CSS:

**Para Modo Claro:**
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --accent: #2563eb;        /* Color principal - azul profesional */
  --accent-hover: #1d4ed8;  /* Color hover */
  --border: #e2e8f0;
  --shadow: rgba(37, 99, 235, 0.1);
}
```

**Para Modo Oscuro:**
```css
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --accent: #06b6d4;        /* Color principal - cian brillante */
  --accent-hover: #0891b2;  /* Color hover */
  --border: #334155;
  --shadow: rgba(6, 182, 212, 0.15);
}
```

### 3. Agregar Proyectos

Añade tus proyectos en `src/data/portfolio.ts`:

```typescript
export const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Descripción...",
    technologies: ["React", "Node.js"],
    link: "https://...",
    github: "https://..."
  }
];
```

### 4. Habilidades

Personaliza tus habilidades en `src/data/portfolio.ts`:

```typescript
export const skills = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  // ... más habilidades
];
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                                  |
| :------------------------ | :------------------------------------------------------ |
| `npm install`             | Instala las dependencias                                |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`    |
| `npm run build`           | Construye el sitio para producción en `./dist/`         |
| `npm run preview`         | Previsualiza la versión de producción localmente        |
| `npm run astro ...`       | Ejecuta comandos de Astro CLI                           |

## 🚀 Despliegue

Este portfolio puede ser desplegado en varias plataformas:

### Vercel
```bash
npm run build
# Luego sube la carpeta dist a Vercel
```

### Netlify
```bash
npm run build
# Luego sube la carpeta dist a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para servir desde la carpeta dist
```

## 🎯 Próximos Pasos

1. **Personaliza los datos** en `src/data/portfolio.ts`
2. **Actualiza las traducciones** en `src/i18n/translations.ts` con tu información
3. **Agrega tu foto** en la sección About (componente About.astro)
4. **Actualiza los enlaces** de redes sociales en Contact y Footer
5. **Personaliza los colores** en `src/styles/global.css` si deseas una paleta diferente
6. **Agrega tus proyectos reales** con capturas de pantalla y enlaces funcionales
7. **Configura el formulario de contacto** con un servicio como Formspree o EmailJS

## 🎨 Características del Sistema i18n

- ✅ Cambio de idioma en tiempo real sin recargar
- ✅ Persistencia del idioma seleccionado en localStorage
- ✅ Traducción de todo el contenido (navegación, secciones, formularios)
- ✅ Traducción de placeholders en inputs
- ✅ Soporte de español e inglés por defecto
- ✅ Fácil de extender a más idiomas

## 📝 Notas

- El **tema** (oscuro/claro) se guarda en localStorage
- El **idioma** seleccionado se guarda en localStorage
- El tema por defecto se basa en la preferencia del sistema
- El idioma por defecto es español
- Todas las transiciones son suaves y optimizadas para rendimiento
- El diseño es totalmente responsive y accesible
- Los colores fueron elegidos por su profesionalismo y legibilidad

## 📄 Licencia

Este proyecto está disponible para uso personal y comercial.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de mejorar este portfolio.

---

**¡Disfruta construyendo tu portfolio! 🎉**
