import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-lighter dark:from-gray-950 dark:via-gray-900 dark:to-primary-darker/30 py-20 sm:py-28">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4 animate-fade-in-up">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl animate-fade-in-up animate-delay-100">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary animate-fade-in-up animate-delay-200">
            We&apos;d love to hear from you. Reach out for appointments,
            inquiries, or any questions.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">
                  Get In Touch
                </h2>
                <p className="mt-2 text-text-secondary">
                  Fill out the form or use the contact information below.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    title: "Address",
                    content: "123 Healthcare Avenue, Medical City, MC 10001",
                  },
                  {
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                  },
                  {
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    title: "Email",
                    content: "info@medicareclinic.com",
                  },
                  {
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Hours",
                    content: "Mon-Fri: 8:00 AM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary-lighter dark:from-primary-dark/40 dark:to-primary-darker/30 text-primary transition-all duration-200 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-text-muted whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animate-delay-100">
              <div className="rounded-2xl border border-border-default bg-bg-secondary p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 className="text-xl font-bold text-text-primary">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <form className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="mt-1.5 block w-full rounded-xl border border-border-default bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder-text-muted shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-gray-300 dark:hover:border-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="mt-1.5 block w-full rounded-xl border border-border-default bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder-text-muted shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-gray-300 dark:hover:border-gray-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      className="mt-1.5 block w-full rounded-xl border border-border-default bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder-text-muted shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-gray-300 dark:hover:border-gray-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className="mt-1.5 block w-full rounded-xl border border-border-default bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder-text-muted shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-gray-300 dark:hover:border-gray-600 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-semibold text-white whitespace-nowrap shadow-lg transition-all duration-200 hover:shadow-xl hover:from-primary-dark hover:to-primary-darker hover:scale-[1.02]"
                  >
                    Send Message
                    <svg className="ml-2 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Image */}
      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 animate-fade-in-up">
          <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="https://images.unsplash.com/photo-1512850183-6d7990f42385?w=600&auto=format&fit=crop&q=80"
              alt="Medical city location"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold">Visit Us Today</h3>
              <p className="text-sm opacity-90 max-w-md">
                123 Healthcare Avenue, Medical City
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-white/80 hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary-darker py-20">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl animate-fade-in-up">
            Emergencies?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light animate-fade-in-up animate-delay-100">
            For immediate medical attention, please call our emergency line.
          </p>
          <div className="mt-6 animate-fade-in-up animate-delay-200">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-bold text-primary whitespace-nowrap shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +1 (555) 123-4567
            </a>
          </div>
          <p className="mt-3 text-sm text-primary-light animate-fade-in-up animate-delay-300">
            Available 24/7 for emergencies
          </p>
        </div>
      </section>
    </>
  );
}
