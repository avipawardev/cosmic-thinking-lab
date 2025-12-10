import Reveal from "./Reveal";

export default function About(): JSX.Element {
  const stats: Array<{ label: string; value: string }> = [
    { label: "Projects delivered", value: "120+" },
    { label: "Avg. engagement", value: "8–12 weeks" },
    { label: "Client satisfaction", value: "98%" },
  ];

  const values: string[] = [
    "Clarity over complexity",
    "Design with intent",
    "Quality as a habit",
    "Delivery earns trust",
  ];

  const process: Array<{ title: string; detail: string }> = [
    { title: "Discover", detail: "Define goals, constraints, and success metrics." },
    { title: "Design", detail: "Wireframes, visual design, and interaction patterns." },
    { title: "Build", detail: "Iterative development with QA and performance budget." },
    { title: "Deliver", detail: "Documentation, handoff, and rollout support." },
  ];

  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <Reveal className="md:col-span-5" delayMs={0}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About
              </h2>
              <p className="mt-4 text-white/70">
                Cosmic Thinking Labs is a modern software and web studio focused on quality,
                velocity, and trust. We combine craftsmanship with pragmatic engineering to
                deliver outcomes that matter.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((s, idx) => (
                  <Reveal key={s.label} delayMs={80 * idx}>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="text-sm font-semibold">{s.value}</div>
                      <div className="mt-0.5 text-[11px] text-white/60">{s.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-6 space-y-2 text-sm">
                {values.map((v, idx) => (
                  <Reveal key={v} delayMs={80 * idx}>
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                      <span>{v}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delayMs={120}>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d0d16] to-[#0b0b12] p-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Reveal delayMs={0}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs text-white/60">Our Philosophy</div>
                    <div className="mt-2 text-sm">
                      Think clearly, design thoughtfully, and build with care. Trust is earned by
                      delivering consistently.
                    </div>
                  </div>
                </Reveal>
                <Reveal delayMs={80}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs text-white/60">Outcome</div>
                    <div className="mt-2 text-sm">
                      Products that are both beautiful and effective—built to grow and scale.
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="mt-6">
                <div className="text-xs text-white/60">Process</div>
                <ol className="mt-3 grid gap-3 sm:grid-cols-2">
                  {process.map((p, idx) => (
                    <Reveal key={p.title} delayMs={80 * idx}>
                      <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/40 to-blue-600/40 border border-white/10 text-[11px]">
                            {idx + 1}
                          </span>
                          <div className="text-sm font-medium">{p.title}</div>
                        </div>
                        <div className="mt-2 text-xs text-white/70">{p.detail}</div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-4 text-xs text-white/50">
                Based in Thinking Labs • Working globally
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
