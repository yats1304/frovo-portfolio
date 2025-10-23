"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { CAREER_ROLES } from "@/constants/careers";

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative py-8 md:py-10 overflow-hidden min-h-[800px] md:min-h-[600px]"
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
          className="absolute top-20 left-10 w-56 h-56 bg-[#FF6B2B]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins">
              Join the Future of Smart Retail - build with Frovo.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            We&apos;re building something amazing - come grow with us!
          </p>
        </motion.div>

        {/* Roles Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {CAREER_ROLES.map((role, index) => (
            <motion.div
              key={role.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-orange-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Orange hover accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B2B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 107, 43, 0.15) 0%, rgba(255, 215, 0, 0.1) 100%)",
                  color: "#FF6B2B",
                }}
              >
                <Sparkles className="w-3 h-3" />
                {role.department}
              </div>

              <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-[#FF6B2B]">
                {role.role}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {role.description}
              </p>

              {/* Apply Button */}
              <Button
                size="sm"
                className="w-full shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 100%)",
                }}
                asChild
              >
                <Link href="/">
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Don&apos;t see the right role? Send us your resume anyway!
          </p>
          <Button
            size="sm"
            className="rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 px-6"
            style={{
              background: "white",
              color: "#FF6B2B",
              border: "2px solid #FF6B2B",
            }}
            asChild
          >
            <a href="mailto:join@frovo.in" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              join@frovo.in
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
