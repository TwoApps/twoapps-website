import Link from "next/link";

import { globalPartnerRegions, siteNav } from "@/content";

import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold">Two Apps</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
              Dubai-based agentic AI software house building AI automations, Claude-powered delivery workflows,
              and white-label AI implementation for software agencies.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {globalPartnerRegions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink/70"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-accent-1">Navigation</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded-md hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-accent-2">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>Dubai, UAE</li>
              <li>
                <Link href="/contact" className="focus-ring rounded-md hover:text-ink">
                  Contact form
                </Link>
              </li>
              <li>
                <Link href="/book" className="focus-ring rounded-md hover:text-ink">
                  Book discovery call
                </Link>
              </li>
              <li>
                <a
                  href="https://zainhthegreat.github.io/my_cv_zain/"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-md hover:text-ink"
                >
                  Founder CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Two Apps. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="focus-ring rounded-md hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="focus-ring rounded-md hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
