'use client';

import { useState, useCallback, memo } from 'react';
import Container from '../ui/Container';
import { faqs } from '../../config/content';

function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string): void => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-50/60 to-white dark:from-zinc-950 dark:to-zinc-900"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Support
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight drop-shadow-sm"
            style={{ color: '#00B4D8' }}
          >
            FAQ&apos;s
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            You've got questions, we've got answers. Can&apos;t find what you're looking for?
            Contact us and we&apos;ll answer.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-3xl">
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="group rounded-2xl bg-white/80 dark:bg-zinc-900/70 shadow-sm ring-1 ring-zinc-200/70 dark:ring-zinc-800/60 backdrop-blur-sm overflow-hidden transition-all duration-200 hover:shadow-xl hover:ring-zinc-300 dark:hover:ring-zinc-700 hover:-translate-y-0.5"
                >
                  <button
                    type="button"
                    className="w-full px-6 sm:px-7 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-zinc-50/80 dark:hover:bg-zinc-800/60 transition-colors"
                    onClick={() => handleToggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transform transition-transform duration-200 text-zinc-900 dark:text-white group-hover:scale-110 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`px-6 sm:px-7 overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-40 sm:max-h-56 pb-4 sm:pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-7 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(FAQSection);
