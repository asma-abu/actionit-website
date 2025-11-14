'use client';

import { useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { features } from '../../config/content';

function FeaturesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!features || features.length === 0) {
    return null;
  }

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === 'left'
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

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

        <div className="mx-auto mt-12 sm:mt-16 max-w-7xl relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-zinc-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-700"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-zinc-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-700"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex-none w-[85%] sm:w-[45%] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="flex flex-col h-full rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 transition-all hover:shadow-xl hover:ring-zinc-900/10 dark:bg-zinc-800/60 dark:ring-white/10 dark:hover:ring-white/20">
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
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default FeaturesSection;