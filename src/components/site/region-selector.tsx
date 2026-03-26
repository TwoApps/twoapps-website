"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const regions = [
  { code: "sg", flag: "🇸🇬", name: "Singapore", href: "/sg" },
  { code: "au", flag: "🇦🇺", name: "Australia", href: "/au" },
  { code: "nz", flag: "🇳🇿", name: "New Zealand", href: "/nz" },
  { code: "ae", flag: "🇦🇪", name: "UAE", href: "/ae" },
  { code: "eu", flag: "🇪🇺", name: "Europe", href: "/eu" },
  { code: "global", flag: "🌍", name: "Global", href: "/" },
];

export function RegionSelector({ className }: { className?: string }) {
  const pathname = usePathname();
  const currentRegion = pathname.split("/")[1] || "global";

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {regions.map((region) => (
        <Link
          key={region.code}
          href={region.href}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm transition-colors",
            currentRegion === region.code || (currentRegion === "" && region.code === "global")
              ? "bg-[#00A99D] text-white"
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          )}
        >
          <span>{region.flag}</span>
          <span className="hidden sm:inline">{region.name}</span>
        </Link>
      ))}
    </div>
  );
}
