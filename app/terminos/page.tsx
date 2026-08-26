import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Consulta los términos y condiciones de uso de ToolIA.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <span className="font-bold text-blue-600">
            INFORMACIÓN LEGAL
          </span>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Términos y condiciones
          </h1>

          <p className="mt-5 text-slate-500">
            Última actualización: agosto de 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-3xl border bg-white p-7 shadow-sm md:p-10">
          <div className="space-y-10 leading-7 text-slate-600">
            <section>
              <h2 className="text-2xl font-black text-slate-900">
                1. Aceptación de los términos
              </h2>

              <p className="mt-4">
                El acceso y uso de ToolIA implica la aceptación de estos
                términos y condiciones. Si no estás de acuerdo con ellos,
                debes dejar de utilizar el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                2. Sobre ToolIA
              </h2>

              <p className="mt-4">
                ToolIA es un sitio web dedicado a recopilar y presentar
                información sobre herramientas de inteligencia artificial,
                tecnología, productividad y recursos digitales.
              </p>

              <p className="mt-4">
                El contenido publicado tiene carácter principalmente
                informativo y divulgativo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                3. Uso del sitio web
              </h2>

              <p className="mt-4">
                El usuario se compromete a utilizar ToolIA de forma lícita,
                responsable y respetuosa con la legislación aplicable.
              </p>

              <p className="mt-4">
                No está permitido utilizar el sitio para actividades
                ilícitas, fraudulentas, dañinas o que puedan perjudicar el
                funcionamiento de ToolIA o a otros usuarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                4. Información sobre herramientas de terceros
              </h2>

              <p className="mt-4">
                ToolIA puede mostrar información sobre servicios,
                aplicaciones, plataformas y productos desarrollados por
                terceros.
              </p>

              <p className="mt-4">
                Las características, precios, condiciones y disponibilidad
                de estos servicios pueden cambiar con el tiempo.
              </p>

              <p className="mt-4">
                Recomendamos comprobar siempre la información directamente
                en la página oficial del servicio antes de realizar una
                compra, contratación o registro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                5. Exactitud de la información
              </h2>

              <p className="mt-4">
                Intentamos mantener la información publicada actualizada y
                útil, pero no podemos garantizar que todos los datos sean
                permanentemente exactos, completos o actuales.
              </p>

              <p className="mt-4">
                La disponibilidad de determinadas funciones, precios o
                planes puede depender del proveedor correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                6. Enlaces externos
              </h2>

              <p className="mt-4">
                ToolIA puede incluir enlaces hacia sitios web externos.
                Estos sitios pertenecen a terceros y funcionan bajo sus
                propias condiciones y políticas.
              </p>

              <p className="mt-4">
                ToolIA no controla el contenido, disponibilidad o políticas
                de sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                7. Enlaces de afiliación
              </h2>

              <p className="mt-4">
                Algunas páginas pueden contener enlaces de afiliación. Si
                un usuario realiza una acción determinada a través de uno
                de estos enlaces, ToolIA podría recibir una comisión.
              </p>

              <p className="mt-4">
                Cuando exista afiliación, intentaremos mantener una
                comunicación transparente sobre ella.
              </p>

              <a
                href="/politica-afiliacion"
                className="mt-4 inline-block font-bold text-blue-600 hover:text-blue-700"
              >
                Ver política de afiliación →
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                8. Propiedad intelectual
              </h2>

              <p className="mt-4">
                Los elementos propios de ToolIA, incluyendo textos,
                diseños, logotipos, código y otros contenidos originales,
                pueden estar protegidos por la legislación aplicable en
                materia de propiedad intelectual.
              </p>

              <p className="mt-4">
                No se permite reproducir, distribuir o utilizar contenidos
                propios de ToolIA con fines comerciales sin la autorización
                correspondiente, salvo cuando la legislación permita dicho
                uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                9. Disponibilidad del sitio
              </h2>

              <p className="mt-4">
                Intentamos mantener ToolIA disponible y funcionando
                correctamente, pero pueden producirse interrupciones,
                errores, tareas de mantenimiento o problemas técnicos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                10. Limitación de responsabilidad
              </h2>

              <p className="mt-4">
                ToolIA ofrece contenidos principalmente informativos. El
                usuario es responsable de valorar la información antes de
                tomar decisiones basadas en ella.
              </p>

              <p className="mt-4">
                ToolIA no se hace responsable de decisiones tomadas
                exclusivamente a partir de información publicada en el
                sitio ni de problemas derivados directamente de servicios
                externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                11. Modificaciones
              </h2>

              <p className="mt-4">
                ToolIA puede modificar, actualizar o retirar contenidos,
                funcionalidades o partes del sitio web cuando resulte
                necesario.
              </p>

              <p className="mt-4">
                También podemos actualizar estos términos para reflejar
                cambios en el funcionamiento del servicio o en las
                obligaciones aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                12. Contacto
              </h2>

              <p className="mt-4">
                Si tienes alguna duda relacionada con estos términos,
                puedes ponerte en contacto con ToolIA.
              </p>

              <a
                href="/contacto"
                className="mt-4 inline-block font-bold text-blue-600 hover:text-blue-700"
              >
                Contactar con ToolIA →
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}