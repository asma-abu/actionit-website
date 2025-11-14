'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { steps } from '../../config/content';

const iconMap: Record<string, React.ReactElement> = {
  Calendar: (
    <svg
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  Brain: (
    <svg
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  LinkIcon: (
    <svg
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  ),
  Trash2: (
    <svg
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
};

function HowItWorksSection() {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      className="border-t border-zinc-100 bg-zinc-50/60 py-16 sm:py-20 dark:border-zinc-800 dark:bg-black"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Workflow
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            How action.it Works
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
            A simple, secure process that delivers insights in seconds—then
            wipes the data so your meetings stay private.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const stepNumber = index + 1;

            // Define colors for each step
            const getIconStyles = () => {
              switch (index) {
                case 0: // Step 1: #7DD3FC
                  return 'bg-[#7DD3FC] text-[#0F172A]';
                case 1: // Step 2: light yellow
                  return 'bg-[#FEF3C7] text-[#0F172A]';
                case 2: // Step 3: #64748B
                  return 'bg-[#64748B] text-white';
                case 3: // Step 4: keep as is
                default:
                  return 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900';
              }
            };

            return (
              <article
                key={step.id}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-zinc-900/5 to-transparent opacity-0 blur-xl transition group-hover:opacity-100 dark:from-white/10"
                />

                <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg shadow-zinc-900/10 ring-8 ring-white/80 transition group-hover:-translate-y-1 group-hover:shadow-xl dark:ring-zinc-900 ${getIconStyles()}`}>
                  {Icon ?? (
                    <span className="text-2xl font-semibold" aria-hidden="true">
                      {stepNumber}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  Step {stepNumber}
                </p>
                <h3 className="mt-1.5 text-base font-semibold leading-snug text-zinc-900 sm:text-lg dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default memo(HowItWorksSection);
