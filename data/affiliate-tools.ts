export type AffiliateTool = {
  slug: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  commission: string;
  cookie: string;
  website: string;
  affiliateUrl: string;
  logo?: string;
  featured: boolean;
};

export const affiliateTools: AffiliateTool[] = [
  {
    slug: "semrush",
    name: "Semrush",
    category: "SEO y marketing",
    description:
      "Plataforma de SEO, visibilidad en buscadores y marketing digital con herramientas para analizar palabras clave, competencia y presencia online.",
    shortDescription:
      "SEO, palabras clave, competencia y visibilidad online.",
    commission:
      "Hasta $450 por determinadas ventas según el nivel del partner.",
    cookie: "120 días",
    website: "https://www.semrush.com/",
    affiliateUrl: "",
    featured: true,
  },

  {
    slug: "hostinger",
    name: "Hostinger",
    category: "Web y hosting",
    description:
      "Servicio de hosting y creación de páginas web pensado para usuarios, proyectos personales, empresas y creadores.",
    shortDescription:
      "Hosting y herramientas para crear páginas web.",
    commission:
      "Desde el 40% por venta elegible, con posibilidad de aumentar según rendimiento.",
    cookie: "Hasta 30 días",
    website: "https://www.hostinger.com/",
    affiliateUrl: "",
    featured: true,
  },

  {
    slug: "writesonic",
    name: "Writesonic",
    category: "IA y creación de contenido",
    description:
      "Plataforma de inteligencia artificial para crear contenido, textos, artículos y recursos para marketing y SEO.",
    shortDescription:
      "IA para escribir contenido y marketing.",
    commission:
      "20% recurrente durante hasta 12 meses.",
    cookie: "60 días",
    website: "https://writesonic.com/",
    affiliateUrl: "",
    featured: true,
  },
];

export function getAffiliateTool(slug: string) {
  return affiliateTools.find((tool) => tool.slug === slug);
}

export function getFeaturedAffiliateTools() {
  return affiliateTools.filter((tool) => tool.featured);
}