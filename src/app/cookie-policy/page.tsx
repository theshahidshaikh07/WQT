import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function CookiePolicyPage() {
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
                        Cookie Policy
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
                                        This Cookie Policy explains how WQT (World's Quality Talent) ("we", "us", "our") uses cookies and similar tracking technologies on our website and services.
                                    </p>
                                    <p>
                                        By using our website, you consent to the use of cookies as described in this policy. You can manage your cookie preferences at any time through your browser settings.
                                    </p>
                                </div>
                            </div>

                            {/* What Are Cookies */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">1. What Are Cookies?</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                                    </p>
                                    <p>
                                        Cookies can be "persistent" (remain on your device until deleted or expired) or "session" (deleted when you close your browser).
                                    </p>
                                </div>
                            </div>

                            {/* Types of Cookies We Use */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">2. Types of Cookies We Use</h2>
                                <div className="space-y-6 text-muted leading-relaxed">

                                    {/* Essential Cookies */}
                                    <div>
                                        <h3 className="text-xl font-bold text-strong mb-3">Essential Cookies</h3>
                                        <p>
                                            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mt-3">
                                            <li><strong className="text-strong">Authentication:</strong> Keep you logged in to your account</li>
                                            <li><strong className="text-strong">Security:</strong> Protect against fraudulent activity and enhance security</li>
                                            <li><strong className="text-strong">Load balancing:</strong> Distribute traffic across servers</li>
                                        </ul>
                                        <p className="mt-3 text-sm italic">
                                            These cookies cannot be disabled as they are essential for the website to work.
                                        </p>
                                    </div>

                                    {/* Performance Cookies */}
                                    <div>
                                        <h3 className="text-xl font-bold text-strong mb-3">Performance and Analytics Cookies</h3>
                                        <p>
                                            These cookies collect information about how visitors use our website, helping us improve functionality and user experience.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mt-3">
                                            <li><strong className="text-strong">Google Analytics:</strong> Track page views, session duration, and user behavior</li>
                                            <li><strong className="text-strong">Performance monitoring:</strong> Identify technical issues and optimize loading times</li>
                                            <li><strong className="text-strong">A/B testing:</strong> Test different versions of pages to improve user experience</li>
                                        </ul>
                                    </div>

                                    {/* Functional Cookies */}
                                    <div>
                                        <h3 className="text-xl font-bold text-strong mb-3">Functional Cookies</h3>
                                        <p>
                                            These cookies enable enhanced functionality and personalization.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mt-3">
                                            <li><strong className="text-strong">Preferences:</strong> Remember your settings and choices (e.g., language, theme)</li>
                                            <li><strong className="text-strong">Personalization:</strong> Provide customized content based on your interests</li>
                                            <li><strong className="text-strong">Chat support:</strong> Enable live chat functionality</li>
                                        </ul>
                                    </div>

                                    {/* Targeting Cookies */}
                                    <div>
                                        <h3 className="text-xl font-bold text-strong mb-3">Targeting and Advertising Cookies</h3>
                                        <p>
                                            These cookies track your browsing activity to deliver relevant advertisements and measure campaign effectiveness.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mt-3">
                                            <li><strong className="text-strong">Ad targeting:</strong> Show relevant ads based on your interests</li>
                                            <li><strong className="text-strong">Retargeting:</strong> Display ads for services you've viewed</li>
                                            <li><strong className="text-strong">Social media:</strong> Enable sharing and track social media engagement</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {/* Third-Party Cookies */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">3. Third-Party Cookies</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        We use services from trusted third-party providers that may set cookies on your device. These include:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">Google Analytics:</strong> Website analytics and performance tracking</li>
                                        <li><strong className="text-strong">Google Tag Manager:</strong> Manage marketing and analytics tags</li>
                                        <li><strong className="text-strong">LinkedIn:</strong> Professional networking and advertising</li>
                                        <li><strong className="text-strong">Facebook Pixel:</strong> Social media advertising and analytics</li>
                                        <li><strong className="text-strong">Hotjar:</strong> User behavior analytics and heatmaps</li>
                                        <li><strong className="text-strong">Intercom/Zendesk:</strong> Customer support and chat functionality</li>
                                    </ul>
                                    <p className="mt-4">
                                        These third parties have their own privacy policies. We recommend reviewing them to understand how they use your data.
                                    </p>
                                </div>
                            </div>

                            {/* Cookie Duration */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">4. Cookie Duration</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>Cookies we use have different lifespans:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-strong">Session cookies:</strong> Deleted when you close your browser</li>
                                        <li><strong className="text-strong">Persistent cookies:</strong> Remain on your device for a set period (from days to years) or until manually deleted</li>
                                    </ul>
                                    <p className="mt-4">
                                        The duration depends on the cookie's purpose and your browser settings.
                                    </p>
                                </div>
                            </div>

                            {/* Managing Cookies */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">5. How to Manage Cookies</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        You have the right to accept or reject cookies. You can manage your cookie preferences through:
                                    </p>

                                    <div className="mt-4">
                                        <h3 className="text-lg font-bold text-strong mb-3">Browser Settings</h3>
                                        <p>Most browsers allow you to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>View and delete cookies</li>
                                            <li>Block third-party cookies</li>
                                            <li>Block cookies from specific websites</li>
                                            <li>Block all cookies</li>
                                            <li>Delete all cookies when you close your browser</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-lg font-bold text-strong mb-3">Browser-Specific Instructions</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong className="text-strong">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                            <li><strong className="text-strong">Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                                            <li><strong className="text-strong">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                                            <li><strong className="text-strong">Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6 p-4 bg-violet-500/10 rounded-xl border border-violet-500/20">
                                        <p className="text-sm">
                                            <strong className="text-strong">⚠️ Note:</strong> Blocking or deleting cookies may affect your ability to use certain features of our website.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Do Not Track */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">6. Do Not Track Signals</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        Some browsers have a "Do Not Track" (DNT) feature that signals websites you visit that you do not want your online activity tracked.
                                    </p>
                                    <p>
                                        Currently, there is no industry standard for responding to DNT signals. We do not currently respond to DNT signals, but we are committed to providing you with meaningful choices about the information collected on our website.
                                    </p>
                                </div>
                            </div>

                            {/* Updates to This Policy */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">7. Updates to This Cookie Policy</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices.
                                    </p>
                                    <p>
                                        The updated version will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="rounded-3xl border border-soft bg-[var(--section-strong)] p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-strong mb-4">Contact Us</h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        If you have questions about our use of cookies or this Cookie Policy, please contact us at:
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
                                href="/privacy-policy"
                                className="text-sm text-violet-600 hover:text-violet-700 font-medium transition-colors"
                            >
                                Privacy Policy →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
