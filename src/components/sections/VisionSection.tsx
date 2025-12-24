export function VisionSection() {
  return (
    <section
      id="about"
      className="relative border-y border-soft hero-surface py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
        <h2
          className="ultra-bold-condensed text-balance text-4xl font-black tracking-tighter text-strong sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
        >
          THE FUTURE OF WORK ISN'T HUMAN <span className="italic opacity-70">OR</span> AI.
          <br />
          IT'S
          <br className="sm:hidden" />
          {" "}
          <span className="bg-gradient-to-r from-[var(--accent-cyan)] via-violet-400 to-[var(--accent-violet)] bg-clip-text text-transparent">
            HUMAN
          </span>{" "}
          <span className="italic opacity-70">AND</span>{" "}
          <span className="bg-gradient-to-r from-[var(--accent-cyan)] via-violet-400 to-[var(--accent-violet)] bg-clip-text text-transparent">
            AI
          </span>
          <br className="sm:hidden" />
          {" "}WORKING
          <br className="sm:hidden" />
          {" "}
          <span className="bg-gradient-to-r from-[var(--accent-cyan)] via-violet-400 to-[var(--accent-violet)] bg-clip-text text-transparent">
            TOGETHER
          </span>
          .
        </h2>
        <p className="mt-8 text-xl font-medium italic text-muted sm:text-2xl">
          WQT IS THE OPERATING SYSTEM FOR THAT FUTURE.
        </p>
      </div>
    </section>
  );
}


