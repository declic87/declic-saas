import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DÉCLIC Entrepreneurs | Payez moins d'impôts. Légalement.",
  description:
    "Accompagnement fiscal pour micro-entrepreneurs, auto-entrepreneurs, TPE et PME. Optimisez vos charges URSSAF et gardez plus de ce que vous gagnez. Diagnostic gratuit.",
  keywords: [
    "micro-entreprise",
    "micro-entrepreneur",
    "auto-entrepreneur",
    "TPE",
    "PME",
    "optimisation fiscale",
    "URSSAF",
    "charges sociales",
    "SASU",
    "EURL",
    "impôts",
  ],
  authors: [{ name: "EVERYBOD'IR" }],
  creator: "DÉCLIC Entrepreneurs",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://declic-entrepreneurs.fr",
    siteName: "DÉCLIC Entrepreneurs",
    title: "DÉCLIC Entrepreneurs | Payez moins d'impôts. Légalement.",
    description:
      "Accompagnement fiscal personnalisé pour entrepreneurs. Diagnostic gratuit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DÉCLIC Entrepreneurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DÉCLIC Entrepreneurs | Optimisation fiscale",
    description:
      "Accompagnement fiscal personnalisé pour entrepreneurs. Diagnostic gratuit.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
