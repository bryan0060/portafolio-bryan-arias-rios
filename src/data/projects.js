export const PROJECTS = [
  {
    id: 0,
    title: "Portafolio Profesional (Este sitio)",
    description: "Portafolio web personal desarrollado con React y Vite, diseñado con un tema oscuro moderno y totalmente responsive. Incluye animaciones suaves, navegación fluida y secciones optimizadas para destacar proyectos, experiencia y habilidades técnicas.",
    technologies: ["React", "Vite", "CSS3", "React Icons", "React Scroll"],
    github: "https://github.com/bryan0060/portafolio-bryan-arias-rios",
    type: "frontend",
    featured: true
  },
  {
    id: 1,
    title: "EcoApp",
    description: "Aplicación web completa con sistema de autenticación, gestión de datos en tiempo real y base de datos Firebase. Implementa funcionalidades modernas de almacenamiento y sincronización en la nube.",
    technologies: ["Angular", "Ionic", "Firebase", "TypeScript", "CSS"],
    demo: "https://eco-app-iota.vercel.app/auth",
    github: "https://github.com/bryan0060/EcoApp",
    type: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "App Presupuesto",
    description: "Aplicación web para el control y gestión de presupuestos personales. Permite a los usuarios realizar seguimiento de ingresos, gastos y visualizar su balance financiero de manera intuitiva.",
    technologies: ["Angular", "TypeScript", "CSS", "LocalStorage"],
    demo: "https://app-presupuesto-delta.vercel.app/",
    github: "https://github.com/bryan0060/app-presupuesto",
    type: "frontend",
    featured: false
  },
  {
    id: 3,
    title: "Sistema de Recursos Humanos",
    description: "Sistema Full Stack completo para la gestión de empleados con arquitectura frontend-backend separada. Implementa operaciones CRUD, validaciones, y una API RESTful robusta con Django. El frontend consume la API de forma eficiente con React.",
    technologies: ["React", "Django REST Framework", "Python", "CSS", "API REST"],
    demo: "https://rh-frontend-three.vercel.app/",
    github: "https://github.com/bryan0060/rh_frontend",
    githubBackend: "https://github.com/bryan0060/rh_django_backend",
    apiUrl: "https://rh-backend-u3db.onrender.com/api/empleados",
    type: "fullstack",
    featured: true,
    isFullStack: true
  }
];

export const PROJECT_TYPES = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile"
};