'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

function ApplyForm() {
    const searchParams = useSearchParams();
    const jobTitleParam = searchParams.get('job');

    // Detect if this is a Product Manager/Owner role
    const isProductRole = jobTitleParam?.toLowerCase().includes('product') || false;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        github: '',
        otherLink: '',
        coverLetter: '',
        resumeUrl: '',
    });
    const [resume, setResume] = useState<File | null>(null);
    const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (uploadMethod === 'file' && !resume) {
            alert('Please upload your resume');
            return;
        }
        if (uploadMethod === 'url' && !formData.resumeUrl) {
            alert('Please provide a link to your resume');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('linkedin', formData.linkedin);
            data.append('portfolio', formData.portfolio);
            data.append('github', formData.github);
            data.append('otherLink', formData.otherLink);
            data.append('coverLetter', formData.coverLetter);
            data.append('jobTitle', jobTitleParam || 'General Application');

            // Add resume based on upload method
            if (uploadMethod === 'file' && resume) {
                data.append('resume', resume);
            } else if (uploadMethod === 'url') {
                data.append('resumeUrl', formData.resumeUrl);
            }

            const response = await fetch('/api/apply', {
                method: 'POST',
                body: data,
            });


            if (response.ok) {
                setSubmitStatus('success');
                // Scroll to top to show success message
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    linkedin: '',
                    portfolio: '',
                    github: '',
                    otherLink: '',
                    coverLetter: '',
                    resumeUrl: '',
                });
                setResume(null);
                // Reset file input manually if needed, or rely on form reset
                const fileInput = document.getElementById('resume') as HTMLInputElement;
                if (fileInput) fileInput.value = '';
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <>
                <div className="relative bg-hero min-h-[80vh] flex items-center justify-center py-20 px-4 -mt-28 pt-28">
                    {/* Grid pattern */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="hero-grid" />
                    </div>

                    <div className="relative max-w-3xl w-full">
                        <div className="rounded-2xl border border-soft bg-panel backdrop-blur-sm p-12 shadow-xl text-center">
                            <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <h2 className="text-4xl font-bold text-strong mb-8">Application Received!</h2>

                            <div className="max-w-2xl mx-auto mb-10">
                                <p className="text-lg text-muted leading-relaxed mb-6">
                                    Thanks for applying to WQT.<br />
                                    We've received your application for{' '}
                                    <span className="text-strong font-semibold">{jobTitleParam}</span>{' '}
                                    and will get back to you shortly.
                                </p>
                            </div>

                            <Link
                                href="/careers"
                                className="inline-block rounded-xl bg-black text-white hover:bg-neutral-800 [.theme-dark_&]:bg-white [.theme-dark_&]:text-black [.theme-dark_&]:hover:bg-neutral-200 px-8 py-4 text-base font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                View More Jobs
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Final Career CTA */}
                <section className="relative bg-hero border-t border-soft py-20">
                    <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center">
                        <div>
                            <h2 className="text-3xl font-bold text-strong mb-6">
                                While we review your application...
                            </h2>
                            <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                                Explore how WQT is reimagining the digital workforce and learn more about the mission you've applied to join.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/about#mission-vision"
                                    className="rounded-full bg-black text-white hover:bg-neutral-800 [.theme-dark_&]:bg-white [.theme-dark_&]:text-black [.theme-dark_&]:hover:bg-neutral-200 px-8 py-4 font-semibold transition-all duration-200 hover:scale-105 shadow-lg min-w-[200px]"
                                >
                                    Our Vision
                                </Link>
                                <Link
                                    href="/#how-it-works"
                                    className="rounded-full border border-soft bg-panel px-8 py-4 font-semibold text-strong transition-all duration-200 hover:border-black dark:hover:border-white hover:bg-subtle min-w-[200px]"
                                >
                                    How It Works
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-soft px-3 py-1 mb-6">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-strong">Application Form</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-strong mb-4">{jobTitleParam || 'General Application'}</h1>
                <p className="text-muted text-lg">Please complete the form below to initiate your candidacy.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                    <h3 className="text-xl font-semibold text-strong mb-4 border-b border-soft pb-2">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-strong">Full Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-strong">Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <label htmlFor="phone" className="text-sm font-medium text-strong">Phone Number <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>
                </div>

                {/* Profile Links */}
                <div>
                    <h3 className="text-xl font-semibold text-strong mb-4 border-b border-soft pb-2">Professional Profile</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="linkedin" className="text-sm font-medium text-strong">LinkedIn Profile <span className="text-red-500">*</span></label>
                            <input
                                type="url"
                                id="linkedin"
                                name="linkedin"
                                required
                                value={formData.linkedin}
                                onChange={handleChange}
                                className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                placeholder="https://linkedin.com/in/..."
                            />
                        </div>

                        {isProductRole ? (
                            <div className="space-y-2">
                                <label htmlFor="portfolio" className="text-sm font-medium text-strong">Portfolio</label>
                                <input
                                    type="url"
                                    id="portfolio"
                                    name="portfolio"
                                    value={formData.portfolio}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                    placeholder="https://yourportfolio.com"
                                />
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <label htmlFor="github" className="text-sm font-medium text-strong">GitHub</label>
                                <input
                                    type="url"
                                    id="github"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                    placeholder="https://github.com/..."
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="otherLink" className="text-sm font-medium text-strong">Other Link</label>
                            <input
                                type="url"
                                id="otherLink"
                                name="otherLink"
                                value={formData.otherLink}
                                onChange={handleChange}
                                className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                placeholder="https://..."
                            />
                        </div>
                    </div>
                </div>

                {/* Resume Upload */}
                <div>
                    <h3 className="text-xl font-semibold text-strong mb-4 border-b border-soft pb-2">Resume <span className="text-red-500">*</span></h3>

                    {/* Toggle between file upload and URL */}
                    <div className="flex gap-2 mb-4">
                        <button
                            type="button"
                            onClick={() => setUploadMethod('file')}
                            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${uploadMethod === 'file'
                                ? 'bg-black text-white [.theme-dark_&]:bg-white [.theme-dark_&]:text-black'
                                : 'bg-soft/30 text-muted hover:bg-soft/50'
                                }`}
                        >
                            📎 Upload File
                        </button>
                        <button
                            type="button"
                            onClick={() => setUploadMethod('url')}
                            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${uploadMethod === 'url'
                                ? 'bg-black text-white [.theme-dark_&]:bg-white [.theme-dark_&]:text-black'
                                : 'bg-soft/30 text-muted hover:bg-soft/50'
                                }`}
                        >
                            🔗 Paste Link
                        </button>
                    </div>

                    {uploadMethod === 'file' ? (
                        <div className="space-y-2">
                            <div className="relative border-2 border-dashed border-soft rounded-xl p-8 text-center hover:bg-soft/10 transition-colors">
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="pointer-events-none">
                                    <svg className="w-10 h-10 text-muted mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-strong font-medium">
                                        {resume ? resume.name : "Click to upload or drag and drop"}
                                    </p>
                                    <p className="text-sm text-muted mt-1">PDF, DOC, DOCX up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <label htmlFor="resumeUrl" className="text-sm font-medium text-strong">
                                Resume Link (Google Drive, Dropbox, OneDrive, etc.)
                            </label>
                            <input
                                type="url"
                                id="resumeUrl"
                                name="resumeUrl"
                                value={formData.resumeUrl}
                                onChange={handleChange}
                                className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                placeholder="https://drive.google.com/file/d/..."
                            />
                            <p className="text-xs text-muted mt-2">
                                💡 Make sure your link is publicly accessible or set to "Anyone with the link can view"
                            </p>
                        </div>
                    )}
                </div>

                {/* Cover Letter */}
                <div>
                    <h3 className="text-xl font-semibold text-strong mb-4 border-b border-soft pb-2">Cover Letter</h3>
                    <div className="space-y-2">
                        <label htmlFor="coverLetter" className="text-sm font-medium text-strong">Why are you a good fit? (Optional)</label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            rows={4}
                            value={formData.coverLetter}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all resize-y"
                            placeholder="Tell us a bit about yourself..."
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-black text-white hover:bg-neutral-800 [.theme-dark_&]:bg-white [.theme-dark_&]:text-black [.theme-dark_&]:hover:bg-neutral-200 px-8 py-4 text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                    >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                    {submitStatus === 'error' && (
                        <p className="text-red-500 text-center mt-4">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}

export default function ApplyPage() {
    return (
        <div className="min-h-screen bg-page text-strong flex flex-col">
            <SiteHeader />
            <main className="flex-grow pt-28 pb-20">
                <Suspense fallback={<div className="text-center py-20">Loading form...</div>}>
                    <ApplyForm />
                </Suspense>
            </main>
            <SiteFooter />
        </div>
    );
}
