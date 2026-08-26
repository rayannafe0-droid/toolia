import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Mejores IA para estudiar | ToolIA",
  description:
    "Descubre las mejores herramientas de inteligencia artificial para estudiar, hacer apuntes, investigar y aprender.",
};

export default function MejoresIAParaEstudiar() {
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
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
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

        {studyTools.length > 0 ? (
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

                {tool.rating && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-yellow-500">
                      ★
                    </span>

                    <span className="text-sm font-bold">
                      {tool.rating}/5
                    </span>
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-slate-600">
                    {tool.pricing}
                  </span>

                  <Link
                    href={`/herramientas/${tool.slug}`}
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    Ver herramienta
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-white p-10 text-center">
            <div className="text-4xl">
              🔎
            </div>

            <h3 className="mt-4 text-xl font-black">
              Estamos preparando esta selección
            </h3>

            <p className="mt-2 text-slate-600">
              Pronto añadiremos más herramientas para estudiar con IA.
            </p>

            <Link
              href="/herramientas"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Ver todas las herramientas
            </Link>
          </div>
        )}
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

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            La inteligencia artificial puede ser una herramienta muy útil
            para aprender, siempre que la utilices como apoyo y compruebes
            la información importante.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">
                📚
              </div>

              <h3 className="mt-4 text-xl font-black">
                Resumir apuntes
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Utiliza la IA para convertir textos largos en resúmenes
                más fáciles de repasar y organizar.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">
                🧠
              </div>

              <h3 className="mt-4 text-xl font-black">
                Entender conceptos
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Puedes pedir explicaciones adaptadas a tu nivel y preguntar
                todas las dudas que tengas sobre un tema.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">
                ✏️
              </div>

              <h3 className="mt-4 text-xl font-black">
                Crear preguntas
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Genera preguntas tipo examen para practicar antes de una
                prueba y detectar qué partes necesitas repasar.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-7">
              <div className="text-3xl">
                🎯
              </div>

              <h3 className="mt-4 text-xl font-black">
                Organizar el estudio
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Puedes utilizar herramientas de IA para organizar tareas,
                apuntes, horarios y sesiones de estudio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSEJO EXTRA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">
          <div className="flex items-start gap-5">
            <div className="text-4xl">
              💡
            </div>

            <div>
              <h2 className="text-2xl font-black">
                No estudies únicamente copiando respuestas
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Una buena forma de utilizar la IA es pedirle que te
                explique un concepto, que te haga preguntas o que detecte
                tus errores. Así puedes utilizarla como un profesor o
                compañero de estudio en lugar de limitarte a copiar sus
                respuestas.
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
            artificial, productividad y tecnología.
          </p>

          <Link
            href="/herramientas"
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Explorar herramientas →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link
                href="/"
                className="text-2xl font-black tracking-tight"
              >
                Tool<span className="text-blue-600">IA</span>
              </Link>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Herramientas, comparativas y recursos para aprovechar
                mejor la inteligencia artificial.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Explorar
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/herramientas"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Herramientas
                </Link>

                <Link
                  href="/comparativas"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Comparativas
                </Link>

                <Link
                  href="/guias"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Guías
                </Link>

                <Link
                  href="/herramientas-gratuitas"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Herramientas gratis
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                ToolIA
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/sobre-nosotros"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Sobre nosotros
                </Link>

                <Link
                  href="/contacto"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Contacto
                </Link>

                <Link
                  href="/como-evaluamos"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Cómo evaluamos
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Legal
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/privacidad"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Privacidad
                </Link>

                <Link
                  href="/cookies"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Cookies
                </Link>

                <Link
                  href="/terminos"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Términos
                </Link>

                <Link
                  href="/politica-afiliacion"
                  className="block text-slate-500 transition hover:text-blue-600"
                >
                  Afiliación
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t pt-8 text-sm text-slate-500">
            © 2026 ToolIA. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}