import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Mejores IA para estudiar | ToolIA",
  description:
    "Descubre las mejores herramientas de inteligencia artificial para estudiar, hacer apuntes, investigar y aprender.",
};

export default function MejoresIAPParaEstudiar() {
  const studyTools = tools.filter((tool) =>
    tool.useCases?.some((useCase) =>
      ["Estudiar", "Investigar", "Organizar apuntes"].includes(useCase)
    )
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            Tool<span className="text-blue-600">IA</span>
          </Link>

          <Link
            href="/herramientas"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            Ver herramientas
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            🎓 Guía de estudio con IA
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Mejores IA para estudiar
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Descubre herramientas de inteligencia artificial que pueden
            ayudarte a estudiar, investigar, organizar tus apuntes,
            entender conceptos y aprender de forma más eficiente.
          </p>

        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10">
          <p className="font-bold text-blue-600">
            RECOMENDADAS
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Las mejores herramientas
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Hemos seleccionado algunas herramientas que pueden ser útiles
            para diferentes tareas relacionadas con el estudio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {studyTools.map((tool) => (

            <article
              key={tool.slug}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  🤖
                </div>

                {tool.verified && (
                  <span className="text-xs font-bold text-green-600">
                    ✓ Verificada
                  </span>
                )}

              </div>

              <p className="mt-5 text-xs font-bold uppercase text-blue-600">
                {tool.category}
              </p>

              <h3 className="mt-2 text-2xl font-black">
                {tool.name}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm font-bold text-slate-600">
                  {tool.pricing}
                </span>

                <Link
                  href={`/herramientas/${tool.slug}`}
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Ver herramienta
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CONSEJOS */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <p className="font-bold text-blue-600">
            CONSEJOS
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Cómo utilizar la IA para estudiar
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">📚</div>

              <h3 className="mt-4 text-xl font-black">
                Resumir apuntes
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Utiliza la IA para convertir textos largos en resúmenes
                más fáciles de repasar.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">🧠</div>

              <h3 className="mt-4 text-xl font-black">
                Entender conceptos
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Puedes pedir explicaciones adaptadas a tu nivel y preguntar
                todas las dudas que tengas.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">✏️</div>

              <h3 className="mt-4 text-xl font-black">
                Crear preguntas
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Genera preguntas tipo examen para practicar antes de una
                prueba.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">🎯</div>

              <h3 className="mt-4 text-xl font-black">
                Organizar el estudio
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Puedes utilizar herramientas de IA para organizar tareas,
                apuntes y sesiones de estudio.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-3xl bg-slate-900 p-10 text-center text-white">

          <h2 className="text-3xl font-black md:text-4xl">
            ¿Quieres descubrir más herramientas?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Explora todo nuestro directorio de herramientas de inteligencia
            artificial y productividad.
          </p>

          <Link
            href="/herramientas"
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Explorar herramientas →
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
          © 2026 ToolIA. Todos los derechos reservados.
        </div>
      </footer>

    </main>
  );
}