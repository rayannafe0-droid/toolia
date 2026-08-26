import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de afiliación",
  description:
    "Información sobre los enlaces y programas de afiliación utilizados en ToolIA.",
};

export default function PoliticaAfiliacionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <span className="font-bold text-blue-600">
            TRANSPARENCIA
          </span>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Política de afiliación
          </h1>

          <p className="mt-5 text-slate-500">
            Última actualización: agosto de 2026
          </p>
        </div>
      </section>

      {/* CONTENIDO */}

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-3xl border bg-white p-7 shadow-sm md:p-10">
          <div className="space-y-10 leading-7 text-slate-600">
            <section>
              <h2 className="text-2xl font-black text-slate-900">
                1. ¿Qué es la afiliación?
              </h2>

              <p className="mt-4">
                ToolIA puede participar en determinados programas de
                afiliación ofrecidos por empresas y plataformas externas.
              </p>

              <p className="mt-4">
                Esto significa que algunos enlaces publicados en ToolIA
                pueden ser enlaces de afiliación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                2. ¿Cómo funciona?
              </h2>

              <p className="mt-4">
                Si haces clic en un enlace de afiliación y posteriormente
                realizas una acción que cumpla las condiciones establecidas
                por el programa correspondiente, ToolIA podría recibir una
                comisión.
              </p>

              <p className="mt-4">
                La comisión, cuando exista, normalmente es abonada por la
                empresa o plataforma correspondiente y no supone
                necesariamente un coste adicional para el usuario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                3. Las recomendaciones
              </h2>

              <p className="mt-4">
                La existencia de un enlace de afiliación no significa que
                una herramienta sea automáticamente mejor que otra.
              </p>

              <p className="mt-4">
                En ToolIA intentamos valorar las herramientas teniendo en
                cuenta aspectos como sus características, utilidad,
                facilidad de uso, precio, rendimiento y relación
                calidad/precio cuando disponemos de información suficiente
                para hacerlo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                4. Transparencia
              </h2>

              <p className="mt-4">
                Queremos que nuestros usuarios puedan identificar
                claramente cuándo una recomendación puede estar vinculada a
                una relación de afiliación.
              </p>

              <p className="mt-4">
                Las condiciones de los programas de afiliación pueden
                cambiar y determinados enlaces pueden dejar de estar
                activos o de generar comisiones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                5. Empresas y servicios externos
              </h2>

              <p className="mt-4">
                Las compras, suscripciones o contrataciones realizadas
                después de acceder a una página externa están sujetas a
                las condiciones, precios y políticas de la empresa
                correspondiente.
              </p>

              <p className="mt-4">
                Antes de contratar un servicio, recomendamos comprobar
                siempre la información directamente en la página oficial
                del proveedor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                6. Publicidad y afiliación
              </h2>

              <p className="mt-4">
                La afiliación es diferente de la publicidad. ToolIA puede
                obtener ingresos mediante enlaces de afiliación y también
                mediante otros modelos de monetización, como publicidad
                digital.
              </p>

              <p className="mt-4">
                Estos modelos de monetización no deben interpretarse como
                una garantía de que una herramienta sea recomendada por
                encima de otra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                7. Actualizaciones
              </h2>

              <p className="mt-4">
                Esta política puede actualizarse cuando ToolIA incorpore
                nuevos programas de afiliación, modifique su modelo de
                monetización o resulte necesario actualizar la información
                publicada.
              </p>
            </section>

            {/* ENLACES */}

            <section className="rounded-2xl border bg-slate-50 p-6">
              <h2 className="text-xl font-black text-slate-900">
                Más información
              </h2>

              <p className="mt-3">
                Puedes consultar también nuestros criterios de evaluación
                y nuestra política de privacidad.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/como-evaluamos"
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  Cómo evaluamos →
                </a>

                <a
                  href="/privacidad"
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  Política de privacidad →
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}