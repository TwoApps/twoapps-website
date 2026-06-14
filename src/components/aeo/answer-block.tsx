import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnswerBlockProps = {
  /** The question this block answers — rendered as a screen-reader + visual lead. */
  question?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Direct-answer-first block. AEO/GEO research shows answer engines extract a
 * concise, self-contained answer placed near the top of the page. Keep the
 * answer to ~40–60 words.
 */
export function AnswerBlock({ question, children, className }: AnswerBlockProps) {
  return (
    <div className={cn("border-l-2 border-blue/55 pl-5", className)}>
      {question ? (
        <p className="font-display text-base font-semibold text-ink sm:text-lg">{question}</p>
      ) : null}
      <div className={cn("text-base leading-relaxed text-ink/80 sm:text-lg", question && "mt-2")}>
        {children}
      </div>
    </div>
  );
}
