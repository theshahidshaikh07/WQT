"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Small delay to ensure DOM is ready after route change
        const initTimeout = setTimeout(() => {
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

            const handleIntersect = (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersect, observerOptions);

            // Function to observe all reveal elements
            const observeRevealElements = () => {
                const targets = document.querySelectorAll(".reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-zoom");
                targets.forEach((el) => {
                    // Check if element is already in viewport
                    const rect = el.getBoundingClientRect();
                    const isInViewport = (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );

                    // If already in viewport, make it visible immediately
                    if (isInViewport || rect.top < window.innerHeight) {
                        el.classList.add("is-visible");
                    }

                    // Observe for future scroll events
                    if (!el.classList.contains("observed")) {
                        el.classList.add("observed");
                        observer.observe(el);
                    }
                });
            };

            // Initial observation with a small delay to ensure DOM is painted
            setTimeout(observeRevealElements, 50);

            // 3. Set up MutationObserver to watch for dynamically added elements
            const mutationObserver = new MutationObserver(() => {
                setTimeout(observeRevealElements, 50);
            });

            // Observe the entire document for added nodes
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
            });

            return () => {
                lenis.destroy();
                observer.disconnect();
                mutationObserver.disconnect();
            };
        }, 100);

        return () => {
            clearTimeout(initTimeout);
        };
    }, [pathname]); // Re-run when pathname changes

    return <>{children}</>;
}
