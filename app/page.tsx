'use client';

import { lazy, Suspense } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionPillarsSection from '../components/sections/SolutionPillarsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import IntegrationLogosSection from '../components/sections/IntegrationLogosSection';
import SecuritySection from '../components/sections/SecuritySection';
import Footer from '../components/Footer';

// Lazy load sections below the fold for performance
const VideoDemoSection = lazy(
  () => import('../components/sections/VideoDemoSection')
);
const FeaturesSection = lazy(
  () => import('../components/sections/FeaturesSection')
);
const BuiltForTeamsSection = lazy(
  () => import('../components/sections/BuiltForTeamsSection')
);
const EnterpriseSection = lazy(
  () => import('../components/sections/EnterpriseSection')
);
const IntegrationsSection = lazy(
  () => import('../components/sections/IntegrationsSection')
);
const FAQSection = lazy(() => import('../components/sections/FAQSection'));


// Loading placeholder component
function SectionSkeleton() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl animate-pulse">
        <div className="h-8 bg-zinc-200 rounded dark:bg-zinc-800 mb-4" />
        <div className="h-4 bg-zinc-200 rounded dark:bg-zinc-800" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <IntegrationLogosSection /> 
      <SecuritySection />     
      <ProblemSection />
      <Suspense fallback={<SectionSkeleton />}>
        <VideoDemoSection />
      </Suspense>
      <SolutionPillarsSection />
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BuiltForTeamsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <EnterpriseSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <IntegrationsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
      <Footer />
    </main>
  );
}
