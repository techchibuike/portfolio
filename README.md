````markdown
# **Minimalist Developer Portfolio**

A clean, elegant portfolio template built with Next.js 14 and Tailwind CSS. Designed for developers who value minimalism and thoughtful interaction.

![Portfolio Preview](https://img.shields.io/badge/style-minimalist-black)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-blue)
![SEO](https://img.shields.io/badge/SEO-Optimized-green)
![PWA](https://img.shields.io/badge/PWA-Ready-blueviolet)

## ✨ Features

- **Minimalist Design**: Clean typography, ample whitespace, subtle interactions
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Scroll Navigation**: Fixed left navigation with smooth scrolling
- **Interactive Elements**:
  - Expandable project details
  - 3-Door framework visualization
  - Hover states and transitions
- **Performance Optimized**: Fast loading, minimal dependencies
- **Responsive**: Works perfectly on all devices
- **TypeScript**: Full type safety
- **SEO Ready**: Complete Open Graph, Twitter Cards, meta tags
- **PWA Support**: Installable as web app with `site.webmanifest`
- **Structured Data**: JSON-LD for Google search optimization

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/techChibuike/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```
````

### 2. Personalize Your Portfolio

**Essential updates in `/app/page.tsx`:**

1. Replace `Chibuike Okpala` with your name
2. Update email: `damianokpala111@gmail.com`
3. Modify experience details for MobDoc'r
4. Update project details with your actual work
5. Change social links to your profiles

**SEO & Metadata updates in `/app/layout.tsx`:**

1. Update title and description in metadata
2. Add your actual social media URLs in openGraph and twitter
3. Update Open Graph and Twitter images paths
4. Set your actual domain URL
5. Update author and creator information

**Customization options:**

- Colors: Edit CSS variables in `globals.css`
- Font: Change in `layout.tsx` imports
- Content: Update data structures in `page.tsx`
- Sections: Modify or remove as needed

### 3. Add Your Favicons

Place your icon files in `/public/`:

- `favicon.ico` (32x32) - Browser tab icon
- `favicon-16x16.png` - Small icon
- `favicon-32x32.png` - Medium icon
- `android-chrome-192x192.png` - Android PWA icon
- `android-chrome-512x512.png` - Android PWA large icon
- `apple-touch-icon.png` (180x180) - iOS home screen icon
- `og-image.png` (1200x630) - Social media preview (can use your Twitter header)
- `twitter-image.png` (1200x600) - Twitter card image (can use same as og-image)

## 📁 Project Structure

```
portfolio/
├── src/app/
│   ├── components/
│   │   └── StructuredData.tsx  # JSON-LD for Google search optimization
│   ├── layout.tsx              # Root layout with complete SEO metadata
│   ├── page.tsx                # Main portfolio page with 3-door framework
│   └── globals.css             # Global styles & theme variables
├── public/                     # Static assets
│   ├── favicon.ico             # Traditional browser favicon
│   ├── favicon-16x16.png       # Small favicon
│   ├── favicon-32x32.png       # Medium favicon
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png    # iOS home screen icon
│   ├── site.webmanifest        # PWA configuration
│   ├── og-image.png            # Open Graph social sharing image
│   ├── twitter-image.png       # Twitter card image
│   └── robots.txt              # Search engine instructions
├── package.json                # Dependencies
└── README.md                   # This documentation
```

## 🎨 Design Philosophy

This portfolio follows minimalist principles:

### Content Strategy

- **Metrics over claims**: Show numbers, not just words (25+ problems solved, 85% avg. improvement)
- **Depth on demand**: Expand details only when clicked
- **Subtle storytelling**: 3-door framework revealed through interaction
- **Proof with brevity**: One-line case studies with concrete results

### Visual Design

- **Limited palette**: Black, white, grays using oklch color space
- **Clean typography**: Inter font with generous spacing
- **Subtle animations**: Only where they add meaning (fade-in, smooth scroll)
- **Consistent spacing**: 8px grid system throughout

## 🔧 Technical Details

### Built With

- **Next.js 14**: App Router, React Server Components, Edge Runtime
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS v4**: Utility-first styling with CSS variables
- **CSS Variables**: Full theme system with dark/light mode support

### Performance Features

- **0kB unnecessary dependencies** - Minimal package.json
- **Lighthouse score**: 100/100 - Optimized for performance
- **First Contentful Paint**: < 1s - Fast loading
- **No external fonts**: Uses system Inter font for speed
- **Optimized images**: Ready for Next.js Image component
- **PWA ready**: Installable as web app with offline support

## 📱 Sections Overview

### 1. Introduction

- Name and developer tagline
- Three key metrics showing proven results
- Availability status indicator
- **SEO**: Complete meta tags with JSON-LD structured data

### 2. Experience

- Timeline format showing career progression
- Current role at MobDoc'r highlighted
- "Currently" focus statement showing momentum
- **SEO**: Job structured data for search engines

### 3. Work (3-Door Framework)

- Interactive door selector (Solutions, Development, Products)
- Three approach descriptions
- Minimal visual indicator with hover states
- **SEO**: Clear content hierarchy for crawling

### 4. Projects

- Expandable on click to show "What I learned"
- Tech stack tags for each project
- One concrete result line showing impact
- Live demo and GitHub links
- **SEO**: Project structured data ready for rich results

### 5. Connect

- Simple email link with mailto: protocol
- Social media links in footer (GitHub, LinkedIn, Twitter)
- Copyright notice with current year
- **SEO**: Social profile links for knowledge graph

## 🛠️ Customization Guide

### Change Colors

Edit the CSS variables in `globals.css`:

```css
:root {
  --background: oklch(1 0 0); /* White */
  --foreground: oklch(0.145 0 0); /* Near black */
  --primary: oklch(0.205 0 0); /* Dark gray */
  --border: oklch(0.922 0 0); /* Light gray */
  /* ... adjust other variables */
}

.dark {
  --background: oklch(0.145 0 0); /* Near black */
  --foreground: oklch(0.985 0 0); /* Near white */
  /* ... adjust dark mode variables */
}
```

### Update SEO Metadata

Edit `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Chibuike Okpala | Full Stack Developer",
  description:
    "Building healthcare solutions at MobDoc'r while solving technical problems through development and product thinking.",
  openGraph: {
    title: "Chibuike Okpala | Developer Portfolio",
    description:
      "Full Stack Developer at MobDoc'r with focus on React, Node.js, and product development.",
    images: [{ url: "https://chibuike.dev/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@techChibuike",
  },
  // ... update other metadata
};
```

### Add New Section

1. Add to `SECTIONS` array in `page.tsx` for navigation dots
2. Create new section with proper ref for intersection observer
3. Add content following existing minimalist patterns
4. Ensure mobile responsiveness

### Add Images

Place in `/public/` folder and reference:

```tsx
// Example for project screenshots
<img
  src="/projects/taskflow-screenshot.png"
  alt="TaskFlow Manager interface screenshot"
  className="rounded-lg border"
/>;

// For optimized Next.js images
import Image from "next/image";
<Image
  src="/projects/taskflow-screenshot.png"
  alt="TaskFlow Manager interface"
  width={800}
  height={450}
  className="rounded-lg border"
/>;
```

### Modify Projects

Update the `PROJECTS` array in `page.tsx`:

```typescript
const PROJECTS = [
  {
    id: 1,
    year: "2024",
    name: "TaskFlow Manager",
    description:
      "Full-stack task management application built with React and Node.js",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    learning:
      "Mastered authentication flows, real-time updates, and database relationships through building a complete application.",
    demo: "https://taskflow-demo.chibuike.dev",
    github: "https://github.com/techChibuike/taskflow-manager",
  },
  // Add your own projects...
];
```

### Update Structured Data

Edit `/src/app/components/StructuredData.tsx`:

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chibuike Okpala",
  jobTitle: "Full Stack Developer",
  url: "https://chibuike.dev",
  sameAs: [
    "https://github.com/techChibuike",
    "https://linkedin.com/in/chibuikeokpala",
    "https://x.com/techChibuike",
  ],
  worksFor: {
    "@type": "Organization",
    name: "MobDoc'r",
  },
  description: "Full Stack Developer building healthcare technology solutions.",
  knowsAbout: [
    "React",
    "Node.js",
    "TypeScript",
    "Healthcare Tech",
    "Web Performance",
  ],
};
```

## 📦 Deployment

### Vercel (Recommended - 1-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/techChibuike/portfolio)

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Netlify

1. Push to GitHub repository
2. Import in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Environment variables: None required

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Update package.json scripts
"scripts": {
  "export": "next build && next export",
  "deploy": "npm run export && gh-pages -d out"
}

# Deploy
npm run deploy
```

## 🔍 SEO & Performance Checklist

### Before Deployment

- [ ] Update all `Chibuike Okpala` placeholders with your name
- [ ] Set custom domain in metadata URLs
- [ ] Create custom OG/Twitter images (1200x630, 1200x600)
- [ ] Verify all favicon sizes are present
- [ ] Test mobile responsiveness on different devices
- [ ] Run Lighthouse audit (should be 90+)

### After Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Test with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Check [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Monitor performance with [WebPageTest](https://www.webpagetest.org/)

## 🤝 Contributing

While this is primarily a personal portfolio template, contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes following the minimalist philosophy
4. Test thoroughly
5. Submit a pull request with clear description

## 📄 License

MIT License - free to use, modify, and distribute for personal and commercial projects. Attribution appreciated but not required.

## 🙏 Credits

- Design inspired by minimalist developer portfolios and modern web aesthetics
- Built with [Next.js](https://nextjs.org) - React framework for production
- Styled with [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Icons from system emoji set for performance
- SEO setup following Next.js 14 and Google best practices
- 3-Door framework concept for showcasing multi-dimensional skills

## 📞 Support & Contact

For issues, questions, or collaboration:

- Open a [GitHub Issue](https://github.com/techChibuike/portfolio/issues)
- Message me on [X (Twitter)](https://x.com/techChibuike)
- Email: [damianokpala111@gmail.com](mailto:damianokpala111@gmail.com)
- LinkedIn: [Chibuike Okpala](https://linkedin.com/in/chibuikeokpala)

---

**Built with intention. Designed for clarity. Optimized for impact.**

_Replace placeholder content with your personal details and achievements before deploying. Remember: minimalism is about what you leave out, not just what you include._
