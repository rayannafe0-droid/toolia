import { notFound } from "next/navigation";
import { guides } from "@/data/guides";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return {
      title: "Guía no encontrada | ToolIA",
      description: "La guía que buscas no existe en ToolIA.",
    };
  }

  return {
    title: `${guide.title} | ToolIA`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-black">
            Tool<span className="text-blue-600">IA</span>
          </a>

          <a
            href="/guias"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            ← Todas las guías
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {guide.category}
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            {guide.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {guide.description}
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-10">
          <p className="text-lg leading-8 text-slate-700">
            {guide.introduction}
          </p>

          {guide.sections.map((section, index) => (
            <section key={section.title} className="mt-12">
              <h2 className="text-2xl font-black">
                {index + 1}. {section.title}
              </h2>

              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-5 space-y-3 text-slate-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>✓ {bullet}</li>
                  ))}
                </ul>
              )}

              {section.example && (
                <div className="mt-5 rounded-2xl bg-slate-900 p-6 text-slate-100">
                  <p className="text-sm font-bold text-blue-400">
                    EJEMPLO
                  </p>

                  <p className="mt-3 leading-7">
                    {section.example}
                  </p>
                </div>
              )}
            </section>
          ))}

          <section className="mt-12 rounded-2xl bg-blue-50 p-7">
            <h2 className="text-2xl font-black">Conclusión</h2>

            <p className="mt-4 leading-7 text-slate-700">
              {guide.conclusion}
            </p>
          </section>

          <section className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-black">
              Descubre más herramientas
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Explora el directorio de ToolIA y encuentra herramientas de
              inteligencia artificial para estudiar, trabajar, crear y
              mejorar tu productividad.
            </p>

            <a
              href="/herramientas"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-slate-900 hover:bg-slate-100"
            >
              Explorar herramientas →
            </a>
          </section>
        </div>
      </article>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
          © 2026 ToolIA
        </div>
      </footer>
    </main>
  );
}