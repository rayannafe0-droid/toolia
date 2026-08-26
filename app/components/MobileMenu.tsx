"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute right-0 top-14 z-[100] w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <nav className="flex flex-col p-3">

            <Link
              href="/herramientas"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              Herramientas
            </Link>

            <Link
              href="/comparativas"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              Comparativas
            </Link>

            <Link
              href="/guias"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              Guías
            </Link>

            <Link
              href="/recomendadas"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              Recomendadas
            </Link>

            <Link
              href="/herramientas-gratuitas"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Herramientas gratis
            </Link>

          </nav>
        </div>
      )}
    </div>
  );
}