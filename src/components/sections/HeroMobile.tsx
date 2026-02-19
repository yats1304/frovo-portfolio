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

export default function HeroMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 500, easing: "ease-out" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.max(HERO_ADS.length, HERO_IMAGES.length),
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative pt-24 pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-[#FFF8F3] to-white -z-10" />

      {/* Warm orbs */}
      <motion.div
        className="absolute -z-10 rounded-full pointer-events-none"
        style={{
          width: 260,
          height: 260,
          top: "-5%",
          left: "-15%",
          background:
            "radial-gradient(circle, rgba(255,107,43,0.18) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
        animate={{
          x: [0, 18, -12, 0],
          y: [0, -15, 12, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 rounded-full pointer-events-none"
        style={{
          width: 220,
          height: 220,
          top: "5%",
          right: "-12%",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.16) 0%, transparent 70%)",
          filter: "blur(65px)",
        }}
        animate={{
          x: [0, -15, 10, 0],
          y: [0, 20, -10, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="px-5 max-w-[420px] mx-auto space-y-8">
        {/* ── IMAGE SLIDESHOW (Moved to TOP) ── */}
        <div data-aos="fade-down" className="relative w-full">
          {/* Glow behind frame */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.38, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-3 rounded-3xl blur-3xl -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,107,43,0.3) 0%, rgba(255,215,0,0.25) 100%)",
            }}
          />

          {/* Image frame */}
          <div className="relative w-full h-[420px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-orange-200/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                  sizes="(max-width: 420px) 380px, 420px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating card: Open 24/7 — inside top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.45, ease: "backOut" }}
              className="absolute top-3 right-3 flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-white/95 shadow-xl border border-gray-100 backdrop-blur-sm"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            >
              <div className="relative flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-lime-500 block" />
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-lime-500 animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-[9px] text-gray-400 leading-none">Status</p>
                <p className="text-[11px] font-bold text-gray-800 leading-tight">
                  Open 24/7
                </p>
              </div>
            </motion.div>

            {/* Floating card: Tap. Scan. Done. — inside bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.45, ease: "backOut" }}
              className="absolute bottom-3 left-3 flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-white/95 shadow-xl border border-gray-100 backdrop-blur-sm"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #FF6B2B, #FFD700)",
                }}
              >
                <svg
                  className="w-3.5 h-3.5 text-white"
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
                <p className="text-[9px] text-gray-400 leading-none">
                  It&apos;s that simple
                </p>
                <p className="text-[11px] font-bold text-gray-800 leading-tight">
                  Tap. Scan. Done.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Slideshow dots */}
          <div className="hidden justify-center items-center gap-1.5 mt-3">
            {" "}
            {/* Hidden as per screenshot simplicity, or maybe kept? User said "keep positional" not explicitly "hide dots". I'll keep them but simplify/center if needed. Wait, screenshot doesn't show dots. I'll hide them for closer match if needed, or keep for UX. I'll keep them but maybe subtle. */}
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: currentIndex % HERO_IMAGES.length === i ? 18 : 6,
                  height: 6,
                  background:
                    currentIndex % HERO_IMAGES.length === i
                      ? "linear-gradient(90deg, #FF6B2B, #FFD700)"
                      : "rgba(0,0,0,0.15)",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── TEXT CONTENT (Moved below Image, Left Aligned) ── */}
        <div data-aos="fade-up" className="space-y-6 text-left">
          {" "}
          {/* Added text-left */}
          {/* Headline with cycling word */}
          <div className="space-y-2">
            <h1 className="text-[2.1rem] sm:text-4xl font-bold font-poppins leading-[1.1]">
              <span className="flex items-center gap-2 h-[1.5em] overflow-hidden pb-1">
                {" "}
                {/* Removed justify-center implicit */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(6px)", y: -6 }}
                    transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                    className="bg-clip-text pb-1 text-transparent inline-block"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
                      display: "inline-block",
                      position: "absolute",
                      left: 0,
                      top: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {CYCLING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Invisible spacer holds width of longest word */}
                <span className="invisible whitespace-nowrap">
                  {CYCLING_WORDS.reduce((a, b) =>
                    a.length > b.length ? a : b,
                  )}
                </span>
              </span>
              <span className="text-gray-900 block">are one tap away</span>{" "}
              {/* Added block for left alignment break if needed, actually previous code had <br/>. Keep consistent. */}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
              Smart vending machines stocked with your everyday essentials —
              open 24/7, payment in seconds.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAppDownload}
              className="inline-flex items-center justify-center gap-2 h-12 w-full rounded-xl text-base font-semibold text-white shadow-lg active:scale-95 cursor-pointer transition-transform"
              style={{
                background: "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
              }}
            >
              <Image
                src="/icons/download_icon.svg"
                alt="download"
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Download the App →
            </button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full font-semibold border-2 group relative overflow-hidden"
              style={{ borderColor: "#FF6B2B", color: "#FF6B2B" }}
              asChild
            >
              <Link href="/partner">
                <span
                  className="absolute inset-0 -z-10 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"
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
          {/* ── Feature chips (Infinite Marquee) ── */}
          <div className="relative w-full overflow-hidden -mx-4">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FFF8F3] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FFF8F3] to-transparent z-10" />

            <motion.div
              className="flex items-center gap-3 w-max px-4"
              animate={{ x: [0, "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              }}
            >
              {[
                ...QUICK_HIGHLIGHTS,
                ...QUICK_HIGHLIGHTS,
                ...QUICK_HIGHLIGHTS,
                ...QUICK_HIGHLIGHTS,
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/80 border border-gray-100 shadow-sm min-w-max"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #FF6B2B22, #FFD70022)",
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#FF6B2B" }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-800 leading-none">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-gray-400 leading-none mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <ComingSoonDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}
