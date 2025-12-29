import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";

export default function JobDetailsPage() {
    const job = {
        title: "Software Development Engineer (SDE) Intern – MCP Server & LLM AI",
        department: "Engineering",
        location: "Pune, India",
        workMode: "Remote",
        type: "Internship (6 Months)",
        duration: "6 Months",
        stipend: "Competitive"
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
                                        Duration: {job.duration}
                                    </span>
                                    <span className="px-3 py-1 rounded-full border border-soft text-sm font-medium text-strong bg-soft/30">
                                        Stipend: {job.stipend}
                                    </span>
                                    <span className="px-3 py-1 rounded-full border border-soft text-sm font-medium text-strong bg-soft/30">
                                        PPO: Yes
                                    </span>
                                </div>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-lg text-muted leading-relaxed">
                                        We are looking for a highly motivated SDE Intern with a strong interest in AI systems, LLMs, and backend engineering to work on cutting-edge <strong>MCP (Model Context Protocol)</strong> server development. You will help build scalable, secure, and intelligent systems that connect LLMs with real-world tools, APIs, and data sources, enabling agentic and production-grade AI workflows.
                                    </p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-soft" />

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">Key Responsibilities</h3>
                                <ul className="space-y-4 text-muted leading-relaxed list-disc pl-5 marker:text-current">
                                    <li>Design, develop, and maintain MCP servers for structured LLM communication.</li>
                                    <li>Build and optimize backend services and REST APIs for AI workflows.</li>
                                    <li>Integrate LLM models with databases, APIs, and third-party services.</li>
                                    <li>Implement tool calling, context management, and prompt orchestration.</li>
                                    <li>Ensure performance, scalability, security, and reliability of AI systems.</li>
                                    <li>Collaborate with product, AI, and frontend teams to ship real-world AI features.</li>
                                    <li>Debug, test, and continuously improve AI pipelines and server-side logic.</li>
                                    <li>Stay updated with advancements in LLMs, AI agents, and agentic architectures.</li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">Required Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Data Structures & Algorithms",
                                        "Backend (Python / Node.js / Java)",
                                        "REST APIs & HTTP",
                                        "LLMs (Prompting, Embeddings)",
                                        "Databases (SQL / NoSQL)",
                                        "Git & GitHub",
                                        "Problem Solving"
                                    ].map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 rounded-full border border-soft text-sm font-medium text-strong bg-soft/50 hover:bg-soft transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-strong border-b border-soft pb-2">Good to Have</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "MCP (Model Context Protocol)",
                                        "OpenAI / Anthropic APIs",
                                        "AI Agents & Tool Calling",
                                        "Docker & Cloud (AWS/GCP)",
                                        "Vector Databases (FAISS / Pinecone)"
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
                                    <li>Final-year Bachelor’s students in Computer Science, Engineering, or related fields.</li>
                                    <li>Students passionate about backend development, AI, and LLM systems.</li>
                                    <li>Candidates with academic projects, hackathons, or personal projects in AI or backend.</li>
                                    <li>Self-driven learners eager to work on real-world, production-grade systems.</li>
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
