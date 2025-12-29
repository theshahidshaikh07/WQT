'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        timeline: 'ASAP',
        details: '',
        agreeToPrivacy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (submitStatus === 'success' || submitStatus === 'error') {
            const timer = setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    timeline: 'ASAP',
                    details: '',
                    agreeToPrivacy: false,
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-page text-strong">
            <SiteHeader />
            <main>
                {/* Hero Section */}
                <section className="relative border-b border-soft bg-hero py-14 sm:py-20">
                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Text Content */}
                            <div className="reveal-on-scroll">
                                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
                                    <div className="h-2 w-2 rounded-full bg-violet-500" />
                                    <p className="text-xs font-bold uppercase tracking-[0.2em]">
                                        Get In Touch
                                    </p>
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
                                    Let's Build Something Great Together
                                </h1>
                                <p className="text-lg text-muted sm:text-xl leading-relaxed">
                                    Ready to transform your vision into reality? We're here to help you scale faster and innovate smarter.
                                </p>
                            </div>

                            {/* Right - Office Image */}
                            <div className="reveal-zoom">
                                <div className="rounded-3xl border border-soft overflow-hidden shadow-2xl">
                                    <img
                                        src="/office.png"
                                        alt="WQT Office"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Info Section */}
                <section id="contact-form" className="relative border-b border-soft bg-hero py-12 scroll-mt-24">
                    <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
                        {/* Contact Form - Centered */}
                        <div className="reveal-from-bottom mb-10">
                            <div className="rounded-3xl border border-soft bg-panel p-6 lg:p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-strong mb-4 text-center">Send us a message</h2>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Two Column Grid */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-strong mb-1">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-soft bg-strong px-3 py-2 text-strong placeholder:text-muted focus:border-black [.theme-dark_&]:focus:border-white focus:outline-none focus:ring-2 focus:ring-black/20 [.theme-dark_&]:focus:ring-white/20 transition-all duration-200"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-strong mb-1">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-soft bg-strong px-3 py-2 text-strong placeholder:text-muted focus:border-black [.theme-dark_&]:focus:border-white focus:outline-none focus:ring-2 focus:ring-black/20 [.theme-dark_&]:focus:ring-white/20 transition-all duration-200"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-strong mb-1">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-soft bg-strong px-3 py-2 text-strong placeholder:text-muted focus:border-black [.theme-dark_&]:focus:border-white focus:outline-none focus:ring-2 focus:ring-black/20 [.theme-dark_&]:focus:ring-white/20 transition-all duration-200"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-strong mb-1">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-soft bg-strong px-3 py-2 text-strong placeholder:text-muted focus:border-black [.theme-dark_&]:focus:border-white focus:outline-none focus:ring-2 focus:ring-black/20 [.theme-dark_&]:focus:ring-white/20 transition-all duration-200"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <label className="block text-sm font-medium text-strong mb-2">
                                            When do you want to start? *
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['ASAP', 'Less than a month', 'In 3-6 months'].map((option) => (
                                                <label key={option} className="flex items-center justify-center cursor-pointer group">
                                                    <input
                                                        type="radio"
                                                        name="timeline"
                                                        value={option}
                                                        checked={formData.timeline === option}
                                                        onChange={handleChange}
                                                        className="sr-only"
                                                    />
                                                    <span className={`w-full text-center px-2 py-1.5 rounded-lg border transition-all duration-200 text-sm ${formData.timeline === option
                                                        ? 'border-black bg-black text-white [.theme-dark_&]:border-white [.theme-dark_&]:bg-white [.theme-dark_&]:text-black'
                                                        : 'border-soft bg-strong text-muted hover:border-black/50 [.theme-dark_&]:hover:border-white/50'
                                                        }`}>
                                                        {option}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div>
                                        <label htmlFor="details" className="block text-sm font-medium text-strong mb-1">
                                            Details about your requirement *
                                        </label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            required
                                            rows={2}
                                            value={formData.details}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-soft bg-strong px-3 py-2 text-strong placeholder:text-muted focus:border-black [.theme-dark_&]:focus:border-white focus:outline-none focus:ring-2 focus:ring-black/20 [.theme-dark_&]:focus:ring-white/20 transition-all duration-200 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    {/* Privacy Policy */}
                                    <div>
                                        <label className="flex items-start cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                name="agreeToPrivacy"
                                                checked={formData.agreeToPrivacy}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-4 h-4 text-black [.theme-dark_&]:text-white border-soft rounded focus:ring-2 focus:ring-black/20 [.theme-dark_&]:focus:ring-white/20 accent-black [.theme-dark_&]:accent-white"
                                            />
                                            <span className="ml-3 text-sm text-muted group-hover:text-strong transition-colors duration-200">
                                                I agree to the{' '}
                                                <Link href="/privacy-policy" className="text-black [.theme-dark_&]:text-white hover:underline font-medium">
                                                    Privacy Policy
                                                </Link>
                                            </span>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !formData.agreeToPrivacy}
                                        className="w-full rounded-xl bg-black text-white [.theme-dark_&]:bg-white [.theme-dark_&]:text-black px-6 py-3 font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Toast Notification */}
                {(submitStatus === 'success' || submitStatus === 'error') && (
                    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-[slideIntop_0.3s_ease-out] shadow-2xl drop-shadow-2xl w-auto max-w-sm sm:max-w-md">
                        <div className={`flex items-start gap-3 p-4 rounded-xl border ${submitStatus === 'success'
                            ? 'bg-black text-white border-zinc-800 [.theme-dark_&]:bg-white [.theme-dark_&]:text-black'
                            : 'bg-red-600 text-white border-red-700'
                            }`}>
                            {submitStatus === 'success' ? (
                                <svg className="w-6 h-6 shrink-0 text-green-400 [.theme-dark_&]:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                            <div>
                                <h4 className="font-bold text-sm">
                                    {submitStatus === 'success' ? 'Message Sent!' : 'Error'}
                                </h4>
                                <p className="text-xs opacity-90 mt-0.5">
                                    {submitStatus === 'success'
                                        ? "We'll get back to you shortly."
                                        : "Something went wrong. Please try again."}
                                </p>
                            </div>
                            <button
                                onClick={() => setSubmitStatus('idle')}
                                className="ml-2 hover:opacity-70 transition-opacity"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* Map Section */}
                <section className="relative py-20 bg-hero border-b border-soft">
                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center mb-12 reveal-on-scroll">
                            <h2 className="text-3xl font-bold text-strong mb-4">Our Office</h2>
                            <p className="text-lg text-muted">Visit us at our Pune location</p>
                        </div>

                        <div className="reveal-zoom rounded-3xl border border-soft overflow-hidden shadow-2xl">
                            <iframe
                                src="https://maps.google.com/maps?q=Twin+Arcs,+Punawale,+Pune,+Maharashtra+411033&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Quick Contact Section */}
                <section className="relative py-20 border-t border-soft bg-hero">
                    <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
                        <div className="reveal-from-bottom max-w-2xl mx-auto">
                            {/* Quick Contact */}
                            <div className="rounded-3xl border border-soft bg-panel p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-strong mb-6">Quick Contact</h2>
                                <div className="space-y-4">
                                    <a href="mailto:info@wqt.co.in" className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-soft bg-strong flex items-center justify-center group-hover:border-black transition-colors duration-200">
                                            <svg className="w-5 h-5 text-muted group-hover:text-black transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted mb-1">Email</p>
                                            <p className="text-base text-strong group-hover:text-black transition-colors duration-200">info@wqt.co.in</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-soft bg-strong flex items-center justify-center">
                                            <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted mb-1">Address</p>
                                            <p className="text-base text-strong">Twin Arc wing C<br />Punawale, Pune 411033</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div >
    );
}
