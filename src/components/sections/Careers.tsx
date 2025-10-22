"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
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
        <div className="floating-shape-1 absolute top-20 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="floating-shape-2 absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-2">
            Join the Future of Retail
          </h2>
          <p className="text-sm text-muted-foreground">
            We&apos;re building something amazing- come grow with us!
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
              className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {role.department}
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {role.role}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {role.description}
              </p>

              {/* Apply Button */}
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300 group/btn"
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
            className="rounded-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 px-6"
            asChild
          >
            <a
              href={"mailto:careers@frovo.in"}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              join@frovo.in
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
