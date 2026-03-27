"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Rocket,
  Lightbulb,
  ArrowRight,
  Zap,
  Target,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const BENEFITS = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate individuals who lift each other up.",
  },
  {
    icon: Rocket,
    title: "Fast Growth",
    description:
      "Accelerate your career in a high-velocity startup environment.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We don't follow trends, we set them with smart tech.",
  },
];

export default function Careers() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="careers"
      className="relative py-24 min-h-screen overflow-hidden flex flex-col justify-center"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      {/* Static Background Orbs (Replaced Motion) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 -z-10 animate-pulse" />

      <div className="container px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div
            data-aos="fade-right"
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 shadow-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-semibold text-orange-600 tracking-wide uppercase">
                We're Hiring
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              Build the <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] via-[#FF8C42] to-[#FFD700]">
                Future of Retail
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join a team of visionaries, builders, and dreamers. At Frovo,
              we're not just selling products; we're redefining how the world
              shops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="h-14 w-56 px-16 text-base rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4C] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] group"
                asChild
              >
                <Link href="/jobs">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-500" />
                <span>Mission Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>High Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-lime-500" />
                <span>Remote Friendly</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 to-yellow-100/40 rounded-[3rem] blur-3xl -z-10" />

            <div className="grid gap-5 relative z-10">
              {BENEFITS.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                  className="group bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-orange-100/50">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
