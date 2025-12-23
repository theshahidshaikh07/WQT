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
              World-Class Digital Talent.
              <span className="mt-2 block bg-gradient-to-r from-[var(--accent-cyan)] via-sky-300 to-[var(--accent-violet)] bg-clip-text text-transparent">
                On-Demand. Without Borders.
              </span>
            </h1>
            <p className="max-w-xl text-pretty text-sm text-muted sm:text-base">
              Unlock a global network of elite engineers, designers, data and
              cloud experts who integrate seamlessly into your teams — helping
              you ship faster, scale smarter, and cut costs without sacrificing
              quality.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_45px_rgba(255,255,255,0.55)] transition hover:bg-zinc-200"
            >
              Build your workforce
              <span className="inline-block transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300 hover:text-white"
            >
              How it works
              <span className="h-px w-7 bg-gradient-to-r from-zinc-500 to-white" />
            </Link>
          </div>

        </div>

        {/* Glassmorphism panel */}
        <div className="relative mt-6 flex-1 md:mt-0">
          <div className="glass-panel mx-auto max-w-md p-5 shadow-[0_0_100px_rgba(15,23,42,0.4)] backdrop-blur-2xl md:max-w-none">
            <div className="flex items-center justify-between gap-4 border-b border-soft pb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-soft">
                  Live Talent Matrix
                </p>
                <p className="mt-1 text-xs text-soft">
                  Real-time availability across skills & regions.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-soft bg-panel text-strong shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
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


