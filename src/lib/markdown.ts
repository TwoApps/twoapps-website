/**
 * Minimal, dependency-free, RSC-safe block parser for the limited Markdown
 * subset used in blog/solution content. Returns a typed AST (NOT HTML) so
 * rendering stays in React — no dangerouslySetInnerHTML, no XSS surface.
 *
 * Supported: ## / ### headings, unordered (- / *) and ordered (1.) lists,
 * GitHub-style tables, > blockquotes, and paragraphs. Inline emphasis/links
 * are handled at render time by the markdown renderer.
 *
 * Plain double-newline-separated prose (the legacy blog format) parses cleanly
 * into paragraphs, so existing posts render unchanged.
 */

export type MarkdownBlock =
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "quote"; text: string };

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

const HEADING_RE = /^(#{2,3})\s+(.*)$/;
const UL_RE = /^[-*]\s+(.*)$/;
const OL_RE = /^\d+\.\s+(.*)$/;
const QUOTE_RE = /^>\s?(.*)$/;
const TABLE_ROW_RE = /^\s*\|(.+)\|\s*$/;
const TABLE_SEP_RE = /^\s*\|?[\s:|-]+\|?\s*$/;

function splitTableRow(line: string): string[] {
  return line
    .replace(/^\s*\|/, "")
    .replace(/\|\s*$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function parseMarkdown(content: string): MarkdownBlock[] {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let i = 0;
  const seenIds = new Set<string>();

  const headingId = (text: string) => {
    const base = slugify(text) || "section";
    let id = base;
    let n = 2;
    while (seenIds.has(id)) id = `${base}-${n++}`;
    seenIds.add(id);
    return id;
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    const heading = HEADING_RE.exec(line);
    if (heading) {
      const text = heading[2].trim();
      blocks.push({
        type: "heading",
        level: heading[1].length === 2 ? 2 : 3,
        text,
        id: headingId(text)
      });
      i++;
      continue;
    }

    // Table: a row followed by a separator row.
    if (TABLE_ROW_RE.test(line) && i + 1 < lines.length && TABLE_SEP_RE.test(lines[i + 1])) {
      const headers = splitTableRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && TABLE_ROW_RE.test(lines[i])) {
        rows.push(splitTableRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    if (QUOTE_RE.test(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && QUOTE_RE.test(lines[i])) {
        quoteLines.push((QUOTE_RE.exec(lines[i]) as RegExpExecArray)[1]);
        i++;
      }
      blocks.push({ type: "quote", text: quoteLines.join(" ").trim() });
      continue;
    }

    if (UL_RE.test(line) || OL_RE.test(line)) {
      const ordered = OL_RE.test(line);
      const re = ordered ? OL_RE : UL_RE;
      const items: string[] = [];
      while (i < lines.length && re.test(lines[i])) {
        items.push((re.exec(lines[i]) as RegExpExecArray)[1].trim());
        i++;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    // Paragraph: collect until a blank line or a block-starting line.
    const paragraphLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "") {
      const l = lines[i];
      if (
        HEADING_RE.test(l) ||
        QUOTE_RE.test(l) ||
        UL_RE.test(l) ||
        OL_RE.test(l) ||
        (TABLE_ROW_RE.test(l) && i + 1 < lines.length && TABLE_SEP_RE.test(lines[i + 1]))
      ) {
        break;
      }
      paragraphLines.push(l.trim());
      i++;
    }
    if (paragraphLines.length) {
      blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
    }
  }

  return blocks;
}
