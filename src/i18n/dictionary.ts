import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { de } from "./dictionaries/de";

/** A heading split so one part can render in the accent gradient. */
export interface Heading {
  eyebrow?: string;
  pre?: string;
  accent?: string;
  post?: string;
  subtitle?: string;
}

export interface Dictionary {
  meta: {
    defaultTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    resultsTitle: string;
    resultsDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  nav: {
    home: string;
    services: string;
    results: string;
    contact: string;
    bookCall: string;
    menu: string;
    theme: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titlePre: string;
    titleAccent: string;
    titlePost: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    microDetails: string[];
    diagram: {
      flow: string;
      live: string;
      nodes: { label: string; meta: string }[];
      closed: { label: string; meta: string };
    };
  };
  trust: { line: string };
  stats: { label: string }[];
  servicesPreview: Heading & { servicesSuffix: string };
  features: Heading & { items: { title: string; description: string }[] };
  process: Heading & {
    steps: { number: string; title: string; description: string }[];
    timelineLead: string;
    timelineNote: string;
  };
  resultsTeaser: Heading & { readMore: string };
  security: { title: string; body: string; points: string[] };
  faq: Heading & {
    items: { question: string; answer: string }[];
    stillHaveQuestions: string;
    cta: string;
  };
  contactCta: Heading & { primaryCta: string; secondaryCta: string };
  footer: {
    tagline: string;
    services: string;
    company: string;
    contact: string;
    whatsapp: string;
    rights: string;
  };
  servicesPage: {
    header: Heading;
    categories: Record<string, { label: string; title: string; description: string }>;
    items: Record<string, { title: string; description: string }>;
  };
  resultsPage: {
    header: Heading;
    clientWall: Heading;
    testimonials: Heading;
    quotes: Record<string, string>;
  };
  contactPage: {
    header: Heading;
    discovery: { title: string; duration: string; body: string; cta: string; price: string };
    deepDive: { title: string; duration: string; body: string; cta: string };
    expectationsTitle: string;
    expectations: string[];
    directTitle: string;
    chatLabel: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successBody: string;
      subject: string;
    };
  };
  chat: { label: string };
  whatsappPrefill: string;
}

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
