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
      {/* TIMELINE */}
<section className="border-t border-zinc-900 bg-black">
  <div className="max-w-5xl mx-auto px-6 py-24">

    <div className="flex items-center gap-3 mb-12">
      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
      <span className="text-emerald-400 uppercase tracking-widest text-sm">
        Accident Timeline
      </span>
    </div>

    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      Timeline of the Boeing 737 MAX MCAS Crisis
    </h2>

    <div className="space-y-12 border-l border-zinc-800 pl-8">

      <div className="relative">
        <div className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-emerald-400"></div>
        <p className="text-emerald-400 text-sm">2011</p>
        <h3 className="text-2xl font-semibold mt-2">
          Boeing launches 737 MAX program
        </h3>
        <p className="text-zinc-400 mt-3 leading-relaxed">
          To compete with Airbus A320neo, Boeing rapidly modifies the legacy
          737 platform instead of designing a new aircraft.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-emerald-400"></div>
        <p className="text-emerald-400 text-sm">2016</p>
        <h3 className="text-2xl font-semibold mt-2">
          MCAS introduced into flight control system
        </h3>
        <p className="text-zinc-400 mt-3 leading-relaxed">
          Maneuvering Characteristics Augmentation System (MCAS) is added to
          automatically push the aircraft nose down under certain conditions.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-red-500"></div>
        <p className="text-red-400 text-sm">October 29, 2018</p>
        <h3 className="text-2xl font-semibold mt-2">
          Lion Air Flight 610 crashes
        </h3>
        <p className="text-zinc-400 mt-3 leading-relaxed">
          Faulty Angle-of-Attack sensor data repeatedly activates MCAS,
          forcing the aircraft nose downward. 189 people die.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-red-500"></div>
        <p className="text-red-400 text-sm">March 10, 2019</p>
        <h3 className="text-2xl font-semibold mt-2">
          Ethiopian Airlines Flight 302 crashes
        </h3>
        <p className="text-zinc-400 mt-3 leading-relaxed">
          Another MCAS-triggered loss-of-control accident kills 157 people,
          revealing systemic design and certification failures.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-yellow-500"></div>
        <p className="text-yellow-400 text-sm">2019–2020</p>
        <h3 className="text-2xl font-semibold mt-2">
          Global grounding and investigation
        </h3>
        <p className="text-zinc-400 mt-3 leading-relaxed">
          Aviation regulators worldwide ground the 737 MAX fleet while
          investigators uncover failures in software safety, certification,
          pilot training, and organizational culture.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-emerald-400"></div>
        <p className="text-emerald-400 text-sm">2020+</p>
        <h3 className="text-2xl font-semibold mt-2">
          MCAS redesigned
        </h3>
        <p className="text-zinc-400 mt-3 leading-relaxed">
          Boeing updates MCAS to use redundant sensor inputs and improves
          pilot documentation, training, and certification transparency.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ROOT CAUSE TREE */}
