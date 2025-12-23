"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export function SiteHeader() {
  const { theme } = useTheme();
  const logoSrc =
    theme === "dark" ? "/WQT-DARK-THEME.png" : "/WQT-LIGHT-THEME.png";

  return (
    <header className="sticky top-0 z-40 border-b border-soft bg-hero backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-7 w-24 md:h-8 md:w-28">
            <Image
              src={logoSrc}
              alt="WQT"
              fill
              priority
              sizes="160px"
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#signup"
            className="hidden rounded-full border border-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur-md transition hover:border-[var(--accent-cyan)] hover:bg-panel lg:inline-flex"
          >
            Signup
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_40px_rgba(0,0,0,0.25)] transition hover:bg-zinc-200"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}

