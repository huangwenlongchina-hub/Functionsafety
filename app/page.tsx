// app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#081120] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-900/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Global Functional Safety Intelligence
            </p>

            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
              Human Industrial Safety
              <span className="block text-cyan-400">
                Knowledge Network
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              Tracking the evolution of safety across incidents,
              standards, certifications, AI systems, and industrial
              civilization.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400">
                Explore Incidents
              </button>

              <button className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10">
                Explore Standards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Safety Graph */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Global Safety Evolution Graph
            </h2>

            <p className="mt-3 text-gray-400">
              Understanding the relationship between incidents,
              standards, products, certifications, and AI systems.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Incidents",
            "Standards",
            "Products",
            "Certifications",
            "AI Safety",
            "Organizations",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold">{item}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Explore global safety intelligence related to {item}.
              </p>

              <button className="mt-6 text-sm font-medium text-cyan-400 hover:text-cyan-300">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Incidents */}
      <section className="border-t border-white/10 bg-[#0b1728]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Latest Global Safety Incidents
            </h2>

            <p className="mt-3 text-gray-400">
              Tracking critical incidents that shape future safety
              standards and engineering practices.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Autonomous Vehicle Sensor Failure",
                industry: "Automotive",
                risk: "High",
              },
              {
                title: "Industrial Robot Unexpected Motion",
                industry: "Industrial",
                risk: "Critical",
              },
              {
                title: "Medical Device Software Fault",
                industry: "Medical",
                risk: "High",
              },
            ].map((incident, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {incident.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Industry: {incident.industry}
                    </p>
                  </div>

                  <div className="inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                    Risk Level: {incident.risk}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Functional Safety Standards
          </h2>

          <p className="mt-3 text-gray-400">
            Explore the evolution of global safety standards and
            their impact on industrial systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "IEC 61508",
            "ISO 26262",
            "IEC 61511",
            "ISO 21448",
          ].map((standard) => (
            <div
              key={standard}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{standard}</h3>

              <p className="mt-3 text-sm text-gray-400">
                Global functional safety standard and ecosystem.
              </p>

              <button className="mt-6 text-sm text-cyan-400">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AI Safety Section */}
      <section className="border-t border-white/10 bg-[#0b1728]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              AI Civilization Safety
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Safety is the continuous learning ability of civilization
              facing complexity.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              AI is transforming functional safety from fault-based
              engineering into complexity governance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400">
                Explore AI Safety
              </button>

              <button className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10">
                View Research
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            © 2026 FunctionSafety.com
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Incidents
            </a>

            <a href="#" className="hover:text-white">
              Standards
            </a>

            <a href="#" className="hover:text-white">
              Products
            </a>

            <a href="#" className="hover:text-white">
              AI Safety
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}