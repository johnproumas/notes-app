import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-7";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { div, main } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <ContentSection />
      <CallToAction />
      <FooterSection />
    </main>
  );
}
