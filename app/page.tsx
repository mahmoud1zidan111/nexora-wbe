import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Capabilities, Hero, Process, Products, SelectedWork, ServicesPreview, WhyNexora } from "@/components/sections/HomeSections";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Nexora | Software Company in Cairo, Egypt | Web Development & Digital Solutions",
  description:
    "Nexora is a software company in Cairo, Egypt building custom software, web applications, SaaS products, website design, and digital transformation solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Nexora | Software Company in Cairo, Egypt | Web Development & Digital Solutions",
    description:
      "Nexora helps businesses launch scalable web platforms, custom software, and digital products with clear technical strategy and reliable delivery.",
    url: "/",
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
