import Image from "next/image";


const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Cardiology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Senior Pediatrician",
    image:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. James Wilson",
    role: "Orthopedic Specialist",
    image:
      "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=600&auto=format&fit=crop&q=80",
  },
];

const milestones = [
  { year: "2003", event: "MediCare Clinic founded by Dr. Sarah Johnson" },
  {
    year: "2008",
    event: "Expanded to include Cardiology and Pediatrics departments",
  },
  { year: "2013", event: "Opened state-of-the-art surgical wing" },
  { year: "2018", event: "Reached 50,000+ patients served milestone" },
  { year: "2023", event: "Launched telemedicine services for remote consultations" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-lighter dark:from-gray-950 dark:via-gray-900 dark:to-primary-darker/30 py-20 sm:py-28">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4 animate-fade-in-up">
            About Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl animate-fade-in-up animate-delay-100">
            About MediCare Clinic
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary animate-fade-in-up animate-delay-200">
            Dedicated to providing exceptional healthcare with compassion,
            integrity, and innovation for over two decades.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-border-default bg-bg-secondary p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in-up">
              <span className="inline-block rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-1.5 text-sm font-semibold text-white shadow-sm">
                Our Mission
              </span>
              <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                Making Healthcare Accessible & Compassionate
              </h2>
              <p className="text-text-secondary leading-relaxed">
                At MediCare Clinic, our mission is to provide high-quality,
                patient-centered healthcare that is accessible to everyone. We
                believe in treating the whole person, not just the symptoms, and
                fostering long-term relationships built on trust and respect.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-border-default bg-bg-secondary p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in-up animate-delay-100">
              <span className="inline-block rounded-full bg-gradient-to-r from-secondary to-secondary-dark px-5 py-1.5 text-sm font-semibold text-white shadow-sm">
                Our Vision
              </span>
              <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
                A Healthier Community, One Patient at a Time
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We envision a community where every individual has access to
                comprehensive, preventative, and curative healthcare. Through
                continuous innovation and community outreach, we strive to be the
                cornerstone of health and wellness in our region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 animate-fade-in-up">
          <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 sm:h-[500px]">
            <Image
              src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg"
              alt="Medical facility"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-2xl font-bold">State-of-the-Art Facility</p>
              <p className="text-sm opacity-80">Advanced technology for better outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Our Journey
            </h2>
            <p className="mt-2 text-text-secondary">
              Key milestones that shaped MediCare Clinic
            </p>
          </div>
          <div className="relative mt-16 animate-fade-in-up animate-delay-100">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-primary-dark to-primary-darker max-lg:hidden"></div>
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""} max-lg:text-left`}>
                    <div className={`inline-block rounded-2xl border border-border-default bg-bg-secondary p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${i % 2 === 0 ? "lg:mr-4" : "lg:ml-4"}`}>
                      <span className="text-lg font-bold text-primary">{m.year}</span>
                      <p className="mt-1 text-text-secondary text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative hidden h-5 w-5 shrink-0 lg:flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full border-4 border-primary bg-bg-primary shadow-md"></div>
                    <div className="absolute h-3 w-3 rounded-full bg-primary animate-pulse-soft"></div>
                  </div>
                  <div className="flex-1 max-lg:hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4">
              Our Team
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Leadership Team
            </h2>
            <p className="mt-2 text-text-secondary">
              Meet the dedicated professionals leading our clinic
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="group text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative mx-auto mb-5 h-44 w-44 overflow-hidden rounded-2xl shadow-lg ring-2 ring-border-default transition-all duration-300 group-hover:ring-primary/50 group-hover:shadow-xl group-hover:-translate-y-1">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="176px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary transition-colors duration-200 group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-text-muted">{member.role}</p>
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
            Want to Know More?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light animate-fade-in-up animate-delay-100">
            Get in touch with us to learn more about our clinic and services.
          </p>
          <div className="mt-8 animate-fade-in-up animate-delay-200">
            <a href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary whitespace-nowrap shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            >
              Contact Us
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
