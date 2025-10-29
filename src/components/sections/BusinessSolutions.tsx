"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  BUSINESS_LOCATIONS,
  BUSINESS_IMAGES,
} from "@/constants/businessSolutions";
import "aos/dist/aos.css";
import AOS from "aos";
import { AnimatePresence, motion } from "framer-motion";

export default function BusinessSolutions() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BUSINESS_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="business-solutions"
      className="relative py-8 md:py-10 overflow-hidden min-h-[800px] md:min-h-[700px]"
    >
      {/* Background  */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Title  */}
        <div data-aos="fade-up" className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-2">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
              }}
            >
              Frovo
            </span>{" "}
            for Businesses
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Rentals & Corporate Solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column */}
          <div data-aos="fade-right" className="space-y-5">
            {/* Perfect For Section */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                Perfect for:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BUSINESS_LOCATIONS.map((location, index) => (
                  <div
                    key={location.name}
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 75}
                    className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-2.5 border border-orange-100/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={location.icon}
                        alt={location.name}
                        width={30}
                        height={30}
                      />
                    </div>
                    <span className="text-sm font-medium">{location.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div
              data-aos="zoom-in"
              data-aos-delay="350"
              className="relative rounded-lg p-4 border-2 overflow-hidden group hover:shadow-lg transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 245, 240, 0.8) 0%, rgba(255, 249, 230, 0.8) 100%)",
                borderColor: "rgba(255, 107, 43, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <p className="relative text-base sm:text-lg font-bold text-center flex items-center justify-center gap-2">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                  }}
                  className="bg-clip-text text-transparent"
                >
                  Your community + Frovo = instant 24/7 smart retail
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="default"
              className="w-full sm:w-auto text-sm h-10 px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
              }}
              asChild
            >
              <Link href="https://forms.gle/jdpXENfo3iFogJyh7">
                Request a Business Quote
                <span className="ml-2 group-hover:translate-x-1 transition-transform text-xl">
                  →
                </span>
              </Link>
            </Button>
          </div>

          {/* Right Column */}
          <div data-aos="fade-left" className="relative">
            <div className="relative max-w-[420px] mx-auto">
              {/* Animated Orange Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-2xl blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 107, 43, 0.3) 0%, rgba(255, 215, 0, 0.2) 100%)",
                }}
              />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 hover:border-[#FF6B2B]/40 transition-all duration-500">
                <div className="aspect-[4/5] relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={BUSINESS_IMAGES[currentImageIndex].src}
                        alt={BUSINESS_IMAGES[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Image Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-md rounded-lg p-2 border border-white/30">
                  <p className="text-xs font-bold text-white text-center drop-shadow-lg">
                    {BUSINESS_IMAGES[currentImageIndex].label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
