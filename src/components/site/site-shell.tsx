import { getBookingUrl } from "@/lib/site-config";

import { BackgroundLayer } from "@/components/site/background-layer";
import { Footer } from "@/components/site/footer";
import { FloatingNav } from "@/components/site/floating-nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const bookingHref = getBookingUrl() ?? "/book";

  return (
    <>
      <BackgroundLayer />
      <FloatingNav bookingHref={bookingHref} />
      <main className="pt-20 sm:pt-24">{children}</main>
      <Footer />
    </>
  );
}
