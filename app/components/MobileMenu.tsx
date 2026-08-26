"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        aria-expanded={open}
        className="rounded-xl border bg-white px-3 py-2 text-xl font-bold text-slate-700"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b bg-white shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">

            <Link
              href="/herramientas"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Herramientas
            </Link>

            <Link
              href="/comparativas"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Comparativas
            </Link>

            <Link
              href="/guias"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Guías
            </Link>

            <Link
              href="/recomendadas"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Recomendadas
            </Link>

            <Link
              href="/herramientas-gratuitas"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700"
            >
              Herramientas gratis
            </Link>

          </nav>
        </div>
      )}
    </div>
  );
}