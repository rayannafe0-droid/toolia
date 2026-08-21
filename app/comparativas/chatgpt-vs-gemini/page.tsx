import Link from "next/link";

export const metadata = {
  title: "ChatGPT vs Gemini: ¿Cuál es mejor? | ToolIA",
  description:
    "Comparativa de ChatGPT y Gemini. Descubre sus diferencias, ventajas, desventajas y para qué tipo de usuario puede ser mejor cada herramienta.",
};

const categories = [
  {
    name: "Facilidad de uso",
    chatgpt: "Excelente",
    gemini: "Excelente",
  },
  {
    name: "Escritura y conversación",
    chatgpt: "Excelente",
    gemini: "Muy buena",
  },
  {
    name: "Investigación",
    chatgpt: "Excelente",
    gemini: "Excelente",
  },
  {
    name: "Programación",
    chatgpt: "Excelente",
    gemini: "Muy buena",
  },
  {
    name: "Ecosistema",
    chatgpt: "Amplio",
    gemini: "Google",
  },
];

export default function ChatGPTVsGeminiPage() {
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
            ChatGPT vs Gemini
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Dos de los asistentes de inteligencia artificial más conocidos.
            Pero, ¿cuál es mejor para ti?
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
            No existe una herramienta que sea la mejor para absolutamente
            todo. La elección depende de lo que quieras hacer y del
            ecosistema que utilices.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-black">
                ChatGPT
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Una opción muy completa para conversación, escritura,
                programación, análisis y diferentes tareas con IA.
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
                Gemini
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Una opción especialmente interesante para usuarios que
                utilizan habitualmente servicios del ecosistema Google.
              </p>

              <Link
                href="/herramientas/gemini"
                className="mt-5 inline-block font-bold text-purple-600"
              >
                Ver Gemini →
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
            <span>Gemini</span>
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
                {item.gemini}
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
            ChatGPT puede ser una buena elección si buscas un asistente
            general para escribir, estudiar, programar, analizar información
            o generar ideas.
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

      {/* GEMINI */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl border bg-white p-7 md:p-10">

          <h2 className="text-3xl font-black">
            ¿Cuándo elegir Gemini?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Gemini puede resultar especialmente interesante si utilizas
            habitualmente productos y servicios del ecosistema de Google.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>✓ Integración con servicios de Google</li>
            <li>✓ Investigación</li>
            <li>✓ Escritura</li>
            <li>✓ Estudio</li>
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
            ¿Cuál es mejor?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Para la mayoría de usuarios que buscan un asistente de IA
            general, ambas son opciones muy completas. La mejor elección
            dependerá de las funciones que necesites y de los servicios que
            utilices habitualmente.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Los precios y características de estas herramientas pueden
            cambiar. Comprueba siempre la información oficial antes de
            contratar un plan.
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
            Explora nuestro directorio completo.
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