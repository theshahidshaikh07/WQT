"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // 1. Initialize Lenis for smooth momentum scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 2. Initialize IntersectionObserver for Scroll Reveals
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, // Trigger when 10% visible
        };

        const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                } else {
                    entry.target.classList.remove("is-visible");
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Target elements with .reveal-on-scroll
        // We modify this slightly: watch for DOM changes to attach to new elements?
        // For simplicity in React, we might just query on mount and maybe use a mutation observer if needed,
        // but a simple periodic check or simple on-mount check covers 90% of static site cases.

        const targets = document.querySelectorAll(".reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-zoom");
        targets.forEach((el) => observer.observe(el));

        return () => {
            lenis.destroy();
            observer.disconnect();
        };
    }, []);

    return <>{children}</>;
}
