// Homepage + shared marketing copy for Crosslinked (ported verbatim from the
// source HridxAI copy, rebranded). Service descriptions live in services.ts.

export const hero = {
  eyebrow: "AI automation · web · design",
  badge: "We craft solutions that convert.",
  title: "Where business meets intelligence.",
  titleAccent: "intelligence.",
  subtitle:
    "Crosslinked helps businesses automate operations, manage clients efficiently, and generate consistent leads using intelligent AI systems designed for measurable impact.",
  primaryCta: { label: "Book a free discovery call", href: "/contact" },
  secondaryCta: { label: "Explore our services", href: "/services" },
  microDetails: [
    "ROI-focused solutions",
    "Fast deployment timelines",
    "Secure AI workflows",
  ],
  diagram: ["Lead", "AI qualifies", "Agent", "Closed"],
} as const;

export const stats = [
  {
    value: "30+",
    label:
      "clients closed across restaurants, professional services, education, and more.",
  },
  {
    value: "12+",
    label:
      "recurring clients on our monthly automation, marketing, and growth services.",
  },
  {
    value: "27%",
    label:
      "average profit uplift companies see after implementing our systems.",
  },
] as const;

export const features = [
  {
    title: "24/7 Availability",
    description:
      "AI agents that never sleep, always ready to engage — 99.9% uptime.",
    icon: "Clock",
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance-minded workflows. SOC 2 ready.",
    icon: "ShieldCheck",
  },
  {
    title: "Lightning Fast",
    description: "Optimized response times for seamless customer experiences.",
    icon: "Zap",
  },
  {
    title: "AI Voice Intelligence",
    description: "Natural conversations that convert prospects to customers.",
    icon: "AudioLines",
  },
  {
    title: "MVP Excellence",
    description: "Clean, scalable architecture from day one.",
    icon: "Boxes",
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance metrics and ROI continuously.",
    icon: "ChartLine",
  },
] as const;

export const process = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "Understand business objectives, assess current systems, and define measurable ROI goals.",
  },
  {
    number: "02",
    title: "Automation Design",
    description:
      "Map workflows, select tools, and design AI systems that integrate seamlessly into existing infrastructure.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Build, train, and deploy AI agents or automation modules while ensuring compliance and scalability.",
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description:
      "Monitor results, iterate on data feedback, and expand automation layers as ROI grows.",
  },
] as const;

export const processMeta = {
  timelineLead: "Average project timeline: 3–6 weeks",
  timelineNote: "Voice agents typically deploy in 7–14 days.",
} as const;

export const faqs = [
  {
    question: "Is this custom?",
    answer:
      "Yes. We scope to ROI, not retainers. Your stack, your use cases. Every solution is tailored to your specific business needs and technical requirements.",
  },
  {
    question: "Voice agent or human?",
    answer:
      "Both. AI handles routine volume and instant responses; humans close nuance. This hybrid approach ensures efficiency while maintaining the personal touch for complex interactions.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Voice agents typically take 7–14 days, while the rest of our services take 3–6 weeks depending on the size of the project. We prioritize rapid deployment without compromising quality or security.",
  },
  {
    question: "Security & data?",
    answer:
      "We use clean, reviewable workflows and compliance-minded processes. You keep control of data and access. Bank-grade encryption and SOC 2 ready infrastructure.",
  },
  {
    question: "What tech stacks do you support?",
    answer:
      "We generally support all tech stacks including CRM (HubSpot/Salesforce/Pipedrive, etc.), calendars, telephony/SIP, WhatsApp/SMS, helpdesks, and modern app infra. If you have another stack, just let us know and we’ll try our best to integrate it.",
  },
] as const;

export const booking = {
  expectations: [
    "ROI-based approach, not retainers",
    "Fast setup for automations and voice agents",
    "Transparent pricing, no hidden layers",
    "Direct access to your project engineer",
    "Scalable systems for future expansion",
  ],
  discovery: {
    title: "Free Discovery Call",
    duration: "30 minutes",
    body: "Explore your needs, discuss potential solutions, and determine if we’re a good fit. No commitment required.",
    cta: "Schedule free call",
  },
  deepDive: {
    title: "Strategy Deep-Dive",
    duration: "90 minutes",
    body: "Comprehensive session with technical scoping, ROI projections, and a custom implementation roadmap. Refundable if you proceed with a project.",
    cta: "Book deep-dive session",
  },
} as const;

export const security = {
  title: "Enterprise-grade security",
  body: "Bank-grade encryption, compliance-minded workflows, and reviewable automations. You keep control of your data and access — SOC 2 ready.",
  points: ["Bank-grade encryption", "Compliance-minded", "SOC 2 ready"],
} as const;
