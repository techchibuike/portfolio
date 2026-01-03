export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chibuike Okpala",
    jobTitle: "Full Stack Developer",
    url: "https://techchibuike.netlify.app",
    sameAs: [
      "https://github.com/techchibuike",
      "https://linkedin.com/in/tech-chibuike",
      "https://twitter.com/techChibuike",
    ],
    worksFor: {
      "@type": "Organization",
      name: "MobDoc'r",
    },
    description:
      "Building solutions through development, problem-solving, and product thinking.",
    knowsAbout: [
      "Web Development",
      "React",
      "Node.js",
      "TypeScript",
      "Problem Solving",
      "Builder",
      "Software Engineering",
      "Founder",
      "Alphoch",
      "Koordi",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
