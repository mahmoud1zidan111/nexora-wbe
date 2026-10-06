import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Cairo } from "next/font/google";

import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "Nexora | Software Engineering & Digital Solutions Company",
    template: "%s | Nexora",
  },

  icons: {
    icon: "https://res.cloudinary.com/dricl4jwn/image/upload/v1790389289/layer-3d-letter-n-logo_toqni0.png",
  },

  description:
    "Nexora is a software engineering and digital solutions company building resilient web platforms, custom software, and scalable products.",

  openGraph: {
    title: "Nexora | Software Engineering & Digital Solutions Company",
    description:
      "Nexora is a software engineering and digital solutions company building resilient web platforms, custom software, and scalable products.",
    siteName: "Nexora",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/gmplak20xa/nexora/Gemini_Generated_Image_3aeekl3aeekl3aee%20(1).jfif",
        width: 1200,
        height: 630,
        alt: "Nexora | Software Engineering & Digital Solutions Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexora | Software Engineering & Digital Solutions Company",
    description:
      "Nexora is a software engineering and digital solutions company building resilient web platforms, custom software, and scalable products.",
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
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${cairo.variable}`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
