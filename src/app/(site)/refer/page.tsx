"use client";

import { useState } from "react";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

// Metadata for SEO
export const metadata = buildMetadata({
  title: "Referral Program | Get $500 Credit",
  description:
    "Refer a business to TwoApps and you both win. You get $500 credit toward your next project, they get a free $2,000 workflow audit. No limits on referrals.",
  canonicalPath: "/refer",
  keywords: [
    "twoapps referral program",
    "ai automation referral",
    "workflow audit free",
    "business referral credit"
  ],
  ogImage: "/og-default.svg"
});

// Form state types
type ReferralFormState = {
  referrerName: string;
  referrerEmail: string;
  referrerCompany: string;
  referredName: string;
  referredEmail: string;
  referredCompany: string;
  message: string;
  honeypot: string;
};

type FieldErrors = Partial<Record<keyof ReferralFormState, string>>;

const initialState: ReferralFormState = {
  referrerName: "",
  referrerEmail: "",
  referrerCompany: "",
  referredName: "",
  referredEmail: "",
  referredCompany: "",
  message: "",
  honeypot: ""
};

const inputClassName =
  "focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink/40";

// Referral benefits data
const benefits = [
  {
    title: "For You",
    value: "$500",
    description: "Credit toward your next AI workflow project",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "For Them",
    value: "$2,000",
    description: "Free workflow audit to identify automation opportunities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "No Limits",
    value: "∞",
    description: "Refer as many businesses as you want. Stack your credits.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

// How it works steps
const steps = [
  {
    number: "01",
    title: "Share",
    description: "Submit the referral form with your details and the business you're recommending."
  },
  {
    number: "02",
    title: "They Book",
    description: "Your referral books their free workflow audit ($2,000 value)."
  },
  {
    number: "03",
    title: "You Both Win",
    description: "Once they complete their audit, you get $500 credit. They get automation insights."
  }
];

function FormField({
  label,
  error,
  className,
  required,
  children
}: {
  label: string;
  error?: string;
  className?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-sm font-medium text-ink/90">
        {label}
        {required ? <span className="ml-1 text-accent-2">*</span> : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-red-300" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export default function ReferralPage() {
  const [values, setValues] = useState<ReferralFormState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  function update<K extends keyof ReferralFormState>(key: K, value: ReferralFormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setSubmitted(false);
    setFieldErrors({});

    // Basic validation
    const errors: FieldErrors = {};
    if (!values.referrerName.trim()) errors.referrerName = "Your name is required";
    if (!values.referrerEmail.trim()) errors.referrerEmail = "Your email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.referrerEmail)) {
      errors.referrerEmail = "Please enter a valid email";
    }
    if (!values.referredName.trim()) errors.referredName = "Contact name is required";
    if (!values.referredEmail.trim()) errors.referredEmail = "Contact email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.referredEmail)) {
      errors.referredEmail = "Please enter a valid email";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    // Spam check
    if (values.honeypot) {
      setSubmitError("Spam detected.");
      return;
    }

    setFieldErrors({});
    setIsPending(true);

    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setSubmitError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setReferralCode(result.referralCode || null);
      setValues(initialState);

      // Track with Plausible if available
      if (typeof window !== "undefined" && window.plausible) {
        window.plausible("Referral Submitted");
      }
    } catch {
      setSubmitError("Unable to submit right now. Please try again in a moment.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Referral Program"
        title="Share AI automation. You both win."
        description="Refer a business to TwoApps. You get $500 credit toward your next project. They get a free $2,000 workflow audit. No limits on referrals."
        chips={["$500 for you", "$2,000 audit for them", "Unlimited referrals"]}
      />

      {/* Benefits Section */}
      <Section className="pt-10">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-1/10 text-accent-1">
                {benefit.icon}
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-ink/60 mb-1">
                {benefit.title}
              </p>
              <p className="text-3xl font-semibold text-ink mb-2">{benefit.value}</p>
              <p className="text-sm text-ink/70">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="pt-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-ink mb-2">How It Works</h2>
          <p className="text-ink/70">Three simple steps to earn credits</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-accent-1/30 to-transparent" />
              )}
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-1/10 border border-accent-1/20">
                  <span className="text-xl font-bold text-accent-1">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Referral Form */}
      <Section className="pt-10 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink mb-1">Submit a Referral</h2>
            <p className="text-sm text-ink/70 mb-6">
              Know a business that could benefit from AI automation? Connect them with us.
            </p>

            {submitted ? (
              <div className="space-y-4">
                <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-4">
                  <p className="text-sm text-emerald-200 font-medium mb-1">Referral submitted successfully!</p>
                  <p className="text-sm text-emerald-200/80">
                    We'll reach out to your contact. Once they complete their free workflow audit, 
                    your $500 credit will be activated.
                  </p>
                  {referralCode && (
                    <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-xs text-ink/60 mb-1">Your referral code:</p>
                      <p className="text-lg font-mono font-bold text-accent-1">{referralCode}</p>
                    </div>
                  )}
                </div>
                <Button onClick={() => setSubmitted(false)} variant="secondary">
                  Submit another referral
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Your Details Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-ink/80 uppercase tracking-wider">Your Details</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <FormField label="Your Name" required error={fieldErrors.referrerName}>
                      <input
                        className={inputClassName}
                        value={values.referrerName}
                        onChange={(e) => update("referrerName", e.target.value)}
                        placeholder="Jane Smith"
                      />
                    </FormField>
                    <FormField label="Your Email" required error={fieldErrors.referrerEmail}>
                      <input
                        className={inputClassName}
                        type="email"
                        value={values.referrerEmail}
                        onChange={(e) => update("referrerEmail", e.target.value)}
                        placeholder="jane@company.com"
                      />
                    </FormField>
                  </div>
                  <FormField label="Your Company">
                    <input
                      className={inputClassName}
                      value={values.referrerCompany}
                      onChange={(e) => update("referrerCompany", e.target.value)}
                      placeholder="Acme Inc."
                    />
                  </FormField>
                </div>

                {/* Their Details Section */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h3 className="text-sm font-medium text-ink/80 uppercase tracking-wider">Who You're Referring</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <FormField label="Contact Name" required error={fieldErrors.referredName}>
                      <input
                        className={inputClassName}
                        value={values.referredName}
                        onChange={(e) => update("referredName", e.target.value)}
                        placeholder="John Doe"
                      />
                    </FormField>
                    <FormField label="Contact Email" required error={fieldErrors.referredEmail}>
                      <input
                        className={inputClassName}
                        type="email"
                        value={values.referredEmail}
                        onChange={(e) => update("referredEmail", e.target.value)}
                        placeholder="john@business.com"
                      />
                    </FormField>
                  </div>
                  <FormField label="Company">
                    <input
                      className={inputClassName}
                      value={values.referredCompany}
                      onChange={(e) => update("referredCompany", e.target.value)}
                      placeholder="Their Company"
                    />
                  </FormField>
                  <FormField label="Why you're referring them (optional)">
                    <textarea
                      className={cn(inputClassName, "min-h-24 resize-y")}
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about their business and what they might need help with..."
                    />
                  </FormField>
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden>
                  <label>
                    Leave this field empty
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.honeypot}
                      onChange={(e) => update("honeypot", e.target.value)}
                    />
                  </label>
                </div>

                {submitError && (
                  <p className="rounded-xl border border-red-300/20 bg-red-300/10 px-4 py-3 text-sm text-red-200" role="alert">
                    {submitError}
                  </p>
                )}

                <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                  {isPending ? "Submitting..." : "Submit Referral"}
                </Button>
              </form>
            )}
          </Card>

          {/* Sidebar Info */}
          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="text-sm font-medium text-ink mb-3">FAQ</h3>
              <div className="space-y-4 text-sm text-ink/75">
                <div>
                  <p className="font-medium text-ink mb-1">When do I get my credit?</p>
                  <p>Once your referral completes their free workflow audit, your $500 credit is activated immediately.</p>
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">Can I stack credits?</p>
                  <p>Yes! Refer multiple businesses and combine credits for larger projects.</p>
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">How long are credits valid?</p>
                  <p>Credits are valid for 12 months from the date they're earned.</p>
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">What if they're already a client?</p>
                  <p>Referrals must be new to TwoApps. Existing clients don't qualify, but we appreciate the thought!</p>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="text-sm font-medium text-ink mb-3">Questions?</h3>
              <p className="text-sm text-ink/75 mb-3">
                Reach out to our team for clarification on the referral program.
              </p>
              <a
                href="mailto:team@twoapps.com"
                className="text-sm text-accent-1 hover:text-accent-1/80 transition-colors"
              >
                team@twoapps.com
              </a>
            </Card>

            <Card className="p-5 border-accent-1/20">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-1/10 flex items-center justify-center text-accent-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Free Workflow Audit</p>
                  <p className="text-xs text-ink/60 mt-1">
                    Your referral gets a $2,000 value assessment to identify their biggest automation opportunities.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
