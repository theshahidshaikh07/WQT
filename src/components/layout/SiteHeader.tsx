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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  // Reverse logo: white logo on black navbar (light mode), black logo on white navbar (dark mode)
  // Use the same logo for both modes (White Logo for Dark Header)
  const logoSrc = "/WQT-DARK-THEME.png";

  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-black backdrop-blur-xl transition-all duration-300 theme-dark:border-gray-800 theme-dark:bg-black/50">
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
        <nav className="hidden items-center gap-2 text-sm text-white lg:flex theme-dark:text-white">
          {/* Home */}
          <Link
            href="#home"
            className="relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-800 hover:text-white theme-dark:hover:bg-white/10 theme-dark:hover:text-white"
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
              className="relative flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-800 hover:text-white theme-dark:hover:bg-white/10 theme-dark:hover:text-white"
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
              className={`absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-2xl shadow-2xl transition-all duration-200 dropdown-menu ${servicesOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="p-2">
                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block rounded-lg px-4 py-2.5 text-xs font-medium transition-all duration-150 dropdown-menu-item"
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
            className="relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-800 hover:text-white theme-dark:hover:bg-white/10 theme-dark:hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="#careers"
            className="relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-800 hover:text-white theme-dark:hover:bg-white/10 theme-dark:hover:text-white"
          >
            Careers
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="#signup"
            className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-gray-800 hover:shadow-lg theme-dark:text-white theme-dark:hover:bg-white/10"
          >
            Signup
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-gray-100 theme-dark:bg-white theme-dark:text-black theme-dark:hover:bg-gray-100"
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
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="border-t border-gray-800 bg-black backdrop-blur-xl theme-dark:border-gray-200 theme-dark:bg-white text-white theme-dark:text-black">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {/* Home */}
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-900 hover:translate-x-1 theme-dark:hover:bg-gray-100"
              style={{
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out 0s both` : "none",
              }}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <div
              style={{
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out 0.05s both` : "none",
              }}
            >
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-900 theme-dark:hover:bg-gray-100"
              >
                <span>Services</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Services Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-200 ${mobileServicesOpen ? "max-h-96" : "max-h-0"
                  }`}
              >
                <div className="ml-4 space-y-1 border-l border-gray-700 pl-4 pt-1 theme-dark:border-gray-300">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-400 transition-all duration-150 hover:bg-gray-900 hover:text-white theme-dark:text-gray-600 theme-dark:hover:bg-gray-100 theme-dark:hover:text-black"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About Us */}
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-900 hover:translate-x-1 theme-dark:hover:bg-gray-100"
              style={{
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out 0.10s both` : "none",
              }}
            >
              About Us
            </Link>

            {/* Careers */}
            <Link
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-900 hover:translate-x-1 theme-dark:hover:bg-gray-100"
              style={{
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out 0.15s both` : "none",
              }}
            >
              Careers
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-200 hover:bg-gray-800 theme-dark:text-black theme-dark:hover:bg-gray-200"
              >
                Signup
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-white px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-200 hover:bg-gray-100 theme-dark:bg-black theme-dark:text-white theme-dark:hover:bg-gray-900"
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


