"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative py-8 md:py-12 lg:py-12 overflow-hidden"
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
          className="text-center mb-6 md:mb-8"
        >
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
        </motion.div>

        {/* Main Grid: Story Left, Mission + Features Right */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Left side - Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
          </motion.div>

          {/* Right side */}
          <div className="space-y-5 lg:space-y-6">
            {/* Mission Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center  mx-auto">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 107, 43, 0.2) 0%, rgba(255, 215, 0, 0.15) 100%)",
                  }}
                >
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
