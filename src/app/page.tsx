import dynamic from "next/dynamic";

// ✅ CRITICAL: Keep Hero as direct import (above-the-fold, loads immediately)
import Hero from "@/components/sections/Hero";

// ✅ OPTIMIZATION: Lazy load all below-the-fold sections
// These load AFTER the hero is visible, reducing initial JavaScript by ~60%

const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"), {
  loading: () => (
    <div className="min-h-[885px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

const FrovoForYou = dynamic(() => import("@/components/sections/FrovoForYou"), {
  loading: () => (
    <div className="min-h-[600px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

const Franchise = dynamic(() => import("@/components/sections/Franchise"), {
  loading: () => (
    <div className="min-h-[700px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

const BusinessSolutions = dynamic(
  () => import("@/components/sections/BusinessSolutions"),
  {
    loading: () => (
      <div className="min-h-[600px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
    ),
  }
);

const AboutUs = dynamic(() => import("@/components/sections/AboutUs"), {
  loading: () => (
    <div className="min-h-[500px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

const Careers = dynamic(() => import("@/components/sections/Careers"), {
  loading: () => (
    <div className="min-h-[600px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

const FAQs = dynamic(() => import("@/components/sections/FAQs"), {
  loading: () => (
    <div className="min-h-[400px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => (
    <div className="min-h-[500px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero loads immediately - critical for LCP */}
      <Hero />

      {/* Below-the-fold sections - lazy loaded to improve TBT */}
      <HowItWorks />
      <FrovoForYou />
      <Franchise />
      <BusinessSolutions />
      <AboutUs />
      <Careers />
      <FAQs />
      <Contact />
    </div>
  );
}
