import { IconType } from "react-icons";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

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
  icon: IconType;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Facebook", icon: FaFacebook, href: "#" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
];
