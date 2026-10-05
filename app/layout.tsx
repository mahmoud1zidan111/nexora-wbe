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
  description:
    "Nexora is a software engineering and digital solutions company building resilient web platforms, custom software, and scalable products.",
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
