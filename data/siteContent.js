/** Central content: edit experience, selected work, links, and copy here. */

export const siteMeta = {
  name: "Andres",
  title: {
    en: "Andres — Full Stack Developer",
    es: "Andres — Desarrollador Full Stack",
  },
  description: {
    en: "Full stack developer with a frontend-first mindset. Interfaces, performance, and product-quality delivery.",
    es: "Desarrollador full stack con mentalidad frontend-first. Interfaces, performance y entrega con calidad de producto.",
  },
};

export const nav = {
  home: { en: "Home", es: "Inicio" },
  about: { en: "About", es: "Sobre mí" },
  experience: { en: "Experience", es: "Experiencia" },
  work: { en: "Selected work", es: "Trabajos" },
  skills: { en: "Stack", es: "Stack" },
  contact: { en: "Contact", es: "Contacto" },
};

export const hero = {
  kicker: {
    en: "Full Stack · Frontend-focused",
    es: "Full Stack · Enfoque frontend",
  },
  headline: {
    en: "I build calm, precise interfaces for serious products.",
    es: "Construyo interfaces claras y precisas para productos exigentes.",
  },
  sub: {
    en: "Full stack engineer with a deep frontend bias: React, Next.js, TypeScript, and thoughtful UX—paired with Laravel, PHP, and MySQL when the stack calls for it.",
    es: "Ingeniero full stack con fuerte sesgo frontend: React, Next.js, TypeScript y UX cuidada—combinado con Laravel, PHP y MySQL cuando el stack lo requiere.",
  },
  ctaWork: { en: "View selected work", es: "Ver trabajos" },
  ctaContact: { en: "Start a conversation", es: "Hablemos" },
  cv: {
    href: "/assets/cv/CVAndresCimma.pdf",
    label: { en: "Download CV", es: "Descargar CV" },
    filename: "CVAndresCimma.pdf",
  },
};

export const about = {
  title: { en: "About", es: "Sobre mí" },
  lead: {
    en: "I partner with teams to ship interfaces that feel obvious to users and sustainable for engineering.",
    es: "Trabajo con equipos para entregar interfaces que se sienten obvias para el usuario y sostenibles para el equipo técnico.",
  },
  paragraphs: [
    {
      en: "As a full stack developer, my sweet spot is the frontend: component architecture, interaction design in code, accessibility, and performance budgets that hold up in production.",
      es: "Como desarrollador full stack, mi punto fuerte es el frontend: arquitectura de componentes, interacción en código, accesibilidad y performance que aguanta en producción.",
    },
    {
      en: "Day to day I work with React, Next.js, JavaScript, and TypeScript—building scalable UI systems, not one-off screens. On the backend I am comfortable with Laravel, PHP, and MySQL when features need robust server-side structure.",
      es: "Día a día trabajo con React, Next.js, JavaScript y TypeScript—construyendo sistemas de UI escalables, no pantallas sueltas. En backend me muevo con Laravel, PHP y MySQL cuando hace falta una base server-side sólida.",
    },
    {
      en: "I care about product craft: clear hierarchy, generous whitespace, motion that supports understanding, and copy that respects the user’s time.",
      es: "Me importa el craft del producto: jerarquía clara, espacio en blanco, motion que ayuda a entender y copy que respeta el tiempo de quien usa el producto.",
    },
  ],
};

