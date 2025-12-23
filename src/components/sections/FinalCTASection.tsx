import Link from "next/link";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative border-b border-soft bg-strong py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-soft">
          Ready to build your workforce?
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
          Unlock a borderless, on-demand digital workforce built for your next
          decade — not just your next release.
        </h2>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          Share your current challenges, technology stack, and timelines. We&apos;ll
          return with a curated talent blueprint and deployment plan aligned to
          your goals.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#signup"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_45px_rgba(255,255,255,0.6)] transition hover:bg-zinc-200"
          >
            Request talent blueprint
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
          <Link
            href="mailto:hello@wqt.global"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300 hover:text-white"
          >
            Or email us at hello@wqt.global
          </Link>
        </div>
      </div>
    </section>
  );
}


