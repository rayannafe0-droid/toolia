import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce ToolIA, un proyecto dedicado a descubrir y explicar herramientas de inteligencia artificial, productividad y tecnología.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="font-bold text-blue-600">
            TOOLIA
          </span>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Sobre nosotros
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            ToolIA es un proyecto creado para ayudarte a descubrir,
            comparar y aprovechar mejor las herramientas de inteligencia
            artificial y tecnología disponibles actualmente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-black">
              ¿Qué es ToolIA?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              En internet existen miles de herramientas de inteligencia
              artificial, productividad, diseño y tecnología. Encontrar
              la herramienta adecuada puede resultar complicado.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              ToolIA nace con el objetivo de organizar esta información
              y ofrecer recursos sencillos que permitan descubrir qué
              herramienta puede ser más útil para cada necesidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">
              ¿Qué encontrarás en ToolIA?
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6">
                <div className="text-2xl">🤖</div>

                <h3 className="mt-3 font-black">
                  Herramientas de IA
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Directorios y explicaciones de herramientas de
                  inteligencia artificial.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <div className="text-2xl">⚔️</div>

                <h3 className="mt-3 font-black">
                  Comparativas
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Comparaciones para ayudarte a elegir entre diferentes
                  herramientas.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <div className="text-2xl">📚</div>

                <h3 className="mt-3 font-black">
                  Guías
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Guías prácticas para aprender a utilizar mejor la
                  tecnología y la inteligencia artificial.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <div className="text-2xl">🧰</div>

                <h3 className="mt-3 font-black">
                  Herramientas gratuitas
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Recursos gratuitos y sencillos para diferentes tareas.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black">
              Nuestro objetivo
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Queremos que ToolIA sea un lugar práctico donde cualquier
              persona pueda descubrir nuevas herramientas digitales sin
              tener que perder horas buscando información por diferentes
              páginas.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-8">
            <h2 className="text-2xl font-black">
              Transparencia
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Intentamos presentar la información de forma clara y
              transparente. Cuando recomendamos una herramienta,
              procuramos tener en cuenta factores como sus características,
              facilidad de uso, precio y utilidad.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Algunos enlaces de ToolIA podrían ser enlaces de afiliación.
              Cuando corresponda, lo indicaremos claramente.
            </p>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-2xl font-black">
            ¿Quieres descubrir herramientas?
          </h2>

          <p className="mt-3 text-slate-300">
            Explora nuestro directorio de herramientas.
          </p>

          <a
            href="/herramientas"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Explorar herramientas →
          </a>
        </div>
      </section>
    </main>
  );
}