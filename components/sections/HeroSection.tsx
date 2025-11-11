'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function HeroSection(): JSX.Element {
  const [pillOpacity, setPillOpacity] = useState(1);

  useEffect(() => {
    const onScroll = (): void => {
      const y = window.scrollY || 0;
      const fadeDistance = 260;
      setPillOpacity(1 - Math.min(y / fadeDistance, 1));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="relative isolate -mt-6 md:-mt-8 min-h-[92vh] overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated Background Layers */}
      <div
        className="absolute inset-0 -z-20 bg-[length:200%_200%]"
        style={{
          background:
            'linear-gradient(60deg, var(--brand-cyan-primary,#00B4D8), var(--brand-purple,#6366F1), var(--neutral-50,#F8FAFC))',
          animation: 'heroGradientMove 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 480px at 12% 8%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(800px 420px at 88% 75%, rgba(255,255,255,0.22), transparent 60%)',
          filter: 'saturate(120%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[44vh] -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.80), rgba(255,255,255,0.90))',
          clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Content */}
      <Container className="relative py-36 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Signals */}
          <div
            className="mb-8 inline-flex items-center gap-4 text-sm"
            style={{ opacity: pillOpacity, transition: 'opacity 150ms linear' }}
          >
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                100% data privacy
              </span>
            </span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-700 dark:text-zinc-300">
              No data storage
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent sm:text-6xl md:text-7xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
            Your meetings in action –<br />
            <span className="whitespace-nowrap">
              insights delivered, data deleted.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            An AI meeting assistant that joins your calls, posts summaries to
            your tools, then wipes the slate clean.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              label="Start Free"
              href="/login"
              variant="primary"
              size="md"
              ariaLabel="Start Free with Action.IT"
            />
            <Button
              label="Watch Demo"
              href="#demo"
              variant="secondary"
              size="md"
              ariaLabel="Watch Action.IT Demo"
            />
          </div>
        </div>
      </Container>

      {/* Keyframes */}
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

