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
    year: "2024 — Present",
    role: "Full Stack Developer",
    company: "MobDoc'r (Healthcare MVP)",
    description:
      "Leading development of a healthcare platform connecting users to HMO plans across Nigeria. Built admin, user, and HMO dashboards on a scalable NestJS backend. Driving core product logic and enrollment flow implementation.",
  },
  {
    year: "2024 — Present",
    role: "Technical Builder & SEO Specialist",
    company: "Next-Gen Titan (Digital Agency)",
    description:
      "Building and shipping client projects across industries — from high-converting service websites to SaaS platforms. Responsible for full-stack development, performance optimization, and SEO execution on multiple live projects with measurable results.",
  },
  {
    year: "Feb 2025 — Present",
    role: "Product Engineer",
    company: "Alphoch (Projects Lab)",
    description:
      "Building web applications and MVPs to validate product ideas. Currently developing healthcare efficiency tools and an event planning platform.",
  },
  {
    year: "March 2025 — 2025",
    role: "Full Stack Developer",
    company: "Mountain Crest School",
    description:
      "Designed and developed a complete school website with structured content architecture and an administrative information system — built on a foundation ready to scale into a full student portal.",
  },
  {
    year: "Aug 2024 — Feb 2025",
    role: "Frontend Engineer",
    company: "Dafe Software",
    description:
      "Built a geolocation-based tourism application helping travelers discover businesses and attractions in new environments. Focused on responsive UI and interactive mapping.",
  },
];

const WORK_DOORS = [
  {
    title: "Turn Interest Into Action",
    description:
      "For coaches, consultants, and service professionals getting attention online but not converting it into consistent clients or bookings.",
    services: [
      "Clean site that presents your offer clearly",
      "Intake form that qualifies leads before they reach you",
      "Direct booking flow — no back-and-forth DMs",
      "Performance optimization and analytics setup",
      "SEO so the right people find you first",
    ],
  },
  {
    title: "Build Your Product Right the First Time",
    description:
      "For startups and founders who need a working MVP or full application — built to scale, not just to demo.",
    services: [
      "Full-stack web applications",
      "Dashboard and admin systems",
      "API development and database design",
      "Deployment and DevOps",
      "SaaS architecture and product logic",
    ],
  },
  {
    title: "Fix What's Already Broken",
    description:
      "For businesses with an existing site or system that isn't performing — slow, unclear, or not converting.",
    services: [
      "Performance and load time fixes",
      "Conversion rate optimization",
      "SEO and visibility setup",
      "Lead capture and analytics integration",
      "Mobile experience improvements",
    ],
  },
];

