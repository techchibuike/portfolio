import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Open Graph images (you'll need to create these)
const ogImage = "https://x.com/techChibuike/header_photo";
const twitterImage = "https://x.com/techChibuike/header_photo";

export const metadata: Metadata = {
  title: {
    default: "Chibuike Okpala | Developer",
    template: "%s | Chibuike Okpala",
  },
  description:
    "Outcomes First. Everything Else Follows. Full-stack builder and technical problem-solver focused on real results.",

  // Open Graph
  openGraph: {
    title: "Chibuike Okpala | Developer",
    description:
      "Outcomes First. Everything Else Follows. Full-stack builder and technical problem-solver focused on real results.",
    url: "https://techchibuike.netlify.app",
    siteName: "Chibuike Okpala Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Chibuike Okpala Portfolio",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Chibuike Okpala | Developer",
    description:
      "Outcomes First. Everything Else Follows. Full-stack builder and technical problem-solver focused on real results.",
    images: [twitterImage],
    creator: "@techChibuike",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  // Other metadata
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "React",
    "Next.js",
    "Software Engineer",
    "Builder",
  ],
  authors: [{ name: "Chibuike Okpala" }],
  creator: "Chibuike Okpala",
  publisher: "Chibuike Okpala",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-medium text-foreground hover:text-muted-foreground transition-colors">
              Chibuike Okpala
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="/journal" className="text-muted-foreground hover:text-foreground transition-colors">Journal</Link>
              <Link href="/research" className="text-muted-foreground hover:text-foreground transition-colors">Research</Link>
              <Link href="/principles" className="text-muted-foreground hover:text-foreground transition-colors">Principles</Link>
              <Link href="/now" className="text-muted-foreground hover:text-foreground transition-colors">Now</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-border/40 py-6 mt-20">
          <div className="container max-w-4xl mx-auto px-4 flex justify-between text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Chibuike Okpala. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</Link>
              <Link href="https://x.com/techChibuike" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">X</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
