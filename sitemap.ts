import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thetoolia.com",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/herramientas",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/herramientas-gratuitas",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/herramientas/chatgpt",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/herramientas/claude",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/herramientas/gemini",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/guias",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/comparativas",
      lastModified: new Date(),
    },
    {
      url: "https://thetoolia.com/mejores-ia-para-estudiar",
      lastModified: new Date(),
    },
  ];
}