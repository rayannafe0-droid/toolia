import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-2xl text-center">

        <div className="text-8xl font-black text-blue-600">
          404
        </div>

        <h1 className="mt-6 text-3xl font-black text-slate-900 md:text-4xl">
          Página no encontrada
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-slate-600">
          La página que estás buscando no existe o puede que haya sido
          trasladada.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Volver al inicio
          </Link>

          <Link
            href="/herramientas"
            className="rounded-xl border bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-50"
          >
            Ver herramientas
          </Link>

        </div>

        <p className="mt-10 text-sm font-bold text-slate-400">
          Tool<span className="text-blue-600">IA</span>
        </p>

      </div>
    </main>
  );
}