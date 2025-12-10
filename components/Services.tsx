import { Code2, Globe, Rocket, Shield } from "lucide-react";
import Reveal from "./Reveal";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  highlights?: string[];
};

const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Modern architectures, robust APIs, and scalable platforms engineered for reliability and speed.",
    icon: Code2,
  },
  {
    title: "Web Solutions",
    description:
      "Beautiful, performant websites and web apps with clean UX that convert and delight.",
    icon: Globe,
  },
  {
    title: "Rapid Prototyping",
    description:
      "Idea to demo fast. Validate product-market fit with crisp, production-ready prototypes.",
    icon: Rocket,
  },
  {
    title: "Security & Quality",
    description:
      "Best practices, testing, and security baked in. Confidence through craftsmanship.",
    icon: Shield,
  },
];

export default function Services(): JSX.Element {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Premium engineering and design to help you build trust and ship
            exceptional products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <Reveal key={s.title} delayMs={80 * (idx % 4)}>
              <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-400/40 hover:bg-white/8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-white/10">
                    <s.icon size={18} className="text-white/90" />
                  </div>
                  <h3 className="font-medium">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm text-white/70">{s.description}</p>

                <ul className="mt-4 space-y-2">
                  {(s.highlights ?? []).map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-white/50">Trusted delivery • Modern stack</div>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-white/80 hover:text-white transition"
                    aria-label={`Contact about ${s.title}`}
                  >
                    Get a quote →
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
