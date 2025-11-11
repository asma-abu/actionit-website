"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, memo } from "react";

const NAV_ITEMS = [
  { href: "#product", label: "Product" },
  { href: "#solutions", label: "Solutions" },
  { href: "#resources", label: "Resources" },
] as const;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      setScrolled(window.scrollY > 8);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleToggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    },
    []
  );

  return (
    <header className="sticky top-0 z-50 pointer-events-none mx-auto w-full max-w-screen-2xl px-4 safe-top">
      <nav
        className={[
          "pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 md:px-6",
          "backdrop-blur-xl transition-all duration-300",
          "border-white/15 shadow-[0_2px_20px_rgba(0,0,0,0.10)]",
          "bg-white/10 dark:bg-zinc-900/30",
          scrolled
            ? "bg-white/40 dark:bg-zinc-900/50 shadow-[0_6px_30px_rgba(0,0,0,0.15)]"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label="Global navigation"
      >
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-md"
            aria-label="Action.IT Home"
          >
            <Image
              src="/ehanced_logo.png"
              alt=""
              width={28}
              height={28}
              className="rounded-md"
              priority
            />
            <span className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
              action.it
            </span>
          </Link>
        </div>

        <ul className="hidden items-center gap-6 md:flex" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-900/80 transition hover:text-zinc-900 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-md px-2 py-1 dark:text-zinc-200/80 dark:hover:text-white"
                role="menuitem"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-zinc-900/90 transition hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:text-zinc-200 md:inline-block min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Log in to Action.IT"
          >
            Log in
          </Link>

          <Link
            href="/login"
            className="hidden rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:border-white/10 dark:bg-zinc-800/80 dark:text-white md:inline-block min-h-[44px] flex items-center justify-center"
            aria-label="Get started with Action.IT"
          >
            Get started
          </Link>

          <button
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/40 text-zinc-800 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:bg-zinc-800/60 dark:text-zinc-100 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className={`h-5 w-5 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-5 w-5 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={[
          "md:hidden",
          "mt-2 overflow-hidden rounded-2xl border border-white/15",
          "bg-white/60 p-2 backdrop-blur-xl transition-all dark:bg-zinc-900/60",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "pointer-events-none -translate-y-2 opacity-0",
        ]
          .filter(Boolean)
          .join(" ")}
        role="menu"
        aria-hidden={!open}
      >
        <ul className="divide-y divide-white/10 text-sm dark:divide-white/5" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                onClick={handleCloseMenu}
                className="block rounded-lg px-3 py-3 text-zinc-900/90 transition hover:bg-white/60 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:text-zinc-100 dark:hover:bg-zinc-800/70 min-h-[44px] flex items-center"
                role="menuitem"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2 px-2 py-2" role="none">
            <Link
              href="/login"
              onClick={handleCloseMenu}
              className="flex-1 rounded-lg px-3 py-2 text-center font-medium text-zinc-900/90 transition hover:bg-white/70 hover:text-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800/70 min-h-[44px] flex items-center justify-center"
              role="menuitem"
            >
              Log in
            </Link>
            <Link
              href="/login"
              onClick={handleCloseMenu}
              className="flex-1 rounded-lg border border-white/20 bg-white/80 px-3 py-2 text-center font-semibold text-zinc-900 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-zinc-800/80 dark:text-white min-h-[44px] flex items-center justify-center"
              role="menuitem"
            >
              Get started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default memo(Navbar);
