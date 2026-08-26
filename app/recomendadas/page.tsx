import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herramientas recomendadas",
  description:
    "Descubre las herramientas de IA, productividad, SEO y tecnología que recomendamos en ToolIA.",
};

const recommendations = [
  {
    name: "ChatGPT",
    category: "Inteligencia artificial",
    description:
      "Uno de los asistentes de IA más completos para escribir, aprender, investigar, programar y generar ideas.",
    bestFor: "Uso general, estudio y productividad",
    price: "Gratis + planes de pago",
    website: "https://chatgpt.com/",
    icon: "🤖",
  },
  {
    name: "Gemini",
    category: "Inteligencia artificial",
    description:
      "Asistente de Google para trabajar con texto, ideas, información y diferentes tareas de productividad.",
    bestFor: "Estudio, investigación y productividad",
    price: "Gratis + planes de pago",
    website: "https://gemini.google.com/",
    icon: "✨",
  },
  {
    name: "Claude",
    category: "Inteligencia artificial",
    description:
      "Asistente de IA especialmente útil para redactar, analizar información, resumir documentos y trabajar con textos largos.",
    bestFor: "Redacción, análisis y documentos",
    price: "Gratis + planes de pago",
    website: "https://claude.ai/",
    icon: "🧠",
  },
  {
    name: "Canva",
    category: "Diseño",
    description:
      "Plataforma sencilla para crear diseños, presentaciones, publicaciones para redes sociales y contenido visual.",
    bestFor: "Diseño y creación de contenido",
    price: "Gratis + planes de pago",
    website: "https://www.canva.com/",
    icon: "🎨",
  },
  {
    name: "Notion",
    category: "Productividad",
    description:
      "Espacio de trabajo para organizar proyectos, notas, tareas, documentos y bases de datos.",
    bestFor: "Organización y productividad",
    price: "Gratis + planes de pago",
    website: "https://www.notion.com/",
    icon: "📝",
  },
  {
    name: "Perplexity",
    category: "Investigación",
    description:
      "Buscador y asistente de IA pensado para investigar temas y obtener respuestas acompañadas de fuentes.",
    bestFor: "Investigación y búsqueda de información",
    price: "Gratis + planes de pago",
    website: "https://www.perplexity.ai/",
    icon: "🔎",
  },
];

export default function RecomendadasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            RECOMENDACIONES TOOLIA
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Las herramientas que{" "}
            <span className="text-blue-600">recomendamos</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Hemos seleccionado algunas de las herramientas que consideramos
            especialmente útiles para estudiar, trabajar, crear contenido y
            mejorar tu productividad.
          </p>
        </div>
      </section>

      {/* RECOMENDACIONES */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((tool) => (
            <article
              key={tool.name}
              className="group flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* ICONO + CATEGORÍA */}

              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {tool.icon}
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {tool.category}
                </span>
              </div>

              {/* NOMBRE */}

              <h2 className="mt-6 text-2xl font-black">
                {tool.name}
              </h2>

              {/* DESCRIPCIÓN */}

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {tool.description}
              </p>

              {/* INFORMACIÓN */}

              <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4 text-sm">
                <div>
                  <span className="font-bold text-slate-900">
                    Ideal para:
                  </span>{" "}
                  <span className="text-slate-600">
                    {tool.bestFor}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-slate-900">
                    Precio:
                  </span>{" "}
                  <span className="text-slate-600">
                    {tool.price}
                  </span>
                </div>
              </div>

              {/* BOTÓN */}

              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Visitar herramienta →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* TRANSPARENCIA */}

      <section className="border-y bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <span className="text-3xl">🔎</span>

          <h2 className="mt-4 text-2xl font-black">
            ¿Cómo elegimos nuestras recomendaciones?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            En ToolIA intentamos seleccionar herramientas útiles teniendo en
            cuenta factores como sus características, facilidad de uso,
            precio, utilidad y relación calidad/precio. Siempre que sea
            posible, utilizamos información verificable y mantenemos nuestras
            recomendaciones actualizadas.
          </p>

          <a
            href="/como-evaluamos"
            className="mt-6 inline-block font-bold text-blue-600 hover:text-blue-700"
          >
            Ver cómo evaluamos las herramientas →
          </a>
        </div>
      </section>

      {/* AFILIACIÓN */}

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border bg-slate-100 p-8 text-center">
          <h2 className="text-xl font-black">
            Transparencia sobre enlaces
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Algunos enlaces de ToolIA podrían convertirse en enlaces de
            afiliado en el futuro. Si esto ocurre, podremos recibir una
            comisión si realizas una compra o contratación a través de ellos,
            sin que esto suponga un coste adicional para ti.
          </p>

          <a
            href="/politica-afiliacion"
            className="mt-5 inline-block text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            Más información sobre nuestra política de afiliación →
          </a>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Buscas una herramienta concreta?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Explora nuestro directorio y descubre más herramientas de
            inteligencia artificial, productividad, diseño y tecnología.
          </p>

          <a
            href="/herramientas"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Explorar todas las herramientas →
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 ToolIA. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="/privacidad"
                className="hover:text-blue-600"
              >
                Privacidad
              </a>

              <a
                href="/cookies"
                className="hover:text-blue-600"
              >
                Cookies
              </a>

              <a
                href="/terminos"
                className="hover:text-blue-600"
              >
                Términos
              </a>

              <a
                href="/politica-afiliacion"
                className="hover:text-blue-600"
              >
                Afiliación
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}