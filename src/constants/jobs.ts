export interface JobsRole {
  role: string;
  department: string;
  description: string;
  location: string;
  employmentType: string;
}

export const JOBS_ROLES: JobsRole[] = [
  {
    role: "Full Stack Developer",
    department: "Engineering",
    description:
      "Build scalable web and mobile solutions for our vending ecosystem.",
    location: "Bangalore, India",
    employmentType: "Remote",
  },
  {
    role: "IoT Engineer",
    department: "Hardware",
    description:
      "Work on smart vending machine hardware and connectivity systems.",
    location: "Bangalore, India",
    employmentType: "Full time",
  },
  {
    role: "Product Manager",
    department: "Product",
    description:
      "Drive product strategy and roadmap for our AI-powered platform.",
    location: "Bangalore, India",
    employmentType: "Full time",
  },
  {
    role: "Operations Manager",
    department: "Operations",
    description:
      "Oversee machine deployment, maintenance, and supply chain logistics.",
    location: "Bangalore, India",
    employmentType: "Full time",
  },
  {
    role: "Marketing Specialist",
    department: "Marketing",
    description: "Create campaigns to grow our user base and brand awareness.",
    location: "Remote",
    employmentType: "Full time",
  },
  {
    role: "Customer Support Lead",
    department: "Support",
    description: "Ensure excellent customer experience across all touchpoints.",
    location: "Bangalore, India",
    employmentType: "Full time",
  },
];
