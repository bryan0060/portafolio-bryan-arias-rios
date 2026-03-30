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