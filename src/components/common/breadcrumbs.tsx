import Link from "next/link";

type Crumb = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink/65 sm:text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`} className="inline-flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="py-1.5 text-ink/85">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path as never}
                  className="focus-ring rounded-md py-1.5 hover:text-ink"
                >
                  {item.name}
                </Link>
              )}
              {!isLast ? (
                <span aria-hidden className="text-ink/40">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
