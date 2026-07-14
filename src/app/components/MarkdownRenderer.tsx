import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
