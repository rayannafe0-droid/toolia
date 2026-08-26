import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo evaluamos las herramientas",
  description:
    "Descubre los criterios que utilizamos en ToolIA para analizar, comparar y recomendar herramientas de inteligencia artificial y tecnología.",
};

const criteria = [
  {
    icon: "⚙️",
    title: "Características",
    description:
      "Analizamos las funciones disponibles y qué problemas puede resolver realmente cada herramienta.",
  },
  {
    icon: "🎯",
    title: "Utilidad",
    description:
      "Valoramos para qué tipo de usuario puede resultar útil y en qué situaciones destaca.",
  },
  {
    icon: "🧠",
    title: "Facilidad de uso",
    description:
      "Tenemos en cuenta lo sencillo que resulta empezar a utilizar la herramienta y aprender sus funciones principales.",
  },
  {
    icon: "💰",
    title: "Precio",
    description:
      "Comparamos los planes gratuitos y de pago cuando existe información pública y verificable.",
  },
  {
    icon: "📈",
    title: "Rendimiento",
    description:
      "Cuando es posible, tenemos en cuenta la experiencia de uso, rapidez, resultados y calidad general.",
  },
  {
    icon: "⚖️",
    title: "Relación calidad/precio",
    description:
      "Valoramos si las funciones y resultados ofrecidos justifican el coste de los planes disponibles.",
  },
];

export default function ComoEvaluamosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="font-bold text-blue-600">
            TRANSPARENCIA
          </span>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Cómo evaluamos las herramientas
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            En ToolIA queremos que nuestras recomendaciones sean útiles,
            comprensibles y transparentes. Por eso utilizamos diferentes
            criterios para analizar las herramientas que aparecen en
            nuestro sitio.
          </p>
        </div>
      </section>

      {/* CRITERIOS */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-black">
            Nuestros principales criterios
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            No todas las herramientas son iguales ni están pensadas para
            el mismo objetivo. Por eso intentamos analizarlas teniendo en
            cuenta diferentes aspectos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((criterion) => (
            <article
              key={criterion.title}
              className="rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                {criterion.icon}
              </div>

              <h3 className="mt-6 text-xl font-black">
                {criterion.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {criterion.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESO */}

      <section className="border-y bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-black">
            Nuestro proceso
          </h2>

          <div className="mt-10 space-y-6">
            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                1
              </div>

              <div>
                <h3 className="font-black">
                  Investigamos la herramienta
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Revisamos sus características, funcionalidades,
                  disponibilidad y modelos de precios utilizando
                  información pública cuando está disponible.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                2
              </div>

              <div>
                <h3 className="font-black">
                  Identificamos sus puntos fuertes
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Analizamos en qué situaciones puede ser especialmente
                  útil y para qué tipo de usuario puede resultar más
                  interesante.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                3
              </div>

              <div>
                <h3 className="font-black">
                  Comparamos alternativas
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Cuando hacemos una comparativa, intentamos utilizar
                  criterios similares para que las diferencias sean
                  fáciles de entender.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                4
              </div>

              <div>
                <h3 className="font-black">
                  Actualizamos la información
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Las herramientas digitales cambian constantemente.
                  Cuando detectamos cambios importantes, intentamos
                  actualizar la información correspondiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFILIACIÓN */}

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border bg-slate-100 p-8">
          <div className="text-3xl">
            🤝
          </div>

          <h2 className="mt-4 text-2xl font-black">
            ¿Las recomendaciones están influenciadas por afiliaciones?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Algunas páginas de ToolIA pueden contener enlaces de
            afiliación. Si un usuario realiza una compra o contratación
            a través de uno de estos enlaces, ToolIA podría recibir una
            comisión sin que esto suponga un coste adicional para el
            usuario.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            La existencia de una posible comisión no significa que una
            herramienta sea automáticamente considerada mejor. Nuestro
            objetivo es que las recomendaciones se basen en su utilidad,
            características y adecuación para cada caso de uso.
          </p>

          <a
            href="/politica-afiliacion"
            className="mt-6 inline-block font-bold text-blue-600 hover:text-blue-700"
          >
            Consulta nuestra política de afiliación →
          </a>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-900 p-10 text-center text-white">
          <h2 className="text-3xl font-black">
            Descubre nuestras herramientas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Explora el directorio de ToolIA y encuentra herramientas de
            inteligencia artificial, productividad, diseño y tecnología.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/herramientas"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Ver herramientas
            </a>

            <a
              href="/comparativas"
              className="rounded-xl border border-slate-600 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Ver comparativas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}