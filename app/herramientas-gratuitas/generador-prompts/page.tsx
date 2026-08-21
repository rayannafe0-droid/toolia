"use client";

import Link from "next/link";
import { useState } from "react";

const objectives = [
  "Obtener información",
  "Crear contenido",
  "Estudiar",
  "Generar ideas",
  "Programar",
  "Analizar un texto",
];

const tones = [
  "Profesional",
  "Amigable",
  "Directo",
  "Creativo",
  "Académico",
];

export default function GeneradorPromptsPage() {
  const [objective, setObjective] = useState(objectives[0]);
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [result, setResult] = useState("");

  function generatePrompt() {
    const cleanTopic = topic.trim();
    const cleanContext = context.trim();

    if (!cleanTopic) {
      setResult("");
      return;
    }

    const prompt = `Actúa como un experto en ${cleanTopic}.

Objetivo:
${objective}

Contexto:
${cleanContext || "No se ha proporcionado contexto adicional."}

Instrucciones:
- Explica la respuesta de forma clara y estructurada.
- Utiliza un tono ${tone.toLowerCase()}.
- Prioriza información útil y concreta.
- Si falta información importante, indícalo antes de asumir datos.
- Organiza la respuesta utilizando títulos, listas o pasos cuando sea apropiado.

Tarea:
Ayúdame con ${cleanTopic}.`;

    setResult(prompt);
  }

  async function copyPrompt() {
    if (!result) return;

    await navigator.clipboard.writeText(result);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14">

          <Link
            href="/herramientas-gratuitas"
            className="text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            ← Volver a herramientas gratuitas
          </Link>

          <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
            ✨
          </div>

          <p className="mt-6 font-bold text-blue-600">
            HERRAMIENTA GRATUITA
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Generador de prompts
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Crea prompts estructurados para obtener respuestas más útiles
            de las herramientas de inteligencia artificial.
          </p>

        </div>
      </section>

      {/* FORMULARIO */}
      <section className="mx-auto max-w-4xl px-6 py-12">

        <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">

          <h2 className="text-2xl font-black">
            Crea tu prompt
          </h2>

          <p className="mt-2 text-slate-600">
            Completa los campos y ToolIA construirá un prompt estructurado.
          </p>

          {/* OBJETIVO */}
          <label className="mt-7 block text-sm font-bold">
            ¿Qué quieres conseguir?
          </label>

          <select
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            className="mt-3 w-full rounded-xl border bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
          >
            {objectives.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {/* TEMA */}
          <label className="mt-6 block text-sm font-bold">
            ¿Sobre qué quieres trabajar?
          </label>

          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ejemplo: crear una estrategia para Instagram"
            className="mt-3 w-full rounded-xl border bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:bg-white"
          />

          {/* CONTEXTO */}
          <label className="mt-6 block text-sm font-bold">
            Contexto adicional
          </label>

          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Añade información que pueda ayudar a obtener una respuesta más precisa..."
            className="mt-3 min-h-32 w-full resize-y rounded-xl border bg-slate-50 p-5 leading-7 outline-none focus:border-blue-500 focus:bg-white"
          />

          {/* TONO */}
          <label className="mt-6 block text-sm font-bold">
            Tono de respuesta
          </label>

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="mt-3 w-full rounded-xl border bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
          >
            {tones.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={generatePrompt}
            className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
          >
            Generar prompt ✨
          </button>

        </div>

        {/* RESULTADO */}
        {result && (
          <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm md:p-8">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>
                <p className="text-sm font-bold text-blue-600">
                  RESULTADO
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  Tu prompt
                </h2>
              </div>

              <button
                type="button"
                onClick={copyPrompt}
                className="rounded-xl border bg-white px-5 py-3 font-bold hover:bg-slate-50"
              >
                📋 Copiar prompt
              </button>

            </div>

            <div className="mt-6 whitespace-pre-wrap rounded-2xl bg-slate-900 p-6 font-mono text-sm leading-7 text-slate-100">
              {result}
            </div>

          </div>
        )}

        {/* INFORMACIÓN */}
        <div className="mt-8 rounded-3xl border bg-white p-7">

          <h2 className="text-2xl font-black">
            ¿Qué es un prompt?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Un prompt es una instrucción que proporcionas a una herramienta
            de inteligencia artificial para indicarle qué quieres conseguir.
            Un prompt claro y bien estructurado puede facilitar respuestas
            más útiles y adaptadas a tu objetivo.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Este generador crea una estructura inicial. Puedes modificar el
            resultado antes de utilizarlo en tu herramienta de IA favorita.
          </p>

        </div>

      </section>

    </main>
  );
}