import { LucideIcon } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";


// Quick Links
export interface FooterLink {
  name: string;
  href: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Frovo For You", href: "#for-you" },
  { name: "Franchise", href: "#franchise" },
  { name: "About Us", href: "#about-us" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

// Social Links
export interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];
