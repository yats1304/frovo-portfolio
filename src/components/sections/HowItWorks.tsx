"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HOW_IT_WORKS_STEPS } from "@/constants/howItWorks";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-18 overflow-hidden"
    >
      {/* Background matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-primary/5 -z-10" />

      {/* Floating Shapes like Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
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
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Frovo
            </span>{" "}
            Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your essentials in 4 simple steps — fast, easy, and available
            24/7
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connection Line - Curved Path */}
          <svg
            className="hidden lg:block absolute top-24 left-0 w-full h-1 pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <motion.path
              d="M 0 0 Q 25 -10, 50 0 T 100 0"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="0.2"
                />
                <stop
                  offset="50%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="0.2"
                />
              </linearGradient>
            </defs>
          </svg>

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10"
            >
              {/* Glassmorphism Card like Hero */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                  <span className="text-white font-bold text-xs">
                    {step.number}
                  </span>
                </div>

                {/* Icon with Gradient Background */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-sm">
                  <step.icon className="w-7 h-7 text-primary drop-shadow-sm" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Subtle Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          {/* Glassmorphism Banner like Hero's Sub-Banner */}
          <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-6 md:p-8 border border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto">
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-lg md:text-xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                  <span>The app unlocks more</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Subscriptions, pre-orders, and exclusive offers
                </p>
              </div>
              <Button
                size="lg"
                className="text-base h-12 px-8 font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                asChild
              >
                <Link href="#download-app">
                  Unlock More With the App
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
