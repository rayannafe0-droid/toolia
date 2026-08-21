"use client";

import Link from "next/link";
import { useState } from "react";

const nameParts = {
  tech: [
    "Nova",
    "Nexa",
    "Byte",
    "Pixel",
    "Quantum",
    "Nex",
    "Core",
    "Logic",
    "Cloud",
    "Data",
  ],
  business: [
    "Prime",
    "Elite",
    "Vertex",
    "Capital",
    "Growth",
    "Summit",
    "Vision",
    "Pro",
    "Impact",
    "Advance",
  ],
  creative: [
    "Luma",
    "Mira",
    "Aura",
    "Viva",
    "Nube",
    "Crea",
    "Luna",
    "Musa",
    "Arte",
    "Brilla",
  ],
};

function generateNames(category: keyof typeof nameParts, word: string) {
  const parts = nameParts[category];

  const generated = [
    `${parts[0]}${word}`,
    `${word}${parts[1]}`,
    `${parts[2]}${word}`,
    `${parts[3]}${word}`,
    `${word}${parts[4]}`,
    `${parts[5]}${word}`,
    `${parts[6]}${word}`,
    `${word}${parts[7]}`,
    `${parts[8]}${word}`,
    `${parts[9]}${word}`,
  ];

  return [...new Set(generated)];
}

export default function GeneradorNombresPage() {
  const [word, setWord] = useState("");
  const [category, setCategory] =
    useState<keyof typeof nameParts>("tech");
  const [names, setNames] = useState<string[]>([]);

  function generate() {
    const cleanWord = word.trim().replace(/\s+/g, "");

    if (!cleanWord) {
      setNames([]);
      return;
    }

    setNames(generateNames(category, cleanWord));
  }

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
            💡
          </div>

          <p className="mt-6 font-bold text-blue-600">
            HERRAMIENTA GRATUITA
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Generador de nombres
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Genera ideas de nombres para negocios, proyectos, marcas,
            canales y mucho más.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">

        <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">

          <label className="block text-sm font-bold">
            Escribe una palabra relacionada
          </label>

          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generate();
              }
            }}
            placeholder="Ejemplo: café, moda, tecnología..."
            className="mt-3 w-full rounded-xl border bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:bg-white"
          />

          <label className="mt-6 block text-sm font-bold">
            Tipo de proyecto
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as keyof typeof nameParts)
            }
            className="mt-3 w-full rounded-xl border bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
          >
            <option value="tech">
              Tecnología
            </option>

            <option value="business">
              Negocio
            </option>

            <option value="creative">
              Creativo
            </option>
          </select>

          <button
            type="button"
            onClick={generate}
            className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
          >
            Generar nombres ✨
          </button>

        </div>

        {names.length > 0 && (
          <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8">

            <div className="flex items-center justify-between gap-4">

              <div>
                <p className="text-sm font-bold text-blue-600">
                  RESULTADOS
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  Ideas de nombres
                </h2>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold">
                {names.length}
              </span>

            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {names.map((name) => (
                <div
                  key={name}
                  className="rounded-xl border bg-slate-50 p-4 font-bold transition hover:border-blue-400 hover:bg-blue-50"
                >
                  {name}
                </div>
              ))}

            </div>

          </div>
        )}

        <div className="mt-8 rounded-3xl border bg-white p-7">

          <h2 className="text-2xl font-black">
            ¿Cómo funciona?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Introduce una palabra relacionada con tu proyecto y selecciona
            una categoría. ToolIA combinará diferentes palabras para
            generar ideas de nombres.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Los resultados son ideas automáticas y no garantizan que el
            nombre esté disponible como dominio, marca o usuario en redes
            sociales.
          </p>

        </div>

      </section>

    </main>
  );
}