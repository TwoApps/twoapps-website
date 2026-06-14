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
  "focus-ring relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-ink text-cream shadow-[0_1px_2px_rgba(22,21,15,0.08)] hover:bg-blue hover:shadow-[0_12px_35px_rgba(39,66,206,0.22)]",
  secondary:
    "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink/[0.04]",
  ghost: "text-ink/80 hover:bg-ink/[0.05] hover:text-ink"
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4 text-base"
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
