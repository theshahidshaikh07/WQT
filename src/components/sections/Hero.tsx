import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-soft bg-hero"
    >
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24 lg:px-8">
        {/* Scrolling Badge - Desktop only (absolute positioned with animation) */}
        <div className="hidden md:block absolute top-8 left-4 right-4 lg:left-8 lg:right-8 pointer-events-none z-10 reveal-on-scroll">
          <p
            className="animate-marquee relative inline-flex items-center gap-2 rounded-full border border-[var(--badge-border)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm shadow-sm bg-[var(--badge-bg)] text-[var(--badge-text)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
            Digital Workforce, Reimagined
          </p>
        </div>

        <div className="max-w-xl space-y-8 flex flex-col items-center md:items-start text-center md:text-left reveal-from-left">
          {/* Static Badge - Mobile only */}
          <p
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-soft px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] backdrop-blur-sm shadow-sm"
            style={{
              backgroundColor: 'var(--badge-bg)',
              color: 'var(--badge-text)'
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
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

          <div className="relative flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="#contact"
              className="primary-cta group relative inline-flex w-72 justify-center items-center overflow-hidden rounded-full px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Build your workforce</span>
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="#how-it-works"
              className="cta-secondary group relative inline-flex w-72 justify-center items-center rounded-full px-4 py-3.5 text-xs font-medium uppercase tracking-[0.22em] whitespace-nowrap transition-all duration-200"
            >
              <span>How it works</span>
            </Link>

            {/* Cool Lottie-style Animation - Desktop Only */}
            <div className="absolute left-[20rem] hidden lg:flex h-24 w-24 items-center justify-center opacity-80 pointer-events-none">
              {/* Spinning Dashed Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed hero-anim-ring-outer animate-[spin_10s_linear_infinite]" />

              {/* Reverse Dotted Ring */}
              <div className="absolute inset-2 rounded-full border border-dotted hero-anim-ring-inner animate-[spin_8s_linear_infinite_reverse]" />

              {/* Pulsing Core */}
              <div className="relative h-8 w-8 rounded-xl hero-anim-core animate-pulse shadow-lg flex items-center justify-center">
                <div className="h-2 w-2 hero-anim-core-dot rounded-full animate-ping" />
              </div>

              {/* Orbiting Particle */}
              <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                <div className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1 rounded-full hero-anim-particle" />
              </div>
            </div>
          </div>

        </div>

        {/* Glassmorphism panel */}
        <div className="relative mt-6 flex-1 md:mt-0 reveal-from-right">
          <div className="glass-panel mx-auto max-w-md p-5 backdrop-blur-2xl md:max-w-none">
            <div className="flex items-center justify-between gap-4 border-b border-soft pb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-soft">
                  Live Talent Matrix
                </p>
                <p className="mt-1 text-xs text-soft">
                  Real-time availability across skills &amp; regions.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-soft bg-panel text-strong flash-icon">
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
                  className="flex items-center justify-between rounded-2xl border border-soft bg-subtle px-3 py-2.5 transition-colors duration-200 hover:border-[var(--accent-cyan)]/50"
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


