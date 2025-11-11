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
    <section className="py-24 sm:py-32" aria-labelledby="faq-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-6">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10"
                >
                  <dt>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand/40 rounded-lg"
                      onClick={() => handleToggle(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="text-lg font-semibold text-zinc-900 dark:text-white pr-4">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center flex-shrink-0">
                        <svg
                          className={`h-6 w-6 transform transition-transform ${
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
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={`faq-answer-${faq.id}`}
                    className={`mt-4 overflow-hidden text-base leading-7 text-zinc-600 dark:text-zinc-400 transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export default memo(FAQSection);
