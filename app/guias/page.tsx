"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const guides = [
  {
    id: "ia-estudiar",
    title: "Cómo usar la inteligencia artificial para estudiar",
    description:
      "Descubre cómo utilizar herramientas de IA para estudiar, resumir apuntes, entender conceptos y organizar tus sesiones de estudio.",
    category: "Estudios",
    icon: "📚",
    content:
      "La inteligencia artificial puede ayudarte a estudiar de forma más organizada. Puedes utilizarla para explicar conceptos difíciles, crear preguntas de práctica, resumir información y preparar planes de estudio. Lo importante es utilizarla como apoyo para aprender y no simplemente para copiar respuestas.",
    tips: [
      "Pide explicaciones adaptadas a tu nivel.",
      "Utiliza la IA para crear preguntas de práctica.",
      "Resume textos largos y después comprueba la información original.",
      "Crea planes de estudio según el tiempo que tengas disponible.",
    ],
  },
  {
    id: "mejores-ia-estudiantes",
    title: "Las mejores herramientas de IA para estudiantes",
    description:
      "Conoce diferentes herramientas de inteligencia artificial que pueden ayudarte con tus estudios y tareas.",
    category: "Estudios",
    icon: "🎓",
    content:
      "Existen diferentes tipos de herramientas de IA que pueden ser útiles para estudiantes. Algunas sirven para conversar y resolver dudas, otras para organizar información, crear textos, trabajar con documentos o mejorar la productividad.",
    tips: [
      "Elige la herramienta según el trabajo que necesites realizar.",
      "Comprueba siempre la información importante.",
      "Utiliza herramientas gratuitas cuando sean suficientes.",
      "Evita depender de la IA para hacer todo el trabajo.",
    ],
  },
  {
    id: "usar-chatgpt",
    title: "Cómo utilizar ChatGPT correctamente",
    description:
      "Aprende a sacar más partido a ChatGPT mediante mejores preguntas, instrucciones y prompts.",
    category: "Inteligencia artificial",
    icon: "🤖",
    content:
      "Para obtener mejores respuestas de ChatGPT es importante explicar claramente qué necesitas. Cuanto más contexto relevante proporciones, más fácil será conseguir una respuesta útil. También puedes indicar el formato, el nivel de detalle y el objetivo de la respuesta.",
    tips: [
      "Explica claramente qué quieres conseguir.",
      "Proporciona el contexto necesario.",
      "Indica el formato que quieres recibir.",
      "Divide tareas grandes en pasos pequeños.",
    ],
  },
  {
    id: "crear-prompts",
    title: "Cómo crear mejores prompts para IA",
    description:
      "Aprende qué debe tener un buen prompt y cómo dar instrucciones más claras para conseguir mejores resultados.",
    category: "Inteligencia artificial",
    icon: "✍️",
    content:
      "Un buen prompt debe indicar de forma clara qué quieres conseguir. Puedes explicar el objetivo, proporcionar contexto, indicar restricciones y pedir un formato concreto. No necesitas utilizar palabras complicadas: una instrucción clara suele ser más importante.",
    tips: [
      "Define el objetivo.",
      "Añade contexto.",
      "Indica las restricciones importantes.",
      "Especifica el formato de la respuesta.",
    ],
  },
  {
    id: "ia-trabajar",
    title: "Cómo utilizar la IA para trabajar",
    description:
      "Descubre cómo utilizar herramientas de IA para ahorrar tiempo, organizar tareas y mejorar tu trabajo.",
    category: "Trabajo",
    icon: "💼",
    content:
      "La IA puede utilizarse para automatizar parte del trabajo repetitivo, generar ideas, redactar borradores, organizar información y ayudarte a analizar documentos. La clave está en identificar las tareas que consumen mucho tiempo y comprobar si una herramienta puede simplificarlas.",
    tips: [
      "Utiliza IA para crear primeros borradores.",
      "Automatiza tareas repetitivas cuando sea posible.",
      "Organiza información con herramientas de IA.",
      "Revisa siempre el resultado antes de utilizarlo.",
    ],
  },
  {
    id: "ia-contenido",
    title: "Cómo utilizar IA para crear contenido",
    description:
      "Herramientas y consejos para crear textos, imágenes, ideas y contenido digital utilizando inteligencia artificial.",
    category: "Creación de contenido",
    icon: "🎨",
    content:
      "La inteligencia artificial puede ayudarte durante diferentes partes del proceso de creación de contenido: generación de ideas, planificación, redacción, edición, imágenes y optimización. Utilizarla como asistente permite acelerar el proceso sin tener que automatizarlo completamente.",
    tips: [
      "Genera varias ideas antes de elegir una.",
      "Utiliza IA para crear estructuras y borradores.",
      "Edita siempre el contenido generado.",
      "Mantén tu propio estilo y criterio.",
    ],
  },
  {
    id: "ia-negocio",
    title: "Cómo utilizar IA para un negocio",
    description:
      "Descubre diferentes formas de utilizar la inteligencia artificial para automatizar tareas y mejorar un negocio.",
    category: "Negocios",
    icon: "📈",
    content:
      "Las empresas pueden utilizar herramientas de IA para mejorar la atención al cliente, crear contenido, analizar información, organizar tareas y automatizar determinados procesos. Antes de implementar una herramienta conviene comprobar su coste, seguridad y utilidad real.",
    tips: [
      "Empieza por tareas sencillas y repetitivas.",
      "Calcula cuánto tiempo puede ahorrar la herramienta.",
      "Protege la información confidencial.",
      "Comprueba los resultados antes de automatizar procesos importantes.",
    ],
  },
  {
    id: "ia-gratis",
    title: "Herramientas de IA gratuitas que deberías conocer",
    description:
      "Una selección de herramientas de inteligencia artificial que puedes utilizar sin pagar.",
    category: "Herramientas gratis",
    icon: "🆓",
    content:
      "No necesitas pagar por todas las herramientas de inteligencia artificial. Muchas ofrecen planes gratuitos que pueden ser suficientes para tareas básicas. Antes de pagar, comprueba qué funciones necesitas y si el plan gratuito cubre tus necesidades.",
    tips: [
      "Comprueba qué incluye realmente el plan gratuito.",
      "Compara varias alternativas.",
      "No pagues por funciones que no necesitas.",
      "Revisa los límites de uso de cada servicio.",
    ],
  },
  {
    id: "elegir-ia",
    title: "Cómo elegir una herramienta de inteligencia artificial",
    description:
      "Aprende qué aspectos debes tener en cuenta antes de elegir una herramienta de IA.",
    category: "Guías",
    icon: "🔎",
    content:
      "La mejor herramienta de IA depende del uso que quieras darle. Antes de elegir debes valorar sus funciones, precio, facilidad de uso, límites, privacidad y calidad de resultados. No existe una única herramienta que sea la mejor para todo el mundo.",
    tips: [
      "Define primero para qué necesitas la herramienta.",
      "Compara sus funciones principales.",
      "Comprueba el precio y los límites.",
      "Valora la privacidad y el tratamiento de tus datos.",
    ],
  },
];

