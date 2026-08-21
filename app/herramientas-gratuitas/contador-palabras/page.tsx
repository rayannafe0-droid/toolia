"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContadorPalabrasPage() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, "").length;
  const lines = text ? text.split(/\r?\n/).length : 0;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14">

          <Link
            href="/herramientas-gratuitas"
            className="text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            ← Volver a herramientas gratuitas
          </Link>

          <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
            🔢
          </div>

          <p className="mt-6 font-bold text-blue-600">
            HERRAMIENTA GRATUITA
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Contador de palabras
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Cuenta palabras, caracteres y líneas de cualquier texto
            directamente desde ToolIA.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">

        <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            className="min-h-[300px] w-full resize-y rounded-2xl border bg-slate-50 p-5 leading-7 outline-none transition focus:border-blue-500 focus:bg-white"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-bold text-slate-500">
                Palabras
              </p>
              <p className="mt-1 text-3xl font-black text-blue-600">
                {words}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <p className="text-sm font-bold text-slate-500">
                Caracteres
              </p>
              <p className="mt-1 text-3xl font-black">
                {characters}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <p className="text-sm font-bold text-slate-500">
                Sin espacios
              </p>
              <p className="mt-1 text-3xl font-black">
                {charactersWithoutSpaces}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <p className="text-sm font-bold text-slate-500">
                Líneas
              </p>
              <p className="mt-1 text-3xl font-black">
                {lines}
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={() => setText("")}
            className="mt-6 rounded-xl border bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-50"
          >
            Borrar texto
          </button>

        </div>

      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">

        <div className="rounded-3xl border bg-white p-7">

          <h2 className="text-2xl font-black">
            ¿Para qué sirve?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Puedes utilizar este contador para comprobar rápidamente la
            extensión de trabajos, artículos, publicaciones, redacciones
            o cualquier otro texto.
          </p>

        </div>

      </section>

    </main>
  );
}