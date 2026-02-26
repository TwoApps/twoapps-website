"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  caseStudies,
  globalPartnerRegions,
  processSteps,
  services
} from "@/content";
import { GlowField } from "@/components/motion/glow-field";
import { LightBeams } from "@/components/motion/light-beams";
import { ParallaxStack } from "@/components/motion/parallax-stack";
import { SceneCaption } from "@/components/motion/scene-caption";
import { SceneViewport } from "@/components/motion/scene-viewport";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";
import { cn } from "@/lib/utils";

type HomeCinematicExperienceProps = {
  bookingHref: string;
};

const pathFrames: StickySceneFrame[] = [
  {
    label: "Businesses",
    headline: "Cut manual work with practical AI workflows",
    subline: "We build AI workflows and internal tools that help your team move faster without hiring a full AI team first."
  },
  {
    label: "Agencies",
    headline: "White-label AI delivery for agencies and software houses",
    subline: "Win AI projects with confidence and keep the client relationship while TwoApps handles implementation behind the scenes."
  }
];

const capabilityFrames: StickySceneFrame[] = services.map((service) => ({
  label: service.title.split(" ").slice(0, 2).join(" "),
  headline: service.title,
  subline: service.tagline
}));

const proofFrames: StickySceneFrame[] = [
  {
    label: "Founder",
    headline: "Founder-led execution helps projects move faster",
    subline: "Hands-on experience across AI workflows, product engineering, and compliance-aware operations supports better scoping and delivery."
  },
  {
    label: "Work",
    headline: "Real delivery patterns, not vague AI promises",
    subline: "Case-style summaries show how work is scoped, built, and rolled out across automation and internal tools."
  },
  {
    label: "Markets",
    headline: "UAE-based, serving businesses and agencies globally",
    subline: "Local access in the UAE plus remote delivery for teams worldwide."
  }
];

const processFrames: StickySceneFrame[] = processSteps.map((step) => ({
  label: step.title,
  headline: step.title,
  subline: step.copy
}));

function useHeroMotion(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let revert = () => {};

    void (async () => {
      const [{ gsap }, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const q = gsap.utils.selector(root);

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          q("[data-hero-in]"),
          { y: 30, opacity: 0, filter: "blur(12px)", scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.95,
            stagger: 0.06
          }
        ).fromTo(
          q("[data-hero-panel]"),
          { y: 64, opacity: 0, rotateX: 14, rotateY: -7, scale: 0.95 },
          { y: 0, opacity: 1, rotateX: 0, rotateY: 0, scale: 1, duration: 1.05 },
          0.1
        );

        gsap.to(q("[data-hero-logo-ghost]"), {
          yPercent: -20,
          xPercent: 8,
          rotate: 10,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.8
          }
        });

        gsap.to(q("[data-hero-floating]"), {
          y: (i: number) => (i % 2 === 0 ? -22 : 18),
          x: (i: number) => (i % 2 === 0 ? 14 : -12),
          rotate: (i: number) => (i % 2 === 0 ? 8 : -8),
          scale: (i: number) => (i % 2 === 0 ? 1.08 : 0.94),
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.12
        });
      }, root);

      revert = () => ctx.revert();
    })();

    return () => revert();
  }, [ref]);
}

