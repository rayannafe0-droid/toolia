export type Tool = {
  slug: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  pricing: string;
  freePlan?: boolean;

  officialUrl: string;
  affiliateUrl?: string;
  useAffiliate?: boolean;

  verified: boolean;

  rating?: number;
  lastReviewed?: string;

  features?: string[];
  pros?: string[];
  cons?: string[];
  useCases?: string[];
  alternatives?: string[];
};

export const tools: Tool[] = [
  // =========================================================
  // INTELIGENCIA ARTIFICIAL
  // =========================================================

  {
    slug: "chatgpt",
    name: "ChatGPT",
    description:
      "Asistente de inteligencia artificial para escribir, analizar información, aprender, programar y crear contenido.",
    category: "Inteligencia Artificial",
    subcategory: "Asistentes de IA",
    pricing: "Gratis / Plus",
    freePlan: true,
    officialUrl: "https://chatgpt.com",
    verified: true,
    rating: 4.8,
    lastReviewed: "Agosto 2026",

    features: [
      "Generación y edición de textos",
      "Análisis de información",
      "Programación y ayuda con código",
      "Análisis de archivos",
      "Generación y análisis de imágenes",
      "Conversaciones con inteligencia artificial",
    ],

    pros: [
      "Muy versátil",
      "Fácil de utilizar",
      "Amplia variedad de funciones",
      "Disponible en versión gratuita",
    ],

    cons: [
      "Algunas funciones avanzadas requieren un plan de pago",
      "Las respuestas pueden contener errores",
    ],

    useCases: [
      "Estudiar",
      "Escribir textos",
      "Programar",
      "Crear contenido",
      "Analizar información",
      "Generar ideas",
    ],

    alternatives: ["claude", "gemini", "perplexity"],
  },

  {
    slug: "gemini",
    name: "Gemini",
    description:
      "Asistente de inteligencia artificial de Google para investigar, escribir, analizar información y crear contenido.",
    category: "Inteligencia Artificial",
    subcategory: "Asistentes de IA",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://gemini.google.com",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Generación de texto",
      "Análisis de información",
      "Ayuda para estudiar",
      "Generación de ideas",
      "Integración con servicios de Google",
      "Conversaciones con IA",
    ],

    pros: [
      "Buena integración con el ecosistema de Google",
      "Versión gratuita disponible",
      "Útil para investigación y estudio",
    ],

    cons: [
      "Algunas funciones dependen del plan utilizado",
      "Puede cometer errores en sus respuestas",
    ],

    useCases: [
      "Estudiar",
      "Investigar",
      "Escribir",
      "Generar ideas",
      "Organizar información",
    ],

    alternatives: ["chatgpt", "claude", "perplexity"],
  },

  {
    slug: "claude",
    name: "Claude",
    description:
      "Asistente de inteligencia artificial orientado a escritura, análisis, programación y resolución de tareas complejas.",
    category: "Inteligencia Artificial",
    subcategory: "Asistentes de IA",
    pricing: "Gratis / Pro",
    freePlan: true,
    officialUrl: "https://claude.ai",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Redacción de textos",
      "Análisis de documentos",
      "Programación",
      "Resolución de problemas",
      "Conversaciones con IA",
      "Análisis de grandes cantidades de información",
    ],

    pros: [
      "Excelente para escritura",
      "Muy útil para análisis",
      "Buenas capacidades de programación",
      "Interfaz sencilla",
    ],

    cons: [
      "Algunas funciones requieren suscripción",
      "Puede tener límites de uso",
    ],

    useCases: [
      "Escribir",
      "Estudiar",
      "Programar",
      "Analizar documentos",
      "Investigar",
    ],

    alternatives: ["chatgpt", "gemini", "perplexity"],
  },

  {
    slug: "perplexity",
    name: "Perplexity",
    description:
      "Motor de búsqueda con inteligencia artificial que combina búsqueda web y respuestas generadas por IA.",
    category: "Inteligencia Artificial",
    subcategory: "Búsqueda con IA",
    pricing: "Gratis / Pro",
    freePlan: true,
    officialUrl: "https://www.perplexity.ai",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Búsqueda web con inteligencia artificial",
      "Respuestas con fuentes",
      "Investigación rápida",
      "Resúmenes de información",
      "Seguimiento de preguntas",
    ],

    pros: [
      "Muy útil para investigar",
      "Muestra fuentes de información",
      "Rápido para encontrar respuestas",
    ],

    cons: [
      "Las respuestas deben comprobarse",
      "Algunas funciones avanzadas son de pago",
    ],

    useCases: [
      "Investigar",
      "Buscar información",
      "Estudiar",
      "Comparar fuentes",
      "Resumir información",
    ],

    alternatives: ["chatgpt", "gemini", "claude"],
  },

  {
    slug: "deepseek",
    name: "DeepSeek",
    description:
      "Asistente de inteligencia artificial orientado a conversación, razonamiento, investigación y programación.",
    category: "Inteligencia Artificial",
    subcategory: "Asistentes de IA",
    pricing: "Gratis",
    freePlan: true,
    officialUrl: "https://www.deepseek.com",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Conversaciones con IA",
      "Razonamiento",
      "Generación de textos",
      "Programación",
      "Resolución de problemas",
    ],

    pros: [
      "Acceso gratuito",
      "Útil para programación",
      "Buenas capacidades de razonamiento",
    ],

    cons: [
      "Las respuestas pueden contener errores",
      "La disponibilidad de funciones puede cambiar",
    ],

    useCases: [
      "Programar",
      "Estudiar",
      "Resolver problemas",
      "Generar ideas",
      "Escribir",
    ],

    alternatives: ["chatgpt", "claude", "gemini"],
  },

  {
    slug: "copilot",
    name: "Microsoft Copilot",
    description:
      "Asistente de inteligencia artificial de Microsoft para responder preguntas, crear contenido y trabajar con herramientas digitales.",
    category: "Inteligencia Artificial",
    subcategory: "Asistentes de IA",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://copilot.microsoft.com",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Conversaciones con IA",
      "Generación de contenido",
      "Ayuda para investigar",
      "Generación de imágenes",
      "Integración con productos Microsoft",
    ],

    pros: [
      "Integración con Microsoft",
      "Versión gratuita disponible",
      "Útil para productividad",
    ],

    cons: [
      "Algunas funciones requieren suscripción",
      "Las respuestas pueden contener errores",
    ],

    useCases: [
      "Investigar",
      "Escribir",
      "Generar imágenes",
      "Trabajar",
      "Resolver dudas",
    ],

    alternatives: ["chatgpt", "gemini", "claude"],
  },

  // =========================================================
  // DISEÑO
  // =========================================================

  {
    slug: "canva",
    name: "Canva",
    description:
      "Plataforma de diseño online para crear presentaciones, imágenes, publicaciones y contenido visual.",
    category: "Diseño",
    subcategory: "Diseño gráfico",
    pricing: "Gratis / Pro",
    freePlan: true,
    officialUrl: "https://www.canva.com",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Diseño gráfico online",
      "Presentaciones",
      "Plantillas",
      "Edición de imágenes",
      "Creación de contenido para redes sociales",
      "Funciones de inteligencia artificial",
    ],

    pros: [
      "Muy fácil de utilizar",
      "Gran cantidad de plantillas",
      "Versión gratuita disponible",
      "Ideal para principiantes",
    ],

    cons: [
      "Algunas funciones requieren Canva Pro",
      "Puede quedarse corto para diseño profesional avanzado",
    ],

    useCases: [
      "Crear presentaciones",
      "Diseñar publicaciones",
      "Crear logotipos",
      "Diseñar carteles",
      "Crear contenido para redes sociales",
    ],

    alternatives: ["adobe-express", "figma"],
  },

  {
    slug: "figma",
    name: "Figma",
    description:
      "Herramienta colaborativa de diseño utilizada para crear interfaces, prototipos y diseños digitales.",
    category: "Diseño",
    subcategory: "UI/UX",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.figma.com",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Diseño de interfaces",
      "Prototipos interactivos",
      "Colaboración en tiempo real",
      "Componentes reutilizables",
      "Diseño web y móvil",
    ],

    pros: [
      "Excelente para UI/UX",
      "Trabajo colaborativo",
      "Versión gratuita disponible",
    ],

    cons: [
      "Puede resultar complejo para principiantes",
      "Algunas funciones son de pago",
    ],

    useCases: [
      "Diseñar webs",
      "Diseñar aplicaciones",
      "Crear prototipos",
      "Diseño UI/UX",
      "Trabajar en equipo",
    ],

    alternatives: ["canva", "adobe-express"],
  },

  {
    slug: "adobe-express",
    name: "Adobe Express",
    description:
      "Herramienta de Adobe para crear contenido gráfico, publicaciones, vídeos y diseños rápidamente.",
    category: "Diseño",
    subcategory: "Diseño gráfico",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.adobe.com/express",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Diseño gráfico",
      "Plantillas",
      "Edición de imágenes",
      "Creación de vídeos",
      "Contenido para redes sociales",
      "Funciones de IA",
    ],

    pros: [
      "Interfaz sencilla",
      "Integración con Adobe",
      "Muchas plantillas",
    ],

    cons: [
      "Algunas funciones requieren Premium",
      "Puede ser menos completo que herramientas profesionales de Adobe",
    ],

    useCases: [
      "Crear publicaciones",
      "Editar imágenes",
      "Crear vídeos",
      "Diseñar carteles",
      "Crear contenido para redes",
    ],

    alternatives: ["canva", "figma"],
  },

  // =========================================================
  // PRODUCTIVIDAD
  // =========================================================

  {
    slug: "notion-ai",
    name: "Notion AI",
    description:
      "Herramienta de inteligencia artificial integrada en Notion para escribir, resumir, organizar información y trabajar.",
    category: "Productividad",
    subcategory: "Organización y productividad",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.notion.com",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Generación de textos",
      "Resúmenes",
      "Organización de información",
      "Asistencia para escribir",
      "Gestión de tareas",
      "Espacios de trabajo colaborativos",
    ],

    pros: [
      "Muy útil para organizar información",
      "Combina productividad e inteligencia artificial",
      "Buen sistema de organización",
    ],

    cons: [
      "Algunas funciones requieren pago",
      "Puede necesitar tiempo para aprender a utilizarlo",
    ],

    useCases: [
      "Organizar apuntes",
      "Estudiar",
      "Gestionar proyectos",
      "Crear documentos",
      "Organizar tareas",
    ],

    alternatives: ["trello", "evernote"],
  },

  {
    slug: "trello",
    name: "Trello",
    description:
      "Herramienta de gestión de proyectos basada en tableros, listas y tarjetas para organizar tareas y equipos.",
    category: "Productividad",
    subcategory: "Gestión de proyectos",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://trello.com",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Tableros de proyectos",
      "Gestión de tareas",
      "Listas y tarjetas",
      "Colaboración en equipo",
      "Automatizaciones",
    ],

    pros: [
      "Muy fácil de utilizar",
      "Excelente organización visual",
      "Versión gratuita disponible",
    ],

    cons: [
      "Funciones avanzadas requieren pago",
      "Puede quedarse corto en proyectos muy complejos",
    ],

    useCases: [
      "Organizar tareas",
      "Gestionar proyectos",
      "Trabajo en equipo",
      "Planificar contenido",
      "Organizar estudios",
    ],

    alternatives: ["notion-ai", "evernote"],
  },

  {
    slug: "evernote",
    name: "Evernote",
    description:
      "Aplicación para tomar notas, organizar documentos, guardar información y gestionar tareas.",
    category: "Productividad",
    subcategory: "Notas y organización",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://evernote.com",
    verified: true,
    rating: 4.4,
    lastReviewed: "Agosto 2026",

    features: [
      "Notas digitales",
      "Organización de documentos",
      "Sincronización",
      "Listas de tareas",
      "Búsqueda de información",
    ],

    pros: [
      "Buena organización",
      "Disponible en diferentes dispositivos",
      "Útil para tomar notas",
    ],

    cons: [
      "Algunas funciones son de pago",
      "Puede haber límites en el plan gratuito",
    ],

    useCases: [
      "Tomar apuntes",
      "Estudiar",
      "Organizar documentos",
      "Guardar información",
      "Gestionar tareas",
    ],

    alternatives: ["notion-ai", "trello"],
  },

  // =========================================================
  // ESCRITURA
  // =========================================================

  {
    slug: "grammarly",
    name: "Grammarly",
    description:
      "Asistente de escritura que ayuda a corregir textos, mejorar la redacción y detectar errores.",
    category: "Productividad",
    subcategory: "Escritura",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.grammarly.com",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Corrección gramatical",
      "Corrección ortográfica",
      "Mejora de redacción",
      "Sugerencias de estilo",
      "Asistencia mediante IA",
    ],

    pros: [
      "Fácil de utilizar",
      "Buenas sugerencias de escritura",
      "Versión gratuita disponible",
    ],

    cons: [
      "Muchas funciones avanzadas requieren Premium",
      "Está especialmente orientado al inglés",
    ],

    useCases: [
      "Revisar textos",
      "Escribir emails",
      "Mejorar redacción",
      "Estudiar idiomas",
      "Crear contenido",
    ],

    alternatives: ["quillbot"],
  },

  {
    slug: "quillbot",
    name: "QuillBot",
    description:
      "Herramienta de escritura con inteligencia artificial para parafrasear, resumir y mejorar textos.",
    category: "Productividad",
    subcategory: "Escritura",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://quillbot.com",
    verified: true,
    rating: 4.4,
    lastReviewed: "Agosto 2026",

    features: [
      "Parafraseo",
      "Corrección de textos",
      "Resúmenes",
      "Generación de textos",
      "Herramientas de escritura",
    ],

    pros: [
      "Útil para reformular textos",
      "Interfaz sencilla",
      "Tiene versión gratuita",
    ],

    cons: [
      "Limitaciones en el plan gratuito",
      "Los resultados deben revisarse",
    ],

    useCases: [
      "Parafrasear",
      "Resumir",
      "Mejorar textos",
      "Estudiar",
      "Escribir contenido",
    ],

    alternatives: ["grammarly", "chatgpt"],
  },

  // =========================================================
  // VÍDEO
  // =========================================================

  {
    slug: "capcut",
    name: "CapCut",
    description:
      "Editor de vídeo para crear contenido para redes sociales, vídeos cortos y proyectos audiovisuales.",
    category: "Vídeo",
    subcategory: "Edición de vídeo",
    pricing: "Gratis / Pro",
    freePlan: true,
    officialUrl: "https://www.capcut.com",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Edición de vídeo",
      "Plantillas",
      "Subtítulos automáticos",
      "Efectos y transiciones",
      "Herramientas de IA",
      "Edición para redes sociales",
    ],

    pros: [
      "Muy fácil de utilizar",
      "Muchas funciones",
      "Excelente para vídeos cortos",
      "Versión gratuita disponible",
    ],

    cons: [
      "Algunas funciones son de pago",
      "Algunas plantillas pueden tener limitaciones",
    ],

    useCases: [
      "Editar TikToks",
      "Crear Reels",
      "Editar vídeos de YouTube",
      "Crear Shorts",
      "Crear contenido para redes",
    ],

    alternatives: ["descript", "veed"],
  },

  {
    slug: "descript",
    name: "Descript",
    description:
      "Plataforma de edición de vídeo y audio que permite editar contenido mediante transcripciones y herramientas de IA.",
    category: "Vídeo",
    subcategory: "Edición de vídeo",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.descript.com",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Edición de vídeo",
      "Edición de audio",
      "Transcripción automática",
      "Subtítulos",
      "Herramientas de inteligencia artificial",
    ],

    pros: [
      "Edición mediante texto",
      "Buenas herramientas de IA",
      "Útil para podcasts y vídeos",
    ],

    cons: [
      "Algunas funciones requieren pago",
      "Puede necesitar aprendizaje inicial",
    ],

    useCases: [
      "Editar podcasts",
      "Crear vídeos",
      "Editar entrevistas",
      "Generar subtítulos",
      "Crear contenido",
    ],

    alternatives: ["capcut", "veed"],
  },

  {
    slug: "veed",
    name: "VEED",
    description:
      "Editor de vídeo online con herramientas para crear contenido, subtítulos, vídeos para redes sociales y proyectos digitales.",
    category: "Vídeo",
    subcategory: "Edición de vídeo",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.veed.io",
    verified: true,
    rating: 4.4,
    lastReviewed: "Agosto 2026",

    features: [
      "Editor de vídeo online",
      "Subtítulos automáticos",
      "Grabación de pantalla",
      "Plantillas",
      "Herramientas de IA",
    ],

    pros: [
      "Funciona desde el navegador",
      "Interfaz sencilla",
      "Útil para redes sociales",
    ],

    cons: [
      "Limitaciones en el plan gratuito",
      "Algunas exportaciones pueden requerir pago",
    ],

    useCases: [
      "Editar vídeos",
      "Crear Reels",
      "Crear Shorts",
      "Añadir subtítulos",
      "Crear contenido para redes",
    ],

    alternatives: ["capcut", "descript"],
  },

  // =========================================================
  // IMÁGENES CON IA
  // =========================================================

  {
    slug: "midjourney",
    name: "Midjourney",
    description:
      "Herramienta de inteligencia artificial especializada en la generación de imágenes a partir de instrucciones de texto.",
    category: "Inteligencia Artificial",
    subcategory: "Generación de imágenes",
    pricing: "Premium",
    freePlan: false,
    officialUrl: "https://www.midjourney.com",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Generación de imágenes",
      "Creación mediante prompts",
      "Diferentes estilos visuales",
      "Variaciones de imágenes",
      "Creación de contenido visual",
    ],

    pros: [
      "Alta calidad visual",
      "Gran variedad de estilos",
      "Muy útil para creatividad",
    ],

    cons: [
      "Requiere suscripción",
      "Puede necesitar práctica para conseguir buenos resultados",
    ],

    useCases: [
      "Crear imágenes",
      "Diseño conceptual",
      "Publicidad",
      "Ilustraciones",
      "Inspiración visual",
    ],

    alternatives: ["leonardo-ai", "ideogram"],
  },

  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    description:
      "Plataforma de inteligencia artificial para generar imágenes, diseños y recursos visuales.",
    category: "Inteligencia Artificial",
    subcategory: "Generación de imágenes",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://leonardo.ai",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Generación de imágenes",
      "Edición de imágenes",
      "Creación de recursos visuales",
      "Generación mediante texto",
      "Herramientas creativas con IA",
    ],

    pros: [
      "Buena calidad de generación",
      "Versión gratuita disponible",
      "Muchas opciones creativas",
    ],

    cons: [
      "Los créditos gratuitos pueden ser limitados",
      "Algunas funciones requieren pago",
    ],

    useCases: [
      "Crear imágenes",
      "Diseño gráfico",
      "Publicidad",
      "Concept art",
      "Crear contenido",
    ],

    alternatives: ["midjourney", "ideogram"],
  },

  {
    slug: "ideogram",
    name: "Ideogram",
    description:
      "Generador de imágenes con inteligencia artificial especialmente útil para diseños que incluyen texto.",
    category: "Inteligencia Artificial",
    subcategory: "Generación de imágenes",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://ideogram.ai",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Generación de imágenes",
      "Generación de texto dentro de imágenes",
      "Diseño de carteles",
      "Creación de logotipos",
      "Edición y variaciones",
    ],

    pros: [
      "Bueno generando texto en imágenes",
      "Interfaz sencilla",
      "Versión gratuita disponible",
    ],

    cons: [
      "Limitaciones en el plan gratuito",
      "Los resultados pueden variar según el prompt",
    ],

    useCases: [
      "Crear carteles",
      "Crear logotipos",
      "Diseñar publicaciones",
      "Publicidad",
      "Crear imágenes",
    ],

    alternatives: ["midjourney", "leonardo-ai"],
  },

  // =========================================================
  // AUDIO
  // =========================================================

  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    description:
      "Plataforma de inteligencia artificial especializada en generación de voz, narración y audio.",
    category: "Audio",
    subcategory: "Voz con IA",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://elevenlabs.io",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Generación de voz",
      "Conversión de texto a voz",
      "Clonación de voz",
      "Doblaje",
      "Generación de audio",
    ],

    pros: [
      "Voces muy realistas",
      "Útil para contenido audiovisual",
      "Versión gratuita disponible",
    ],

    cons: [
      "El uso gratuito tiene límites",
      "Algunas funciones avanzadas requieren pago",
    ],

    useCases: [
      "Narrar vídeos",
      "Crear audiolibros",
      "Doblaje",
      "Podcasts",
      "Contenido para redes sociales",
    ],

    alternatives: ["murf-ai"],
  },

  {
    slug: "murf-ai",
    name: "Murf AI",
    description:
      "Herramienta de inteligencia artificial para crear voces y narraciones profesionales a partir de texto.",
    category: "Audio",
    subcategory: "Voz con IA",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://murf.ai",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Texto a voz",
      "Voces con IA",
      "Narraciones",
      "Edición de voz",
      "Creación de locuciones",
    ],

    pros: [
      "Voces profesionales",
      "Fácil de utilizar",
      "Muchas opciones de voz",
    ],

    cons: [
      "Funciones limitadas en el plan gratuito",
      "Algunas voces requieren pago",
    ],

    useCases: [
      "Vídeos",
      "Presentaciones",
      "Publicidad",
      "Cursos online",
      "Narraciones",
    ],

    alternatives: ["elevenlabs"],
  },

  // =========================================================
  // PROGRAMACIÓN
  // =========================================================

  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description:
      "Asistente de programación con inteligencia artificial que ayuda a escribir, explicar y completar código.",
    category: "Programación",
    subcategory: "Asistentes de código",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://github.com/features/copilot",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Autocompletado de código",
      "Generación de código",
      "Explicación de código",
      "Ayuda para depuración",
      "Integración con editores",
    ],

    pros: [
      "Muy útil para programadores",
      "Aumenta la velocidad de desarrollo",
      "Integración con herramientas de programación",
    ],

    cons: [
      "Algunas funciones requieren suscripción",
      "El código generado debe revisarse",
    ],

    useCases: [
      "Programar",
      "Aprender programación",
      "Crear proyectos",
      "Corregir errores",
      "Generar código",
    ],

    alternatives: ["cursor", "chatgpt"],
  },

  {
    slug: "cursor",
    name: "Cursor",
    description:
      "Editor de código con inteligencia artificial diseñado para ayudar a programar y modificar proyectos.",
    category: "Programación",
    subcategory: "Editores con IA",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.cursor.com",
    verified: true,
    rating: 4.7,
    lastReviewed: "Agosto 2026",

    features: [
      "Editor de código con IA",
      "Generación de código",
      "Edición de proyectos",
      "Chat con código",
      "Ayuda para depuración",
    ],

    pros: [
      "Muy útil para desarrollo web",
      "Integración profunda con código",
      "Acelera tareas de programación",
    ],

    cons: [
      "Algunas funciones requieren pago",
      "Los resultados generados deben revisarse",
    ],

    useCases: [
      "Programar webs",
      "Crear aplicaciones",
      "Modificar proyectos",
      "Depurar código",
      "Aprender programación",
    ],

    alternatives: ["github-copilot", "chatgpt"],
  },

  // =========================================================
  // MARKETING / SEO
  // =========================================================

  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    description:
      "Plataforma de SEO que ayuda a crear y optimizar contenido para mejorar su posicionamiento en buscadores.",
    category: "Marketing",
    subcategory: "SEO",
    pricing: "Premium",
    freePlan: false,
    officialUrl: "https://surferseo.com",
    verified: true,
    rating: 4.5,
    lastReviewed: "Agosto 2026",

    features: [
      "Optimización SEO",
      "Análisis de contenidos",
      "Investigación de palabras clave",
      "Editor de contenido",
      "Análisis de competidores",
    ],

    pros: [
      "Útil para creación de contenido SEO",
      "Buenas herramientas de análisis",
      "Orientado a posicionamiento web",
    ],

    cons: [
      "Principalmente de pago",
      "Puede resultar avanzado para principiantes",
    ],

    useCases: [
      "SEO",
      "Blogs",
      "Posicionamiento web",
      "Investigación de palabras clave",
      "Optimización de artículos",
    ],

    alternatives: ["semrush", "ahrefs"],
  },

  {
    slug: "semrush",
    name: "Semrush",
    description:
      "Plataforma de marketing digital para SEO, investigación de palabras clave, análisis de competidores y publicidad.",
    category: "Marketing",
    subcategory: "SEO",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.semrush.com",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Investigación de palabras clave",
      "Análisis SEO",
      "Análisis de competidores",
      "Auditoría de webs",
      "Marketing de contenidos",
    ],

    pros: [
      "Muy completo",
      "Muchas herramientas de marketing",
      "Excelente para análisis SEO",
    ],

    cons: [
      "Muchas funciones son de pago",
      "Puede resultar complejo al principio",
    ],

    useCases: [
      "SEO",
      "Marketing digital",
      "Análisis de competidores",
      "Investigación de palabras clave",
      "Auditorías web",
    ],

    alternatives: ["ahrefs", "surfer-seo"],
  },

  {
    slug: "ahrefs",
    name: "Ahrefs",
    description:
      "Plataforma SEO para analizar páginas web, enlaces, palabras clave y competidores.",
    category: "Marketing",
    subcategory: "SEO",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://ahrefs.com",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Análisis de backlinks",
      "Investigación de palabras clave",
      "Auditoría SEO",
      "Análisis de competidores",
      "Seguimiento de posicionamiento",
    ],

    pros: [
      "Potentes herramientas SEO",
      "Excelente análisis de enlaces",
      "Muy utilizado por profesionales",
    ],

    cons: [
      "Funciones avanzadas de pago",
      "Puede resultar complejo para principiantes",
    ],

    useCases: [
      "SEO",
      "Análisis de backlinks",
      "Investigación de palabras clave",
      "Análisis de competidores",
      "Posicionamiento web",
    ],

    alternatives: ["semrush", "surfer-seo"],
  },

  // =========================================================
  // AUTOMATIZACIÓN
  // =========================================================

  {
    slug: "zapier",
    name: "Zapier",
    description:
      "Plataforma de automatización que conecta diferentes aplicaciones para ejecutar tareas automáticamente.",
    category: "Productividad",
    subcategory: "Automatización",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://zapier.com",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Automatización de tareas",
      "Conexión entre aplicaciones",
      "Flujos de trabajo",
      "Integraciones",
      "Automatizaciones con IA",
    ],

    pros: [
      "Muchas integraciones",
      "Reduce tareas repetitivas",
      "Fácil de configurar",
    ],

    cons: [
      "El plan gratuito tiene límites",
      "Las automatizaciones avanzadas requieren pago",
    ],

    useCases: [
      "Automatizar negocios",
      "Marketing",
      "Gestión de clientes",
      "Productividad",
      "Automatizar tareas repetitivas",
    ],

    alternatives: ["make", "n8n"],
  },

  {
    slug: "make",
    name: "Make",
    description:
      "Plataforma visual para crear automatizaciones y conectar aplicaciones mediante flujos de trabajo.",
    category: "Productividad",
    subcategory: "Automatización",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://www.make.com",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Automatización visual",
      "Integración de aplicaciones",
      "Flujos de trabajo",
      "Procesamiento de datos",
      "Automatizaciones complejas",
    ],

    pros: [
      "Muy flexible",
      "Potente sistema visual",
      "Muchas integraciones",
    ],

    cons: [
      "Puede resultar complejo al principio",
      "Las operaciones gratuitas son limitadas",
    ],

    useCases: [
      "Automatizar negocios",
      "Conectar aplicaciones",
      "Marketing",
      "Gestión de datos",
      "Automatización de procesos",
    ],

    alternatives: ["zapier", "n8n"],
  },

  {
    slug: "n8n",
    name: "n8n",
    description:
      "Plataforma de automatización de flujos de trabajo que permite conectar aplicaciones y servicios.",
    category: "Productividad",
    subcategory: "Automatización",
    pricing: "Gratis / Premium",
    freePlan: true,
    officialUrl: "https://n8n.io",
    verified: true,
    rating: 4.6,
    lastReviewed: "Agosto 2026",

    features: [
      "Automatización de flujos",
      "Integraciones",
      "Procesamiento de datos",
      "Automatizaciones con IA",
      "Flujos personalizables",
    ],

    pros: [
      "Muy flexible",
      "Potente para usuarios avanzados",
      "Permite crear flujos complejos",
    ],

    cons: [
      "Requiere más conocimientos técnicos",
      "Puede resultar complejo para principiantes",
    ],

    useCases: [
      "Automatizar tareas",
      "Integrar APIs",
      "Crear agentes de IA",
      "Procesar datos",
      "Automatizar negocios",
    ],

    alternatives: ["make", "zapier"],
  },
];