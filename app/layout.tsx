import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* IUBENDA - BANNER DE CONSENTIMIENTO */}
        <Script
          id="iubenda-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {
                "siteId": 4653099,
                "cookiePolicyId": 89189789,
                "lang": "es",
                "storage": {
                  "useSiteId": true
                }
              };
            `,
          }}
        />

        <Script
          src="https://cs.iubenda.com/autoblocking/4653099.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.iubenda.com/cs/gpp/stub.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="beforeInteractive"
          charSet="UTF-8"
        />

        {/* GOOGLE ANALYTICS */}
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
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E1T5Y23QP7');
            `,
          }}
        />

        {/* GOOGLE ADSENSE */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6654030018352582"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-full bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* LOGO */}
            <a
              href="/"
              className="text-2xl font-black tracking-tight"
            >
              Tool<span className="text-blue-600">IA</span>
            </a>

            {/* NAVEGACIÓN */}
            <nav className="hidden items-center gap-7 md:flex">

              <a
                href="/herramientas"
                className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
              >
                Herramientas
              </a>

              <a
                href="/comparativas"
                className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
              >
                Comparativas
              </a>

              <a
                href="/guias"
                className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
              >
                Guías
              </a>

              <a
                href="/herramientas-gratuitas"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Herramientas gratis
              </a>

            </nav>

          </div>
        </header>

        {children}
      </body>
    </html>
  );
}