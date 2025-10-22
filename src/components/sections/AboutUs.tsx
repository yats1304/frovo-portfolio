"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Users, Globe } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about-us"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-3">
            About{" "}
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
          <p className="text-base text-muted-foreground">
            Redefining retail through intelligent automation
          </p>
        </motion.div>

        {/* Main Grid: Story Left, Mission + Features Right */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* left side - Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-orange-100/50 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 107, 43, 0.2) 0%, rgba(255, 215, 0, 0.15) 100%)",
                }}
              >
                <Sparkles className="w-6 h-6" style={{ color: "#FF6B2B" }} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold">Our Story</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-foreground">
              <p>
                The future of retail isn't bigger stores.{" "}
                <span className="font-semibold" style={{ color: "#FF6B2B" }}>
                  It's smarter access.
                </span>
              </p>

              <p>
                We built Frovo to eliminate the friction between need and
                fulfillment. No more waiting for stores to open. No more rushing
                before closing time. No more settling for what's nearby instead
                of what you actually need.
              </p>

              <p>
                With{" "}
                <span className="font-semibold" style={{ color: "#FF6B2B" }}>
                  AI-powered machines and intelligent inventory management
                </span>
                , we're creating a{" "}
                <span className="font-semibold">
                  distributed retail network that operates autonomously, serves
                  continuously, and scales infinitely
                </span>
                . This is convenience evolved.
              </p>
            </div>
          </motion.div>

          {/* Rght side - Mission + Features */}
          <div className="space-y-6">
            {/* Mission Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 50%, #FFD700 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)]" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-7 h-7 text-white" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-white leading-relaxed">
                  Democratize access to daily essentials through autonomous
                  retail technology - making convenience truly universal,
                  instant, and effortless.
                </p>
              </div>
            </motion.div>

            {/* Feature Cards - 3 Columns */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 107, 43, 0.2) 0%, rgba(255, 215, 0, 0.15) 100%)",
                  }}
                >
                  <Zap className="w-6 h-6" style={{ color: "#FF6B2B" }} />
                </div>
                <h4 className="text-lg font-bold mb-1 text-center">24/7</h4>
                <p className="text-xs text-muted-foreground text-center">
                  Always Available
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 107, 43, 0.2) 0%, rgba(255, 215, 0, 0.15) 100%)",
                  }}
                >
                  <Users className="w-6 h-6" style={{ color: "#FF6B2B" }} />
                </div>
                <h4 className="text-lg font-bold mb-1 text-center">
                  AI-Powered
                </h4>
                <p className="text-xs text-muted-foreground text-center">
                  Smart Tech
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 107, 43, 0.2) 0%, rgba(255, 215, 0, 0.15) 100%)",
                  }}
                >
                  <Globe className="w-6 h-6" style={{ color: "#FF6B2B" }} />
                </div>
                <h4 className="text-lg font-bold mb-1 text-center">Scalable</h4>
                <p className="text-xs text-muted-foreground text-center">
                  Network
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
