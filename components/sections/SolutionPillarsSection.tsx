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
      className="bg-gray-900 py-24 sm:py-32"
      aria-labelledby="solution-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              End-to-end encryption
            </span>
            <span className="text-zinc-600" aria-hidden="true">
              •
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              Immediate deletion
            </span>
            <span className="text-zinc-600" aria-hidden="true">
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

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-400">{pillar.description}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {pillar.title}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default memo(SolutionPillarsSection);