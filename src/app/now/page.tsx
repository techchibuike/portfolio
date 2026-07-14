import { getMarkdownDocument } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default function NowPage() {
  const doc = getMarkdownDocument("now", "what-im-working-on-this-month.md");

  if (!doc) {
    return <div className="container max-w-3xl mx-auto px-4 py-20">Content not found.</div>;
  }

  return (
    <div className="container max-w-3xl mx-auto px-4 py-20 space-y-12 animate-fade-in-up">
      <header className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">{doc.title || "Now"}</h1>
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-light prose-headings:text-foreground prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-foreground prose-li:text-foreground/90 prose-strong:font-semibold prose-strong:text-foreground">
        <MarkdownRenderer content={doc.content} />
      </div>
    </div>
  );
}
