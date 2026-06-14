import Link from "next/link";

import { siteNav } from "@/content";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/site/logo";

export function Footer() {
  return (
    <footer className="relative bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="focus-ring inline-flex w-fit items-center gap-3 rounded-xl py-1">
              <Logo />
            </Link>
            <p className="max-w-sm text-[14.5px] leading-[1.65] text-ink/55">
              UAE-based AI automation and software delivery partner — helping businesses reduce
              manual work, and helping agencies ship AI projects faster.
            </p>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/38">
              Dubai · GCC · Global delivery
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
              Navigation
            </span>
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring inline-block w-fit rounded-md text-sm text-ink/62 transition-colors hover:text-blue"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
              Contact
            </span>
            <span className="text-sm text-ink/62">Dubai, UAE</span>
            <Link
              href="/contact"
              className="focus-ring inline-block w-fit rounded-md text-sm text-ink/62 transition-colors hover:text-blue"
            >
              Contact form
            </Link>
            <Link
              href="/book"
              className="focus-ring inline-block w-fit rounded-md text-sm text-ink/62 transition-colors hover:text-blue"
            >
              Book discovery call
            </Link>
            <a
              href="https://zainhthegreat.github.io/my_cv_zain/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-block w-fit rounded-md text-sm text-ink/62 transition-colors hover:text-blue"
            >
              Founder CV
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink/12 pt-6 text-sm text-ink/42 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TwoApps. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="focus-ring inline-block rounded-md transition-colors hover:text-ink"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="focus-ring inline-block rounded-md transition-colors hover:text-ink"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
