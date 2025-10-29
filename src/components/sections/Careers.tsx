"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Rocket, Lightbulb } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";

export default function Careers() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="careers"
      className="relative py-8 md:py-14 overflow-hidden min-h-screen flex flex-col"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 w-full relative z-10">
        <div className="text-center pt-8 pb-12">
          {/* Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6B2B]/10 to-[#FFD700]/10 rounded-full border border-[#FF6B2B]/20 mb-6"
          >
            <span className="text-sm font-semibold text-[#FF6B2B]">
              We're Hiring!
            </span>
          </div>

          {/* Main Heading */}
          <h2
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4"
          >
            <span className="bg-gradient-to-r from-[#FF6B2B] via-[#FF8C42] to-[#FFD700] bg-clip-text text-transparent">
              Join the Future of Smart Retail
            </span>
            <br />
            <div className="mt-2">
              <span className="text-gray-900">build with </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
                }}
              >
                Frovo
              </span>
            </div>
          </h2>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We&apos;re building something amazing - come grow with us!
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200"
            >
              <Users className="w-4 h-4 text-[#9ACD32]" />
              <span className="text-sm font-medium text-gray-700">
                Growing Team
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200"
            >
              <Rocket className="w-4 h-4 text-[#FF6B2B]" />
              <span className="text-sm font-medium text-gray-700">
                Fast-Paced Environment
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200"
            >
              <Lightbulb className="w-4 h-4 text-[#dacb20]" />
              <span className="text-sm font-medium text-gray-700">
                Innovation First
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="flex-1 flex justify-center items-center flex-col">
          <div
            data-aos="fade-down"
            data-aos-delay="700"
            className="relative mb-6"
          >
            <h3 className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-10">
              Ready to join us?
            </h3>
          </div>

          {/* Button */}
          <div data-aos="flip-up" data-aos-delay="800">
            <Button
              size="lg"
              variant="outline"
              className="text-base h-14 px-8 font-bold border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
              style={{
                borderColor: "#FF6B2B",
                color: "#FF6B2B",
              }}
              asChild
            >
              <Link href="/jobs">
                <span
                  className="absolute inset-0 -z-10 transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFD700 0%, #9ACD32 100%)",
                  }}
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                  View Open Positions
                </span>
              </Link>
            </Button>
          </div>

          {/* Additional Info */}
          <div data-aos="fade-up" data-aos-delay="800">
            <p className="mt-6 text-sm text-gray-500">
              Join <span className="font-semibold text-[#FF6B2B]">20+</span>{" "}
              talented people building the future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
