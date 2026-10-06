import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Smart Cafe | Cafe Ordering & Operations Platform",
  description:
    "Discover Smart Cafe by Nexora, a cafe ordering and operations platform for order flow, kitchen coordination, and day-to-day cafe management.",
  path: "/products/smart-cafe",
});

export default function SmartCafeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
