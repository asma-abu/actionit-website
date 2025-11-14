'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { enterpriseBenefits } from '../../config/content';

function EnterpriseSection() {
  if (!enterpriseBenefits || enterpriseBenefits.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-white py-16 sm:py-20" aria-labelledby="enterprise-heading">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[32rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect width="100%" height="100%" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" strokeWidth="0" />
        </svg>
      </div>

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

        <dl className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-12 text-center sm:mt-16 lg:grid-cols-3 px-6 lg:px-8">
          {enterpriseBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="mx-auto flex max-w-sm flex-col gap-y-3"
            >
              <dt className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                {benefit.title}
              </dt>
              <dd className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {benefit.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default memo(EnterpriseSection);