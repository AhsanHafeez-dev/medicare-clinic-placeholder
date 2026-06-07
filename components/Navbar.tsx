"use client";

import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-default bg-bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-bg-primary/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white text-sm font-bold">
            +
          </div>
          <span className="text-lg font-bold tracking-tight text-text-primary">
            Medi<span className="text-primary">Care</span>
          </span>
        </a>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-full p-2 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          <a
            href="/contact"
            className="ml-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white whitespace-nowrap shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
          >
            Book Appointment
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          <details className="group">
            <summary className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-bg-tertiary hover:text-text-primary list-none cursor-pointer" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </summary>
            <div className="absolute left-0 right-0 top-full border-t border-border-default bg-bg-primary shadow-lg">
              <div className="space-y-1 px-4 py-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/contact"
                  className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white whitespace-nowrap shadow-sm transition-all hover:bg-primary-dark"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
