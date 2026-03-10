"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",        label: "Home"    },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-[5vw] h-[72px] flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "bg-black/95 backdrop-blur-xl border-b border-[#1e1e1e]" : ""}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-playfair italic font-black text-2xl tracking-widest text-yellow no-underline leading-none"
        >
          URO{" "}
          <span className="not-italic font-bold text-xl tracking-[4px] text-white">
            FITNESS
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-12 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-condensed text-[0.85rem] font-semibold tracking-[3px] uppercase no-underline
                  transition-colors duration-300
                  ${pathname === l.href ? "text-yellow" : "text-[#666] hover:text-yellow"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden md:block clip-btn-sm bg-yellow text-black font-condensed font-bold
            text-[0.8rem] tracking-[3px] uppercase px-7 py-2.5 no-underline
            transition-all duration-300 hover:bg-white"
        >
          Join Now
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]"  : ""}`} />
          <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ${open ? "opacity-0"                     : ""}`} />
          <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-[999] bg-black/98 backdrop-blur-xl
          flex flex-col items-center justify-center gap-8
          transition-all duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-bebas text-5xl tracking-[4px] text-white/50 hover:text-yellow
              transition-colors duration-300 no-underline"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="clip-btn mt-4 bg-yellow text-black font-condensed font-bold
            text-[0.9rem] tracking-[3px] uppercase px-12 py-4 no-underline"
        >
          Join Now
        </Link>
      </div>
    </>
  );
}
