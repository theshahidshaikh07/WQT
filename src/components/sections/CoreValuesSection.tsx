const coreValues = [
    {
        title: "Integrity",
        description: "Transparent, ethical partnerships",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Excellence",
        description: "Deliver superior talent and services",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
    {
        title: "Innovation",
        description: "Embrace new technologies and smarter solutions",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: "Customer Focus",
        description: "Put client success at the center of everything",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

export function CoreValuesSection() {
    return (
        <section
            id="core-values"
            className="relative border-b border-soft bg-hero py-20 sm:py-28"
        >
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                        <div className="h-2 w-2 rounded-full bg-violet-500" />
                        <p className="text-xs font-bold uppercase tracking-[0.2em]">
                            Core Values
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
                        What Drives Us Forward
                    </h2>
                    <p className="text-lg text-muted sm:text-xl leading-relaxed">
                        Our values shape every decision, partnership, and interaction
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {coreValues.map((value, index) => (
                        <article
                            key={value.title}
                            className="group relative overflow-hidden rounded-3xl border border-soft bg-[var(--section-strong)] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-violet-500/30 p-8 text-center reveal-zoom"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Gradient top border */}
                            <div className="absolute inset-x-0 top-0 card-top-border" />

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center rounded-xl p-3 mb-6 transition-all duration-300 group-hover:scale-110 icon-box">
                                {value.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-strong mb-3 group-hover:text-violet-600 transition-colors duration-300">
                                {value.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted leading-relaxed">
                                {value.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
