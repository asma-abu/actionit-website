'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { teamTypes } from '../../config/content';

function BuiltForTeamsSection() {
  if (!teamTypes || teamTypes.length === 0) {
    return null;
  }

  return (
    <section className="py-24 sm:py-32" aria-labelledby="teams-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-zinc-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300">
            Universal Team Support
          </div>
          <h2
            id="teams-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            Built for
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">Every Team</span>
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {teamTypes.map((team) => (
            <div
              key={team.id}
              className="rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {team.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(BuiltForTeamsSection);
