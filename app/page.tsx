// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,#000000_60%)]" />

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        {/* Small Tag */}
        <div className="mb-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-sm tracking-wide">
          Global Functional Safety Knowledge Network
        </div>

        {/* Main Mission */}
        <h1 className="max-w-6xl text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          让一个产品上流过的血，
          <br />
          不在另一个产品上重流。
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-lg md:text-2xl text-gray-400 leading-relaxed">
          从事故到标准，
          从失败到更安全的未来。
          <br />
          建立全球功能安全事故、工程教训与 AI 时代安全知识网络。
        </p>

        {/* Quote */}
        <div className="mt-10 max-w-4xl text-gray-500 text-base md:text-lg italic leading-relaxed">
          “Every catastrophic failure contains a hidden law of safety.”
          <br />
          每一次灾难性失效，都隐藏着一条安全规律。
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/incidents"
            className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition text-black font-semibold text-lg shadow-lg shadow-emerald-500/20"
          >
            Explore Global Incidents
          </Link>

          <Link
            href="/standards"
            className="px-8 py-4 rounded-xl border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 transition text-lg"
          >
            Functional Safety Standards
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
              Safety is not the enemy of innovation.
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              安全并不是阻止未来。
              <br />
              安全是：
              <br />
              让未来能够持续到来。
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              Complexity must remain under human control.
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              文明最大的风险，
              <br />
              不是 AI 有意识。
              <br />
              而是：
              <br />
              复杂性脱离人类约束。
            </p>
          </div>
        </div>
      </section>

      {/* Core Structure */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              The Safety Evolution Chain
            </h2>

            <p className="mt-4 text-gray-400 text-lg">
              事故如何推动人类工业文明不断演化
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: "事故",
                desc: "重大事故暴露系统性风险",
              },
              {
                title: "标准",
                desc: "工程原则被写入国际标准",
              },
              {
                title: "产品",
                desc: "安全设计进入工业产品",
              },
              {
                title: "认证",
                desc: "形成全球安全验证体系",
              },
              {
                title: "新复杂系统",
                desc: "新的复杂性再次带来新风险",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition"
              >
                <div className="text-emerald-400 text-sm mb-3">
                  STEP {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Incident */}
      <section className="relative z-10 px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-emerald-400 text-sm tracking-widest mb-4">
              FEATURED DEEP ANALYSIS
            </div>

            <h2 className="text-5xl font-bold mb-6">
              Boeing 737 MAX MCAS
            </h2>

            <p className="max-w-3xl text-gray-400 text-lg leading-relaxed">
              一个隐藏的自动控制系统，
              一个单点传感器，
              一场人类与自动化争夺控制权的灾难。
              <br />
              这不仅是航空事故，
              更是 AI 时代复杂系统安全的重要预警。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Single Point Failure",
              "Hidden Automation",
              "Human Override Failure",
              "Certification Pressure",
              "AI Safety Lessons",
              "Cross-Industry Implications",
            ].map((tag) => (
              <div
                key={tag}
                className="border border-white/10 bg-white/5 rounded-xl p-5 text-center hover:border-emerald-500/40 transition"
              >
                {tag}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/incidents/boeing-737-max"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-lg"
            >
              Read Deep Analysis →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold text-emerald-400">
              FunctionSafety.com
            </div>

            <div className="text-gray-500 mt-2">
              Human Industrial Safety Memory
              <br />
              & AI Civilization Future
            </div>
          </div>

          <div className="text-gray-600 text-sm text-center md:text-right">
            Building the global safety knowledge network
            <br />
            for the AI era.
          </div>
        </div>
      </footer>
    </main>
  );
}