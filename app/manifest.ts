import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ToolIA",
    short_name: "ToolIA",
    description:
      "Descubre herramientas de inteligencia artificial, productividad y tecnología.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    lang: "es",
  };
}