<section className="border-t border-zinc-900 bg-gradient-to-b from-black to-zinc-950">
  <div className="max-w-7xl mx-auto px-6 py-24">

    {/* Section Header */}
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
        <span className="text-emerald-400 uppercase tracking-widest text-sm">
          Root Cause Analysis
        </span>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl">
        Systemic Root Cause Tree
      </h2>

      <p className="text-zinc-400 text-xl leading-relaxed mt-8 max-w-4xl">
        The Boeing 737 MAX disaster was not caused by a single software bug.
        It emerged from the interaction of engineering shortcuts,
        hidden automation, organizational pressure,
        certification weaknesses, and human-machine design failures.
      </p>
    </div>

    {/* Root Cause Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Sensor Dependency */}
      <div className="border border-emerald-500/20 bg-zinc-950 rounded-3xl p-8 hover:border-emerald-400 transition">
        <div className="text-emerald-400 text-sm uppercase tracking-widest">
          Root Cause 01
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Sensor Dependency
        </h3>

        <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">

          <div className="border-l border-emerald-500 pl-4">
            Single Angle-of-Attack sensor used as critical input.
          </div>

          <div className="border-l border-emerald-500 pl-4">
            No sufficient redundancy for safety-critical activation.
          </div>

          <div className="border-l border-emerald-500 pl-4">
            Faulty sensor triggered repeated nose-down commands.
          </div>

        </div>
      </div>

      {/* Hidden Automation */}
      <div className="border border-yellow-500/20 bg-zinc-950 rounded-3xl p-8 hover:border-yellow-400 transition">
        <div className="text-yellow-400 text-sm uppercase tracking-widest">
          Root Cause 02
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Hidden Automation
        </h3>

        <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">

          <div className="border-l border-yellow-500 pl-4">
            MCAS behavior was not fully disclosed to pilots.
          </div>

          <div className="border-l border-yellow-500 pl-4">
            Pilots were unaware automated trim could repeatedly reactivate.
          </div>

          <div className="border-l border-yellow-500 pl-4">
            Human-machine interaction design was insufficient.
          </div>

        </div>
      </div>

      {/* Certification Failure */}
      <div className="border border-red-500/20 bg-zinc-950 rounded-3xl p-8 hover:border-red-400 transition">
        <div className="text-red-400 text-sm uppercase tracking-widest">
          Root Cause 03
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Certification Failure
        </h3>

        <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">

          <div className="border-l border-red-500 pl-4">
            Safety assessment underestimated MCAS authority.
          </div>

          <div className="border-l border-red-500 pl-4">
            FAA delegated significant certification work to Boeing.
          </div>

          <div className="border-l border-red-500 pl-4">
            Regulatory oversight failed to detect systemic risk.
          </div>

        </div>
      </div>

      {/* Human Factors */}
      <div className="border border-blue-500/20 bg-zinc-950 rounded-3xl p-8 hover:border-blue-400 transition">
        <div className="text-blue-400 text-sm uppercase tracking-widest">
          Root Cause 04
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Human Factors
        </h3>

        <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">

          <div className="border-l border-blue-500 pl-4">
            High cockpit workload during emergency conditions.
          </div>

          <div className="border-l border-blue-500 pl-4">
            Pilots received inadequate MCAS training.
          </div>

          <div className="border-l border-blue-500 pl-4">
            Alarm flooding increased confusion and delayed recovery.
          </div>

        </div>
      </div>

      {/* Organizational Pressure */}
      <div className="border border-purple-500/20 bg-zinc-950 rounded-3xl p-8 hover:border-purple-400 transition">
        <div className="text-purple-400 text-sm uppercase tracking-widest">
          Root Cause 05
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Organizational Pressure
        </h3>

        <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">

          <div className="border-l border-purple-500 pl-4">
            Boeing faced intense competition from Airbus A320neo.
          </div>

          <div className="border-l border-purple-500 pl-4">
            Rapid delivery pressure influenced engineering decisions.
          </div>

          <div className="border-l border-purple-500 pl-4">
            Safety transparency became secondary to market urgency.
          </div>

        </div>
      </div>

      {/* Systemic Failure */}
      <div className="border border-orange-500/20 bg-zinc-950 rounded-3xl p-8 hover:border-orange-400 transition">
        <div className="text-orange-400 text-sm uppercase tracking-widest">
          Final Outcome
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Systemic Safety Collapse
        </h3>

        <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">

          <div className="border-l border-orange-500 pl-4">
            346 lives lost across two crashes.
          </div>

          <div className="border-l border-orange-500 pl-4">
            Global grounding of the 737 MAX fleet.
          </div>

          <div className="border-l border-orange-500 pl-4">
            Worldwide reevaluation of automation safety and certification.
          </div>

        </div>
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
      {/* VIOLATED SAFETY PRINCIPLES */}
