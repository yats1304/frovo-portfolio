import {
  ShoppingBasket,
  CreditCard,
  Smartphone,
  PackageCheck,
  LucideIcon,
} from "lucide-react";

export interface HowItWorksStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    icon: ShoppingBasket,
    title: "Select Items",
    description:
      "Browse products directly on the Frovo machine or via the app.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Pay Instantly",
    description: "Use UPI, QR, card, wallet, or subscription pack.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Receive Code",
    description: "Get a unique pickup code via the app.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Collect Products",
    description: "Enter/scan code at machine and grab your items instantly.",
  },
];
