import Link from "next/link";

type Crumb = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/65">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`} className="inline-flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-ink/85">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path as never} className="focus-ring rounded-md hover:text-ink">
                  {item.name}
                </Link>
              )}
              {!isLast ? <span aria-hidden>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
