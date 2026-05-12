import { AlertTriangle } from "lucide-react";

export default function ToyotaUnintendedAccelerationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-5 py-3 rounded-full">
            <AlertTriangle size={16} />
            Featured Global Safety Investigation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl mt-10">
            Toyota Unintended Acceleration
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mt-6 max-w-5xl">
            When Software Complexity Escapes Human Control
          </h2>

          <p className="text-zinc-400 text-xl mt-12 leading-relaxed max-w-5xl">
            A global automotive safety crisis involving software complexity,
            hidden system states, human-machine interaction failures,
            organizational blind spots, and electronic control system risks.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-6xl font-bold text-emerald-400">
                89+
              </div>
              <div className="text-zinc-500 mt-4 text-xl">
                Reported Fatalities
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-6xl font-bold text-emerald-400">
                9M+
              </div>
              <div className="text-zinc-500 mt-4 text-xl">
                Vehicles Recalled
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-6xl font-bold text-emerald-400">
                ECU
              </div>
              <div className="text-zinc-500 mt-4 text-xl">
                Software Complexity
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-6xl font-bold text-emerald-400">
                Global
              </div>
              <div className="text-zinc-500 mt-4 text-xl">
                Automotive Safety Impact
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-28">

          <div className="text-emerald-400 text-sm uppercase tracking-[0.3em]">
            Timeline
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mt-8">
            Toyota Safety Crisis Timeline
          </h2>

          <div className="mt-24 border-l border-zinc-800 pl-10 space-y-20">

            <div>
              <div className="text-emerald-400 text-xl font-semibold">
                2002–2008
              </div>
              <h3 className="text-4xl font-bold mt-4">
                Early Unintended Acceleration Reports
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6 max-w-4xl">
                Drivers began reporting sudden acceleration events across
                multiple Toyota and Lexus models.
              </p>
            </div>

            <div>
              <div className="text-yellow-400 text-xl font-semibold">
                August 2009
              </div>
              <h3 className="text-4xl font-bold mt-4">
                Lexus ES350 Fatal Crash
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6 max-w-4xl">
                A California highway crash killed four people after a vehicle
                accelerated uncontrollably.
              </p>
            </div>

            <div>
              <div className="text-red-400 text-xl font-semibold">
                2009–2010
              </div>
              <h3 className="text-4xl font-bold mt-4">
                Massive Global Recalls
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6 max-w-4xl">
                Toyota recalled millions of vehicles for floor mat, pedal,
                and electronic throttle investigations.
              </p>
            </div>

            <div>
              <div className="text-cyan-400 text-xl font-semibold">
                2013
              </div>
              <h3 className="text-4xl font-bold mt-4">
                NASA Software Investigation
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6 max-w-4xl">
                NASA and NHTSA investigated Toyota software systems and found
                extreme software complexity and architectural weaknesses.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ROOT CAUSE */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="text-emerald-400 text-sm uppercase tracking-[0.3em]">
            Root Cause Analysis
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mt-8">
            Systemic Root Cause Tree
          </h2>

          <p className="text-zinc-400 text-2xl leading-relaxed mt-10 max-w-5xl">
            The Toyota crisis was not caused by a single mechanical issue.
            It emerged from the interaction of software complexity,
            hidden system states, insufficient fail-safe architecture,
            organizational pressure, and weak human-machine communication.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-24">

            <div className="border border-emerald-500/20 rounded-3xl p-10 bg-black">
              <div className="text-emerald-400 text-lg">
                ROOT CAUSE 01
              </div>
              <h3 className="text-3xl font-bold mt-6">
                Excessive Software Complexity
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mt-6">
                Safety-critical software became too large and difficult
                for engineers to fully understand or validate.
              </p>
            </div>

            <div className="border border-yellow-500/20 rounded-3xl p-10 bg-black">
              <div className="text-yellow-400 text-lg">
                ROOT CAUSE 02
              </div>
              <h3 className="text-3xl font-bold mt-6">
                Hidden System States
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mt-6">
                Drivers could not understand what the electronic throttle
                system was doing internally during failure conditions.
              </p>
            </div>

            <div className="border border-red-500/20 rounded-3xl p-10 bg-black">
              <div className="text-red-400 text-lg">
                ROOT CAUSE 03
              </div>
              <h3 className="text-3xl font-bold mt-6">
                Weak Safety Architecture
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mt-6">
                Insufficient redundancy and fail-safe isolation increased
                the risk of uncontrolled behavior.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SAFETY PHILOSOPHY */}
      <section className="border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-32">

          <div className="text-emerald-400 text-sm uppercase tracking-[0.3em]">
            Safety Philosophy
          </div>

          <h2 className="text-6xl md:text-8xl font-bold leading-tight mt-10">
            Complexity
            <br />
            can become
            <br />
            invisible danger.
          </h2>

          <p className="text-zinc-400 text-2xl leading-relaxed mt-16 max-w-5xl">
            Modern software systems often fail silently long before they fail visibly.
            When complexity exceeds human understanding, safety margins collapse.
          </p>

        </div>
      </section>

      {/* LESSONS */}
      <section className="border-b border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="text-emerald-400 text-sm uppercase tracking-[0.3em]">
            Lessons for Autonomous Driving
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mt-8 max-w-6xl">
            What Autonomous Vehicles Must Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-24">

            <div className="border border-zinc-800 rounded-3xl p-10 bg-black">
              <h3 className="text-3xl font-bold">
                Complexity is a Safety Risk
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6">
                AI-driven vehicles will become even more complex than
                traditional ECUs. Complexity itself must be treated
                as a hazard source.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-black">
              <h3 className="text-3xl font-bold">
                Humans Need Transparency
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6">
                Drivers must understand system status, limitations,
                and failure modes in real time.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-black">
              <h3 className="text-3xl font-bold">
                Fail-Safe Must Be Fundamental
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6">
                Autonomous systems must degrade safely under uncertainty,
                sensor conflicts, or unexpected conditions.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-black">
              <h3 className="text-3xl font-bold">
                Safety Culture Matters
              </h3>
              <p className="text-zinc-400 text-xl leading-relaxed mt-6">
                Organizational pressure and rapid deployment can quietly
                destroy engineering safety discipline.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-40">

          <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-[40px] p-16">

            <div className="text-emerald-400 text-sm uppercase tracking-[0.3em]">
              Cross-Industry Safety Transfer
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
              Safety lessons
              <br />
              must travel
              <br />
              faster than failure.
            </h2>

            <p className="text-zinc-400 text-2xl leading-relaxed mt-12 max-w-5xl">
              The future of autonomous mobility depends on whether humanity
              can transfer hard-earned safety lessons across industries
              before the next systemic failure repeats the same pattern.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}