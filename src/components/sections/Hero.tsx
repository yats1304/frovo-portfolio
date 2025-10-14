"use client";

import { useEffect, useState } from "react";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
