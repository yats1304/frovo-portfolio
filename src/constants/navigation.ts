export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Frovo For You", href: "#for-you" },
  { name: "Franchise", href: "#franchise" },
  { name: "Business Solutions", href: "#business-solutions" },
  { name: "About Us", href: "#about-us" },
  { name: "Careers", href: "#careers" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contacts", href: "#contact" },
];

export const NAV_SECTIONS: string[] = [
  "how-it-works",
  "for-you",
  "franchise",
  "business-solutions",
  "about-us",
  "careers",
  "faqs",
  "contact",
];
