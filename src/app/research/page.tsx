import Link from "next/link";
import { getAllMarkdownDocuments } from "@/lib/markdown";

export default function ResearchPage() {
  const documents = getAllMarkdownDocuments("research");

  return (
    <div className="container max-w-3xl mx-auto px-4 py-20 space-y-12 animate-fade-in-up">
      <header className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Research</h1>
        <p className="text-lg text-muted-foreground">What I am trying to understand before I build.</p>
      </header>
      
      <div className="grid gap-6">
        {documents.map((doc) => (
          <Link key={doc.slug} href={`/research/${doc.slug}`} className="group block p-6 rounded-lg border border-border/40 bg-card hover:border-border transition-colors">
            <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{doc.title}</h2>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {doc.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
