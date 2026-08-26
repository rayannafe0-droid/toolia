export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black text-white">
          T
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600" />
        </div>

        <p className="mt-5 text-sm font-bold text-slate-500">
          Cargando ToolIA...
        </p>

      </div>
    </main>
  );
}