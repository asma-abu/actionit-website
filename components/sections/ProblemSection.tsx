'use client';

import { memo, type ReactNode } from 'react';
import Container from '../ui/Container';
import { painPoints } from '../../config/content';

// Icons kept the same, but you can also reduce their visual size via className if you want even smaller
const iconMap: Record<string, ReactNode> = {
  Database: (
    <svg
      className="h-5 w-5"  // ⬅️ was h-6 w-6
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  ),
  Workflow: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  ),
  FileText: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
};

function ProblemSection() {
  if (!painPoints || painPoints.length === 0) {
    return null;
  }

  return (
    <section
      id="product"
      className="py-20 sm:py-24" // ⬅️ slightly less vertical space for whole section
      aria-labelledby="problem-heading"
    >
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="problem-heading"
            className="!text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white"
          >
            Not another AI note-taker... <br />
            <span className="!text-3xl text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">
              A smarter approach
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Worried your meeting recorder is keeping your data? Tired of sifting
            through transcripts?
          </p>
        </div>

      </Container>
    </section>
  );
}

export default memo(ProblemSection);
