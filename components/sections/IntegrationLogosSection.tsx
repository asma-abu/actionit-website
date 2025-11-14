'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { integrationPartners } from '../../config/content';

function IntegrationLogosSection() {
  if (!integrationPartners || integrationPartners.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24" aria-labelledby="integrations-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="integrations-heading"
            className="text-2xl font-semibold text-zinc-900 dark:text-white"
          >
            Seamlessly connects with your workflow
          </h2>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {integrationPartners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-lg bg-white/60 p-4 text-center text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:text-zinc-300 dark:ring-white/10"
            >
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(IntegrationLogosSection);
