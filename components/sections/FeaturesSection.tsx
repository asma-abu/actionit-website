'use client';

import Container from '../ui/Container';
import Button from '../ui/Button';
import { features } from '../../config/content';

export default function FeaturesSection(): JSX.Element {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="features-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-zinc-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300">
            Powerful Features
          </div>
          <h2
            id="features-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            Everything You Need
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">
              In One Place
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
              {feature.ctaText && (
                <div className="mt-6">
                  <Button
                    label={feature.ctaText}
                    href="/login"
                    variant="primary"
                    size="sm"
                    ariaLabel={`${feature.ctaText} - ${feature.title}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

