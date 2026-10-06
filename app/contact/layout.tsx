import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Nexora | Start a Software Project",
  description:
    "Contact Nexora in Cairo, Egypt to discuss a website, web application, custom software, or SaaS project.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
