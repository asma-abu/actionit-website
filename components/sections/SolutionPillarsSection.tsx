'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { pillars } from '../../config/content';

function SolutionPillarsSection() {
  if (!pillars || pillars.length === 0) {
    return null;
  }

  return (
    <section
      id="solutions"
      className="py-24 sm:py-32"
      aria-labelledby="solution-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              End-to-end encryption
            </span>
            <span className="text-zinc-400" aria-hidden="true">
              •
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              Immediate deletion
            </span>
            <span className="text-zinc-400" aria-hidden="true">
              •
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              Zero data retention
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(SolutionPillarsSection);
