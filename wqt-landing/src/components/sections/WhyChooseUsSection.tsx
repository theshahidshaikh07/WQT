const reasons = [
  {
    title: "Access to the world’s best talent",
    body: "Tap into a rigorously vetted network of senior engineers, designers, strategists, and operators with deep domain experience.",
  },
  {
    title: "On-demand scalability",
    body: "Dial your workforce up or down in weeks, not quarters — with pods, squads, or individual experts tailored to each initiative.",
  },
  {
    title: "Cost-effective & efficient",
    body: "Reduce hiring bottlenecks, overhead, and bench time while accelerating delivery velocity across your portfolio.",
  },
  {
    title: "Seamless integration",
    body: "Talent aligns to your rituals, tools, and governance — from standups and sprint reviews to release and change management.",
  },
  {
    title: "Quality you can trust",
    body: "Every professional is screened for technical depth, communication, reliability, and production-grade execution.",
  },
  {
    title: "Enterprise-grade governance",
    body: "Security, compliance, and performance frameworks designed for regulated and scaled environments.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="relative border-b border-soft bg-strong py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(24,24,27,0.8),_transparent_65%),radial-gradient(circle_at_bottom,_rgba(39,39,42,0.9),_transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-soft">
              Why choose WQT
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
              A digital workforce built for modern, global enterprises.
            </h2>
          </div>
          <p className="max-w-sm text-xs text-soft sm:text-sm">
            WQT was designed for organizations that demand both speed and
            rigor. From high-growth startups to global enterprises, we bring
            quality, predictability, and flexibility to every engagement.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="relative overflow-hidden rounded-3xl border border-soft bg-gradient-to-br from-[color-mix(in_srgb,var(--section-subtle)_90%,transparent)] via-[color-mix(in_srgb,var(--section-subtle)_78%,transparent)] to-[color-mix(in_srgb,var(--section-subtle)_90%,transparent)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl" />
              <h3 className="text-sm font-semibold text-strong sm:text-base">
                {reason.title}
              </h3>
              <p className="mt-2 text-xs text-muted sm:text-sm">
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


