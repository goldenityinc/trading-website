import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import CommodityOverview from '../components/home/CommodityOverview';
import CapabilitiesPreview from '../components/home/CapabilitiesPreview';
import ProcessOverview from '../components/home/ProcessOverview';
import MarketFootprint from '../components/home/MarketFootprint';
import CompliancePreview from '../components/home/CompliancePreview';
import StatsBlock from '../components/shared/StatsBlock';
import CTABanner from '../components/shared/CTABanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustStrip />
      <CommodityOverview />
      <StatsBlock />
      <CapabilitiesPreview />
      <ProcessOverview />
      <MarketFootprint />
      <CompliancePreview />
      <CTABanner />
    </div>
  );
}