Scaffold a new React component for the TwoApps website. Ask the user:

1. "Which category does this component belong to? (ui / common / site / motion / scenes / microsites)"
2. "What is the component name? (PascalCase, e.g., PricingCard)"
3. "What props does this component need? List them with types (e.g., title: string, items: string[], className?: string)"
4. "Does this component need client-side interactivity? (state, event handlers, browser APIs) — if yes, describe what"

Create the file at `src/components/[category]/[component-name-kebab].tsx` with this structure:

```typescript
// "use client"; — add ONLY if the component uses useState, useEffect, useRef, event handlers, or browser APIs

import { cn } from "@/lib/utils";

type [Name]Props = {
  // props here — always include className?: string for layout/UI components
  className?: string;
};

export function [Name]({ className }: [Name]Props) {
  return (
    <div className={cn("", className)}>
      {/* content */}
    </div>
  );
}
```

Rules to follow:
- **Named export only** — never `export default`
- Props typed as `type [Name]Props` above the function (not interface)
- `cn()` from `@/lib/utils` for class merging
- Design tokens: `text-ink`, `text-ink/78`, `bg-paper`, `border-white/10`, `text-accent-1`, `bg-accent-1`
- Never hardcode hex values in Tailwind classes
- Use `@/` path aliases — never relative imports
- Add `"use client"` only if the interactivity genuinely requires it

After creating the file, run `npm run typecheck` to verify no TypeScript errors.
