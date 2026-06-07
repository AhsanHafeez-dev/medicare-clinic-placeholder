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
      <section className="bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-primary/20 from-gray-50 to-primary-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Our Doctors
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Meet our team of highly skilled and compassionate medical
            professionals dedicated to your health.
          </p>
        </div>
      </section>

      {/* Specialties Filter */}
      <section className="border-b border-border-default bg-bg-primary py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-text-muted mr-2">
              Specialties:
            </span>
            {specialties.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-primary/20 bg-primary-light/50 dark:bg-primary-dark/30 px-3.5 py-1.5 text-xs font-medium dark:text-primary-light text-primary-dark"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="bg-bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="group rounded-2xl border border-border-default bg-bg-primary p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mx-auto mb-5 h-48 w-48 overflow-hidden rounded-2xl">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="192px"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-primary-light dark:bg-primary-dark/30 px-3 py-0.5 text-xs font-medium dark:text-primary-light text-primary-dark">
                    {doctor.specialty}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-text-primary">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {doctor.experience} experience
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {doctor.desc}
                  </p>
                  <a href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white whitespace-nowrap transition-all hover:bg-primary-dark"
                  >
                    Book Appointment
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
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
              },
              {
                title: "Continuous Learning",
                desc: "We stay updated with the latest medical advancements and treatments.",
              },
              {
                title: "Patient-Centered",
                desc: "We take time to listen, explain, and involve you in treatment decisions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-default bg-bg-primary p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light dark:bg-primary-dark/30 text-primary">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Meet Your Doctor?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-light">
            Schedule a consultation with one of our expert physicians today.
          </p>
          <div className="mt-8">
            <a href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary whitespace-nowrap shadow-md transition-all hover:bg-gray-100 hover:shadow-lg"
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
