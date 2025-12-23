const steps = [
  {
    step: "01",
    title: "Define outcomes, not roles",
    body: "We start with your product, roadmap, and constraints — then design the right digital workforce model around outcomes, not job titles.",
  },
  {
    step: "02",
    title: "Curated global shortlist",
    body: "Within days, you receive a handpicked slate of elite talent aligned to your stack, culture, and operating model.",
  },
  {
    step: "03",
    title: "Seamless integration",
    body: "Experts embed into your rituals, tools, and codebase, operating as a true extension of your in-house team.",
  },
  {
    step: "04",
    title: "Scale and optimize",
    body: "Easily flex your workforce up or down as priorities shift — with performance, quality, and SLAs continuously monitored.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative border-b border-soft bg-strong py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:px-8">
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-soft">
            How it works
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
            Transform hiring complexity into a simple, repeatable motion.
          </h2>
          <p className="text-sm text-muted sm:text-base">
            From discovery to deployment, WQT compresses months of hiring effort
            into a frictionless, outcome-oriented talent experience.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.step}
              className="group relative overflow-hidden rounded-3xl border border-soft bg-gradient-to-br from-[color-mix(in_srgb,var(--section-subtle)_88%,transparent)] via-[color-mix(in_srgb,var(--section-subtle)_65%,transparent)] to-[color-mix(in_srgb,var(--section-subtle)_88%,transparent)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition hover:border-[var(--accent-cyan)]/50 hover:shadow-[0_25px_80px_rgba(14,165,233,0.18)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-400/30" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-soft">
                {step.step}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-strong sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-muted sm:text-sm">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


