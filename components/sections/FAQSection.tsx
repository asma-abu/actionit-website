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
    <section className="pb-8 sm:pt-8 sm:pb-12" aria-labelledby="faq-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl drop-shadow-sm"
            style={{ 
              color: '#00B4D8',
            }}
          >
            FAQ's
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white/60 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10 overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50 transition-colors"
                    onClick={() => handleToggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-lg font-semibold text-zinc-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-6 w-6 flex-shrink-0 transform transition-transform text-zinc-900 dark:text-white ${
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
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
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