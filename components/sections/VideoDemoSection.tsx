'use client';

import { useState, useCallback, memo, useMemo } from 'react';
import Container from '../ui/Container';
import { videoTabs } from '../../config/content';

const iconMap: Record<string, React.ReactElement> = {
  Calendar: (
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
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  MessageSquare: (
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
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
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

function VideoDemoSection() {
  const [activeTab, setActiveTab] = useState(
    videoTabs?.[0]?.id ?? ''
  );
  const [videoError, setVideoError] = useState<string | null>(null);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    setVideoError(null);
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError('Failed to load video. Please try again later.');
  }, []);

  const activeVideo = useMemo(() => {
    if (!videoTabs || videoTabs.length === 0) return null;
    return videoTabs.find((tab) => tab.id === activeTab) ?? videoTabs[0];
  }, [activeTab]);

  if (!videoTabs || videoTabs.length === 0) {
    return null;
  }

  return (
    <section
      id="demo"
      className="py-24 sm:py-32"
      aria-labelledby="demo-heading"
    >
      <Container>
        <div className="mx-auto max-w-[45rem]">
          <div className="flex justify-center">
            <div
              className="isolate inline-flex rounded-lg bg-white/60 p-1 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/60 dark:ring-white/10"
              role="tablist"
              aria-label="Video demo tabs"
            >
              {videoTabs.map((tab) => {
                const Icon = iconMap[tab.icon];
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`${tab.id}-panel`}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      group relative min-w-0 flex-1 overflow-hidden rounded-md px-4 py-3 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan-primary,#00B4D8)] min-h-[44px] flex items-center justify-center
                      ${
                        activeTab === tab.id
                          ? 'bg-zinc-900 text-white shadow dark:bg-white dark:text-zinc-900'
                          : 'text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-700'
                      }
                    `}
                  >
                    <span className="flex items-center gap-2">
                      {Icon}
                      <span className="truncate">{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10">
            {activeVideo && (
              <div>
                {videoError ? (
                  <div className="flex h-64 items-center justify-center p-8 text-white">
                    <div className="text-center">
                      <p className="text-lg font-medium">{videoError}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setVideoError(null);
                          const video = document.getElementById(
                            `${activeTab}-panel`
                          ) as HTMLVideoElement;
                          if (video) {
                            video.load();
                          }
                        }}
                        className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                ) : (
                  <video
                    id={`${activeTab}-panel`}
                    key={activeVideo.videoUrl}
                    className="h-auto w-full"
                    controls
                    autoPlay
                    muted
                    playsInline
                    aria-labelledby={`${activeTab}-tab`}
                    onError={handleVideoError}
                  >
                    <source src={activeVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(VideoDemoSection);
