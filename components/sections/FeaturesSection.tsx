'use client';

import { useState, useEffect, useCallback, memo, useMemo } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { features } from '../../config/content';

const MIN_SWIPE_DISTANCE = 50;

function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < features.length) {
      setCurrentIndex(index);
    }
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0]?.clientX ?? null);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX ?? null);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  }, [touchStart, touchEnd, goToNext, goToPrevious]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  const getCardPosition = useCallback(
    (index: number) => {
      const diff = index - currentIndex;
      if (diff > features.length / 2) {
        return diff - features.length;
      }
      if (diff < -features.length / 2) {
        return diff + features.length;
      }
      return diff;
    },
    [currentIndex]
  );

  const visibleFeatures = useMemo(() => {
    return features.map((feature, index) => {
      const position = getCardPosition(index);
      const isCenter = position === 0;
      const isLeft = position === -1;
      const isRight = position === 1;
      const isVisible = Math.abs(position) <= 1;

      if (!isVisible) return null;

      const translateX = position * 360;
      const scale = isCenter ? 1 : 0.9;
      const opacity = isCenter ? 1 : isLeft || isRight ? 0.5 : 0;
      const zIndex = isCenter ? 10 : isLeft || isRight ? 5 : 1;

      return {
        feature,
        index,
        translateX,
        scale,
        opacity,
        zIndex,
        isCenter,
      };
    });
  }, [getCardPosition]);

  if (!features || features.length === 0) {
    return null;
  }

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

        <div className="relative mx-auto mt-12 sm:mt-16">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-20 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-white sm:-translate-x-12 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous feature"
            type="button"
          >
            <svg
              className="h-6 w-6 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-white sm:translate-x-12 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next feature"
            type="button"
          >
            <svg
              className="h-6 w-6 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            className="relative px-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="pointer-events-none absolute left-0 top-0 z-[15] h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80" />
            <div className="pointer-events-none absolute right-0 top-0 z-[15] h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80" />

            <div
              className="relative flex items-center justify-center pb-8"
              style={{ minHeight: '500px' }}
            >
              <div
                className="relative w-full overflow-visible"
                style={{ maxWidth: '1100px' }}
              >
                {visibleFeatures.map(
                  (item) =>
                    item && (
                      <div
                        key={item.feature.id}
                        className="absolute left-1/2 transition-all duration-500 ease-in-out"
                        style={{
                          transform: `translateX(calc(${item.translateX}px - 50%)) scale(${item.scale})`,
                          opacity: item.opacity,
                          zIndex: item.zIndex,
                          pointerEvents: item.isCenter ? 'auto' : 'none',
                          width: '320px',
                        }}
                      >
                        <div
                          className={`flex flex-col rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 transition-all duration-500 dark:bg-zinc-800/60 dark:ring-white/10 ${
                            item.isCenter
                              ? 'shadow-xl ring-zinc-900/10 dark:ring-white/20'
                              : ''
                          }`}
                        >
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                            {item.feature.title}
                          </h3>
                          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                            {item.feature.description}
                          </p>
                          {item.feature.ctaText && (
                            <div className="mt-6">
                              <Button
                                label={item.feature.ctaText}
                                href="/login"
                                variant="primary"
                                size="sm"
                                ariaLabel={`${item.feature.ctaText} - ${item.feature.title}`}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Feature navigation"
          >
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all min-w-[8px] ${
                  index === currentIndex
                    ? 'w-8 bg-zinc-900 dark:bg-white'
                    : 'w-2 bg-zinc-300 dark:bg-zinc-600'
                }`}
                aria-label={`Go to feature ${index + 1} of ${features.length}`}
                aria-selected={index === currentIndex}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(FeaturesSection);
