import Link from "next/link";
import ThreeHero from "./ThreeHero";

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(100deg,#dbe4ff_0%,#f1f5ff_40%,#dbe4ff_100%)]">
                Cosmic Thinking Labs
              </span>
              <br />
              <span className="text-white/90">Modern Software & Web Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl text-balance">
              Premium engineering, clear UX, and delivery you can trust. Explore our services and
              portfolio, or get in touch to start your project.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15 transition border border-white/15"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-xs text-white/60">Focus</div>
                <div className="mt-1 text-sm font-medium">Premium Tech</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-xs text-white/60">Approach</div>
                <div className="mt-1 text-sm font-medium">Quality & Velocity</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-xs text-white/60">Ethos</div>
                <div className="mt-1 text-sm font-medium">Trust by Delivery</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <ThreeHero className="shadow-[0_0_60px_-20px_rgba(148,163,255,0.35)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
