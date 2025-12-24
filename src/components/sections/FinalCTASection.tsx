import Link from "next/link";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative border-b border-soft bg-strong py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-soft">
          Ready to build your workforce?
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-strong sm:text-3xl md:text-4xl">
          Build Faster. Scale Smarter. Execute Better.
        </h2>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          Let's build something extraordinary together.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#signup"
            className="primary-cta group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            Start with WQT
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-soft bg-transparent px-8 py-3.5 text-sm font-semibold text-strong transition-all duration-200 hover:border-strong hover:bg-panel"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
