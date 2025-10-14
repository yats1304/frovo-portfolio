"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 overflow-hidden">
      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-12 pb-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
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
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-2.5">
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

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground relative inline-block">
              More
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-2.5">
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
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@frovo.in"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
                >
                  contact@frovo.in
                </a>
              </li>
              <li className="flex items-start gap-2">
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
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-4">
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
