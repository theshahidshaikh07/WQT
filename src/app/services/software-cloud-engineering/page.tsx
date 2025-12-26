import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function SoftwareCloudEngineeringPage() {
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
                            Software & Cloud Engineering
                        </h1>

                        <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                            Full-stack, backend, and cloud-native engineers who architect, build, and scale resilient digital platforms.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {["Microservices", "Cloud-native", "API Platforms"].map((tag) => (
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
                            Build the Future of Digital Infrastructure
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Our software and cloud engineering teams deliver world-class technical talent to design, develop, and deploy scalable, secure, and high-performance applications.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Full-Stack Development",
                                description: "End-to-end application development with modern frameworks and best practices.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Cloud-Native Architecture",
                                description: "Scalable, resilient systems built for AWS, Azure, and Google Cloud.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Microservices & APIs",
                                description: "Distributed systems with RESTful and GraphQL APIs for seamless integration.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Backend Engineering",
                                description: "Robust server-side logic, databases, and business logic implementation.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Frontend Development",
                                description: "Modern, responsive UIs with React, Vue, Angular, and Next.js.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Serverless Computing",
                                description: "Event-driven architectures with AWS Lambda, Azure Functions, and more.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                            },
                        ].map((item, index) => (
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
                            Technologies We Master
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Our engineers are proficient in the latest technologies and frameworks
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { category: "Languages", items: ["JavaScript/TypeScript", "Python", "Java", "Go", "C#", "Rust"] },
                            { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "Tailwind CSS"] },
                            { category: "Backend", items: ["Node.js", "Django", "Spring Boot", ".NET Core", "FastAPI", "Express"] },
                            { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
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
                            Real-World Applications
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            How our software and cloud engineering teams drive business value
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "E-Commerce Platforms",
                                description: "Build scalable online stores with real-time inventory, payment processing, and personalized shopping experiences.",
                            },
                            {
                                title: "SaaS Applications",
                                description: "Develop multi-tenant cloud applications with subscription management, analytics, and seamless integrations.",
                            },
                            {
                                title: "Enterprise Systems",
                                description: "Modernize legacy systems with microservices architecture, API gateways, and cloud migration strategies.",
                            },
                            {
                                title: "Mobile Backends",
                                description: "Create robust APIs and backend services for iOS and Android applications with push notifications and real-time sync.",
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
                        Ready to Build Your Next Platform?
                    </h2>
                    <p className="text-lg text-muted mb-8">
                        Let's discuss how our software and cloud engineering experts can accelerate your digital transformation.
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
