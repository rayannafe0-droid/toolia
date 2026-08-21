import Link from "next/link";

const comparisons = [
  {
    title: "ChatGPT vs Gemini",
    description:
      "Comparamos ChatGPT y Gemini para ayudarte a elegir el asistente de IA que mejor se adapta a tus necesidades.",
    href: "/comparativas/chatgpt-vs-gemini",
    icon: "🤖",
  },
  {
    title: "ChatGPT vs Claude",
    description:
      "Descubre las principales diferencias entre ChatGPT y Claude en escritura, programación, estudio y productividad.",
    href: "/comparativas/chatgpt-vs-claude",
    icon: "⚔️",
  },
  {
    title: "Mejores IA para estudiar",
    description:
      "Descubre qué herramientas de inteligencia artificial pueden ayudarte a estudiar, organizar apuntes y aprender.",
    href: "/mejores-ia-para-estudiar",
    icon: "📚",
  },
];

export const metadata = {
  title: "Comparativas de IA — ToolIA",
  description:
    "Comparamos las mejores herramientas de inteligencia artificial para ayudarte a elegir la más adecuada.",
};

export default function ComparativasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            Tool<span className="text-blue-600">IA</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">

            <Link
              href="/herramientas"
              className="hover:text-blue-600"
            >
              Herramientas
            </Link>

            <Link
              href="/comparativas"
              className="text-blue-600"
            >
              Comparativas
            </Link>

            <Link
              href="/guias"
              className="hover:text-blue-600"
            >
              Guías
            </Link>

            <Link
              href="/herramientas-gratuitas"
              className="hover:text-blue-600"
            >
              Herramientas gratis
            </Link>

          </nav>

          <Link
            href="/herramientas"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
          >
            Explorar
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              ⚔️ Comparativas de inteligencia artificial
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              ¿Qué herramienta de IA
              <span className="block text-blue-600">
                deberías elegir?
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Comparamos herramientas de inteligencia artificial para
              que puedas descubrir sus diferencias y elegir la opción
              que mejor se adapte a ti.
            </p>

          </div>

        </div>
      </section>

      {/* COMPARATIVAS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10">

          <p className="font-bold text-blue-600">
            COMPARATIVAS
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Nuestras comparativas
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Analizamos diferentes herramientas para que puedas tomar
            mejores decisiones.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {comparisons.map((comparison) => (

            <Link
              key={comparison.href}
              href={comparison.href}
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {comparison.icon}
              </div>

              <h3 className="mt-6 text-2xl font-black group-hover:text-blue-600">
                {comparison.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {comparison.description}
              </p>

              <p className="mt-6 font-bold text-blue-600">
                Leer comparativa →
              </p>

            </Link>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">

          <div className="max-w-2xl">

            <p className="font-bold text-blue-400">
              TOOLIA
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              ¿Todavía no sabes qué herramienta utilizar?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Explora nuestro directorio y descubre herramientas de
              inteligencia artificial para estudiar, trabajar,
              crear contenido y mucho más.
            </p>

            <Link
              href="/herramientas"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-900 hover:bg-slate-100"
            >
              Explorar herramientas →
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <Link
              href="/"
              className="text-2xl font-black"
            >
              Tool<span className="text-blue-600">IA</span>
            </Link>

            <div className="flex flex-wrap gap-5 text-sm text-slate-500">

              <Link
                href="/privacidad"
                className="hover:text-blue-600"
              >
                Privacidad
              </Link>

              <Link
                href="/cookies"
                className="hover:text-blue-600"
              >
                Cookies
              </Link>

              <Link
                href="/terminos"
                className="hover:text-blue-600"
              >
                Términos
              </Link>

            </div>

          </div>

          <div className="mt-8 border-t pt-6 text-sm text-slate-500">
            © 2026 ToolIA. Todos los derechos reservados.
          </div>

        </div>

      </footer>

    </main>
  );
}