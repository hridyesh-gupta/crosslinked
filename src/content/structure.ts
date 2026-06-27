// Language-independent structure: ids, icons, URLs, monograms, contact endpoints.
// All human-readable copy lives in the locale dictionaries (src/i18n/dictionaries).

export type CategoryId = "ai-automation" | "website-app" | "design-branding";

export interface ServiceItemStructure {
  id: string;
  icon: string;
}

export interface ServiceCategoryStructure {
  id: CategoryId;
  icon: string;
  items: ServiceItemStructure[];
}

export const serviceStructure: ServiceCategoryStructure[] = [
  {
    id: "ai-automation",
    icon: "Bot",
    items: [
      { id: "client-generation", icon: "UserPlus" },
      { id: "calling-agents", icon: "PhoneCall" },
      { id: "workflow-automation", icon: "Workflow" },
      { id: "chatbot-website-integration", icon: "MessagesSquare" },
      { id: "agent-call-management", icon: "Headset" },
      { id: "post-counseling-integration", icon: "CalendarCheck" },
      { id: "lead-management", icon: "Users" },
    ],
  },
  {
    id: "website-app",
    icon: "MonitorSmartphone",
    items: [
      { id: "website-portfolio-development", icon: "Globe" },
      { id: "ecommerce-solutions", icon: "ShoppingCart" },
      { id: "booking-system-integration", icon: "CalendarClock" },
      { id: "website-uiux-redesign", icon: "PenTool" },
      { id: "seo-optimisation", icon: "Search" },
      { id: "app-integration", icon: "Smartphone" },
    ],
  },
  {
    id: "design-branding",
    icon: "Palette",
    items: [
      { id: "logo-brand-assets", icon: "Sparkles" },
      { id: "presentation-design", icon: "Presentation" },
      { id: "ui-ux-design", icon: "LayoutDashboard" },
    ],
  },
];

export const featureIcons = ["Clock", "ShieldCheck", "Zap", "AudioLines", "Boxes", "ChartLine"];

export const statValues = ["30+", "12+", "27%"];

export interface Client {
  name: string;
  monogram: string;
  url: string;
}

export const clients: Client[] = [
  { name: "SPS Les Vergers", monogram: "SPS", url: "https://readdy.link/preview/199dc748-0611-494c-a174-512e89cd425a/1674724" },
  { name: "Prince Limousine Cars", monogram: "PL", url: "https://prince-car.vercel.app/" },
  { name: "Royal Star Restaurant", monogram: "RS", url: "https://royal-star.ch/" },
  { name: "Google Developer Group — Prayagraj", monogram: "GDG", url: "https://gdgprayagraj.com/" },
  { name: "Bhaktimay", monogram: "BM", url: "https://www.bhaktimay.in/" },
  { name: "CERN", monogram: "CERN", url: "https://home.cern/" },
  { name: "Nirvana Restaurant", monogram: "NR", url: "https://new.nirvana-geneve.ch/" },
  { name: "WikiClub Tech", monogram: "WCT", url: "https://www.wikiclubtech.org/" },
  { name: "United Group of Institutions", monogram: "UGI", url: "https://uitmap.com/" },
  { name: "Imani Food", monogram: "IF", url: "https://imani-food.vercel.app/" },
  { name: "Devfest Prayagraj", monogram: "DP", url: "https://devfest.gdgprayagraj.com/" },
  { name: "La-Meyrinoise", monogram: "LM", url: "https://la-meyrinoise.vercel.app/" },
  { name: "Meyrin-Vergers Pharmacy", monogram: "MV", url: "https://meyrin-vergers.vercel.app/" },
  { name: "La-Voie Lactée", monogram: "LV", url: "https://la-voie-lactee.vercel.app/" },
];

export interface TestimonialMeta {
  id: string;
  name: string;
  org: string;
  monogram: string;
}

// `id` keys the translated quote in each dictionary's `testimonials.quotes`.
export const testimonialMeta: TestimonialMeta[] = [
  { id: "sps", name: "Alex Martin", org: "SPS Les Vergers", monogram: "SPS" },
  { id: "prince", name: "Prince Rodríguez", org: "Prince Limousine Cars", monogram: "PL" },
  { id: "nirvana", name: "Micco Stahel", org: "Nirvana Restaurant", monogram: "NR" },
  { id: "bhaktimay", name: "Rohan Mehta", org: "Bhaktimay", monogram: "BM" },
  { id: "royalstar", name: "Michael Koch", org: "Royal Star Restaurant", monogram: "RS" },
  { id: "gdg", name: "Vivek Kumar", org: "Google Developer Group — Prayagraj", monogram: "GDG" },
  { id: "cern", name: "Marie Dubois", org: "CERN", monogram: "CERN" },
  { id: "wikiclub", name: "Ankit", org: "WikiClub Tech", monogram: "WCT" },
  { id: "ugi", name: "Gaurav Gulati", org: "United Group of Institutions", monogram: "UGI" },
  { id: "imani", name: "Imani K.", org: "Imani Food", monogram: "IF" },
  { id: "devfest", name: "Aditya Jain", org: "Devfest Prayagraj", monogram: "DP" },
  { id: "meyrinoise", name: "Claire Moreau", org: "La-Meyrinoise", monogram: "LM" },
  { id: "pharmacy", name: "Dr. Lucas Meyer", org: "Meyrin-Vergers Pharmacy", monogram: "MV" },
  { id: "voielactee", name: "Sophie Bernard", org: "La-Voie Lactée", monogram: "LV" },
];

export const site = {
  name: "Crosslinked",
  wordmark: { base: "Cross", accent: "linked" },
  domain: "crosslinked.ai",
  url: "https://crosslinked.ai",
  contact: {
    phone: "+41772908325",
    phoneDisplay: "+41 77 290 83 25",
    email: "hello@crosslinked.ai",
    whatsapp: "41772908325",
    calendly: "https://calendly.com/hridyesh-gupta1206/new-meeting",
    deepDivePrice: "$250",
  },
} as const;

export const navHrefs = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "results", href: "/results" },
  { key: "contact", href: "/contact" },
] as const;
