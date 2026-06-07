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
      <section className="bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-primary/20 from-gray-50 to-primary-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            About MediCare Clinic
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Dedicated to providing exceptional healthcare with compassion,
            integrity, and innovation for over two decades.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary-light dark:bg-primary-dark/30 px-3 py-1 text-xs font-semibold dark:text-primary-light text-primary-dark">
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
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary-light dark:bg-primary-dark/30 px-3 py-1 text-xs font-semibold dark:text-primary-light text-primary-dark">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl sm:h-[500px]">
            <Image
              src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg"
              alt="Medical facility"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Our Journey
            </h2>
            <p className="mt-2 text-text-secondary">
              Key milestones that shaped MediCare Clinic
            </p>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border-default max-lg:hidden"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""} max-lg:text-left`}>
                    <span className="text-sm font-bold text-primary">{m.year}</span>
                    <p className="mt-1 text-text-secondary">{m.event}</p>
                  </div>
                  <div className="hidden h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-bg-primary shadow lg:block"></div>
                  <div className="flex-1 max-lg:hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Leadership Team
            </h2>
            <p className="mt-2 text-text-secondary">
              Meet the dedicated professionals leading our clinic
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-semibold text-text-primary">{member.name}</h3>
                <p className="text-sm text-text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Want to Know More?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light">
            Get in touch with us to learn more about our clinic and services.
          </p>
          <div className="mt-8">
            <a href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary whitespace-nowrap shadow-md transition-all hover:bg-gray-100 hover:shadow-lg"
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
