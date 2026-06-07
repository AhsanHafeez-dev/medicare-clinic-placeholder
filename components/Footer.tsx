

const footerLinks = {
  QuickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/doctors", label: "Our Doctors" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services", label: "General Checkup" },
    { href: "/services", label: "Cardiology" },
    { href: "/services", label: "Pediatrics" },
    { href: "/services", label: "Orthopedics" },
    { href: "/services", label: "Neurology" },
  ],
  Contact: [
    { label: "123 Healthcare Ave, Medical City" },
    { label: "+1 (555) 123-4567" },
    { label: "info@medicareclinic.com" },
    { label: "Mon-Fri: 8:00 AM - 8:00 PM" },
    { label: "Sat-Sun: 9:00 AM - 5:00 PM" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white text-sm font-bold">
                +
              </div>
              <span className="text-lg font-bold tracking-tight text-text-primary">
                Medi<span className="text-primary">Care</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-text-muted">
              Providing compassionate, high-quality healthcare to our community
              for over 20 years. Your health is our priority.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-tertiary text-text-muted transition-colors hover:bg-primary hover:text-white"
                    aria-label={social}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contact Info
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.Contact.map((item) => (
                <li
                  key={item.label}
                  className="text-sm text-text-muted"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border-default pt-6 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} MediCare Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
