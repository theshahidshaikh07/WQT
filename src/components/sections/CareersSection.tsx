export function CareersSection() {
  return (
    <section
      id="careers"
      className="relative border-t border-b border-soft bg-subtle py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--glow-cyan),_transparent_55%),radial-gradient(circle_at_bottom,_var(--glow-violet),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-soft">
            Careers
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
            Build the future of digital work.
          </h2>
          <p className="text-sm text-soft sm:text-base">
            Join a global network of senior engineers, designers, product
            leaders, and operators working with ambitious teams across the
            world.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-soft bg-subtle p-5 shadow-sm backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-strong sm:text-base">
              Engineering & Platform
            </h3>
            <p className="mt-2 text-xs text-soft sm:text-sm">
              Work on large-scale systems, cloud-native architectures, and
              resilient platforms.
            </p>
          </div>
          <div className="rounded-3xl border border-soft bg-subtle p-5 shadow-sm backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-strong sm:text-base">
              Data, AI & Product
            </h3>
            <p className="mt-2 text-xs text-soft sm:text-sm">
              Shape intelligent products, ML-driven experiences, and data-first
              decisions.
            </p>
          </div>
          <div className="rounded-3xl border border-soft bg-subtle p-5 shadow-sm backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-strong sm:text-base">
              Delivery & Leadership
            </h3>
            <p className="mt-2 text-xs text-soft sm:text-sm">
              Lead multi-disciplinary teams, complex programs, and global
              transformations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


