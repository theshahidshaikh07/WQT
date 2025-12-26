import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function DevOpsSREPlatformPage() {
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
                            DevOps, SRE & Platform Engineering
                        </h1>

                        <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                            Platform teams who automate delivery, observability, and reliability at enterprise scale.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {["DevOps", "Platform", "Observability"].map((tag) => (
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
                            Automate, Monitor, Scale with Confidence
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Our DevOps and SRE teams build automated pipelines, observability platforms, and self-service infrastructure that accelerate delivery and ensure reliability.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "CI/CD Automation",
                                description: "Build automated deployment pipelines with GitOps, continuous testing, and progressive delivery.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Platform Engineering",
                                description: "Create internal developer platforms with self-service infrastructure and golden paths.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Observability & Monitoring",
                                description: "Implement comprehensive monitoring, logging, and tracing with SLOs and alerting.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Container Orchestration",
                                description: "Deploy and manage containerized applications with Kubernetes and service mesh.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Infrastructure as Code",
                                description: "Manage infrastructure declaratively with Terraform, Pulumi, and GitOps workflows.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Incident Management",
                                description: "Build incident response systems with on-call rotations, runbooks, and post-mortems.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
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
                            DevOps & Platform Tools
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Modern tools for automated, reliable infrastructure
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "ArgoCD", "Flux"] },
                            { category: "Containers", items: ["Kubernetes", "Docker", "Helm", "Istio", "Linkerd", "Rancher"] },
                            { category: "IaC & Config", items: ["Terraform", "Pulumi", "Ansible", "Chef", "CloudFormation", "Crossplane"] },
                            { category: "Observability", items: ["Prometheus", "Grafana", "Datadog", "New Relic", "ELK Stack", "Jaeger"] },
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
                            Platform-Driven Excellence
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            How our platform teams accelerate delivery and ensure reliability
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Internal Developer Platforms",
                                description: "Build self-service platforms that enable developers to deploy, monitor, and manage applications without infrastructure expertise.",
                            },
                            {
                                title: "GitOps & Continuous Delivery",
                                description: "Implement GitOps workflows with automated deployments, rollbacks, and progressive delivery strategies like canary and blue-green.",
                            },
                            {
                                title: "Multi-Cloud Infrastructure",
                                description: "Manage infrastructure across AWS, Azure, and GCP with unified tooling, cost optimization, and disaster recovery.",
                            },
                            {
                                title: "Observability & SRE Practices",
                                description: "Establish SLOs, error budgets, and comprehensive monitoring to ensure system reliability and rapid incident response.",
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
                        Ready to Accelerate Your Delivery?
                    </h2>
                    <p className="text-lg text-muted mb-8">
                        Let's discuss how our DevOps and platform engineers can automate your infrastructure and improve reliability.
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
