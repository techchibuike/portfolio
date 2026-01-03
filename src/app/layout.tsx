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
    "Building solutions through development, problem-solving, and product thinking.",

  // Open Graph
  openGraph: {
    title: "Chibuike Okpala | Developer",
    description:
      "Building solutions through development, problem-solving, and product thinking.",
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
      "Building solutions through development, problem-solving, and product thinking.",
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