<section className="border-t border-zinc-900 bg-black">
  <div className="max-w-7xl mx-auto px-6 py-24">

    {/* Header */}
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>

        <span className="text-emerald-400 uppercase tracking-widest text-sm">
          Violated Safety Principles
        </span>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl">
        Critical Safety Principles Violated
      </h2>

      <p className="text-zinc-400 text-xl leading-relaxed mt-8 max-w-4xl">
        The Boeing 737 MAX MCAS crisis revealed multiple violations
        of modern functional safety, system engineering,
        human factors, and certification principles.
      </p>
    </div>

    {/* Principles Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Principle 01 */}
      <div className="rounded-3xl border border-emerald-500/20 bg-zinc-950 p-8 hover:border-emerald-400 transition">

        <div className="text-emerald-400 text-sm uppercase tracking-widest">
          Principle 01
        </div>

        <h3 className="text-3xl font-bold mt-4">
          No Single Point of Failure
        </h3>

        <p className="text-zinc-400 leading-relaxed mt-6">
          MCAS relied on a single Angle-of-Attack sensor to trigger
          automatic nose-down commands without sufficient redundancy.
        </p>

        <div className="mt-8 border-l border-emerald-500 pl-4">
          <p className="text-white font-semibold">
            Safety Impact
          </p>

          <p className="text-zinc-500 mt-2">
            A single faulty sensor created catastrophic system behavior.
          </p>
        </div>
      </div>

      {/* Principle 02 */}
      <div className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 hover:border-yellow-400 transition">

        <div className="text-yellow-400 text-sm uppercase tracking-widest">
          Principle 02
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Humans Must Understand Automation
        </h3>

        <p className="text-zinc-400 leading-relaxed mt-6">
          Pilots were not fully informed about MCAS behavior,
          activation logic, or repeated automatic trim actions.
        </p>

        <div className="mt-8 border-l border-yellow-500 pl-4">
          <p className="text-white font-semibold">
            Safety Impact
          </p>

          <p className="text-zinc-500 mt-2">
            Human operators lost situational awareness during emergencies.
          </p>
        </div>
      </div>

      {/* Principle 03 */}
      <div className="rounded-3xl border border-red-500/20 bg-zinc-950 p-8 hover:border-red-400 transition">

        <div className="text-red-400 text-sm uppercase tracking-widest">
          Principle 03
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Safety-Critical Logic Must Be Transparent
        </h3>

        <p className="text-zinc-400 leading-relaxed mt-6">
          MCAS operated as hidden automation inside a safety-critical
          flight control system without adequate visibility.
        </p>

        <div className="mt-8 border-l border-red-500 pl-4">
          <p className="text-white font-semibold">
            Safety Impact
          </p>

          <p className="text-zinc-500 mt-2">
            Pilots could not correctly diagnose automated behavior.
          </p>
        </div>
      </div>

      {/* Principle 04 */}
      <div className="rounded-3xl border border-blue-500/20 bg-zinc-950 p-8 hover:border-blue-400 transition">

        <div className="text-blue-400 text-sm uppercase tracking-widest">
          Principle 04
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Certification Must Be Independent
        </h3>

        <p className="text-zinc-400 leading-relaxed mt-6">
          Excessive delegation of certification authority weakened
          independent regulatory oversight during safety assessment.
        </p>

        <div className="mt-8 border-l border-blue-500 pl-4">
          <p className="text-white font-semibold">
            Safety Impact
          </p>

          <p className="text-zinc-500 mt-2">
            System-level risks were underestimated and insufficiently challenged.
          </p>
        </div>
      </div>

      {/* Principle 05 */}
      <div className="rounded-3xl border border-purple-500/20 bg-zinc-950 p-8 hover:border-purple-400 transition">

        <div className="text-purple-400 text-sm uppercase tracking-widest">
          Principle 05
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Safety Must Override Market Pressure
        </h3>

        <p className="text-zinc-400 leading-relaxed mt-6">
          Competitive pressure against Airbus accelerated development,
          minimized pilot retraining requirements, and compressed timelines.
        </p>

        <div className="mt-8 border-l border-purple-500 pl-4">
          <p className="text-white font-semibold">
            Safety Impact
          </p>

          <p className="text-zinc-500 mt-2">
            Commercial priorities weakened safety transparency and rigor.
          </p>
        </div>
      </div>

      {/* Principle 06 */}
      <div className="rounded-3xl border border-orange-500/20 bg-zinc-950 p-8 hover:border-orange-400 transition">

        <div className="text-orange-400 text-sm uppercase tracking-widest">
          Principle 06
        </div>

        <h3 className="text-3xl font-bold mt-4">
          Safety Is a System Property
        </h3>

        <p className="text-zinc-400 leading-relaxed mt-6">
          The disaster emerged not from a single bug,
          but from interacting organizational, technical,
          certification, and human-machine failures.
        </p>

        <div className="mt-8 border-l border-orange-500 pl-4">
          <p className="text-white font-semibold">
            Safety Impact
          </p>

          <p className="text-zinc-500 mt-2">
            Systemic interactions created catastrophic emergent behavior.
          </p>
        </div>
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
            {/* LESSONS FOR AUTONOMOUS DRIVING */}
      <section className="border-t border-zinc-900 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center gap-3 text-emerald-400 mb-6">
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <span className="uppercase tracking-[0.2em] text-sm">
              Lessons for Autonomous Driving
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
            What Autonomous Vehicles Must Learn
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mt-10 max-w-5xl">
            Boeing 737 MAX was not just an aviation failure.
            It was an early warning for the entire AI-driven automation era.
            Autonomous driving systems today face many of the same risks:
            hidden automation behavior, sensor overconfidence,
            insufficient human-machine interaction,
            and organizational pressure overriding safety.
          </p>

          {/* LESSON GRID */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">

            {/* LESSON 1 */}
            <div className="border border-emerald-500/20 bg-zinc-950 rounded-3xl p-10">
              <div className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">
                Lesson 01
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Never Trust a Single Sensor
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                MCAS relied on a single Angle-of-Attack sensor.
                One faulty signal triggered repeated nose-down commands.
                Autonomous vehicles must always use sensor redundancy,
                cross-validation, and fault diagnosis.
              </p>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <div className="text-red-400 font-semibold mb-2">
                  Autonomous Driving Risk
                </div>

                <p className="text-zinc-500">
                  Camera-only perception failure in rain, fog,
                  glare, snow, or night conditions.
                </p>
              </div>
            </div>

            {/* LESSON 2 */}
            <div className="border border-yellow-500/20 bg-zinc-950 rounded-3xl p-10">
              <div className="text-yellow-400 text-sm tracking-[0.2em] uppercase mb-4">
                Lesson 02
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Hidden Automation Kills Trust
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Pilots were not clearly informed about MCAS behavior.
                Unexpected automation intervention created confusion
                during critical flight moments.
              </p>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <div className="text-red-400 font-semibold mb-2">
                  Autonomous Driving Risk
                </div>

                <p className="text-zinc-500">
                  Drivers misunderstanding system boundaries,
                  overtrusting ADAS, or failing to retake control in time.
                </p>
              </div>
            </div>

            {/* LESSON 3 */}
            <div className="border border-cyan-500/20 bg-zinc-950 rounded-3xl p-10">
              <div className="text-cyan-400 text-sm tracking-[0.2em] uppercase mb-4">
                Lesson 03
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Human Factors Are Safety Functions
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Safety is not only about software correctness.
                Human cognition, workload, alert design,
                training quality, and interface clarity
                directly affect survivability.
              </p>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <div className="text-red-400 font-semibold mb-2">
                  Autonomous Driving Risk
                </div>

                <p className="text-zinc-500">
                  Poor driver monitoring systems,
                  confusing HMI alerts,
                  and takeover requests during high cognitive load.
                </p>
              </div>
            </div>

            {/* LESSON 4 */}
            <div className="border border-red-500/20 bg-zinc-950 rounded-3xl p-10">
              <div className="text-red-400 text-sm tracking-[0.2em] uppercase mb-4">
                Lesson 04
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Certification Must Resist Business Pressure
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Schedule pressure and market competition weakened
                independent safety review.
                Safety organizations must remain technically independent
                from commercial urgency.
              </p>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <div className="text-red-400 font-semibold mb-2">
                  Autonomous Driving Risk
                </div>

                <p className="text-zinc-500">
                  Releasing immature autonomous features
                  before edge-case validation is complete.
                </p>
              </div>
            </div>

          </div>

          {/* FINAL MESSAGE */}
          <div className="mt-24 border border-emerald-500/20 rounded-3xl p-12 bg-gradient-to-r from-emerald-500/10 to-transparent">
            <h3 className="text-4xl font-bold leading-tight max-w-5xl">
              Aviation paid in blood for hidden automation risks.
              Autonomous driving now carries the responsibility
              to learn before history repeats itself.
            </h3>

            <p className="text-zinc-400 text-xl leading-relaxed mt-8 max-w-4xl">
              “Let the blood shed in one product
              not be shed again in another.”
            </p>
          </div>

        </div>
      </section>
            {/* SAFETY PHILOSOPHY */}
      <section className="border-t border-zinc-900 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-32">

          {/* SECTION LABEL */}
          <div className="flex items-center gap-3 text-emerald-400 mb-8">
            <div className="w-4 h-4 rounded-full bg-emerald-400" />
            <span className="tracking-widest uppercase text-sm">
              Safety Philosophy
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
            Why Humanity Repeats
            <br />
            Safety Failures
          </h2>

          {/* INTRO */}
          <p className="text-zinc-400 text-xl leading-relaxed mt-10 max-w-5xl">
            Every catastrophic accident is a mirror of human civilization.
            Technology fails only after philosophy fails.
          </p>

          <p className="text-zinc-500 text-2xl leading-relaxed mt-12 max-w-5xl font-semibold">
            每一次灾难性事故，
            都是人类文明的一面镜子。
            <br />
            技术失效之前，
            往往是安全哲学先失效。
          </p>

          {/* PHILOSOPHY GRID */}
          <div className="grid md:grid-cols-2 gap-8 mt-24">

            {/* CARD 1 */}
            <div className="border border-emerald-500/20 rounded-3xl p-10 bg-zinc-950">
              <div className="text-emerald-400 text-sm tracking-widest uppercase">
                Philosophy 01
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Safety Is Not a Feature
              </h3>

              <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
                Safety cannot be added later.
                It must shape the architecture from the beginning.
              </p>

              <p className="text-zinc-500 mt-8 leading-relaxed text-lg">
                安全不是附加功能，
                <br />
                而是系统诞生时的基础逻辑。
              </p>
            </div>

            {/* CARD 2 */}
            <div className="border border-cyan-500/20 rounded-3xl p-10 bg-zinc-950">
              <div className="text-cyan-400 text-sm tracking-widest uppercase">
                Philosophy 02
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Automation Must Remain Understandable
              </h3>

              <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
                Humans cannot safely supervise systems
                they do not understand.
              </p>

              <p className="text-zinc-500 mt-8 leading-relaxed text-lg">
                人类无法安全监管
                <br />
                自己无法理解的自动化系统。
              </p>
            </div>

            {/* CARD 3 */}
            <div className="border border-yellow-500/20 rounded-3xl p-10 bg-zinc-950">
              <div className="text-yellow-400 text-sm tracking-widest uppercase">
                Philosophy 03
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Organizational Pressure Destroys Safety
              </h3>

              <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
                When schedule and competition dominate engineering,
                safety becomes the first silent victim.
              </p>

              <p className="text-zinc-500 mt-8 leading-relaxed text-lg">
                当进度与竞争压倒工程，
                <br />
                安全往往最先沉默地死去。
              </p>
            </div>

            {/* CARD 4 */}
            <div className="border border-red-500/20 rounded-3xl p-10 bg-zinc-950">
              <div className="text-red-400 text-sm tracking-widest uppercase">
                Philosophy 04
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Single Points of Failure Become Catastrophes
              </h3>

              <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
                Complex systems must assume sensors,
                humans, and software will eventually fail.
              </p>

              <p className="text-zinc-500 mt-8 leading-relaxed text-lg">
                复杂系统必须假设：
                <br />
                传感器、人类、软件终将失效。
              </p>
            </div>

            {/* CARD 5 */}
            <div className="border border-purple-500/20 rounded-3xl p-10 bg-zinc-950 md:col-span-2">
              <div className="text-purple-400 text-sm tracking-widest uppercase">
                Philosophy 05
              </div>

              <h3 className="text-4xl font-bold mt-6">
                Blood Paid in One Industry
                <br />
                Must Protect Another
              </h3>

              <p className="text-zinc-400 mt-6 leading-relaxed text-xl">
                Every major accident contains lessons
                transferable across aviation, automotive,
                medical, nuclear, robotics, and AI systems.
              </p>

              <div className="mt-12 border-l-4 border-purple-500 pl-8">
                <p className="text-3xl md:text-5xl font-bold leading-relaxed text-white">
                  “让一个产品流过的血，
                  <br />
                  不再在另一个产品上重流。”
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* CROSS-INDUSTRY SAFETY TRANSFER */}

