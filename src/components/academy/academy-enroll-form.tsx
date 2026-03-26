"use client";

import { startTransition, useState } from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const academyEnrollSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().default(""),
  courseId: z.string().trim().min(1, "Course ID is required."),
  courseName: z.string().trim().min(1, "Course name is required."),
  honeypot: z.string().max(0).optional().default("")
});

type AcademyEnrollPayload = z.infer<typeof academyEnrollSchema>;

type FormState = AcademyEnrollPayload;

type FieldErrors = Partial<Record<keyof AcademyEnrollPayload, string>>;

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

type AcademyEnrollFormProps = {
  courseId: string;
  courseName: string;
  onSuccess?: () => void;
};

export function AcademyEnrollForm({ courseId, courseName, onSuccess }: AcademyEnrollFormProps) {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    courseId,
    courseName,
    honeypot: ""
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

    const parsed = academyEnrollSchema.safeParse({ ...values, courseId, courseName });
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      const flattened = parsed.error.flatten().fieldErrors;
      for (const key of Object.keys(flattened) as Array<keyof AcademyEnrollPayload>) {
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
          const response = await fetch("/api/academy-enroll", {
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
                  nextErrors[key as keyof AcademyEnrollPayload] = messages[0];
                }
              }
              setFieldErrors(nextErrors);
            }

            setSubmitError(result.error || "Something went wrong. Please try again.");
            return;
          }

          setSubmitted(true);
          setValues({
            name: "",
            email: "",
            company: "",
            courseId,
            courseName,
            honeypot: ""
          });
          
          if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Academy Enrollment", {
              props: {
                courseId,
                courseName
              }
            });
          }
          
          onSuccess?.();
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
      <div className="space-y-4 text-center">
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-6 py-6">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/20">
            <svg
              className="h-5 w-5 text-emerald-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-emerald-200">You&apos;re enrolled!</h3>
          <p className="mt-2 text-sm text-emerald-200/80">
            Check your inbox — we&apos;ve sent you the course PDF.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-3">
        <FormField label="Name" required error={fieldErrors.name}>
          <input
            className={inputClassName}
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
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
        <FormField label="Company (optional)" error={fieldErrors.company}>
          <input
            className={inputClassName}
            autoComplete="organization"
            placeholder="Your company name"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
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

      <div className="pt-1">
        <Button type="submit" disabled={isPending} size="lg" className="w-full">
          {isPending ? "Enrolling..." : "Get Free Course"}
        </Button>
        <p className="mt-2 text-center text-xs text-ink/50">
          Free PDF. No spam. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}
