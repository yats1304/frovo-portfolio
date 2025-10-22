"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import {
  BUSINESS_LOCATIONS,
  BUSINESS_IMAGES,
} from "@/constants/businessSolutions";

export default function BusinessSolutions() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BUSINESS_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="business-solutions"
      className="relative py-8 md:py-6 overflow-hidden min-h-[800px] md:min-h-[700px]"
    >
      {/* Background  */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-56 h-56 bg-yellow-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-[#FF6B2B]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Title  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {/* Perfect For Section */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                Perfect for:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BUSINESS_LOCATIONS.map((location, index) => (
                  <motion.div
                    key={location.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-2.5 border border-orange-100/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 107, 43, 0.2) 0%, rgba(255, 215, 0, 0.15) 100%)",
                      }}
                    >
                      <location.icon
                        className="w-4 h-4"
                        style={{ color: "#FF6B2B" }}
                      />
                    </div>
                    <span className="text-xs font-medium">{location.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-lg p-4 border-2 overflow-hidden group hover:shadow-lg transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 245, 240, 0.8) 0%, rgba(255, 249, 230, 0.8) 100%)",
                borderColor: "rgba(255, 107, 43, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <p className="relative text-base sm:text-lg font-bold text-center flex items-center justify-center gap-2">
                <Sparkles
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#FF6B2B" }}
                />
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                  }}
                  className="bg-clip-text text-transparent"
                >
                  Your community + Frovo = instant 24/7 smart retail.
                </span>
              </p>
            </motion.div>

            {/* CTA Button */}
            <Button
              size="default"
              className="w-full sm:w-auto text-sm h-10 px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
              }}
              asChild
            >
              <Link href="/">
                Request a Business Quote
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
