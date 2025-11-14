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
      className="bg-[#0F172A] py-16 sm:py-20"
      aria-labelledby="solution-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
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

        <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 text-center px-4 sm:mt-12 sm:px-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="mx-auto flex max-w-xs flex-col gap-y-3">
              <dt className="text-sm text-gray-400">{pillar.description}</dt>
              <dd className="order-first text-xl font-semibold tracking-tight text-white sm:text-2xl">
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