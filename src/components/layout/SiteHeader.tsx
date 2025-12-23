"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
];

const services = [
  { title: "Software & Cloud Engineering", href: "#services" },
  { title: "Data, AI & Automation", href: "#services" },
  { title: "Cybersecurity & Infrastructure", href: "#services" },
  { title: "Product Design & Development", href: "#services" },
  { title: "DevOps, SRE & Platform Engineering", href: "#services" },
  { title: "Project Management & Tech Consulting", href: "#services" },
];

export function SiteHeader() {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const logoSrc =
    theme === "dark" ? "/WQT-DARK-THEME.png" : "/WQT-LIGHT-THEME.png";

  return (
    <header className="sticky top-0 z-40 border-b border-soft bg-hero/95 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8 md:py-5">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
        >
          <div className="relative h-7 w-24 md:h-8 md:w-28">
            <Image
              src={logoSrc}
              alt="WQT"
              fill
              priority
              sizes="160px"
              className="object-contain transition-opacity duration-200"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-muted lg:flex">
          {/* Home */}
          <Link
            href="#home"
            className="relative transition-colors duration-200 hover:text-strong after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full theme-dark:after:bg-white"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="#services"
              className="relative flex items-center gap-1 transition-colors duration-200 hover:text-strong after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full theme-dark:after:bg-white"
            >
              Services
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-2xl border border-soft bg-strong shadow-2xl backdrop-blur-xl transition-all duration-200 ${servicesOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="p-2">
                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block rounded-lg px-4 py-2.5 text-xs font-medium text-muted transition-all duration-150 hover:bg-panel hover:text-strong"
                    style={{
                      animation: servicesOpen
                        ? `slideIn 0.2s ease-out ${index * 0.03}s both`
                        : "none",
                    }}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other Nav Items */}
          <Link
            href="#about"
            className="relative transition-colors duration-200 hover:text-strong after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full theme-dark:after:bg-white"
          >
            About Us
          </Link>
          <Link
            href="#careers"
            className="relative transition-colors duration-200 hover:text-strong after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full theme-dark:after:bg-white"
          >
            Careers
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="#signup"
            className="rounded-full border border-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-[var(--accent-cyan)] hover:bg-panel hover:shadow-lg"
          >
            Signup
          </Link>
          <Link
            href="#contact"
            className="cta-button rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-soft bg-subtle transition-all duration-200 hover:bg-strong"
          >
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="border-t border-soft bg-panel/50 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-muted transition-all duration-200 hover:bg-strong hover:text-strong hover:translate-x-1"
                style={{
                  animation: mobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-soft bg-panel px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-all duration-200 hover:border-[var(--accent-cyan)] hover:bg-strong"
              >
                Signup
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cta-button rounded-full px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}


