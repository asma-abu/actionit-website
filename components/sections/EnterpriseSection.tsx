'use client';

import { memo } from 'react';
import Container from '../ui/Container';
import { enterpriseBenefits } from '../../config/content';

function EnterpriseSection() {
  if (!enterpriseBenefits || enterpriseBenefits.length === 0) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 py-16 sm:py-20 lg:py-24"
      aria-labelledby="enterprise-heading"
    >
      {/* Background grid / glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[32rem] -translate-x-1/2 stroke-gray-200 
          [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50 dark:fill-zinc-900">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            strokeWidth="0"
          />
        </svg>

        {/* Soft radial glow */}
        <div className="absolute inset-x-[10%] top-[-10%] h-64 bg-gradient-to-b from-[#00B4D8]/20 to-transparent blur-3xl opacity-70" />
      </div>

      <Container>
        <div className="mx-auto max-w-6xl px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                Enterprise
              </p>
              <h2
                id="enterprise-heading"
                className="text-3xl sm:text-4xl lg:text-[2.55rem] font-semibold tracking-tight text-zinc-900 dark:text-white"
              >
                <span className="text-[#00B4D8] font-semibold">action.it</span>{' '}
                for Enterprise
              </h2>
              <p className="text-base sm:text-lg leading-7 text-zinc-600 dark:text-zinc-400">
                Say goodbye to disjointed AI meeting assistants.
                <span className="text-[#00B4D8] font-semibold"> action.it </span>
                is the only AI meeting assistant built for the entire organization.
                Get centralized meeting insights without compromising the privacy
                and security of your internal meeting data.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-900/70 dark:text-zinc-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#00B4D8] shadow-[0_0_0_4px_rgba(0,180,216,0.25)]" />
                Built for privacy-first teams
              </div>
            </div>

            {/* RIGHT COLUMN – with divider on desktop */}
            <div className="lg:border-l lg:border-zinc-200/70 lg:dark:border-zinc-800/70 lg:pl-10 lg:ml-2">
              <dl className="space-y-6 sm:space-y-7">
                {enterpriseBenefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="group relative flex flex-col gap-y-2 rounded-2xl border border-zinc-200/80 bg-white/70 px-5 py-5 shadow-sm backdrop-blur-xl 
                    transition-all duration-200 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-xl 
                    dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:hover:border-[#00B4D8]/40"
                  >
                    {/* subtle gradient edge highlight */}
                    <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-white/40 via-white/0 to-[#00B4D8]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative flex items-start gap-3">
                      {/* Icon chip */}
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/90 shadow-sm ring-1 ring-zinc-200/80 
                        group-hover:ring-[#00B4D8]/40 group-hover:shadow-md backdrop-blur dark:bg-zinc-900/90 dark:ring-zinc-700/80">
                        <svg
                          className="h-4 w-4 text-zinc-700 group-hover:text-[#00B4D8] dark:text-zinc-300"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 19.5V9.75L12 4.5l6 5.25v9.75H6Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 14.25 11.25 15.5 14 12.75"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className="space-y-1">
                        <dt className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                          {benefit.title}
                        </dt>
                        <dd className="text-sm sm:text-[0.95rem] leading-6 text-zinc-600 dark:text-zinc-400">
                          {benefit.description}
                        </dd>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(EnterpriseSection);
