"use client";

import { useEffect, useRef } from 'react';

const reasons = [
  {
    title: "World Class Talent",
    body: "Tap into a rigorously vetted network of senior engineers, designers, strategists, and operators.",
  },
  {
    title: "On-Demand Scale",
    body: "Dial your workforce up or down in weeks, not quarters — with pods tailored to each initiative.",
  },
  {
    title: "Cost Efficiency",
    body: "Reduce hiring bottlenecks, overhead, and bench time while accelerating delivery velocity.",
  },
  {
    title: "Seamless Integration",
    body: "Talent aligns to your rituals, tools, and governance — from standups to release management.",
  },
  {
    title: "Trusted Quality",
    body: "Every professional is screened for technical depth, communication, and production-grade execution.",
  },
  {
    title: "Enterprise Governance",
    body: "Security, compliance, and performance frameworks designed for regulated environments.",
  },
];

export function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable auto-reveal on mobile
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // "Exclusive Mode": Close all other cards when one becomes active
            const allCards = containerRef.current?.querySelectorAll('.shutter-card');
            allCards?.forEach((card) => {
              if (card !== entry.target) {
                card.classList.remove('shutter-active');
              }
            });

            // Open the current card
            entry.target.classList.add('shutter-active');
          } else {
            // Optional: Close it when it leaves the view, 
            // but strictly speaking the 'entering' of another card handles the switch.
            // We remove it here just to be clean if it scrolls perfectly off screen without another entering.
            entry.target.classList.remove('shutter-active');
          }
        });
      },
      {
        threshold: 0, // Trigger immediately when touching the center zone
        rootMargin: "-45% 0px -45% 0px" // Effectively creates a narrow "focus line" in the middle of the screen
      }
    );

    const cards = containerRef.current?.querySelectorAll('.shutter-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      className="relative border-b border-soft bg-hero py-20 sm:py-28 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20 reveal-from-left">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm mb-6 pill-badge">
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              Why choose WQT
            </p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl lg:text-6xl mb-6">
            A digital workforce built for modern, global enterprises.
          </h2>
          <p className="text-base text-muted sm:text-lg leading-relaxed">
            WQT was designed for organizations that demand both speed and
            rigor. From high-growth startups to global enterprises, we bring
            quality, predictability, and flexibility to every engagement.
          </p>
        </div>

        {/* The Shutter Reveal Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="shutter-card group relative h-80 rounded-3xl overflow-hidden cursor-default shadow-lg transition-shadow hover:shadow-2xl reveal-zoom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Layer 1: The "Hiding" Content (Visible on Hover/Active) - Black Background */}
              {/* Layer 1: The "Hiding" Content (Visible on Hover/Active) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-transform duration-500 md:translate-y-0 translate-y-0 why-card-back">
                <p className="text-lg font-medium leading-relaxed opacity-0 group-hover:opacity-100 [.shutter-active_&]:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 [.shutter-active_&]:translate-y-0">
                  {reason.body}
                </p>
              </div>

              {/* Layer 2: The "Cover" (Visible Initially) - White Background */}
              {/* Transforms UP/Away on hover OR when 'shutter-active' class is present (mobile) */}
              {/* Layer 2: The "Cover" (Visible Initially) */}
              {/* Transforms UP/Away on hover OR when 'shutter-active' class is present (mobile) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full [.shutter-active_&]:-translate-y-full will-change-transform z-10 why-card-front">

                {/* Decorative Pattern on Cover */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <svg className="w-12 h-12 text-gray-300 theme-dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="2" cy="2" r="2" />
                    <circle cx="12" cy="2" r="2" />
                    <circle cx="22" cy="2" r="2" />
                    <circle cx="2" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="22" cy="12" r="2" />
                    <circle cx="2" cy="22" r="2" />
                    <circle cx="12" cy="22" r="2" />
                    <circle cx="22" cy="22" r="2" />
                  </svg>
                </div>

                <div className="h-16 w-16 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-90 [.shutter-active_&]:scale-90 transition-transform duration-500 icon-box">
                  {/* Static Icons for each */}
                  {index === 0 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {index === 1 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                  {index === 2 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {index === 3 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
                  {index === 4 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                  {index === 5 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>}
                </div>

                <h3 className="text-2xl font-bold text-strong">
                  {reason.title}
                </h3>

                {/* Tease Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-1 rounded-full tease-bar" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
