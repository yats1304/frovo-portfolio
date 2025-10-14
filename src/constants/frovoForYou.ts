import { ShoppingCart, Store, TrendingUp, LucideIcon } from "lucide-react";

export interface UserType {
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  cta: string;
  ctaLink: string;
  iconBg: string;
}

export const USER_TYPES: UserType[] = [
  {
    title: "For Consumers",
    icon: ShoppingCart,
    description: "Your essentials, anytime, anywhere",
    benefits: [
      "24/7 access to food, drinks, and essentials",
      "Emergency kids' or pet supplies at odd hours",
      "Pre-order via app — no waiting",
      "Loyalty packs & discounts (app-only)",
    ],
    cta: "Grab More With the App",
    ctaLink: "#download-app",
    iconBg: "from-blue-500/20 to-blue-600/10",
  },
  {
    title: "For Shop Owners",
    icon: Store,
    description: "Keep selling, even when you're closed",
    benefits: [
      "Frovo machines act as your after-hours counter",
      "Keep selling 24/7, even while closed",
      "Track sales & refill alerts via partner app",
      "Manage sales and earnings in real-time",
    ],
    cta: "Manage With the App",
    ctaLink: "/business-solutions",
    iconBg: "from-green-500/20 to-green-600/10",
  },
  {
    title: "For Brands",
    icon: TrendingUp,
    description: "24/7 visibility + real-time insights",
    benefits: [
      "Place products in gyms, offices, co-working spaces",
      "Advertise on machine screens + inside app",
      "Get real-time sales insights via dashboard",
      "Your ad space + insights = all in Frovo App",
    ],
    cta: "Partner Through the App",
    ctaLink: "/franchise",
    iconBg: "from-purple-500/20 to-purple-600/10",
  },
];
