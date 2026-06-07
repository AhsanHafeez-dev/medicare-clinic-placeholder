import Image from "next/image";


const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "18 years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    desc: "Board-certified cardiologist specializing in preventive cardiology and heart disease management.",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    experience: "15 years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80",
    desc: "Expert in interventional cardiology with advanced training in minimally invasive procedures.",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "12 years",
    image:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=600&auto=format&fit=crop&q=80",
    desc: "Passionate pediatrician dedicated to providing compassionate care for children of all ages.",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    experience: "20 years",
    image:
      "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=600&auto=format&fit=crop&q=80",
    desc: "Renowned orthopedic surgeon specializing in sports medicine and joint replacement.",
  },
  {
    name: "Dr. Aisha Patel",
    specialty: "Neurology",
    experience: "14 years",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=80",
    desc: "Neurologist with expertise in migraine treatment, epilepsy management, and neurodegenerative disorders.",
  },
  {
    name: "Dr. Robert Kim",
    specialty: "General Medicine",
    experience: "16 years",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80",
    desc: "Experienced internist providing comprehensive primary care and chronic disease management.",
  },
];

const specialties = [
  "Cardiology",
  "Pediatrics",
  "Orthopedics",
  "Neurology",
  "General Medicine",
];

export default function DoctorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-lighter dark:from-gray-950 dark:via-gray-900 dark:to-primary-darker/30 py-20 sm:py-28">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4 animate-fade-in-up">
            Our Team
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl animate-fade-in-up animate-delay-100">
            Our Doctors
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary animate-fade-in-up animate-delay-200">
            Meet our team of highly skilled and compassionate medical
            professionals dedicated to your health.
          </p>
        </div>
      </section>

      {/* Specialties Filter */}
      <section className="border-b border-border-default bg-bg-primary py-6 sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-text-muted mr-2 hidden sm:inline">
              Specialties:
            </span>
            {specialties.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-primary/20 bg-gradient-to-r from-primary-light/50 to-primary-lighter/50 dark:from-primary-dark/30 dark:to-primary-darker/30 px-4 py-1.5 text-xs font-medium dark:text-primary-light text-primary-dark shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, i) => (
              <div
                key={doctor.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="group rounded-2xl border border-border-default bg-bg-primary p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                  <div className="relative mx-auto mb-6 h-52 w-52 overflow-hidden rounded-2xl shadow-md ring-2 ring-border-default transition-all duration-300 group-hover:ring-primary/40">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="208px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center flex-1 flex flex-col">
                    <span className="inline-block rounded-full bg-gradient-to-r from-primary-light to-primary-lighter dark:from-primary-dark/40 dark:to-primary-darker/30 px-4 py-1 text-xs font-bold uppercase tracking-wider dark:text-primary-light text-primary-dark shadow-sm">
                      {doctor.specialty}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-text-primary transition-colors duration-200 group-hover:text-primary">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary/80">
                      {doctor.experience} experience
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted flex-1">
                      {doctor.desc}
                    </p>
                    <a href="/contact"
                      className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 hover:from-primary-dark hover:to-primary-darker"
                    >
                      Book Appointment
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary-light/60 dark:bg-primary-dark/30 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider dark:text-primary-light text-primary-dark mb-4">
              Why Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Why Our Doctors Are Different
            </h2>
            <p className="mt-2 text-text-secondary">
              Committed to excellence in patient care
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Board Certified",
                desc: "All our doctors are board-certified in their respective specialties.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Continuous Learning",
                desc: "We stay updated with the latest medical advancements and treatments.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                ),
              },
              {
                title: "Patient-Centered",
                desc: "We take time to listen, explain, and involve you in treatment decisions.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="rounded-2xl border border-border-default bg-bg-primary p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary-lighter dark:from-primary-dark/40 dark:to-primary-darker/30 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
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
            Ready to Meet Your Doctor?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light animate-fade-in-up animate-delay-100">
            Schedule a consultation with one of our expert physicians today.
          </p>
          <div className="mt-8 animate-fade-in-up animate-delay-200">
            <a href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary whitespace-nowrap shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            >
              Book an Appointment
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
