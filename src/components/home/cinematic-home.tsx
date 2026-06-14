import { HomeCta } from "./cta";
import { HomeHero } from "./hero";
import { HomeMarquee } from "./marquee";
import { HomeProcess } from "./process";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { ScrollReveal } from "./scroll-reveal";
import { HomeStats } from "./stats";
import { HomeTracks } from "./tracks";
import { homeFaq } from "@/content";
import { FaqSection } from "@/components/common/faq-section";

type HomeCinematicExperienceProps = {
  bookingHref: string;
};

export function CinematicHomeExperience({
  bookingHref
}: HomeCinematicExperienceProps) {
  return (
    <div className="relative">
      <ScrollReveal />
      <ScrollBot />
      <HomeHero bookingHref={bookingHref} />
      <HomeMarquee />
      <HomeStats />
      <HomeTracks />
      <HomeProcess />
      <FaqSection
        items={homeFaq}
        eyebrow="FAQ"
        title="Common questions about agentic AI & TwoApps"
        align="center"
      />
      <HomeCta bookingHref={bookingHref} />
    </div>
  );
}
