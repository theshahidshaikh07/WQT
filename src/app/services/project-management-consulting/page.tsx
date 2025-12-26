import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function ProjectManagementConsultingPage() {
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
                            Project Management & Tech Consulting
                        </h1>

                        <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                            Program leaders and consultants aligning technology execution with strategic outcomes.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {["Delivery", "Change", "Advisory"].map((tag) => (
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
                            Strategic Execution, Delivered
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Our project managers and tech consultants bridge the gap between business strategy and technical execution, ensuring successful delivery and organizational transformation.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Technical Program Management",
                                description: "Lead complex, multi-team initiatives with roadmap planning, risk management, and stakeholder alignment.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Agile Transformation",
                                description: "Guide organizations through agile adoption with coaching, process design, and cultural change.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Technology Strategy",
                                description: "Define technology roadmaps, architecture decisions, and digital transformation strategies.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Change Management",
                                description: "Navigate organizational change with stakeholder engagement, communication plans, and adoption strategies.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Vendor & Partner Management",
                                description: "Manage technology vendors, negotiate contracts, and ensure successful third-party integrations.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Portfolio Management",
                                description: "Optimize project portfolios with prioritization frameworks, resource allocation, and ROI tracking.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
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
                            PM & Consulting Tools
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Modern tools for effective project delivery and consulting
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { category: "Project Management", items: ["Jira", "Linear", "Asana", "Monday.com", "ClickUp", "Smartsheet"] },
                            { category: "Collaboration", items: ["Confluence", "Notion", "Miro", "Figma", "Slack", "Microsoft Teams"] },
                            { category: "Analytics & BI", items: ["Tableau", "Power BI", "Looker", "Metabase", "Google Analytics", "Mixpanel"] },
                            { category: "Methodologies", items: ["Scrum", "Kanban", "SAFe", "Lean", "Six Sigma", "PRINCE2"] },
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
                            Strategic Delivery Excellence
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            How our consultants drive successful technology initiatives
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Digital Transformation Programs",
                                description: "Lead enterprise-wide digital transformation initiatives with change management, technology adoption, and cultural evolution.",
                            },
                            {
                                title: "Large-Scale System Migrations",
                                description: "Manage complex migrations to cloud, new platforms, or modern architectures with minimal disruption and risk mitigation.",
                            },
                            {
                                title: "Agile at Scale Implementation",
                                description: "Transform organizations with SAFe, LeSS, or custom scaled agile frameworks, including training and coaching.",
                            },
                            {
                                title: "Technology Due Diligence",
                                description: "Assess technology stacks, architectures, and teams for M&A, investments, or strategic planning with comprehensive reports.",
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
                        Ready to Transform Your Delivery?
                    </h2>
                    <p className="text-lg text-muted mb-8">
                        Let's discuss how our project managers and consultants can drive successful technology outcomes.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="primary-cta inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-105"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="mailto:info@wqt.co.in"
                            className="inline-flex items-center gap-2 rounded-full border border-soft bg-transparent px-8 py-3.5 text-sm font-semibold text-strong transition-all duration-200 hover:border-strong hover:bg-panel"
                        >
                            Email Us
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
