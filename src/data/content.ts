// src/data/content.ts
// Bilingual site content. Source of truth: CV_Alan_Sandoval_Backend_FullStack.md

export type Lang = 'es' | 'en';

export interface WorkItem {
  id: string;
  weight: 1 | 2 | 3; // billing weight: how much of the system was shipped
  period: string;
  org: string;
  place: string;
  role: string;
  title: string;
  summary: string;
  points: string[];
  figures?: { value: string; label: string }[];
  stack: string[];
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { work: string; profile: string; contact: string; switchLabel: string; switchHref: string; switchText: string; skip: string; toDark: string; toLight: string; openMenu: string; closeMenu: string };
  hero: {
    role: string;
    status: string;
    facts: { value: string; label: string }[];
    write: string;
  };
  work: { heading: string; intro: string; stackLabel: string; prev: string; next: string; of: string; items: WorkItem[] };
  profile: {
    heading: string;
    bio: string[];
    recordHeading: string;
    record: { title: string; detail: string; date?: string }[];
    stackHeading: string;
    stack: { group: string; items: string[] }[];
    languages: string;
  };
  contact: {
    heading: string;
    body: string;
    copy: string;
    copied: string;
    copyFailed: string;
  };
  footer: { line: string; top: string };
}

export const EMAIL = 'alansandovalproject@gmail.com';
export const LINKS = {
  github: 'https://github.com/Gortuz',
  linkedin: 'https://www.linkedin.com/in/adsandovalp/',
};

const stackEs = [
  { group: 'Backend', items: ['NestJS', 'Node.js', 'TypeScript', 'Python', 'Flask', 'OpenCV', 'OCR', 'Java', 'C#'] },
  { group: 'Frontend y móvil', items: ['Flutter', 'Dart', 'React Native', 'React', 'Angular', 'JavaScript'] },
  { group: 'Arquitectura', items: ['Clean Architecture', 'CQRS', 'Microservicios', 'API RESTful', 'SOLID', 'API Gateway', 'JWT'] },
  { group: 'Bases de datos', items: ['PostgreSQL', 'Oracle (PL/SQL, APEX)', 'SQL Server'] },
  { group: 'DevOps e infraestructura', items: ['Docker', 'Git', 'GitHub', 'Railway', 'Linux', 'Nutanix', 'Cloudflare'] },
];

const stackEn = [
  { group: 'Backend', items: ['NestJS', 'Node.js', 'TypeScript', 'Python', 'Flask', 'OpenCV', 'OCR', 'Java', 'C#'] },
  { group: 'Frontend & mobile', items: ['Flutter', 'Dart', 'React Native', 'React', 'Angular', 'JavaScript'] },
  { group: 'Architecture', items: ['Clean Architecture', 'CQRS', 'Microservices', 'RESTful APIs', 'SOLID', 'API Gateway', 'JWT'] },
  { group: 'Databases', items: ['PostgreSQL', 'Oracle (PL/SQL, APEX)', 'SQL Server'] },
  { group: 'DevOps & infrastructure', items: ['Docker', 'Git', 'GitHub', 'Railway', 'Linux', 'Nutanix', 'Cloudflare'] },
];

