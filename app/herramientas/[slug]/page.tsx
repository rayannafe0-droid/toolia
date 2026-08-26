import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const alternatives = (tool.alternatives ?? [])
    .map((alternativeSlug) =>
      tools.find((item) => item.slug === alternativeSlug)
    )
    .filter((item) => item !== undefined);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            Tool<span className="text-blue-600">IA</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <Link
              href="/herramientas"
              className="transition hover:text-blue-600"
            >
              Herramientas
            </Link>

            <Link
              href="/comparativas"
              className="transition hover:text-blue-600"
            >
              Comparativas
            </Link>

            <Link
              href="/guias"
              className="transition hover:text-blue-600"
            >
              Guías
            </Link>

            <Link
              href="/recomendadas"
              className="transition hover:text-blue-600"
            >
              Recomendadas
            </Link>

            <Link
              href="/herramientas-gratuitas"
              className="transition hover:text-blue-600"
            >
              Gratis
            </Link>
          </nav>

          <Link
            href="/herramientas"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Explorar
          </Link>
        </div>
      </header>

      {/* BREADCRUMBS */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Inicio
            </Link>

            <span>›</span>

            <Link
              href="/herramientas"
              className="transition hover:text-blue-600"
            >
              Herramientas
            </Link>

            <span>›</span>

            <span className="font-semibold text-slate-900">
              {tool.name}
            </span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                  {tool.category}
                </span>

                {tool.subcategory && (
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                    {tool.subcategory}
                  </span>
                )}

                {tool.verified && (
                  <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                    ✓ Verificada
                  </span>
                )}
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                {tool.name}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={tool.affiliateUrl || tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
                >
                  Visitar {tool.name} →
                </a>

                <span className="rounded-xl border bg-slate-50 px-5 py-4 font-bold text-slate-700">
                  💰 {tool.pricing}
                </span>
              </div>

              {tool.useAffiliate && tool.affiliateUrl && (
                <p className="mt-4 text-xs text-slate-400">
                  Este enlace puede ser de afiliación. ToolIA podría recibir
                  una comisión si realizas una compra a través de él.
                </p>
              )}
            </div>

            {/* INFO CARD */}
            <aside className="rounded-3xl border bg-slate-50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-4xl">
                🤖
              </div>

              <h2 className="mt-6 text-2xl font-black">
                {tool.name}
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-sm text-slate-500">
                    Precio
                  </span>

                  <span className="text-sm font-bold">
                    {tool.pricing}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-sm text-slate-500">
                    Plan gratuito
                  </span>

                  <span
                    className={`text-sm font-bold ${
                      tool.freePlan
                        ? "text-emerald-600"
                        : "text-red-500"
                    }`}
                  >
                    {tool.freePlan ? "Sí" : "No"}
                  </span>
                </div>

                {tool.rating !== undefined && (
                  <div className="flex items-center justify-between border-b pb-4">
                    <span className="text-sm text-slate-500">
                      Valoración ToolIA
                    </span>

                    <span className="font-black">
                      ⭐ {tool.rating.toFixed(1)}/5
                    </span>
                  </div>
                )}

                {tool.lastReviewed && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Revisada
                    </span>

                    <span className="text-sm font-bold">
                      {tool.lastReviewed}
                    </span>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-14">
            {/* CARACTERÍSTICAS */}
            {tool.features && tool.features.length > 0 && (
              <section>
                <p className="font-bold text-blue-600">
                  CARACTERÍSTICAS
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  ¿Qué puedes hacer con {tool.name}?
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {tool.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border bg-white p-5 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                          ✓
                        </span>

                        <span className="font-semibold">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PROS Y CONTRAS */}
            <section>
              <p className="font-bold text-blue-600">
                ANÁLISIS
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Ventajas y desventajas
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* PROS */}
                <div className="rounded-3xl border bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-black text-emerald-600">
                    ✓ Ventajas
                  </h3>

                  {tool.pros && tool.pros.length > 0 ? (
                    <ul className="mt-6 space-y-4">
                      {tool.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex gap-3 leading-6 text-slate-600"
                        >
                          <span className="font-bold text-emerald-600">
                            ✓
                          </span>

                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 text-slate-500">
                      Todavía no hemos añadido ventajas.
                    </p>
                  )}
                </div>

                {/* CONTRAS */}
                <div className="rounded-3xl border bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-black text-red-500">
                    ✕ Desventajas
                  </h3>

                  {tool.cons && tool.cons.length > 0 ? (
                    <ul className="mt-6 space-y-4">
                      {tool.cons.map((con) => (
                        <li
                          key={con}
                          className="flex gap-3 leading-6 text-slate-600"
                        >
                          <span className="font-bold text-red-500">
                            ✕
                          </span>

                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 text-slate-500">
                      Todavía no hemos añadido desventajas.
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* CASOS DE USO */}
            {tool.useCases && tool.useCases.length > 0 && (
              <section>
                <p className="font-bold text-blue-600">
                  CASOS DE USO
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  ¿Para qué sirve {tool.name}?
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tool.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="rounded-2xl border bg-white p-5 shadow-sm"
                    >
                      <span className="text-xl">🎯</span>

                      <p className="mt-3 font-bold">
                        {useCase}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PRECIO */}
            <section className="rounded-3xl border bg-white p-8 shadow-sm">
              <p className="font-bold text-blue-600">
                PRECIO
              </p>

              <h2 className="mt-2 text-3xl font-black">
                ¿Cuánto cuesta {tool.name}?
              </h2>

              <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                <p className="text-2xl font-black">
                  {tool.pricing}
                </p>

                <p className="mt-3 text-slate-600">
                  {tool.freePlan
                    ? `${tool.name} dispone de una opción gratuita, aunque algunas funciones pueden estar limitadas según el plan.`
                    : `${tool.name} requiere actualmente un plan de pago para utilizar el servicio.`}
                </p>
              </div>

              <a
                href={tool.affiliateUrl || tool.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Consultar la web oficial →
              </a>
            </section>

            {/* ALTERNATIVAS */}
            {alternatives.length > 0 && (
              <section>
                <p className="font-bold text-blue-600">
                  ALTERNATIVAS
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Herramientas similares a {tool.name}
                </h2>

                <p className="mt-3 text-slate-600">
                  Si esta herramienta no encaja contigo, puedes probar
                  estas alternativas.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {alternatives.map((alternative) => (
                    <Link
                      key={alternative.slug}
                      href={`/herramientas/${alternative.slug}`}
                      className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                          🤖
                        </div>

                        {alternative.rating !== undefined && (
                          <span className="text-sm font-bold">
                            ⭐ {alternative.rating.toFixed(1)}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-5 text-xl font-black">
                        {alternative.name}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                        {alternative.description}
                      </p>

                      <span className="mt-5 block font-bold text-blue-600 transition group-hover:text-blue-700">
                        Ver herramienta →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="sticky top-24 rounded-3xl border bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black">
                ¿Te interesa {tool.name}?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Visita la web oficial para conocer sus funciones,
                planes y condiciones actuales.
              </p>

              <a
                href={tool.affiliateUrl || tool.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl bg-blue-600 px-5 py-4 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Visitar {tool.name} →
              </a>

              <Link
                href="/herramientas"
                className="mt-3 block rounded-xl border px-5 py-4 text-center font-bold transition hover:bg-slate-50"
              >
                ← Volver a herramientas
              </Link>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <h2 className="font-black">
                Información
              </h2>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-slate-400">
                    Categoría
                  </p>

                  <p className="mt-1 font-bold">
                    {tool.category}
                  </p>
                </div>

                {tool.subcategory && (
                  <div>
                    <p className="text-slate-400">
                      Subcategoría
                    </p>

                    <p className="mt-1 font-bold">
                      {tool.subcategory}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-slate-400">
                    Precio
                  </p>

                  <p className="mt-1 font-bold">
                    {tool.pricing}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">
                    Plan gratuito
                  </p>

                  <p className="mt-1 font-bold">
                    {tool.freePlan ? "Disponible" : "No disponible"}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center text-white md:px-12">
            <h2 className="text-3xl font-black md:text-4xl">
              ¿Quieres descubrir más herramientas?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Explora nuestro directorio y encuentra herramientas de
              inteligencia artificial, productividad, diseño,
              programación y mucho más.
            </p>

            <Link
              href="/herramientas"
              className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Explorar todas las herramientas →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>
              © 2026 Tool<span className="font-bold text-blue-600">IA</span>.
              Todos los derechos reservados.
            </div>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/privacidad"
                className="transition hover:text-blue-600"
              >
                Privacidad
              </Link>

              <Link
                href="/cookies"
                className="transition hover:text-blue-600"
              >
                Cookies
              </Link>

              <Link
                href="/terminos"
                className="transition hover:text-blue-600"
              >
                Términos
              </Link>

              <Link
                href="/contacto"
                className="transition hover:text-blue-600"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}