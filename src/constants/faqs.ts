import {
  ShoppingBag,
  Smartphone,
  Building2,
  Clock,
  LucideIcon,
} from "lucide-react";

export interface FAQ {
  icon: LucideIcon;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    icon: ShoppingBag,
    question: "What can I buy at Frovo machines?",
    answer:
      "Snacks, beverages, toiletries, baby products, pet supplies, and more.",
  },
  {
    icon: Smartphone,
    question: "Do I need the app to use Frovo?",
    answer:
      "No, you can pay by QR at machines. The app unlocks pre-orders, subscriptions, rewards, and faster pickups.",
  },
  {
    icon: Building2,
    question: "Can I install a Frovo machine at my shop or office?",
    answer: "Yes! Choose rental, revenue-sharing, or franchise options.",
  },
  {
    icon: Clock,
    question: "Do Frovo machines work 24/7?",
    answer: "Always. Rain or shine.",
  },
];

export const FAQ_CONTACT = {
  email: "support@frovo.in",
  message: "Still have questions?",
};
