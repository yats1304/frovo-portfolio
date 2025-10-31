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
    const greetingShown = localStorage.getItem("frovo_greeting_shown");

    if (!greetingShown) {
      // First time visitor show greeting
      setShowGreeting(true);
    } else {
      // Already visited skip greeting and show content directly
      setGreetingComplete(true);
    }
  }, []);

  const handleGreetingComplete = () => {
    // Mark greeting as shown in localStorage
    localStorage.setItem("frovo_greeting_shown", "true");

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
