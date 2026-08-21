import Link from "next/link";

export const metadata = {
  title: "ChatGPT vs Claude: ¿Cuál es mejor? | ToolIA",
  description:
    "Comparamos ChatGPT y Claude para ayudarte a descubrir sus diferencias, ventajas y para qué tipo de usuario puede ser mejor cada herramienta.",
};

const categories = [
  {
    name: "Facilidad de uso",
    chatgpt: "Excelente",
    claude: "Excelente",
  },
  {
    name: "Escritura y conversación",
    chatgpt: "Excelente",
    claude: "Excelente",
  },
  {
    name: "Programación",
    chatgpt: "Excelente",
    claude: "Excelente",
  },
  {
    name: "Análisis de información",
    chatgpt: "Excelente",
    claude: "Excelente",
  },
  {
    name: "Versión gratuita",
    chatgpt: "Disponible",
    claude: "Disponible",
  },
];

export default function ChatGPTVsClaudePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">

          <Link
            href="/comparativas"
            className="text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            ← Volver a comparativas
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              🤖
            </div>

            <span className="text-3xl">
              ⚔️
            </span>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl">
              🤖
            </div>

          </div>

          <p className="mt-8 font-bold text-blue-600">
            COMPARATIVA
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-6xl">
            ChatGPT vs Claude
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Dos asistentes de inteligencia artificial muy potentes.
            Descubre sus diferencias y cuál puede adaptarse mejor a ti.
          </p>

        </div>
      </section>

      {/* RESUMEN */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl border bg-white p-7 shadow-sm md:p-10">

          <p className="text-sm font-bold uppercase text-blue-600">
            Resumen rápido
          </p>

          <h2 className="mt-3 text-3xl font-black">
            ¿Cuál deberías elegir?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            ChatGPT y Claude son asistentes de IA capaces de ayudarte
            con escritura, análisis, programación, aprendizaje y muchas
            otras tareas. La mejor opción dependerá de tus necesidades.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 p-6">

              <h3 className="text-xl font-black">
                ChatGPT
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Una opción muy completa si buscas un asistente general
                con una gran variedad de funciones.
              </p>

              <Link
                href="/herramientas/chatgpt"
                className="mt-5 inline-block font-bold text-blue-600"
              >
                Ver ChatGPT →
              </Link>

            </div>

            <div className="rounded-2xl bg-purple-50 p-6">

              <h3 className="text-xl font-black">
                Claude
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Una alternativa especialmente interesante para
                escritura, análisis y programación.
              </p>

              <Link
                href="/herramientas/claude"
                className="mt-5 inline-block font-bold text-purple-600"
              >
                Ver Claude →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* TABLA */}
      <section className="mx-auto max-w-5xl px-6 pb-12">

        <h2 className="text-3xl font-black">
          Comparación rápida
        </h2>

        <div className="mt-6 overflow-hidden rounded-2xl border bg-white shadow-sm">

          <div className="grid grid-cols-3 border-b bg-slate-50 p-5 font-black">
            <span>Categoría</span>
            <span>ChatGPT</span>
            <span>Claude</span>
          </div>

          {categories.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-3 border-b p-5 last:border-0"
            >

              <span className="font-bold">
                {item.name}
              </span>

              <span className="text-slate-600">
                {item.chatgpt}
              </span>

              <span className="text-slate-600">
                {item.claude}
              </span>

            </div>
          ))}

        </div>

      </section>

      {/* CHATGPT */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl border bg-white p-7 md:p-10">

          <h2 className="text-3xl font-black">
            ¿Cuándo elegir ChatGPT?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            ChatGPT puede ser una buena opción si quieres una herramienta
            general para conversar, escribir, estudiar, programar,
            analizar información y realizar diferentes tareas.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>✓ Escritura y generación de contenido</li>
            <li>✓ Programación</li>
            <li>✓ Estudio</li>
            <li>✓ Análisis de información</li>
            <li>✓ Generación de ideas</li>
          </ul>

        </div>

      </section>

      {/* CLAUDE */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl border bg-white p-7 md:p-10">

          <h2 className="text-3xl font-black">
            ¿Cuándo elegir Claude?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Claude puede resultar especialmente interesante para
            usuarios que buscan ayuda con escritura, análisis,
            razonamiento y programación.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>✓ Escritura</li>
            <li>✓ Análisis de información</li>
            <li>✓ Programación</li>
            <li>✓ Resumen de contenido</li>
            <li>✓ Generación de ideas</li>
          </ul>

        </div>

      </section>

      {/* VEREDICTO */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">

          <p className="font-bold text-blue-400">
            VEREDICTO TOOLIA
          </p>

          <h2 className="mt-3 text-3xl font-black">
            ¿ChatGPT o Claude?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Ambas herramientas son opciones muy capaces. Si buscas
            una plataforma general con muchas funciones, ChatGPT puede
            ser una opción interesante. Si priorizas especialmente
            escritura, análisis o programación, Claude también merece
            estar entre tus opciones.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Las funciones, modelos y planes pueden cambiar con el tiempo.
            Comprueba siempre la información oficial antes de contratar
            un servicio.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-3xl border bg-white p-8 text-center">

          <h2 className="text-2xl font-black">
            ¿Quieres descubrir más herramientas?
          </h2>

          <p className="mt-3 text-slate-600">
            Explora el directorio completo de ToolIA.
          </p>

          <Link
            href="/herramientas"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Explorar herramientas →
          </Link>

        </div>

      </section>

    </main>
  );
}