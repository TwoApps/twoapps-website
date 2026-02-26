import { getBookingUrl } from "@/lib/site-config";

import { BackgroundLayer } from "@/components/site/background-layer";
import { Footer } from "@/components/site/footer";
import { FloatingNav } from "@/components/site/floating-nav";
import { LogoPreloader } from "@/components/site/logo-preloader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const bookingHref = getBookingUrl() ?? "/book";

  return (
    <>
      <LogoPreloader />
      <BackgroundLayer />
      <FloatingNav bookingHref={bookingHref} />
      <main className="pt-16 sm:pt-20">{children}</main>
      <Footer />
    </>
  );
}
