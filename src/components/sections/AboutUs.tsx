"use client";

import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="about-us"
      className="relative py-8 md:py-12 lg:py-14 overflow-hidden"
    >
      {/* Background  */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      <div className="container xl:py-14 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-1.5">
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
          <p className="text-xs md:text-sm text-muted-foreground">
            Smart snacking, made simple
          </p>
        </div>

        {/* Main Grid: Story Left, Mission + Features Right */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Left side - Our Story */}
          <div
            data-aos="fade-right"
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 border border-orange-100/50 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center">
                <Image
                  src="/icons/story_icon.svg"
                  alt="Mission"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                Our Story
              </h3>
            </div>
            <div className="space-y-2.5 text-xs md:text-sm leading-relaxed text-foreground">
              <p>
                We started Frovo with one simple thought snacking shouldn&apos;t
                be complicated.
              </p>

              <p>
                Between busy workdays, college hours, and late-night cravings,
                finding something quick, tasty, and trustworthy often meant
                compromise. That&apos;s when we decided to change the game.
              </p>

              <p>
                At{" "}
                <span className="font-semibold" style={{ color: "#FF6B2B" }}>
                  Frovo Marketplace Private Limited
                </span>
                , we&apos;re on a mission to bring your favorite snacks,
                beverages, and everyday essentials closer than ever through
                smart, beautifully designed vending machines that fit right into
                your world.
              </p>

              <p>
                Think of Frovo as your friendly snack stop open 24/7, cashless,
                and always stocked with goodies from India&apos;s most loved
                brands. Whether you&apos;re grabbing a chilled drink, a protein
                bar post-workout, or just a little pick-me-up between meetings,
                Frovo&apos;s got you covered.
              </p>

              <p>
                But we&apos;re not just about convenience. We&apos;re about
                moments: that mid-day coffee, that late-night chocolate, that
                quick energy boost before your next class.{" "}
                <span className="font-semibold" style={{ color: "#FF6B2B" }}>
                  Frovo makes those little moments effortless and a lot more
                  fun.
                </span>
              </p>

              <p className="font-medium">
                So next time you see a Frovo machine, don&apos;t just walk past
                tap, grab, and enjoy. Smart snacking starts here.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-5 lg:space-y-6">
            {/* Mission Box */}
            <div
              data-aos="fade-left"
              className="relative rounded-2xl p-5 md:p-6 lg:p-7 shadow-2xl overflow-hidden group"
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
                <div className="flex items-center gap-2.5 mb-3">
                  <Image
                    src="/icons/target_icon.svg"
                    alt="Target"
                    width={40}
                    height={40}
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    Our Mission
                  </h3>
                </div>
                <div className="space-y-2.5 text-xs md:text-sm leading-relaxed text-white">
                  <p>
                    At Frovo, our mission is simple to make daily essentials
                    available to everyone, anytime, anywhere.
                  </p>
                  <p>
                    We aim to make life a little easier. Whether it&apos;s a
                    snack craving in the middle of work, a refreshing drink
                    after a workout, or something quick to grab before class,
                    Frovo ensures it&apos;s always just a tap away.
                  </p>
                  <p>
                    We believe convenience should be effortless and reliable.
                    Every Frovo machine is designed to keep your favorite brands
                    close, fresh, and ready whenever you are.
                  </p>
                  <p className="font-semibold">
                    In today&apos;s fast-moving world, it&apos;s the small
                    comforts that make the biggest difference and we&apos;re
                    here to make sure you never miss them.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Image
                    src="/icons/open_icon.svg"
                    alt="Open"
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-1 text-center">
                  24/7
                </h4>
                <p className="text-xs text-muted-foreground text-center">
                  Always Open
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto">
                  <Image
                    src="/icons/cashless_icon.svg"
                    alt="Open"
                    width={60}
                    height={60}
                  />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-1 text-center">
                  Cashless
                </h4>
                <p className="text-xs text-muted-foreground text-center">
                  Tap & Go
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Image
                    src="/icons/brand_icon.svg"
                    alt="Brand"
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-1 text-center">
                  Top Brands
                </h4>
                <p className="text-xs text-muted-foreground text-center">
                  Quality Products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder / Team Section */}
        <div className="mt-10 md:mt-14 lg:mt-16">
          {/* Section Header */}
          <div data-aos="fade-up" className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-2">
              Meet our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
                }}
              >
                Founder
              </span>
            </h2>
            <p className="text-sm md:text-xl text-muted-foreground font-medium">
              The people building and scaling Frovo every day
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-3 leading-relaxed">
              Frovo Marketplace Private Limited was founded in Bengaluru with a
              vision to make everyday snacking and essentials effortlessly
              accessible. Built by a team with experience across technology,
              operations, and consumer services, Frovo solves real-world
              convenience gaps in modern workplaces and campuses.
            </p>
          </div>

          {/* Founder Card — open layout matching reference */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">
              {/* Left — standalone photo card with warm peach→orange gradient */}
              <div
                className="relative flex-shrink-0 mx-auto w-[260px] h-[360px] sm:w-[300px] sm:h-auto sm:min-h-[480px] md:w-[420px] rounded-2xl overflow-hidden shadow-lg flex items-end justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, #FFE8D6 0%, #FFBE93 45%, #FF6B2B 100%)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  width={200}
                  height={200}
                  src="/images/karthick1.webp"
                  alt="Karthickayan Manikandaraman - Founder & CEO, Frovo"
                  className="w-full h-full object-contain object-bottom absolute inset-0"
                  unoptimized
                />
              </div>

              {/* Right — text content, transparent (blends with section bg) */}
              <div className="flex-1 flex flex-col justify-center pt-2 text-center sm:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 leading-tight mb-3">
                  Karthickayan
                  <br />
                  Manikandaraman
                </h3>
                <p
                  className="text-base md:text-lg font-bold mb-5"
                  style={{ color: "#FF6B2B" }}
                >
                  Founder &amp; CEO
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-8 max-w-md">
                  With a background in operations and startup scaling,
                  Karthickayan built Frovo to solve everyday accessibility
                  challenges in fast-paced environments. His vision is to make
                  smart snacking effortless and available anytime, anywhere.
                </p>

                {/* LinkedIn CTA */}
                <div className="flex justify-center sm:justify-start">
                  <a
                    href="https://www.linkedin.com/in/karthickayan-manikandaraman-b07ab4155/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-orange-300/60 hover:brightness-110 active:scale-95 transition-all duration-300"
                    style={{ background: "#FF6B2B" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9.006h3.106v1.479h.044c.432-.818 1.487-1.68 3.059-1.68 3.27 0 3.874 2.152 3.874 4.95v6.697zM5.337 7.527a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.926 20.452H3.747V9.006h3.179v11.446zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
