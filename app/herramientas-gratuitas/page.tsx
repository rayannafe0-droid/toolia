import Link from "next/link";

const freeTools = [
  {
    slug: "generador-prompts",
    name: "Generador de prompts",
    description:
      "Crea prompts estructurados para obtener mejores resultados con herramientas de inteligencia artificial.",
    icon: "✨",
  },
  {
    slug: "generador-nombres",
    name: "Generador de nombres",
    description:
      "Genera ideas de nombres para negocios, proyectos, marcas, canales y mucho más.",
    icon: "💡",
  },
  {
    slug: "contador-palabras",
    name: "Contador de palabras",
    description:
      "Cuenta palabras, caracteres y líneas de cualquier texto de forma rápida.",
    icon: "🔢",
  },
];

export const metadata = {
  title: "Herramientas gratuitas | ToolIA",
  description:
    "Utiliza herramientas gratuitas de ToolIA para generar prompts, nombres y analizar textos.",
};

export default function HerramientasGratuitasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <p className="font-bold text-blue-600">
            RECURSOS GRATUITOS
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Herramientas gratuitas
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Herramientas sencillas y gratuitas creadas por ToolIA para
            ayudarte a trabajar, estudiar, crear contenido y aprovechar
            mejor la inteligencia artificial.
          </p>

        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {freeTools.map((tool) => (

            <article
              key={tool.slug}
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {tool.icon}
              </div>

              <h2 className="mt-6 text-2xl font-black">
                {tool.name}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {tool.description}
              </p>

              <Link
                href={`/herramientas-gratuitas/${tool.slug}`}
                className="mt-7 inline-block rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
              >
                Utilizar herramienta →
              </Link>

            </article>

          ))}

        </div>

      </section>

      {/* INFO */}
      <section className="border-t bg-white">

        <div className="mx-auto max-w-4xl px-6 py-16 text-center">

          <div className="text-4xl">
            🛠️
          </div>

          <h2 className="mt-5 text-3xl font-black">
            Más herramientas próximamente
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Iremos añadiendo nuevas herramientas gratuitas a ToolIA para
            que puedas realizar tareas útiles directamente desde la web.
          </p>

        </div>

      </section>

    </main>
  );
}