export const experience = {
  title: { en: "Experience", es: "Experiencia" },
  subtitle: {
    en: "Roles focused on ownership, collaboration, and shipping quality UI.",
    es: "Roles con foco en ownership, colaboración y entrega de UI con calidad.",
  },
  items: [
    {
      id: "zyla",
      company: "Zyla Labs",
      role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
      period: { en: "Jan 2024 — Present", es: "Ene 2024 — Presente" },
      location: { en: "Remote", es: "Remoto" },
      highlights: [
        {
          en: "Full stack delivery with a primary focus on frontend quality, UX clarity, and maintainable UI patterns.",
          es: "Entrega full stack con foco principal en calidad de frontend, claridad de UX y patrones de UI mantenibles.",
        },
        {
          en: "Built intuitive, user-centric interfaces and kept visual and interaction consistency across product surfaces.",
          es: "Construí interfaces centradas en el usuario y mantuve consistencia visual y de interacción en el producto.",
        },
        {
          en: "Collaborated with cross-functional partners to translate ideas into scalable, shippable solutions.",
          es: "Colaboré con equipos multidisciplinarios para traducir ideas en soluciones escalables y entregables.",
        },
        {
          en: "Contributed across the stack using PHP, Laravel, and adjacent tooling where backend work unlocked better frontend outcomes.",
          es: "Contribuí en el stack con PHP, Laravel y herramientas afines cuando el backend habilitó mejores resultados en frontend.",
        },
      ],
    },
    {
      id: "fixup",
      company: "FixUP!",
      role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
      period: { en: "Oct 2023 — Present", es: "Oct 2023 — Presente" },
      location: { en: "Remote", es: "Remoto" },
      highlights: [
        {
          en: "Helped kick off new initiatives and evolve existing products—owning UI execution from early exploration to release.",
          es: "Participé en el arranque de nuevas iniciativas y en la evolución de productos existentes—llevando la UI desde exploración hasta release.",
        },
        {
          en: "Implemented polished, responsive interfaces with React, Redux, and modern JavaScript.",
          es: "Implementé interfaces pulidas y responsivas con React, Redux y JavaScript moderno.",
        },
        {
          en: "Prioritized pragmatic performance work: lean renders, sensible state boundaries, and components that stay easy to change.",
          es: "Prioricé performance pragmática: renders eficientes, límites de estado sensatos y componentes fáciles de evolucionar.",
        },
        {
          en: "Partnered with design and stakeholders to turn requirements into reusable building blocks the team could compose with confidence.",
          es: "Trabajé con diseño y stakeholders para convertir requerimientos en bloques reutilizables que el equipo pueda componer con confianza.",
        },
        {
          en: "Participated in planning sessions and code reviews with a constructive, standards-minded approach.",
          es: "Participé en planning y revisiones de código con un enfoque constructivo y orientado a estándares.",
        },
      ],
    },
    {
      id: "99minutos",
      company: "99minutos",
      role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
      period: { en: "Feb 2022 — Jul 2023", es: "Feb 2022 — Jul 2023" },
      location: { en: "Remote", es: "Remoto" },
      highlights: [
        {
          en: "Developed interactive interfaces with React, Next.js, Vue, MUI, and TypeScript in production logistics products.",
          es: "Desarrollé interfaces interactivas con React, Next.js, Vue, MUI y TypeScript en productos de logística en producción.",
        },
        {
          en: "Improved UX and frontend structure on real customer-facing flows—balancing speed, clarity, and long-term maintainability.",
          es: "Mejoré la UX y la estructura frontend en flujos reales hacia cliente—balanceando velocidad, claridad y mantenibilidad.",
        },
      ],
    },
  ],
};

/**
 * Selected work: add screenshots to /public/work/your-file.jpg (or .png).
 * For external images, add the host to next.config.js `images.remotePatterns` or use a local export.
 */
