import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Capabilities, Hero, Process, Products, SelectedWork, ServicesPreview, WhyNexora } from "@/components/sections/HomeSections";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  ...createPageMetadata({
    title:
      "Software Company in Cairo, Egypt | Web Development & Digital Solutions",
    description:
      "Nexora builds custom software, web applications, SaaS products, and websites for businesses in Cairo, Egypt.",
    path: "/",
  }),
  title: {
    absolute:
      "Nexora | Software Company in Cairo, Egypt | Web Development & Digital Solutions",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PageContainer>
          <Hero />
          <Capabilities />
          <ServicesPreview />
          <SelectedWork />
          <Process />
          <Products />
          <WhyNexora />
          <FinalCTA />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
