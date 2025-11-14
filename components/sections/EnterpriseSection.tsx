'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { enterpriseBenefits } from '../../config/content';

function EnterpriseSection() {
  if (!enterpriseBenefits || enterpriseBenefits.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20" aria-labelledby="enterprise-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="enterprise-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white"
          >
            Action.IT for Enterprise
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Say goodbye to disjointed AI meeting assistants. Action.IT is the
            only AI meeting assistant built for the entire organization. Get
            centralized meeting insights without compromising the privacy and
            security of your internal meeting data.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {enterpriseBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
      </Container>
    </section>
  );
}

export default memo(EnterpriseSection);
