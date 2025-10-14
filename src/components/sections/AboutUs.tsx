"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Target } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about-us" className="relative py-8 md:py-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-gray-50 -z-10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="floating-shape-1 absolute top-20 right-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="floating-shape-2 absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-2">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Frovo
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-center">
          {/* Left Side - Story & Mission (Larger) */}
          <div className="space-y-5">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-7 border border-white/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Story</h3>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  At Frovo, we asked:{" "}
                  <span className="font-semibold text-primary">
                    Why should access to essentials stop when the shop closes?
                  </span>
                </p>

                <p>
                  Life doesn't follow store timings. Students studying late,
                  professionals heading home after midnight, families in service
                  apartments, parents needing baby supplies, or pet owners with
                  emergencies — people deserve quick, reliable access anytime.
                </p>

                <p>
                  That's why we created{" "}
                  <span className="font-semibold text-primary">Frovo</span>:{" "}
                  <span className="font-semibold">
                    AI-powered vending machines + a simple app
                  </span>{" "}
                  making shopping instant, stress-free, and fun.
                </p>
              </div>
            </motion.div>

            {/* Mission - Highlighted Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gradient-to-br from-primary via-blue-600 to-primary rounded-2xl p-7 shadow-2xl overflow-hidden group"
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Radial gradient overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)]" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-7 h-7 text-white" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-base font-semibold text-white flex items-center gap-2">
                  <span>
                    Make daily essentials available to everyone, anytime,
                    anywhere.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Ecosystem Image (Smaller, Full Visible) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto group">
              {/* Animated Glow Effect */}
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
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-2xl blur-3xl"
              />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 group-hover:border-primary/40 transition-all duration-500 bg-white">
                <div className="aspect-square relative">
                  <Image
                    src="/images/ecosystem.png"
                    alt="Frovo 24/7 Vending Ecosystem - Daily Essentials Anytime Anywhere"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
