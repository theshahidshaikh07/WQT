const principles = [
    {
        title: "Global Talent, Local Impact",
        description: "Connect organizations with world-class professionals from around the globe.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Speed & Reliability",
        description: "Deliver vetted specialists quickly and efficiently.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Outcome-Driven Partnerships",
        description: "Align talent strategy with your business objectives.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Adaptive Engagements",
        description: "Flexible resourcing models tailored to project needs.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        ),
    },
];

export function WhatWeStandForSection() {
    return (
        <section
            id="what-we-stand-for"
            className="relative border-b border-soft bg-hero py-20 sm:py-28"
        >
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                        <div className="h-2 w-2 rounded-full bg-violet-500" />
                        <p className="text-xs font-bold uppercase tracking-[0.2em]">
                            What We Stand For
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
                        Our Guiding Principles
                    </h2>
                    <p className="text-lg text-muted sm:text-xl leading-relaxed">
                        WQT empowers your business with the right people, right skills, right now — enabling you to focus on what matters most: innovation, growth, and success.
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {principles.map((principle, index) => (
                        <article
                            key={principle.title}
                            className="group relative overflow-hidden rounded-3xl border border-soft bg-[var(--section-strong)] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-violet-500/30 p-8 reveal-zoom"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Gradient top border */}
                            <div className="absolute inset-x-0 top-0 card-top-border" />

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center rounded-xl p-3 mb-6 transition-all duration-300 group-hover:scale-110 icon-box">
                                {principle.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-strong mb-3 group-hover:text-violet-600 transition-colors duration-300">
                                {principle.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted leading-relaxed">
                                {principle.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
