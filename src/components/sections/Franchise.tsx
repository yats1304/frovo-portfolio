"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { FRANCHISE_BENEFITS, FRANCHISE_INFO } from "@/constants/franchise";

export default function Franchise() {
  return (
    <section
      id="franchise"
      className="relative py-8 md:py-6 overflow-hidden min-h-[800px] md:min-h-[700px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-blue-50 -z-10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="floating-shape-1 absolute top-20 right-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="floating-shape-2 absolute bottom-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-2">
            Franchise With{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Frovo
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins leading-tight">
              Start your own{" "}
              <span className="text-primary">24/7 smart store.</span>
            </h3>

            {/* Bullets */}
            <ul className="space-y-2.5">
              {FRANCHISE_BENEFITS.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2.5 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Special Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-lg p-3.5 border border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <p className="relative text-xs sm:text-sm font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                {FRANCHISE_INFO.specialNote}
              </p>
            </motion.div>

            {/* CTA Button */}
            <Button
              size="default"
              className="w-full sm:w-auto text-sm h-10 px-6 font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <Link href="/">
                Apply for a Frovo Franchise
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-md group">
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

              {/* Image Container with Enhanced Styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-primary/20">
                <div className="aspect-[4/5] relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src="/images/owner_with_machine.jpg"
                    alt="Franchise Owner with Vending Machine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl p-3 border-2 border-primary/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
              >
                <div className="text-center">
                  <div className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {FRANCHISE_INFO.monthlyPotential}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Monthly Potential
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
