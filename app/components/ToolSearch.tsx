"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

export default function ToolSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return [];
    }

    return tools.filter((tool) => {
      const text = [
        tool.name,
        tool.description,
        tool.category,
        ...(tool.features || []),
        ...(tool.useCases || []),
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(search);
    });
  }, [query]);

  return (
    <div className="mx-auto mt-14 max-w-3xl">
      <div className="rounded-2xl border bg-slate-50 p-3">
        <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
          <span className="text-xl">🔎</span>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="¿Qué herramienta estás buscando?"
            className="w-full bg-transparent outline-none"
          />
        </div>

        {query.trim() && (
          <div className="mt-3 overflow-hidden rounded-xl border bg-white text-left shadow-sm">
            {results.length > 0 ? (
              <div className="divide-y">
                {results.slice(0, 8).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/herramientas/${tool.slug}`}
                    className="block p-4 transition hover:bg-blue-50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold">{tool.name}</p>

                        <p className="mt-1 text-sm text-slate-500">
                          {tool.description}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                        {tool.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center">
                <p className="font-bold">
                  No hemos encontrado herramientas
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Prueba con otra búsqueda como "vídeo", "estudiar",
                  "escribir" o "imágenes".
                </p>
              </div>
            )}

            {results.length > 8 && (
              <div className="border-t bg-slate-50 p-4 text-center">
                <Link
                  href="/herramientas"
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  Ver todas las herramientas →
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}