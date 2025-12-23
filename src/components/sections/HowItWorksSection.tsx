const steps = [
  {
    step: "01",
    title: "Define What You Want to Deliver",
    body: "Share your objectives, requirements, and success criteria. Whether it's a single project or an ongoing initiative, WQT starts with outcomes—not roles or headcount.",
    badge: "Define Your Goals",
  },
  {
    step: "02",
    title: "We Design the Right Execution Model",
    body: "WQT determines the optimal approach behind the scenes—assembling expertise, workflows, and intelligent automation to meet your goals efficiently.",
    badge: "WQT Designs Execution",
    note: "Human expertise is supported by AI-powered systems to improve speed and consistency.",
  },
  {
    step: "03",
    title: "Execution Happens Seamlessly",
    body: "Work is delivered through structured processes, aligned with your tools and timelines, while WQT manages coordination, quality, and accountability end to end.",
    badge: "Work Is Delivered",
  },
  {
    step: "04",
    title: "Review, Refine, and Scale",
    body: "Outcomes are validated against agreed goals. As needs evolve, WQT scales delivery smoothly—without disruption or operational overhead.",
    badge: "Validate & Scale",
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
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-soft">
            How it works
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
            From vision to execution in four simple steps.
          </h2>
          <p className="text-sm text-muted sm:text-base">
            WQT transforms complex delivery challenges into a streamlined, outcome-driven process—designed for speed, quality, and scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="group relative overflow-hidden rounded-3xl border border-soft bg-gradient-to-br from-[color-mix(in_srgb,var(--section-subtle)_88%,transparent)] via-[color-mix(in_srgb,var(--section-subtle)_65%,transparent)] to-[color-mix(in_srgb,var(--section-subtle)_88%,transparent)] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition hover:border-[var(--accent-cyan)]/50 hover:shadow-[0_25px_80px_rgba(14,165,233,0.18)]"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-400/30" />

              {/* Top border line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-black theme-dark:bg-white" />

              {/* Step badge */}
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white theme-dark:bg-white theme-dark:text-black">
                  {step.step}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-soft">
                  {step.badge}
                </span>
              </div>

              <h3 className="mt-2 text-base font-semibold text-strong sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-muted sm:text-base">
                {step.body}
              </p>

              {/* AI note for step 2 */}
              {step.note && (
                <p className="mt-3 text-xs italic text-soft">
                  {step.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
