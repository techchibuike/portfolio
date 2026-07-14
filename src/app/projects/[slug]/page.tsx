import { getMarkdownDocument, getAllMarkdownDocuments } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getMarkdownDocument("projects", `${slug}.md`);

  if (!doc) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: doc.title,
    description: doc.excerpt.substring(0, 160),
  };
}

export async function generateStaticParams() {
  const posts = getAllMarkdownDocuments("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getMarkdownDocument("projects", `${slug}.md`);

  if (!doc) {
    notFound();
  }

  return (
    <div className="container max-w-3xl mx-auto px-4 py-20 space-y-12 animate-fade-in-up">
      <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 block">
        &lt; Back to Projects
      </Link>
      <header className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">{doc.title}</h1>
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-light prose-headings:text-foreground prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-foreground prose-li:text-foreground/90 prose-strong:font-semibold prose-strong:text-foreground">
        <MarkdownRenderer content={doc.content} />
      </div>
    </div>
  );
}
