'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { integrations } from '../../config/content';

function IntegrationsSection() {
  if (!integrations || integrations.length === 0) {
    return null;
  }

  return (
    <section
      id="resources"
      className="relative overflow-hidden py-16 sm:py-20"
      aria-labelledby="integrations-section-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="integrations-section-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            Yes, <span className="text-[#00B4D8] text-4xl font-bold">action.it</span> syncs with that!
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We integrate with tools you're already using, so you can keep your meetings in action.
            action.it connects your meetings to the rest of your workflow so
            everything is always up-to-date.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {integrations.map((integration, index) => (
            <div
              key={integration.id}
              className="group relative animate-fade-in-up"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'backwards'
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-pink-400/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative flex items-center gap-3 rounded-2xl border border-white/40 bg-white/70 px-5 py-3.5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/60 hover:bg-white/80 hover:shadow-xl dark:border-zinc-700/40 dark:bg-zinc-800/70 dark:hover:border-zinc-600/60 dark:hover:bg-zinc-800/80">
                {/* Logo container with subtle animation */}
                <div className="flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {integration.logo ? (
                    <img
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-pink-400 text-sm font-bold text-white">
                      {integration.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                {/* Integration name */}
                <span className="text-sm font-semibold text-zinc-800 transition-colors duration-300 group-hover:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-white">
                  {integration.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

export default memo(IntegrationsSection);