export const selectedWork = {
  title: { en: "Selected work", es: "Trabajos destacados" },
  subtitle: {
    en: "Production work: interfaces I designed or built, and products I help keep healthy over time.",
    es: "Trabajo en producción: interfaces que diseñé o construí, y productos que mantengo en el tiempo.",
  },
  items: [
    {
      id: "fixupweb",
      name: { en: "FixUP!", es: "FixUP!" },
      description: {
        en: "Consumer-facing site for tech repair and quoting (fixupweb.com). I joined an existing React and Redux codebase: ongoing maintenance, new features, and hardening of current flows—search and device discovery, category browsing, and quote CTAs—with predictable state as the product evolved.",
        es: "Sitio orientado al público para reparación y cotización de equipos (fixupweb.com). Me sumé a un codebase React y Redux ya iniciado: mantenimiento continuo, nuevas features y mejora de flujos existentes—búsqueda y descubrimiento de equipos, categorías y CTAs de cotización—manteniendo el estado claro a medida que el producto crecía.",
      },
      role: {
        en: "Frontend — React, Redux, maintenance & features",
        es: "Frontend — React, Redux, mantenimiento y features",
      },
      stack: ["React", "Redux", "JavaScript"],
      url: "https://fixupweb.com/",
      image: "/work/fixupweb.png",
    },
    {
      id: "zylalabs",
      name: { en: "Zyla API Hub", es: "Zyla API Hub" },
      description: {
        en: "API marketplace at zylalabs.com. I designed the home experience, the category discovery grid, and the API listing cards (layout, hierarchy, and component structure). On the engineering side I implemented features with PHP and Laravel—pairing a clear product UI with solid server-side work. Related products in the same portfolio include Metals API (separate case study).",
        es: "Marketplace de APIs en zylalabs.com. Diseñé la home, la grilla de categorías y las cards de listado de APIs (layout, jerarquía y estructura de componentes). En ingeniería implementé con PHP y Laravel—uniendo una UI de producto clara con trabajo server-side sólido. En el mismo portfolio está Metals API como caso aparte (producto de Zyla Labs).",
      },
      role: {
        en: "Product UI & full stack — design, Laravel, PHP",
        es: "UI de producto y full stack — diseño, Laravel, PHP",
      },
      stack: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
      url: "https://zylalabs.com/",
      image: "/work/zylalabs-hub.png",
      gallery: [
        "/work/zylalabs-categories.png",
        "/work/zylalabs-api-cards.png",
      ],
    },
    {
      id: "metals-api",
      name: { en: "Metals API", es: "Metals API" },
      description: {
        en: "A Zyla Labs product: metals-api.com is a metals and currency rates API with a logged-in developer experience. I designed the marketing homepage and the dashboard (navigation, request builder, and documentation entry points). I also maintain the product, shipping updates with PHP, Laravel, and Tailwind CSS.",
        es: "Producto de Zyla Labs: metals-api.com ofrece una API de cotizaciones de metales y monedas con experiencia para desarrolladores autenticados. Diseñé la homepage comercial y el dashboard (navegación, constructor de requests y accesos a documentación). Además hago mantenimiento del producto, con PHP, Laravel y Tailwind CSS.",
      },
      role: {
        en: "Product UI & engineering — Zyla Labs · Laravel, Tailwind",
        es: "UI e ingeniería de producto — Zyla Labs · Laravel, Tailwind",
      },
      stack: ["Laravel", "PHP", "Tailwind CSS", "JavaScript"],
      url: "https://metals-api.com/",
      image: "/work/metals-api-dashboard.png",
    },
    {
      id: "assurant-seguro-movil",
      name: { en: "Assurant · Seguro Móvil", es: "Assurant · Seguro Móvil" },
      description: {
        en: "Customer self-service portal for mobile insurance claims at seguromovil.com.ar. I built the experience in React and MUI, covering the main entry flow, action CTAs, and support navigation with a clear structure for claim reporting and case follow-up.",
        es: "Portal de autogestión para siniestros de seguro móvil en seguromovil.com.ar. Lo desarrollé con React y MUI, cubriendo el flujo principal de entrada, CTAs de acción y navegación de soporte con una estructura clara para reportes y seguimiento de casos.",
      },
      role: {
        en: "Frontend implementation — React, MUI",
        es: "Implementación frontend — React, MUI",
      },
      stack: ["React", "MUI", "JavaScript"],
      url: "https://www.seguromovil.com.ar/",
      image: "/work/assurant-seguromovil.png",
    },
  ],
};

export const skills = {
  title: { en: "Stack", es: "Stack" },
  subtitle: {
    en: "Tools I reach for to ship maintainable product UI.",
    es: "Herramientas que uso para entregar UI mantenible.",
  },
  items: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux",
    "HTML",
    "CSS / SCSS",
    "MUI",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "MySQL",
    "Git",
  ],
};

export const contact = {
  title: { en: "Contact", es: "Contacto" },
  lead: {
    en: "Tell me about the product, the constraints, and the outcome you want. I’ll respond with clarity and next steps.",
    es: "Contame sobre el producto, las restricciones y el resultado que buscás. Respondo con claridad y próximos pasos.",
  },
  email: "andrescimma1@gmail.com",
  links: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andres-cimma/",
    },
    { id: "github", label: "GitHub", href: "https://github.com/andrescimma1" },
  ],
  form: {
    name: { en: "Name", es: "Nombre" },
    email: { en: "Email", es: "Email" },
    message: { en: "Message", es: "Mensaje" },
    send: { en: "Send message", es: "Enviar mensaje" },
  },
};

export const toasts = {
  success: {
    en: "Message sent. I’ll get back to you shortly.",
    es: "Mensaje enviado. Te respondo a la brevedad.",
  },
  error: {
    en: "Something went wrong. Check the fields and try again.",
    es: "Algo salió mal. Revisá los campos e intentá de nuevo.",
  },
};

export const footer = {
  note: {
    en: "Portfolio · Next.js",
    es: "Portfolio · Next.js",
  },
};
