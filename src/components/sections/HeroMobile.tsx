"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { HERO_ADS, HERO_IMAGES } from "@/constants/hero";
import "aos/dist/aos.css";
import AOS from "aos";

export default function HeroMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

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
    <section className="relative min-h-screen pt-20 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      {/* Floating Shapes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B2B]/10 rounded-full blur-3xl"
          style={{ animation: "aos-shape-1 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"
          style={{ animation: "aos-shape-2 10s ease-in-out infinite" }}
        />
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="space-y-8 min-h-[calc(100vh-160px)] flex flex-col justify-center">
          {/* Vending Machine Slideshow */}
          <div data-aos="fade-left" className="relative mt-8">
            <div className="relative w-full max-w-xs mx-auto sm:max-w-sm group">
              <div className="relative w-full h-[450px] sm:h-[525px]">
                {/* Glow Effect */}
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

                {/* Slideshow Container */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 transition-all duration-500"
                  style={{
                    borderColor: "rgba(255, 107, 43, 0.1)",
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
                        sizes="(max-width: 640px) 300px, 350px"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div data-aos="fade-right" className="space-y-6">
            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold font-poppins leading-[1.15]">
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

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Your everyday essentials, one tap away.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="text-sm sm:text-base h-11 sm:h-12 px-5 sm:px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
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

              {/* Partner Button  */}
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base h-11 sm:h-12 px-5 sm:px-6 font-semibold border-2 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                style={{
                  borderColor: "#FF6B2B",
                  color: "#FF6B2B",
                }}
                asChild
              >
                <Link href="#business-solutions" className="relative z-10">
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
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              {/* Location Badge */}
              <div className="relative group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-50 border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-orange-100/30 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Image
                  src="/icons/location_hero_icon.svg"
                  alt="Location"
                  width={20}
                  height={20}
                />

                <span
                  className="relative text-xs sm:text-sm font-bold"
                  style={{ color: "#FF6B2B" }}
                >
                  Now in Bangalore
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              {/* 24/7 Badge */}
              <div className="relative group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-yellow-50 to-lime-50 border-2 border-yellow-300 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/50 via-lime-100/50 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                  <div className="absolute w-3 h-3 rounded-full border-2 border-lime-500 animate-ping opacity-50" />
                </div>

                <span className="relative text-xs sm:text-sm font-bold text-lime-700">
                  Open 24/7
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            </div>

            {/* Download Banner  */}
            <div
              data-aos="zoom-in-up"
              data-aos-delay="250"
              className="relative rounded-xl p-4 sm:p-5 border-2 overflow-hidden group hover:shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #FFF5F0 0%, #FFF9E6 100%)",
                borderColor: "#FFD7B8",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                    <Image
                      src="/icons/smartphones_icon.svg"
                      alt="Smartphone"
                      width={20}
                      height={20}
                      className="inline-block"
                    />
                    <span style={{ color: "#FF6B2B" }}>
                      Your store in your pocket
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Download the Frovo App
                  </p>
                </div>
                <Button
                  size="default"
                  className="font-semibold whitespace-nowrap text-xs sm:text-sm w-full sm:w-auto shadow-md hover:shadow-lg group"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                  }}
                  asChild
                >
                  <Link href="#download-app">
                    <Image
                      src="/icons/download_app_icon.svg"
                      alt="Download"
                      width={30}
                      height={30}
                      className="inline-block brightness-0 invert"
                    />
                    Download App Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
