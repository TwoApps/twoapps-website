import { HomeCta } from "./cta";
import { HomeHero } from "./hero";
import { HomeMarquee } from "./marquee";
import { HomeProcess } from "./process";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { ScrollReveal } from "./scroll-reveal";
import { HomeStats } from "./stats";
import { HomeTracks } from "./tracks";

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
      <HomeCta bookingHref={bookingHref} />
    </div>
  );
}
