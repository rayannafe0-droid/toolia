import { guides } from "@/data/guides";

export const metadata = {
  title: "Guías de IA y productividad",
  description:
    "Aprende a utilizar herramientas de inteligencia artificial, productividad y tecnología con las guías de ToolIA.",
};

export default function GuiasPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}

      <section className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <p className="font-bold text-blue-600">
            GUÍAS TOOLIA
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Aprende a utilizar la inteligencia artificial
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Guías sencillas y prácticas para aprender a utilizar
            herramientas de inteligencia artificial, mejorar tu
            productividad y aprovechar mejor la tecnología.
          </p>

        </div>

      </section>

      {/* GUÍAS */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {guides.map((guide) => (

            <article
              key={guide.slug}
              className="group rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {guide.category}
              </span>

              <h2 className="mt-5 text-2xl font-black">
                {guide.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {guide.description}
              </p>

              <a
                href={`/guias/${guide.slug}`}
                className="mt-6 inline-block font-bold text-blue-600 transition group-hover:text-blue-700"
              >
                Leer guía →
              </a>

            </article>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">

          <p className="font-bold text-blue-400">
            TOOLIA
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Descubre herramientas de IA
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Explora nuestro directorio y encuentra herramientas de
            inteligencia artificial para estudiar, trabajar, crear y
            mejorar tu productividad.
          </p>

          <a
            href="/herramientas"
            className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-slate-900 hover:bg-slate-100"
          >
            Explorar herramientas →
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
          © 2026 ToolIA
        </div>

      </footer>

    </main>
  );
}