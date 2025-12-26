import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>

                    <p className="text-lg text-muted">
                        Last Updated: December 25, 2024
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
                                <h2 className="text-2xl font-bold text-strong mb-4">Introduction</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Welcome to WQT (World's Quality Talent) ("we", "us", "our"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website and use our services.
                                    </p>
                                    <p>
                                        By accessing or using our Site and Services, you agree to the terms of this policy.
                                    </p>
                                </div>
                            </div>

                            {/* Information We Collect */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">1. Information We Collect</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>We may collect personal information that you voluntarily provide when you interact with our Site or Services, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">Contact information:</strong> Name, email address, phone number</li>
                                        <li><strong className="text-strong">Professional information:</strong> Company name, job title, role</li>
                                        <li><strong className="text-strong">Account credentials:</strong> Username, password (encrypted)</li>
                                        <li><strong className="text-strong">Payment information:</strong> Billing details, if applicable</li>
                                        <li><strong className="text-strong">Communication data:</strong> Messages, feedback, support requests</li>
                                    </ul>

                                    <p className="mt-6">We may also collect automatically generated information such as:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">IP address:</strong> Your device's internet protocol address</li>
                                        <li><strong className="text-strong">Browser and device details:</strong> Browser type, operating system, device identifiers</li>
                                        <li><strong className="text-strong">Usage and analytics data:</strong> Pages visited, time spent, click patterns</li>
                                        <li><strong className="text-strong">Cookies and tracking technologies:</strong> As described in our Cookie Policy</li>
                                    </ul>
                                </div>
                            </div>

                            {/* How We Use Your Information */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">2. How We Use Your Information</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>We may use your personal data to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">Provide, operate, and improve our Services:</strong> Deliver talent solutions and platform functionality</li>
                                        <li><strong className="text-strong">Communicate with you:</strong> Send updates, offers, newsletters, or support responses</li>
                                        <li><strong className="text-strong">Analyze usage patterns:</strong> Optimize the platform and improve user experience</li>
                                        <li><strong className="text-strong">Process transactions:</strong> Handle payments and billing</li>
                                        <li><strong className="text-strong">Comply with legal obligations:</strong> Meet regulatory and legal requirements</li>
                                        <li><strong className="text-strong">Prevent fraud and abuse:</strong> Protect our platform and users from malicious activities</li>
                                        <li><strong className="text-strong">Personalize your experience:</strong> Tailor content and recommendations</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cookies and Tracking */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">3. Cookies and Tracking Technologies</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>We use cookies and similar technologies to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">Enhance user experience:</strong> Remember your preferences and settings</li>
                                        <li><strong className="text-strong">Track usage data for analytics:</strong> Understand how users interact with our platform</li>
                                        <li><strong className="text-strong">Enable functionality across the Site:</strong> Maintain sessions and authentication</li>
                                        <li><strong className="text-strong">Deliver targeted content:</strong> Show relevant information based on your interests</li>
                                    </ul>
                                    <p className="mt-4">
                                        You can adjust browser settings to refuse cookies, but this may limit certain features. For more details, please see our <Link href="/cookie-policy" className="text-violet-600 hover:text-violet-700 font-medium">Cookie Policy</Link>.
                                    </p>
                                </div>
                            </div>

                            {/* Sharing Your Information */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">4. Sharing Your Information</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p className="font-semibold text-strong">We do not sell your personal information.</p>
                                    <p>We may share information with:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">Third-party service providers:</strong> Analytics platforms (e.g., Google Analytics), hosting services, payment processors</li>
                                        <li><strong className="text-strong">Legal authorities:</strong> When required by law, court order, or government regulation</li>
                                        <li><strong className="text-strong">Business partners:</strong> When necessary to deliver Services or fulfill contractual obligations</li>
                                        <li><strong className="text-strong">Talent professionals:</strong> Information shared with matched talent as part of our service delivery</li>
                                        <li><strong className="text-strong">In business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                                    </ul>
                                    <p className="mt-4">
                                        All third parties are required to maintain the confidentiality and security of your information.
                                    </p>
                                </div>
                            </div>

                            {/* Data Security */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">5. Data Security</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        We implement reasonable technical, administrative, and physical security measures to protect your information from unauthorized access, alteration, disclosure, or loss.
                                    </p>
                                    <p>These measures include:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Encryption of data in transit and at rest</li>
                                        <li>Regular security audits and assessments</li>
                                        <li>Access controls and authentication mechanisms</li>
                                        <li>Employee training on data protection</li>
                                        <li>Incident response procedures</li>
                                    </ul>
                                    <p className="mt-4">
                                        However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                                    </p>
                                </div>
                            </div>

                            {/* Data Retention */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">6. Data Retention</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                                    </p>
                                    <p>
                                        When we no longer need your information, we will securely delete or anonymize it.
                                    </p>
                                </div>
                            </div>

                            {/* Your Rights */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">7. Your Rights</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>Depending on your location, you may have the following rights:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">Access:</strong> Request a copy of the personal data we hold about you</li>
                                        <li><strong className="text-strong">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                        <li><strong className="text-strong">Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                                        <li><strong className="text-strong">Portability:</strong> Request transfer of your data to another service</li>
                                        <li><strong className="text-strong">Withdraw consent:</strong> Withdraw consent for data processing where consent was the legal basis</li>
                                        <li><strong className="text-strong">Object:</strong> Object to certain types of processing</li>
                                        <li><strong className="text-strong">Restrict processing:</strong> Request limitation on how we use your data</li>
                                    </ul>
                                    <p className="mt-4">
                                        To exercise these rights, please contact us at <strong className="text-strong">privacy@wqt.com</strong>
                                    </p>
                                </div>
                            </div>

                            {/* International Data Transfers */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">8. International Data Transfers</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
                                    </p>
                                    <p>
                                        We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                                    </p>
                                </div>
                            </div>

                            {/* Children's Privacy */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">9. Children's Privacy</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                                    </p>
                                </div>
                            </div>

                            {/* Changes to This Policy */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">10. Changes to This Policy</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. The updated version will display the revised effective date at the top of this page.
                                    </p>
                                    <p>
                                        We encourage you to review this Privacy Policy periodically. Your continued use of our Services after changes constitutes acceptance of the updated policy.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">Contact Us</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        If you have questions about this Privacy Policy or our data practices, please contact us at:
                                    </p>
                                    <div className="mt-4 space-y-2">
                                        <p className="font-semibold text-strong">📧 Email: privacy@wqt.com</p>
                                        <p className="font-semibold text-strong">📧 General Inquiries: info@wqt.co.in</p>
                                        <p className="font-semibold text-strong">🌐 Website: www.wqt.com</p>
                                        <p className="font-semibold text-strong">📍 Address: [Your Company Address]</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Navigation Links */}
                        <div className="mt-12 flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/terms-of-service"
                                className="text-sm text-violet-600 hover:text-violet-700 font-medium transition-colors"
                            >
                                Terms of Service →
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
