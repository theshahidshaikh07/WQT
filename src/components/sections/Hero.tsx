import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-soft hero-surface"
    >
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orbit -left-40 top-10 h-96 w-96 bg-[var(--glow-cyan)]" />
        <div className="hero-orbit -right-32 top-40 h-[28rem] w-[28rem] bg-[var(--glow-violet)]" />
        <div className="hero-grid" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24 lg:px-8">
        <div className="max-w-xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-soft bg-panel px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
            Digital Workforce, Reimagined
          </p>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-strong sm:text-5xl lg:text-6xl">
              Trusted Digital Talent.
              <span className="mt-2 block bg-gradient-to-r from-[var(--accent-cyan)] via-violet-400 to-[var(--accent-violet)] bg-clip-text text-transparent">
                On Demand. Without Borders.
              </span>
            </h1>
            <p className="max-w-xl text-pretty text-sm text-muted sm:text-base">
              A unified digital workforce designed for speed, quality, and scale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="primary-cta group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Build your workforce</span>
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]">
                →
              </span>
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="#how-it-works"
              className="group relative inline-flex items-center gap-3 rounded-full border border-soft px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-strong transition-all duration-200 hover:border-strong hover:bg-panel"
            >
              <span>How it works</span>
              <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
            </Link>
          </div>

        </div>

        {/* Glassmorphism panel */}
        <div className="relative mt-6 flex-1 md:mt-0">
          <div className="glass-panel mx-auto max-w-md p-5 backdrop-blur-2xl md:max-w-none">
            <div className="flex items-center justify-between gap-4 border-b border-soft pb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-soft">
                  Live Talent Matrix
                </p>
                <p className="mt-1 text-xs text-soft">
                  Real-time availability across skills & regions.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-soft bg-panel text-strong">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.5 3 7 13h5l-1 8 6.5-10h-5l1-8Z" />
                </svg>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              {[
                {
                  label: "Software & Cloud Engineering",
                  value: "Elite Pods",
                  health: "High Availability",
                },
                {
                  label: "Data, AI & Automation",
                  value: "Applied Intelligence",
                  health: "Production Ready",
                },
                {
                  label: "Cybersecurity & Infra",
                  value: "Zero-Trust Ready",
                  health: "24/7 Coverage",
                },
                {
                  label: "Product, Design & Delivery",
                  value: "End-to-End Squads",
                  health: "Outcome Aligned",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-2xl border border-soft bg-subtle px-3 py-2.5 hover:border-[var(--accent-cyan)]/50"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-soft">
                      {row.label}
                    </p>
                    <p className="text-[11px] text-soft">{row.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-emerald-500">
                      ● {row.health}
                    </p>
                    <p className="text-[10px] text-soft">
                      Matched in &lt; 72 hours
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-soft pt-3 text-[10px] text-soft">
              <p>Trusted by product leaders, CTOs, and founders globally.</p>
              <p className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-500">
                SLA Backed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


