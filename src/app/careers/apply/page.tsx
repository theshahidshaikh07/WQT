'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

function ApplyForm() {
    const searchParams = useSearchParams();
    const jobTitleParam = searchParams.get('job');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverLetter: '',
    });
    const [resume, setResume] = useState<File | null>(null);
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
        if (!resume) {
            alert('Please upload your resume');
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
            data.append('coverLetter', formData.coverLetter);
            data.append('jobTitle', jobTitleParam || 'General Application');
            data.append('resume', resume);

            const response = await fetch('/api/apply', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                setSubmitStatus('success');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    linkedin: '',
                    portfolio: '',
                    coverLetter: '',
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
            <div className="max-w-2xl mx-auto py-20 px-4 text-center">
                <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-strong mb-4">Application Received!</h2>
                <p className="text-muted text-lg mb-8">
                    Thanks for applying to WQT. We've received your application for <strong>{jobTitleParam}</strong> and will get back to you shortly.
                </p>
                <Link href="/careers" className="inline-block rounded-xl bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 px-8 py-3 text-sm font-bold transition-all">
                    View More Jobs
                </Link>
            </div>
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
                    <div className="grid sm:grid-cols-2 gap-6">
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
                        <div className="space-y-2">
                            <label htmlFor="portfolio" className="text-sm font-medium text-strong">Portfolio / GitHub</label>
                            <input
                                type="url"
                                id="portfolio"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleChange}
                                className="w-full rounded-lg bg-page border border-soft px-4 py-2.5 outline-none focus:border-strong focus:ring-1 focus:ring-strong transition-all"
                                placeholder="https://github.com/..."
                            />
                        </div>
                    </div>
                </div>

                {/* Resume Upload */}
                <div>
                    <h3 className="text-xl font-semibold text-strong mb-4 border-b border-soft pb-2">Resume <span className="text-red-500">*</span></h3>
                    <div className="space-y-2">
                        <div className="relative border-2 border-dashed border-soft rounded-xl p-8 text-center hover:bg-soft/10 transition-colors">
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                required
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
