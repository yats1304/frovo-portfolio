"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import AboutUs from "@/components/sections/AboutUs";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";
import WelcomeGreeting from "@/components/WelcomeGreeting";

export default function Home() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingComplete, setGreetingComplete] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Check if this is a new session
    const isNewSession = !sessionStorage.getItem("session_started");

    if (isNewSession) {
      // Mark session as started
      sessionStorage.setItem("session_started", "true");

      // Show greeting on fresh load/new session
      setShowGreeting(true);
    } else {
      // User navigated via back button or link within existing session
      setGreetingComplete(true);
    }
  }, []);

  const handleGreetingComplete = () => {
    setShowGreeting(false);

    // Small delay before showing content
    setTimeout(() => {
      setGreetingComplete(true);
    }, 100);
  };

  // Prevent hydration mismatch
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* Welcome Greeting */}
      {showGreeting && !greetingComplete && (
        <WelcomeGreeting onComplete={handleGreetingComplete} />
      )}

      {/* Main Content */}
      {greetingComplete && (
        <div className="min-h-screen">
          <Hero />
          <HowItWorks />
          <BusinessSolutions />
          <AboutUs />
          <Careers />
          <Contact />
        </div>
      )}
    </>
  );
}
