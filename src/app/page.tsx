"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
];

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

const WORK_DOORS = [
  {
    title: "Technical SEO & Site Performance",
    description: "For businesses with websites that aren't showing up in search, loading slowly, or losing traffic without explanation.",
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
    description: "For professionals and businesses needing a website that's fast, visible, and built to turn visitors into clients.",
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
    description: "For founders and teams building platforms where trust, accountability, and coordination are the core problem — not just code.",
    services: [
      "Trust infrastructure",
      "Marketplace design thinking",
      "Coordination systems",
      "Incentive design",
      "Early-stage product strategy",
    ],
  },
];

const PROJECTS = [
  {
    id: 1,
    year: "2026",
    name: "Koordi — Trust Infrastructure",
    description:
      "Building the trust layer for event commerce in Nigeria. Escrow payments, vendor verification, guaranteed delivery. Replacing informal guesswork with structured accountability.",
    tech: ["Trust Systems", "Coordination", "Marketplace"],
    results: "Validating with real events in university ecosystems",
    demo: "https://www.koordi.net",
    github: null,
    type: "product",
  },
  {
    id: 2,
    year: "2026",
    name: "Technical SEO Audits — 9 Sites",
    description:
      "Built a structured audit system and applied it across nine Wix websites. Diagnosed indexing issues, schema gaps, crawl inefficiencies, and on-page SEO problems. Delivered prioritized action plans for each client.",
    tech: ["Technical SEO", "Wix", "Audit System"],
    results: "Actionable reports delivered for all 9 businesses. Several clients saw improved indexing and search visibility within weeks of implementing recommendations.",
    demo: "https://www.next-gentitan.com/work",
    github: null,
    type: "client",
  },
  {
    id: 3,
    year: "2025",
    name: "MobDoc'r Healthcare Platform",
    description:
      "Full-stack marketplace connecting users to HMO plans. Built for 10,000+ concurrent users. Reduced mobile load times by 77% and increased conversions by 60%.",
    tech: ["Full-Stack", "Healthcare", "Marketplace"],
    results: "10K+ concurrent users supported. 77% faster load times. 60% increase in mobile conversions.",
    demo: "https://mobdocr-two.vercel.app/",
    github: null,
    type: "product",
  },
  {
    id: 4,
    year: "2025",
    name: "Mountain Crest School Website",
    description:
      "Custom WordPress theme built from scratch. Redesigned existing school website with clean responsive layout and structured information architecture.",
    tech: ["WordPress", "Education", "Responsive"],
    results: "Live at mountaincrest.sch.ng. Responsive redesign with improved mobile performance and clearer parent navigation.",
    demo: "https://mountaincrest.sch.ng/",
    github: null,
    type: "client",
  },
  {
    id: 5,
    year: "2025",
    name: "Embatcon Event & Registration Site",
    description:
      "Custom WordPress theme for a major event website with registration functionality. Full development from design to deployment.",
    tech: ["WordPress", "Events", "Registration"],
    results: "Live at batteryemergingmarkets.org. Custom WordPress theme handling event registration with optimized load times.",
    demo: "https://batteryemergingmarkets.org/",
    github: null,
    type: "client",
  },
  {
    id: 6,
    year: "2024",
    name: "Ace Fuels Business Page",
    description:
      "Clean business landing page focused on speed and clear presentation. Drag-and-drop development with performance optimization.",
    tech: ["Web Dev", "Performance", "Responsive"],
    results: "Live at acefuels-futo.org. Clean business landing page optimized for speed and clear service presentation.",
    demo: "https://acefuels-futo.org/",
    github: null,
    type: "client",
  },
];

