"use client";

import { startTransition, useState } from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const guideDownloadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().default(""),
  sourcePage: z.string().trim().max(200).optional().default(""),
  honeypot: z.string().max(0).optional().default("")
});

type GuideDownloadPayload = z.infer<typeof guideDownloadSchema>;

type FormState = GuideDownloadPayload;

type FieldErrors = Partial<Record<keyof GuideDownloadPayload, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  sourcePage: "",
  honeypot: ""
};

const inputClassName =
  "focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink/40";

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

type GuideDownloadFormProps = {
  sourcePage: string;
};

export function GuideDownloadForm({ sourcePage }: GuideDownloadFormProps) {
  const [values, setValues] = useState<FormState>({ ...initialState, sourcePage });
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

    const parsed = guideDownloadSchema.safeParse({ ...values, sourcePage });
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      const flattened = parsed.error.flatten().fieldErrors;
      for (const key of Object.keys(flattened) as Array<keyof GuideDownloadPayload>) {
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
          const response = await fetch("/api/guide-download", {
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
                  nextErrors[key as keyof GuideDownloadPayload] = messages[0];
                }
              }
              setFieldErrors(nextErrors);
            }

            setSubmitError(result.error || "Something went wrong. Please try again.");
            return;
          }

          setSubmitted(true);
          setValues({ ...initialState, sourcePage });
          
          // Trigger PDF download
          window.open("/downloads/5-ai-workflows-guide.pdf", "_blank");
          
          if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Guide Download", {
              props: {
                source: sourcePage
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

  if (submitted) {
    return (
      <div className="space-y-6 text-center">
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-6 py-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-300/20">
            <svg
              className="h-6 w-6 text-emerald-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-emerald-200">Guide downloading!</h3>
          <p className="mt-2 text-sm text-emerald-200/80">
            Your PDF should open in a new tab. If it doesn&apos;t,{" "}
            <a 
              href="/downloads/5-ai-workflows-guide.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              click here to download
            </a>.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h4 className="text-sm font-medium text-ink/90">Want to take the next step?</h4>
          <p className="mt-1 text-sm text-ink/60">
            Book a free 20-minute workflow audit to identify your highest-ROI automation opportunities.
          </p>
          <Button href="/book" className="mt-4">
            Book Free Audit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <FormField label="Name" required error={fieldErrors.name}>
          <input
            className={inputClassName}
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
        </FormField>
        <FormField label="Email" required error={fieldErrors.email}>
          <input
            className={inputClassName}
            autoComplete="email"
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
          />
        </FormField>
      </div>

      <FormField label="Company (optional)" error={fieldErrors.company}>
        <input
          className={inputClassName}
          autoComplete="organization"
          placeholder="Your company name"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
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
        <p className="rounded-xl border border-red-300/20 bg-red-300/10 px-4 py-3 text-sm text-red-200" role="alert">
          {submitError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button type="submit" disabled={isPending} size="lg">
          {isPending ? "Sending..." : "Send Me The Guide"}
        </Button>
        <p className="text-xs text-ink/60">
          Free PDF. No spam. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}
