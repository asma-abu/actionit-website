"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none mx-auto w-full max-w-screen-2xl px-4">
      {/* Glass container */}
      <nav
        className={[
          "pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 md:px-6",
          "backdrop-blur-xl transition-all duration-300",
          // base glass
          "border-white/15 shadow-[0_2px_20px_rgba(0,0,0,0.10)]",
          "bg-white/10 dark:bg-zinc-900/30",
          // densify on scroll
          scrolled
            ? "bg-white/40 dark:bg-zinc-900/50 shadow-[0_6px_30px_rgba(0,0,0,0.15)]"
            : "",
        ].join(" ")}
        aria-label="Global"
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ehanced_logo.png"
              alt="action.it Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
              action.it
            </span>
          </Link>
        </div>

        {/* Center: Nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {[
            { href: "#product", label: "Product" },
            { href: "#solutions", label: "Solutions" },
            { href: "#resources", label: "Resources" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-900/80 transition hover:text-zinc-900 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:text-zinc-200/80 dark:hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTAs + Burger */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-zinc-900/90 transition hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:text-zinc-200 md:inline-block"
          >
            Log in
          </Link>

          <Link
            href="/login"
            className="hidden rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:border-white/10 dark:bg-zinc-800/80 dark:text-white md:inline-block"
          >
            Get started
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/40 text-zinc-800 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:bg-zinc-800/60 dark:text-zinc-100 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            {/* burger / close */}
            <svg
              className={`h-5 w-5 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-5 w-5 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden",
          "mt-2 overflow-hidden rounded-2xl border border-white/15",
          "bg-white/60 p-2 backdrop-blur-xl transition-all dark:bg-zinc-900/60",
          open ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <ul className="divide-y divide-white/10 text-sm dark:divide-white/5">
          {[
            { href: "#product", label: "Product" },
            { href: "#solutions", label: "Solutions" },
            { href: "#resources", label: "Resources" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-zinc-900/90 transition hover:bg-white/60 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:text-zinc-100 dark:hover:bg-zinc-800/70"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2 px-2 py-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg px-3 py-2 text-center font-medium text-zinc-900/90 transition hover:bg-white/70 hover:text-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800/70"
            >
              Log in
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg border border-white/20 bg-white/80 px-3 py-2 text-center font-semibold text-zinc-900 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-zinc-800/80 dark:text-white"
            >
              Get started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