const PROJECTS = [
  {
    id: 1,
    year: "2024",
    name: "Career Coach Experts — via Next-Gen Titan",
    description:
      "Built a high-ticket consultation funnel and global authority positioning system for a career coaching brand. Turned scattered online presence into a consistent, bookable pipeline of serious clients.",
    tech: ["Professional Services", "Funnel", "SEO", "Authority Building"],
    results: "320% increase in bookings · Global authority positioning",
    demo: "https://www.career-coach-experts.com/",
    github: null,
    type: "client",
  },
  {
    id: 2,
    year: "2024",
    name: "Better Body Massage — via Next-Gen Titan",
    description:
      "Built a high-converting digital presence for a medical massage clinic in Florida. Designed around one goal: turning site visitors into booked appointments, with seamless booking integration and a clear service layout.",
    tech: ["Healthcare", "Lead Generation", "Booking Flow"],
    results: "200% increase in leads · Seamless booking integration",
    demo: "https://betterbodymassage.com/",
    github: null,
    type: "client",
  },
  {
    id: 3,
    year: "2024",
    name: "The Botox Barn — via Next-Gen Titan",
    description:
      "Premium aesthetic branding and local search dominance for an elite wellness clinic. Built to attract high-intent local clients through strong positioning and precise technical SEO execution.",
    tech: ["Healthcare", "Local SEO", "Branding"],
    results: "250% lead growth · Local SEO dominance",
    demo: "https://www.thebotoxbarn.com/",
    github: null,
    type: "client",
  },
  {
    id: 4,
    year: "2024",
    name: "Genova Appartamenti — via Next-Gen Titan",
    description:
      "Streamlined direct booking platform for a top-rated vacation rental in Genoa. Designed to cut OTA dependency and move guests from discovery to confirmed booking.",
    tech: ["Hospitality", "Direct Booking", "Mobile"],
    results: "Direct booking pipeline · 100% mobile optimised",
    demo: "https://lalucesugenovaappartamenti.com/",
    github: null,
    type: "client",
  },
  {
    id: 5,
    year: "2024",
    name: "Jake's Tree & Turf — via Next-Gen Titan",
    description:
      "Comprehensive digital presence and local SEO strategy for a specialized landscaping and tree service in Maryland. Showcased 15+ years of expertise.",
    tech: ["Local Business", "SEO", "Lead Generation"],
    results: "15+ years of expertise showcased · 4 core service pillars",
    demo: "https://www.jakestreeandturf.com",
    github: null,
    type: "client",
  },
  {
    id: 6,
    year: "2024 — Present",
    name: "MobDoc'r Healthcare Platform",
    description:
      "Full-stack MVP connecting Nigerians to HMO health insurance plans through a streamlined 3-step enrollment flow. Built three integrated dashboards on a scalable architecture.",
    tech: ["SaaS", "Healthcare", "Full-Stack"],
    results: "3-step enrollment flow · National scale architecture",
    demo: "https://mobdocr-two.vercel.app",
    github: null,
    type: "client",
  },
  {
    id: 7,
    year: "2025",
    name: "ClinicFlow Pro",
    description:
      "Specialized clinic management platform built to reduce admin workload and improve patient experience. Includes online booking, SMS reminders, patient portal, and automated workflow logic.",
    tech: ["SaaS", "Healthcare", "Automation"],
    results: "45% efficiency gain · Fully automated workflows",
    demo: "https://clinicflow-pro.alphoch.com",
    github: null,
    type: "client",
  },
  {
    id: 8,
    year: "2025",
    name: "FGT Events",
    description:
      "High-performance ticketing and event management platform engineered to handle massive simultaneous traffic without breaking. Built for scale from the ground up.",
    tech: ["SaaS", "Events", "High Concurrency"],
    results: "50K+ tickets sold · High traffic ready",
    demo: "https://fgt.koordi.net",
    github: null,
    type: "client",
  },
  {
    id: 9,
    year: "2025",
    name: "Mountain Crest School",
    description:
      "Designed and built a complete school website with structured content architecture and an administrative information system — built as a foundation ready to grow into a full student portal.",
    tech: ["Education", "Web Development", "CMS"],
    results: "Scalable architecture · CMS integrated",
    demo: "http://mountaincrest.sch.ng",
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
          className={`fixed inset-0 bg-background/20 backdrop-blur-sm z-[50] lg:hidden transition-all duration-500 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Half-height Bottom Sheet */}
        <div
          id="mobile-menu"
          className={`fixed bottom-0 left-0 right-0 z-[55] lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border/50 rounded-t-[2.5rem] p-8 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen ? "translate-y-0" : "translate-y-full"
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
                  className={`px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center justify-between group ${
                    activeSection === section.id
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
                  FULL-STACK ENGINEER / {new Date().getFullYear()}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  Chibuike Okpala
                  <br />
                  <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Outcomes First. Everything Else Follows.
                  </span>
                </h1>
              </div>

              <div className="space-y-4 sm:space-y-6 max-w-lg">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Full-stack builder and technical problem-solver. Available for
                  contract and freelance projects. Focused on real outcomes,
                  clean execution, and measurable results.
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
                    Projects delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-foreground">
                    40-60%
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Avg. performance gain
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-foreground">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Client satisfaction
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
                  title: "Diagnose",
                  desc: "I study your situation first — your goals, your gaps, and what's actually holding things back.",
                },
                {
                  step: "02",
                  title: "Define",
                  desc: "We agree on the exact outcome and scope before anything gets built.",
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "Clean, focused execution. No unnecessary complexity, no scope creep.",
                },
                {
                  step: "04",
                  title: "Refine",
                  desc: "Feedback loop until it works exactly right — not just technically, but for your business.",
                },
                { step: "05", title: "Deliver", desc: "You get a working result with measurable impact, not just a finished file." },
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
                2024 — 2025
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
              Have a goal in mind?
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Tell me what you're trying to achieve — not just what you want
                built. I'll diagnose the right solution and we'll go from there.
                <br />
                Response within 24 hours.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <Link
                  href="mailto:damianokpala111@gmail.com"
                  className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground hover:text-muted-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded w-fit"
                >
                  <span>damianokpala111@gmail.com</span>
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
