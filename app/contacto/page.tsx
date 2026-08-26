import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con el equipo de ToolIA para consultas, sugerencias, errores o colaboraciones.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="font-bold text-blue-600">
            CONTACTO
          </span>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Contacta con ToolIA
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            ¿Tienes una pregunta, has encontrado un error o quieres
            proponernos una herramienta? Puedes ponerte en contacto
            con nosotros.
          </p>
        </div>
      </section>

      {/* CONTACTO */}

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* INFORMACIÓN */}

          <div>
            <h2 className="text-2xl font-black">
              Estamos aquí para ayudarte
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Valoramos las sugerencias y comentarios de nuestros
              usuarios. Si tienes alguna duda sobre ToolIA o quieres
              informarnos de algún problema, escríbenos.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border bg-white p-5">
                <div className="text-2xl">📩</div>

                <h3 className="mt-3 font-black">
                  Consultas generales
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Para preguntas sobre ToolIA, nuestras herramientas
                  o nuestro contenido.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-5">
                <div className="text-2xl">🐛</div>

                <h3 className="mt-3 font-black">
                  Informar de un error
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Si encuentras un enlace roto, información incorrecta
                  o cualquier problema en la web, puedes comunicárnoslo.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-5">
                <div className="text-2xl">🤝</div>

                <h3 className="mt-3 font-black">
                  Colaboraciones
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  También puedes contactar con nosotros para propuestas
                  de colaboración relacionadas con ToolIA.
                </p>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">
              Envíanos un mensaje
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Actualmente el formulario es visual y todavía no está
              conectado a un servicio de correo.
            </p>

            <form
            
              className="mt-7 space-y-5"
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-bold"
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="asunto"
                  className="mb-2 block text-sm font-bold"
                >
                  Asunto
                </label>

                <input
                  id="asunto"
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-bold"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  rows={6}
                  placeholder="Escribe tu mensaje..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-blue-600 p-8 text-center text-white">
          <h2 className="text-2xl font-black">
            ¿Prefieres explorar ToolIA?
          </h2>

          <p className="mt-3 text-blue-100">
            Descubre herramientas de inteligencia artificial,
            productividad y tecnología.
          </p>

          <a
            href="/herramientas"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Explorar herramientas →
          </a>
        </div>
      </section>
    </main>
  );
}