export const content: Record<Lang, Content> = {
  es: {
    lang: 'es',
    meta: {
      title: 'Alan Sandoval | Ingeniero en Software Full Stack',
      description: 'Alan Sandoval, Ingeniero en Software Full Stack en Ibarra, Ecuador: backend con NestJS (Arquitectura Limpia, microservicios, CQRS) y apps móviles con Flutter y React Native.',
    },
    nav: { work: 'Trabajo', profile: 'Perfil', contact: 'Contacto', switchLabel: 'Read in English', switchHref: '/en/', switchText: 'EN', skip: 'Saltar al contenido', toDark: 'Activar modo oscuro', toLight: 'Activar modo claro', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
    hero: {
      role: 'Ingeniero en Software Full Stack. Backend en NestJS, apps móviles en Flutter y React Native.',
      status: 'Disponible para equipos backend o full stack',
      facts: [
        { value: 'De punta a punta', label: 'Backend, app móvil y panel web del mismo servicio · UTN Móvil' },
        { value: 'Arquitectura sólida', label: 'Clean Architecture, microservicios y CQRS en una fintech de pagos' },
        { value: 'Hasta producción', label: 'Docker, API Gateway con JWT y despliegue en Android e iOS' },
      ],
      write: 'Escribir',
    },
    work: {
      heading: 'Trabajo',
      intro: 'Sistemas entregados, del más grande al más pequeño.',
      stackLabel: 'Tecnologías',
      prev: 'Experiencia anterior',
      next: 'Siguiente experiencia',
      of: 'de',
      items: [
        {
          id: 'utn-movil', weight: 3,
          period: 'Ene 2025 — Ene 2026', org: 'Universidad Técnica del Norte', place: 'Ibarra',
          role: 'Desarrollador Full Stack · Proyecto de titulación',
          title: 'Gestión de Clubes/Grupos en UTN Móvil',
          summary: 'Un servicio completo de la plataforma institucional UTN Móvil, de la base de datos a la app.',
          points: [
            'Microservicio NestJS y TypeScript (API RESTful) integrado a la arquitectura de microservicios del macroproyecto, contenerizado con Docker y desplegado tras el API Gateway institucional con JWT.',
            'App móvil en Flutter con Clean Architecture (dominio, infraestructura, presentación) y módulo administrativo web en Oracle APEX.',
            'SCRUM: 17 historias de usuario en 4 sprints. Documentación técnica y manuales de despliegue entregados al DDTI con acta de entrega.',
            'Reconocimiento del Rectorado por el proyecto “UTN-Móvil” (mayo 2025).',
          ],
          figures: [
            { value: '91,3%', label: 'calidad de uso' },
            { value: '99,2%', label: 'tareas sin errores' },
            { value: '15', label: 'usuarios evaluados · ISO/IEC 25022' },
          ],
          stack: ['NestJS', 'TypeScript', 'Flutter', 'Oracle APEX', 'Docker', 'JWT'],
        },
        {
          id: 'utransfer', weight: 3,
          period: 'May 2026 — Jul 2026', org: 'Innovation & Technology Services LLC · Utransfer', place: 'Remoto',
          role: 'Desarrollador Full Stack Junior',
          title: 'Plataforma de pagos fintech',
          summary: 'Backend en NestJS y PostgreSQL con Arquitectura Limpia, microservicios y CQRS.',
          points: [
            'Desarrollé el módulo de seguridad (autenticación y cifrado de contraseñas) y el API Gateway.',
            'Implementé la comunicación entre microservicios para obtener información de proveedores.',
            'Implementé funcionalidades del frontend móvil en React Native y lideré la compilación nativa y el despliegue para Android e iOS.',
          ],
          stack: ['NestJS', 'PostgreSQL', 'CQRS', 'Microservicios', 'React Native'],
        },
        {
          id: 'ddti', weight: 2,
          period: 'Feb 2024 — Ago 2024', org: 'Universidad Técnica del Norte · DDTI', place: 'Ibarra',
          role: 'Desarrollador Python · Prácticas',
          title: 'Revisión automatizada de fotografías',
          summary: 'Servicios API-REST de visión por computador para un proceso que se hacía a mano.',
          points: [
            'Automaticé con Python (Flask y OpenCV) la revisión de 14.000 fotografías.',
            'Desarrollé un gestor documental que reconoce documentos por su texto y tipo, con OCR, OpenCV y expresiones regulares.',
          ],
          stack: ['Python', 'Flask', 'OpenCV', 'OCR'],
        },
        {
          id: 'eminkatech', weight: 1,
          period: 'Mar 2026 — May 2026', org: 'eMinkaTech S.A.', place: 'Quito',
          role: 'Desarrollador Web e Infraestructura',
          title: 'Sitio corporativo e infraestructura',
          summary: 'Web corporativa y operación de la infraestructura de la empresa.',
          points: [
            'Diseñé y desarrollé la página web corporativa.',
            'Administré infraestructura hiperconvergente (Nutanix) y gestioné red y dominios con Cloudflare; soporte y mantenimiento técnico.',
          ],
          stack: ['Nutanix', 'Cloudflare', 'Redes'],
        },
      ],
    },
    profile: {
      heading: 'Perfil',
      bio: [
        'Soy Ingeniero en Software por la Universidad Técnica del Norte, en Ibarra, Ecuador. Trabajo en backend con NestJS (Arquitectura Limpia, microservicios y CQRS) y en desarrollo móvil multiplataforma con Flutter y React Native.',
        'Trabajo con SCRUM y busco aportar en equipos de desarrollo backend o full stack.',
      ],
      recordHeading: 'Formación y reconocimientos',
      record: [
        { title: 'Ingeniero en Software', detail: 'Universidad Técnica del Norte', date: 'Mar 2026' },
        { title: 'Scrum Foundation Professional Certification (SFPC™)', detail: 'Certificación' },
        { title: 'Reconocimiento del Rectorado, proyecto “UTN-Móvil”', detail: 'Universidad Técnica del Norte', date: 'May 2025' },
        { title: 'Presidente del Club de Programación', detail: 'Talleres técnicos y eventos académicos · UTN', date: '2023 — 2026' },
        { title: 'Ingeniero de Software Voluntario', detail: 'NASA Space Apps Challenge', date: '2024 — 2025' },
      ],
      stackHeading: 'Tecnologías',
      stack: stackEs,
      languages: 'Español nativo · Inglés técnico (B1)',
    },
    contact: {
      heading: '¿Construimos algo?',
      body: 'Busco aportar en equipos de desarrollo backend o full stack. Escríbeme.',
      copy: 'Copiar correo',
      copied: 'Correo copiado',
      copyFailed: 'No se pudo copiar',
    },
    footer: { line: 'Alan Sandoval · Ibarra, Ecuador', top: 'Volver arriba' },
  },
  en: {
    lang: 'en',
    meta: {
      title: 'Alan Sandoval | Full Stack Software Engineer',
      description: 'Alan Sandoval, Full Stack Software Engineer in Ibarra, Ecuador: NestJS backends (Clean Architecture, microservices, CQRS) and Flutter and React Native mobile apps.',
    },
    nav: { work: 'Work', profile: 'Profile', contact: 'Contact', switchLabel: 'Leer en español', switchHref: '/', switchText: 'ES', skip: 'Skip to content', toDark: 'Switch to dark mode', toLight: 'Switch to light mode', openMenu: 'Open menu', closeMenu: 'Close menu' },
    hero: {
      role: 'Full Stack Software Engineer. NestJS backends, Flutter and React Native mobile apps.',
      status: 'Available for backend or full stack teams',
      facts: [
        { value: 'End to end', label: 'Backend, mobile app and web admin for the same service · UTN Móvil' },
        { value: 'Solid architecture', label: 'Clean Architecture, microservices and CQRS in a fintech payments platform' },
        { value: 'Through to production', label: 'Docker, API Gateway with JWT, and Android and iOS releases' },
      ],
      write: 'Write',
    },
    work: {
      heading: 'Work',
      intro: 'Systems delivered, largest first.',
      stackLabel: 'Stack',
      prev: 'Previous role',
      next: 'Next role',
      of: 'of',
      items: [
        {
          id: 'utn-movil', weight: 3,
          period: 'Jan 2025 — Jan 2026', org: 'Universidad Técnica del Norte', place: 'Ibarra',
          role: 'Full Stack Developer · Degree project',
          title: 'Clubs/Groups management in UTN Móvil',
          summary: 'A complete service of the UTN Móvil institutional platform, from database to app.',
          points: [
            'NestJS and TypeScript microservice (RESTful API) integrated into the macroproject’s microservice architecture, containerized with Docker and deployed behind the institutional API Gateway with JWT.',
            'Flutter mobile app with Clean Architecture (domain, infrastructure, presentation) and an Oracle APEX web admin module.',
            'SCRUM: 17 user stories over 4 sprints. Technical documentation and deployment manuals handed over to DDTI with a formal delivery record.',
            'Recognized by the University Rectorate for the “UTN-Móvil” project (May 2025).',
          ],
          figures: [
            { value: '91.3%', label: 'quality in use' },
            { value: '99.2%', label: 'tasks without errors' },
            { value: '15', label: 'users evaluated · ISO/IEC 25022' },
          ],
          stack: ['NestJS', 'TypeScript', 'Flutter', 'Oracle APEX', 'Docker', 'JWT'],
        },
        {
          id: 'utransfer', weight: 3,
          period: 'May 2026 — Jul 2026', org: 'Innovation & Technology Services LLC · Utransfer', place: 'Remote',
          role: 'Junior Full Stack Developer',
          title: 'Fintech payments platform',
          summary: 'NestJS and PostgreSQL backend with Clean Architecture, microservices and CQRS.',
          points: [
            'Built the security module (authentication and password encryption) and the API Gateway.',
            'Implemented inter-service communication to retrieve provider information.',
            'Implemented mobile frontend features in React Native and led the native build and deployment for Android and iOS.',
          ],
          stack: ['NestJS', 'PostgreSQL', 'CQRS', 'Microservices', 'React Native'],
        },
        {
          id: 'ddti', weight: 2,
          period: 'Feb 2024 — Aug 2024', org: 'Universidad Técnica del Norte · DDTI', place: 'Ibarra',
          role: 'Python Developer · Internship',
          title: 'Automated photo review',
          summary: 'Computer-vision REST services for a process that used to be done by hand.',
          points: [
            'Automated the review of 14,000 photos with Python (Flask and OpenCV).',
            'Built a document manager that recognizes documents by their text and type, using OCR, OpenCV and regular expressions.',
          ],
          stack: ['Python', 'Flask', 'OpenCV', 'OCR'],
        },
        {
          id: 'eminkatech', weight: 1,
          period: 'Mar 2026 — May 2026', org: 'eMinkaTech S.A.', place: 'Quito',
          role: 'Web & Infrastructure Developer',
          title: 'Corporate site and infrastructure',
          summary: 'The company website and day-to-day infrastructure operations.',
          points: [
            'Designed and built the corporate website.',
            'Managed hyperconverged infrastructure (Nutanix) and network and domain configuration with Cloudflare; technical support and maintenance.',
          ],
          stack: ['Nutanix', 'Cloudflare', 'Networking'],
        },
      ],
    },
    profile: {
      heading: 'Profile',
      bio: [
        'I’m a Software Engineer from Universidad Técnica del Norte in Ibarra, Ecuador. I work on NestJS backends (Clean Architecture, microservices and CQRS) and cross-platform mobile apps with Flutter and React Native.',
        'I work with SCRUM and I’m looking to contribute to backend or full stack development teams.',
      ],
      recordHeading: 'Education and recognition',
      record: [
        { title: 'Software Engineer', detail: 'Universidad Técnica del Norte', date: 'Mar 2026' },
        { title: 'Scrum Foundation Professional Certification (SFPC™)', detail: 'Certification' },
        { title: 'Rectorate recognition, “UTN-Móvil” project', detail: 'Universidad Técnica del Norte', date: 'May 2025' },
        { title: 'President of the Programming Club', detail: 'Technical workshops and academic events · UTN', date: '2023 — 2026' },
        { title: 'Volunteer Software Engineer', detail: 'NASA Space Apps Challenge', date: '2024 — 2025' },
      ],
      stackHeading: 'Stack',
      stack: stackEn,
      languages: 'Spanish (native) · Technical English (B1)',
    },
    contact: {
      heading: 'Shall we build something?',
      body: 'I’m looking to contribute to backend or full stack teams. Write to me.',
      copy: 'Copy email',
      copied: 'Email copied',
      copyFailed: 'Couldn’t copy',
    },
    footer: { line: 'Alan Sandoval · Ibarra, Ecuador', top: 'Back to top' },
  },
};
