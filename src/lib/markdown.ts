import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownDocument {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  data: { [key: string]: any };
}

function stripMarkdown(text: string): string {
  return text
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove bold
    .replace(/(\*|_)(.*?)\1/g, '$2') // Remove italics
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links
    .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '') // Remove images
    .replace(/`{1,3}[^`\n]+`{1,3}/g, '') // Remove inline code
    .replace(/^\s*>+\s+/gm, '') // Remove blockquotes
    .replace(/^\s*[-*+]\s+/gm, '') // Remove unordered lists
    .replace(/^\s*\d+\.\s+/gm, '') // Remove ordered lists
    .replace(/^\s*[-*_]{3,}\s*$/gm, '') // Remove horizontal rules
    .replace(/\|/g, ' ') // Remove table pipes
    .replace(/\n+/g, ' ') // Replace newlines with space
    .trim();
}

export function getMarkdownDocument(folder: string, filename: string): MarkdownDocument | null {
  try {
    const fullPath = path.join(contentDirectory, folder, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the markdown file
    const { data, content } = matter(fileContents);
    
    // If no frontmatter title, try to extract the first H1
    let title = data.title;
    let cleanContent = content;
    
    if (!title) {
      const h1Match = content.match(/^#\s+(.*)$/m);
      if (h1Match) {
        title = h1Match[1];
        // Optionally remove the first H1 from the content so it's not rendered twice
        cleanContent = content.replace(/^#\s+(.*)$/m, '');
      } else {
        title = filename.replace(/\.md$/, '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      }
    }

    const excerpt = stripMarkdown(cleanContent).substring(0, 150) + '...';

    return {
      slug: filename.replace(/\.md$/, ''),
      title,
      content: cleanContent,
      excerpt,
      data,
    };
  } catch (error) {
    console.error(`Error reading markdown document: ${folder}/${filename}`, error);
    return null;
  }
}

export function getAllMarkdownDocuments(folder: string): MarkdownDocument[] {
  try {
    const fullDir = path.join(contentDirectory, folder);
    if (!fs.existsSync(fullDir)) return [];
    
    const fileNames = fs.readdirSync(fullDir);
    const allDocuments = fileNames
      .filter((filename) => filename.endsWith('.md'))
      .map((filename) => getMarkdownDocument(folder, filename))
      .filter((doc): doc is MarkdownDocument => doc !== null);
      
    return allDocuments;
  } catch (error) {
    console.error(`Error reading markdown documents in folder: ${folder}`, error);
    return [];
  }
}
