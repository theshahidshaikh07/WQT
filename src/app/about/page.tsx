import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AboutUsHero } from "@/components/sections/AboutUsHero";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { WhatWeStandForSection } from "@/components/sections/WhatWeStandForSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-page text-strong">
            <SiteHeader />
            <AboutUsHero />
            <MissionVisionSection />
            <WhatWeStandForSection />
            <CoreValuesSection />
            <LeadershipSection />
            <FinalCTASection />
            <SiteFooter />
        </div>
    );
}
