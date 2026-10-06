import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Software Projects & Web Applications",
  description:
    "Explore selected web applications, digital products, and software projects built by Nexora.",
  path: "/work",
});

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
