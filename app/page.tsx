import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Capabilities, Hero, Process, Products, SelectedWork, ServicesPreview, WhyNexora } from "@/components/sections/HomeSections";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Nexora | Software Engineering & Digital Solutions Company",
  description: "Nexora builds professional websites, web applications, custom software, and scalable digital products with technical precision.",
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
