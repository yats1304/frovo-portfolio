"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_ITEMS, NAV_SECTIONS } from "@/constants/navigation";

export default function NavbarDesktop() {
  const [activeSection, setActiveSection] = useState("");

  // Track active section on scroll
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
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return activeSection === "/" || activeSection === "";
    }
    return activeSection === href;
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-white/20 hidden lg:block">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 h-18 flex justify-between items-center">
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

        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-primary/10 hover:text-primary"
                    } focus:bg-primary/10 focus:text-primary focus:outline-none`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
                    )}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
