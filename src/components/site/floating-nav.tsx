"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteNav } from "@/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

export function FloatingNav({ bookingHref }: { bookingHref: string }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 40) {
        setHidden(false);
      } else if (y > lastY + 6) {
        setHidden(true);
      } else if (y < lastY - 6) {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(.2,.9,.2,1)]",
          hidden ? "-translate-y-[115%]" : "translate-y-0"
        )}
      >
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-12">
          <nav
            className={cn(
              "mt-3 flex items-center justify-between rounded-2xl border border-transparent px-3 py-2.5 transition-all duration-400 sm:px-4",
              scrolled
                ? "border-ink/10 bg-cream/80 backdrop-blur-[18px]"
                : "bg-transparent"
            )}
            aria-label="Primary"
          >
            <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-xl px-1 py-1">
              <Logo />
            </Link>

            <div className="hidden items-center gap-8 xl:flex">
              {siteNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "focus-ring rounded-full px-1 py-1 text-[13.5px] font-medium tracking-[0.01em] transition-colors",
                      active ? "text-ink" : "text-ink/58 hover:text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <Button href="/contact" variant="ghost" size="sm" className="hidden md:inline-flex">
                Contact
              </Button>
              <Button href={bookingHref} variant="orange" size="sm" className="hidden sm:inline-flex">
                Book a call
              </Button>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.04] xl:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <span className="relative h-4 w-4">
                  <span
                    className={cn(
                      "absolute left-0 top-[2px] h-px w-4 bg-ink transition",
                      mobileOpen && "top-[7px] rotate-45"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[7px] h-px w-4 bg-ink transition",
                      mobileOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[12px] h-px w-4 bg-ink transition",
                      mobileOpen && "top-[7px] -rotate-45"
                    )}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-cream/96 backdrop-blur-xl transition-opacity xl:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-auto mt-20 max-w-[1320px] px-4 sm:mt-24 sm:px-6">
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl border border-ink/10 bg-white p-4 shadow-[0_18px_60px_rgba(22,21,15,0.10)]">
            <nav className="grid gap-2" aria-label="Mobile primary">
              {siteNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={`m-${item.href}`}
                    href={item.href}
                    className={cn(
                      "focus-ring rounded-2xl px-4 py-3 text-base leading-relaxed transition-colors",
                      active ? "bg-blue/[0.06] text-blue" : "bg-ink/[0.03] text-ink/85"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-ink/10 pt-4">
              <Button href="/contact" variant="secondary" className="w-full">
                Contact
              </Button>
              <Button href={bookingHref} variant="orange" className="w-full">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
