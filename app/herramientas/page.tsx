"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { tools } from "@/data/tools";

export default function HerramientasPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const categories = [
    "Todas",
    ...Array.from(new Set(tools.map((tool) => tool.category))),
  ];

  const filteredTools = useMemo(() => {
    const query = search.toLowerCase().trim();

    return tools.filter((tool) => {
      const matchesSearch =
        query === "" ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.subcategory?.toLowerCase().includes(query);

      const matchesCategory =
        category === "Todas" || tool.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

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

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">

            <Link
              href="/herramientas"
              className="text-blue-600"
            >
              Herramientas
            </Link>

            <Link
              href="/comparativas"
              className="hover:text-blue-600"
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
            href="/"
            className="rounded-xl border bg-white px-4 py-2.5 text-sm font-bold hover:bg-slate-50"
          >
            Inicio
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              🤖 Directorio de herramientas
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Encuentra la herramienta
              <span className="block text-blue-600">
                perfecta para ti
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Explora herramientas de inteligencia artificial,
              productividad, diseño y mucho más.
            </p>

          </div>

          {/* BUSCADOR */}
          <div className="mx-auto mt-10 max-w-3xl">

            <div className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-2 shadow-sm focus-within:border-blue-500 focus-within:bg-white">

              <span className="pl-3 text-2xl">
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar herramienta, categoría o necesidad..."
                className="w-full bg-transparent px-2 py-4 outline-none"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mr-2 rounded-lg px-3 py-2 text-sm font-bold text-slate-500 hover:bg-slate-200"
                >
                  Limpiar
                </button>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex flex-col gap-10 lg:flex-row">

          {/* SIDEBAR */}
          <aside className="lg:w-64 lg:shrink-0">

            <div className="rounded-2xl border bg-white p-6">

              <h2 className="text-lg font-black">
                Categorías
              </h2>

              <div className="mt-5 space-y-2">

                {categories.map((item) => (

                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                      category === item
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          </aside>

          {/* HERRAMIENTAS */}
          <div className="flex-1">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>

                <p className="text-sm font-bold text-blue-600">
                  DIRECTORIO
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  {filteredTools.length}{" "}
                  {filteredTools.length === 1
                    ? "herramienta"
                    : "herramientas"}
                </h2>

              </div>

              {category !== "Todas" && (
                <button
                  type="button"
                  onClick={() => setCategory("Todas")}
                  className="text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  Ver todas
                </button>
              )}

            </div>

            {/* GRID */}
            {filteredTools.length > 0 ? (

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {filteredTools.map((tool) => (

                  <article
                    key={tool.slug}
                    className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >

                    {/* TOP */}
                    <div className="flex items-start justify-between gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                        🤖
                      </div>

                      {tool.verified && (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                          ✓ Verificada
                        </span>
                      )}

                    </div>

                    {/* CATEGORY */}
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

                    {/* NAME */}
                    <h3 className="mt-4 text-2xl font-black">
                      {tool.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 min-h-20 leading-7 text-slate-600">
                      {tool.description}
                    </p>

                    {/* INFO */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">

                      <span className="rounded-xl border bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600">
                        💳 {tool.pricing}
                      </span>

                      {tool.freePlan && (
                        <span className="rounded-xl border bg-slate-50 px-3 py-2 text-sm font-bold text-green-700">
                          ✓ Gratis
                        </span>
                      )}

                      {tool.rating && (
                        <span className="rounded-xl border bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600">
                          ⭐ {tool.rating}
                        </span>
                      )}

                    </div>

                    {/* BUTTON */}
                    <div className="mt-7">

                      <Link
                        href={`/herramientas/${tool.slug}`}
                        className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white transition hover:bg-blue-700"
                      >
                        Ver herramienta →
                      </Link>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              /* SIN RESULTADOS */
              <div className="mt-8 rounded-2xl border bg-white p-12 text-center">

                <div className="text-5xl">
                  🔎
                </div>

                <h2 className="mt-5 text-2xl font-black">
                  No encontramos ninguna herramienta
                </h2>

                <p className="mx-auto mt-3 max-w-md text-slate-600">
                  Prueba con otro nombre, categoría o término de búsqueda.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("Todas");
                  }}
                  className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
                >
                  Ver todas las herramientas
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center text-white md:px-16">

          <p className="font-bold text-blue-400">
            TOOLIA
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            ¿No encuentras lo que buscas?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Estamos añadiendo nuevas herramientas al directorio
            continuamente.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-900 hover:bg-slate-100"
          >
            Volver al inicio
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <Link
              href="/"
              className="text-2xl font-black"
            >
              Tool<span className="text-blue-600">IA</span>
            </Link>

            <p className="text-sm text-slate-500">
              © 2026 ToolIA. Todos los derechos reservados.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}