"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-2xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-4xl">
          ⚠️
        </div>

        <h1 className="mt-6 text-3xl font-black text-slate-900 md:text-4xl">
          Algo ha salido mal
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-slate-600">
          Ha ocurrido un error inesperado. Puedes intentar cargar la página
          de nuevo.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Intentar de nuevo
        </button>

        <p className="mt-10 text-sm font-bold text-slate-400">
          Tool<span className="text-blue-600">IA</span>
        </p>

      </div>
    </main>
  );
}