export function VisionSection() {
  return (
    <section
      id="about"
      className="relative border-y border-soft hero-surface py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,244,245,0.06),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-soft">
          Company Vision
        </p>
        <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-strong sm:text-4xl md:text-5xl">
          To become the world&apos;s most trusted{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
            digital workforce ecosystem
          </span>
          , where organizations of every size gain instant access to exceptional
          talent and where skilled professionals thrive without geographic
          barriers.
        </h2>
        <p className="mt-6 text-sm text-muted sm:text-base">
          WQT exists to make world-class talent universally accessible. We
          connect ambitious organizations with the people, capabilities, and
          operating models required to build, scale, and sustain category-defining
          digital products and platforms.
        </p>
      </div>
    </section>
  );
}


