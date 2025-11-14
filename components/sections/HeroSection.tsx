'use client';

import { useEffect, useState, useCallback, memo } from 'react';
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

      <Container className="relative pt-8 pb-24 md:pt-12 md:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="hidden lg:block lg:order-1" aria-hidden="true">
            {/* Browser mockup with glassmorphism */}
            <div className="relative">
              {/* Glassmorphism container */}
              <div 
                className="relative rounded-2xl p-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                {/* Browser chrome */}
                <div className="rounded-t-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-3 border-b border-zinc-200/50 dark:border-zinc-700/50">
                  <div className="flex items-center gap-2">
                    {/* Traffic lights */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    {/* URL bar */}
                    <div className="flex-1 mx-4">
                      <div className="bg-zinc-100/50 dark:bg-zinc-900/50 rounded-md px-3 py-1.5 text-xs text-zinc-500 dark:text-zinc-400 backdrop-blur-sm">
                        app.actionit.ai/dashboard
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Browser content with meeting interface */}
                <div className="relative aspect-[4/3] rounded-b-xl overflow-hidden bg-gradient-to-br from-white/40 to-white/20 dark:from-zinc-900/40 dark:to-zinc-900/20 backdrop-blur-xl">
                  {/* Meeting dashboard mockup */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-6 h-6 rounded bg-white/60"></div>
                        </div>
                        <div>
                          <div className="h-3 w-32 bg-zinc-300/30 dark:bg-zinc-600/30 rounded backdrop-blur-sm"></div>
                          <div className="h-2 w-20 bg-zinc-200/30 dark:bg-zinc-700/30 rounded mt-1 backdrop-blur-sm"></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-200/30 dark:bg-zinc-700/30 backdrop-blur-sm"></div>
                        <div className="w-8 h-8 rounded-full bg-zinc-200/30 dark:bg-zinc-700/30 backdrop-blur-sm"></div>
                      </div>
                    </div>
                    
                    {/* Meeting grid */}
                    <div className="flex-1 grid grid-cols-2 gap-3 mb-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i}
                          className="rounded-lg bg-gradient-to-br from-zinc-200/20 to-zinc-300/20 dark:from-zinc-700/20 dark:to-zinc-800/20 backdrop-blur-sm p-3 flex flex-col items-center justify-center"
                        >
                          <div className="w-12 h-12 rounded-full bg-zinc-300/30 dark:bg-zinc-600/30 mb-2 backdrop-blur-sm"></div>
                          <div className="h-2 w-16 bg-zinc-300/30 dark:bg-zinc-600/30 rounded backdrop-blur-sm"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Controls bar */}
                    <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-zinc-200/20 dark:bg-zinc-800/20 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 backdrop-blur-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-zinc-300/30 dark:bg-zinc-600/30 backdrop-blur-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-zinc-300/30 dark:bg-zinc-600/30 backdrop-blur-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-zinc-300/30 dark:bg-zinc-600/30 backdrop-blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* AI insights overlay */}
                  <div 
                    className="absolute bottom-4 right-4 p-3 rounded-lg"
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">AI Processing</span>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-24 bg-blue-500/20 rounded"></div>
                      <div className="h-1.5 w-20 bg-blue-500/20 rounded"></div>
                      <div className="h-1.5 w-16 bg-blue-500/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
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
              Your meetings in action. <br />
              <span className="whitespace-normal">
                Insights delivered, data deleted.
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