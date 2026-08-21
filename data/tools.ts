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
  },

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
  },

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
  },
];