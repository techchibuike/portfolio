import Link from "next/link";
import { getAllMarkdownDocuments } from "@/lib/markdown";

const EXPERIENCE = [
  {
    year: "May 2026 — Present",
    role: "Founder",
    company: "Koordi",
    description:
      "Building trust infrastructure for event commerce in Nigeria. Designing a trust layer that replaces informal guesswork with structured accountability between event organizers and vendors. Focused on escrow-style payments, vendor verification, and guaranteed service delivery. Currently validating with real events in university ecosystems.",
  },
  {
    year: "Dec 2025 — Present",
    role: "Software Engineer & Technical SEO Specialist",
    company: "NextGen Titan Digital Solution",
    description:
      "Providing web development and technical SEO services to businesses that need visibility, performance, and customer acquisition. Building and optimizing websites for speed, structure, and search. Managing independent client relationships, project timelines, and deliverables. This practice funds my work as a founder.",
  },
  {
    year: "Apr 2024 — Present",
    role: "Project Lead",
    company: "Alphoch",
    description:
      "A long-term initiative exploring and building technology solutions around real-world operational problems. Built early-stage tools in healthcare operations and workflow efficiency. Current focus shifting toward the event space — planning, coordination, and execution systems. Combining engineering, systems thinking, and real-world feedback.",
  },
  {
    year: "Jul 2025 — Feb 2026",
    role: "Full Stack Developer",
    company: "MobDoc'r",
    description:
      "Built healthcare platforms handling 10,000+ concurrent users. Developed three-sided marketplaces for users, providers, and admins. Optimized mobile load times from 5.2s to 1.2s — a 77% improvement. Increased mobile conversions by 60% through technical optimizations. Led product development from concept to deployment.",
  },
  {
    year: "Jul 2024 — Dec 2024",
    role: "Frontend Developer",
    company: "Dafe Software",
    description:
      "Built responsive UI components and contributed to frontend architecture during a 6-month internship. Worked with the development team on client-facing applications.",
  },
];

const SERVICES = [
  {
    title: "Technical SEO & Site Performance",
    description:
      "For businesses with websites that aren't showing up in search, loading slowly, or losing traffic without explanation.",
    services: [
      "Technical SEO audits",
      "Index cleanup & recovery",
      "Page speed optimization",
      "Schema markup",
      "Google Search Console fixes",
    ],
  },
  {
    title: "Websites That Convert",
    description:
      "For professionals and businesses needing a website that's fast, visible, and built to turn visitors into clients.",
    services: [
      "Custom WordPress development",
      "Responsive design",
      "Performance optimization",
      "Local SEO foundations",
      "Wix site optimization",
    ],
  },
  {
    title: "Systems & Coordination Design",
    description:
      "For founders and teams building platforms where trust, accountability, and coordination are the core problem — not just code.",
    services: [
      "Trust infrastructure",
      "Marketplace design thinking",
      "Coordination systems",
      "Incentive design",
      "Early-stage product strategy",
    ],
  },
];

export default function Home() {
  const latestJournal = getAllMarkdownDocuments("journal").slice(0, 3);
  const latestResearch = getAllMarkdownDocuments("research").slice(0, 3);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-20 space-y-32">
      {/* Hero Section */}
      <section className="space-y-8 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight max-w-3xl">
          I build products that solve meaningful real-world problems.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I&apos;m Damian Chibuike Okpala, a founder and software engineer
          passionate about understanding how people, businesses, and systems
          work. I believe the best products are built on evidence rather than
          assumptions, so I spend as much time learning about problems as I do
          building solutions. Through research, experimentation, and technology,
          I aim to create products that solve meaningful challenges and deliver
          lasting value.
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

      {/* Experience Section */}
      <section
        className="space-y-8 animate-fade-in-up"
        style={{ animationDelay: "0.05s" }}
      >
        <div className="border-b border-border/40 pb-4">
          <h2 className="text-2xl font-light tracking-tight">Experience</h2>
        </div>
        <div className="space-y-10">
          {EXPERIENCE.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="grid sm:grid-cols-[240px_1fr] gap-2 sm:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono leading-relaxed whitespace-nowrap">
                {exp.year}
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="text-base font-medium">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services / Work Doors Section */}
      <section
        className="space-y-8 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="border-b border-border/40 pb-4">
          <h2 className="text-2xl font-light tracking-tight">
            How I Can Help
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-lg border border-border/40 bg-card space-y-4"
            >
              <h3 className="text-base font-medium">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5 pt-2 border-t border-border/40">
                {service.services.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-foreground/70 flex items-baseline gap-2"
                  >
                    <span className="text-muted-foreground">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Research */}
      <section
        className="space-y-8 animate-fade-in-up"
        style={{ animationDelay: "0.15s" }}
      >
        <div className="flex items-baseline justify-between border-b border-border/40 pb-4">
          <h2 className="text-2xl font-light tracking-tight">
            Recent Research
          </h2>
          <Link
            href="/research"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {latestResearch.map((doc) => (
            <Link
              key={doc.slug}
              href={`/research/${doc.slug}`}
              className="group block p-6 rounded-lg border border-border/40 bg-card hover:border-border transition-colors"
            >
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                {doc.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {doc.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Founder Journal */}
      <section
        className="space-y-8 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-baseline justify-between border-b border-border/40 pb-4">
          <h2 className="text-2xl font-light tracking-tight">
            Founder Journal
          </h2>
          <Link
            href="/journal"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-4">
          {latestJournal.map((doc) => (
            <Link
              key={doc.slug}
              href={`/journal/${doc.slug}`}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-4 border-b border-border/40 last:border-0 hover:bg-muted/50 -mx-4 px-4 rounded-md transition-colors"
            >
              <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                {doc.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}