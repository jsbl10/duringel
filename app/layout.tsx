import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.duringel.com"),
  title: "Duringel - Ingeniería Eléctrica",
  description:
    "Soluciones profesionales en ingeniería eléctrica, diseño y consultoría de proyectos de electrificación",
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Duringel Ingeniería Eléctrica",
  keywords: [
    "Duringel",
    "Duranteel",
    "ingeniería eléctrica",
    "consultoría eléctrica",
    "proyectos eléctricos",
    "diseño eléctrico",
    "empresas eléctricas en Colombia",
  ],
  authors: [{ name: "Duringel Ingeniería Eléctrica" }],
  creator: "Duringel",
  publisher: "Duringel",
  alternates: {
    canonical: "https://www.duringel.com", // cámbialo al dominio real si tienes uno
  },
  openGraph: {
    title: "Duringel - Ingeniería Eléctrica en Colombia",
    description:
      "Soluciones integrales en ingeniería eléctrica, diseño y proyectos eléctricos industriales.",
    url: "https://www.duringel.com",
    siteName: "Duringel Ingeniería Eléctrica",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/projects/Fondo.png",
        width: 1200,
        height: 630,
        alt: "Duringel Ingeniería Eléctrica",
      },
    ],
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
