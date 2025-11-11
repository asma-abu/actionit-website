'use client';

import Container from '../ui/Container';
import Button from '../ui/Button';
import { enterpriseBenefits } from '../../config/content';

export default function EnterpriseSection(): JSX.Element {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="enterprise-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="enterprise-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            Action.IT for Enterprise
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Say goodbye to disjointed AI meeting assistants. Action.IT is the
            only AI meeting assistant built for the entire organization. Get
            centralized meeting insights without compromising the privacy and
            security of your internal meeting data.
          </p>
          <div className="mt-8">
            <Button
              label="Learn more"
              href="/enterprise"
              variant="primary"
              size="md"
              ariaLabel="Learn more about Action.IT Enterprise"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {enterpriseBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

