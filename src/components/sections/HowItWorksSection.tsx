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
      className="relative border-b border-soft bg-hero py-20 sm:py-28 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20 reveal-from-right">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              How it works
            </p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
            From vision to execution in four simple steps.
          </h2>
          <p className="text-base text-muted sm:text-lg leading-relaxed">
            WQT transforms complex delivery challenges into a streamlined, outcome-driven process—designed for speed, quality, and scale.
          </p>
        </div>

        {/* Compact Zigzag Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line (Snake Path) - Visible on Desktop */}
          <svg className="absolute top-0 bottom-0 left-0 right-0 w-full h-full hidden md:block pointer-events-none -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 12 0 V 12 Q 12 25 50 25 T 88 38 V 62 Q 88 75 50 75 T 12 88 V 100"
              fill="none"
              stroke="url(#gradient-line)"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              className="opacity-20"
            />
            <defs>
              <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--text-soft)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="var(--accent-violet)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--text-soft)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const rotateClass = isEven ? "-rotate-3 group-hover:-rotate-6" : "rotate-3 group-hover:rotate-6";

              return (
                <div
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 group ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Number Node */}
                  <div className={`flex-shrink-0 relative ${isEven ? 'reveal-from-left' : 'reveal-from-right'}`}>
                    <div className={`h-20 w-20 md:h-24 md:w-24 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-500 z-10 relative ${rotateClass} step-number-box`}>
                      <span className="text-2xl md:text-3xl font-black">
                        {step.step}
                      </span>

                      {/* Decorative Corner Fading Lines */}
                      {/* Top Right Corner */}
                      <div className="absolute -top-3 -right-3 h-6 w-6 pointer-events-none">
                        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-gray-400 to-transparent theme-dark:from-gray-500" />
                        <div className="absolute top-0 right-0 h-[2px] w-full bg-gradient-to-l from-gray-400 to-transparent theme-dark:from-gray-500" />
                      </div>

                      {/* Bottom Left Corner */}
                      <div className="absolute -bottom-3 -left-3 h-6 w-6 pointer-events-none">
                        <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-gray-400 to-transparent theme-dark:from-gray-500" />
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-gray-400 to-transparent theme-dark:from-gray-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full ${isEven ? 'reveal-from-right' : 'reveal-from-left'}`}>
                    <div className="relative overflow-hidden rounded-3xl border border-soft p-6 md:p-8 shadow-md backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-gray-400 hover:shadow-2xl text-left how-step-card">
                      {/* Top border gradient */}
                      <div className="absolute inset-x-0 top-0 card-top-border" />

                      <div className="mb-4">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full pill-tag">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-strong mb-3 md:mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted leading-relaxed">
                        {step.body}
                      </p>

                      {/* AI note */}
                      {step.note && (
                        <div className="mt-5 rounded-xl p-4 text-left note-box">
                          <div className="flex items-start gap-3">
                            <p className="text-sm italic text-soft leading-relaxed">
                              {step.note}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
