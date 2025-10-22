"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, NAV_SECTIONS } from "@/constants/navigation";

export default function NavbarDesktop() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Active scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      NAV_ITEMS.forEach((item) => {
        if (item.href.startsWith("#")) {
          const element = document.querySelector(item.href);
          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY;
            const bottom = top + element.clientHeight;
            if (scrollPosition >= top && scrollPosition < bottom) {
              setActiveSection(item.href);
            }
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
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
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100 shadow-[0_1px_10px_rgba(255,107,43,0.05)]">
      <nav className="max-w-[1300px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleClick(e, "/")}
          className="flex items-center space-x-2"
        >
          <Image
            src="/images/temp_logo.png"
            alt="Frovo Logo"
            width={110}
            height={50}
            className="h-10 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-2 py-1 text-[15px] font-medium transition-all duration-300 ${
                  activeSection === item.href ||
                  (item.href === "/" && activeSection === "")
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                {item.name}
                {(activeSection === item.href ||
                  (item.href === "/" && activeSection === "")) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-lime-500 rounded-full transition-all duration-500" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-600 hover:text-orange-700 transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 backdrop-blur-md">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    handleClick(e, item.href);
                    setIsOpen(false);
                  }}
                  className="text-gray-800 hover:text-orange-600 text-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
