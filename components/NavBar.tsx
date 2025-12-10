"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavBar(): JSX.Element {
  const [open, setOpen] = useState(false);

  const navItems: Array<{ label: string; href: string }> = [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block h-2 w-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
              <span className="text-sm tracking-wider text-white/80">Cosmic</span>
              <span className="font-medium">Thinking Labs</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition border border-white/15"
              >
                Let's Talk
              </Link>
            </div>

            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-2 py-2 text-white/90 hover:bg-white/5"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-1 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition border border-white/15"
                  onClick={() => setOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
