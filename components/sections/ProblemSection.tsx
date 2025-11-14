'use client';

import { memo, type ReactNode } from 'react';
import Container from '../ui/Container';
import { painPoints } from '../../config/content';

// Icons kept the same, but you can also reduce their visual size via className if you want even smaller
const iconMap: Record<string, ReactNode> = {
  Database: (
    <svg
      className="h-5 w-5"  // ⬅️ was h-6 w-6
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  ),
  Workflow: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  ),
  FileText: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
};

function ProblemSection() {
  if (!painPoints || painPoints.length === 0) {
    return null;
  }

  return (
    <section
      id="product"
      className="py-20 sm:py-24" // ⬅️ slightly less vertical space for whole section
      aria-labelledby="problem-heading"
    >
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="problem-heading"
            className="!text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white"
          >
            Not another AI note-taker... <br />
            <span className="!text-3xl text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">
              A smarter approach
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Worried your meeting recorder is keeping your data? Tired of sifting
            through transcripts?
          </p>
        </div>

        {/* Compact grid & cards */}
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {painPoints.map((point) => {
            const Icon = iconMap[point.icon];

            return (
              <div
                key={point.id}
                className="group relative mx-auto flex max-w-xs flex-col items-center text-center rounded-xl bg-gradient-to-b from-red-50/60 to-white/70 p-3 sm:p-4 shadow-sm backdrop-blur-sm ring-1 ring-red-100/40 transition-all hover:shadow-md hover:ring-red-200/60 dark:from-red-950/30 dark:to-zinc-800/70 dark:ring-red-900/40 dark:hover:ring-red-800/60"
              >
                {/* Smaller warning indicator */}
                <div className="absolute -top-1.5 -right-1.5 h-3 w-3 animate-pulse">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/30 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500/20 ring-1 ring-red-500/30" />
                </div>

                {/* Smaller icon wrapper */}
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md shadow-red-500/20 transition-transform group-hover:scale-[1.03] dark:from-red-600 dark:to-red-700 dark:shadow-red-900/30">
                  <div className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-bl-sm bg-red-400/40" />
                  {Icon || (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  )}
                </div>

                {/* Compact text */}
                <h3 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-white">
                  {point.title}
                </h3>
                <p className="mt-1.5 max-w-[230px] text-xs sm:text-[13px] leading-snug text-zinc-600 dark:text-zinc-400">
                  {point.description}
                </p>

                {/* Shorter accent line */}
                <div className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-red-300/50 to-transparent dark:via-red-700/30" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default memo(ProblemSection);
