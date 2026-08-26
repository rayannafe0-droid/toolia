"use client";

import { useState } from "react";
import { tools } from "@/data/tools";

const featuredSlugs = [
  "chatgpt",
  "gemini",
  "claude",
  "perplexity",
  "canva",
  "deepseek",
];

const comparisons = [
  {
    title: "ChatGPT vs Gemini",
    slug: "chatgpt-vs-gemini",
  },
  {
    title: "ChatGPT vs Claude",
    slug: "chatgpt-vs-claude",
  },
  {
    title: "Gemini vs Claude",
    slug: "gemini-vs-claude",
  },
];

const freeTools = [
  {
    name: "Generador de prompts",
    slug: "generador-prompts",
  },
  {
    name: "Generador de nombres",
    slug: "generador-nombres",
  },
  {
    name: "Contador de palabras",
    slug: "contador-palabras",
  },
  {
    name: "Generador de ideas",
    slug: "generador-ideas",
  },
];

const guides = [
  {
    title: "Cómo utilizar ChatGPT",
    slug: "como-utilizar-chatgpt",
  },
  {
    title: "Cómo crear mejores prompts",
    slug: "como-crear-mejores-prompts",
  },
  {
    title: "Cómo estudiar con inteligencia artificial",
    slug: "ia-para-estudiar",
  },
];

const categoryIcons: Record<string, string> = {
  "Inteligencia Artificial": "🤖",
  Estudio: "📚",
  Productividad: "⚡",
  Diseño: "🎨",
  SEO: "🔎",
  Marketing: "📈",
  Escritura: "✍️",
  Video: "🎬",
  Audio: "🎧",
  Fotografía: "📷",
  Programación: "💻",
  Negocios: "💼",
  Educación: "🎓",
  Automatización: "⚙️",
  "Redes Sociales": "📱",
  Presentaciones: "📊",
  "Creación de contenido": "📝",
};

