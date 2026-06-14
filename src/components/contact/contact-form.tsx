"use client";

import { startTransition, useState } from "react";

import { services } from "@/content";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type ContactFormProps = {
  sourcePage: string;
  defaultAudience?: "business" | "agency";
};

type FormState = ContactPayload;

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  audience: "business",
  region: "",
  serviceInterest: "",
  message: "",
  sourcePage: "",
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

export function ContactForm({ sourcePage, defaultAudience = "business" }: ContactFormProps) {
  const [values, setValues] = useState<FormState>({
    ...initialState,
    audience: defaultAudience,
    sourcePage
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setSubmitted(false);

    const parsed = contactSchema.safeParse({ ...values, sourcePage });
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      const flattened = parsed.error.flatten().fieldErrors;
      for (const key of Object.keys(flattened) as Array<keyof ContactPayload>) {
        const first = flattened[key]?.[0];
        if (first) nextErrors[key] = first;
      }
      setFieldErrors(nextErrors);
      return;
    }

    setFieldErrors({});
    setIsPending(true);

    startTransition(() => {
      void (async () => {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(parsed.data)
          });

          const result = (await response.json()) as {
            ok: boolean;
            error?: string;
            fieldErrors?: Record<string, string[]>;
          };

          if (!response.ok || !result.ok) {
            if (result.fieldErrors) {
              const nextErrors: FieldErrors = {};
              for (const [key, messages] of Object.entries(result.fieldErrors)) {
                if (messages?.[0]) {
                  nextErrors[key as keyof ContactPayload] = messages[0];
                }
              }
              setFieldErrors(nextErrors);
            }

            setSubmitError(result.error || "Something went wrong. Please try again.");
            return;
          }

          setSubmitted(true);
          setValues({ ...initialState, audience: values.audience, sourcePage });
          if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Lead Form Submitted", {
              props: {
                audience: parsed.data.audience,
                service: parsed.data.serviceInterest || "unspecified"
              }
            });
          }
        } catch {
          setSubmitError("Unable to submit right now. Please try again in a moment.");
        } finally {
          setIsPending(false);
        }
      })();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <FormField label="Your name" required error={fieldErrors.name}>
          <input
            className={inputClassName}
            autoComplete="name"
            placeholder="e.g. Sarah Chen"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
        </FormField>
        <FormField label="Work email" required error={fieldErrors.email}>
          <input
            className={inputClassName}
            autoComplete="email"
            type="email"
            placeholder="sarah@company.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <FormField label="Company or team" error={fieldErrors.company}>
          <input
            className={inputClassName}
            autoComplete="organization"
            placeholder="e.g. Acme Operations"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </FormField>
        <FormField label="Where are you based?" error={fieldErrors.region}>
          <input
            className={inputClassName}
            placeholder="e.g. UAE, Saudi Arabia, UK, Australia"
            value={values.region}
            onChange={(e) => update("region", e.target.value)}
          />
        </FormField>
      </div>

      <fieldset className="rounded-2xl border border-ink/10 bg-cream p-4">
        <legend className="px-1 text-sm font-medium text-ink/90">You are...</legend>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            {
              key: "business",
              label: "A business team",
              hint: "I want to automate operations or ship an AI workflow"
            },
            {
              key: "agency",
              label: "An agency / software house",
              hint: "I need a white-label AI delivery partner"
            }
          ].map((option) => (
            <label
              key={option.key}
              className={cn(
                "focus-within:ring-blue/40 relative rounded-xl border border-ink/10 p-3 transition-colors focus-within:ring-2",
                values.audience === option.key ? "bg-white" : "bg-cream"
              )}
            >
              <input
                type="radio"
                name="audience"
                value={option.key}
                checked={values.audience === option.key}
                onChange={() => update("audience", option.key as FormState["audience"])}
                className="absolute inset-0 opacity-0"
              />
              <span className="block text-sm font-medium text-ink">{option.label}</span>
              <span className="mt-1 block text-xs text-ink/65">{option.hint}</span>
            </label>
          ))}
        </div>
        {fieldErrors.audience ? <p className="mt-2 text-xs text-red-600">{fieldErrors.audience}</p> : null}
      </fieldset>

      <FormField label="What brought you here?" error={fieldErrors.serviceInterest}>
        <div className="relative">
          <select
            className={cn(inputClassName, "appearance-none pr-10")}
            value={values.serviceInterest}
            onChange={(e) => update("serviceInterest", e.target.value)}
          >
            <option value="">Pick a focus area (optional)</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="AI-enabled product engineering">AI-enabled product engineering</option>
            <option value="Automation audit / pilot">Automation audit / pilot</option>
          </select>
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/50">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </span>
        </div>
      </FormField>

      <FormField label="What should we know?" required error={fieldErrors.message}>
        <textarea
          className={cn(inputClassName, "min-h-32 resize-y sm:min-h-36")}
          placeholder="In plain words: what’s slowing the team down, and what would ‘done’ look like?"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(fieldErrors.message)}
        />
      </FormField>

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

      {submitError ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      ) : null}

      {submitted ? (
        <p
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          role="status"
        >
          Message sent. We&apos;ll be in touch within one business day — usually much sooner.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? "Sending..." : "Send message"}
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
