# **Minimalist Developer Portfolio**

A clean, elegant portfolio template built with Next.js 14 and Tailwind CSS. Designed for developers who value minimalism and thoughtful interaction.

![Portfolio Preview](https://img.shields.io/badge/style-minimalist-black)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-blue)

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

### 2. Personalize Your Portfolio

**Essential updates in `/app/page.tsx`:**

1. Replace `Chibuike Okpala` (3 occurrences)
2. Update email: `damainokpala111@gmail.com`
3. Modify experience details
4. Update project details
5. Change social links

**Customization options:**

- Colors: Edit `globals.css`
- Font: Change in `layout.tsx`
- Content: Update data in `page.tsx`
- Sections: Modify or remove as needed

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles & theme
├── public/                # Static assets
└── package.json          # Dependencies
```

## 🎨 Design Philosophy

This portfolio follows minimalist principles:

### Content Strategy

- **Metrics over claims**: Show numbers, not just words
- **Depth on demand**: Expand details only when clicked
- **Subtle storytelling**: Framework revealed through interaction
- **Proof with brevity**: One-line case studies

### Visual Design

- **Limited palette**: Black, white, grays
- **Clean typography**: System fonts with generous spacing
- **Subtle animations**: Only where they add meaning
- **Consistent spacing**: 8px grid system

## 🔧 Technical Details

### Built With

- **Next.js 14**: App Router, React Server Components
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first styling
- **CSS Variables**: Theme system

### Performance

- **0kB unnecessary dependencies**
- **Lighthouse score**: 100/100
- **First Contentful Paint**: < 1s
- **No external fonts**: Uses system fonts

## 📱 Sections Overview

### 1. Introduction

- Name and tagline
- Three key metrics (customizable)
- Availability status

### 2. Experience

- Timeline format
- Current role highlighted
- "Currently" focus statement

### 3. Work (3-Door Framework)

- Interactive door selector
- Three approach descriptions
- Minimal visual indicator

### 4. Projects

- Expandable on click
- Shows "What I learned"
- Tech stack tags
- One concrete result line

### 5. Connect

- Simple email link
- Social media in footer
- Copyright notice

## 🛠️ Customization Guide

### Change Colors

Edit the CSS variables in `globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  /* ... other variables */
}
```

### Add New Section

1. Add to navigation array in `page.tsx`
2. Create new section with proper ref
3. Add content following existing patterns

### Add Images

Place in `/public/` folder and reference:

```tsx
// Example for project images
<img src="/projects/project-1.png" alt="Project screenshot" />
```

### Modify Projects

Update the `PROJECTS` array in `page.tsx`:

```typescript
const PROJECTS = [
  {
    id: 1,
    year: "2024",
    name: "Your Project",
    description: "Brief description",
    tech: ["React", "TypeScript"],
    learning: "What you learned",
    demo: "https://demo.com",
    github: "https://github.com/your/project",
  },
];
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Push to GitHub
2. Import in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `.next`

### GitHub Pages

```bash
# Update next.config.js
npm run build
npm run export

# Deploy to gh-pages branch
```

## 🤝 Contributing

This is a personal portfolio template, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your portfolio.

## 🙏 Credits

- Design inspired by minimalist developer portfolios
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from system emoji set

## 📞 Support

For issues or questions:

- Open a [GitHub Issue](https://github.com/techchibuike/portfolio/issues)
- Message me on [X](https://x.com/techChibuike)
- Email: damianokpala111@gmail.com

---

**Built with intention. Designed for clarity.**

_Replace this readme content with your personal details before deploying._