// Custom SVG Icon Component
const ThemeIcon = ({ isDark }: { isDark: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300"
  >
    {isDark ? (
      <path
        d="M21 12.79C20.8427 14.492 20.2039 16.1144 19.1582 17.4668C18.1125 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41102 20.3741 6.88299 19.5345 5.67422 18.3258C4.46545 17.117 3.62593 15.589 3.2539 13.9205C2.88187 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.8875 6.53323 4.84185C7.8856 3.7962 9.50797 3.15731 11.21 3C10.2134 4.34827 9.73385 6.00945 9.85851 7.68141C9.98317 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6517 13.7866 21 12.79Z"
        fill="currentColor"
        className="text-foreground"
      />
    ) : (
      <>
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M12 5V3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
        <path
          d="M12 21V19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
        <path
          d="M16.95 7.05L18.36 5.64"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
        <path
          d="M5.64 18.36L7.05 16.95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
        <path
          d="M19 12H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
        <path
          d="M3 12H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
        <path
          d="M16.95 16.95L18.36 18.36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
        <path
          d="M5.64 5.64L7.05 7.05"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground"
        />
      </>
    )}
  </svg>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px 0px -50px 0px" },
    );
    sectionsRef.current = sectionsRef.current.slice(0, SECTIONS.length);
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [isMounted]);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const MobileNav = () => {
    return (
      <>
        {/* Floating Trigger Button */}
        <nav className="fixed bottom-6 right-6 z-[60] lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-full shadow-2xl transition-all duration-300 active:scale-90 hover:scale-105 font-mono text-xs uppercase tracking-widest border border-background/20"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isMenuOpen ? "bg-red-500 animate-pulse" : "bg-green-500"}`} />
          </button>
        </nav>

        {/* Backdrop */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-background/20 backdrop-blur-sm z-[50] lg:hidden transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        />

        {/* Half-height Bottom Sheet */}
        <div
          id="mobile-menu"
          className={`fixed bottom-0 left-0 right-0 z-[55] lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border/50 rounded-t-[2.5rem] p-8 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? "translate-y-0" : "translate-y-full"
            } max-h-[70vh] overflow-y-auto`}
        >
          <div className="w-12 h-1.5 bg-muted-foreground/20 rounded-full mx-auto mb-8" />

          <div className="space-y-12">
            {/* Sections */}
            <div className="grid grid-cols-2 gap-4">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center justify-between group ${activeSection === section.id
                    ? "bg-foreground text-background"
                    : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                    }`}
                >
                  <span>{section.label}</span>
                  <div className={`w-1 h-1 rounded-full bg-current transition-transform duration-500 ${activeSection === section.id ? "scale-150" : "scale-0"}`} />
                </button>
              ))}
            </div>

            {/* Quick Contact Emails */}
            <div className="space-y-4">
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono mb-2">Connect Directly</div>
              <div className="space-y-2">
                <Link
                  href="mailto:damianokpala111@gmail.com"
                  className="flex items-center justify-between p-4 bg-muted/20 border border-border/40 rounded-2xl group transition-all duration-300 active:scale-[0.98]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xs font-mono text-foreground truncate mr-2">damianokpala111@gmail.com</span>
                  <div className="p-2 bg-foreground/5 rounded-lg group-hover:bg-foreground/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="mailto:tech-seo-okpala@next-gentitan.com"
                  className="flex items-center justify-between p-4 bg-muted/20 border border-border/40 rounded-2xl group transition-all duration-300 active:scale-[0.98]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xs font-mono text-foreground truncate mr-2">tech-seo-okpala@next-gentitan.com</span>
                  <div className="p-2 bg-foreground/5 rounded-lg group-hover:bg-foreground/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-3 md:gap-4">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-1.5 md:w-2 h-6 md:h-8 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background ${activeSection === section.id
                ? "bg-foreground"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              aria-label={`Navigate to ${section.label}`}
              aria-current={activeSection === section.id ? "true" : "false"}
            />
          ))}
        </div>
      </nav>

      <MobileNav />

      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed right-4 md:right-8 top-4 md:top-8 z-10 p-2.5 md:p-3 rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background group"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
          <div
            className={`absolute transition-all duration-300 ${isDark ? "opacity-0 rotate-90" : "opacity-100"}`}
          >
            <ThemeIcon isDark={false} />
          </div>
          <div
            className={`absolute transition-all duration-300 ${isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          >
            <ThemeIcon isDark={true} />
          </div>
        </div>
      </button>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 pb-20 lg:pb-0">
        {/* INTRO */}
        <header
          id="intro"
          ref={setSectionRef(0)}
          className="min-h-screen flex items-center animate-fade-in-up pt-16 lg:pt-0"
        >
          <div className="w-full">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono tracking-wider">
                  FOUNDER & SYSTEMS THINKER / {new Date().getFullYear()}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  Chibuike Okpala
                  <br />
                  <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Building trust infrastructure for broken markets.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4 border-l-2 border-muted-foreground/30 pl-4">
                  I help businesses with websites that aren't bringing customers. Technical audits, performance fixes, and clear explanations — no jargon.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 max-w-lg">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Founder of Koordi. Systems thinker and software engineer. I build trust infrastructure, diagnose coordination failures, and ship products that make markets work better.
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    href="#connect"
                    className="px-4 py-2 bg-foreground text-background rounded-lg text-sm hover:opacity-90 transition-opacity"
                  >
                    Available for Work
                  </Link>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Taking new projects
                  </div>
                </div>
              </div>

              {/* METRICS */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-12 border-t border-border/30">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-foreground">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Sites built & audited
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-foreground">
                    9
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Technical SEO audits
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-foreground">
                    Koordi
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Trust infrastructure live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* EXPERIENCE */}
        <section
          id="experience"
          ref={setSectionRef(1)}
          className="min-h-screen py-12 sm:py-20 md:py-32 animate-fade-in-up"
        >
          <div className="space-y-8 sm:space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
                Experience
              </h2>
              <div className="text-xs sm:text-sm text-muted-foreground font-mono">
                2024 — Present
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <div
                  key={index}
                  className="group py-4 sm:py-6 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4">
                    <div className="lg:col-span-2">
                      <div className="text-base sm:text-lg md:text-xl font-light text-muted-foreground">
                        {exp.year}
                      </div>
                    </div>

                    <div className="lg:col-span-10 space-y-1 sm:space-y-2">
                      <div>
                        <h3 className="text-base sm:text-lg font-medium">
                          {exp.role}
                        </h3>
                        {exp.company && (
                          <div className="text-sm sm:text-base text-muted-foreground">
                            {exp.company}
                          </div>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CURRENT AVAILABILITY */}
            <div className="pt-6 sm:pt-8 border-t border-border/30">
              <div className="text-xs sm:text-sm text-muted-foreground font-mono mb-1 sm:mb-2">
                Currently
              </div>
              <p className="text-sm sm:text-base text-foreground">
                Available for contract work. Leading development at MobDoc'r and
                taking selective client projects.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          ref={setSectionRef(2)}
          className="py-12 sm:py-20 animate-fade-in-up"
        >
          <div className="space-y-8 sm:space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              How I Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  step: "01",
                  title: "Understand",
                  desc: "What's really broken beneath the surface?",
                },
                {
                  step: "02",
                  title: "Diagnose",
                  desc: "Technical audit to confirm the root cause.",
                },
                {
                  step: "03",
                  title: "Structure",
                  desc: "Design the fix — not just code, but the system.",
                },
                {
                  step: "04",
                  title: "Build",
                  desc: "Clean execution. No unnecessary complexity.",
                },
                {
                  step: "05",
                  title: "Transfer",
                  desc: "You get the result and the understanding.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-4 border border-border/50 rounded-lg"
                >
                  <div className="text-xs text-muted-foreground font-mono mb-2">
                    {item.step}
                  </div>
                  <div className="font-medium mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK (What I Help With) */}
        <section
          id="work"
          ref={setSectionRef(3)}
          className="min-h-screen py-12 sm:py-20 md:py-32 animate-fade-in-up"
        >
          <div className="space-y-8 sm:space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
                What I Help With
              </h2>
              <div className="text-xs sm:text-sm text-muted-foreground font-mono">
                Clear scope, no surprises
              </div>
            </div>

            {/* Three service areas */}
            <div className="grid gap-6 sm:gap-8">
              {WORK_DOORS.map((door, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 border border-border/50 rounded-lg hover:border-foreground/30 transition-colors"
                >
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    {door.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {door.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {door.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-muted-foreground border border-border rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={setSectionRef(4)}
          className="min-h-screen py-12 sm:py-20 md:py-32 animate-fade-in-up"
        >
          <div className="space-y-8 sm:space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
                Client Work
              </h2>
              <div className="text-xs sm:text-sm text-muted-foreground font-mono">
                2024 — 2026
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {PROJECTS.filter((p) => p.type === "client").map((project) => (
                <div
                  key={project.id}
                  className={`group py-4 sm:py-6 border-b transition-colors duration-500 ${expandedProject === project.id
                    ? "border-foreground/30"
                    : "border-border/50 hover:border-border"
                    }`}
                >
                  <div
                    className="flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4 cursor-pointer"
                    onClick={() => toggleProject(project.id)}
                  >
                    <div className="lg:col-span-2">
                      <div className="text-base sm:text-lg md:text-xl font-light text-muted-foreground">
                        {project.year}
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-1 sm:space-y-2">
                      <h3 className="text-base sm:text-lg font-medium">
                        {project.name}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="lg:col-span-4 pt-2 sm:pt-0">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs text-muted-foreground border border-border rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links section */}
                  <div className="mt-3 flex gap-3 sm:gap-4 text-xs sm:text-sm">
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Live demo</span>
                        <svg
                          className="w-3 h-3 transform group-hover/link:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Expanded content */}
                  {expandedProject === project.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/30 space-y-3 sm:space-y-4 animate-fade-in-up">
                      <div>
                        <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
                          Results
                        </div>
                        <p className="text-sm sm:text-base text-foreground">
                          {project.results}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CONNECT */}
        <section
          id="connect"
          ref={setSectionRef(5)}
          className="py-12 sm:py-20 md:py-32 animate-fade-in-up"
        >
          <div className="space-y-6 sm:space-y-8">


            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              Let's work together
            </h2>



            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether you need a technical SEO audit, a website that actually performs, or you're thinking about trust and coordination problems in your market — reach out. I respond within 24 hours.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <Link
                  href="mailto:damianokpala01@gmail.com"
                  className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground hover:text-muted-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded w-fit"
                >
                  <span>damianokpala01@gmail.com</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <Link
                  href="mailto:tech-seo-okpala@next-gentitan.com"
                  className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground hover:text-muted-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded w-fit"
                >
                  <span>tech-seo-okpala@next-gentitan.com</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4">
                <a
                  href="https://github.com/techchibuike"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/tech-chibuike/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/techChibuike"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                © {new Date().getFullYear()} Chibuike Okpala
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-16 lg:h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}