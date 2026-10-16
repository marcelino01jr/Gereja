import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { InfoCardsSection } from "@/components/sections/InfoCardsSection";
import { UpcomingMassSection } from "@/components/sections/UpcomingMassSection";
import { LatestNewsSection } from "@/components/sections/LatestNewsSection";
import { AnnouncementsSection } from "@/components/sections/AnnouncementsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <InfoCardsSection />
      <UpcomingMassSection />
      <LatestNewsSection />
      <AnnouncementsSection />
    </>
  );
}
