import {
  AlertTriangle,
  Shield,
  Car,
  BrainCircuit,
  Users,
  FileWarning,
  Globe,
} from "lucide-react";

export default function ToyotaUnintendedAccelerationPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm mb-10">
            <AlertTriangle size={16} />
            全球汽车安全重点调查
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
            Toyota Unintended Acceleration
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mt-6 max-w-5xl">
            当软件复杂性失控时
          </h2>

          <p className="text-zinc-400 text-xl mt-10 leading-relaxed max-w-4xl">
            一场涉及软件复杂性、人机交互失败、隐藏系统状态以及组织安全缺陷的全球汽车安全危机。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">89+</div>
              <div className="text-zinc-500 mt-4">
                Reported Fatalities
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">
                9M+
              </div>
              <div className="text-zinc-500 mt-4">
                Vehicles Recalled
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">
                ECU
              </div>
              <div className="text-zinc-500 mt-4">
                Software Complexity
              </div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-5xl font-bold text-emerald-400">
                Global
              </div>
              <div className="text-zinc-500 mt-4">
                Automotive Safety Impact
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-28">

          <div className="flex items-center gap-3 text-emerald-400 mb-8">
            <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
            事故时间线
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-24">
            丰田意外加速危机时间线
          </h2>

          <div className="space-y-20 border-l border-zinc-800 pl-10">

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-emerald-400"></div>

              <div className="text-emerald-400 text-2xl font-bold mb-4">
                2002
              </div>

              <h3 className="text-4xl font-bold mb-6">
                初期意外加速投诉出现
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                全球开始出现大量丰田车辆“突然加速”投诉，
                涉及多个车型和电子油门系统。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-emerald-400"></div>

              <div className="text-emerald-400 text-2xl font-bold mb-4">
                2007
              </div>

              <h3 className="text-4xl font-bold mb-6">
                软件安全疑虑开始浮现
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                工程调查逐渐发现电子节气门控制系统的软件架构
                存在复杂性和实时性问题。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-red-500"></div>

              <div className="text-red-500 text-2xl font-bold mb-4">
                2009
              </div>

              <h3 className="text-4xl font-bold mb-6">
                San Diego 致命事故
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                一辆 Lexus ES350 高速失控，
                导致一家四口死亡，
                全球开始聚焦丰田电子控制安全。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-yellow-400"></div>

              <div className="text-yellow-400 text-2xl font-bold mb-4">
                2010
              </div>

              <h3 className="text-4xl font-bold mb-6">
                全球大规模召回
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                丰田全球召回超过900万辆汽车，
                成为汽车史上最严重的软件安全事件之一。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-cyan-400"></div>

              <div className="text-cyan-400 text-2xl font-bold mb-4">
                2013
              </div>

              <h3 className="text-4xl font-bold mb-6">
                NASA 软件分析报告
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                NASA发现软件存在任务饥饿、
                内存破坏、栈溢出、
                全局变量复杂度失控等问题。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ROOT CAUSE */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="flex items-center gap-3 text-emerald-400 mb-8">
            <BrainCircuit size={18} />
            ROOT CAUSE ANALYSIS
          </div>

          <h2 className="text-5xl md:text-7xl font-bold max-w-6xl leading-tight">
            Systemic Root Cause Tree
          </h2>

          <p className="text-zinc-400 text-2xl leading-relaxed mt-12 max-w-5xl">
            丰田事件不是单一机械故障，
            而是软件复杂性、系统架构、
            人机交互和组织安全文化共同作用的结果。
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-24">

            <div className="border border-emerald-500/20 rounded-3xl p-10 bg-zinc-950">
              <div className="text-emerald-400 text-sm tracking-widest mb-8">
                ROOT CAUSE 01
              </div>

              <h3 className="text-3xl font-bold mb-6">
                软件复杂性失控
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                ECU软件包含大量全局变量、
                非隔离任务和复杂状态机，
                已超出可验证范围。
              </p>
            </div>

            <div className="border border-yellow-500/20 rounded-3xl p-10 bg-zinc-950">
              <div className="text-yellow-400 text-sm tracking-widest mb-8">
                ROOT CAUSE 02
              </div>

              <h3 className="text-3xl font-bold mb-6">
                缺乏独立安全层
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                节气门控制与安全机制
                未完全隔离，
                单点失效可能导致危险输出。
              </p>
            </div>

            <div className="border border-red-500/20 rounded-3xl p-10 bg-zinc-950">
              <div className="text-red-400 text-sm tracking-widest mb-8">
                ROOT CAUSE 03
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Driver Override不足
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                驾驶员在关键时刻
                无法快速理解或压制系统行为，
                自动化开始压倒人类。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LESSONS */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="flex items-center gap-3 text-emerald-400 mb-8">
            <Car size={18} />
            自动驾驶的经验教训
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
            自动驾驶系统必须学习的内容
          </h2>

          <p className="text-zinc-400 text-2xl leading-relaxed mt-12 max-w-5xl">
            如果传统ECU软件已经能复杂到难以验证，
            那么AI自动驾驶若缺少安全架构，
            风险将呈指数级上升。
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-24">

            <div className="border border-emerald-500/20 rounded-3xl p-12 bg-zinc-950">
              <div className="text-emerald-400 text-sm tracking-widest mb-8">
                LESSON 01
              </div>

              <h3 className="text-4xl font-bold mb-8">
                Complexity Is Itself a Hazard
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                当软件复杂性超过人类理解能力时，
                验证本身就会失效。
              </p>
            </div>

            <div className="border border-yellow-500/20 rounded-3xl p-12 bg-zinc-950">
              <div className="text-yellow-400 text-sm tracking-widest mb-8">
                LESSON 02
              </div>

              <h3 className="text-4xl font-bold mb-8">
                AI Must Remain Explainable
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                自动驾驶系统绝不能在关键安全时刻
                变成无法解释的黑盒。
              </p>
            </div>

            <div className="border border-cyan-500/20 rounded-3xl p-12 bg-zinc-950">
              <div className="text-cyan-400 text-sm tracking-widest mb-8">
                LESSON 03
              </div>

              <h3 className="text-4xl font-bold mb-8">
                Human Override Must Always Exist
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                人类必须永远拥有
                最终控制权。
              </p>
            </div>

            <div className="border border-red-500/20 rounded-3xl p-12 bg-zinc-950">
              <div className="text-red-400 text-sm tracking-widest mb-8">
                LESSON 04
              </div>

              <h3 className="text-4xl font-bold mb-8">
                Safety Cannot Depend on Assumptions
              </h3>

              <p className="text-zinc-400 text-xl leading-relaxed">
                所有“正常情况下不会发生”的假设，
                最终都会在现实中被打破。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY PHILOSOPHY */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-32">

          <div className="border border-emerald-500/20 rounded-[40px] bg-gradient-to-br from-emerald-950/30 to-black p-16">

            <div className="text-emerald-400 tracking-[0.3em] text-sm mb-10">
              SAFETY PHILOSOPHY
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
              Complexity itself becomes a form of risk.
            </h2>

            <p className="text-zinc-400 text-2xl leading-relaxed mt-14 max-w-5xl">
              现代工程灾难越来越不是来自零件失效，
              而是来自：
              人类已经无法完全理解的复杂系统。
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}