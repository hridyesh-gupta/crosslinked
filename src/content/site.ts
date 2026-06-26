// Brand-level facts for Crosslinked. Single source of truth for name,
// contact endpoints, and navigation. Marketing copy lives in home.ts /
// services.ts / results.ts.

export const site = {
  name: "Crosslinked",
  // Wordmark renders as `Cross` + accent `linked`.
  wordmark: { base: "Cross", accent: "linked" },
  domain: "crosslinked.ai",
  url: "https://crosslinked.ai",
  tagline: "Where business meets intelligence.",
  description:
    "Crosslinked helps businesses automate operations, manage clients, and generate consistent leads using intelligent AI systems, web & app development, and design — built for measurable impact.",
  contact: {
    phone: "+41772908325",
    phoneDisplay: "+41 77 290 83 25",
    email: "hello@crosslinked.ai",
    // wa.me expects the number without "+" or spaces.
    whatsapp: "41772908325",
    whatsappPrefill:
      "Hi Crosslinked! I’d like to know more about your services.",
    calendly: "https://calendly.com/hridyesh-gupta1206/new-meeting",
    deepDivePrice: "$250",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
] as const;

export const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappPrefill,
)}`;
