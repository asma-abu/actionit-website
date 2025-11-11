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
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section className="py-24 sm:py-32" aria-labelledby="how-it-works-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A simple, secure process that delivers insights then vanishes
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                  {Icon || (
                    <span className="text-2xl font-bold" aria-hidden="true">
                      {index + 1}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default memo(HowItWorksSection);
