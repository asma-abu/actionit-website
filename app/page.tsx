'use client';

import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import VideoDemoSection from '../components/sections/VideoDemoSection';
import SolutionPillarsSection from '../components/sections/SolutionPillarsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import IntegrationLogosSection from '../components/sections/IntegrationLogosSection';
import SecuritySection from '../components/sections/SecuritySection';
import FeaturesSection from '../components/sections/FeaturesSection';
import BuiltForTeamsSection from '../components/sections/BuiltForTeamsSection';
import EnterpriseSection from '../components/sections/EnterpriseSection';
import IntegrationsSection from '../components/sections/IntegrationsSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTASection from '../components/sections/FinalCTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <VideoDemoSection />
      <SolutionPillarsSection />
      <HowItWorksSection />
      <IntegrationLogosSection />
      <SecuritySection />
      <FeaturesSection />
      <BuiltForTeamsSection />
      <EnterpriseSection />
      <IntegrationsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
