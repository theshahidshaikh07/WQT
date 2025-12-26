import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function ProductDesignDevelopmentPage() {
    return (
        <div className="min-h-screen bg-page text-strong">
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-soft bg-hero">
                <div className="pointer-events-none absolute inset-0">
                    <div className="hero-grid" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-8 pill-badge">
                            <div className="h-2 w-2 rounded-full bg-violet-500" />
                            <p className="text-xs font-bold uppercase tracking-[0.2em]">Services</p>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl xl:text-7xl mb-8">
                            Product Design & Development
                        </h1>

                        <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                            Product managers and designers crafting experiences that balance usability, feasibility, and business impact.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {["UX/UI", "Product Strategy", "Design Systems"].map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider pill-tag"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="relative border-b border-soft bg-strong py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl mb-6">
                            Design Products Users Love
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Our product designers and managers create intuitive, delightful experiences that drive user engagement and business growth.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "UX/UI Design",
                                description: "Create beautiful, intuitive interfaces with user-centered design principles.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Product Strategy",
                                description: "Define product vision, roadmaps, and go-to-market strategies aligned with business goals.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Design Systems",
                                description: "Build scalable design systems with reusable components and brand consistency.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "User Research",
                                description: "Conduct user interviews, usability testing, and data analysis to inform design decisions.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Prototyping & Testing",
                                description: "Create interactive prototypes and validate designs through user testing.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Product Analytics",
                                description: "Track user behavior, measure KPIs, and optimize product performance with data.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                    </svg>
                                ),
                            },
                        ].map((item) => (
                            <article
                                key={item.title}
                                className="group relative overflow-hidden rounded-3xl border border-soft bg-[var(--section-strong)] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-violet-500/30 p-8"
                            >
                                <div className="absolute inset-x-0 top-0 card-top-border" />

                                <div className="inline-flex items-center justify-center rounded-xl p-3 mb-6 transition-all duration-300 group-hover:scale-110 icon-box">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-strong mb-3 group-hover:text-violet-600 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="relative border-b border-soft bg-hero py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                            <div className="h-2 w-2 rounded-full bg-violet-500" />
                            <p className="text-xs font-bold uppercase tracking-[0.2em]">Tech Stack</p>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl mb-6">
                            Design & Product Tools
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Industry-standard tools for world-class product experiences
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { category: "Design Tools", items: ["Figma", "Sketch", "Adobe XD", "Framer", "Principle", "InVision"] },
                            { category: "Prototyping", items: ["Figma", "ProtoPie", "Framer", "Axure", "Marvel", "Origami"] },
                            { category: "Analytics", items: ["Mixpanel", "Amplitude", "Hotjar", "FullStory", "Google Analytics", "Heap"] },
                            { category: "Collaboration", items: ["Miro", "FigJam", "Notion", "Jira", "Linear", "Confluence"] },
                        ].map((tech) => (
                            <div
                                key={tech.category}
                                className="rounded-3xl border border-soft bg-[var(--section-strong)] p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-bold text-strong mb-4">{tech.category}</h3>
                                <ul className="space-y-2">
                                    {tech.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-muted">
                                            <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="relative border-b border-soft bg-strong py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl mb-6">
                            Design-Led Innovation
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            How our product teams drive user engagement and business growth
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Mobile App Design",
                                description: "Create native iOS and Android experiences with platform-specific design patterns and seamless user flows.",
                            },
                            {
                                title: "Web Application UX",
                                description: "Design responsive web applications with intuitive navigation, accessibility, and conversion optimization.",
                            },
                            {
                                title: "Design System Development",
                                description: "Build comprehensive design systems with component libraries, style guides, and documentation for consistent brand experiences.",
                            },
                            {
                                title: "Product Discovery & Strategy",
                                description: "Conduct market research, competitive analysis, and user interviews to define product vision and roadmap.",
                            },
                        ].map((useCase, index) => (
                            <div
                                key={useCase.title}
                                className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-strong mb-2">{useCase.title}</h3>
                                        <p className="text-muted leading-relaxed">{useCase.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative border-b border-soft bg-hero py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-strong sm:text-4xl mb-6">
                        Ready to Design Better Products?
                    </h2>
                    <p className="text-lg text-muted mb-8">
                        Let's discuss how our product designers can create experiences that delight users and drive growth.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="#contact"
                            className="primary-cta inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-105"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 rounded-full border border-soft bg-transparent px-8 py-3.5 text-sm font-semibold text-strong transition-all duration-200 hover:border-strong hover:bg-panel"
                        >
                            Learn More About WQT
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
