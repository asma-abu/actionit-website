'use client';

import { memo } from 'react';
import type { ReactElement } from 'react';
import Container from '../ui/Container';
import { steps } from '../../config/content';

const iconMap: Record<string, ReactElement> = {
  Calendar: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Brain: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  LinkIcon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  Trash2: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
};

function HowItWorksSection() {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      className="border-t border-zinc-100 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 py-16 sm:py-20 lg:py-24 dark:border-zinc-800 dark:bg-black"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center px-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
            Workflow
          </p>

          <h2
            id="how-it-works-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white"
          >
            How <span className="text-[#00B4D8]">action.it</span> Works
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            A simple, secure process that delivers insights in seconds—then wipes the data so your meetings stay private.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];

            const iconStyles = (() => {
              switch (index) {
                case 0:
                  return 'bg-[#7DD3FC] text-[#0F172A]';
                case 1:
                  return 'bg-[#FEF3C7] text-[#0F172A]';
                case 2:
                  return 'bg-[#64748B] text-white';
                default:
                  return 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900';
              }
            })();

            return (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                {/* Card */}
                <article
                  className="relative z-10 flex h-full w-full max-w-xs flex-col rounded-2xl border border-zinc-200/70 bg-white/80 px-6 py-6 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-lg dark:border-zinc-800/70 dark:bg-zinc-900/70"
                >
                  <div
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ring-4 ring-white/70 shadow-sm ${iconStyles}`}
                  >
                    {Icon}
                  </div>

                  <p className="mt-4 text-sm sm:text-[0.95rem] font-semibold text-zinc-900 dark:text-white">
                    {step.title}
                  </p>

                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default memo(HowItWorksSection);
