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

      {/* Add floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

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
                <div className="relative aspect-[4/3] rounded-b-xl overflow-hidden">
                  {/* Background mockup image */}
                  <img 
                    src="/mockup.png" 
                    alt="Dashboard interface"
                    className="absolute inset-0 w-full h-full object-cover opacity-95"
                  />
                  
                  {/* Overlay gradient for depth */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5"
                    aria-hidden="true"
                  />
                  
                  {/* Floating metrics cards - top right */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div 
                      className="p-3 rounded-lg animate-float"
                      style={{
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        animationDelay: '0s',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-semibold text-emerald-700">Active</span>
                      </div>
                    </div>
                    
                    <div 
                      className="p-3 rounded-lg animate-float"
                      style={{
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        animationDelay: '0.3s',
                      }}
                    >
                      <div className="text-2xl font-bold text-zinc-800">12</div>
                      <div className="text-xs text-zinc-600">Meetings</div>
                    </div>
                  </div>
                  
                  {/* AI insights overlay - bottom left */}
                  <div 
                    className="absolute bottom-4 left-4 p-3 rounded-lg animate-float"
                    style={{
                      background: 'rgba(59, 130, 246, 0.15)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)',
                      animationDelay: '0.6s',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-xs font-semibold text-blue-700">AI Processing</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-28 bg-blue-500/30 rounded-full"></div>
                      <div className="h-1.5 w-24 bg-blue-500/25 rounded-full"></div>
                      <div className="h-1.5 w-20 bg-blue-500/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Privacy badge - top left */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-2 rounded-full animate-float"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)',
                      animationDelay: '0.9s',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-xs font-semibold text-emerald-700">Private</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-2 text-center lg:text-left">
            <div
              className="mb-8 inline-flex items-center gap-4 text-sm animate-fade-in"
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

            <h1 className="text-5xl font-extrabold leading-[1.05] text-[#1E293B] sm:text-6xl md:text-7xl dark:text-[#1E293B] animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Your meetings in <br />
              <span className="text-blue-500 drop-shadow-sm" style={{ textShadow: '0 2px 4px rgba(59, 130, 246, 0.3)' }}>action.</span> <br />
              <span className="whitespace-normal">
                Insights delivered, data <span className="text-[#64748B] opacity-70">deleted.</span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              An AI meeting assistant that joins your calls, posts summaries to
              your tools, then wipes the slate clean.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <Button
                label="Free Trial - Coming Soon"
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