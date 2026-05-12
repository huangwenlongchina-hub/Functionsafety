import {
  AlertTriangle,
  ShieldAlert,
  BrainCircuit,
  Plane,
  Cpu,
  Users,
} from "lucide-react";

export default function Boeing737MaxPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 rounded-full px-5 py-2 text-emerald-400 text-sm">
            <AlertTriangle size={16} />
            全球航空安全重点调查
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl mt-10">
            Boeing 737 MAX MCAS
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mt-8 max-w-5xl">
            自动化时代的系统安全失效
          </h2>

          <p className="text-zinc-400 text-xl mt-12 leading-relaxed max-w-5xl">
            传感器依赖、隐藏的自动化行为、认证捷径、组织压力和人为因素如何结合成现代航空史上最严重的灾难之一。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-emerald-400 text-5xl font-bold">346</div>
              <div className="text-zinc-500 mt-4 text-xl">遇难人数</div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-emerald-400 text-5xl font-bold">2</div>
              <div className="text-zinc-500 mt-4 text-xl">致命空难</div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-emerald-400 text-5xl font-bold">1</div>
              <div className="text-zinc-500 mt-4 text-xl">单一AOA传感器</div>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
              <div className="text-emerald-400 text-5xl font-bold">
                Global
              </div>
              <div className="text-zinc-500 mt-4 text-xl">全球航空影响</div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-zinc-900 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-8">
            事故时间线
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-20">
            波音737 MAX MCAS危机时间线
          </h2>

          <div className="space-y-16 border-l border-zinc-800 pl-10">
            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-5 h-5 bg-emerald-400 rounded-full" />

              <div className="text-emerald-400 text-xl font-bold">2011</div>

              <h3 className="text-4xl font-bold mt-4">
                波音启动737 MAX项目
              </h3>

              <p className="text-zinc-400 text-xl mt-6 leading-relaxed">
                为了与空客A320neo竞争，波音决定快速修改传统737平台，而不是设计新飞机。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-5 h-5 bg-emerald-400 rounded-full" />

              <div className="text-emerald-400 text-xl font-bold">2016</div>

              <h3 className="text-4xl font-bold mt-4">
                MCAS被引入飞控系统
              </h3>

              <p className="text-zinc-400 text-xl mt-6 leading-relaxed">
                为解决机动特性问题，MCAS自动配平系统被加入，并依赖单一AOA传感器。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-5 h-5 bg-red-500 rounded-full" />

              <div className="text-red-400 text-xl font-bold">
                2018年10月29日
              </div>

              <h3 className="text-4xl font-bold mt-4">
                Lion Air 610 空难
              </h3>

              <p className="text-zinc-400 text-xl mt-6 leading-relaxed">
                MCAS错误触发，飞机反复压低机头，最终坠海，189人遇难。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[49px] top-1 w-5 h-5 bg-red-500 rounded-full" />

              <div className="text-red-400 text-xl font-bold">
                2019年3月10日
              </div>

              <h3 className="text-4xl font-bold mt-4">
                Ethiopian Airlines 302 空难
              </h3>

              <p className="text-zinc-400 text-xl mt-6 leading-relaxed">
                与Lion Air极其相似的问题再次发生，157人遇难，全球开始停飞737 MAX。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROOT CAUSE */}
      <section className="border-b border-zinc-900 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-8">
            Root Cause Analysis
          </div>

          <h2 className="text-5xl md:text-7xl font-bold max-w-6xl">
            Systemic Root Cause Tree
          </h2>

          <p className="text-zinc-400 text-2xl mt-12 leading-relaxed max-w-5xl">
            波音737 MAX灾难并非单一软件Bug，而是工程、组织、认证、人机交互和商业压力共同作用的系统性安全失败。
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="border border-emerald-500/20 rounded-3xl p-10 bg-zinc-950">
              <Cpu className="text-emerald-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold">
                单传感器依赖
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
                MCAS依赖单个AOA传感器，没有冗余验证机制。
              </p>
            </div>

            <div className="border border-yellow-500/20 rounded-3xl p-10 bg-zinc-950">
              <BrainCircuit className="text-yellow-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold">
                隐藏自动化
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
                飞行员并不知道MCAS存在，缺乏透明性和可解释性。
              </p>
            </div>

            <div className="border border-red-500/20 rounded-3xl p-10 bg-zinc-950">
              <Users className="text-red-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold">
                组织与认证压力
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
                市场竞争压力导致安全让位于商业速度。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY PRINCIPLES */}
      <section className="border-b border-zinc-900 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-8">
            Violated Safety Principles
          </div>

          <h2 className="text-5xl md:text-7xl font-bold">
            被违反的安全原则
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="border border-zinc-800 rounded-3xl p-10">
              <ShieldAlert className="text-red-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold">
                Fail-safe Principle
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
                单一错误不应导致灾难性后果。
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10">
              <Plane className="text-yellow-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold">
                Human-Centered Design
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
                自动化系统必须可理解、可预测、可控制。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTONOMOUS LESSONS */}
      <section className="border-b border-zinc-900 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-8">
            Autonomous Driving Lessons
          </div>

          <h2 className="text-5xl md:text-7xl font-bold max-w-5xl">
            自动驾驶必须学习的教训
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="border border-emerald-500/20 rounded-3xl p-10">
              <h3 className="text-4xl font-bold">
                永远不要只相信一个传感器
              </h3>

              <p className="text-zinc-400 text-xl mt-8 leading-relaxed">
                自动驾驶必须具备传感器冗余、交叉验证和故障诊断。
              </p>
            </div>

            <div className="border border-yellow-500/20 rounded-3xl p-10">
              <h3 className="text-4xl font-bold">
                隐藏自动化会摧毁信任
              </h3>

              <p className="text-zinc-400 text-xl mt-8 leading-relaxed">
                AI系统必须透明、可解释、可接管。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY PHILOSOPHY */}
      <section className="border-b border-zinc-900 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-8">
            安全理念
          </div>

          <h2 className="text-6xl md:text-8xl font-bold leading-tight">
            人类为何重蹈
            <br />
            安全失败
          </h2>

          <p className="text-zinc-400 text-2xl mt-16 leading-relaxed max-w-5xl">
            每一次灾难性事故都是人类文明的映照。技术失效之前，往往是安全哲学先失败。
          </p>
        </div>
      </section>

      {/* CROSS INDUSTRY */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-emerald-500/20 rounded-[40px] p-16 bg-gradient-to-br from-emerald-950/20 to-black">
            <div className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-8">
              Safety Transfer Philosophy
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
              Safety knowledge must travel faster than tragedy.
            </h2>

            <p className="text-zinc-400 text-2xl mt-12 leading-relaxed max-w-4xl">
              人类必须在下一场灾难发生前，把安全经验跨行业传播。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}