<section className="border-t border-zinc-900 bg-black">
  <div className="max-w-7xl mx-auto px-6 py-32">

    <div className="flex items-center gap-3 text-emerald-400 text-sm tracking-[0.2em] uppercase">
      <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
      Cross-Industry Safety Transfer
    </div>

    <h2 className="text-5xl md:text-7xl font-bold mt-8 leading-tight max-w-6xl">
      一个行业流过的血，
      <br />
      不应在另一个行业重流。
    </h2>

    <p className="text-zinc-400 text-xl leading-relaxed mt-10 max-w-5xl">
      Boeing 737 MAX并不仅仅属于航空业。
      它揭示了所有AI驱动自动化系统都会面临的共同风险：
      单点感知、自信的算法、隐藏的自动化、人机信任崩塌、
      组织速度压力，以及监管体系滞后。
    </p>

    <div className="grid md:grid-cols-2 gap-8 mt-20">

      {/* LEFT COLUMN */}

      <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">

        <div className="text-emerald-400 text-sm tracking-[0.2em] uppercase">
          Boeing 737 MAX
        </div>

        <div className="space-y-8 mt-10">

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-2xl font-bold">
              Single Sensor Dependency
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              MCAS relied on a single Angle-of-Attack sensor.
              One faulty input triggered repeated nose-down commands.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6">
            <h3 className="text-2xl font-bold">
              Hidden Automation
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Pilots were not clearly informed about MCAS behavior.
              Automation intervened unexpectedly during critical flight phases.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-2xl font-bold">
              Organizational Pressure
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Competitive pressure accelerated development and certification.
              Safety margins gradually eroded under market urgency.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-2xl font-bold">
              Human-Machine Confusion
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Pilots struggled to understand automation behavior
              during high-stress emergency situations.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN */}

      <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">

        <div className="text-cyan-400 text-sm tracking-[0.2em] uppercase">
          Autonomous Driving & AI Systems
        </div>

        <div className="space-y-8 mt-10">

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-2xl font-bold">
              Single Perception Overconfidence
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Autonomous systems cannot over-trust a single camera,
              lidar, radar, or neural network output.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6">
            <h3 className="text-2xl font-bold">
              Invisible AI Decisions
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Drivers must understand when AI is acting,
              why it acts, and how to safely override it.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-2xl font-bold">
              Release-Speed Safety Risk
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              AI deployment pressure can gradually normalize unsafe behavior
              before regulators and engineers fully understand the risks.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-2xl font-bold">
              Driver Takeover Failure
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Human drivers may become confused or delayed
              during sudden transitions from AI control to manual control.
            </p>
          </div>

        </div>
      </div>

    </div>

    {/* Bottom Philosophy */}

    <div className="mt-24 border border-emerald-500/20 bg-emerald-500/5 rounded-3xl p-12">

      <div className="text-emerald-400 text-sm tracking-[0.2em] uppercase">
        Safety Transfer Philosophy
      </div>

      <h3 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
        Safety knowledge must travel
        <br />
        faster than tragedy.
      </h3>

      <p className="text-zinc-400 text-xl leading-relaxed mt-8 max-w-4xl">
        The future of industrial civilization depends on whether humanity
        can transfer hard-earned safety lessons across industries
        before the next disaster repeats the same pattern.
      </p>

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