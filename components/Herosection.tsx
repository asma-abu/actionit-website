"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  // Controls the promo pill fade on scroll
  const [pillOpacity, setPillOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const fadeDistance = 260; // px over which the pill fades
      setPillOpacity(1 - Math.min(y / fadeDistance, 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      // Tuck hero behind the floating, rounded navbar
      className="relative isolate -mt-6 md:-mt-8 min-h-[92vh] overflow-hidden"
      aria-label="Hero"
    >
      {/* ====== ANGLED, MOVING BACKGROUND ====== */}
      <div
        className="absolute inset-0 -z-20 bg-[length:200%_200%]"
        style={{
          background:
            "linear-gradient(60deg, var(--brand-cyan-primary,#00B4D8), var(--brand-purple,#6366F1), var(--neutral-50,#F8FAFC))",
          animation: "heroGradientMove 18s ease-in-out infinite",
        }}
      />
      {/* Radial blooms */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 480px at 12% 8%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(800px 420px at 88% 75%, rgba(255,255,255,0.22), transparent 60%)",
          filter: "saturate(120%)",
        }}
      />
      {/* Angled white slice for depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[44vh] -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.80), rgba(255,255,255,0.90))",
          clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* ====== CONTENT GRID ====== */}
      <div className="relative mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-36 md:px-12 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-40">
        {/* Sticky promo pill (glass) that fades on scroll */}
        <div
          className="sticky top-24 z-20 mb-2 lg:col-span-12"
          style={{ opacity: pillOpacity, transition: "opacity 150ms linear" }}
        >
          <div className="pointer-events-none inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/30 px-4 py-1.5 text-sm font-medium text-zinc-900/90 shadow-sm backdrop-blur-md">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--brand-cyan-primary,#00B4D8)] text-white text-[10px]">
              🔒
            </span>
            Privacy-First AI, built for teams
          </div>
        </div>

        {/* Left column: headline, subhead, CTAs */}
        <div className="lg:col-span-7">
          <h1 className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent sm:text-6xl md:text-7xl">
            Your Secure AI <span className="whitespace-nowrap">Meeting Assistant</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            ActionIT records and transcribes your meetings, turns conversation
            into clear summaries and next steps, and gives coaching-level
            feedback — <strong>without retaining your data</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#start"
              aria-label="Get started with ActionIT"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan-primary,#00B4D8)]"
            >
              Get started
            </Link>
            <Link
              href="#contact"
              aria-label="Talk to sales about ActionIT"
              className="rounded-full border border-white/25 bg-white/60 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan-primary,#00B4D8)]"
            >
              Talk to sales
            </Link>
          </div>

          <p className="mt-6 text-sm text-zinc-600">
            Our AI never trains on your data.{" "}
            <a
              href="#privacy"
              className="font-medium underline decoration-zinc-400 underline-offset-4 hover:text-zinc-800"
            >
              Learn more
            </a>
          </p>
        </div>

        {/* Right column: glass card with mock UI */}
        <div className="relative hidden lg:col-span-5 lg:flex lg:justify-end">
          <div className="rounded-2xl border border-white/25 bg-white/65 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-xl border border-white/40 bg-white p-4 shadow">
              <div className="mx-auto max-w-[320px]">
                <Image
                  src="/mock-card.png"
                  alt="ActionIT meeting summary preview"
                  width={640}
                  height={1280}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes (no Tailwind config change needed) */}
      <style jsx>{`
        @keyframes heroGradientMove {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
