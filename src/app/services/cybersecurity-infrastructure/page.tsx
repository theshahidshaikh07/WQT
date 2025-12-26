import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function CybersecurityInfrastructurePage() {
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
                            Cybersecurity & Infrastructure
                        </h1>

                        <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
                            Security-first engineers and SREs protecting, hardening, and scaling mission-critical infrastructure.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {["Zero Trust", "Cloud Security", "SRE"].map((tag) => (
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
                            Secure, Resilient, Always-On Infrastructure
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Our cybersecurity and infrastructure experts build and maintain secure, scalable systems that protect your business and ensure continuous operations.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Cloud Security",
                                description: "Implement zero-trust architectures, identity management, and cloud-native security controls.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Site Reliability Engineering",
                                description: "Build highly available systems with automated incident response and recovery.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Network Security",
                                description: "Design secure network architectures with firewalls, VPNs, and intrusion detection.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Compliance & Governance",
                                description: "Ensure regulatory compliance with SOC 2, ISO 27001, HIPAA, and GDPR standards.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Threat Detection & Response",
                                description: "Monitor, detect, and respond to security threats in real-time with SIEM and SOC.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Infrastructure as Code",
                                description: "Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
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
                            Security & Infrastructure Tools
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Industry-leading technologies for secure and reliable systems
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { category: "Cloud Platforms", items: ["AWS Security", "Azure Security", "GCP Security", "Multi-Cloud", "Cloud HSM", "KMS"] },
                            { category: "Security Tools", items: ["Vault", "CrowdStrike", "Splunk", "Datadog", "Wiz", "Snyk"] },
                            { category: "Infrastructure", items: ["Terraform", "Ansible", "Kubernetes", "Docker", "Consul", "Prometheus"] },
                            { category: "Compliance", items: ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "PCI DSS", "FedRAMP"] },
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
                            Security-First Solutions
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            How our security experts protect and scale your infrastructure
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Zero Trust Architecture",
                                description: "Implement comprehensive zero-trust security models with identity-based access controls, micro-segmentation, and continuous verification.",
                            },
                            {
                                title: "Cloud Security Posture Management",
                                description: "Continuously monitor and improve cloud security configurations, detect misconfigurations, and ensure compliance across multi-cloud environments.",
                            },
                            {
                                title: "Incident Response & Recovery",
                                description: "Build automated incident response systems with runbooks, disaster recovery plans, and business continuity strategies.",
                            },
                            {
                                title: "Infrastructure Hardening",
                                description: "Secure servers, containers, and networks with best practices, vulnerability scanning, and penetration testing.",
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
                        Ready to Secure Your Infrastructure?
                    </h2>
                    <p className="text-lg text-muted mb-8">
                        Let's discuss how our security and infrastructure experts can protect and scale your critical systems.
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
