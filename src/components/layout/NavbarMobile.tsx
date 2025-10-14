"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NAV_ITEMS, NAV_SECTIONS } from "@/constants/navigation";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return activeSection === "/" || activeSection === "";
    }
    return activeSection === href;
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-white/20 lg:hidden">
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/temp_logo.png"
              alt="Frovo Logo"
              width={80}
              height={28}
              className="object-contain h-7"
              priority
            />
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                className="relative h-12 w-12 rounded-xl hover:bg-primary/10 hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <Menu
                    className="h-7 w-7 text-primary group-hover:text-primary transition-colors"
                    strokeWidth={2.5}
                  />
                  <span className="absolute inset-0 rounded-xl bg-primary/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] sm:w-[400px] p-0 border-l-0 [&>button]:hidden flex flex-col"
            >
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
              </VisuallyHidden>

              <div className="relative bg-gradient-to-br from-primary via-blue-600 to-primary p-6 pb-8 overflow-hidden flex-shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group hover:scale-110 border border-white/20"
                  aria-label="Close menu"
                  type="button"
                >
                  <X
                    className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300"
                    strokeWidth={2.5}
                  />
                </button>

                <div className="pr-12">
                  <h2 className="text-2xl font-bold text-white font-poppins mb-2">
                    Menu
                  </h2>
                  <p className="text-white/90 text-sm">
                    Discover Frovo&apos;s smart vending solutions
                  </p>
                </div>
              </div>

              <nav className="flex flex-col px-4 py-6 space-y-2 overflow-y-auto flex-1">
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`group relative px-3.5 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 overflow-hidden animate-slideIn shadow-sm ${
                      isActive(item.href)
                        ? "bg-primary/20 border-primary/40"
                        : "bg-white/60 border-white/20 hover:bg-primary/10 hover:border-primary/30"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex items-center justify-between">
                      <span
                        className={`text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-primary font-semibold"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </span>
                      <svg
                        className={`w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ${
                          isActive(item.href)
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary"
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    <div
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transition-opacity duration-300 ${
                        isActive(item.href)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              <div className="mx-6 border-t border-border flex-shrink-0" />

              <div className="p-6 space-y-3 flex-shrink-0">
                <Button
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      handleNavClick(e, "#contact");
                      setIsOpen(false);
                    }}
                  >
                    <span>Contact Us</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link
                    href="#franchise"
                    onClick={(e) => {
                      handleNavClick(e, "#franchise");
                      setIsOpen(false);
                    }}
                  >
                    Become a Partner
                  </Link>
                </Button>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm p-4 border-t border-white/10 flex-shrink-0">
                <p className="text-xs text-muted-foreground text-center">
                  &copy; 2025 Frovo. All rights reserved.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out both;
        }
      `}</style>
    </>
  );
}
