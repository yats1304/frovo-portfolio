"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { USER_TYPES } from "@/constants/frovoForYou";
import { useState } from "react";
import { ComingSoonDialog } from "@/components/ui/coming-soon-dialog";

export default function FrovoForYou() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAppDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };
  return (
    <section
      id="for-you"
      className="relative py-12 md:py-4 overflow-hidden min-h-[800px] md:min-h-[600px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-white to-gray-50 -z-10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="floating-shape-1 absolute top-32 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
        <div className="floating-shape-2 absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-poppins mb-3">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Frovo
            </span>{" "}
            For You
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Solutions tailored for everyone — consumers, businesses, and brands
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {USER_TYPES.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.iconBg} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <type.icon className="w-7 h-7 text-primary drop-shadow-sm" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {type.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground mb-4">
                  {type.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-4 flex-1">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300 group/btn text-xs md:text-sm"
                  asChild
                >
                  <Link href={type.ctaLink}>
                    {type.cta}
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </Button>

                {/* Subtle Bottom Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 md:mt-10 mb-8"
        >
          <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-xl p-3 md:p-4 border border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative text-center">
              <p className="text-sm md:text-base font-bold mb-1">
                Ready to experience Frovo?
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                Download the app and get instant access to your essentials
              </p>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs"
                onClick={handleAppDownload}
              >
                Download the Frovo App
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Coming Soon Dialog */}
      <ComingSoonDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}
