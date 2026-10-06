import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Nexora | Software Engineering in Cairo",
  description:
    "Learn about Nexora, a Cairo-based software engineering company building resilient web platforms, custom software, and digital products.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
