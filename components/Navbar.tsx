const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white text-sm font-bold">
            +
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Medi<span className="text-primary">Care</span>
          </span>
        </a>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-3 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
          >
            Book Appointment
          </a>
        </nav>

        <div className="md:hidden">
          <details className="group">
            <summary className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 list-none cursor-pointer" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </summary>
            <div className="absolute left-0 right-0 top-full border-t border-gray-200 bg-white shadow-lg">
              <div className="space-y-1 px-4 py-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/contact"
                  className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
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
