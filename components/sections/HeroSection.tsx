'use client';

import { useEffect, useState, useCallback, memo } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';

function HeroSection() {
  const [pillOpacity, setPillOpacity] = useState(1);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    const y = window.scrollY || 0;
    const fadeDistance = 260;
    setPillOpacity(Math.max(0, 1 - Math.min(y / fadeDistance, 1)));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden -mt-20 pt-20"
      aria-label="Hero section"
    >
      <div className="absolute left-0 right-0 -z-20 hero-gradient" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 480px at 12% 8%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(800px 420px at 88% 75%, rgba(255,255,255,0.22), transparent 60%)',
          filter: 'saturate(120%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[50vh] -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.85) 40%, #ffffff 100%)',
          clipPath: 'polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="hidden lg:block lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10">
              <Image
                src="/mock-card.png"
                alt="Action.IT meeting assistant interface mockup"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:order-2 text-center lg:text-left">
            <div
              className="mb-8 inline-flex items-center gap-4 text-sm"
              style={{
                opacity: pillOpacity,
                transition: 'opacity 150ms linear',
              }}
              aria-label="Trust signals"
            >
              <span className="flex items-center gap-2">
                <span className="text-green-600" aria-hidden="true">
                  ✓
                </span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  100% data privacy
                </span>
              </span>
              <span className="text-zinc-400" aria-hidden="true">
                •
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                No data storage
              </span>
            </div>

            <h1 className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent sm:text-6xl md:text-7xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
              My meetings in action –<br />
              <span className="whitespace-normal">
                insights delivered, data deleted.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 lg:mx-0">
              An AI meeting assistant that joins your calls, posts summaries to
              your tools, then wipes the slate clean.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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
        </div>
      </Container>
    </section>

  );
}

export default memo(HeroSection);
