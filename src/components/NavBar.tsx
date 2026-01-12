import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavBarProps {
  isHome?: boolean;
}

export default function NavBar({ isHome = false }: NavBarProps): JSX.Element {
  const [open, setOpen] = useState(false);

  const navItems: Array<{ label: string; href: string }> = [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 pt-6"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between py-6">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/cosmic-logo.png"
              alt="Cosmic Thinking Lab"
              className="h-10 w-auto"
            />
            <img
              src="/cosmic-text-logo.png"
              alt="Cosmic Thinking Lab"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-gray-200 hover:text-white transition-colors font-medium border border-white/20 rounded-full px-6 py-2 hover:bg-white/10 uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-3 rounded-full font-bold transition-all hover:bg-gray-200 text-sm uppercase tracking-wide ml-4"
            >
              Connect
            </Link>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-4 py-4 bg-[#0a0a14]">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-gray-200 hover:text-white transition-colors font-medium border border-white/20 rounded-full px-6 py-2 hover:bg-white/10 uppercase tracking-wide text-center"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-200 text-sm text-center uppercase tracking-wide"
                onClick={() => setOpen(false)}
              >
                Connect
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
