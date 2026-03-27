"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface WelcomeGreetingProps {
  onComplete?: () => void;
}

type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

function getTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
}

const TIME_CONFIG = {
  morning: {
    greeting: "Good Morning",
    sub: "Start your day with Frovo",
    bg: "linear-gradient(to top, #ff7e00 0%, #ffb347 20%, #ffd580 45%, #ffe8a1 65%, #c8e6f5 100%)",
    orb: "radial-gradient(circle at 50% 80%, rgba(255,200,50,0.55) 0%, rgba(255,140,0,0.25) 30%, transparent 65%)",
    textColor: "#1a0a00",
    subColor: "rgba(80,40,0,0.70)",
    labelColor: "rgba(100,50,0,0.55)",
    logoFilter: "drop-shadow(0 2px 8px rgba(255,140,0,0.35))",
    barBg: "rgba(0,0,0,0.12)",
    barFill: "linear-gradient(90deg, #FF6B2B, #FFD700)",
    barGlow: "rgba(255,140,0,0.60)",
    percentColor: "rgba(160,70,0,0.85)",
    particleColors: ["#FF6B2B", "#FFD700", "#fff"],
  },
  afternoon: {
    greeting: "Good Afternoon",
    sub: "Your essentials, just a tap away",
    bg: "linear-gradient(to top, #e8f4fd 0%, #b3d9f5 30%, #6ab4f0 65%, #2980cc 100%)",
    orb: "radial-gradient(circle at 50% 15%, rgba(255,255,220,0.45) 0%, rgba(200,230,255,0.20) 35%, transparent 65%)",
    textColor: "#0a2540",
    subColor: "rgba(10,37,64,0.65)",
    labelColor: "rgba(10,37,64,0.45)",
    logoFilter: "none",
    barBg: "rgba(0,0,0,0.10)",
    barFill: "linear-gradient(90deg, #2980cc, #6ab4f0, #FFD700)",
    barGlow: "rgba(41,128,204,0.50)",
    percentColor: "rgba(10,60,120,0.85)",
    particleColors: ["#fff", "#FFD700", "#6ab4f0"],
  },
  evening: {
    greeting: "Good Evening",
    sub: "Grab what you need, anytime",
    bg: "linear-gradient(to top, #FF6B2B 0%, #c0392b 18%, #8e24aa 45%, #4a148c 70%, #1a0533 100%)",
    orb: "radial-gradient(circle at 50% 85%, rgba(255,160,50,0.50) 0%, rgba(200,50,80,0.25) 35%, transparent 65%)",
    textColor: "#fff",
    subColor: "rgba(255,255,255,0.65)",
    labelColor: "rgba(255,255,255,0.40)",
    logoFilter: "brightness(0) invert(1)",
    barBg: "rgba(255,255,255,0.12)",
    barFill: "linear-gradient(90deg, #FF6B2B, #c0392b, #FFD700)",
    barGlow: "rgba(255,107,43,0.70)",
    percentColor: "rgba(255,180,100,0.90)",
    particleColors: ["#FF6B2B", "#FFD700", "#fff"],
  },
  night: {
    greeting: "Good Night",
    sub: "We're open 24/7, just for you",
    bg: "linear-gradient(to top, #0d1b2a 0%, #091420 40%, #050d1a 75%, #020810 100%)",
    orb: "radial-gradient(circle at 50% 25%, rgba(120,160,255,0.12) 0%, rgba(60,80,180,0.06) 40%, transparent 70%)",
    textColor: "#fff",
    subColor: "rgba(255,255,255,0.50)",
    labelColor: "rgba(255,255,255,0.30)",
    logoFilter: "brightness(0) invert(1)",
    barBg: "rgba(255,255,255,0.08)",
    barFill: "linear-gradient(90deg, #4a90e2, #a78bfa, #e0c8ff)",
    barGlow: "rgba(120,160,255,0.55)",
    percentColor: "rgba(160,200,255,0.80)",
    particleColors: ["#fff", "#c8d8ff", "#a78bfa"],
  },
};

const WelcomeGreeting = ({ onComplete }: WelcomeGreetingProps) => {
  const greetingRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const tod = getTimeOfDay();
  const cfg = TIME_CONFIG[tod];

  useEffect(() => {
    // Use gsap.context to properly clean up animations (crucial for React Strict Mode)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set([textRef.current, progressBarRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.7, y: -20 });

      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "back.out(1.5)",
      })
        .to(
          [textRef.current, progressBarRef.current],
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          "-=0.4",
        )
        .to(progressBarRef.current, {
          width: "100%",
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            const progress = Math.round(this.progress() * 100);
            if (percentRef.current)
              percentRef.current.textContent = `${progress}%`;
          },
        })
        .to(
          [textRef.current, progressBarRef.current, logoRef.current],
          {
            opacity: 0,
            y: -30,
            duration: 0.6,
            ease: "power2.in",
            stagger: 0.1,
          },
          "+=0.3",
        )
        .to(greetingRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
    }, greetingRef);

    return () => ctx.revert(); // Cleanup timeline on unmount
  }, [onComplete]);

  return (
    <div
      ref={greetingRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: cfg.bg }}
    >
      {/* Sky atmosphere orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: cfg.orb }}
        aria-hidden="true"
      />

      {/* Stars / particles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(tod === "night" ? 60 : 18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: tod === "night" ? (i % 4 === 0 ? 3 : 1.5) : 6,
              height: tod === "night" ? (i % 4 === 0 ? 3 : 1.5) : 6,
              background: cfg.particleColors[i % cfg.particleColors.length],
              opacity: tod === "night" ? (i % 4 === 0 ? 0.9 : 0.5) : 0.25,
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              animationDelay: `${(i * 0.3) % 4}s`,
              animationDuration: `${4 + (i % 5)}s`,
              boxShadow:
                tod === "night"
                  ? `0 0 4px ${cfg.particleColors[i % cfg.particleColors.length]}`
                  : "none",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center px-6 w-full max-w-md mx-auto flex flex-col items-center gap-6">
        {/* Frovo Logo */}
        <div ref={logoRef} className="mb-2">
          <Image
            src="/images/logo.svg"
            alt="Frovo"
            width={130}
            height={60}
            className="object-contain mx-auto"
            style={{ filter: cfg.logoFilter }}
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="space-y-2 w-full">
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: cfg.labelColor }}
          >
            Welcome to Frovo
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap"
            style={{ color: cfg.textColor }}
          >
            {cfg.greeting}
          </h1>
          <p
            className="text-base md:text-lg font-medium"
            style={{ color: cfg.subColor }}
          >
            {cfg.sub}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-[280px] space-y-2">
          <div
            className="relative h-[3px] rounded-full overflow-hidden w-full"
            style={{ background: cfg.barBg }}
          >
            <div
              ref={progressBarRef}
              className="absolute left-0 top-0 h-full rounded-full w-0"
              style={{
                background: cfg.barFill,
                boxShadow: `0 0 14px ${cfg.barGlow}`,
              }}
            />
          </div>
          <div className="text-right">
            <span
              ref={percentRef}
              className="text-xs font-bold font-mono"
              style={{ color: cfg.percentColor }}
            >
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGreeting;
