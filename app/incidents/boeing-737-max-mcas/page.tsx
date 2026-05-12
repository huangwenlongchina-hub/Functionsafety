import {
  AlertTriangle,
  ShieldAlert,
  Brain,
  Plane,
  Cpu,
  Network,
} from "lucide-react";

export default function Boeing737MaxPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 rounded-full text-emerald-400 text-sm mb-10">
            <AlertTriangle size={16} />
            Featured Global Safety Investigation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
            Boeing 737 MAX MCAS
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mt-6 max-w-5xl">
            A System Safety Failure in the Age of Automation
          </h2>

          <p className="text-zinc-400 text-xl mt-10 leading-relaxed max-w-5xl">
            How sensor dependency, hidden automation behavior,
            certification shortcuts, organizational pressure,
            and human factors combined into one of the worst
            aviation disasters of the modern era.
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">346</div>
              <div className="text-zinc-500 mt-4">
                Total Fatalities
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">2</div>
              <div className="text-zinc-500 mt-4">
                Crashes
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">1</div>
              <div className="text-zinc-500 mt-4">
                Single Sensor Dependency
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">Global</div>
              <div className="text-zinc-500 mt-4">
                Aviation Safety Impact
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-28">

          <div className="flex items-center gap-3 text-emerald-400 text-sm tracking-widest uppercase mb-10">
            <div className="w-4 h-4 rounded-full bg-emerald-400" />
            Timeline
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-20">
            Boeing 737 MAX MCAS Timeline
          </h2>

          <div className="space-y-16 border-l border-zinc-800 pl-10">

            <div className="relative">
              <div className="absolute -left-[49px] w-5 h-5 bg-emerald-400 rounded-full" />
              <div className="text-emerald-400 font-semibold mb-3">
                2011
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Boeing Launches 737 MAX Program
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Boeing rapidly modified the existing 737 platform
                to compete with the Airbus A320neo instead of
                designing an entirely new aircraft.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] w-5 h-5 bg-emerald-400 rounded-full" />
              <div className="text-emerald-400 font-semibold mb-3">
                2016
              </div>
              <h3 className="text-3xl font-bold mb-4">
                MCAS Added to Flight Control System
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                The Maneuvering Characteristics Augmentation System (MCAS)
                was introduced to automatically push the aircraft nose downward
                under certain flight conditions.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] w-5 h-5 bg-red-500 rounded-full" />
              <div className="text-red-400 font-semibold mb-3">
                October 29, 2018
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Lion Air Flight 610 Crashes
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Faulty angle-of-attack sensor data repeatedly activated MCAS,
                ultimately causing the aircraft to crash into the Java Sea.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] w-5 h-5 bg-red-500 rounded-full" />
              <div className="text-red-400 font-semibold mb-3">
                March 10, 2019
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Ethiopian Airlines Flight 302 Crashes
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                A second 737 MAX crashed under nearly identical conditions,
                killing all passengers and crew onboard.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] w-5 h-5 bg-yellow-400 rounded-full" />
              <div className="text-yellow-400 font-semibold mb-3">
                March 2019
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Global Grounding of 737 MAX Fleet
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Aviation authorities worldwide grounded the aircraft,
                triggering one of the largest crises in Boeing history.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ROOT CAUSE TREE */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="flex items-center gap-3 text-emerald-400 text-sm tracking-widest uppercase mb-10">
            <div className="w-4 h-4 rounded-full bg-emerald-400" />
            Root Cause Analysis
          </div>

          <h2 className="text-6xl font-bold max-w-5xl">
            Systemic Root Cause Tree
          </h2>

          <p className="text-zinc-400 text-2xl leading-relaxed max-w-5xl mt-10">
            The Boeing 737 MAX disaster was not caused by a single software bug.
            It emerged from the interaction of engineering shortcuts,
            hidden automation, organizational pressure,
            certification weaknesses, and human-machine design failures.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="border border-emerald-500/30 rounded-3xl p-10 bg-zinc-950">
              <Cpu className="text-emerald-400 mb-6" size={40} />
              <div className="text-emerald-400 text-sm uppercase tracking-widest mb-4">
                Root Cause 01
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Single Sensor Dependency
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                MCAS relied on a single angle-of-attack sensor,
                allowing one faulty input to repeatedly command
                aggressive nose-down behavior.
              </p>
            </div>

            <div className="border border-yellow-500/30 rounded-3xl p-10 bg-zinc-950">
              <Brain className="text-yellow-400 mb-6" size={40} />
              <div className="text-yellow-400 text-sm uppercase tracking-widest mb-4">
                Root Cause 02
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Hidden Automation
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Pilots were not fully informed about MCAS behavior.
                Unexpected automation intervention created confusion
                during critical flight moments.
              </p>
            </div>

            <div className="border border-red-500/30 rounded-3xl p-10 bg-zinc-950">
              <ShieldAlert className="text-red-400 mb-6" size={40} />
              <div className="text-red-400 text-sm uppercase tracking-widest mb-4">
                Root Cause 03
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Certification Pressure
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Market competition and certification speed pressured
                engineering decisions, reducing safety margins and transparency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VIOLATED PRINCIPLES */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="flex items-center gap-3 text-emerald-400 text-sm tracking-widest uppercase mb-10">
            <div className="w-4 h-4 rounded-full bg-emerald-400" />
            Violated Safety Principles
          </div>

          <h2 className="text-6xl font-bold max-w-5xl">
            Critical Safety Principles Were Broken
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-5">
                No Single Point of Failure
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Safety-critical systems must never depend on a single sensor.
                MCAS violated one of the oldest principles in safety engineering.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-5">
                Human Must Understand Automation
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Pilots were not clearly informed about MCAS operation,
                reducing their ability to respond effectively.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-5">
                Safety Before Market Pressure
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Commercial pressure accelerated certification timelines,
                weakening engineering rigor and transparency.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-5">
                Transparent Human-Machine Interaction
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Automation should never surprise operators during emergencies.
                Hidden system behavior destroys trust and response capability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LESSONS */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="flex items-center gap-3 text-emerald-400 text-sm tracking-widest uppercase mb-10">
            <div className="w-4 h-4 rounded-full bg-emerald-400" />
            Lessons for Autonomous Driving
          </div>

          <h2 className="text-6xl font-bold max-w-5xl">
            What Autonomous Vehicles Must Learn
          </h2>

          <p className="text-zinc-400 text-2xl leading-relaxed max-w-5xl mt-10">
            The Boeing 737 MAX crisis was an early warning for the age of AI-driven systems.
            Modern autonomous vehicles face many of the same risks:
            hidden automation, sensor overconfidence,
            weak human-machine interaction,
            and organizational pressure overwhelming safety.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="border border-emerald-500/30 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-6">
                Never Trust One Sensor
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Autonomous vehicles must use sensor redundancy,
                cross-validation, and fault diagnostics at all times.
              </p>
            </div>

            <div className="border border-yellow-500/30 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-6">
                Hidden Automation Destroys Trust
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Operators must understand what the system is doing,
                why it is doing it,
                and when intervention is necessary.
              </p>
            </div>

            <div className="border border-blue-500/30 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-6">
                Human Override Must Always Exist
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Humans must retain meaningful control over safety-critical systems,
                especially during uncertainty or degraded operation.
              </p>
            </div>

            <div className="border border-red-500/30 rounded-3xl p-10 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-6">
                Organizational Pressure Is a Safety Hazard
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Safety culture must remain stronger than schedule pressure,
                market competition, or cost reduction goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY PHILOSOPHY */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="flex items-center gap-3 text-emerald-400 text-sm tracking-widest uppercase mb-10">
            <div className="w-4 h-4 rounded-full bg-emerald-400" />
            Safety Philosophy
          </div>

          <h2 className="text-7xl font-bold leading-tight max-w-5xl">
            Humanity Repeats
            <br />
            Safety Failures
          </h2>

          <p className="text-zinc-400 text-2xl leading-relaxed max-w-5xl mt-14">
            Every catastrophic accident reflects the state of human civilization.
            Technology rarely fails first.
            Safety philosophy fails first.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-24">

            <div className="border border-zinc-800 rounded-3xl p-12 bg-zinc-950">
              <h3 className="text-4xl font-bold mb-6">
                Safety Is Not a Feature
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Safety cannot be added later.
                It must be embedded into system architecture,
                organizational culture,
                certification processes,
                and engineering decisions from the beginning.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-12 bg-zinc-950">
              <h3 className="text-4xl font-bold mb-6">
                Automation Must Remain Understandable
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Humans fear systems they do not understand.
                Invisible automation eventually creates confusion,
                mistrust,
                and dangerous operator behavior.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CROSS INDUSTRY */}
      <section className="bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-32">

          <div className="border border-emerald-500/20 rounded-[40px] bg-emerald-500/5 p-16">

            <div className="flex items-center gap-3 text-emerald-400 text-sm tracking-[0.3em] uppercase mb-10">
              <Network size={18} />
              Safety Transfer Philosophy
            </div>

            <h2 className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl">
              Safety knowledge must travel faster than tragedy.
            </h2>

            <p className="text-zinc-400 text-2xl leading-relaxed max-w-5xl mt-12">
              The future of industrial civilization depends on whether humanity
              can transfer hard-earned safety lessons across industries
              before the next disaster repeats the same pattern.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-20">

              <div className="border border-zinc-800 rounded-3xl p-10 bg-black/40">
                <Plane className="text-emerald-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">
                  Aviation
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Learn from hidden automation,
                  certification failures,
                  and human-machine interaction disasters.
                </p>
              </div>

              <div className="border border-zinc-800 rounded-3xl p-10 bg-black/40">
                <Cpu className="text-emerald-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">
                  Autonomous Vehicles
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Apply redundancy,
                  explainable automation,
                  fail-operational design,
                  and driver monitoring principles.
                </p>
              </div>

              <div className="border border-zinc-800 rounded-3xl p-10 bg-black/40">
                <ShieldAlert className="text-emerald-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">
                  AI-Controlled Systems
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Ensure transparent decision-making,
                  controllability,
                  human supervision,
                  and robust safety governance.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}