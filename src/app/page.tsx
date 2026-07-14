import Link from "next/link";
import { getAllMarkdownDocuments } from "@/lib/markdown";

export default function Home() {
  const latestJournal = getAllMarkdownDocuments("journal").slice(0, 3);
  const latestResearch = getAllMarkdownDocuments("research").slice(0, 3);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-20 space-y-32">
      {/* Hero Section */}
      <section className="space-y-8 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight max-w-3xl">
          I build products that solves meaningful real-world problems.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I'm Damian Chibuike Okpala, a founder and software engineer passionate about understanding how people, businesses, and systems work. I believe the best products are built on evidence rather than assumptions, so I spend as much time learning about problems as I do building solutions. Through research, experimentation, and technology, I aim to create products that solve meaningful challenges and deliver lasting value.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/journal"
            className="px-6 py-3 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            Read My Journal
          </Link>
        </div>
      </section>

      {/* Featured Research */}
      <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-baseline justify-between border-b border-border/40 pb-4">
          <h2 className="text-2xl font-light tracking-tight">Recent Research</h2>
          <Link href="/research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {latestResearch.map((doc) => (
            <Link key={doc.slug} href={`/research/${doc.slug}`} className="group block p-6 rounded-lg border border-border/40 bg-card hover:border-border transition-colors">
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{doc.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {doc.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Founder Journal */}
      <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-baseline justify-between border-b border-border/40 pb-4">
          <h2 className="text-2xl font-light tracking-tight">Founder Journal</h2>
          <Link href="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid gap-4">
          {latestJournal.map((doc) => (
            <Link key={doc.slug} href={`/journal/${doc.slug}`} className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-4 border-b border-border/40 last:border-0 hover:bg-muted/50 -mx-4 px-4 rounded-md transition-colors">
              <h3 className="text-base font-medium group-hover:text-primary transition-colors">{doc.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}