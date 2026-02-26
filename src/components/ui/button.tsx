import Link from "next/link";

import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const base =
  "focus-ring relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "text-[#021111] bg-[linear-gradient(90deg,rgba(0,228,212,.95),rgba(82,255,239,.9),rgba(0,205,194,.95))] shadow-[0_0_0_1px_rgba(255,255,255,.08),0_12px_35px_rgba(0,228,212,.2)] hover:shadow-[0_0_0_1px_rgba(255,255,255,.1),0_16px_45px_rgba(0,228,212,.28)]",
  secondary:
    "border border-white/10 bg-white/[0.035] text-ink hover:border-accent-1/20 hover:bg-accent-1/5 [box-shadow:0_0_0_1px_rgba(0,228,212,.04)]",
  ghost: "text-ink/90 hover:bg-accent-1/6 hover:text-accent-1"
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-6 py-3.5 text-base sm:text-lg"
};

function classes({ variant = "primary", size = "md", className }: CommonProps) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const { href, className, variant, size, children, ...rest } = props;
    return (
      <Link href={href as never} className={classes({ className, variant, size })} {...rest}>
        {children}
      </Link>
    );
  }

  const { className, variant, size, children, type = "button", ...rest } = props;
  return (
    <button type={type} className={classes({ className, variant, size })} {...rest}>
      {children}
    </button>
  );
}
