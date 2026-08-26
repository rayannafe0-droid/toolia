import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Consulta la política de privacidad de ToolIA y cómo tratamos los datos de los usuarios.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <Link
            href="/"
            className="text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            ← Volver a ToolIA
          </Link>

          <h1 className="mt-8 text-4xl font-black tracking-tight md:text-5xl">
            Política de Privacidad
          </h1>

          <p className="mt-4 text-slate-500">
            Última actualización: agosto de 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-10 rounded-3xl border bg-white p-7 shadow-sm md:p-10">
          <div>
            <h2 className="text-2xl font-black">
              1. Responsable del sitio web
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA es un sitio web dedicado a recopilar, analizar y
              presentar información sobre herramientas de inteligencia
              artificial, productividad, diseño, programación y tecnología.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Sitio web: thetoolia.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              2. Información que recopilamos
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA puede recopilar determinada información técnica y de
              navegación cuando visitas el sitio web, como páginas visitadas,
              dispositivo utilizado, navegador, idioma, información
              aproximada de ubicación y datos relacionados con el uso del
              sitio.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              También pueden recopilarse datos cuando el usuario utiliza
              voluntariamente determinadas funciones del sitio, por ejemplo,
              formularios de contacto.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              3. Finalidad del tratamiento
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Los datos pueden utilizarse para proporcionar y mejorar el
              funcionamiento de ToolIA, analizar el tráfico, detectar
              problemas técnicos, mejorar la experiencia de usuario y
              comprender qué contenidos resultan más útiles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              4. Google Analytics
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA utiliza Google Analytics para obtener información
              estadística sobre el uso del sitio web, como visitas, páginas
              consultadas y comportamiento general de navegación.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Esta información se utiliza con fines estadísticos y para
              mejorar el funcionamiento y los contenidos del sitio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              5. Publicidad
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA puede utilizar servicios de publicidad de terceros, como
              Google AdSense, para mostrar anuncios relevantes a los usuarios.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Estos servicios pueden utilizar cookies y tecnologías similares
              de acuerdo con sus propias políticas y con las opciones de
              consentimiento disponibles para los usuarios.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              6. Cookies
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA utiliza cookies y tecnologías similares que pueden ser
              necesarias para el funcionamiento del sitio, medir audiencia,
              analizar el tráfico o mostrar publicidad.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Puedes obtener más información sobre el uso de cookies en
              nuestra{" "}
              <Link
                href="/cookies"
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              7. Servicios de terceros
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA puede utilizar servicios externos para proporcionar
              determinadas funcionalidades, analizar estadísticas, mostrar
              publicidad o gestionar el consentimiento de cookies.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Estos proveedores pueden tratar determinados datos de acuerdo
              con sus propias políticas de privacidad.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              8. Enlaces externos
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA contiene enlaces a sitios web y servicios externos.
              Cuando abandonas ToolIA para acceder a un servicio de terceros,
              se aplican las políticas de privacidad y condiciones de ese
              servicio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              9. Derechos de los usuarios
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              De acuerdo con la legislación aplicable, los usuarios pueden
              tener derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y otros derechos relacionados con
              sus datos personales.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Para ejercer estos derechos o realizar una consulta relacionada
              con la privacidad, puedes ponerte en contacto con ToolIA.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              10. Seguridad
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              ToolIA adopta medidas razonables para proteger la información
              frente a accesos no autorizados, pérdida, alteración o
              divulgación indebida.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              11. Cambios en esta política
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Esta política de privacidad puede actualizarse cuando sea
              necesario para reflejar cambios en el funcionamiento de ToolIA,
              en los servicios utilizados o en la legislación aplicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">
              12. Contacto
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Si tienes alguna pregunta relacionada con esta política de
              privacidad, puedes contactar con ToolIA a través de la página
              de contacto.
            </p>

            <Link
              href="/contacto"
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Contactar con ToolIA →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}