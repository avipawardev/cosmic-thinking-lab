import Reveal from "./Reveal";

type Project = {
  name: string;
  tagline: string;
  tags: string[];
  outcomes: string[];
};

const projects: Project[] = [
  { name: "Nebula Commerce", tagline: "Scalable storefront and checkout", tags: ["Next.js", "Performance"], outcomes: ["+40% conversion", "2s load time"] },
  { name: "Stellar Analytics", tagline: "Realtime data dashboards", tags: ["React", "Charts"], outcomes: ["10K users", "99.9% uptime"] },
  { name: "Orbit CMS", tagline: "Content at velocity", tags: ["CMS", "UX"], outcomes: ["50% faster", "SEO boost"] },
  { name: "Quantum Docs", tagline: "Docs that delight", tags: ["MDX", "Design"], outcomes: ["+200% reads", "Dev love"] },
  { name: "Nova Landing", tagline: "High-converting marketing site", tags: ["SEO", "Animations"], outcomes: ["Top 3 rank", "60% CTR"] },
  { name: "Astra Portal", tagline: "Secure client portal", tags: ["Auth", "Security"], outcomes: ["Zero breaches", "SaaS ready"] },
];

export default function Portfolio(): JSX.Element {
  return (
    <section id="portfolio" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            A selection of projects that showcase our craftsmanship and attention to detail.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delayMs={60 * (idx % 3)}>
              <article
                className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d0d16] to-[#0b0b12]"
              >
                {/* Visual placeholder with cosmic gradient */}
                <div className="relative h-40 w-full bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.18)_0,transparent_45%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.18)_0,transparent_45%)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{p.name}</h3>
                      <p className="mt-1 text-sm text-white/70">{p.tagline}</p>
                    </div>
                    <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-white/10" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {p.outcomes.map((o) => (
                      <div
                        key={o}
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70"
                      >
                        {o}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="text-sm font-medium text-white/80 hover:text-white transition"
                      aria-label={`Discuss a project like ${p.name}`}
                    >
                      Discuss project →
                    </a>
                    <span className="text-xs text-white/50">Case study on request</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
