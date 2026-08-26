
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import StructuredData from "./components/StructuredData";
import MobileMenu from "./components/MobileMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetoolia.com"),

  title: {
    default: "ToolIA | Herramientas de Inteligencia Artificial",
    template: "%s | ToolIA",
  },

  description:
    "Descubre las mejores herramientas de inteligencia artificial, productividad y tecnología en ToolIA.",

  keywords: [
    "inteligencia artificial",
    "herramientas IA",
    "ChatGPT",
    "Claude",
    "Gemini",
    "productividad",
    "herramientas gratuitas",
  ],

  alternates: {
    canonical: "https://thetoolia.com",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://thetoolia.com",
    siteName: "ToolIA",
    title: "ToolIA | Herramientas de Inteligencia Artificial",
    description:
      "Descubre las mejores herramientas de inteligencia artificial, productividad y tecnología en ToolIA.",
  },

  twitter: {
    card: "summary_large_image",
    title: "ToolIA | Herramientas de Inteligencia Artificial",
    description:
      "Descubre las mejores herramientas de inteligencia artificial, productividad y tecnología en ToolIA.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "google-adsense-account": "ca-pub-6654030018352582",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlClassName =
    geistSans.variable +
    " " +
    geistMono.variable +
    " h-full antialiased";

  return (
    <html lang="es" className={htmlClassName}>
      <head>
        {/* =========================
            IUBENDA
        ========================== */}

        <Script
          id="iubenda-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _iub = window._iub || [];
              window._iub = _iub;

              _iub.csConfiguration = {
                siteId: 4653099,
                cookiePolicyId: 89189789,
                lang: "es",
                storage: {
                  useSiteId: true
                }
              };
            `,
          }}
        />

        <Script
          id="iubenda-autoblocking"
          src="https://cs.iubenda.com/autoblocking/4653099.js"
          strategy="afterInteractive"
        />

        <Script
          id="iubenda-gpp"
          src="https://cdn.iubenda.com/cs/gpp/stub.js"
          strategy="afterInteractive"
        />

        <Script
          id="iubenda-cs"
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
          charSet="UTF-8"
        />

        {/* =========================
            GOOGLE ANALYTICS
        ========================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E1T5Y23QP7"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              gtag("js", new Date());
              gtag("config", "G-E1T5Y23QP7");
            `,
          }}
        />

        {/* =========================
            GOOGLE ADSENSE
        ========================== */}

        <Script
          id="google-adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6654030018352582"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-full bg-slate-50 text-slate-900">
        <StructuredData />

        {children}
      </body>
    </html>
  );
}