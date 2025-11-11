'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { integrations } from '../../config/content';

function IntegrationsSection() {
  if (!integrations || integrations.length === 0) {
    return null;
  }

  return (
    <section
      id="resources"
      className="py-24 sm:py-32"
      aria-labelledby="integrations-section-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="integrations-section-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            Yes, Action.IT syncs with that
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            With over 50 integrations with tools you're already using,
            Action.IT connects your meetings to the rest of your workflow so
            everything is always up-to-date.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Action.IT integrates with Notion, Slack, Salesforce, HubSpot,
            Monday, Asana, ClickUp, Jira, Linear, Confluence, Zapier, and more.
          </p>
        </div>

        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-3">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="rounded-full border border-zinc-200 bg-white/60 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 dark:ring-white/10"
            >
              {integration.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(IntegrationsSection);
