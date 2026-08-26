import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  affiliateTools,
  getAffiliateTool,
} from "@/data/affiliate-tools";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return affiliateTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getAffiliateTool(slug);

  if (!tool) {
    return {};
  }

  return {
    title: `${tool.name}: análisis y opinión`,
    description: `${tool.shortDescription} Descubre nuestra valoración de ${tool.name} en ToolIA.`,
  };
}

export default async function AffiliateToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getAffiliateTool(slug);

  if (!tool) {
    notFound();
  }

  const hasAffiliateLink = Boolean(tool.affiliateUrl);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/recomendadas"
            className="font-bold text-blue-600"
          >
            ← Volver a recomendadas
          </Link>

          <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-4xl font-black text-blue-600">
            {tool.name.charAt(0)}
          </div>

          <span className="mt-7 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
            {tool.category}
          </span>

          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            {tool.name}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {tool.description}
          </p>

          <div className="mt-8">
            {hasAffiliateLink ? (
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-flex rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Probar {tool.name} →
              </a>
            ) : (
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Visitar {tool.name} →
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7">
            <h2 className="text-xl font-black">
              ¿Para qué sirve?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {tool.shortDescription}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-7">
            <h2 className="text-xl font-black">
              Información del programa
            </h2>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                <strong>Comisión:</strong> {tool.commission}
              </p>

              <p>
                <strong>Cookie:</strong> {tool.cookie}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8">
          <h2 className="text-2xl font-black">
            Nuestra valoración
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            En ToolIA analizamos las herramientas teniendo en cuenta sus
            características, facilidad de uso, precio, utilidad y relación
            calidad-precio. Actualizaremos esta página cuando dispongamos de
            información nueva y verificable.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6">
          <p className="text-sm leading-6 text-slate-500">
            Esta página puede contener enlaces de afiliados. ToolIA podría
            recibir una comisión si realizas una compra o contratación a
            través de nuestros enlaces, sin coste adicional para ti.
          </p>
        </div>
      </section>
    </main>
  );
}