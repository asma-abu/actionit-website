"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

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

  // Memoized background gradient style for performance
  const backgroundGradient = useMemo(
    () => ({
      background:
        "linear-gradient(60deg, var(--brand-cyan-primary,#00B4D8), var(--brand-purple,#6366F1), var(--neutral-50,#F8FAFC))",
      animation: "heroGradientMove 18s ease-in-out infinite",
    }),
    []
  );

  return (
    <section
      className="relative isolate min-h-[92vh] overflow-hidden"
      aria-label="Hero"
    >
      {/* ====== BACKGROUND LAYERS (3 layers as per architecture) ====== */}
      {/* Layer 1: Animated Gradient (z-index: -20) */}
      <div
        className="absolute inset-0 -z-20 bg-[length:200%_200%]"
        style={backgroundGradient}
      />
      
      {/* Layer 2: Radial Blooms (z-index: -10) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 480px at 12% 8%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(800px 420px at 88% 75%, rgba(255,255,255,0.22), transparent 60%)",
          filter: "saturate(120%)",
        }}
      />
      
      {/* Layer 3: Seamless white transition at bottom (z-index: -10) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60vh] -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.8) 75%, #ffffff 100%)",
        }}
      />

      {/* ====== CONTENT GRID CONTAINER (as per architecture) ====== */}
      <div className="relative mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-24 md:px-12 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-32">
        {/* Promo Pill (Sticky, Scroll-fade) - Glassmorphism badge */}
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

        {/* Trust signals */}
        <div className="lg:col-span-12 mb-4">
          <div className="flex items-center gap-4 text-sm text-zinc-700">
            <span className="flex items-center gap-1.5">
              <span className="text-green-600">✓</span>
              <span>100% data privacy</span>
            </span>
            <span className="text-zinc-400">•</span>
            <span>No data storage</span>
          </div>
        </div>

        {/* Left Column (lg:col-span-7) - Headline, Subheadline, CTAs, Privacy Disclaimer */}
        <div className="lg:col-span-7 order-1 lg:order-1">
          {/* Gradient headline */}
          <h1 className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent sm:text-6xl md:text-7xl">
            Your meetings in action –<br />
            insights delivered, data deleted.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            An AI meeting assistant that joins your calls, posts summaries to your tools, then wipes the slate clean.
          </p>

          {/* CTA Buttons Container */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary CTA Link */}
            <Link
              href="/login"
              aria-label="Start free with ActionIT"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan-primary,#00B4D8)]"
            >
              Start Free
            </Link>
            {/* Secondary CTA Link */}
            <Link
              href="#demo"
              aria-label="Watch demo of ActionIT"
              className="rounded-full border border-white/25 bg-white/60 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan-primary,#00B4D8)]"
            >
              Watch Demo
            </Link>
          </div>

          {/* Privacy Disclaimer */}
          <p className="mt-6 text-sm text-zinc-600">
            Our AI never trains on your data.{" "}
            <a
              href="#privacy"
              className="font-medium underline decoration-zinc-400 underline-offset-4 hover:text-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan-primary,#00B4D8)] rounded"
            >
              Learn more
            </a>
          </p>
        </div>

        {/* Right Column (lg:col-span-5, Desktop only) - Glass Card Container with Mock UI Image */}
        <div className="relative hidden lg:col-span-5 lg:flex lg:justify-end order-2 lg:order-2">
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
