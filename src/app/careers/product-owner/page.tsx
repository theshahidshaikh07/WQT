import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function JobDetailsPage() {
    const job = {
        title: "Product Owner",
        department: "Product",
        location: "Pune, India",
        workMode: "Remote",
        type: "Full-Time"
    };

    return (
        <div className="min-h-screen bg-page text-strong flex flex-col">
            <SiteHeader />
            <main className="flex-grow pt-28 pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-muted mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/careers" className="hover:text-violet-500 transition-colors">Current Openings</Link>
                        <span className="text-soft">/</span>
                        <span className="text-strong truncate">{job.title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-start">
                        {/* Main Content */}
                        <div className="space-y-10">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-strong mb-6">
                                    {job.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-3 mt-3 mb-8">
                                    <span className="px-3 py-1 rounded-full border border-soft text-sm font-medium text-strong bg-soft/30">
                                        Full-Time
                                    </span>
                                    <span className="px-3 py-1 rounded-full border border-soft text-sm font-medium text-strong bg-soft/30">
                                        High Ownership
                                    </span>
                                    <span className="px-3 py-1 rounded-full border border-soft text-sm font-medium text-strong bg-soft/30">
                                        Fast Learning
                                    </span>
                                </div>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-lg text-muted leading-relaxed">
                                        We are looking for a <strong>Product Owner</strong> who can bridge business, users, and engineering to build impactful digital products. You will own the product backlog, translate vision into execution, and work closely with engineering, design, and stakeholders to deliver high-quality, customer-centric solutions.
                                    </p>
                                    <p className="text-lg text-muted leading-relaxed mt-4">
                                        This role is ideal for someone who is hands-on, data-driven, and execution-focused, with a strong understanding of agile product development.
                                    </p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-soft" />

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">Key Responsibilities</h3>
                                <ul className="space-y-4 text-muted leading-relaxed list-disc pl-5 marker:text-current">
                                    <li>Own and manage the product backlog, ensuring clear prioritization and alignment with business goals</li>
                                    <li>Translate product vision and requirements into user stories, acceptance criteria, and detailed specifications</li>
                                    <li>Collaborate closely with engineering, design, and stakeholders to deliver features end-to-end</li>
                                    <li>Conduct requirement gathering, user research, and stakeholder alignment</li>
                                    <li>Participate in sprint planning, backlog grooming, reviews, and retrospectives</li>
                                    <li>Define and track product KPIs and success metrics</li>
                                    <li>Validate features through user feedback, analytics, and iteration</li>
                                    <li>Ensure timely delivery while maintaining quality, scope, and user value</li>
                                    <li>Act as the primary point of contact for clarifying product requirements during development</li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">Required Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Agile/Scrum Frameworks",
                                        "User Stories & Acceptance Criteria",
                                        "Stakeholder Management",
                                        "Analytical & Problem-Solving",
                                        "Engineering Collaboration",
                                        "Feature Prioritization",
                                        "Jira / Confluence / Notion"
                                    ].map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 rounded-full border border-soft text-sm font-medium text-strong bg-soft/50 hover:bg-soft transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">Good to Have (Bonus Skills)</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "AI-powered Products",
                                        "LLMs, APIs, Backend Systems",
                                        "Product Analytics (AARRR, HEART)",
                                        "UX Research & Wireframing",
                                        "Figma / Prototyping Tools",
                                        "Startup Experience"
                                    ].map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 rounded-full border border-soft text-sm font-medium text-muted bg-transparent hover:border-strong transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">Who Should Apply</h3>
                                <ul className="space-y-3 text-muted leading-relaxed list-disc pl-5 marker:text-current">
                                    <li>Product professionals with 3–6 years of experience in Product Ownership, Product Analysis, or closely related roles</li>
                                    <li>Professionals who value execution, accountability, and end-to-end ownership</li>
                                    <li>Individuals capable of balancing user needs, business objectives, and engineering constraints</li>
                                    <li>Outcome-driven product thinkers who are comfortable making decisions and driving measurable results</li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">What You'll Gain</h3>
                                <ul className="space-y-3 text-muted leading-relaxed list-disc pl-5 marker:text-current">
                                    <li>High ownership and autonomy over product decisions</li>
                                    <li>Fast learning environment with exposure to cutting-edge technologies</li>
                                    <li>Leadership exposure and growth opportunities</li>
                                    <li>Opportunity to work on impactful, customer-centric products</li>
                                </ul>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <aside className="lg:sticky lg:top-32 h-fit space-y-8">
                            <div className="rounded-xl border border-soft bg-panel p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-strong mb-6">Job Details</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3 text-sm">
                                        <svg className="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <div>
                                            <div className="text-muted mb-0.5">Department</div>
                                            <div className="font-medium text-strong">{job.department}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm">
                                        <svg className="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <div>
                                            <div className="text-muted mb-0.5">Location</div>
                                            <div className="font-medium text-strong">{job.location}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm">
                                        <svg className="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
                                        <div>
                                            <div className="text-muted mb-0.5">Work Mode</div>
                                            <div className="font-medium text-strong">{job.workMode}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm">
                                        <svg className="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <div>
                                            <div className="text-muted mb-0.5">Type</div>
                                            <div className="font-medium text-strong">{job.type}</div>
                                        </div>
                                    </div>

                                </div>

                                <a
                                    href={`/careers/apply?job=${encodeURIComponent(job.title)}`}
                                    className="block w-full text-center rounded-xl bg-black text-white hover:bg-neutral-800 [.theme-dark_&]:bg-white [.theme-dark_&]:text-black [.theme-dark_&]:hover:bg-neutral-200 px-6 py-3 text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
