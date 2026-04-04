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
    email: ["damianokpala111@gmail.com", "tech-seo-okpala@next-gentitan.com"],
    description:
      "Outcomes First. Everything Else Follows. Full-stack builder and technical problem-solver focused on real results.",
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "Product Engineering",
      "SEO & Performance Optimization",
      "Technical Problem Solving",
      "SaaS Architecture",
      "Healthcare Technology",
      "Conversion Rate Optimization",
      "MVP Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
