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

function IntegratedVideoSection() {
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
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg 
          aria-hidden="true" 
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
          <rect 
            width="100%" 
            height="100%" 
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" 
            strokeWidth="0" 
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Deploy faster</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better workflow
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Video Section */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/* Tab Navigation */}
          <div className="mb-6 flex justify-center">
            <div
              className="isolate inline-flex rounded-lg bg-white/60 p-1 shadow-sm backdrop-blur-sm ring-1 ring-zinc-900/5"
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
                      group relative min-w-0 flex-1 overflow-hidden rounded-md px-3 py-2 text-xs font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 min-h-[44px] flex items-center justify-center
                      ${
                        activeTab === tab.id
                          ? 'bg-zinc-900 text-white shadow'
                          : 'text-zinc-700 hover:bg-zinc-50'
                      }
                    `}
                  >
                    <span className="flex items-center gap-1.5">
                      {Icon}
                      <span className="truncate">{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Video Container */}
          <div className="overflow-hidden rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10">
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

        {/* Content Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true" 
                    className="mt-1 size-5 flex-none text-indigo-600"
                  >
                    <path 
                      d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" 
                      clipRule="evenodd" 
                      fillRule="evenodd" 
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true" 
                    className="mt-1 size-5 flex-none text-indigo-600"
                  >
                    <path 
                      d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" 
                      clipRule="evenodd" 
                      fillRule="evenodd" 
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true" 
                    className="mt-1 size-5 flex-none text-indigo-600"
                  >
                    <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                    <path 
                      d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" 
                      clipRule="evenodd" 
                      fillRule="evenodd" 
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(IntegratedVideoSection);