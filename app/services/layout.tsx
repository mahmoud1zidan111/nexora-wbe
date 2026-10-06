import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Web Development & Custom Software Services in Cairo",
  description:
    "Explore Nexora's web development, web application, custom software, and SaaS development services for businesses in Cairo and Egypt.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
