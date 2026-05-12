import Link from "next/link";

const investigations = [
  {
    title: "Boeing 737 MAX MCAS",
    subtitle: "A System Safety Failure in the Age of Automation",
    description:
      "Hidden automation, single-sensor dependency, certification shortcuts, and organizational pressure combined into one of the deadliest aviation disasters of the modern era.",
    href: "/incidents/boeing-737-max-mcas",
    tags: [
      "Root Cause Analysis",
      "Safety Violations",
      "Human Factors",
      "AI Safety Lessons",
    ],
  },
  {
    title: "Toyota Unintended Acceleration",
    subtitle: "When Software Complexity Escapes Human Control",
    description:
      "Electronic throttle systems, software complexity, hidden system states, and weak fail-safe strategies triggered a global automotive safety crisis.",
    href: "/incidents/toyota-unintended-acceleration",
    tags: [
      "Embedded Software",
      "Automotive Safety",
      "Human Override",
      "Fail-safe Design",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-emerald-950/30 to-black">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 rounded-full px-5 py-2 text-emerald-400 text-sm mb-8">
            GLOBAL SAFETY INVESTIGATION DATABASE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
            FunctionSafety.com
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mt-6 max-w-5xl">
            Learning Safety Through Global Catastrophes
          </h2>

          <p className="text-zinc-400 text-xl mt-10 leading-relaxed max-w-4xl">
            A global investigation platform exploring aviation disasters,
            automotive software failures, autonomous driving risks, industrial
            catastrophes, AI safety failures, and the future of system safety
            engineering.
          </p>
        </div>
      </section>

      {/* INVESTIGATIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-4">
              Featured Investigations
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              Global Safety Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {investigations.map((item, index) => (
              <Link key={index} href={item.href}>
                <div className="group border border-emerald-500/20 rounded-[32px] p-10 bg-gradient-to-br from-emerald-950/20 to-black hover:border-emerald-400 transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                  <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-6">
                    Featured World Investigation
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  <h4 className="text-emerald-400 text-2xl md:text-3xl font-bold mt-6 leading-tight">
                    {item.subtitle}
                  </h4>

                  <p className="text-zinc-400 text-lg mt-10 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-10">
                    {item.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="border border-zinc-800 rounded-2xl px-5 py-5 text-center text-lg font-semibold text-zinc-200"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  <button className="mt-10 bg-emerald-400 text-black font-bold text-xl px-10 py-5 rounded-2xl hover:bg-emerald-300 transition">
                    Read Full Investigation
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-zinc-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-emerald-500/20 rounded-[40px] p-16 bg-gradient-to-br from-emerald-950/20 to-black">
            <div className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-8">
              Safety Transfer Philosophy
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
              Safety knowledge must travel faster than tragedy.
            </h2>

            <p className="text-zinc-400 text-2xl mt-12 leading-relaxed max-w-4xl">
              Every catastrophic failure contains transferable lessons for
              autonomous systems, AI-driven machines, software-defined vehicles,
              aerospace systems, robotics, and the future of industrial
              civilization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}