function HomeHeroScene({ bookingHref }: { bookingHref: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useHeroMotion(ref);

  return (
    <SceneViewport pad="spacious" className="pt-6 sm:pt-10">
      <div ref={ref} className="relative">
        <div
          data-hero-shell
          className="neon-frame gradient-stroke animate-home-hero-throb relative min-h-[calc(100svh-7rem)] overflow-hidden rounded-[2rem] p-5 sm:p-8 lg:p-10"
        >
          <GlowField intensity="strong" />
          <LightBeams count={15} diagonal className="opacity-60" />
          <div className="noise-overlay" />

          <img
            data-hero-logo-ghost
            src="/twoapps-logo-mark.svg"
            alt=""
            className="pointer-events-none absolute right-[-6%] top-[6%] h-[55%] w-auto opacity-[0.16] blur-[1px] sm:opacity-[0.2]"
          />
          <div
            data-hero-floating
            className="absolute left-[7%] top-[15%] h-28 w-28 rounded-full border border-accent-1/25 bg-accent-1/10 blur-sm"
          />
          <div data-hero-floating className="absolute right-[18%] top-[16%] h-10 w-10 rounded-full bg-accent-1/40 blur-[2px]" />
          <div
            data-hero-floating
            className="absolute right-[14%] bottom-[20%] h-24 w-24 rounded-full border border-accent-2/25 bg-accent-2/10"
          />
          <div data-hero-floating className="absolute left-[18%] bottom-[18%] h-14 w-14 rounded-full bg-accent-3/20 blur-[3px]" />

          <div className="relative grid h-full gap-5 lg:grid-cols-[1fr_0.95fr]">
            <div className="flex flex-col justify-between">
              <div>
                <div data-hero-in className="mb-5 flex flex-wrap gap-2">
                  <Tag>UAE-based</Tag>
                  <Tag>Global delivery</Tag>
                </div>
                <div data-hero-in>
                  <SceneCaption
                    title="AI workflows and white-label delivery that help teams move faster"
                    subline="We help businesses reduce manual work and help agencies deliver AI projects faster with practical implementation support."
                    titleClassName="max-w-4xl text-4xl sm:text-5xl lg:text-7xl"
                  />
                </div>
                <div data-hero-in className="mt-6 flex flex-wrap gap-3">
                  <Button href={bookingHref} size="lg">
                    Book discovery call
                  </Button>
                  <Button href="/contact" variant="secondary" size="lg">
                    Start a conversation
                  </Button>
                </div>
              </div>

              <div data-hero-in className="mt-8 flex flex-wrap items-center gap-2 text-xs text-ink/55 sm:text-sm">
                <span className="font-mono uppercase tracking-[0.18em]">Choose a path</span>
                <Link
                  href="/services"
                  className="focus-ring rounded-full border border-white/10 px-3 py-1.5 hover:border-accent-1/20 hover:bg-accent-1/5"
                >
                  For Businesses
                </Link>
                <Link
                  href="/agency-partners"
                  className="focus-ring rounded-full border border-white/10 px-3 py-1.5 hover:border-accent-1/20 hover:bg-accent-1/5"
                >
                  For Agencies
                </Link>
              </div>
            </div>

            <div data-hero-panel className="relative flex items-end lg:items-center">
              <ParallaxStack className="group relative w-full [perspective:900px]">
                <div className="parallax-card-layer absolute inset-6 rounded-3xl border border-accent-1/10 bg-accent-1/[0.03] blur-sm" />
                <Card className="parallax-card relative overflow-hidden p-5 sm:p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(82,255,239,.08),transparent_55%)]" />
                  <div className="relative">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-1/80">
                      Two Delivery Tracks
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                        <p className="text-sm font-semibold text-ink">Businesses</p>
                        <p className="mt-1 text-sm text-ink/65">AI workflows and internal tools that reduce manual work</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                        <p className="text-sm font-semibold text-ink">Agencies / Software Houses</p>
                        <p className="mt-1 text-sm text-ink/65">White-label AI implementation and extra delivery capacity</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Base</p>
                        <p className="mt-1 text-ink">UAE</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Style</p>
                        <p className="mt-1 text-ink">Practical + Fast</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ParallaxStack>
            </div>
          </div>
        </div>
      </div>
    </SceneViewport>
  );
}

function HomePathScene() {
  return (
    <StickyScene
      eyebrow="Paths"
      frames={pathFrames}
      heightMultiplier={2.4}
      visual={
        <StackedVisualCards
          items={[
            {
              title: "Business Delivery",
              body: "Reduce repetitive work with AI workflows and internal tools your team can actually use day to day.",
              meta: ["Save time", "Internal tools", "AI workflows"]
            },
            {
              title: "Agency Partnership",
              body: "Deliver AI projects with a white-label implementation partner while your team keeps client ownership.",
              meta: ["White-label", "Delivery support", "Capacity"]
            }
          ]}
        />
      }
    />
  );
}

function HomeCapabilityScene() {
  return (
    <StickyScene
      eyebrow="Capabilities"
      frames={capabilityFrames}
      heightMultiplier={3.2}
      visual={
        <StackedVisualCards
          items={services.map((service) => ({
            title: service.title,
            body: service.summary,
            meta: [service.audiences.includes("business") ? "Business" : "Agency", "Production-ready"]
          }))}
        />
      }
    />
  );
}

function HomeProofMarketScene() {
  return (
    <StickyScene
      eyebrow="Proof & Reach"
      frames={proofFrames}
      heightMultiplier={3}
      visual={
        <div data-scene-visual-root className="relative h-full min-h-[420px]">
          <Card data-scene-visual-card className="absolute inset-x-0 top-0 z-30 p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-1/80">Founder Proof</p>
            <p className="mt-3 font-display text-2xl font-semibold">Hands-on build and delivery experience</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Claude / Claude Code workflows",
                "Flutter + AWS delivery",
                "AML / KYC process fit",
                "AI tools + internal dashboards"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card data-scene-visual-card className="absolute inset-x-4 top-8 z-20 p-5 sm:inset-x-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-1/80">Work Patterns</p>
            <div className="mt-4 space-y-3">
              {caseStudies.slice(0, 2).map((item) => (
                <div key={item.slug} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="font-display text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-ink/65">{item.outcomes[0]}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card data-scene-visual-card className="absolute inset-x-6 top-16 z-10 p-5 sm:inset-x-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-1/80">Regions</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.015] p-4">
              <p className="text-sm text-ink/70">UAE-based, serving clients globally</p>
              <p className="mt-2 text-xs text-ink/60">Partner demand is especially strong in:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {globalPartnerRegions.map((region) => (
                  <span key={region} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink/70">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      }
    />
  );
}

function HomeProcessScene({ bookingHref }: { bookingHref: string }) {
  return (
    <StickyScene
      eyebrow="Process"
      frames={processFrames}
      heightMultiplier={3.2}
      visual={
        <div data-scene-visual-root className="relative h-full min-h-[420px]">
          {processSteps.map((step, index) => (
            <Card
              key={step.title}
              data-scene-visual-card
              className={cn(
                "absolute inset-x-4 top-4 p-5 sm:inset-x-6",
                index === processSteps.length - 1 && "before:opacity-100"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-accent-1/15 bg-accent-1/[0.05] font-display text-lg text-accent-1">
                  {index + 1}
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/68">{step.copy}</p>
                  {index === processSteps.length - 1 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button href={bookingHref} size="sm">
                        Book discovery call
                      </Button>
                      <Button href="/contact" variant="secondary" size="sm">
                        Contact
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      }
    />
  );
}

export function CinematicHomeExperience({ bookingHref }: HomeCinematicExperienceProps) {
  return (
    <div className="relative" data-homepage-motion-shell>
      <div
        aria-hidden
        className="home-hue-overlay pointer-events-none fixed inset-0 -z-[9] opacity-70 animate-home-hue-cycle"
      />
      <HomeHeroScene bookingHref={bookingHref} />
      <HomePathScene />
      <HomeCapabilityScene />
      <HomeProofMarketScene />
      <HomeProcessScene bookingHref={bookingHref} />
      <SceneViewport pad="spacious" className="pt-6">
        <div className="neon-frame gradient-stroke relative overflow-hidden rounded-[1.75rem] p-7 sm:p-10 lg:p-12">
          <GlowField intensity="soft" />
          <LightBeams count={7} className="opacity-35" />
          <div className="noise-overlay" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SceneCaption
                eyebrow="Start Small"
                title="One workflow. One pilot. Then scale."
                subline="The fastest way to prove value is a focused pilot with a clear owner, a clear goal, and a measurable result."
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={bookingHref}>Book discovery call</Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </SceneViewport>
    </div>
  );
}
