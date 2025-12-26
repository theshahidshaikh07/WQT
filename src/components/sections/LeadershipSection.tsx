import Link from "next/link";

export function LeadershipSection() {
    return (
        <section
            id="leadership"
            className="relative border-b border-soft bg-hero py-20 sm:py-28"
        >
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                        <div className="h-2 w-2 rounded-full bg-violet-500" />
                        <p className="text-xs font-bold uppercase tracking-[0.2em]">
                            Leadership Team
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
                        Meet the Visionary Behind WQT
                    </h2>
                    <p className="text-lg text-muted sm:text-xl leading-relaxed">
                        Driving strategic vision and execution with proven expertise
                    </p>
                </div>

                {/* Leader Card - Compact Split Layout */}
                <div className="max-w-4xl mx-auto reveal-zoom">
                    <article className="group relative overflow-hidden rounded-3xl border border-soft bg-panel shadow-lg transition-all duration-500 hover:shadow-2xl">
                        {/* Gradient top border */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex flex-col md:flex-row">
                            {/* Left Side - Image (Compact) */}
                            <div className="md:w-64 lg:w-72 flex-shrink-0">
                                <div className="relative h-80 md:h-full overflow-hidden">
                                    <img
                                        src="/pooja.jpeg"
                                        alt="Pooja Bhokare - Founder & CEO"
                                        className="w-full h-full object-cover object-center"
                                    />
                                    {/* Gradient overlay on mobile */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-panel/80 to-transparent md:hidden" />
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="flex-1 p-6 md:p-8">
                                {/* Name & Title */}
                                <div className="mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-strong mb-1">
                                        Pooja Bhokare
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <p className="text-base text-muted font-medium">
                                            Founder & CEO
                                        </p>
                                        <Link
                                            href="https://www.linkedin.com/in/pooja-bhokare-84aa09250/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-7 h-7 rounded-full border border-soft bg-transparent hover:bg-strong text-muted hover:text-strong transition-all duration-300 hover:scale-110"
                                            aria-label="LinkedIn Profile"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="space-y-3 text-sm text-muted leading-relaxed mb-5">
                                    <p>
                                        With over a decade of experience in technology leadership and global talent solutions, Pooja drives strategic vision and growth at WQT.
                                    </p>
                                    <p>
                                        Her expertise spans building high-performance teams, scaling digital operations, and delivering innovative workforce solutions that empower organizations worldwide.
                                    </p>
                                </div>

                                {/* Expertise Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {[
                                        "Technology Leadership",
                                        "Global Talent Solutions",
                                        "Enterprise Delivery",
                                        "Digital Transformation",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider pill-tag"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Quote/Achievement */}
                                <div className="pt-4 border-t border-soft">
                                    <p className="text-xs italic text-muted">
                                        "Building bridges between exceptional talent and transformative opportunities."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
