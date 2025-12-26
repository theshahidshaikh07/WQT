import Link from "next/link";

const services = [
  {
    title: "Software & Cloud Engineering",
    body: "Full-stack, backend, and cloud-native engineers who architect, build, and scale resilient digital platforms.",
    tags: ["Microservices", "Cloud-native", "API Platforms"],
    href: "/services/software-cloud-engineering",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-cyan-500/10 to-blue-500/10",
    accentColor: "cyan",
  },
  {
    title: "Data, AI & Automation",
    body: "Applied data scientists, ML engineers, and automation specialists turning data into repeatable, intelligent systems.",
    tags: ["GenAI", "MLOps", "Process Automation"],
    href: "/services/data-ai-automation",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-violet-500/10 to-purple-500/10",
    accentColor: "violet",
  },
  {
    title: "Cybersecurity & Infrastructure",
    body: "Security-first engineers and SREs protecting, hardening, and scaling mission-critical infrastructure.",
    tags: ["Zero Trust", "Cloud Security", "SRE"],
    href: "/services/cybersecurity-infrastructure",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-emerald-500/10 to-teal-500/10",
    accentColor: "emerald",
  },
  {
    title: "Product Design & Development",
    body: "Product managers and designers crafting experiences that balance usability, feasibility, and business impact.",
    tags: ["UX/UI", "Product Strategy", "Design Systems"],
    href: "/services/product-design-development",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: "from-pink-500/10 to-rose-500/10",
    accentColor: "pink",
  },
  {
    title: "DevOps, SRE & Platform Engineering",
    body: "Platform teams who automate delivery, observability, and reliability at enterprise scale.",
    tags: ["DevOps", "Platform", "Observability"],
    href: "/services/devops-sre-platform",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-orange-500/10 to-amber-500/10",
    accentColor: "orange",
  },
  {
    title: "Project Management & Tech Consulting",
    body: "Program leaders and consultants aligning technology execution with strategic outcomes.",
    tags: ["Delivery", "Change", "Advisory"],
    href: "/services/project-management-consulting",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-indigo-500/10 to-blue-500/10",
    accentColor: "indigo",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-b border-soft bg-hero py-20 sm:py-28 overflow-hidden"
    >

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 reveal-from-right">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              Our Services
            </p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
            Complete Digital Workforce
          </h2>
          <p className="text-lg text-muted sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Build multi-disciplinary teams across the entire digital delivery lifecycle, from concept to production and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative h-full overflow-hidden rounded-3xl border border-soft bg-[var(--section-strong)] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-cyan-500/30 flex flex-col ${index % 2 === 0 ? "reveal-from-left" : "reveal-from-right"}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient top border */}
              <div className="absolute inset-x-0 top-0 card-top-border" />



              {/* Content */}
              <div className="relative z-10 p-8 flex-1 flex flex-col">
                {/* Icon */}
                <div className="inline-flex items-center justify-center rounded-xl p-3 mb-6 transition-all duration-300 w-fit group-hover:scale-110 icon-box">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-strong mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {service.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider pill-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-1" />

                {/* Learn More Button - Full Width at Bottom */}
                <Link href={service.href} className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn btn-card">
                  <span>Learn more</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
