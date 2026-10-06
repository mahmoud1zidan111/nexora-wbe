import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter, Cairo } from "next/font/google";

import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { NexoraBackground } from "@/components/visual/NexoraBackground";
import { ScrollMotion } from "@/components/visual/ScrollMotion";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexora",
    url: siteUrl,
    logo: "https://res.cloudinary.com/dricl4jwn/image/upload/v1790389289/layer-3d-letter-n-logo_toqni0.png",
    description:
      "Nexora is a software company in Cairo, Egypt building web development, custom software, SaaS solutions, business systems, and digital transformation services.",
    areaServed: ["Cairo, Egypt", "Egypt", "Worldwide"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nozha",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    sameAs: [],
    knowsAbout: [
      "Website design and development",
      "Custom software development",
      "Web application development",
      "SaaS development",
      "Business automation",
      "Digital transformation",
      "Frontend development",
      "Backend development",
      "UI/UX implementation",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nexora",
    image:
      "https://ik.imagekit.io/gmplak20xa/nexora/Gemini_Generated_Image_3aeekl3aeekl3aee%20(1).jfif",
    description:
      "Nexora provides professional software development, web design, full-stack development, digital solutions, and custom business systems from Cairo, Egypt.",
    areaServed: "Cairo, Egypt",
    provider: {
      "@type": "Organization",
      name: "Nexora",
    },
    keyword:
      "software company in Cairo, web development company in Egypt, custom software development, SaaS development, digital solutions",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexora",
    url: siteUrl,
    description:
      "Nexora builds premium software, web platforms, and digital products for businesses in Cairo, Egypt and international clients.",
    inLanguage: ["en", "ar"],
    publisher: {
      "@type": "Organization",
      name: "Nexora",
    },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Nexora",
  publisher: "Nexora",
  authors: [{ name: "Nexora" }],
  creator: "Nexora",
  title: {
    default:
      "Nexora | Software Company in Cairo, Egypt | Web Development & Digital Solutions",
    template: "%s | Nexora",
  },
  icons: {
    icon: "https://res.cloudinary.com/dricl4jwn/image/upload/v1790389289/layer-3d-letter-n-logo_toqni0.png",
  },
  description:
    "Nexora is a software company in Cairo, Egypt delivering custom software, web application development, SaaS products, website design, and digital transformation solutions.",
  keywords: [
    "Nexora",
    "software company in Cairo",
    "software development company in Cairo",
    "web development company in Cairo",
    "web design company in Cairo",
    "custom software development",
    "web application development",
    "SaaS development",
    "business software",
    "digital transformation",
    "website development in Egypt",
    "شركة برمجة في القاهرة",
    "شركة تصميم مواقع في مصر",
    "تطوير مواقع",
    "حلول برمجية",
    "حلول رقمية",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    title:
      "Nexora | Software Company in Cairo, Egypt | Web Development & Digital Solutions",
    description:
      "Nexora builds custom software, scalable web platforms, SaaS products, and digital transformation systems for businesses in Cairo, Egypt and beyond.",
    siteName: "Nexora",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG", "en_EG"],
    url: "/",
    images: [
      {
        url: "https://ik.imagekit.io/gmplak20xa/nexora/Gemini_Generated_Image_3aeekl3aeekl3aee%20(1).jfif",
        width: 1200,
        height: 630,
        alt: "Nexora software company in Cairo, Egypt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nexora | Software Company in Cairo, Egypt | Web Development & Digital Solutions",
    description:
      "Nexora designs and builds custom software, web applications, and digital systems for modern businesses in Cairo, Egypt.",
    images: [
      "https://ik.imagekit.io/gmplak20xa/nexora/Gemini_Generated_Image_3aeekl3aeekl3aee%20(1).jfif",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${cairo.variable}`}
      >
        <NexoraBackground />
        <ScrollMotion />
        <div className="site-content">
          <LanguageProvider>{children}</LanguageProvider>
        </div>
        <Script
          id="nexora-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
