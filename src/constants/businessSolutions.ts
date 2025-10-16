import {
  Building2,
  Dumbbell,
  Briefcase,
  Home,
  Fuel,
  GraduationCap,
  DollarSign,
  Handshake,
  LucideIcon,
} from "lucide-react";

// Business Locations
export interface BusinessLocation {
  icon: LucideIcon;
  name: string;
}

export const BUSINESS_LOCATIONS: BusinessLocation[] = [
  { icon: Building2, name: "Offices" },
  { icon: Dumbbell, name: "Gyms" },
  { icon: Briefcase, name: "Co-working spaces" },
  { icon: Home, name: "Service apartments" },
  { icon: Fuel, name: "Petrol pumps" },
  { icon: GraduationCap, name: "Colleges & Campuses" },
];

// Business Models
export interface BusinessModel {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    title: "Rental Model",
    description: "Fixed monthly fee",
    icon: DollarSign,
  },
  {
    title: "Revenue Sharing",
    description: "Earn along with Frovo",
    icon: Handshake,
  },
];

// Slideshow Images
export interface BusinessImage {
  src: string;
  alt: string;
  label: string;
}

export const BUSINESS_IMAGES: BusinessImage[] = [
  {
    src: "/images/office_image.webp",
    alt: "Frovo machine in office",
    label: "Offices",
  },
  {
    src: "/images/gym_image.webp",
    alt: "Frovo machine in gym",
    label: "Gyms",
  },
  {
    src: "/images/campus_image.webp",
    alt: "Frovo machine in campus",
    label: "Campus",
  },
];

// Special note
export const BUSINESS_SPECIAL_NOTE =
  "Your community + Frovo app = instant 24/7 convenience.";
