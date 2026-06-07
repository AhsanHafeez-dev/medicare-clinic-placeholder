import Image from "next/image";

const services = [
  {
    title: "General Checkup",
    description: "Comprehensive health assessments and preventive care examinations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Cardiology",
    description: "Advanced heart care including diagnostics, treatment, and rehabilitation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Orthopedics",
    description: "Treatment for bone, joint, and muscle conditions and injuries.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "15+", label: "Expert Doctors" },
  { value: "50K+", label: "Happy Patients" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-lighter dark:from-gray-950 dark:via-gray-900 dark:to-primary-darker/30">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl dark:bg-secondary/10"></div>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light/60 dark:bg-primary-dark/30 px-4 py-1.5 text-sm font-medium dark:text-primary-light text-primary-dark shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse-soft"></span>
                Your Trusted Healthcare Partner
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Your Health Is Our{" "}
                <span className="text-gradient">Top Priority</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                At MediCare Clinic, we provide comprehensive medical care with
                compassion and expertise. Our team of experienced doctors is
                dedicated to your well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark px-7 py-3.5 text-sm font-semibold text-white whitespace-nowrap shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 hover:from-primary-dark hover:to-primary-darker"
                >
                  Book Appointment
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap shadow-sm transition-all duration-200 hover:border-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md hover:scale-105"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center animate-fade-in-up animate-delay-200">
              <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20"></div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 sm:h-[500px]">
                <Image
                  src="https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg"
                  alt="Doctor consulting patient"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-bg-primary to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-bg-primary py-16 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-extrabold text-primary sm:text-5xl transition-transform duration-200 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bg-secondary py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Our Medical Services
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Comprehensive healthcare services tailored to your needs with
              state-of-the-art medical technology.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="rounded-2xl border border-border-default bg-bg-primary p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                  <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary-lighter dark:from-primary-dark/40 dark:to-primary-darker/30 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center animate-fade-in-up">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:text-primary-dark group"
            >
              View All Services
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 animate-fade-in-up">
              <Image
                src="https://images.pexels.com/photos/8460379/pexels-photo-8460379.jpeg"
                alt="Medical team at work"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 img-overlay"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-bold">Dedicated to Your Health</p>
                <p className="text-sm opacity-80">Over 20 years of excellence</p>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in-up animate-delay-200">
              <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Why Choose MediCare?
              </h2>
              <div className="space-y-5 mt-8">
                {[
                  {
                    title: "Expert Doctors",
                    desc: "Our team consists of board-certified specialists with years of experience.",
                  },
                  {
                    title: "Modern Facilities",
                    desc: "State-of-the-art equipment and technology for accurate diagnoses.",
                  },
                  {
                    title: "Compassionate Care",
                    desc: "We treat every patient with dignity, respect, and personalized attention.",
                  },
                  {
                    title: "Convenient Hours",
                    desc: "Extended hours including weekends to accommodate your busy schedule.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary-lighter dark:from-primary-dark/40 dark:to-primary-darker/30 text-primary transition-all duration-200 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{item.title}</h3>
                      <p className="text-sm text-text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary-darker py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl animate-fade-in-up">
            Ready to Prioritize Your Health?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light animate-fade-in-up animate-delay-100">
            Schedule an appointment with our expert doctors today. We&apos;re here
            to help you feel your best.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-200">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary whitespace-nowrap shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            >
              Book Appointment
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/doctors"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white whitespace-nowrap transition-all duration-200 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              Meet Our Doctors
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
