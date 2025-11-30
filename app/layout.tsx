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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-NQZLVNCPL3`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NQZLVNCPL3');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
