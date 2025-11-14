'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { teamTypes } from '../../config/content';

function BuiltForTeamsSection() {
  if (!teamTypes || teamTypes.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-zinc-100 py-16 sm:py-20 px-4 sm:px-6 dark:border-zinc-800" aria-labelledby="teams-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* Enhanced badge with gradient border */}
          <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-0.5">
            <div className="flex items-center rounded-full bg-white/90 px-5 py-2 backdrop-blur-sm dark:bg-zinc-900/90">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-xs font-bold uppercase tracking-wider text-transparent">
                Universal Team Support
              </span>
            </div>
          </div>
          
          {/* Enhanced heading with gradient text */}
          <h2
            id="teams-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Built for Every Team
          </h2>
          
          {/* Supporting text */}
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Empowering teams across your organization with privacy-first meeting intelligence
          </p>
        </div>

        {/* Enhanced cards grid with stagger animation */}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {teamTypes.map((team, index) => (
            <div
              key={team.id}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card with enhanced styling */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-zinc-800/80">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Inner content container */}
                <div className="relative h-full rounded-[14px] bg-white/95 p-3 backdrop-blur-sm dark:bg-zinc-800/95">
                  {/* Icon placeholder with gradient background */}
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                    <div className="h-5 w-5 rounded bg-gradient-to-br from-cyan-500 to-blue-600" />
                  </div>
                  
                  {/* Team name with better typography */}
                  <h3 className="mb-1 text-sm font-bold text-zinc-900 transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text dark:text-white">
                    {team.name}
                  </h3>
                  
                  {/* Description with improved readability */}
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {team.description}
                  </p>
                  
                  {/* Optional: Add team-specific metrics or features */}
                  <div className="mt-2 flex items-center text-xs font-medium text-zinc-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-zinc-500">
                    <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Boost productivity
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute -right-1 -top-1 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg viewBox="0 0 32 32" className="h-full w-full">
                  <path
                    d="M0 0 L32 0 L32 32 Z"
                    fill="url(#corner-gradient)"
                    opacity="0.5"
                  />
                  <defs>
                    <linearGradient id={`corner-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00B4D8" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default memo(BuiltForTeamsSection);