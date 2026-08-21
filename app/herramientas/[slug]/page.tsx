import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const activeUrl =
    tool.useAffiliate && tool.affiliateUrl
      ? tool.affiliateUrl
      : tool.officialUrl;

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

          <Link
            href="/herramientas"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            Ver herramientas
          </Link>

        </div>
      </header>

      {/* BREADCRUMBS */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500">

          <Link href="/" className="hover:text-blue-600">
            Inicio
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/herramientas"
            className="hover:text-blue-600"
          >
            Herramientas
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-slate-900">
            {tool.name}
          </span>

        </div>
      </div>

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">

          <div className="flex flex-col gap-8 md:flex-row md:items-start">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-blue-50 text-5xl">
              🤖
            </div>

            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {tool.category}
                </span>

                {tool.subcategory && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {tool.subcategory}
                  </span>
                )}

                {tool.verified && (
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                    ✓ Verificada
                  </span>
                )}

              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                {tool.name}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">

                <span className="rounded-xl border bg-slate-50 px-4 py-3 text-sm font-bold">
                  💳 {tool.pricing}
                </span>

                {tool.freePlan !== undefined && (
                  <span className="rounded-xl border bg-slate-50 px-4 py-3 text-sm font-bold">
                    {tool.freePlan
                      ? "✓ Plan gratuito"
                      : "Plan gratuito no disponible"}
                  </span>
                )}

              </div>

              {activeUrl ? (
                <a
                  href={activeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-sm hover:bg-blue-700"
                >
                  Visitar {tool.name} →
                </a>
              ) : (
                <span className="mt-8 inline-flex rounded-xl bg-slate-200 px-7 py-4 font-bold text-slate-500">
                  Enlace pendiente de revisión
                </span>
              )}

              {tool.useAffiliate && tool.affiliateUrl && (
                <p className="mt-3 text-xs text-slate-500">
                  Algunos enlaces pueden ser enlaces de afiliación.
                </p>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* PRINCIPAL */}
          <div className="space-y-8 lg:col-span-2">

            {/* CARACTERÍSTICAS */}
            <section className="rounded-2xl border bg-white p-7">

              <h2 className="text-2xl font-black">
                Características
              </h2>

              {tool.features && tool.features.length > 0 ? (
                <ul className="mt-5 space-y-3">
                  {tool.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-slate-600"
                    >
                      <span className="font-bold text-blue-600">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-slate-500">
                  Información pendiente de revisión.
                </p>
              )}

            </section>

            {/* PROS Y CONTRAS */}
            <section className="grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border bg-white p-7">

                <h2 className="text-xl font-black">
                  Ventajas
                </h2>

                {tool.pros && tool.pros.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {tool.pros.map((pro) => (
                      <li
                        key={pro}
                        className="text-slate-600"
                      >
                        ✓ {pro}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-slate-500">
                    Pendiente de revisión.
                  </p>
                )}

              </div>

              <div className="rounded-2xl border bg-white p-7">

                <h2 className="text-xl font-black">
                  Desventajas
                </h2>

                {tool.cons && tool.cons.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {tool.cons.map((con) => (
                      <li
                        key={con}
                        className="text-slate-600"
                      >
                        • {con}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-slate-500">
                    Pendiente de revisión.
                  </p>
                )}

              </div>

            </section>

            {/* CASOS DE USO */}
            <section className="rounded-2xl border bg-white p-7">

              <h2 className="text-2xl font-black">
                Casos de uso
              </h2>

              {tool.useCases && tool.useCases.length > 0 ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {tool.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="rounded-xl bg-slate-50 p-4 text-slate-600"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-slate-500">
                  Información pendiente de revisión.
                </p>
              )}

            </section>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="rounded-2xl border bg-white p-7">

              <h2 className="text-lg font-black">
                Información
              </h2>

              <div className="mt-5 space-y-4 text-sm">

                <div>
                  <p className="text-slate-500">
                    Categoría
                  </p>

                  <p className="mt-1 font-bold">
                    {tool.category}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Precio
                  </p>

                  <p className="mt-1 font-bold">
                    {tool.pricing}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Última revisión
                  </p>

                  <p className="mt-1 font-bold">
                    {tool.lastReviewed ?? "Pendiente"}
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-2xl bg-slate-900 p-7 text-white">

              <p className="text-sm font-bold text-blue-400">
                TOOLIA
              </p>

              <h2 className="mt-3 text-xl font-black">
                ¿Buscas otra herramienta?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Explora nuestro directorio para encontrar más opciones.
              </p>

              <Link
                href="/herramientas"
                className="mt-5 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                Explorar directorio →
              </Link>

            </div>

          </aside>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">

          © 2026 ToolIA · Información pendiente de revisión cuando corresponda.

        </div>

      </footer>

    </main>
  );
}