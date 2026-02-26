"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteNav } from "@/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function FloatingNav({ bookingHref }: { bookingHref: string }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
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
        <div className="mx-auto mt-3 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="nav-shell relative flex items-center justify-between rounded-2xl px-3 py-2 sm:px-4">
            <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-xl px-2 py-2">
              <img src="/twoapps-logo-mark.svg" alt="" className="h-8 w-auto shrink-0 sm:h-9" />
              <span className="hidden sm:block">
                <span className="block font-display text-lg font-semibold leading-none">TwoApps</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-accent-1/70">
                  UAE-based | Global delivery
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
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
                      "focus-ring rounded-full px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-accent-1/12 text-accent-1 shadow-[inset_0_0_0_1px_rgba(0,228,212,.2)]"
                        : "text-ink/70 hover:bg-white/5 hover:text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button href="/contact" variant="secondary" size="sm" className="hidden md:inline-flex">
                Contact
              </Button>
              <Button href={bookingHref} size="sm">
                Book Call
              </Button>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 xl:hidden"
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
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#030507]/92 backdrop-blur-xl transition-opacity xl:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-black/50 p-4 shadow-[0_0_0_1px_rgba(0,228,212,.06),0_20px_80px_rgba(0,0,0,.45)]">
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
                      "focus-ring rounded-2xl px-4 py-3 text-base",
                      active ? "bg-accent-1/12 text-accent-1" : "bg-white/5 text-ink/85"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
