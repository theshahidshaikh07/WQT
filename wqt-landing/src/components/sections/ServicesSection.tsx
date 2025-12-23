const services = [
  {
    title: "Software & Cloud Engineering",
    body: "Full-stack, backend, and cloud-native engineers who architect, build, and scale resilient digital platforms.",
    tags: ["Microservices", "Cloud-native", "API Platforms"],
  },
  {
    title: "Data, AI & Automation",
    body: "Applied data scientists, ML engineers, and automation specialists turning data into repeatable, intelligent systems.",
    tags: ["GenAI", "MLOps", "Process Automation"],
  },
  {
    title: "Cybersecurity & Infrastructure",
    body: "Security-first engineers and SREs protecting, hardening, and scaling mission-critical infrastructure.",
    tags: ["Zero Trust", "Cloud Security", "SRE"],
  },
  {
    title: "Product Design & Development",
    body: "Product managers and designers crafting experiences that balance usability, feasibility, and business impact.",
    tags: ["UX/UI", "Product Strategy", "Design Systems"],
  },
  {
    title: "DevOps, SRE & Platform Engineering",
    body: "Platform teams who automate delivery, observability, and reliability at enterprise scale.",
    tags: ["DevOps", "Platform", "Observability"],
  },
  {
    title: "Project Management & Tech Consulting",
    body: "Program leaders and consultants aligning technology execution with strategic outcomes.",
    tags: ["Delivery", "Change", "Advisory"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-b border-soft bg-subtle py-16 sm:py-20"
    >
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-soft">
              Services
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
              A complete digital workforce — curated for modern enterprises.
            </h2>
            <p className="text-sm text-muted sm:text-base">
              Build multi-disciplinary pods or specialized guilds across the
              entire digital delivery lifecycle, from concept to production and
              beyond.
            </p>
          </div>
          <p className="max-w-sm text-xs text-soft sm:text-sm">
            We don&apos;t just staff projects — we assemble outcome-driven teams
            that embed into your ways of working while maintaining enterprise
            rigor.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-soft bg-gradient-to-br from-[color-mix(in_srgb,var(--section-subtle)_90%,transparent)] via-[color-mix(in_srgb,var(--section-subtle)_75%,transparent)] to-[color-mix(in_srgb,var(--section-subtle)_90%,transparent)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition hover:border-[var(--accent-cyan)]/50 hover:shadow-[0_25px_80px_rgba(14,165,233,0.18)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 opacity-60 group-hover:opacity-100" />
              <h3 className="mt-2 text-sm font-semibold text-strong sm:text-base">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-muted sm:text-sm">
                {service.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-panel px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


