"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HOW_IT_WORKS_STEPS } from "@/constants/howItWorks";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-18 overflow-hidden min-h-[1333px] md:min-h-[885px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#FF6B2B]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            How{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
              }}
            >
              Frovo
            </span>{" "}
            Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Get what you need in 4 smart steps powered by Frovo, available round
            the clock
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          <svg
            className="hidden lg:block absolute top-24 left-0 w-full h-1 pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <motion.path
              d="M 0 0 Q 25 -10, 50 0 T 100 0"
              stroke="url(#orangeGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="orangeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#FF6B2B" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10"
            >
              {/* Cards */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={50}
                    height={50}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold mb-2 transition-colors duration-300"
                  style={{
                    color: "group-hover:#FF6B2B",
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Orange Bottom Accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #FF6B2B, transparent)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          {/* Orange Gradient Banner */}
          <div
            className="relative rounded-2xl p-6 md:p-8 border-2 overflow-hidden group hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 245, 240, 0.8) 0%, rgba(255, 249, 230, 0.8) 100%)",
              borderColor: "rgba(255, 107, 43, 0.2)",
            }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-lg md:text-xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                  <span style={{ color: "#FF6B2B" }}>
                    Unlock faster checkout & exclusive features
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Download the Frovo app for a seamless experience
                </p>
              </div>
              <Button
                size="lg"
                className="text-base h-12 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                }}
                asChild
              >
                <Link href="#download-app">
                  Get the Frovo App
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
