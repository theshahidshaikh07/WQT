'use client';

import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

const benefits = [
    {
        title: "Work from Anywhere",
        description: "We are a truly global, remote-first company. Work from where you feel most productive.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Competitive Compensation",
        description: "We offer top-tier salaries and equity packages to attract the world's best talent.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Continuous Learning",
        description: "Generous stipends for courses, conferences, and books to keep your skills sharp.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive health coverage and wellness programs to support you and your family.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    }
];

const openPositions = [
    {
        department: "Engineering",
        roles: [
            { title: "Senior Full Stack Engineer", location: "Remote • India", type: "Full-time" },
            { title: "Staff DevOps Engineer", location: "Remote • Global", type: "Full-time" },
            { title: "Lead Frontend Architect", location: "Remote • Europe", type: "Contract" },
        ]
    },
    {
        department: "Product & Design",
        roles: [
            { title: "Senior Product Manager", location: "Remote • US East", type: "Full-time" },
            { title: "Product Designer (UI/UX)", location: "Remote • India", type: "Full-time" },
        ]
    },
    {
        department: "Client Success",
        roles: [
            { title: "Technical Account Manager", location: "London, UK", type: "Hybrid" },
            { title: "Sales Development Rep", location: "Pune, India", type: "On-site" },
        ]
    }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-page text-strong">
            <SiteHeader />
            <main>
                {/* Hero Section */}
                <section className="relative border-b border-soft bg-hero py-20 sm:py-28 overflow-hidden">
                    {/* Grid pattern */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="hero-grid" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
                        <div className="reveal-on-scroll">
                            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                                <div className="h-2 w-2 rounded-full bg-violet-500" />
                                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                                    Join Our Team
                                </p>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
                                Be at the Forefront of<br />
                                <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                                    Global Innovation
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-muted sm:text-xl leading-relaxed">
                                Join a world-class team building the future of digital talent. We're looking for thinkers, makers, and doers to help us reshape how the world works.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Open Positions Section */}
                <section className="relative bg-hero border-b border-soft py-20">
                    <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
                        <div className="text-center mb-16 reveal-from-bottom">
                            <h2 className="text-3xl font-bold text-strong mb-4">Open Positions</h2>
                            <p className="text-muted">Explore opportunities to make an impact.</p>
                        </div>

                        <div className="space-y-12">
                            {openPositions.map((dept, index) => (
                                <div key={dept.department} className="reveal-from-bottom" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <h3 className="text-xl font-bold text-strong">{dept.department}</h3>
                                        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800" />
                                        <span className="text-sm font-medium text-violet-500">{dept.roles.length} roles</span>
                                    </div>

                                    <div className="grid gap-3">
                                        {dept.roles.map((role, rIndex) => (
                                            <div
                                                key={role.title}
                                                className="group relative rounded-2xl border border-soft bg-panel p-6 transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                                            >
                                                <div>
                                                    <h4 className="text-lg font-semibold text-strong group-hover:text-violet-500 transition-colors duration-200">
                                                        {role.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3 mt-1 text-sm text-muted">
                                                        <span className="flex items-center gap-1.5">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {role.location}
                                                        </span>
                                                        <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                                                        <span className="flex items-center gap-1.5">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {role.type}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex-shrink-0">
                                                    <button className="w-full sm:w-auto rounded-xl border border-soft hover:border-violet-500 px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:bg-violet-500 hover:text-white group-hover:border-transparent">
                                                        Apply Now
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Join Us Section */}
                <section className="relative bg-hero border-b border-soft py-20">
                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center mb-16 reveal-from-bottom">
                            <h2 className="text-3xl font-bold text-strong mb-4">Why you belong at WQT</h2>
                            <p className="text-muted">More than just a job—a place to grow, innovate, and thrive.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.title}
                                    className="reveal-zoom rounded-3xl border border-soft bg-panel p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 text-violet-600 mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-strong mb-3">{benefit.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Career CTA */}
                <section className="relative bg-hero border-b border-soft py-20">
                    <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center">
                        <div className="reveal-from-bottom">
                            <h2 className="text-3xl font-bold text-strong mb-6">
                                Don't see your perfect role?
                            </h2>
                            <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                                We're always on the lookout for exceptional talent. If you have unique skills that don't match our current openings, we'd still love to hear from you.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-4 font-semibold transition-all duration-200 hover:scale-105 shadow-lg min-w-[200px]"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="mailto:careers@wqt.co.in"
                                    className="rounded-full border border-soft bg-panel px-8 py-4 font-semibold text-strong transition-all duration-200 hover:border-black dark:hover:border-white hover:bg-subtle min-w-[200px]"
                                >
                                    Email Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
