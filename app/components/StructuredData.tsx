export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://thetoolia.com/#website",
        url: "https://thetoolia.com",
        name: "ToolIA",
        description:
          "Descubre las mejores herramientas de inteligencia artificial, productividad y tecnología en ToolIA.",
        inLanguage: "es-ES",
      },
      {
        "@type": "Organization",
        "@id": "https://thetoolia.com/#organization",
        name: "ToolIA",
        url: "https://thetoolia.com",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}