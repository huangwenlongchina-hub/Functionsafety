import {
  AlertTriangle,
  Shield,
  Plane,
  BrainCircuit,
  Users,
  FileWarning,
  Globe,
} from "lucide-react";

export default function Boeing737MaxPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rounded-full text-emerald-400 text-sm mb-8">
            <AlertTriangle size={16} />
            Featured Global Safety Investigation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            Boeing 737 MAX MCAS
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mt-4 max-w-5xl">
            A System Safety Failure in the Age of Automation
          </h2>

          <p className="text-zinc-400 text-xl mt-10 leading-relaxed max-w-4xl">
            How sensor dependency, hidden automation behavior,
            certification shortcuts, organizational pressure,
            and human factors combined into one of the worst
            aviation disasters of the modern era.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
              <div className="text-4xl font-bold text-emerald-400">346</div>
              <div className="text-zinc-500 mt-2">Lives Lost</div>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
              <div className="text-4xl font-bold text-emerald-400">2</div>
              <div className="text-zinc-500 mt-2">Fatal Crashes</div>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
              <div className="text-4xl font-bold text-emerald-400">1</div>
              <div className="text-zinc-500 mt-2">Single AOA Sensor</div>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
              <div className="text-4xl font-bold text-emerald-400">Global</div>
              <div className="text-zinc-500 mt-2">Safety Impact</div>
            </div>

          </div>
        </div>
      </section>

      {/* MEMORIAL */}
      <section className="border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <div className="text-2xl md:text-4xl font-bold leading-relaxed">
            “让一个产品流过的血，
            不再在另一个产品上重流。”
          </div>

          <div className="text-emerald-400 text-xl md:text-2xl mt-6">
            “Let the blood spilled by one product
            never be spilled again by another.”
          </div>

          <p className="text-zinc-500 mt-10 text-lg leading-relaxed">
            This investigation exists not merely to document the past,
            but to prevent future tragedies across aviation,
            automotive systems, medical AI, robotics,
            industrial automation, and autonomous technologies.
          </p>

        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="flex items-center gap-3 mb-10">
            <Shield className="text-emerald-400" />
            <h2 className="text-4xl font-bold">
              Executive Summary
            </h2>
          </div>

          <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">

            <p>
              The Boeing 737 MAX crashes revealed a systemic safety failure
              involving automation assumptions, insufficient pilot awareness,
              certification weaknesses, and overreliance on a single sensor input.
            </p>

            <p>
              At the center of the disaster was MCAS
              (Maneuvering Characteristics Augmentation System),
              an automated flight control function capable of repeatedly
              commanding nose-down trim based on input from a single
              Angle of Attack (AOA) sensor.
            </p>

            <p>
              The system operated with limited transparency to pilots,
              insufficient failure mitigation,
              and inadequate human-machine interaction design.
            </p>

            <p>
              The tragedy demonstrated that modern safety failures
              are no longer caused by isolated component defects alone,
              but increasingly emerge from the interaction between:
            </p>

            <ul className="list-disc list-inside text-emerald-400 space-y-2">
              <li>Automation complexity</li>
              <li>Human cognitive limitations</li>
              <li>Certification pressure</li>
              <li>Software assumptions</li>
              <li>Organizational incentives</li>
              <li>Safety culture erosion</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ROOT CAUSE */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="flex items-center gap-3 mb-14">
            <BrainCircuit className="text-emerald-400" />
            <h2 className="text-4xl font-bold">
              Root Cause Analysis
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Technical Factors
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>• Single sensor dependency</li>
                <li>• Insufficient redundancy</li>
                <li>• Hidden automation behavior</li>
                <li>• Repeated MCAS activation logic</li>
                <li>• Inadequate fault tolerance</li>
              </ul>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Human Factors
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>• Pilot confusion under stress</li>
                <li>• Lack of MCAS awareness</li>
                <li>• Cognitive overload</li>
                <li>• Automation surprise</li>
                <li>• Inadequate training assumptions</li>
              </ul>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Organizational Factors
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>• Schedule pressure</li>
                <li>• Competitive market pressure</li>
                <li>• Certification delegation issues</li>
                <li>• Safety communication failures</li>
                <li>• Incremental design compromises</li>
              </ul>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Safety Philosophy Failure
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>• Automation exceeded transparency</li>
                <li>• Human authority became ambiguous</li>
                <li>• Complexity exceeded operational intuition</li>
                <li>• Safety assumptions became fragile</li>
                <li>• Human-machine trust collapsed</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* VIOLATED PRINCIPLES */}
      <section className="border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="flex items-center gap-3 mb-12">
            <FileWarning className="text-emerald-400" />
            <h2 className="text-4xl font-bold">
              Violated Safety Principles
            </h2>
          </div>

          <div className="space-y-6">

            {[
              "No single point of catastrophic failure",
              "Fail-safe system behavior",
              "Human awareness of automation actions",
              "Clear pilot override authority",
              "Defensive software design",
              "Transparency of critical control logic",
              "Adequate redundancy for safety-critical inputs",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950 text-xl text-zinc-300"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CROSS INDUSTRY LESSONS */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="flex items-center gap-3 mb-14">
            <Globe className="text-emerald-400" />
            <h2 className="text-4xl font-bold">
              Cross-Industry Lessons
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <Plane className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">
                Aviation
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Automation must remain understandable,
                predictable, and overrideable under stress conditions.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <Users className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">
                Autonomous Vehicles
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Sensor trust assumptions in self-driving systems
                can recreate MCAS-like systemic hazards.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <BrainCircuit className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">
                AI Systems
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                AI decision systems that exceed human interpretability
                create new categories of safety risk.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">

          <h2 className="text-4xl font-bold leading-relaxed">
            Safety knowledge must travel faster than tragedy.
          </h2>

          <p className="text-zinc-500 text-xl mt-8 leading-relaxed">
            The purpose of this investigation is not blame.
            The purpose is civilizational learning.
          </p>

        </div>
      </section>

    </main>
  );
}