type JsonLdEntry = Record<string, unknown> | null | undefined | false;

export function JsonLd({
  data
}: {
  data: JsonLdEntry | Array<JsonLdEntry>;
}) {
  const items = (Array.isArray(data) ? data : [data]).filter(
    (entry): entry is Record<string, unknown> =>
      Boolean(entry) && typeof entry === "object"
  );

  if (!items.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(items.length === 1 ? items[0] : items)
      }}
    />
  );
}
