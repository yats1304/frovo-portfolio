// Business Locations
export interface BusinessLocation {
  icon: string;
  name: string;
}

export const BUSINESS_LOCATIONS: BusinessLocation[] = [
  { icon: "/icons/office_icon.svg", name: "Offices" },
  { icon: "/icons/gym_icon.svg", name: "Gyms" },
  { icon: "/icons/co-working_icon.svg", name: "Co-working spaces" },
  { icon: "/icons/apartment_icon.svg", name: "Service apartments" },
  { icon: "/icons/petrol_pump_icon.svg", name: "Petrol pumps" },
  { icon: "/icons/college_icon.svg", name: "Colleges & Campuses" },
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
