import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Consulta qué son las cookies, cómo pueden utilizarse en ToolIA y cómo gestionar tus preferencias.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <span className="font-bold text-blue-600">
            INFORMACIÓN LEGAL
          </span>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Política de cookies
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
                1. ¿Qué son las cookies?
              </h2>

              <p className="mt-4">
                Las cookies son pequeños archivos que pueden almacenarse
                en el dispositivo del usuario cuando visita un sitio web.
                Pueden utilizarse para recordar determinadas preferencias,
                proporcionar funcionalidades y obtener información sobre
                la navegación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                2. ¿Qué tipos de cookies pueden utilizarse?
              </h2>

              <p className="mt-4">
                Dependiendo de la finalidad, pueden existir diferentes
                categorías de cookies y tecnologías similares.
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-black text-slate-900">
                    Cookies necesarias
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    Pueden ser necesarias para determinadas funciones
                    técnicas del sitio web o para recordar determinadas
                    preferencias relacionadas con el consentimiento.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-black text-slate-900">
                    Cookies de análisis
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    Pueden utilizarse para obtener estadísticas sobre el
                    uso de ToolIA y conocer cómo interactúan los usuarios
                    con el sitio.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-black text-slate-900">
                    Cookies publicitarias
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    Pueden utilizarse para mostrar, medir o personalizar
                    publicidad cuando exista una base legal y el
                    consentimiento correspondiente cuando sea necesario.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                3. Google Analytics
              </h2>

              <p className="mt-4">
                ToolIA utiliza Google Analytics para analizar de forma
                estadística el uso del sitio web.
              </p>

              <p className="mt-4">
                Google Analytics puede utilizar cookies y tecnologías
                similares para recopilar información relacionada con la
                navegación y la interacción con el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                4. Google AdSense
              </h2>

              <p className="mt-4">
                ToolIA puede utilizar Google AdSense para mostrar
                publicidad.
              </p>

              <p className="mt-4">
                Los servicios publicitarios pueden utilizar cookies u
                otras tecnologías para proporcionar y medir publicidad,
                dependiendo de las preferencias de consentimiento y de la
                configuración aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                5. Gestión del consentimiento
              </h2>

              <p className="mt-4">
                ToolIA utiliza una plataforma de gestión del consentimiento
                para permitir a los usuarios gestionar determinadas
                preferencias relacionadas con cookies y tecnologías
                similares.
              </p>

              <p className="mt-4">
                Las opciones disponibles pueden variar dependiendo de la
                ubicación del usuario y de los servicios utilizados en el
                sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                6. ¿Cómo gestionar las cookies?
              </h2>

              <p className="mt-4">
                Puedes gestionar determinadas preferencias mediante el
                mecanismo de consentimiento disponible en ToolIA.
              </p>

              <p className="mt-4">
                También puedes configurar tu navegador para bloquear o
                eliminar cookies. Ten en cuenta que desactivar algunas
                cookies puede afectar al funcionamiento de determinadas
                partes del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                7. Cookies de terceros
              </h2>

              <p className="mt-4">
                Algunos servicios utilizados por ToolIA pueden establecer
                cookies o tecnologías similares desde dominios de terceros.
              </p>

              <p className="mt-4">
                Estos terceros gestionan dichas tecnologías de acuerdo con
                sus propias políticas y condiciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                8. Actualizaciones
              </h2>

              <p className="mt-4">
                Esta política puede actualizarse si cambian las cookies,
                servicios o tecnologías utilizadas por ToolIA.
              </p>

              <p className="mt-4">
                La fecha de actualización indicada al principio de esta
                página permite conocer cuándo se revisó por última vez.
              </p>
            </section>

            <section className="rounded-2xl border bg-slate-50 p-6">
              <h2 className="text-xl font-black text-slate-900">
                Más información
              </h2>

              <p className="mt-3">
                Para conocer cómo tratamos la información personal, puedes
                consultar nuestra política de privacidad.
              </p>

              <a
                href="/privacidad"
                className="mt-4 inline-block font-bold text-blue-600 hover:text-blue-700"
              >
                Ver política de privacidad →
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}