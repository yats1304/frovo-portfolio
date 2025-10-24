"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import WelcomeGreeting from "@/components/WelcomeGreeting";

// Lazy load all below sections

const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"), {
  loading: () => (
    <div className="min-h-[885px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

// const FrovoForYou = dynamic(() => import("@/components/sections/FrovoForYou"), {
//   loading: () => (
//     <div className="min-h-[600px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
//   ),
// });

// const Franchise = dynamic(() => import("@/components/sections/Franchise"), {
//   loading: () => (
//     <div className="min-h-[700px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
//   ),
// });

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

// const FAQs = dynamic(() => import("@/components/sections/FAQs"), {
//   loading: () => (
//     <div className="min-h-[400px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
//   ),
// });

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => (
    <div className="min-h-[500px] animate-pulse bg-gradient-to-br from-gray-50 to-gray-100" />
  ),
});

export default function Home() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleGreetingComplete = () => {
    setShowGreeting(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {/* Welcome Greeting */}
      {showGreeting && <WelcomeGreeting onComplete={handleGreetingComplete} />}

      {/* Main Content */}
      {showContent && (
        <div className="min-h-screen">
          <Hero />
          <HowItWorks />
          {/* <FrovoForYou /> */}
          {/* <Franchise /> */}
          <BusinessSolutions />
          <AboutUs />
          <Careers />
          {/* <FAQs /> */}
          <Contact />
        </div>
      )}
    </>
  );
}
