import Reveal from "./Reveal";

type Project = {
  name: string;
  tagline: string;
  tags: string[];
  outcomes: string[];
};

const projects: Project[] = [
  { name: "SaaS Analytics Dashboard", tagline: "Real-time data visualization platform", tags: ["React", "Node.js", "PostgreSQL"], outcomes: ["40K users", "99.9% uptime"] },
  { name: "E-Commerce Redesign", tagline: "Complete checkout flow optimization", tags: ["Next.js", "Performance"], outcomes: ["35% CVR increase", "2s load time"] },
  { name: "Fintech Web App", tagline: "Secure transaction platform", tags: ["React", "Microservices"], outcomes: ["$2M/mo volume", "SOC 2 certified"] },
  { name: "Mobile App MVP", tagline: "React Native cross-platform app", tags: ["React Native", "Firebase"], outcomes: ["iOS & Android", "50K downloads"] },
  { name: "API Infrastructure", tagline: "High-performance REST API", tags: ["TypeScript", "AWS", "Docker"], outcomes: ["10K RPS", "100ms p95"] },
  { name: "University LMS", tagline: "Learning management system for education", tags: ["React", "Storybook"], outcomes: ["200+ components", "3 teams"] },
];

export default function Portfolio(): JSX.Element {
  return (
    <section id="portfolio" className="relative py-4 md:py-6 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tight">
            Portfolio
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Showcasing our impact through transformative digital solutions.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delayMs={100 * (idx % 3)}>
              <article className="group bg-[#0a0a14]/90 border border-white/10 hover:border-white/30 transition-colors p-4 sm:p-6 lg:p-8 h-full min-h-[20rem] sm:min-h-[24rem] flex flex-col">
                <div className="mb-4 sm:mb-6 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{p.name}</h3>
                  <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{p.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 h-[3rem] content-end">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 sm:px-3 py-1 bg-white/5 text-gray-300 text-xs sm:text-sm rounded-full border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {p.outcomes.map((o) => (
                    <div
                      key={o}
                      className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 flex flex-col justify-center h-24"
                    >
                      <div className="text-sm sm:text-lg font-bold text-white">{o}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-white/10 mt-auto">
                  <a
                    href="#contact"
                    className="text-xs sm:text-sm font-medium text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1 sm:gap-2"
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
