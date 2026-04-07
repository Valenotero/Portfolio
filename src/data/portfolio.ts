import profilePhoto from '../assets/ftperfil.jpeg'

/** Datos del portfolio: editá libremente textos y proyectos */

export const profile = {
  name: 'Valentin Otero',
  /** Import: Vite resuelve la URL en dev y build. */
  photoSrc: profilePhoto,
  role: 'Desarrollador full stack',
  tagline:
    'Desarrollador full stack apasionado por la tecnología. Combino interfaces claras con lógica de negocio, APIs y datos, siempre con foco en código legible y buenas prácticas.',
  about:
    'En VG Web Studio trabajo con equipos y clientes de distintos países (por ejemplo rubros automotriz y de eventos), llevando proyectos de punta a punta: maquetado e interfaces, servicios y APIs, y bases de datos alineadas a lo que cada cliente necesita. Curso la Licenciatura en Desarrollo de Software en la UADE y llevo lo de la cursada a experimentos y entregas reales. Me interesan las soluciones que funcionan hoy y se puedan mantener y escalar mañana.',
  email: 'oterovalentin14@gmail.com',
  location: 'Buenos Aires, Argentina',
  links: {
    github: 'https://github.com/Valenotero',
    linkedin: 'https://www.linkedin.com/in/valentinotero',
    cv: '#',
  },
}

/** Lenguajes, frameworks y herramientas que usás día a día */
export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'HTML5',
  'CSS3',
  'SCSS',
  'Tailwind CSS',
  'Java',
  'Python',
  'SQL',
  'REST APIs',
  'Git',
  'Figma',
  'Postman',
]

export const projects = [
  {
    title: 'VG Web Studio',
    description:
      'Sitio del estudio de diseño y desarrollo web VG Web Studio, en el cual soy desarrollador full stack: identidad, equipo, portfolio de trabajos y contacto. Stack vanilla orientado a rendimiento y buenas prácticas.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://vgwebstudio.net',
    repo: 'https://github.com/VGWebStudio2025',
  },
  {
    title: 'ControlPresupuesto',
    description:
      'Aplicación para gestionar gastos y presupuesto. Práctica de DOM, estado y lógica de negocio en el front-end.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    href: 'https://control-presupuesto-seven.vercel.app',
    repo: 'https://github.com/Valenotero/ControlPresupuesto',
  },
  {
    title: 'NutriTrack365',
    description:
      'Proyecto web relacionado con seguimiento nutricional e interfaz centrada en el usuario.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://valenotero.github.io/NutriTrack365/',
    repo: 'https://github.com/Valenotero/NutriTrack365',
  },
  {
    title: 'Dentisan',
    description:
      'Sitio desplegado en Netlify para estudio de maquetado, contenidos y publicación continua.',
    stack: ['HTML', 'CSS', 'Netlify'],
    href: 'https://dentisan.netlify.app',
    repo: 'https://github.com/VGWebStudio2025/Dentisan',
  },
]
