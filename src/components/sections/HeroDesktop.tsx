"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { HERO_ADS, HERO_IMAGES } from "@/constants/hero";

export default function HeroDesktop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.max(HERO_ADS.length, HERO_IMAGES.length)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  
  const currentImage = HERO_IMAGES[currentIndex % HERO_IMAGES.length];

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-visible">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      {/* Floating Shapes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B2B]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-[1400px] mx-auto px-16 xl:px-20">
        <div className="grid grid-cols-[58%_42%] gap-10 items-center min-h-[calc(100vh-180px)]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl xl:text-6xl font-bold font-poppins leading-[1.1]">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
                  }}
                >
                  Life Can&apos;t Wait.
                </span>
                <br />
                Grab & Go with Frovo
              </h1>

              <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Your everyday essentials, one tap away.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="text-base h-12 px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                }}
                asChild
              >
                <Link href="#download-app">
                  <Image
                    src="/icons/download_icon.svg"
                    alt="download"
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                  Download the App
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </Button>

              {/* Partner Button */}
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-6 font-semibold border-2 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                style={{
                  borderColor: "#FF6B2B",
                  color: "#FF6B2B",
                }}
                asChild
              >
                <Link
                  href="https://forms.gle/jdpXENfo3iFogJyh7"
                  className="relative z-10"
                >
                  {/* Background Fill Animation */}
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

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 pt-4"
            >
              {/* Location Badge */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange-50 border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-orange-100/30 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Image
                  src="/icons/location_icon.svg"
                  alt="Location"
                  width={20}
                  height={20}
                />

                <span
                  className="relative text-sm font-bold"
                  style={{ color: "#FF6B2B" }}
                >
                  Now in Bangalore
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.div>

              {/* 24/7 Badge  */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-yellow-50 to-lime-50 border-2 border-yellow-300 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/50 via-lime-100/50 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                  <div className="absolute w-3 h-3 rounded-full border-2 border-lime-500 animate-ping opacity-50" />
                </div>

                <span className="relative text-sm font-bold text-lime-700">
                  Open 24/7
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.div>
            </motion.div>

            {/* Download Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative group overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50/80 via-amber-50 to-yellow-50 p-5 shadow-sm hover:shadow-lg transition-all duration-300 max-w-md"
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

              <div className="relative flex items-center justify-between gap-4">
                {/* Text Section */}
                <div>
                  <h4 className="text-base font-semibold flex items-center gap-2">
                    <Image
                      src="/icons/smartphones_icon.svg"
                      alt="Smartphone"
                      width={20}
                      height={20}
                      className="inline-block"
                    />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B2B] to-[#FFD700]">
                      Your store in your pocket
                    </span>
                  </h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Download the Frovo App
                  </p>
                </div>

                {/* CTA Button */}
                <Link href="#download-app" className="flex-none">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#FF6B2B] via-[#FF8A4C] to-[#FFD700] shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Image
                      src="/icons/download_app_icon.svg"
                      alt="Download"
                      width={30}
                      height={30}
                      className="inline-block brightness-0 invert"
                    />
                    Download App
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[380px] group">
              <div className="relative w-full h-[570px]">
                {/* Glow Effect  */}
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
                  className="absolute inset-0 rounded-3xl blur-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 107, 43, 0.3) 0%, rgba(255, 215, 0, 0.3) 100%)",
                  }}
                />

                {/* Image Slideshow */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-500"
                  style={{
                    borderColor: "rgba(255, 107, 43, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255, 107, 43, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255, 107, 43, 0.1)";
                  }}
                >
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
                        sizes="380px"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
