
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

const socialLinks = [
  {
    name: "facebook",
    href: "#",
  },
  {
    name: "twitter",
    href: "#",
  },
  {
    name: "instagram",
    href: "#",
  },
  {
    name: "linkedin",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white text-sm font-bold shadow-md transition-transform duration-300 group-hover:scale-110">
                +
              </div>
              <span className="text-lg font-extrabold tracking-tight text-text-primary">
                Medi<span className="text-primary">Care</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-text-muted max-w-xs">
              Providing compassionate, high-quality healthcare to our community
              for over 20 years. Your health is our priority.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-bg-tertiary text-text-muted transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-md hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative text-sm text-text-muted transition-all duration-200 hover:text-primary inline-block after:block after:content-[''] after:absolute after:h-[1px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-text-primary">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative text-sm text-text-muted transition-all duration-200 hover:text-primary inline-block after:block after:content-[''] after:absolute after:h-[1px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-text-primary">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {footerLinks.Contact.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0"></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-default pt-8 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} MediCare Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
