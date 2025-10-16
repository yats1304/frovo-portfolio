"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/footer";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 overflow-hidden">
      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-16 md:pt-20 pb-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-4 group">
              <span className="text-3xl font-bold font-poppins bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                Frovo
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              AI-powered vending machines making daily essentials available
              anytime, anywhere.
            </p>

            {/* Social Media Icons */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: "50%" }}
                    className="flex items-center justify-center w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] bg-white border border-gray-200 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm group overflow-hidden"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-5 text-foreground relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="group-hover:underline underline-offset-4">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-5 text-foreground relative inline-block">
              More
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.slice(4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="group-hover:underline underline-offset-4">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-5 text-foreground relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@frovo.in"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4 break-all"
                >
                  contact@frovo.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
                >
                  +91-XXXXXXXXXX
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Column */}
          <div className="lg:col-span-12 xl:col-span-2 xl:col-start-11">
            <h3 className="text-base font-bold mb-5 text-foreground relative inline-block">
              Download App
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>

            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Get exclusive offers and seamless shopping
            </p>

            <div className="flex flex-row xl:flex-col gap-3">
              {/* Google Play Button */}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 xl:w-full group"
              >
                <div className="relative flex items-center gap-3 h-12 px-4 bg-black hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  <svg
                    className="w-7 h-7 flex-shrink-0 relative z-10"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M9.93 2.4C9.2 2.75 8.8 3.7 8.8 5.1V42.9C8.8 44.3 9.2 45.25 9.93 45.6L10.15 45.75L29.8 26.1V25.85V25.6L10.15 5.95L9.93 2.4Z"
                      fill="#00D6FF"
                    />

                    <path
                      d="M36.35 32.65L29.8 26.1V25.85V25.6L36.4 19.05L36.65 19.2L44.55 23.65C46.8 25 46.8 27.35 44.55 28.7L36.65 33.15L36.35 32.65Z"
                      fill="#00E676"
                    />

                    <path
                      d="M36.65 33.15L29.8 26.1L10.15 45.75C10.85 46.45 12.05 46.55 13.45 45.75L36.65 33.15Z"
                      fill="#FFD600"
                    />

                    <path
                      d="M36.65 19.2L13.45 6.6C12.05 5.8 10.85 5.9 10.15 6.6L29.8 26.1L36.65 19.2Z"
                      fill="#FF3D00"
                    />
                  </svg>

                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-[9px] text-gray-300 leading-none uppercase tracking-wide">
                      GET IT ON
                    </span>
                    <span className="text-sm font-semibold text-white leading-tight mt-0.5">
                      Google Play
                    </span>
                  </div>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 xl:w-full group"
              >
                <div className="relative flex items-center gap-3 h-12 px-4 bg-black hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  <svg
                    className="w-7 h-7 flex-shrink-0 text-white relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>

                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-[9px] text-gray-300 leading-none uppercase tracking-wide">
                      Download on the
                    </span>
                    <span className="text-sm font-semibold text-white leading-tight mt-0.5">
                      App Store
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-gray-50 to-gray-100 px-4">
              <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © <span className="font-semibold text-foreground">Frovo</span> 2025
            |{" "}
            <span className="hover:text-primary transition-colors duration-300 cursor-default">
              All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
