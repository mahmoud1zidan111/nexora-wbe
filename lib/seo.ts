import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexora-wbe.vercel.app";

const socialImage =
  "https://ik.imagekit.io/gmplak20xa/nexora/Gemini_Generated_Image_3aeekl3aeekl3aee%20(1).jfif";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Nexora`,
      description,
      siteName: "Nexora",
      type: "website",
      locale: "en_US",
      url: path,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${title} | Nexora`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nexora`,
      description,
      images: [socialImage],
    },
  };
}
