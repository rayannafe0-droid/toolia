export type Guide = {
  slug: string;
  title: string;
  category: string;
  description: string;
  introduction: string;
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    example?: string;
  }[];
  conclusion: string;
};

export const guides: Guide[] = [
  {
    slug: "como-utilizar-chatgpt",
    title: "Cómo utilizar ChatGPT correctamente",
    category: "Inteligencia Artificial",
    description:
      "Aprende a utilizar ChatGPT correctamente y a crear instrucciones más claras para obtener mejores resultados.",
    introduction:
      "ChatGPT es una herramienta de inteligencia artificial que puede ayudarte a escribir, estudiar, generar ideas, analizar información y realizar muchas otras tareas.",
    sections: [
      {
        title: "Explica claramente lo que necesitas",
        paragraphs: [
          "Una de las mejores formas de obtener una respuesta útil es explicar claramente qué quieres conseguir.",
        ],
        example:
          "Quiero crear una descripción para vender una bicicleta de montaña de segunda mano. La descripción debe ser clara, atractiva y tener aproximadamente 100 palabras.",
      },
      {
        title: "Añade contexto",
        paragraphs: [
          "Cuanta más información relevante proporciones, más fácil será para la IA adaptar la respuesta a tus necesidades.",
        ],
        bullets: [
          "Explica quién eres o para quién es la respuesta.",
          "Indica el objetivo que quieres conseguir.",
          "Proporciona los datos importantes.",
          "Indica las limitaciones que debe respetar.",
        ],
      },
      {
        title: "Indica el formato de la respuesta",
        paragraphs: [
          "Puedes decirle a ChatGPT cómo quieres recibir la información.",
        ],
        bullets: [
          "Una lista con puntos.",
          "Una tabla.",
          "Un texto dividido por secciones.",
          "Una explicación paso a paso.",
        ],
      },
      {
        title: "Adapta el tono",
        paragraphs: [
          "También puedes indicar el estilo que quieres que tenga la respuesta.",
        ],
        bullets: [
          "Profesional",
          "Casual",
          "Académico",
          "Creativo",
          "Directo",
          "Persuasivo",
        ],
      },
      {
        title: "Revisa las respuestas",
        paragraphs: [
          "La inteligencia artificial puede cometer errores. Por eso es recomendable revisar y verificar las respuestas antes de utilizar información importante.",
        ],
      },
    ],
    conclusion:
      "No necesitas escribir prompts complicados. Lo más importante es explicar claramente qué quieres, proporcionar contexto suficiente y especificar cómo quieres recibir la respuesta.",
  },

  {
    slug: "como-crear-mejores-prompts",
    title: "Cómo crear mejores prompts",
    category: "IA",
    description:
      "Descubre cómo escribir instrucciones más claras para conseguir mejores resultados con la inteligencia artificial.",
    introduction:
      "Un buen prompt ayuda a una herramienta de inteligencia artificial a entender exactamente qué necesitas y cómo quieres recibir la respuesta.",
    sections: [
      {
        title: "Define tu objetivo",
        paragraphs: [
          "Antes de escribir un prompt, piensa qué resultado quieres conseguir.",
        ],
      },
      {
        title: "Proporciona contexto",
        paragraphs: [
          "Incluye la información necesaria para que la herramienta pueda adaptar su respuesta.",
        ],
      },
      {
        title: "Indica el formato",
        paragraphs: [
          "Puedes especificar si quieres una lista, una tabla, un texto, pasos o cualquier otro formato.",
        ],
      },
      {
        title: "Especifica el tono",
        paragraphs: [
          "Indica si quieres una respuesta profesional, casual, académica, creativa o directa.",
        ],
      },
    ],
    conclusion:
      "Un prompt claro suele producir resultados más útiles. Define el objetivo, proporciona contexto y explica cómo quieres recibir la respuesta.",
  },

  {
    slug: "chatgpt-vs-claude-vs-gemini",
    title: "ChatGPT vs Claude vs Gemini",
    category: "Comparativas",
    description:
      "Compara tres de los principales asistentes de inteligencia artificial y descubre cuál puede adaptarse mejor a tus necesidades.",
    introduction:
      "ChatGPT, Claude y Gemini son asistentes de inteligencia artificial con diferentes características y formas de integrarse con otros servicios.",
    sections: [
      {
        title: "ChatGPT",
        paragraphs: [
          "ChatGPT puede utilizarse para escribir, estudiar, programar, analizar información y generar ideas.",
        ],
      },
      {
        title: "Claude",
        paragraphs: [
          "Claude es otro asistente de inteligencia artificial orientado a conversación, análisis y generación de contenido.",
        ],
      },
      {
        title: "Gemini",
        paragraphs: [
          "Gemini es el asistente de inteligencia artificial de Google y está integrado con diferentes servicios de su ecosistema.",
        ],
      },
      {
        title: "¿Cuál elegir?",
        paragraphs: [
          "La mejor opción depende del tipo de tarea, las funciones que necesites y el ecosistema de servicios que utilices.",
        ],
      },
    ],
    conclusion:
      "No existe una única herramienta perfecta para todo. Lo recomendable es probar diferentes opciones y elegir según tus necesidades.",
  },

  {
    slug: "mejores-herramientas-ia-gratuitas",
    title: "Las mejores herramientas de IA gratuitas",
    category: "Herramientas",
    description:
      "Descubre herramientas gratuitas para estudiar, trabajar, crear contenido y mejorar tu productividad.",
    introduction:
      "Cada vez existen más herramientas de inteligencia artificial que ofrecen funciones gratuitas para diferentes necesidades.",
    sections: [
      {
        title: "Herramientas para escribir",
        paragraphs: [
          "Las herramientas de IA pueden ayudarte a redactar, resumir, corregir y mejorar diferentes tipos de textos.",
        ],
      },
      {
        title: "Herramientas para estudiar",
        paragraphs: [
          "Puedes utilizar la inteligencia artificial como apoyo para comprender conceptos, organizar información y generar preguntas.",
        ],
      },
      {
        title: "Herramientas para crear contenido",
        paragraphs: [
          "Existen herramientas para generar ideas, imágenes, textos y otros recursos digitales.",
        ],
      },
    ],
    conclusion:
      "Antes de elegir una herramienta, revisa sus funciones gratuitas y comprueba si se adaptan realmente a lo que necesitas.",
  },

  {
    slug: "ia-para-estudiar",
    title: "Cómo utilizar la IA para estudiar",
    category: "Productividad",
    description:
      "Ideas y métodos para utilizar herramientas de inteligencia artificial como apoyo al estudio.",
    introduction:
      "La inteligencia artificial puede utilizarse como una herramienta de apoyo para estudiar y comprender diferentes materias.",
    sections: [
      {
        title: "Explicar conceptos",
        paragraphs: [
          "Puedes pedir a una herramienta de IA que explique un concepto utilizando palabras más sencillas.",
        ],
      },
      {
        title: "Crear preguntas",
        paragraphs: [
          "También puedes utilizarla para generar preguntas y practicar antes de un examen.",
        ],
      },
      {
        title: "Resumir información",
        paragraphs: [
          "La IA puede ayudarte a convertir información extensa en puntos principales para facilitar el repaso.",
        ],
      },
      {
        title: "Comprobar conocimientos",
        paragraphs: [
          "Puedes pedirle que prepare ejercicios y después intentar resolverlos por tu cuenta.",
        ],
      },
    ],
    conclusion:
      "La IA puede ser un buen apoyo para estudiar, pero es importante comprender la información y no limitarse a copiar las respuestas.",
  },

  {
    slug: "ia-para-trabajar",
    title: "Cómo utilizar la IA para trabajar",
    category: "Productividad",
    description:
      "Descubre diferentes formas de utilizar la inteligencia artificial para ahorrar tiempo y mejorar tu trabajo.",
    introduction:
      "Las herramientas de inteligencia artificial pueden ayudarte a automatizar o acelerar determinadas tareas de trabajo.",
    sections: [
      {
        title: "Redacción",
        paragraphs: [
          "Puedes utilizar IA como apoyo para redactar correos, documentos, descripciones y otros textos.",
        ],
      },
      {
        title: "Organización",
        paragraphs: [
          "También puede ayudarte a organizar tareas, ideas y proyectos.",
        ],
      },
      {
        title: "Generación de ideas",
        paragraphs: [
          "Puedes utilizar diferentes modelos para buscar ideas y diferentes enfoques para un proyecto.",
        ],
      },
      {
        title: "Automatización",
        paragraphs: [
          "En determinados casos, la IA puede combinarse con otras herramientas para automatizar procesos repetitivos.",
        ],
      },
    ],
    conclusion:
      "La inteligencia artificial puede ahorrar tiempo en muchas tareas, pero siempre conviene revisar el resultado antes de utilizarlo profesionalmente.",
    },

];