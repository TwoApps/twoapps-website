import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { SiteShell } from "@/components/site/site-shell";

const nextSteps = [
  {
    href: "/services",
    title: "Explore services",
    body: "See the AI workflows we build for business and agency teams."
  },
  {
    href: "/work",
    title: "See our work",
    body: "Browse MVPs, internal tools, and AI delivery systems we&rsquo;ve shipped."
  },
  {
    href: "/contact",
    title: "Ask a human",
    body: "Tell us what you&rsquo;re looking for and we&rsquo;ll point you to the right page."
  }
];

export default function NotFound() {
  return (
    <SiteShell>
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center py-16 md:min-h-[70vh] md:py-24">
        <ScrollBot />

        <Container>
          <div
            data-bot-stop="hero"
            data-bot-say="Looks like this page is a dead lead. Let me walk you back to the pipeline." data-bot-short="Let's get you back"
            data-bot-fx="0.5"
          >
            <Card className="mx-auto max-w-3xl px-6 py-10 text-center sm:px-10 sm:py-14 md:px-12 md:py-16">
              <Tag className="mb-5">404 — Page not found</Tag>
              <h1 className="text-balance font-display text-4xl font-semibold leading-[0.95] text-ink sm:text-5xl md:text-6xl">
                Looks like this page took a wrong turn.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
                The link you followed may be outdated, mistyped, or moved. Don&rsquo;t worry — we&rsquo;ll get you back to something useful.
              </p>
              <div
                className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
                data-bot-stop="cta"
                data-bot-say="Home or contact — either way, I'll route you to a real human." data-bot-short="Back to a human"
                data-bot-fx="0.5"
              >
                <Button href="/">Back to homepage</Button>
                <Button href="/contact" variant="secondary">
                  Talk to a human
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-10 md:mt-14">
            <p className="mb-5 text-center text-sm font-medium text-ink/60">
              Or try one of these useful starting points:
            </p>
            <div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              data-bot-stop="next-steps"
              data-bot-say="Services, work, or contact — pick the path that fits your project." data-bot-short="Pick your path"
              data-bot-fx="0.5"
            >
              {nextSteps.map((step) => (
                <Link
                  key={step.href}
                  href={step.href}
                  className="group focus-ring block rounded-[22px]"
                >
                  <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                    <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {step.body}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-1">
                      Go there
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </SiteShell>
  );
}
