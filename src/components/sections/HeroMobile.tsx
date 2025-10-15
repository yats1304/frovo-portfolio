"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import {
  HERO_ADS,
  QUICK_HIGHLIGHTS,
  HERO_STATS,
  HERO_IMAGES,
} from "@/constants/hero";

export default function HeroMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.max(HERO_ADS.length, HERO_IMAGES.length)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get current items (with fallback if arrays have different lengths)
  const currentAd = HERO_ADS[currentIndex % HERO_ADS.length];
  const currentImage = HERO_IMAGES[currentIndex % HERO_IMAGES.length];

  return (
    <section className="relative min-h-screen pt-20 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-secondary/10 -z-10" />

      {/* Floating Shapes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="space-y-8 min-h-[calc(100vh-160px)] flex flex-col justify-center">
          {/* Right Column First on Mobile - Vending Machine Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-8"
          >
            <div className="relative w-full max-w-xs mx-auto sm:max-w-sm group">
              {/* ✅ FIXED: Explicit heights for mobile/desktop */}
              <div className="relative w-full h-[450px] sm:h-[525px]">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl"
                />

                {/* SLIDESHOW CONTAINER - SYNCED */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group-hover:border-primary/20 transition-all duration-500">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{
                        duration: 0.5,
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
                        sizes="(max-width: 640px) 300px, 350px"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Live Ads Card - SYNCED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -bottom-3 -right-4 sm:-right-6 bg-white rounded-xl shadow-2xl p-2.5 sm:p-3 w-[160px] sm:w-[180px] h-[125px] sm:h-[140px] border-2 border-primary/10 hover:border-primary/30 overflow-hidden flex flex-col cursor-pointer transition-all duration-300"
              >
                <Badge className="mb-1 text-xs bg-secondary text-secondary-foreground w-fit flex-shrink-0">
                  Live Ads
                </Badge>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 flex flex-col min-h-0 overflow-hidden"
                  >
                    <div className="text-lg sm:text-xl mb-0.5 flex-shrink-0">
                      {currentAd.logo}
                    </div>

                    <div className="flex-1 flex flex-col justify-center min-h-0 space-y-0.5">
                      <p className="font-bold text-xs sm:text-sm line-clamp-1 leading-tight">
                        {currentAd.brand}
                      </p>
                      <p className="font-semibold text-[10px] sm:text-xs line-clamp-2 leading-tight">
                        {currentAd.message}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-1 leading-tight">
                        {currentAd.tagline}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-1 justify-center mt-1.5 flex-shrink-0">
                  {HERO_ADS.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentIndex % HERO_ADS.length
                          ? "w-3 sm:w-4 bg-primary"
                          : "w-1 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold font-poppins leading-[1.15]">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                  Life Can&apos;t Wait.
                </span>
                <br />
                Grab & Go with Frovo
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Snacks, drinks, essentials — anytime, anywhere. AI-powered
                vending machines + the Frovo app.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="text-sm sm:text-base h-11 sm:h-12 px-5 sm:px-6 font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <Link href="/">
                  <Smartphone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Download the App
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base h-11 sm:h-12 px-5 sm:px-6 font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                asChild
              >
                <Link href="#franchise">
                  <span className="relative z-10">Partner With Frovo</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {QUICK_HIGHLIGHTS.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <highlight.icon className="w-5 h-5 text-primary drop-shadow-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 py-4"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Sub-Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-xl p-4 sm:p-5 border border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-base mb-0.5 flex items-center gap-2">
                    Your store in your pocket
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Download the Frovo App
                  </p>
                </div>
                <Button
                  size="default"
                  className="font-semibold whitespace-nowrap text-sm w-full sm:w-auto shadow-md hover:shadow-lg"
                  asChild
                >
                  <Link href="#download-app">Download App Now</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
