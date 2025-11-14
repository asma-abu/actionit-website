'use client';

import { memo } from 'react';
import Container from '../ui/Container';

const securityFeatures = [
  'End-to-end encryption',
  'No human access to data',
  'Immediate deletion',
  'SOC 2 & GDPR compliant',
] as const;

function SecuritySection() {
  return (
    <section 
      className="py-24 sm:py-32 bg-zinc-900 dark:bg-black" 
      aria-labelledby="security-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="security-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Built for Privacy and Compliance
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            We never use your conversations to train AI – in fact, we can't,
            because we don't keep them. Each recording is ephemeral, giving you
            full peace of mind.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-lg bg-zinc-800/60 p-4 shadow-sm backdrop-blur-sm ring-1 ring-white/10 hover:bg-zinc-800/80 transition-colors"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-white">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400" aria-hidden="true">
                ✓
              </span>
              <span className="font-medium text-white">
                Security: Verified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400" aria-hidden="true">
                ✓
              </span>
              <span className="font-medium text-white">
                Privacy: Verified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400" aria-hidden="true">
                ✓
              </span>
              <span className="font-medium text-white">
                Compliance: Verified
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(SecuritySection);