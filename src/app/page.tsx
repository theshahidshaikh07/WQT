import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-page text-strong">
      <SiteHeader />
      <Hero />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <QuoteSection />
      <FinalCTASection />
      <SiteFooter />
    </div>
  );
}

