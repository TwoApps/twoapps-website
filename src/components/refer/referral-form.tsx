"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Form state types
export type ReferralFormState = {
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
  "focus-ring w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors hover:border-ink/20 focus:border-blue/30 focus:bg-white";

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
        {required ? <span className="ml-1 text-orange">*</span> : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-red-600" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function ReferralForm() {
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
    if (!values.referrerName.trim()) errors.referrerName = "Please add your name";
    if (!values.referrerEmail.trim()) errors.referrerEmail = "Please add your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.referrerEmail)) {
      errors.referrerEmail = "Please enter a valid email";
    }
    if (!values.referredName.trim()) errors.referredName = "Please add their contact name";
    if (!values.referredEmail.trim()) errors.referredEmail = "Please add their email";
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

  if (submitted) {
    return (
      <div className="space-y-5">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-5">
          <p className="text-sm font-semibold text-emerald-700">Referral sent — thank you.</p>
          <p className="mt-1 text-sm leading-relaxed text-emerald-700/80">
            We&apos;ll reach out to your contact, book their free workflow audit, and let you know
            once their audit is complete. That&apos;s when your credit activates.
          </p>
          {referralCode && (
            <div className="mt-4 rounded-lg border border-ink/10 bg-white p-3">
              <p className="text-xs text-ink/60">Your referral code</p>
              <p className="mt-0.5 font-mono text-lg font-bold text-blue">{referralCode}</p>
            </div>
          )}
        </div>
        <Button onClick={() => setSubmitted(false)} variant="secondary">
          Send another referral
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Your Details Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wider text-ink/80">About you</h3>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          <FormField label="Your name" required error={fieldErrors.referrerName}>
            <input
              className={inputClassName}
              autoComplete="name"
              value={values.referrerName}
              onChange={(e) => update("referrerName", e.target.value)}
              placeholder="e.g. Sarah Chen"
              aria-invalid={Boolean(fieldErrors.referrerName)}
            />
          </FormField>
          <FormField label="Your email" required error={fieldErrors.referrerEmail}>
            <input
              className={inputClassName}
              autoComplete="email"
              type="email"
              value={values.referrerEmail}
              onChange={(e) => update("referrerEmail", e.target.value)}
              placeholder="sarah@company.com"
              aria-invalid={Boolean(fieldErrors.referrerEmail)}
            />
          </FormField>
        </div>
        <FormField label="Your company">
          <input
            className={inputClassName}
            autoComplete="organization"
            value={values.referrerCompany}
            onChange={(e) => update("referrerCompany", e.target.value)}
            placeholder="e.g. Acme Operations"
          />
        </FormField>
      </div>

      {/* Their Details Section */}
      <div className="space-y-4 border-t border-ink/10 pt-4">
        <h3 className="text-sm font-medium uppercase tracking-wider text-ink/80">
          Who you&apos;re referring
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          <FormField label="Their name" required error={fieldErrors.referredName}>
            <input
              className={inputClassName}
              autoComplete="off"
              value={values.referredName}
              onChange={(e) => update("referredName", e.target.value)}
              placeholder="e.g. John Doe"
              aria-invalid={Boolean(fieldErrors.referredName)}
            />
          </FormField>
          <FormField label="Their email" required error={fieldErrors.referredEmail}>
            <input
              className={inputClassName}
              autoComplete="off"
              type="email"
              value={values.referredEmail}
              onChange={(e) => update("referredEmail", e.target.value)}
              placeholder="john@business.com"
              aria-invalid={Boolean(fieldErrors.referredEmail)}
            />
          </FormField>
        </div>
        <FormField label="Their company">
          <input
            className={inputClassName}
            value={values.referredCompany}
            onChange={(e) => update("referredCompany", e.target.value)}
            placeholder="e.g. Horizon Logistics"
          />
        </FormField>
        <FormField label="Why they&apos;re a good fit (optional)">
          <textarea
            className={cn(inputClassName, "min-h-32 resize-y sm:min-h-36")}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us a little about their business and what they might need help with..."
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
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? "Sending..." : "Send referral"}
        </Button>
        <p className="text-xs text-ink/60">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="underline hover:text-ink">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