const categories = [
  "Todas",
  "Inteligencia artificial",
  "Estudios",
  "Trabajo",
  "Creación de contenido",
  "Negocios",
  "Herramientas gratis",
  "Guías",
];

export default function GuiasPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const filteredGuides = useMemo(() => {
    const query = search.toLowerCase().trim();

    return guides.filter((guide) => {
      const matchesSearch =
        query === "" ||
        guide.title.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query) ||
        guide.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "Todas" || guide.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

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
              className="text-blue-600"
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
              className="rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Herramientas gratis
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

      {/* HERO */}
      <section className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              📖 Guías de ToolIA
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Aprende a utilizar la
              <span className="block text-blue-600">
                inteligencia artificial
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Guías sencillas para aprender a utilizar herramientas de
              inteligencia artificial, mejorar tu productividad, estudiar,
              trabajar y crear contenido.
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
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar una guía..."
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

      {/* CATEGORÍAS */}
      <section className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-6 py-6">

          <div className="flex flex-wrap gap-3">

            {categories.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  category === item
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* LISTADO */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10">

          <p className="font-bold text-blue-600">
            GUÍAS
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            {filteredGuides.length}{" "}
            {filteredGuides.length === 1
              ? "guía disponible"
              : "guías disponibles"}
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Aprende a utilizar mejor la inteligencia artificial y las
            herramientas digitales.
          </p>

        </div>

        {filteredGuides.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredGuides.map((guide) => (

              <article
                key={guide.id}
                className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {guide.icon}
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {guide.category}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-black leading-7 group-hover:text-blue-600">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {guide.description}
                </p>

                <a
                  href={`#${guide.id}`}
                  className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Leer guía →
                </a>

              </article>

            ))}

          </div>

        ) : (

          <div className="rounded-2xl border bg-white p-12 text-center">

            <div className="text-5xl">
              🔎
            </div>

            <h2 className="mt-5 text-2xl font-black">
              No encontramos ninguna guía
            </h2>

            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Prueba con otro término de búsqueda o cambia la categoría.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("Todas");
              }}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
            >
              Ver todas las guías
            </button>

          </div>

        )}

      </section>

      {/* CONTENIDO DE LAS GUÍAS */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="mb-12 text-center">

          <p className="font-bold text-blue-600">
            CENTRO DE GUÍAS
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Aprende y descubre nuevas formas de utilizar la IA
          </h2>

        </div>

        <div className="space-y-8">

          {guides.map((guide) => (

            <article
              key={guide.id}
              id={guide.id}
              className="scroll-mt-28 rounded-3xl border bg-white p-8 shadow-sm md:p-10"
            >

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {guide.icon}
                </div>

                <div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {guide.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-black md:text-3xl">
                    {guide.title}
                  </h2>

                </div>

              </div>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                {guide.content}
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-black">
                  Consejos principales
                </h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                  {guide.tips.map((tip) => (

                    <div
                      key={tip}
                      className="rounded-2xl bg-slate-50 p-5"
                    >

                      <div className="flex gap-3">

                        <span className="font-bold text-blue-600">
                          ✓
                        </span>

                        <p className="leading-6 text-slate-700">
                          {tip}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/herramientas"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explorar herramientas →
                </Link>

                <a
                  href="#top"
                  className="rounded-xl border px-5 py-3 font-bold transition hover:bg-slate-50"
                >
                  Volver arriba ↑
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* RECURSOS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/herramientas"
            className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="text-3xl">
              🛠️
            </div>

            <h2 className="mt-5 text-xl font-black">
              Explora herramientas
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Encuentra herramientas de IA, productividad, diseño,
              programación y mucho más.
            </p>

            <p className="mt-5 font-bold text-blue-600">
              Ver herramientas →
            </p>

          </Link>

          <Link
            href="/comparativas"
            className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="text-3xl">
              ⚔️
            </div>

            <h2 className="mt-5 text-xl font-black">
              Compara herramientas
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Comparamos diferentes herramientas para ayudarte a elegir
              la opción más adecuada.
            </p>

            <p className="mt-5 font-bold text-blue-600">
              Ver comparativas →
            </p>

          </Link>

          <Link
            href="/herramientas-gratuitas"
            className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="text-3xl">
              🆓
            </div>

            <h2 className="mt-5 text-xl font-black">
              Herramientas gratuitas
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Descubre herramientas que puedes utilizar sin pagar.
            </p>

            <p className="mt-5 font-bold text-blue-600">
              Ver herramientas gratis →
            </p>

          </Link>

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center text-white md:px-16">

          <p className="font-bold text-blue-400">
            TOOLIA
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            ¿Quieres descubrir más herramientas?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Explora el directorio de ToolIA y encuentra herramientas
            para estudiar, trabajar, crear contenido, programar y mucho
            más.
          </p>

          <Link
            href="/herramientas"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
          >
            Explorar herramientas →
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <Link
              href="/"
              className="text-2xl font-black"
            >
              Tool<span className="text-blue-600">IA</span>
            </Link>

            <div className="flex flex-wrap gap-5 text-sm text-slate-500">

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

          <div className="mt-8 border-t pt-6 text-sm text-slate-500">
            © 2026 ToolIA. Todos los derechos reservados.
          </div>

        </div>

      </footer>

    </main>
  );
}