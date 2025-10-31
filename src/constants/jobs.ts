export interface JobsRole {
  role: string;
  department: string;
  description: string;
  location: string;
  employmentType: string;
  requirements: string[];
  responsibilities: string[];
  compensation: string;
  benefits?: string[];
}

export const JOBS_ROLES: JobsRole[] = [
  {
    role: "Full Stack Developer",
    department: "Engineering",
    description:
      "We're looking for a talented Full Stack Developer who is passionate about building scalable web and mobile solutions for our smart vending ecosystem. You'll work closely with product managers, designers, and engineers to deliver high-performance features while maintaining a robust, scalable codebase. Our tech stack includes React, Next.js, Node.js, and MongoDB.",
    location: "Bangalore, India",
    employmentType: "Remote",
    requirements: [
      "3+ years of full-stack development experience",
      "Strong proficiency in React, Next.js, and TypeScript",
      "Experience with Node.js and Express.js",
      "Experience with NoSQL databases like MongoDB",
      "Understanding of RESTful APIs and microservices architecture",
      "Good understanding of frontend and backend best practices",
      "Experience with Git and version control",
    ],
    responsibilities: [
      "Build and maintain scalable web applications for our vending platform",
      "Develop RESTful APIs and integrate with IoT devices",
      "Collaborate with cross-functional teams to define and implement new features",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and mentor junior developers",
      "Optimize application performance and ensure security best practices",
    ],
    compensation: "₹12-18 LPA + Equity + Benefits",
    benefits: [
      "Flexible work hours and remote work options",
      "Health insurance coverage",
      "Learning and development budget",
      "Equity participation in company growth",
    ],
  },
  {
    role: "IoT Engineer",
    department: "Hardware",
    description:
      "Join our hardware team to work on cutting-edge smart vending machine technology. You'll be responsible for designing, developing, and maintaining IoT connectivity systems, sensors, and embedded systems that power our intelligent vending machines. This role requires hands-on experience with hardware integration and cloud connectivity.",
    location: "Bangalore, India",
    employmentType: "Full time",
    requirements: [
      "3+ years of experience in IoT or embedded systems",
      "Proficiency in C/C++ and Python",
      "Experience with microcontrollers (Arduino, Raspberry Pi, ESP32)",
      "Knowledge of communication protocols (MQTT, HTTP, WebSockets)",
      "Understanding of sensor integration and data acquisition",
      "Experience with cloud IoT platforms (AWS IoT, Azure IoT)",
    ],
    responsibilities: [
      "Design and implement IoT solutions for smart vending machines",
      "Develop firmware for embedded systems and sensors",
      "Integrate hardware components with cloud platforms",
      "Monitor and troubleshoot hardware connectivity issues",
      "Collaborate with the engineering team on system architecture",
      "Ensure reliability and security of IoT devices",
    ],
    compensation: "₹10-16 LPA + Benefits",
    benefits: [
      "Work with latest IoT technologies",
      "Health and wellness benefits",
      "Professional development opportunities",
    ],
  },
  {
    role: "Product Manager",
    department: "Product",
    description:
      "We're seeking an experienced Product Manager to drive the product strategy and roadmap for our AI-powered vending platform. You'll work closely with engineering, design, marketing, and operations teams to build products that delight our customers and drive business growth. This role requires strong analytical skills, customer empathy, and the ability to make data-driven decisions.",
    location: "Bangalore, India",
    employmentType: "Full time",
    requirements: [
      "4+ years of product management experience",
      "Strong understanding of agile methodologies",
      "Experience with data analytics and A/B testing",
      "Excellent communication and stakeholder management skills",
      "Technical background or strong technical aptitude",
      "Experience in consumer tech or IoT products (preferred)",
    ],
    responsibilities: [
      "Define and execute product vision and strategy",
      "Gather and prioritize product requirements from stakeholders",
      "Create detailed product roadmaps and feature specifications",
      "Collaborate with engineering to deliver high-quality products",
      "Analyze user feedback and metrics to drive product improvements",
      "Present product updates to leadership and stakeholders",
    ],
    compensation: "₹15-25 LPA + Equity",
    benefits: [
      "Opportunity to shape product direction",
      "Competitive salary and equity",
      "Flexible work environment",
    ],
  },
  {
    role: "Operations Manager",
    department: "Operations",
    description:
      "We're looking for an Operations Manager to oversee the deployment, maintenance, and supply chain logistics of our smart vending machines across multiple locations. You'll be responsible for ensuring operational excellence, managing vendor relationships, optimizing processes, and ensuring customer satisfaction. This role requires strong organizational skills and hands-on problem-solving abilities.",
    location: "Bangalore, India",
    employmentType: "Full time",
    requirements: [
      "3+ years of operations or supply chain management experience",
      "Strong project management and coordination skills",
      "Experience with inventory management systems",
      "Excellent problem-solving and decision-making abilities",
      "Strong communication and negotiation skills",
      "Experience in retail, logistics, or field operations (preferred)",
    ],
    responsibilities: [
      "Manage deployment and installation of vending machines",
      "Coordinate maintenance schedules and resolve technical issues",
      "Optimize supply chain and inventory management processes",
      "Monitor machine performance and ensure uptime",
      "Manage relationships with vendors and service providers",
      "Analyze operational data to identify improvement opportunities",
    ],
    compensation: "₹8-14 LPA + Benefits",
    benefits: [
      "Dynamic and fast-paced work environment",
      "Health insurance coverage",
      "Performance-based bonuses",
    ],
  },
  {
    role: "Marketing Specialist",
    department: "Marketing",
    description:
      "Join our marketing team to create compelling campaigns that grow our user base and build brand awareness for Frovo. You'll be responsible for developing and executing marketing strategies across digital channels, social media, content marketing, and partnerships. This role requires creativity, data-driven thinking, and a passion for storytelling.",
    location: "Remote",
    employmentType: "Full time",
    requirements: [
      "2+ years of digital marketing experience",
      "Strong understanding of social media platforms and trends",
      "Experience with content creation and copywriting",
      "Knowledge of SEO, SEM, and email marketing",
      "Proficiency in marketing tools (Google Analytics, Meta Ads, etc.)",
      "Creative thinking and strong communication skills",
    ],
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Create engaging content for social media and website",
      "Manage social media presence and community engagement",
      "Analyze campaign performance and optimize for ROI",
      "Collaborate with design team on creative assets",
      "Identify and execute partnership opportunities",
    ],
    compensation: "₹6-10 LPA + Performance Bonuses",
    benefits: [
      "Fully remote position",
      "Creative freedom and growth opportunities",
      "Flexible work hours",
    ],
  },
  {
    role: "Customer Support Lead",
    department: "Support",
    description:
      "We're looking for a Customer Support Lead to ensure excellent customer experience across all touchpoints. You'll build and manage our customer support operations, handle escalations, and work cross-functionally to resolve customer issues. This role requires empathy, strong communication skills, and a passion for delivering exceptional service.",
    location: "Bangalore, India",
    employmentType: "Full time",
    requirements: [
      "3+ years of customer support or customer success experience",
      "Experience managing a support team (preferred)",
      "Excellent written and verbal communication skills",
      "Strong problem-solving and conflict resolution abilities",
      "Experience with support tools (Zendesk, Freshdesk, etc.)",
      "Customer-first mindset and high emotional intelligence",
    ],
    responsibilities: [
      "Manage day-to-day customer support operations",
      "Handle escalated customer issues and complaints",
      "Build and maintain support documentation and FAQs",
      "Train and mentor support team members",
      "Analyze support metrics and identify improvement areas",
      "Collaborate with product and operations teams on customer feedback",
    ],
    compensation: "₹7-12 LPA + Benefits",
    benefits: [
      "Opportunity to build support processes from ground up",
      "Health insurance and wellness benefits",
      "Career growth opportunities",
    ],
  },
];
