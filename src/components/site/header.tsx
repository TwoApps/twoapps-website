"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteNav } from "@/content";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export function Header({ bookingHref }: { bookingHref: string }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-3 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel gradient-stroke relative rounded-2xl px-3 py-2 sm:px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-xl px-2 py-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-1/80 via-accent-3/70 to-accent-2/80 text-sm font-semibold text-paper shadow-glow">
                TA
              </span>
              <span className="hidden sm:block">
                <span className="block font-display text-lg font-semibold leading-none">TwoApps</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  UAE-based | Global delivery
                </span>
              </span>
            </Link>
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
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
                      active ? "bg-white/10 text-ink" : "text-ink/70 hover:text-ink hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <Button href="/contact" variant="secondary" size="sm" className="hidden sm:inline-flex">
                Contact
              </Button>
              <Button href={bookingHref} size="sm">
                Book Call
              </Button>
            </div>
          </div>
          <nav
            className="-mx-1 mt-2 flex gap-1 overflow-x-auto px-1 pb-1 lg:hidden"
            aria-label="Mobile primary"
          >
            {siteNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  className={cn(
                    "focus-ring shrink-0 rounded-full px-3 py-2 text-xs transition-colors",
                    active ? "bg-white/10 text-ink" : "text-ink/70 hover:text-ink hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
