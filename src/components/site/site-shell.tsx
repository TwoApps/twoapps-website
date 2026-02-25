import { getBookingUrl } from "@/lib/site-config";

import { BackgroundLayer } from "@/components/site/background-layer";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const bookingHref = getBookingUrl() ?? "/book";

  return (
    <>
      <BackgroundLayer />
      <Header bookingHref={bookingHref} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
