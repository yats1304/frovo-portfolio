

export interface HowItWorksStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    icon: "/icons/shopping_icon.svg",
    title: "Select Items",
    description:
      "Browse products directly on the Frovo machine or via the app.",
  },
  {
    number: "02",
    icon: "/icons/cashless_icon.svg",
    title: "Pay Instantly",
    description: "Use UPI, QR, card, wallet, or subscription pack.",
  },
  {
    number: "03",
    icon: "/icons/smartphone_icon.svg",
    title: "Receive Code",
    description: "Get a unique pickup code via the app.",
  },
  {
    number: "04",
    icon: "/icons/package_icon.svg",
    title: "Collect Products",
    description: "Enter/scan code at machine and grab your items instantly.",
  },
];
