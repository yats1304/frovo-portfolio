"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { NAV_ITEMS, NAV_SECTIONS } from "@/constants/navigation";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPosition = window.scrollY + 200;
      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(NAV_SECTIONS[i]);
        if (element) {
          const offsetTop = element.offsetTop;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + element.offsetHeight
          ) {
            setActiveSection(`#${NAV_SECTIONS[i]}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);
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
        const el = document.querySelector(href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    }
  };

  const isActive = (href: string, itemName: string) => {
    if (itemName === "Careers" && pathname === "/jobs") return true;
    if (pathname === "/") {
      if (href === "/") return activeSection === "/" || activeSection === "";
      return activeSection === href;
    }
    return false;
  };

  return (
    <>
      {/* ── Trigger bar ── */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none transition-all duration-300 ease-in-out pt-3">
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "w-[92%] max-w-[500px] px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(255,107,43,0.12),0_1px_6px_rgba(0,0,0,0.07)] border border-orange-100"
              : "w-[92%] max-w-[500px] px-5 py-3 rounded-2xl bg-white/75 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-white/60"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center"
          >
            <Image
              src="/images/logo.svg"
              alt="Frovo Logo"
              width={72}
              height={44}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Hamburger — three lines, styled */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[5px] p-1 group"
          >
            <span className="block w-5 h-[2px] rounded-full bg-gray-700 group-hover:bg-[#FF6B2B] transition-colors duration-200" />
            <span className="block w-5 h-[2px] rounded-full bg-gray-700 group-hover:bg-[#FF6B2B] transition-colors duration-200" />
          </button>
        </div>
      </header>

      {/* ── Drawer panel ── */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="top"
          className="lg:hidden w-full p-0 border-0 rounded-b-3xl shadow-2xl [&>button]:hidden"
          style={{ background: "#fff", maxHeight: "auto" }}
        >
          <VisuallyHidden>
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Browse Frovo&apos;s main navigation links.
              </SheetDescription>
            </SheetHeader>
          </VisuallyHidden>

          {/* Panel Header: logo + close */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center"
            >
              <Image
                src="/images/logo.svg"
                alt="Frovo Logo"
                width={80}
                height={48}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
            </button>
          </div>

          {/* Nav links — centered */}
          <nav className="flex flex-col items-center gap-0 py-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`w-full text-center py-4 text-[17px] font-medium transition-colors duration-200 ${
                  isActive(item.href, item.name)
                    ? "text-[#FF6B2B]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <div className="px-6 pb-8 pt-4">
            <Link
              href="/partner"
              onClick={(e) => {
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white text-[16px] font-semibold transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
              }}
            >
              Become a Partner
              <span className="text-lg leading-none">↗</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
