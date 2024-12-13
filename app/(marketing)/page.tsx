import React from "react";
import HeroSection from "./_components/hero";
import FeatureSection from "./_components/feature";
import SecuritySection from "./_components/security-section";
import TestimonialSection from "./_components/testimonial-section";
import CtaSection from "./_components/cta-section";
import BenefitsSection from "./_components/benefits-section";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <SecuritySection />
      <TestimonialSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
