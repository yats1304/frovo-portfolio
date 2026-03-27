"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { HERO_ADS, HERO_IMAGES, QUICK_HIGHLIGHTS } from "@/constants/hero";
import { ComingSoonDialog } from "@/components/ui/coming-soon-dialog";
import "aos/dist/aos.css";
import AOS from "aos";

const CYCLING_WORDS = ["Snacks", "Essentials", "Drinks", "Everything"];

export default function HeroDesktop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 500, easing: "ease-out" });
  }, []);

  // Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.max(HERO_ADS.length, HERO_IMAGES.length),
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Headline word cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currentImage = HERO_IMAGES[currentIndex % HERO_IMAGES.length];

  const handleAppDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-[#FFF8F3] to-white -z-10" />

      {/* Warm orbs */}
      <motion.div
        className="absolute -z-10 rounded-full pointer-events-none"
        style={{
          width: 520,
          height: 520,
          top: "-10%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(255,107,43,0.18) 0%, rgba(255,107,43,0.05) 60%, transparent 100%)",
          filter: "blur(72px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 rounded-full pointer-events-none"
        style={{
          width: 440,
          height: 440,
          top: "-5%",
          right: "-6%",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.16) 0%, rgba(255,200,0,0.04) 60%, transparent 100%)",
          filter: "blur(88px)",
        }}
        animate={{
          x: [0, -25, 18, 0],
          y: [0, 30, -15, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container max-w-[1400px] mx-auto px-16 xl:px-20">
        <div className="grid grid-cols-[55%_45%] gap-12 items-center min-h-[calc(100vh-180px)]">
          {/* ── LEFT COLUMN ── */}
          <div data-aos="fade-right" className="space-y-8">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/80 text-sm font-semibold text-orange-600">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block" />
              Launching Soon in Bangalore
            </div>

            {/* Headline with cycling word */}
            <div className="space-y-2">
              <h1 className="text-5xl xl:text-[3.75rem] font-bold font-poppins leading-[1.1]">
                {/* Cycling animated word */}
                <span className="flex items-center gap-3 h-[1.5em] overflow-hidden pb-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -60, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="bg-clip-text pb-1.5 text-transparent inline-block"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
                      }}
                    >
                      {CYCLING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="text-gray-900">are one tap away</span>
              </h1>

              <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-xl pt-1">
                Smart vending machines stocked with your everyday essentials -
                open 24/7, payment in seconds.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              {/* Primary — Download */}
              <button
                onClick={handleAppDownload}
                className="relative group inline-flex items-center gap-2 h-12 px-6 rounded-xl text-base font-semibold text-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                }}
              >
                {/* Pulse ring on hover */}
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "0 0 0 4px rgba(255,107,43,0.25)" }}
                />
                <Image
                  src="/icons/download_icon.svg"
                  alt="download"
                  width={20}
                  height={20}
                  className="brightness-0 invert"
                />
                Download the App
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>

              {/* Secondary — Partner */}
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-6 font-semibold border-2 transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden"
                style={{ borderColor: "#FF6B2B", color: "#FF6B2B" }}
                asChild
              >
                <Link href="/partner" className="relative z-10">
                  <span
                    className="absolute inset-0 -z-10 transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-left"
                    style={{
                      background:
                        "linear-gradient(135deg, #FFD700 0%, #9ACD32 100%)",
                    }}
                  />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Partner With Frovo
                  </span>
                </Link>
              </Button>
            </div>

            {/* Feature chips row */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex items-center gap-4 pt-2 flex-wrap"
            >
              {QUICK_HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #FF6B2B22, #FFD70022)",
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#FF6B2B" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800 leading-none">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-gray-400 leading-none mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            data-aos="fade-left"
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px]">
              {/* Pulsing glow behind image */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl blur-3xl -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,107,43,0.35) 0%, rgba(255,215,0,0.3) 100%)",
                }}
              />

              {/* Image frame */}
              <div className="relative w-full h-[560px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-orange-200/50 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      className="object-cover"
                      priority={currentIndex === 0}
                      sizes="400px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* ── Floating card: Open 24/7 (top-right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
                className="absolute -top-4 -right-6 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white shadow-xl border border-gray-100"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <div className="relative flex-shrink-0">
                  <span className="w-3 h-3 rounded-full bg-lime-500 block" />
                  <span className="absolute inset-0 w-3 h-3 rounded-full bg-lime-500 animate-ping opacity-60" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 leading-none">
                    Status
                  </p>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    Open 24/7
                  </p>
                </div>
              </motion.div>

              {/* ── Floating card: Tap. Scan. Done. (bottom-left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
                className="absolute -bottom-4 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xl border border-gray-100"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #FF6B2B, #FFD700)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 leading-none">
                    It&apos;s that simple
                  </p>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    Tap. Scan. Done.
                  </p>
                </div>
              </motion.div>

              {/* ── Slideshow dot indicators ── */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: currentIndex % HERO_IMAGES.length === i ? 24 : 8,
                      height: 8,
                      background:
                        currentIndex % HERO_IMAGES.length === i
                          ? "linear-gradient(90deg, #FF6B2B, #FFD700)"
                          : "rgba(0,0,0,0.15)",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComingSoonDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}
