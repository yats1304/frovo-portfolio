"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, NAV_SECTIONS } from "@/constants/navigation";

export default function NavbarDesktop() {
  const [activeSection, setActiveSection] = useState("");

  // Active scroll tracker with NAV_SECTIONS
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = NAV_SECTIONS[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${sectionId}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Handle Home link
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("/");
      return;
    }

    // Handle section links
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="hidden lg:block fixed top-0 w-full z-50 bg-gradient-to-r from-[#FFF5F0]/95 via-white/95 to-[#FFFAF7]/95 backdrop-blur-lg border-b border-orange-100 shadow-[0_1px_10px_rgba(255,107,43,0.05)]">
      <nav className="max-w-[1300px] mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleClick(e, "/")}
          className="flex items-center space-x-2 group"
        >
          <Image
            src="/images/logo.svg"
            alt="Frovo Logo"
            width={80}
            height={60}
            className="h-10 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-2 py-1 text-[15px] font-medium transition-all duration-300 ${
                  activeSection === item.href ||
                  (item.href === "/" && activeSection === "")
                    ? "text-[#FF6B2B]"
                    : "text-gray-700 hover:text-[#FF6B2B]"
                }`}
              >
                {item.name}
                {(activeSection === item.href ||
                  (item.href === "/" && activeSection === "")) && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-500"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #FF6B2B, #FFD700)",
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
