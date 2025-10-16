import { Clock, Smartphone, ShoppingBag, LucideIcon } from "lucide-react";

// Slideshow Images (NEW!)
export interface HeroImage {
  src: string;
  alt: string;
}

export const HERO_IMAGES: HeroImage[] = [
  {
    src: "/images/vending-machine-hero.webp",
    alt: "Frovo Smart Vending Machine",
  },
  {
    src: "/images/user_using_machine.webp",
    alt: "User Using Frovo Machine",
  },
  {
    src: "/images/machine_with_user.webp",
    alt: "Frovo Machine with User",
  },
  {
    src: "/images/user_collecting_item.webp",
    alt: "User Collecting Item from Frovo",
  },
];

// Ads data
export interface HeroAd {
  brand: string;
  message: string;
  tagline: string;
  logo: string;
}

export const HERO_ADS: HeroAd[] = [
  {
    brand: "Coca-Cola",
    message: "Refresh Your Day",
    tagline: "Available 24/7 in Frovo",
    logo: "🥤",
  },
  {
    brand: "Nestle",
    message: "Good Food, Good Life",
    tagline: "Snacks & Nutrition",
    logo: "🍫",
  },
  {
    brand: "Lays",
    message: "Nobody Can Eat Just One",
    tagline: "Grab Your Pack Now",
    logo: "🥔",
  },
  {
    brand: "Your Brand",
    message: "Your brand + Frovo screens",
    tagline: "= 24/7 visibility",
    logo: "📢",
  },
];

// Quick highlights data
export interface QuickHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const QUICK_HIGHLIGHTS: QuickHighlight[] = [
  {
    icon: Clock,
    title: "Always Open",
    description: "Day or night",
  },
  {
    icon: Smartphone,
    title: "Tap. Pay. Done.",
    description: "QR or app payments",
  },
  {
    icon: ShoppingBag,
    title: "For Every Need",
    description: "Snacks, kids, pets, essentials",
  },
];

// Stats data
export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  {
    value: "N/A",
    label: "Locations",
  },
  {
    value: "24/7",
    label: "Available",
  },
  {
    value: "N/A",
    label: "Happy Users",
  },
];
