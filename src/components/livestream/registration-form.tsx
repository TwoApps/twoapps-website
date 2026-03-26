"use client";

import { startTransition, useState } from "react";

import { livestreamRegistrationSchema, type LivestreamRegistrationPayload } from "@/lib/livestream-schema";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type LivestreamRegistrationFormProps = {
  sourcePage: string;
};

type FormState = Omit<LivestreamRegistrationPayload, "honeypot"> & {
  honeypot: string;
};

type FieldErrors = Partial<Record<keyof LivestreamRegistrationPayload, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  jobTitle: "",
  source: "",
  honeypot: ""
};

const inputClassName =
  "focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors hover:border-white/15 focus:border-accent-1/30 focus:bg-white/[0.07]";

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

export function LivestreamRegistrationForm({ sourcePage }: LivestreamRegistrationFormProps) {
  const [values, setValues] = useState<FormState>({ ...initialState, source: sourcePage });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [registrationCount, setRegistrationCount] = useState<number | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setSubmitted(false);

    const parsed = livestreamRegistrationSchema.safeParse({ ...values, source: sourcePage });
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      const flattened = parsed.error.flatten().fieldErrors;
      for (const key of Object.keys(flattened) as Array<keyof LivestreamRegistrationPayload>) {
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
          const response = await fetch("/api/livestream-register", {
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
            data?: {
              id: string;
              registeredAt: string;
              totalRegistrations: number;
            };
          };

          if (!response.ok || !result.ok) {
            if (result.fieldErrors) {
              const nextErrors: FieldErrors = {};
              for (const [key, messages] of Object.entries(result.fieldErrors)) {
                if (messages?.[0]) {
                  nextErrors[key as keyof LivestreamRegistrationPayload] = messages[0];
                }
              }
              setFieldErrors(nextErrors);
            }

            setSubmitError(result.error || "Something went wrong. Please try again.");
            return;
          }

          setSubmitted(true);
          if (result.data?.totalRegistrations) {
            setRegistrationCount(result.data.totalRegistrations);
          }
          setValues(initialState);

          // Track conversion
          if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Livestream Registration", {
              props: {
                source: sourcePage,
                company: parsed.data.company || "unspecified",
                jobTitle: parsed.data.jobTitle || "unspecified"
              }
            });
          }
        } catch {
          setSubmitError("Unable to register right now. Please try again in a moment.");
        } finally {
          setIsPending(false);
        }
      })();
    });
  }

  if (submitted) {
    return (
      <div className="space-y-4">
        <div
          className="rounded-2xl border border-accent-1/20 bg-accent-1/10 p-6 text-center"
          role="status"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-1/20">
            <svg className="h-6 w-6 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-ink">You're on the list!</h3>
          <p className="mt-2 text-sm text-ink/70">
            We'll email you when the demo date is set. You'll get priority access and all the resources after the session.
          </p>
          {registrationCount && registrationCount > 1 && (
            <p className="mt-3 text-xs text-ink/50">
              Join {registrationCount - 1} other{registrationCount > 2 ? "s" : ""} already registered
            </p>
          )}
        </div>
        <p className="text-center text-xs text-ink/50">
          Questions? Email us at{" "}
          <a href="mailto:team@twoapps.com" className="text-accent-1 hover:underline">
            team@twoapps.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" required error={fieldErrors.name}>
          <input
            className={inputClassName}
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            aria-invalid={Boolean(fieldErrors.name)}
          />
        </FormField>
        <FormField label="Email" required error={fieldErrors.email}>
          <input
            className={inputClassName}
            autoComplete="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            aria-invalid={Boolean(fieldErrors.email)}
          />
        </FormField>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Company" error={fieldErrors.company}>
          <input
            className={inputClassName}
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Your company"
          />
        </FormField>
        <FormField label="Job title" error={fieldErrors.jobTitle}>
          <input
            className={inputClassName}
            value={values.jobTitle}
            onChange={(e) => update("jobTitle", e.target.value)}
            placeholder="Your role"
          />
        </FormField>
      </div>

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
        <p className="rounded-xl border border-red-300/20 bg-red-300/10 px-4 py-3 text-sm text-red-200" role="alert">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Registering...
          </>
        ) : (
          <>
            Reserve Your Spot
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </Button>
    </form>
  );
}
