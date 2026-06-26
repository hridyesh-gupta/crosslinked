// Crosslinked service catalogue — three connected disciplines.
// Descriptions are kept full-length / verbatim from the source service copy.
// `icon` values map to lucide icons via src/components/Icon.tsx.

export type CategoryId = "ai-automation" | "website-app" | "design-branding";

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: CategoryId;
  label: string;
  title: string;
  description: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-automation",
    label: "AI Automation",
    title: "AI Automation",
    description:
      "Intelligent systems that capture leads, handle calls, and run your operations around the clock.",
    icon: "Bot",
    services: [
      {
        title: "Client Generation",
        description:
          "Use AI workflows to identify, engage, and convert potential clients automatically.",
        icon: "UserPlus",
      },
      {
        title: "Calling Agents",
        description:
          "Deploy voice-based AI agents to handle calls, schedule meetings, and qualify leads.",
        icon: "PhoneCall",
      },
      {
        title: "Workflow Automation",
        description:
          "Streamline repetitive business operations through intelligent, rule-based automations.",
        icon: "Workflow",
      },
      {
        title: "Chatbot Website Integration",
        description:
          "Embed AI chatbots on websites for instant customer support and inquiry management.",
        icon: "MessagesSquare",
      },
      {
        title: "Agent Call Management",
        description:
          "Route qualified leads to agents, track calls, and requeue missed follow-ups automatically.",
        icon: "Headset",
      },
      {
        title: "Post-Counseling Integration",
        description:
          "Sync meeting outcomes and follow-ups with CRM and app for easy customer onboarding.",
        icon: "CalendarCheck",
      },
      {
        title: "Lead Management",
        description:
          "Capture and manage leads from all channels with automated sequences.",
        icon: "Users",
      },
    ],
  },
  {
    id: "website-app",
    label: "Website & App",
    title: "Website & App",
    description:
      "High-performing websites, stores, and app integrations that turn visitors into customers.",
    icon: "MonitorSmartphone",
    services: [
      {
        title: "Website & Portfolio Development",
        description:
          "Build professional, high-performing websites that highlight brand identity and services.",
        icon: "Globe",
      },
      {
        title: "E-commerce Solutions",
        description:
          "Create seamless online stores with integrated payments, inventory, and automation.",
        icon: "ShoppingCart",
      },
      {
        title: "Booking System Integration",
        description:
          "Integrate booking portals on your websites for effortless appointment and service booking.",
        icon: "CalendarClock",
      },
      {
        title: "Website UI/UX Redesign",
        description:
          "Revamp existing websites with modern, conversion-focused designs.",
        icon: "PenTool",
      },
      {
        title: "SEO Optimisation",
        description:
          "Enhance visibility and ranking through on-page and technical SEO improvements.",
        icon: "Search",
      },
      {
        title: "App Integration",
        description:
          "Sync app data and user activity with CRM for a unified business tracking system.",
        icon: "Smartphone",
      },
    ],
  },
  {
    id: "design-branding",
    label: "Design & Branding",
    title: "Design & Branding",
    description:
      "A cohesive identity and interfaces that make your brand unmistakable.",
    icon: "Palette",
    services: [
      {
        title: "Logo & Brand Assets",
        description:
          "Design a cohesive brand identity that communicates your company’s values and personality.",
        icon: "Sparkles",
      },
      {
        title: "Presentation Design",
        description:
          "Craft visually impactful pitch decks and business presentations that engage audiences.",
        icon: "Presentation",
      },
      {
        title: "UI & UX Design",
        description:
          "Design intuitive, attractive, and user-focused interfaces that enhance customer experience.",
        icon: "LayoutDashboard",
      },
    ],
  },
];
