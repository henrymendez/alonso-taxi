import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxi Alonso Méndez -  Nº5 | Taxi en Ramirás, Celanova y Ourense | Servicio 24h",
  description: "Taxi profesional en Ramirás, Celanova y Ourense. Servicio 24 horas, viajes al aeropuerto (O Porto, Vigo, Santiago), transporte local e interprovincial. Taxi Alonso Méndez Nº5 - Tu taxi de confianza en Galicia.",
  keywords: [
    "taxi Ramirás",
    "taxi Celanova",
    "taxi Ourense",
    "taxi 24 horas",
    "Taxi Alonso Méndez",
  ],
  authors: [{ name: "Taxi Alonso Méndez Nº5" }],
  creator: "Taxi Alonso Méndez - Nº5",
  publisher: "Taxi Alonso Méndez Nº5",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://alonso.taxi"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Taxi Alonso Méndez Nº5 | Taxi en Ramirás, Celanova y Ourense",
    description: "Taxi profesional en Ramirás, Celanova y Ourense. Servicio 24 horas, viajes al aeropuerto, transporte local e interprovincial.",
    url: "https://alonso.taxi",
    siteName: "Taxi Alonso Méndez Nº5",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WK7LGZWW');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WK7LGZWW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
