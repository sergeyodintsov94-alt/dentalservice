import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

import { SITE_URL, siteConfig } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: siteConfig.name,
  title: {
    default: "Премиальная стоматология в Усть-Каменогорске",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "стоматология Усть-Каменогорск",
    "премиальная стоматология",
    "имплантация зубов",
    "протезирование зубов",
    "ортодонтия",
    "эстетическая стоматология",
    "лечение зубов",
    "диагностика зубов",
    "стоматолог Усть-Каменогорск",
  ],
  alternates: {
    canonical: "/",
  },
  category: "healthcare",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Премиальная стоматология в Усть-Каменогорске",
    description:
      "Современное лечение, эстетика улыбки и забота о пациенте на каждом этапе в Dental Service Premium.",
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dental Service Premium — премиальная стоматология в Усть-Каменогорске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Премиальная стоматология в Усть-Каменогорске",
    description:
      "Современное лечение, эстетика улыбки и премиальный сервис в Dental Service Premium.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2eb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${playfair.variable} bg-ivory text-coffee antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
