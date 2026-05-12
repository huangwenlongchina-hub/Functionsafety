// app/page.tsx

import {
  Shield,
  AlertTriangle,
  FileText,
  BrainCircuit,
  Globe,
  ArrowRight,
  Plane,
  Car,
  Factory,
  HeartPulse,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_40%)] pointer-events-none" />

      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-40" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl border border-emerald-400/30 bg-emerald-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="text-2xl font-bold tracking-tight">
              Function
              <span className="text-emerald-400">Safety</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-emerald-400 transition">
              Incidents
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Standards
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Products
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Certifications
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              AI Safety
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-28">
          <div className="inline-flex items-center gap-2 border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 px-5 py-2 rounded-full text-sm tracking-wide mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Global Functional Safety Intelligence Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-6xl">
            Human Industrial
            <br />
            Safety Knowledge
            <br />
            <span className="text-emerald-400">
              Network
            </span>
          </h1>

          <p className="mt-10 text-xl text-gray-400 leading-relaxed max-w-4xl">
            Transforming global safety failures into
            cross-industry engineering intelligence.
            <br />
            Connecting accidents, standards, certifications,
            AI systems, and industrial safety evolution.
          </p>

          {/* Mission Quote */}
          <div className="mt-14 max-w-5xl">
            <div className="text-2xl md:text-3xl font-semibold leading-relaxed text-white">
              Let the blood once shed by one product
              <br />
              never be shed again by another.
            </div>

            <div className="mt-6 text-2xl md:text-3xl text-emerald-400 font-semibold leading-relaxed">
              让一个产品流过的血，
              <br />
              不再在另一个产品重流。
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-5 mt-14">
            <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-8 py-4 rounded-2xl transition flex items-center gap-2 shadow-[0_0_40px_rgba(16,185,129,0.35)]">
              Explore Global Incidents
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="border border-white/15 hover:border-emerald-400/40 hover:bg-white/5 px-8 py-4 rounded-2xl transition">
              Functional Safety Standards
            </button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-emerald-400 uppercase tracking-widest text-sm mb-5">
                Mission
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Safety Knowledge
                <br />
                Must Travel
                <br />
                Faster Than Risk
              </h2>

              <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                Most industries investigate accidents only within
                their own domains.
              </p>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                FunctionSafety builds a global safety knowledge
                migration network where engineering lessons transfer
                across industries before similar tragedies occur again.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: Plane,
                  title: "Aviation",
                },
                {
                  icon: Car,
                  title: "Automotive",
                },
                {
                  icon: Factory,
                  title: "Industrial",
                },
                {
                  icon: BrainCircuit,
                  title: "AI Systems",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] hover:border-emerald-400/30 transition"
                >
                  <item.icon className="w-10 h-10 text-emerald-400 mb-5" />

                  <div className="text-2xl font-semibold">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-emerald-400 uppercase tracking-widest text-sm mb-4">
              Core Intelligence System
            </div>

            <h2 className="text-5xl font-bold">
              Global Functional Safety
              <br />
              Knowledge Graph
            </h2>

            <p className="mt-6 text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Connecting incidents, standards, certifications,
              human factors, software failures,
              AI risks, and industrial system evolution
              into one global safety intelligence platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Global Incident Database",
                desc: "Deep investigations into catastrophic engineering failures and systemic safety breakdowns.",
              },
              {
                icon: FileText,
                title: "Standards Mapping",
                desc: "Direct relationships between accidents and violated functional safety principles.",
              },
              {
                icon: BrainCircuit,
                title: "Cross-Industry Lessons",
                desc: "Transfer safety knowledge across aviation, automotive, robotics, AI, and medicine.",
              },
              {
                icon: Shield,
                title: "Safety Migration Warnings",
                desc: "Identify hidden risk patterns migrating into emerging technologies.",
              },
              {
                icon: HeartPulse,
                title: "Human Factors Analysis",
                desc: "Understand operator confusion, automation trust, and control authority loss.",
              },
              {
                icon: Globe,
                title: "AI Civilization Safety",
                desc: "Exploring the future relationship between AI, complexity, and human control.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-emerald-400/30 hover:bg-white/[0.05] transition"
              >
                <feature.icon className="w-10 h-10 text-emerald-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Investigation */}
      <section className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />

            <div className="relative z-10 max-w-5xl">
              <div className="text-emerald-400 uppercase tracking-widest text-sm mb-4">
                Featured World Investigation
              </div>

              <h2 className="text-5xl font-black leading-tight">
                Boeing 737 MAX
                <br />
                MCAS Catastrophe
              </h2>

              <p className="mt-8 text-xl text-gray-300 leading-relaxed">
                Not only an aviation accident.
                <br />
                A universal warning for autonomous systems,
                hidden automation, certification pressure,
                and the future of AI-controlled technologies.
              </p>

              <div className="grid md:grid-cols-4 gap-5 mt-12">
                {[
                  "Root Cause Analysis",
                  "Safety Violations",
                  "Human Factors",
                  "AI Safety Lessons",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-2xl p-5 bg-black/30"
                  >
                    <div className="text-lg font-semibold">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              <a
                 href="/incidents/boeing-737-max-mcas"
                 className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 text-black px-8 py-4 text-xl font-bold hover:bg-emerald-300 transition"
                 >
                  Read Full Investigation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["10,000+", "Incidents Tracked"],
              ["500+", "Safety Standards"],
              ["2,000+", "Certified Products"],
              ["50+", "Industries Connected"],
            ].map(([number, label], index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
              >
                <div className="text-5xl font-black text-emerald-400">
                  {number}
                </div>

                <div className="mt-4 text-gray-400 text-lg">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-gray-500">
          <div>
            © 2026 FunctionSafety.com
            <br />
            Human Industrial Safety Knowledge Network
          </div>

          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-400 transition">
              Incidents
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Standards
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Research
            </a>

            <a href="#" className="hover:text-emerald-400 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}