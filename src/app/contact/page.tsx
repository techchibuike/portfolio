import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chibuike Okpala. Whether you're building something interesting, exploring ideas around trust and coordination, or just want to connect.",
};

export default function ContactPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-20 space-y-16 animate-fade-in-up">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
          Whether you're building something interesting, have a question about my
          research, want to collaborate, or just want to say hello — I read
          every message.
        </p>
      </header>

      {/* Contact Methods */}
      <section className="space-y-6">
        <div className="grid gap-4">
          {/* Email */}
          <a
            href="mailto:damianokpala01@gmail.com"
            className="group flex items-start justify-between p-6 rounded-lg border border-border/40 bg-card hover:border-border transition-all duration-200"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Email
              </p>
              <p className="text-lg font-medium group-hover:text-primary transition-colors">
                damianokpala01@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                Best for substantive conversations. I respond within 24 hours.
              </p>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 mt-1">
              →
            </span>
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com/techChibuike"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between p-6 rounded-lg border border-border/40 bg-card hover:border-border transition-all duration-200"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                X / Twitter
              </p>
              <p className="text-lg font-medium group-hover:text-primary transition-colors">
                @techChibuike
              </p>
              <p className="text-sm text-muted-foreground">
                For quick thoughts, questions, or following what I'm building.
              </p>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 mt-1">
              →
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tech-chibuike/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between p-6 rounded-lg border border-border/40 bg-card hover:border-border transition-all duration-200"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                LinkedIn
              </p>
              <p className="text-lg font-medium group-hover:text-primary transition-colors">
                Chibuike Okpala
              </p>
              <p className="text-sm text-muted-foreground">
                For professional introductions and longer-form opportunities.
              </p>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 mt-1">
              →
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/techchibuike"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between p-6 rounded-lg border border-border/40 bg-card hover:border-border transition-all duration-200"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                GitHub
              </p>
              <p className="text-lg font-medium group-hover:text-primary transition-colors">
                github.com/techchibuike
              </p>
              <p className="text-sm text-muted-foreground">
                Where the code lives. Open to collaborations on meaningful projects.
              </p>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 mt-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* What I'm open to */}
      <section className="space-y-6 border-t border-border/40 pt-12">
        <h2 className="text-2xl font-light tracking-tight">What I'm Open To</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Founder Conversations",
              description:
                "If you're building something in the event space, in trust/reputation systems, or just navigating early-stage product decisions.",
            },
            {
              title: "Research & Feedback",
              description:
                "I'm always looking to talk to event planners, vendors, and clients. Your perspective helps me build better.",
            },
            {
              title: "Technical SEO & Web Performance",
              description:
                "Selective engagements when the problem is genuinely interesting and the timeline makes sense.",
            },
            {
              title: "Introductions",
              description:
                "Know someone I should meet? A warm introduction is always welcome.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-lg border border-border/40 bg-card space-y-2"
            >
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <p className="text-sm text-muted-foreground border-t border-border/40 pt-8">
        I don't always reply immediately, but I always reply. If you send something
        thoughtful, expect a thoughtful response in return.
      </p>
    </div>
  );
}
