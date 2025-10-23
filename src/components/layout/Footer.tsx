"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

// Footer links
const FOOTER_LINKS = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  //{ name: "Franchise", href: "#franchise" },
  { name: "Business Solutions", href: "#business-solutions" },
  { name: "About Us", href: "#about-us" },
  { name: "Careers", href: "#careers" },
  { name: "Contacts", href: "#contact" },
];

export default function Footer() {
  //smooth scrolling to home page
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF5F0] via-[#FFFAF7] to-white border-t border-orange-100 overflow-hidden">
      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#FF6B2B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-16 md:pt-20 pb-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              onClick={handleClick}
              className="inline-flex items-center gap-2 mb-4 group"
            >
              <Image
                src="/images/logo.svg"
                alt="Frovo Logo"
                width={120}
                height={50}
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
              AI-powered vending machines making daily essentials available
              anytime, anywhere.
            </p>
            {/* Social Media Icons */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/frovo.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/instagram_logo.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/frovo/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/icons/linkedin_logo.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                  />
                </a>

                <a
                  href="https://www.youtube.com/@frovo_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10"
                  aria-label="YouTube"
                >
                  <Image
                    src="/icons/youtube_logo.svg"
                    alt="YouTube"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-5 text-foreground relative inline-block">
              Quick Links
              <span
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(to right, #FF6B2B, transparent)",
                }}
              ></span>
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#FF6B2B] transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-5 text-foreground relative inline-block">
              Get in Touch
              <span
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(to right, #FF6B2B, transparent)",
                }}
              ></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Image
                  src="/icons/location_icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Image
                  src="/icons/email_icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <a
                  href="mailto:hello@frovo.in"
                  className="text-sm text-muted-foreground hover:underline underline-offset-4 break-all transition-colors duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FF6B2B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                  }}
                >
                  hello@frovo.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Image
                  src="/icons/phone_icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <a
                  href="tel:+919035598876"
                  className="text-sm text-muted-foreground hover:underline underline-offset-4 transition-colors duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FF6B2B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                  }}
                >
                  +91-9035598876
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-5 text-foreground relative inline-block">
              Download App
              <span
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(to right, #FF6B2B, transparent)",
                }}
              ></span>
            </h3>

            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Get exclusive offers
            </p>

            <div className="flex flex-col gap-3 max-w-[200px]">
              {/* Google Play Button */}
              <a target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative flex items-center gap-2 h-12 px-3.5 bg-black hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  <svg
                    className="w-6 h-6 flex-shrink-0 relative z-10"
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

                  <div className="flex flex-col items-start relative z-10 flex-1">
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
              <a target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative flex items-center gap-2 h-12 px-3.5 bg-black hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  <svg
                    className="w-6 h-6 flex-shrink-0 text-white relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>

                  <div className="flex flex-col items-start relative z-10 flex-1">
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
            <div className="w-full border-t border-orange-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-[#FFF5F0] via-[#FFFAF7] to-white px-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgba(255, 107, 43, 0.4)" }}
              ></div>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © <span className="font-semibold text-foreground">Frovo</span> 2025
            |{" "}
            <span
              className="transition-colors duration-300 cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FF6B2B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
