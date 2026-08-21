export const metadata = {
  title: "Claude | ToolIA",
  description:
    "Descubre qué es Claude, para qué sirve, sus ventajas y cómo utilizarlo.",
};

export default function ClaudePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-black">
            Tool<span className="text-blue-600">IA</span>
          </a>

          <a
            href="/herramientas"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            ← Todas las herramientas
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">

          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-purple-50 text-5xl">
              🤖
            </div>

            <div>

              <div className="mb-3 flex flex-wrap gap-2">

                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                  Inteligencia Artificial
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                  Freemium
                </span>

              </div>

              <h1 className="text-4xl font-black md:text-5xl">
                Claude
              </h1>

              <p className="mt-3 text-lg text-slate-600">
                Asistente de inteligencia artificial para escribir,
                analizar información, aprender y programar.
              </p>

            </div>

          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-purple-600 px-7 py-4 text-center font-bold text-white hover:bg-purple-700"
            >
              Visitar Claude →
            </a>

            <a
              href="/herramientas"
              className="rounded-xl border border-slate-300 px-7 py-4 text-center font-bold hover:bg-slate-50"
            >
              Ver alternativas
            </a>

          </div>

          <div className="mt-12 grid gap-5 border-y py-8 sm:grid-cols-3">

            <div>
              <p className="text-sm text-slate-500">
                Categoría
              </p>

              <p className="mt-1 font-bold">
                Inteligencia Artificial
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Precio
              </p>

              <p className="mt-1 font-bold">
                Gratis / Premium
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Tipo
              </p>

              <p className="mt-1 font-bold">
                Asistente de IA
              </p>
            </div>

          </div>

          <section className="mt-12">

            <h2 className="text-2xl font-black">
              ¿Qué es Claude?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Claude es un asistente de inteligencia artificial creado
              por Anthropic. Puede utilizarse para conversar, escribir,
              analizar información, aprender y trabajar con código.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Está diseñado para ayudar a los usuarios con diferentes
              tareas mediante instrucciones escritas.
            </p>

          </section>

          <section className="mt-12">

            <h2 className="text-2xl font-black">
              ¿Para qué puedes utilizarlo?
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {[
                "Escribir y revisar textos",
                "Analizar documentos",
                "Generar ideas",
                "Aprender y estudiar",
                "Ayudar con programación",
                "Resumir información",
                "Resolver problemas",
                "Crear contenido",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl bg-slate-50 p-4 font-medium"
                >
                  ✓ {item}
                </div>

              ))}

            </div>

          </section>

          <section className="mt-12">

            <h2 className="text-2xl font-black">
              Ventajas y desventajas
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-green-50 p-6">

                <h3 className="font-bold text-green-800">
                  Ventajas
                </h3>

                <ul className="mt-4 space-y-3 text-green-900">
                  <li>✓ Interfaz sencilla</li>
                  <li>✓ Útil para escritura</li>
                  <li>✓ Puede ayudar con programación</li>
                  <li>✓ Útil para analizar información</li>
                </ul>

              </div>

              <div className="rounded-2xl bg-red-50 p-6">

                <h3 className="font-bold text-red-800">
                  Desventajas
                </h3>

                <ul className="mt-4 space-y-3 text-red-900">
                  <li>• Algunas funciones pueden requerir pago</li>
                  <li>• Las respuestas deben revisarse</li>
                  <li>• Puede cometer errores</li>
                </ul>

              </div>

            </div>

          </section>

          <section className="mt-12">

            <h2 className="text-2xl font-black">
              Alternativas a Claude
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <a
                href="/herramientas/chatgpt"
                className="rounded-2xl border p-5 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
              >
                <p className="text-lg font-black">
                  ChatGPT
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Asistente de inteligencia artificial de OpenAI.
                </p>
              </a>

              <a
                href="/herramientas/gemini"
                className="rounded-2xl border p-5 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
              >
                <p className="text-lg font-black">
                  Gemini
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Asistente de inteligencia artificial de Google.
                </p>
              </a>

            </div>

          </section>

          <section className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">

            <p className="font-bold text-purple-400">
              ANÁLISIS TOOLIA
            </p>

            <h2 className="mt-2 text-2xl font-black">
              ¿Merece la pena?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Claude es una alternativa interesante para quienes buscan
              un asistente de inteligencia artificial para escritura,
              análisis, aprendizaje y programación.
            </p>

            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-slate-900 hover:bg-slate-100"
            >
              Probar Claude →
            </a>

          </section>

          <div className="mt-10 rounded-2xl border bg-slate-50 p-6 text-sm leading-7 text-slate-500">

            <strong className="text-slate-700">
              Nota de ToolIA:
            </strong>{" "}
            La información mostrada tiene finalidad informativa.
            Las características, precios y disponibilidad pueden cambiar.
            Consulta siempre la información oficial antes de contratar
            cualquier servicio.

          </div>

        </div>

      </section>

      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
          © 2026 ToolIA
        </div>

      </footer>

    </main>
  );
}