export interface CareerRole {
  role: string;
  department: string;
  description: string;
}

export const CAREER_ROLES: CareerRole[] = [
  {
    role: "Full Stack Developer",
    department: "Engineering",
    description:
      "Build scalable web and mobile solutions for our vending ecosystem.",
  },
  {
    role: "IoT Engineer",
    department: "Hardware",
    description:
      "Work on smart vending machine hardware and connectivity systems.",
  },
  {
    role: "Product Manager",
    department: "Product",
    description:
      "Drive product strategy and roadmap for our AI-powered platform.",
  },
  {
    role: "Operations Manager",
    department: "Operations",
    description:
      "Oversee machine deployment, maintenance, and supply chain logistics.",
  },
  {
    role: "Marketing Specialist",
    department: "Marketing",
    description: "Create campaigns to grow our user base and brand awareness.",
  },
  {
    role: "Customer Support Lead",
    department: "Support",
    description: "Ensure excellent customer experience across all touchpoints.",
  },
];
