import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-10 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
              <span className="text-sm text-white/80">Cosmic Thinking Labs</span>
            </Link>
            <div className="text-xs text-white/60">
              © {new Date().getFullYear()} Cosmic Thinking Labs. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/services" className="text-white/70 hover:text-white transition">
                Services
              </Link>
              <Link href="/portfolio" className="text-white/70 hover:text-white transition">
                Portfolio
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white transition">
                About
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
