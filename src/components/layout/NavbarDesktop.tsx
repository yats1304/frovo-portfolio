"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS, NAV_SECTIONS } from "@/constants/navigation";

export default function NavbarDesktop() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll tracker: detect scroll position + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const scrollPosition = window.scrollY + 100;

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
    href: string,
  ) => {
    if (href === "/") {
      e.preventDefault();
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("/");
      }
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        const target = document.querySelector(href);
        if (target) {
          const offset = 0;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* 1. Static Logo that stays on the hero page */}
      <div className="hidden lg:flex absolute top-0 left-0 w-full z-[60] justify-center pointer-events-none">
        <div className="w-full max-w-[1300px] px-8 py-5 flex items-center justify-start pointer-events-none">
          <Link
            href="/"
            onClick={(e) => handleClick(e, "/")}
            className="flex items-center space-x-2 group pointer-events-auto"
          >
            <Image
              src="/images/logo.svg"
              alt="Frovo Logo"
              width={100}
              height={60}
              className="object-contain group-hover:scale-105 transition-transform duration-500 h-10"
            />
          </Link>
        </div>
      </div>

      {/* 2. Fixed Navbar (Links only) that stays at the top */}
      <header
        className={`hidden lg:flex fixed top-0 left-0 w-full z-50 justify-center transition-all duration-500 ease-in-out pointer-events-none ${
          scrolled ? "pt-3" : "pt-0"
        }`}
      >
        <nav
          className={`pointer-events-auto flex items-center transition-all duration-500 ease-in-out ${
            scrolled
              ? "justify-center w-max px-10 py-3 rounded-full backdrop-blur-2xl shadow-[0_8px_40px_rgba(255,107,43,0.15),0_2px_12px_rgba(0,0,0,0.10)] border border-white/40"
              : "justify-end w-full max-w-[1300px] px-8 py-5 rounded-none border-b border-white/20 shadow-none backdrop-blur-md"
          }`}
          style={{
            background: scrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,240,230,0.70) 100%)"
              : "linear-gradient(180deg, rgba(255,237,229,0.55) 0%, rgba(255,255,255,0.10) 100%)",
          }}
        >
          {/* Desktop Nav */}
          <ul className="flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="whitespace-nowrap">
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-2 py-1 text-[15px] font-medium transition-all duration-300 ${
                    (item.name === "Careers" && pathname === "/jobs") ||
                    (pathname === "/" &&
                      (activeSection === item.href ||
                        (item.href === "/" && activeSection === "")))
                      ? "text-[#FF6B2B]"
                      : scrolled
                        ? "text-gray-800 hover:text-[#FF6B2B]"
                        : "text-gray-700 hover:text-[#FF6B2B]"
                  }`}
                >
                  {item.name}
                  {((item.name === "Careers" && pathname === "/jobs") ||
                    (pathname === "/" &&
                      (activeSection === item.href ||
                        (item.href === "/" && activeSection === "")))) && (
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
    </>
  );
}
