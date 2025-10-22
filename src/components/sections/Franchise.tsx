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
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-56 h-56 bg-[#FF6B2B]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
        />
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
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
              }}
            >
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
              <span className="text-[#FF6B2B]">24/7 smart store.</span>
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
                  className="flex items-start gap-2.5 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 107, 43, 0.2) 0%, rgba(255, 215, 0, 0.15) 100%)",
                    }}
                  >
                    <Check className="w-3 h-3" style={{ color: "#FF6B2B" }} />
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
              className="relative rounded-lg p-3.5 border-2 overflow-hidden group hover:shadow-lg transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 245, 240, 0.8) 0%, rgba(255, 249, 230, 0.8) 100%)",
                borderColor: "rgba(255, 107, 43, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <p className="relative text-xs sm:text-sm font-semibold flex items-center gap-2">
                <Sparkles
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#FF6B2B" }}
                />
                <span style={{ color: "#FF6B2B" }}>
                  {FRANCHISE_INFO.specialNote}
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
                Apply for a Frovo Franchise
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
            <div className="relative max-w-sm mx-auto lg:max-w-md group">
              {/* Animated Orange Glow Effect */}
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

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 hover:border-[#FF6B2B]/40 transition-all duration-500">
                <div className="aspect-[4/5] relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src="/images/owner_with_machine.webp"
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
                className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl p-3 border-2 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                style={{ borderColor: "rgba(255, 107, 43, 0.3)" }}
              >
                <div className="text-center">
                  <div
                    className="text-xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                    }}
                  >
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
