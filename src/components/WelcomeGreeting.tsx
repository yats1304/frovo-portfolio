"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface WelcomeGreetingProps {
  onComplete?: () => void;
}

const WelcomeGreeting = ({ onComplete }: WelcomeGreetingProps) => {
  const greetingRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const emojiRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set([textRef.current, progressBarRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(emojiRef.current, {
      opacity: 0,
      scale: 0.5,
      rotation: -30,
    });

    tl.to(emojiRef.current, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .to(
        emojiRef.current,
        {
          rotation: 20,
          duration: 0.15,
          yoyo: true,
          repeat: 5,
          ease: "power1.inOut",
        },
        "-=0.3"
      )
      .to(
        [textRef.current, progressBarRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(progressBarRef.current, {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          if (percentRef.current) {
            percentRef.current.textContent = `${progress}%`;
          }
        },
      })
      .to(
        [textRef.current, progressBarRef.current, emojiRef.current],
        {
          opacity: 0,
          y: -30,
          duration: 0.6,
          ease: "power2.in",
          stagger: 0.1,
        },
        "+=0.3"
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
  }, [onComplete]);

  return (
    <div
      ref={greetingRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50"
    >
      <div className="text-center space-y-8 px-4">
        {/* Waving Hand Emoji */}
        <span
          ref={emojiRef}
          className="text-8xl block origin-bottom-right"
          style={{ display: "inline-block" }}
        >
          👋
        </span>

        {/* Text Content  */}
        <div ref={textRef} className="space-y-3">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-wider"
            style={{
              background:
                "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hi Frovians!
          </h1>
          <p
            className="text-lg md:text-xl font-medium"
            style={{ color: "#FF6B2B" }}
          >
            Making essentials accessible, anytime, anywhere...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 md:w-96 mx-auto space-y-3">
          <div className="relative h-1.5 bg-orange-100 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="absolute left-0 top-0 h-full rounded-full w-0"
              style={{
                background:
                  "linear-gradient(90deg, #FF6B2B 0%, #FF8A4C 50%, #FFD700 100%)",
                boxShadow: "0 0 20px rgba(255, 107, 43, 0.6)",
              }}
            />
          </div>
          <div className="text-right">
            <span
              ref={percentRef}
              className="text-sm font-bold font-mono"
              style={{ color: "#FF6B2B" }}
            >
              0%
            </span>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              background:
                i % 3 === 0 ? "#FF6B2B" : i % 3 === 1 ? "#FFD700" : "#9ACD32",
              opacity: 0.4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              boxShadow: `0 0 10px ${
                i % 3 === 0
                  ? "rgba(255, 107, 43, 0.5)"
                  : i % 3 === 1
                  ? "rgba(255, 215, 0, 0.5)"
                  : "rgba(154, 205, 50, 0.5)"
              }`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeGreeting;
