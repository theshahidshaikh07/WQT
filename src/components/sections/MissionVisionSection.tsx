const values = [
    {
        title: "Mission",
        content: "To simplify access to elite tech talent and digital expertise so businesses can innovate without limits, deliver with excellence, and scale with confidence.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Vision",
        content: "To be the world's most trusted partner for on-demand digital workforce solutions, recognized for quality, agility, and transformative impact.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
];

export function MissionVisionSection() {
    return (
        <section
            id="mission-vision"
            className="relative border-b border-soft bg-hero py-20 sm:py-28"
        >
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                        <div className="h-2 w-2 rounded-full bg-violet-500" />
                        <p className="text-xs font-bold uppercase tracking-[0.2em]">
                            Our Purpose
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
                        Mission & Vision
                    </h2>
                    <p className="text-lg text-muted sm:text-xl leading-relaxed">
                        Driving the future of work through innovation and excellence
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    {values.map((item, index) => (
                        <article
                            key={item.title}
                            className={`group relative overflow-hidden rounded-3xl border border-soft bg-panel shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 p-10 ${index === 0 ? "reveal-from-left" : "reveal-from-right"
                                }`}
                        >
                            {/* Top gradient border */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center rounded-2xl p-4 mb-6 border border-soft group-hover:border-strong transition-all duration-300">
                                <div className="text-strong">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-bold text-strong mb-4">
                                {item.title}
                            </h3>

                            {/* Content */}
                            <p className="text-base text-muted leading-relaxed">
                                {item.content}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
