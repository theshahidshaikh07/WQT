import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-page text-strong">
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-soft bg-hero">
                <div className="pointer-events-none absolute inset-0">
                    <div className="hero-grid" />
                </div>

                <div className="relative mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                        <div className="h-2 w-2 rounded-full bg-violet-500" />
                        <p className="text-xs font-bold uppercase tracking-[0.2em]">Legal</p>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
                        Terms of Service
                    </h1>

                    <p className="text-lg text-muted">
                        Effective Date: December 25, 2025
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative border-b border-soft bg-strong py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-12">

                            {/* Introduction */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">1. Introduction</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Welcome to WQT (World's Quality Talent). These Terms of Service ("Terms") govern your access to and use of our website, services, and platform (collectively, the "Services").
                                    </p>
                                    <p>
                                        By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                                    </p>
                                </div>
                            </div>

                            {/* Definitions */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">2. Definitions</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p><strong className="text-strong">"WQT," "we," "us," or "our"</strong> refers to World's Quality Talent and its affiliates.</p>
                                    <p><strong className="text-strong">"Client"</strong> refers to any organization or individual engaging our talent solutions services.</p>
                                    <p><strong className="text-strong">"Talent"</strong> refers to professionals, contractors, or consultants provided through our platform.</p>
                                    <p><strong className="text-strong">"Platform"</strong> refers to our website, applications, and related services.</p>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">3. Our Services</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>WQT provides technology-led talent and workforce solutions, including but not limited to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Software and cloud engineering talent</li>
                                        <li>Data, AI, and automation specialists</li>
                                        <li>Cybersecurity and infrastructure professionals</li>
                                        <li>Product design and development experts</li>
                                        <li>DevOps, SRE, and platform engineering teams</li>
                                        <li>Project management and tech consulting services</li>
                                    </ul>
                                    <p>
                                        We reserve the right to modify, suspend, or discontinue any part of our Services at any time with reasonable notice.
                                    </p>
                                </div>
                            </div>

                            {/* User Obligations */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">4. User Obligations</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>When using our Services, you agree to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Provide accurate, current, and complete information</li>
                                        <li>Maintain the security of your account credentials</li>
                                        <li>Comply with all applicable laws and regulations</li>
                                        <li>Not engage in any fraudulent, abusive, or harmful activities</li>
                                        <li>Not attempt to circumvent our security measures</li>
                                        <li>Respect intellectual property rights</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">5. Intellectual Property</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of WQT or its licensors.
                                    </p>
                                    <p>
                                        You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our intellectual property without our express written permission.
                                    </p>
                                </div>
                            </div>

                            {/* Payment Terms */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">6. Payment Terms</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Fees for our Services are outlined in individual service agreements. Payment terms include:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All fees are quoted in USD unless otherwise specified</li>
                                        <li>Payment is due according to the terms specified in your agreement</li>
                                        <li>Late payments may incur additional charges</li>
                                        <li>Refunds are subject to the terms of your specific agreement</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Confidentiality */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">7. Confidentiality</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our engagement. This obligation survives the termination of our agreement.
                                    </p>
                                </div>
                            </div>

                            {/* Limitation of Liability */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">8. Limitation of Liability</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        To the maximum extent permitted by law, WQT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                                    </p>
                                    <p>
                                        Our total liability shall not exceed the amount paid by you for the Services in the twelve (12) months preceding the claim.
                                    </p>
                                </div>
                            </div>

                            {/* Termination */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">9. Termination</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        We may terminate or suspend your access to our Services immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use the Services will immediately cease.
                                    </p>
                                </div>
                            </div>

                            {/* Governing Law */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">10. Governing Law</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which WQT operates, without regard to its conflict of law provisions.
                                    </p>
                                </div>
                            </div>

                            {/* Changes to Terms */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">11. Changes to Terms</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of the Services after such changes constitutes acceptance of the new Terms.
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">12. Contact Information</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        If you have any questions about these Terms, please contact us at:
                                    </p>
                                    <p className="font-semibold text-strong">
                                        Email: legal@wqt.com<br />
                                        Address: [Your Company Address]
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Navigation Links */}
                        <div className="mt-12 flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/privacy-policy"
                                className="text-sm text-violet-600 hover:text-violet-700 font-medium transition-colors"
                            >
                                Privacy Policy →
                            </Link>
                            <Link
                                href="/cookie-policy"
                                className="text-sm text-violet-600 hover:text-violet-700 font-medium transition-colors"
                            >
                                Cookie Policy →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