export default function Home() {
  const [search, setSearch] = useState("");

  const query = search.toLowerCase().trim();

  const filteredTools =
    query.length > 0
      ? tools.filter((tool) => {
          return (
            tool.name.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.slug.toLowerCase().includes(query) ||
            tool.subcategory?.toLowerCase().includes(query)
          );
        })
      : [];

  /*
   * ==========================================================
   * HERRAMIENTAS DESTACADAS
   * ==========================================================
   */

  const featuredTools = featuredSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool) => tool !== undefined);

  /*
   * ==========================================================
   * CATEGORÍAS DINÁMICAS
   *
   * Las categorías ahora se obtienen directamente de tools.ts.
   * Si añadimos una nueva categoría allí, aparecerá aquí.
   * ==========================================================
   */

  const categories = Array.from(
    new Set(tools.map((tool) => tool.category))
  ).map((name) => ({
    name,
    count: tools.filter((tool) => tool.category === name).length,
    icon: categoryIcons[name] ?? "🧰",
  }));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            Tool<span className="text-blue-600">IA</span>
          </a>

          <nav className="hidden gap-7 text-sm font-semibold md:flex">

            <a
              href="/herramientas"
              className="transition hover:text-blue-600"
            >
              Herramientas
            </a>

            <a
              href="/comparativas"
              className="transition hover:text-blue-600"
            >
              Comparativas
            </a>

            <a
              href="/guias"
              className="transition hover:text-blue-600"
            >
              Guías
            </a>

            <a
              href="/recomendadas"
              className="transition hover:text-blue-600"
            >
              Recomendadas
            </a>

            <a
              href="/herramientas-gratuitas"
              className="transition hover:text-blue-600"
            >
              Herramientas gratis
            </a>

          </nav>

          <a
            href="/herramientas"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Explorar
          </a>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <div className="mx-auto max-w-4xl">

            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              IA · PRODUCTIVIDAD · HERRAMIENTAS DIGITALES
            </span>

            <h1 className="mt-7 text-5xl font-black tracking-tight md:text-7xl">
              Descubre las mejores
              <span className="text-blue-600">
                {" "}
                herramientas de IA
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Comparamos herramientas, descubrimos recursos gratuitos
              y creamos guías prácticas para que encuentres la
              tecnología adecuada para cada tarea.
            </p>

            <div className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row">

              <a
                href="/herramientas"
                className="flex-1 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Explorar herramientas →
              </a>

              <a
                href="/comparativas"
                className="flex-1 rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold transition hover:bg-slate-50"
              >
                Ver comparativas
              </a>

            </div>

          </div>


          {/* =================================================
              BUSCADOR
          ================================================= */}

          <div className="relative mx-auto mt-14 max-w-3xl">

            <div className="rounded-2xl border bg-slate-50 p-3">

              <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">

                <span className="text-xl">
                  🔎
                </span>

                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="¿Qué herramienta estás buscando?"
                  className="w-full bg-transparent outline-none"
                  aria-label="Buscar herramientas"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="rounded-lg px-2 py-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Borrar búsqueda"
                  >
                    ✕
                  </button>
                )}

              </div>

            </div>


            {/* RESULTADOS DEL BUSCADOR */}

            {query && (

              <div className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border bg-white text-left shadow-xl">

                {filteredTools.length > 0 ? (

                  <div className="max-h-96 overflow-y-auto p-2">

                    <div className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                      {filteredTools.length}{" "}
                      {filteredTools.length === 1
                        ? "resultado"
                        : "resultados"}
                    </div>

                    {filteredTools.map((tool) => (

                      <a
                        key={tool.slug}
                        href={`/herramientas/${tool.slug}`}
                        className="flex items-center gap-4 rounded-xl p-4 transition hover:bg-blue-50"
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                          🤖
                        </div>

                        <div className="min-w-0">

                          <p className="font-bold text-slate-900">
                            {tool.name}
                          </p>

                          <p className="text-sm text-slate-500">
                            {tool.category}
                            {tool.subcategory
                              ? ` · ${tool.subcategory}`
                              : ""}
                          </p>

                        </div>

                        <span className="ml-auto text-blue-600">
                          →
                        </span>

                      </a>

                    ))}

                  </div>

                ) : (

                  <div className="p-7 text-center">

                    <div className="text-3xl">
                      🔎
                    </div>

                    <p className="mt-3 font-bold">
                      No encontramos esa herramienta
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Prueba con otro nombre, categoría o término.
                    </p>

                    <a
                      href="/herramientas"
                      className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                    >
                      Ver todas las herramientas
                    </a>

                  </div>

                )}

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          HERRAMIENTAS DESTACADAS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="flex items-end justify-between">

          <div>

            <p className="font-bold text-blue-600">
              DESCUBRE
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Herramientas destacadas
            </h2>

            <p className="mt-3 text-slate-600">
              Algunas de las herramientas más importantes de nuestro
              directorio.
            </p>

          </div>

          <a
            href="/herramientas"
            className="hidden font-bold text-blue-600 sm:block"
          >
            Ver todas →
          </a>

        </div>


        {featuredTools.length > 0 ? (

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {featuredTools.map((tool) => (

              <article
                key={tool.slug}
                className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-center justify-between gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    🤖
                  </div>

                  {tool.verified && (
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                      ✓ Verificada
                    </span>
                  )}

                </div>


                <div className="mt-5 flex flex-wrap gap-2">

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {tool.category}
                  </span>

                  {tool.subcategory && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {tool.subcategory}
                    </span>
                  )}

                </div>


                <h3 className="mt-5 text-2xl font-black">
                  {tool.name}
                </h3>


                <p className="mt-3 min-h-20 leading-7 text-slate-600">
                  {tool.description}
                </p>


                <div className="mt-5 flex flex-wrap gap-2">

                  <span className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600">
                    💳 {tool.pricing}
                  </span>

                  {tool.freePlan && (
                    <span className="rounded-lg bg-green-50 px-3 py-2 text-sm font-bold text-green-700">
                      ✓ Gratis
                    </span>
                  )}

                  {tool.rating && (
                    <span className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600">
                      ⭐ {tool.rating}
                    </span>
                  )}

                </div>


                <a
                  href={`/herramientas/${tool.slug}`}
                  className="mt-6 inline-block font-bold text-blue-600 transition group-hover:text-blue-700"
                >
                  Ver herramienta →
                </a>

              </article>

            ))}

          </div>

        ) : (

          <div className="mt-10 rounded-2xl border bg-white p-10 text-center">

            <p className="font-bold text-slate-600">
              Añade herramientas a tools.ts para mostrarlas aquí.
            </p>

          </div>

        )}

      </section>


      {/* =====================================================
          CATEGORÍAS DINÁMICAS
      ===================================================== */}

      <section className="border-y bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-blue-600">
            EXPLORA
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Encuentra herramientas según lo que necesitas
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Explora nuestras categorías y encuentra herramientas
            para estudiar, trabajar, crear contenido y mejorar tu
            productividad.
          </p>


          {categories.length > 0 ? (

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {categories.map((category) => (

                <a
                  key={category.name}
                  href={`/herramientas?categoria=${encodeURIComponent(
                    category.name
                  )}`}
                  className="rounded-2xl border bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50"
                >

                  <div className="text-3xl">
                    {category.icon}
                  </div>

                  <h3 className="mt-4 font-black">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {category.count}{" "}
                    {category.count === 1
                      ? "herramienta disponible"
                      : "herramientas disponibles"}
                  </p>

                  <span className="mt-4 block text-sm font-bold text-blue-600">
                    Explorar →
                  </span>

                </a>

              ))}

            </div>

          ) : (

            <div className="mt-10 rounded-2xl border bg-slate-50 p-10 text-center">

              <p className="font-bold text-slate-600">
                Todavía no hay categorías disponibles.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          COMPARATIVAS
      ===================================================== */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-blue-600">
            COMPARATIVAS
          </p>

          <h2 className="mt-2 text-3xl font-black">
            ¿Qué herramienta es mejor?
          </h2>

          <p className="mt-3 text-slate-600">
            Comparamos funciones, precios, facilidad de uso y casos
            de uso.
          </p>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {comparisons.map((comparison) => (

              <a
                key={comparison.slug}
                href={`/comparativas/${comparison.slug}`}
                className="rounded-2xl border bg-white p-6 font-bold transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50"
              >

                ⚔️ {comparison.title}

                <span className="mt-4 block text-sm text-blue-600">
                  Ver comparación →
                </span>

              </a>

            ))}

          </div>


          <div className="mt-8 text-center">

            <a
              href="/comparativas"
              className="font-bold text-blue-600"
            >
              Ver todas las comparativas →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          HERRAMIENTAS GRATIS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">

          <div className="max-w-2xl">

            <p className="font-bold text-blue-400">
              100% GRATIS
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Herramientas gratuitas de ToolIA
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Recursos sencillos para estudiar, trabajar, escribir
              y generar ideas sin complicaciones.
            </p>

          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {freeTools.map((tool) => (

              <a
                key={tool.slug}
                href={`/herramientas-gratuitas/${tool.slug}`}
                className="rounded-xl bg-white/10 p-5 font-bold transition hover:bg-white/20"
              >
                🧰 {tool.name}
              </a>

            ))}

          </div>


          <a
            href="/herramientas-gratuitas"
            className="mt-8 inline-block font-bold text-blue-400"
          >
            Ver todas las herramientas gratuitas →
          </a>

        </div>

      </section>


      {/* =====================================================
          GUÍAS
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex items-end justify-between">

            <div>

              <p className="font-bold text-blue-600">
                APRENDE
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Guías prácticas
              </h2>

              <p className="mt-3 text-slate-600">
                Aprende a utilizar mejor la inteligencia artificial.
              </p>

            </div>

            <a
              href="/guias"
              className="hidden font-bold text-blue-600 sm:block"
            >
              Ver todas →
            </a>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {guides.map((guide) => (

              <a
                key={guide.slug}
                href={`/guias/${guide.slug}`}
                className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <span className="text-2xl">
                  📚
                </span>

                <h3 className="mt-5 text-xl font-black">
                  {guide.title}
                </h3>

                <span className="mt-4 block font-bold text-blue-600">
                  Leer guía →
                </span>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RECOMENDADAS
      ===================================================== */}

      <section className="border-y bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">

            <div className="max-w-3xl">

              <p className="font-bold text-blue-600">
                NUEVO EN TOOLIA
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Herramientas que recomendamos
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Hemos seleccionado algunas herramientas de IA, SEO,
                productividad y tecnología que pueden ayudarte a mejorar
                tus proyectos y tu trabajo.
              </p>

              <a
                href="/recomendadas"
                className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Ver nuestras recomendaciones →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CÓMO EVALUAMOS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-3xl border bg-white p-8 md:p-12">

          <div className="max-w-3xl">

            <p className="font-bold text-blue-600">
              TRANSPARENCIA
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Cómo evaluamos las herramientas
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              En ToolIA queremos que nuestras recomendaciones sean
              útiles y transparentes. Utilizamos criterios como
              características, facilidad de uso, precio, rendimiento
              y relación calidad/precio cuando disponemos de
              información verificable.
            </p>

            <a
              href="/como-evaluamos"
              className="mt-6 inline-block font-bold text-blue-600"
            >
              Conoce nuestro sistema de evaluación →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-3xl bg-blue-600 px-8 py-14 text-center text-white">

          <h2 className="text-3xl font-black md:text-4xl">
            Descubre nuevas herramientas de IA
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Recibe novedades, herramientas y recursos útiles.
          </p>


          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >

            <input
              type="email"
              placeholder="Tu email"
              required
              className="flex-1 rounded-xl px-5 py-4 text-slate-900 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Suscribirme
            </button>

          </form>

          <p className="mt-4 text-xs text-blue-100">
            El formulario está preparado para conectar un proveedor
            de email más adelante.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="grid gap-10 md:grid-cols-4">

            <div>

              <div className="text-2xl font-black">
                Tool<span className="text-blue-600">IA</span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Herramientas, comparativas y recursos para aprovechar
                mejor la inteligencia artificial.
              </p>

            </div>


            <div>

              <h3 className="font-bold">
                Explorar
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">

                <a
                  href="/herramientas"
                  className="block hover:text-blue-600"
                >
                  Herramientas
                </a>

                <a
                  href="/comparativas"
                  className="block hover:text-blue-600"
                >
                  Comparativas
                </a>

                <a
                  href="/guias"
                  className="block hover:text-blue-600"
                >
                  Guías
                </a>

                <a
                  href="/herramientas-gratuitas"
                  className="block hover:text-blue-600"
                >
                  Herramientas gratis
                </a>

                <a
                  href="/recomendadas"
                  className="block hover:text-blue-600"
                >
                  Recomendadas
                </a>

              </div>

            </div>


            <div>

              <h3 className="font-bold">
                ToolIA
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">

                <a
                  href="/sobre-nosotros"
                  className="block hover:text-blue-600"
                >
                  Sobre nosotros
                </a>

                <a
                  href="/contacto"
                  className="block hover:text-blue-600"
                >
                  Contacto
                </a>

                <a
                  href="/como-evaluamos"
                  className="block hover:text-blue-600"
                >
                  Cómo evaluamos
                </a>

              </div>

            </div>


            <div>

              <h3 className="font-bold">
                Legal
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">

                <a
                  href="/privacidad"
                  className="block hover:text-blue-600"
                >
                  Privacidad
                </a>

                <a
                  href="/cookies"
                  className="block hover:text-blue-600"
                >
                  Cookies
                </a>

                <a
                  href="/terminos"
                  className="block hover:text-blue-600"
                >
                  Términos
                </a>

                <a
                  href="/politica-afiliacion"
                  className="block hover:text-blue-600"
                >
                  Afiliación
                </a>

              </div>

            </div>

          </div>


          <div className="mt-12 border-t pt-8 text-sm text-slate-500">
            © 2026 ToolIA. Todos los derechos reservados.
          </div>

        </div>

      </footer>

    </main>
  );
}