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
  SheetDescription,
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
      <header className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-200 lg:hidden">
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
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
                className="h-10 w-10 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Menu className="h-6 w-6 text-primary" strokeWidth={2.5} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] sm:w-[380px] p-0 border-l border-gray-200 bg-white flex flex-col [&>button]:hidden will-change-transform"
            >
              {/* Accessibility Headers - Hidden but present for screen readers */}
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Browse Frovo&apos;s main navigation links, discover our
                    vending solutions, and access contact information.
                  </SheetDescription>
                </SheetHeader>
              </VisuallyHidden>

              {/* Visible Header */}
              <div className="relative bg-gradient-to-br from-primary via-blue-600 to-primary p-5 pb-6 flex-shrink-0">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
                  aria-label="Close menu"
                  type="button"
                >
                  <X className="h-5 w-5 text-white" strokeWidth={2.5} />
                </button>

                <div className="pr-10">
                  <h2 className="text-xl font-bold text-white font-poppins mb-1">
                    Menu
                  </h2>
                  <p className="text-white/90 text-xs">
                    Discover Frovo&apos;s smart vending solutions
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav
                className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 bg-white"
                aria-label="Main navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`group px-3.5 py-3 rounded-lg border flex items-center justify-between ${
                      isActive(item.href)
                        ? "bg-primary/10 border-primary/30"
                        : "bg-gray-50 border-gray-200 active:bg-primary/10"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span
                      className={`text-sm font-medium ${
                        isActive(item.href)
                          ? "text-primary font-semibold"
                          : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </span>
                    <svg
                      className={`w-4 h-4 ${
                        isActive(item.href) ? "text-primary" : "text-gray-400"
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div
                className="h-px bg-gray-200 mx-5 flex-shrink-0"
                role="separator"
              />

              {/* CTA Buttons */}
              <div className="p-5 space-y-2.5 flex-shrink-0 bg-white">
                <Button
                  className="w-full h-11 text-sm font-semibold bg-gradient-to-r from-primary to-blue-600 shadow-md"
                  asChild
                >
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      handleNavClick(e, "#contact");
                      setIsOpen(false);
                    }}
                  >
                    Contact Us →
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-11 text-sm font-semibold border-2 border-primary"
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

              {/* Footer */}
              <div className="bg-gray-50 py-3 border-t border-gray-200 flex-shrink-0">
                <p className="text-xs text-gray-500 text-center">
                  &copy; 2025 Frovo. All rights reserved.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <style jsx global>{`
        /* Override default Radix animations completely */
        [data-radix-dialog-overlay] {
          animation: overlayFadeIn 0.25s ease-out !important;
        }

        [data-radix-sheet-content] {
          /* Cancel default slide */
          animation: menuFadeIn 0.3s ease-out !important;
          /* Keep it in place - no sliding */
          transform: translateX(0) !important;
          right: 0 !important;
        }

        /* Closing animations */
        [data-radix-dialog-overlay][data-state="closed"] {
          animation: overlayFadeOut 0.3s ease-in !important;
        }

        [data-radix-sheet-content][data-state="closed"] {
          animation: menuFadeOut 0.3s ease-in !important;
        }

        /* Fade in animations */
        @keyframes overlayFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes menuFadeIn {
          from {
            opacity: 0;
            transform: translateX(0) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* Fade out animations */
        @keyframes overlayFadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes menuFadeOut {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(0) scale(0.98);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }

          [data-radix-sheet-content] {
            /* Force position - prevent sliding */
            position: fixed !important;
            right: 0 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}
