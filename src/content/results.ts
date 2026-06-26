// Real clients and testimonials (ported from the source site, rebranded to
// Crosslinked). Monograms render in the client wall.

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

export interface Testimonial {
  name: string;
  org: string;
  monogram: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alex Martin",
    org: "SPS Les Vergers",
    monogram: "SPS",
    quote:
      "Crosslinked automated our lead capture, follow-ups, and reminders. Phone and WhatsApp flows now run on autopilot, and our calendar stays full without us manually chasing every enquiry.",
  },
  {
    name: "Prince Rodríguez",
    org: "Prince Limousine Cars",
    monogram: "PL",
    quote:
      "With the new website and booking system Crosslinked built for us, most enquiries are handled instantly. Bookings sync automatically, and our team can focus on delivering a great ride.",
  },
  {
    name: "Micco Stahel",
    org: "Nirvana Restaurant",
    monogram: "NR",
    quote:
      "Crosslinked gave us a modern website with integrated booking and automated reviews. We see more direct reservations and better repeat visits without extra marketing effort.",
  },
  {
    name: "Rohan Mehta",
    org: "Bhaktimay",
    monogram: "BM",
    quote:
      "Their digital marketing and automation stack manages our enquiries, WhatsApp conversations, and online sessions. Our team spends more time with students and less on admin work.",
  },
  {
    name: "Michael Koch",
    org: "Royal Star Restaurant",
    monogram: "RS",
    quote:
      "We combined a fresh web presence from Crosslinked with automated follow-ups and feedback collection. Table occupancy and online orders have both increased without hiring more staff.",
  },
  {
    name: "Vivek Kumar",
    org: "Google Developer Group — Prayagraj",
    monogram: "GDG",
    quote:
      "Crosslinked helped us with event websites, registration funnels, and automated communication. Organising GDG Prayagraj events is smoother now because routine coordination is handled for us.",
  },
  {
    name: "Marie Dubois",
    org: "CERN",
    monogram: "CERN",
    quote:
      "Working with Crosslinked on web and tooling upgrades helped us present complex programmes more clearly. Visitors and participants get a fast, reliable experience that reflects our standards.",
  },
  {
    name: "Ankit",
    org: "WikiClub Tech",
    monogram: "WCT",
    quote:
      "Our community events, registrations, and outreach are much easier to manage now. Crosslinked’s web and automation support keeps our members informed and engaged with far less manual work.",
  },
  {
    name: "Gaurav Gulati",
    org: "United Group of Institutions",
    monogram: "UGI",
    quote:
      "The digital experiences and integrations Crosslinked built make it easier for students to discover programmes and stay updated. We finally have a setup that can grow with us.",
  },
  {
    name: "Imani K.",
    org: "Imani Food",
    monogram: "IF",
    quote:
      "Our new website and branding from Crosslinked showcase our products beautifully. Orders are easier to capture and track, and we have a clear view of customers from first enquiry to repeat buys.",
  },
  {
    name: "Aditya Jain",
    org: "Devfest Prayagraj",
    monogram: "DP",
    quote:
      "For Devfest Prayagraj, the event website and automation flows handled registrations, reminders, and updates. The event felt much more organised and participation was higher than before.",
  },
  {
    name: "Claire Moreau",
    org: "La-Meyrinoise",
    monogram: "LM",
    quote:
      "Crosslinked created a clean, modern digital presence for us. Our offer is easier to understand online, and we are seeing more inbound interest from local customers.",
  },
  {
    name: "Dr. Lucas Meyer",
    org: "Meyrin-Vergers Pharmacy",
    monogram: "MV",
    quote:
      "The clear and trustworthy web experience Crosslinked built, plus simple automation, makes it easier for patients to find information and reach out. It reflects the level of care we aim to provide.",
  },
  {
    name: "Sophie Bernard",
    org: "La-Voie Lactée",
    monogram: "LV",
    quote:
      "Our concept is now presented beautifully online. Crosslinked gave us a strong brand and web foundation, and we feel ready to add more automation and growth campaigns on top.",
  },
];
