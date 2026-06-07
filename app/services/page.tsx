import Image from "next/image";


const servicesList = [
  {
    title: "General Medicine",
    desc: "Comprehensive primary care for all ages including routine checkups, vaccinations, and management of chronic conditions.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg",
  },
  {
    title: "Cardiology",
    desc: "Advanced heart care including EKG, stress testing, echocardiography, and cardiac rehabilitation programs.",
    image:
      "https://images.pexels.com/photos/8460379/pexels-photo-8460379.jpeg",
  },
  {
    title: "Pediatrics",
    desc: "Specialized healthcare for children from birth through adolescence, including developmental screenings and immunizations.",
    image:
      "https://images.pexels.com/photos/7089619/pexels-photo-7089619.jpeg",
  },
  {
    title: "Orthopedics",
    desc: "Treatment for musculoskeletal conditions, sports injuries, arthritis, and joint replacement surgeries.",
    image:
      "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg",
  },
  {
    title: "Neurology",
    desc: "Diagnosis and treatment of neurological disorders including migraines, epilepsy, and neurodegenerative diseases.",
    image:
      "https://images.unsplash.com/photo-1579684288402-e3e337bcc7af?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Laboratory Services",
    desc: "On-site lab facilities for blood work, urine analysis, and various diagnostic tests with quick turnaround.",
    image:
      "https://images.unsplash.com/photo-1579165466991-467135ad3110?w=600&auto=format&fit=crop&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-lighter dark:from-gray-950 dark:via-gray-900 dark:to-primary-darker/30 py-20 sm:py-28">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4 animate-fade-in-up">
            Our Services
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl animate-fade-in-up animate-delay-100">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary animate-fade-in-up animate-delay-200">
            Comprehensive medical services designed to meet all your healthcare
            needs under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, i) => (
              <div
                key={service.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="overflow-hidden rounded-2xl border border-border-default bg-bg-primary shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-sm leading-relaxed text-text-muted flex-1">
                      {service.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-border-default">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                        Learn more
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-bg-secondary py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Why Our Services Stand Out
            </h2>
            <p className="mt-2 text-text-secondary">
              We combine expertise, technology, and compassion
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Expert Specialists",
                desc: "Board-certified doctors with specialized training and years of clinical experience.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                title: "Advanced Technology",
                desc: "State-of-the-art diagnostic equipment and modern treatment techniques.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: "Patient First",
                desc: "Personalized care plans and compassionate support throughout your treatment.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="rounded-2xl border border-border-default bg-bg-primary p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary-lighter dark:from-primary-dark/40 dark:to-primary-darker/30 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary-darker py-20">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl animate-fade-in-up">
            Need a Specific Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light animate-fade-in-up animate-delay-100">
            Contact us to learn more about any of our services or to schedule a
            consultation.
          </p>
          <div className="mt-8 animate-fade-in-up animate-delay-200">
            <a href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary whitespace-nowrap shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            >
              Get In Touch
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
