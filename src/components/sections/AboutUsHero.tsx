export function AboutUsHero() {
    return (
        <section
            id="about-hero"
            className="relative overflow-hidden border-b border-soft bg-hero"
        >
            {/* Grid pattern */}
            <div className="pointer-events-none absolute inset-0">
                <div className="hero-grid" />
            </div>

            {/* Subtle floating gradient orb */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <div className="flex justify-center mb-8 reveal-on-scroll">
                        <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 backdrop-blur-sm pill-badge">
                            <div className="h-2 w-2 rounded-full bg-violet-500" />
                            <p className="text-xs font-bold uppercase tracking-[0.25em]">
                                About WQT
                            </p>
                        </div>
                    </div>

                    {/* Main Heading with creative layout */}
                    <div className="space-y-4 mb-10 reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
                        <h1 className="text-5xl font-bold tracking-tight text-strong sm:text-6xl lg:text-7xl">
                            World's Quality
                        </h1>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500" />
                            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-[var(--accent-cyan)] via-violet-400 to-[var(--accent-violet)] bg-clip-text text-transparent">
                                Talent
                            </h1>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500" />
                        </div>
                    </div>

                    {/* Mission Statement in Card */}
                    <div className="mb-12 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
                        <div className="relative group max-w-3xl mx-auto">
                            {/* Subtle gradient border effect */}
                            <div className="absolute -inset-px bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

                            {/* Card content */}
                            <div className="relative rounded-3xl border border-soft bg-panel backdrop-blur-sm p-8 lg:p-10 shadow-sm">
                                <p className="text-lg sm:text-xl text-muted leading-relaxed">
                                    A technology-led workforce solutions company empowering organizations to scale faster, innovate smarter, and compete globally with world-class digital expertise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Creative value props */}
                    <div className="flex flex-wrap items-center justify-center gap-6 reveal-on-scroll" style={{ animationDelay: '0.3s' }}>
                        {[
                            { icon: "🌍", text: "Global Reach" },
                            { icon: "⚡", text: "Fast Matching" },
                            { icon: "🎯", text: "Quality First" },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="group flex items-center gap-3 rounded-full px-6 py-3 border border-soft bg-[var(--section-strong)] backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg"
                            >
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-semibold text-strong">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </section>
    );
}
